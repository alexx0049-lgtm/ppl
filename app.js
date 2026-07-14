
const DATA = window.PPL_DATA;
const $ = id => document.getElementById(id);
const KEY = "pplAcademyResearchV1";
const DEFAULT = {lang:"bilingual",completed:{},scores:{},weak:[],currentChapter:1};
let state = load();
let quiz = null;

function load(){
  try { return {...DEFAULT,...JSON.parse(localStorage.getItem(KEY)||"{}")}; }
  catch(e){ return structuredClone(DEFAULT); }
}
function save(){ localStorage.setItem(KEY,JSON.stringify(state)); updateProgress(); }
function esc(s=""){ return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
function bi(ro,en,tag="span"){
  const txt = state.lang==="en" ? en : ro;
  const attr = state.lang==="bilingual" ? ` class="bi" tabindex="0" data-en="${esc(en)}"` : "";
  return `<${tag}${attr}>${esc(txt)}</${tag}>`;
}
function txt(ro,en){ return state.lang==="en" ? en : ro; }
function toast(msg){ const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600); }

function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active",n.dataset.view===id || (id==="lesson"&&n.dataset.view==="course")));
  const titles={
    overview:["PPL(A) STUDY SYSTEM","Your PPL learning cockpit"],
    course:["FLIGHT TRAINING","First 10 chapters"],
    theory:["THEORETICAL KNOWLEDGE","9-subject syllabus map"],
    review:["ADAPTIVE REVIEW","Weak areas"],
    glossary:["AVIATION ENGLISH","Glossary"],
    lesson:["FLIGHT LESSON","Study mode"]
  };
  $("kicker").textContent=titles[id][0];
  $("pageTitle").textContent=titles[id][1];
  if(id==="review") renderWeak();
  if(id==="glossary") renderGlossary($("glossarySearch").value);
  window.scrollTo({top:0,behavior:"smooth"});
}
function jump(id){ showView(id); }

function chapterProgress(id){
  const read=!!(state.completed[id]&&state.completed[id].read);
  const score=state.scores[id]||0;
  return Math.min(100,(read?55:0)+(score>=75?45:0));
}
function updateProgress(){
  const done=DATA.chapters.filter(c=>chapterProgress(c.id)===100).length;
  const avg=Math.round(DATA.chapters.reduce((a,c)=>a+chapterProgress(c.id),0)/DATA.chapters.length);
  $("sidePct").textContent=avg+"%";
  $("sideDone").textContent=`${done} / 10 complete`;
  $("sideBar").style.width=avg+"%";
  $("overallPct").textContent=avg+"%";
  $("overallText").textContent=done?`${done} chapters complete`:"Start Chapter 1";
  renderChapterCards();
  renderCourseList();
}

function sourceBadge(key){
  const s=DATA.sources[key];
  return `<span class="src ${s.tone}" tabindex="0">
    <button>${esc(s.label)}</button>
    <span class="src-tip"><b>${bi(s.title_ro,s.title_en)}</b><p>${bi(s.text_ro,s.text_en)}</p></span>
  </span>`;
}
function renderRequirements(){
  $("requirements").innerHTML=DATA.requirements.map(r=>`<article class="req"><strong>${esc(r[0])}</strong><span>${esc(r[1])}</span><small>${esc(r[2])}</small></article>`).join("");
}
function renderTrust(){
  $("trustCards").innerHTML=Object.values(DATA.sources).map(s=>`<article class="trust-card">
    <span class="pill ${s.tone}">${esc(s.label)}</span>
    <h4>${bi(s.title_ro,s.title_en)}</h4>
    <p>${bi(s.text_ro,s.text_en)}</p>
  </article>`).join("");
}
function renderChapterCards(){
  $("overviewChapters").innerHTML=DATA.chapters.map(c=>{
    const p=chapterProgress(c.id);
    return `<article class="chapter-card ${p===100?"done":""}" data-ch="${c.id}">
      <span class="num">CH ${String(c.id).padStart(2,"0")} • ${esc(c.time)}</span>
      <h4>${bi(c.title_ro,c.title_en)}</h4>
      <small>${p}% complete</small>
      <div class="mini"><i style="width:${p}%"></i></div>
    </article>`;
  }).join("");
  document.querySelectorAll("#overviewChapters [data-ch]").forEach(x=>x.onclick=()=>openChapter(+x.dataset.ch));
}
function renderCourseList(){
  $("courseList").innerHTML=DATA.chapters.map(c=>{
    const p=chapterProgress(c.id);
    return `<article class="course-row" data-ch="${c.id}">
      <div class="n">${String(c.id).padStart(2,"0")}</div>
      <div><h3>${bi(c.title_ro,c.title_en)}</h3><p>${bi(c.summary_ro,c.summary_en)}</p></div>
      <div class="course-meta"><small>${esc(c.time)}</small><span class="done-dot ${p===100?"done":""}">${p===100?"✓":p+"%"}</span></div>
    </article>`;
  }).join("");
  document.querySelectorAll("#courseList [data-ch]").forEach(x=>x.onclick=()=>openChapter(+x.dataset.ch));
}
function renderTheory(){
  $("theoryGrid").innerHTML=DATA.theory.map(s=>`<article class="theory-card">
    <div class="icon">${esc(s[0])}</div>
    <h3>${esc(s[1])}</h3>
    <div class="topics">${s[2].map(t=>`<div class="topic">${esc(t)}</div>`).join("")}</div>
    <div class="source-line">${sourceBadge("EASA")}</div>
  </article>`).join("");
}
function openChapter(id){
  state.currentChapter=id; save();
  renderLesson(id); showView("lesson");
  $("kicker").textContent=`FLIGHT LESSON • CH ${String(id).padStart(2,"0")}`;
  $("pageTitle").textContent=txt(DATA.chapters[id-1].title_ro,DATA.chapters[id-1].title_en);
}
function renderLesson(id){
  const c=DATA.chapters.find(x=>x.id===id);
  const objectives=c.objectives_ro.map((o,i)=>`<div class="objective">✓ ${bi(o,c.objectives_en[i])}</div>`).join("");
  const sections=c.sections.map((s,i)=>`<details class="lesson-section" ${i===0?"open":""}>
    <summary><h3>${String(i+1).padStart(2,"0")} — ${bi(s.title_ro,s.title_en)}</h3><span>+</span></summary>
    <div class="lesson-body">
      <div>
        <div class="core">${bi(s.body_ro,s.body_en,"p")}</div>
        <div class="source-line">${s.sources.map(sourceBadge).join("")}</div>
      </div>
      <div class="side-stack">
        <div class="box cockpit"><strong>IN THE COCKPIT</strong><p>${bi(s.cockpit_ro,s.cockpit_en)}</p></div>
        <div class="box mistake"><strong>COMMON MISTAKE</strong><p>${bi(s.mistake_ro,s.mistake_en)}</p></div>
      </div>
    </div>
  </details>`).join("");

  $("lessonContent").innerHTML=`<article class="lesson-hero">
    <span class="pill green">CHAPTER ${String(id).padStart(2,"0")} • ${esc(c.time)}</span>
    <h2>${bi(c.title_ro,c.title_en)}</h2>
    <p>${bi(c.summary_ro,c.summary_en)}</p>
    <div class="source-line">${sourceBadge("BOOK")}${sourceBadge("FAA")}${sourceBadge("AFM")}</div>
    <div class="objectives">${objectives}</div>
    <p class="note">${esc(c.pages)}</p>
  </article>
  ${sections}
  <div class="panel">
    <div class="head"><div><small>CHAPTER CHECK</small><h3>Test retrieval, not recognition</h3></div></div>
    <p class="note">Întrebările greșite sunt salvate automat în Weak Areas.</p>
    <button class="primary" id="markRead">Mark lesson read</button>
    <div class="quiz" id="quizBox"></div>
  </div>`;

  $("markRead").onclick=()=>{
    state.completed[id]={...(state.completed[id]||{}),read:true};
    save(); toast("Lesson marked as read");
  };
  startQuiz(id);
}
function startQuiz(id){
  quiz={chapter:id,index:0,score:0,answered:false};
  renderQuestion();
}
function renderQuestion(){
  const c=DATA.chapters.find(x=>x.id===quiz.chapter);
  const item=c.quiz[quiz.index];
  const pct=Math.round(quiz.index/c.quiz.length*100);
  $("quizBox").innerHTML=`<div class="quiz-head"><div><small>KNOWLEDGE CHECK</small><h3>Question ${quiz.index+1} / ${c.quiz.length}</h3></div><strong>${quiz.score} correct</strong></div>
    <div class="qbar"><i style="width:${pct}%"></i></div>
    <div class="question">${bi(item[0],item[1])}</div>
    <div class="answers">${item[2].map((a,i)=>`<button class="answer" data-a="${i}">${esc(a)}</button>`).join("")}</div>
    <div class="feedback" id="feedback"></div>
    <div class="quiz-foot"><div class="source-line">${sourceBadge("BOOK")}${sourceBadge("FAA")}</div><button class="primary" id="nextQ" style="display:none">Next →</button></div>`;
  document.querySelectorAll("#quizBox .answer").forEach(b=>b.onclick=()=>answer(+b.dataset.a));
}
function answer(idx){
  if(quiz.answered)return;
  quiz.answered=true;
  const c=DATA.chapters.find(x=>x.id===quiz.chapter);
  const item=c.quiz[quiz.index],correct=item[3];
  const buttons=[...document.querySelectorAll("#quizBox .answer")];
  buttons[correct].classList.add("correct");
  const key=`${c.id}-${quiz.index}`;
  if(idx===correct){
    quiz.score++;
    state.weak=(state.weak||[]).filter(x=>x.key!==key);
  } else {
    buttons[idx].classList.add("wrong");
    state.weak=(state.weak||[]).filter(x=>x.key!==key);
    state.weak.push({key,chapter:c.id,qro:item[0],qen:item[1],ero:item[4],een:item[5]});
  }
  $("feedback").innerHTML=`<strong>${idx===correct?"Correct.":"Not quite."}</strong> ${bi(item[4],item[5])}`;
  $("nextQ").style.display="inline-block";
  $("nextQ").onclick=nextQuestion;
  save();
}
function nextQuestion(){
  const c=DATA.chapters.find(x=>x.id===quiz.chapter);
  quiz.index++; quiz.answered=false;
  if(quiz.index>=c.quiz.length){
    const pct=Math.round(quiz.score/c.quiz.length*100);
    state.scores[c.id]=Math.max(state.scores[c.id]||0,pct);
    save();
    $("quizBox").innerHTML=`<div class="quiz-result"><small>RESULT</small><h3>${pct}%</h3>
      <p>${pct>=75?"Pass level reached for this study quiz.":"Review the lesson and retry. Weak questions were saved."}</p>
      <button class="primary" id="retry">Retry quiz</button></div>`;
    $("retry").onclick=()=>startQuiz(c.id);
  } else renderQuestion();
}
function renderWeak(){
  const items=state.weak||[];
  if(!items.length){
    $("weak").innerHTML=`<div class="weak-empty"><h3>No weak questions saved</h3><p>Answer a quiz incorrectly and it will appear here.</p></div>`;
    return;
  }
  $("weak").innerHTML=`<div class="weak-list">${items.map(x=>`<article class="weak-card">
    <b>${bi(x.qro,x.qen)}</b>
    <p>${bi(x.ero,x.een)}</p>
    <small>Chapter ${x.chapter}</small>
  </article>`).join("")}</div>`;
}
function renderGlossary(filter=""){
  const f=filter.trim().toLowerCase();
  const items=DATA.glossary.filter(x=>!f||x.join(" ").toLowerCase().includes(f));
  $("glossaryGrid").innerHTML=items.map(x=>`<article class="term"><h3>${esc(x[0])}</h3><p>${bi(x[1],x[2])}</p></article>`).join("");
}
function setLanguage(lang){
  state.lang=lang; save();
  document.body.classList.toggle("lang-bilingual",lang==="bilingual");
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  renderAll();
  if($("lesson").classList.contains("active")) renderLesson(state.currentChapter);
  if($("review").classList.contains("active")) renderWeak();
}
function renderAll(){
  renderRequirements();renderTrust();renderChapterCards();renderCourseList();renderTheory();renderGlossary();
  $("qCount").textContent=DATA.chapters.reduce((a,c)=>a+c.quiz.length,0);
  updateProgress();
}

document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>jump(b.dataset.view));
document.querySelectorAll(".jump").forEach(b=>b.onclick=()=>jump(b.dataset.view));
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLanguage(b.dataset.lang));
$("continue").onclick=()=>openChapter(state.currentChapter||1);
$("back").onclick=()=>jump("course");
$("prev").onclick=()=>openChapter(Math.max(1,state.currentChapter-1));
$("next").onclick=()=>openChapter(Math.min(10,state.currentChapter+1));
$("glossarySearch").oninput=e=>renderGlossary(e.target.value);
$("reset").onclick=()=>{
  if(confirm("Reset all local course progress?")){
    localStorage.removeItem(KEY); state=structuredClone(DEFAULT); renderAll(); toast("Progress reset");
  }
};

document.body.classList.toggle("lang-bilingual",state.lang==="bilingual");
document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b.dataset.lang===state.lang));
renderAll();
