const chapters = [
  {
    id: 1, title: 'Aircraft Familiarisation', short: 'Aircraft', time: '10 min',
    lead: 'Construiește o hartă mentală a avionului înainte să înveți manevrele: structură, propulsie, comenzi și instrumente.',
    concepts: [
      ['Structure', 'Fuselajul leagă aripile, coada, trenul de aterizare și cockpitul într-o singură structură.'],
      ['Wings & tail', 'Aripile generează portanță, iar ampenajul contribuie la stabilitate și control.'],
      ['Engine & propeller', 'Motorul furnizează putere; elicea transformă această putere în tracțiune.'],
      ['Primary controls', 'Elevatorul controlează pitch, eleroanele roll, iar direcția rudder-ul pe axa de yaw.']
    ],
    memoryTitle: 'Think in axes, not in parts', memory: ['ELEVATOR', 'PITCH', 'NOSE UP / DOWN'],
    remember: ['Elevator → Pitch', 'Ailerons → Roll', 'Rudder → Yaw'],
    visualIntro: 'Apasă pe componente pentru o explicație rapidă.', visualType: 'aircraft',
    visual: [
      ['propeller','Propeller','Transformă puterea motorului în tracțiune.'],
      ['cockpit','Cockpit','Locul pilotului, comenzilor și instrumentelor.'],
      ['wing','Wing','Suprafața principală care produce portanță.'],
      ['aileron','Aileron','Controlează înclinarea pe axa de roll.'],
      ['fuselage','Fuselage','Corpul principal care unește componentele.'],
      ['tail','Empennage','Stabilizează avionul și găzduiește suprafețe de control.']
    ],
    cards: [
      ['What controls pitch?', 'Elevator'], ['What controls roll?', 'Ailerons'], ['What controls yaw?', 'Rudder'],
      ['What is the main body of the aircraft?', 'Fuselage'], ['What does the propeller primarily generate?', 'Thrust']
    ],
    quiz: [
      ['Which control primarily changes pitch?', ['Ailerons','Elevator','Rudder','Flaps'], 1, 'Elevatorul controlează pitch-ul.'],
      ['Ailerons primarily control…', ['Yaw','Pitch','Roll','Speed'], 2, 'Eleroanele controlează roll-ul.'],
      ['The propeller primarily produces…', ['Lift','Thrust','Weight','Yaw'], 1, 'Elicea produce tracțiune.'],
      ['The rudder primarily controls…', ['Pitch','Yaw','Roll','Lift'], 1, 'Rudder-ul controlează yaw-ul.'],
      ['The fuselage is…', ['The main body','Only the tail','A flight instrument','Only the cowling'], 0, 'Fuselajul este corpul principal al avionului.']
    ]
  },
  {
    id: 2, title: 'Before and After Flight', short: 'Pre/Post Flight', time: '12 min',
    lead: 'Un zbor bun începe înainte de pornirea motorului și se încheie după oprirea lui: pregătire, inspecție, pornire, oprire și securizare.',
    concepts: [
      ['Pilot ready', 'Verifică starea personală, documentele și condițiile înainte de a te apropia de avion.'],
      ['Inspect systematically', 'Folosește o ordine constantă pentru inspecția internă și externă, astfel încât nimic să nu fie omis.'],
      ['Start safely', 'Zona elicei trebuie să fie liberă; checklist-ul și poziționarea comenzilor reduc riscul la pornire.'],
      ['Secure after flight', 'După oprire, completează acțiunile post-zbor și securizează aeronava conform procedurilor.']
    ],
    memoryTitle: 'The flight is a closed loop', memory: ['PLAN', 'INSPECT', 'START', 'FLY', 'SHUT DOWN', 'SECURE'],
    remember: ['Checklist beats memory', 'Clear propeller area', 'Secure the aircraft'],
    visualIntro: 'Fluxul complet înainte și după zbor.', visualType: 'flow',
    visual: [['PLAN','Pilot + weather + documents'],['INSPECT','Inside → outside → fuel/oil'],['START','Checklist + clear area'],['POST-FLIGHT','Shutdown → record → secure']],
    cards: [
      ['Why use a fixed inspection sequence?', 'To reduce the chance of missing an item'],
      ['What has priority over memory?', 'The approved checklist / procedure'],
      ['What area must be clear before engine start?', 'The propeller area'],
      ['When does flight preparation begin?', 'Before entering the aircraft'],
      ['What is the final goal after flight?', 'Leave the aircraft shut down and secured correctly']
    ],
    quiz: [
      ['A systematic walk-around mainly helps you…', ['Fly faster','Avoid missing items','Use less fuel','Taxi quicker'],1,'O ordine constantă reduce omisiunile.'],
      ['Before starting the engine, the most critical nearby area is…', ['Tail only','Propeller area','Left wing only','Cabin roof'],1,'Zona elicei trebuie să fie liberă.'],
      ['Which is the best study habit for procedures?', ['Invent your own order','Rely only on memory','Use the approved checklist','Skip repeated items'],2,'Procedurile aprobate și checklist-ul au prioritate.'],
      ['Post-flight actions include…', ['Leaving immediately','Securing the aircraft','Keeping the engine running','Ignoring paperwork'],1,'Aeronava trebuie oprită și securizată corect.'],
      ['Pre-flight preparation includes…', ['Only engine start','Pilot, documents and aircraft checks','Only radio setup','Only fuel'],1,'Pregătirea este mai largă decât simpla pornire.']
    ]
  },
  {
    id: 3, title: 'Air Experience', short: 'Air Experience', time: '7 min',
    lead: 'Prima experiență în aer este despre orientare: ce vezi, ce simți și cum arată o atitudine normală înainte să începi să pilotezi activ.',
    concepts: [
      ['Look outside', 'Orizontul și reperele exterioare sunt principalele referințe pentru atitudine în zbor vizual.'],
      ['Feel the aircraft', 'Observă zgomotul, vibrațiile, accelerațiile și răspunsul avionului fără să te grăbești să controlezi.'],
      ['Cockpit scan', 'Învață unde sunt comenzile și instrumentele, apoi revino constant cu privirea afară.'],
      ['Situational awareness', 'Leagă poziția avionului de aerodrom, teren, trafic și direcția de zbor.']
    ],
    memoryTitle: 'Outside first, instruments confirm', memory: ['LOOK OUT', 'ATTITUDE', 'INSTRUMENTS'],
    remember: ['See → feel → confirm', 'Outside is primary in VFR', 'Build orientation early'],
    visualIntro: 'Un scan simplu pentru primele ore de zbor.', visualType: 'flow',
    visual: [['OUTSIDE','Horizon + traffic'],['ATTITUDE','What the aircraft looks like'],['INSIDE','Quick instrument confirmation'],['OUTSIDE','Return to lookout']],
    cards: [
      ['In VFR, what is your primary attitude reference?', 'The outside visual picture / horizon'],
      ['What should instruments do in early visual flying?', 'Confirm the outside picture'],
      ['What is a continuous priority?', 'Lookout for other traffic'],
      ['What are you building in Air Experience?', 'Orientation and familiarity'],
      ['After a quick instrument check, where should your eyes return?', 'Outside']
    ],
    quiz: [
      ['In normal VFR training, your primary reference is usually…', ['Only the altimeter','The outside picture','Only the compass','Only the radio'],1,'În zbor vizual, imaginea exterioară este referința principală.'],
      ['A quick instrument scan should normally be followed by…', ['Closing your eyes','Looking outside again','Turning off instruments','Changing frequency'],1,'Privirea revine afară pentru lookout și atitudine.'],
      ['Air Experience is mainly about…', ['Advanced aerobatics','Initial orientation and familiarity','Navigation exam technique','Engine maintenance'],1,'Scopul este familiarizarea cu mediul de zbor.'],
      ['Continuous lookout is important because…', ['It improves fuel quality','Traffic can be anywhere','It changes the weather','It sets the trim'],1,'Conștientizarea traficului este esențială.'],
      ['The best early habit is…', ['Stare at one instrument','Alternate outside view with short checks','Ignore the horizon','Only watch the instructor'],1,'Folosește exteriorul ca bază și instrumentele pentru confirmare.']
    ]
  },
  {
    id: 4, title: 'The Controls', short: 'Controls', time: '18 min',
    lead: 'Înțelege efectul primar și efectele ulterioare ale comenzilor, apoi adaugă trim, putere, flaps, mixture și radio.',
    concepts: [
      ['Primary effects', 'Elevator → pitch, ailerons → roll, rudder → yaw. Acestea sunt legăturile de bază.'],
      ['Further effects', 'O comandă poate genera efecte secundare; avionul trebuie coordonat, nu pilotat pe o singură axă.'],
      ['Trim', 'Trim-ul elimină presiunea continuă necesară pentru menținerea unei atitudini sau viteze stabilizate.'],
      ['Configuration effects', 'Viteza, slipstream-ul, puterea și flaps-urile schimbă eficiența comenzilor și atitudinea necesară.']
    ],
    memoryTitle: 'Control, balance, then trim', memory: ['SET ATTITUDE', 'BALANCE', 'HOLD', 'TRIM'],
    remember: ['Pitch ↔ Elevator', 'Roll ↔ Ailerons', 'Yaw ↔ Rudder', 'Trim removes pressure'],
    visualIntro: 'Cele trei axe și comenzile lor principale.', visualType: 'axes',
    visual: [['PITCH','Elevator','Nose up / down'],['ROLL','Ailerons','Bank left / right'],['YAW','Rudder','Nose left / right']],
    cards: [
      ['What does trim remove?', 'Continuous control pressure'], ['What controls yaw?', 'Rudder'],
      ['At lower airspeed, controls generally feel…', 'Less effective / less responsive'],
      ['What can power changes affect besides speed?', 'Pitch and balance tendencies'],
      ['What do flaps change?', 'Lift, drag, attitude and handling']
    ],
    quiz: [
      ['Trim is mainly used to…', ['Turn the radio on','Remove sustained control pressure','Start the engine','Apply brakes'],1,'Trim-ul reduce presiunea continuă pe comandă.'],
      ['At low airspeed, flight controls are generally…', ['More effective','Less effective','Unrelated to airflow','Locked'],1,'Mai puțin airflow înseamnă răspuns mai redus.'],
      ['Which pair is correct?', ['Rudder–Pitch','Elevator–Yaw','Ailerons–Roll','Flaps–Yaw'],2,'Eleroanele controlează roll-ul.'],
      ['A power change can require…', ['No pilot response ever','Attitude and balance correction','Only a radio call','Only braking'],1,'Puterea poate modifica tendințele de pitch și yaw.'],
      ['Flap extension generally changes…', ['Only paint colour','Lift and drag characteristics','The aircraft registration','Radio range only'],1,'Flaps-urile schimbă portanța și rezistența.']
    ]
  },
  {
    id: 5, title: 'Taxiing an Aeroplane', short: 'Taxiing', time: '10 min',
    lead: 'Pe sol, obiectivul este simplu: mișcare controlată, viteză mică, direcție precisă și oprire sigură.',
    concepts: [
      ['Start moving', 'Este nevoie de mai multă putere pentru a învinge inerția decât pentru a menține rulajul.'],
      ['Control speed', 'Redu puterea pentru încetinire; folosește frânele lin și ferm doar cât este necesar.'],
      ['Steer accurately', 'Direcția se controlează prin sistemul aeronavei, de regulă cu pedalele și, după caz, frânare diferențială.'],
      ['Lookout on ground', 'Scanează înainte, lateral și în viraje; viteza trebuie adaptată spațiului și suprafeței.']
    ],
    memoryTitle: 'Power makes it move; friction and brakes stop it', memory: ['POWER', 'ROLL', 'REDUCE POWER', 'BRAKE IF NEEDED'],
    remember: ['Fast walking pace on clear smooth taxiway', 'Avoid power against brakes', 'Brake gently'],
    visualIntro: 'Secvența de control a vitezei la taxi.', visualType: 'flow',
    visual: [['MOVE','Add enough power to start rolling'],['SETTLE','Reduce power once moving'],['SLOW','Power idle / lower'],['STOP','Use brakes smoothly if required']],
    cards: [
      ['What usually starts the aircraft moving?', 'Power'], ['What should you do first to slow down?', 'Reduce power'],
      ['What is a typical safe taxi speed on a clear smooth taxiway?', 'About a fast walking pace'],
      ['Why avoid power against brakes?', 'Heat, wear and wasted energy'],
      ['How should brakes be used?', 'Gently and progressively']
    ],
    quiz: [
      ['To begin taxiing, you normally use…', ['Elevator trim','Power','Flaps only','Mixture only'],1,'Puterea pornește mișcarea.'],
      ['The first action to reduce taxi speed is usually…', ['Add power','Reduce power','Raise flaps','Transmit MAYDAY'],1,'Reducerea puterii permite frecării să încetinească avionul.'],
      ['On a clear smooth taxiway, a sensible reference is roughly…', ['Highway speed','Fast walking pace','Take-off speed','Stall speed'],1,'O viteză apropiată de mers alert este o referință utilă.'],
      ['Using power against brakes is generally…', ['Preferred','Wasteful and can overheat brakes','Required always','A navigation technique'],1,'Evită să lupți cu frânele folosind putere.'],
      ['In confined areas, taxi speed should be…', ['Higher','Lower','Unchanged always','Maximum'],1,'Spațiul redus cere viteză mai mică.']
    ]
  },
  {
    id: 6, title: 'Straight and Level', short: 'Straight & Level', time: '16 min',
    lead: 'Zborul drept și nivelat este baza tuturor manevrelor: atitudine stabilă, direcție constantă, avion în echilibru și viteză controlată.',
    concepts: [
      ['Attitude sets the picture', 'Alege imaginea corectă față de orizont și menține-o cu elevatorul.'],
      ['Power supports speed', 'La o configurație dată, schimbarea puterii cere o nouă combinație de atitudine și trim.'],
      ['Balance matters', 'Folosește rudder-ul pentru a menține zborul coordonat și a evita alunecarea sau derapajul.'],
      ['Trim last', 'Stabilește mai întâi atitudinea și puterea, apoi trimează pentru a elimina presiunea.']
    ],
    memoryTitle: 'A-P-T: Attitude, Power, Trim', memory: ['ATTITUDE', 'POWER', 'TRIM'],
    remember: ['Lookout → Attitude → Instruments', 'Set, hold, trim', 'Balance with rudder'],
    visualIntro: 'Cum schimbi viteza și revii la un nou zbor stabilizat.', visualType: 'flow',
    visual: [['SELECT','Choose target airspeed'],['POWER','Adjust power'],['ATTITUDE','Change pitch to hold height'],['TRIM','Remove pressure when stable']],
    cards: [
      ['What is the common stabilisation sequence?', 'Attitude, Power, Trim'],
      ['What keeps the aircraft coordinated?', 'Appropriate rudder / balance'],
      ['When should you trim?', 'After the desired condition is established'],
      ['What is the primary visual reference?', 'The outside attitude picture'],
      ['A new airspeed usually needs…', 'A new power and attitude combination']
    ],
    quiz: [
      ['In a stabilised change, trim should generally come…', ['First','After attitude and power are set','Before lookout','Instead of elevator'],1,'Trim-ul vine după stabilizarea atitudinii și puterii.'],
      ['To keep the aircraft in balance, use…', ['Only elevator','Appropriate rudder','Only flaps','Brakes'],1,'Rudder-ul este folosit pentru coordonare.'],
      ['A useful scan priority is…', ['Instruments only','Lookout–Attitude–Instruments','Radio–Map–Fuel only','Compass only'],1,'Exteriorul rămâne central în VFR.'],
      ['Changing to a different steady airspeed normally requires…', ['No changes','A different attitude/power combination','Only a radio call','Landing gear change'],1,'Viteza stabilizată rezultă dintr-o nouă combinație.'],
      ['The purpose of trim is to…', ['Create lift directly','Remove sustained control pressure','Control brakes','Change frequency'],1,'Trim-ul nu înlocuiește comanda, ci elimină presiunea susținută.']
    ]
  },
  {
    id: 7, title: 'Climbing', short: 'Climbing', time: '12 min',
    lead: 'În urcare, surplusul de putere este transformat în creștere de altitudine. Viteza țintă se ține în principal prin atitudine.',
    concepts: [
      ['Power for climb', 'Setează puterea de urcare conform aeronavei și procedurii.'],
      ['Attitude for speed', 'Ridică nasul la atitudinea de urcare și corectează cu elevatorul pentru viteza dorită.'],
      ['Balance and lookout', 'Corectează tendințele produse de putere și păstrează lookout-ul, inclusiv prin mici schimbări de direcție dacă vizibilitatea înainte este redusă.'],
      ['Level-off early', 'Anticipează nivelarea: schimbă atitudinea, lasă viteza să crească, setează puterea de croazieră și trimează.']
    ],
    memoryTitle: 'P-A-T into the climb', memory: ['POWER', 'ATTITUDE', 'TRIM'],
    remember: ['Power → Attitude → Trim', 'Airspeed with attitude', 'Lookout is continuous'],
    visualIntro: 'O secvență simplificată de intrare și ieșire din urcare.', visualType: 'flow',
    visual: [['ENTER','Power → climb attitude'],['HOLD','Speed with elevator'],['MONITOR','Lookout + instruments'],['LEVEL OFF','Attitude → accelerate → power → trim']],
    cards: [
      ['In a climb, what primarily controls target airspeed?', 'Pitch attitude / elevator'],
      ['What does excess power allow?', 'A climb'],
      ['Why may you weave slightly in a climb?', 'To improve forward lookout'],
      ['What should you anticipate before target altitude?', 'The level-off'],
      ['After stabilising at cruise, what comes last?', 'Trim']
    ],
    quiz: [
      ['In a normal climb, target airspeed is mainly controlled with…', ['Brakes','Pitch attitude / elevator','Rudder only','Radio'],1,'Atitudinea este ajustată pentru viteza de urcare.'],
      ['Climb performance depends strongly on…', ['Excess power','Cabin light','Paint colour','Transponder code only'],0,'Surplusul de putere susține urcarea.'],
      ['A reduced forward view in a climb means you should…', ['Stop lookout','Use suitable lookout techniques','Close one eye','Ignore traffic'],1,'Lookout-ul trebuie menținut activ.'],
      ['At level-off, you should…', ['Wait until far above altitude','Anticipate the transition','Apply brakes','Switch off instruments'],1,'Nivelarea se anticipează pentru a evita overshoot-ul.'],
      ['Once cruise condition is stable, use…', ['Trim','Brakes','Starter','Carb heat always'],0,'Trimează după stabilizare.']
    ]
  },
  {
    id: 8, title: 'Descending', short: 'Descending', time: '18 min',
    lead: 'Coborârea poate fi în planare, cu putere, cu flaps sau prin sideslip. Fiecare metodă schimbă relația dintre viteză, pantă și rata de coborâre.',
    concepts: [
      ['The glide', 'Cu putere redusă, atitudinea este ajustată pentru viteza de planare dorită.'],
      ['Powered descent', 'Puterea permite modificarea ratei și pantei fără aceeași pierdere de energie ca într-o planare pură.'],
      ['Flap in descent', 'Flaps-urile cresc rezistența și permit o configurație diferită, cu limite de viteză care trebuie respectate.'],
      ['Sideslip', 'Comenzi încrucișate pot crește rata de coborâre, dar manevra se folosește numai dacă este aprobată pentru aeronavă și situație.']
    ],
    memoryTitle: 'Know which variable each control is changing', memory: ['POWER', 'PITCH', 'CONFIGURATION', 'FLIGHTPATH'],
    remember: ['Pitch protects target airspeed', 'Flap has speed limits', 'Sideslip = crossed controls'],
    visualIntro: 'Patru moduri de a coborî, fiecare cu alt scop.', visualType: 'compare',
    visual: [['GLIDE','Low power','Energy-efficient descent'],['POWERED','Some power','Control path and rate'],['FLAP','More drag','Steeper path / lower speeds'],['SIDESLIP','Crossed controls','Increase descent rate']],
    cards: [
      ['In a glide, what is commonly used to maintain target airspeed?', 'Pitch attitude / elevator'],
      ['What does flap add significantly?', 'Drag'],
      ['What are sideslip controls called?', 'Crossed controls'],
      ['Is sideslip approved for every aircraft/configuration?', 'No'],
      ['What must remain continuous in descent?', 'Lookout and energy awareness']
    ],
    quiz: [
      ['In a glide, target airspeed is mainly maintained with…', ['Elevator / pitch','Brakes','Radio','Starter'],0,'Atitudinea controlează viteza de planare.'],
      ['Extending flap generally increases…', ['Drag','Fuel quantity','Radio range','Propeller diameter'],0,'Flaps-urile cresc rezistența.'],
      ['A sideslip uses…', ['No controls','Crossed aileron and rudder inputs','Only trim','Only throttle'],1,'Sideslip-ul folosește comenzi încrucișate.'],
      ['Sideslipping should be used…', ['In every aircraft','Only when approved and appropriate','Only on the ground','To increase cruise speed'],1,'Nu toate aeronavele/configurațiile permit manevra.'],
      ['A powered descent differs from a glide because…', ['It uses engine power to modify the descent condition','It has no airflow','It cannot turn','It has no drag'],0,'Puterea oferă o variabilă suplimentară.']
    ]
  },
  {
    id: 9, title: 'Turning', short: 'Turning', time: '18 min',
    lead: 'Un viraj coordonat înseamnă bank controlat, rudder pentru echilibru și elevator pentru a menține variabila dorită: altitudine sau viteză.',
    concepts: [
      ['Medium level turn', 'Într-un viraj de nivel mediu, înclinarea tipică este până la aproximativ 30°, la putere constantă și în echilibru.'],
      ['Lift is tilted', 'Când avionul se înclină, portanța se înclină și ea: o componentă produce virajul, iar alta susține greutatea.'],
      ['Climbing turn', 'În urcare, înclinarea reduce performanța de urcare; bank-ul este de obicei limitat pentru a păstra o rată rezonabilă.'],
      ['Descending turns', 'În planare sau coborâre, bank-ul influențează atât drag-ul, cât și rata de coborâre și viteza.']
    ],
    memoryTitle: 'Bank, balance, then control the target', memory: ['LOOKOUT', 'BANK', 'BALANCE', 'HEIGHT / SPEED'],
    remember: ['Lookout before and during turn', 'Aileron sets bank', 'Rudder balances', 'Elevator holds height or speed'],
    visualIntro: 'Ce face fiecare comandă într-un viraj de nivel mediu.', visualType: 'flow',
    visual: [['AILERON','Roll into bank'],['RUDDER','Coordinate / balance'],['ELEVATOR','Hold altitude with back pressure'],['LOOKOUT','Continue through the turn']],
    cards: [
      ['What creates the horizontal turning force?', 'The tilted lift force'],
      ['What control sets bank angle?', 'Ailerons'],
      ['What keeps the turn coordinated?', 'Rudder'],
      ['In a level turn, what may be needed to hold height?', 'Back pressure / increased angle of attack'],
      ['Why limit bank in a climbing turn?', 'To preserve climb performance']
    ],
    quiz: [
      ['In a coordinated turn, bank is primarily set with…', ['Ailerons','Brakes','Mixture','Trim only'],0,'Eleroanele stabilesc bank-ul.'],
      ['Rudder in a turn is mainly used to…', ['Control balance/coordination','Set altitude alone','Apply brakes in flight','Change flap'],0,'Rudder-ul coordonează virajul.'],
      ['In a level turn, maintaining height often needs…', ['Back pressure','Brake pressure','Less lookout','Engine shutdown'],0,'Portanța înclinată cere compensare pentru menținerea altitudinii.'],
      ['A climbing turn usually has limited bank because…', ['More bank improves climb infinitely','Steeper bank reduces climb performance','Rudder stops working','The radio overheats'],1,'Mai mult bank reduce surplusul disponibil pentru urcare.'],
      ['Lookout during a turn should be…', ['Only before entry','Continuous','Unnecessary','Only after rollout'],1,'Lookout-ul continuă pe toată manevra.']
    ]
  },
  {
    id: 10, title: 'Slow Flight and Stalling', short: 'Slow Flight & Stall', time: '20 min',
    lead: 'Zborul lent te învață să recunoști comenzile mai puțin eficiente. Stall-ul apare când este depășit unghiul critic de atac — nu la o singură viteză fixă în toate situațiile.',
    concepts: [
      ['Slow flight', 'La viteze mici, comenzile sunt mai puțin eficiente și este nevoie de mai multă atenție la atitudine, putere și coordonare.'],
      ['Critical angle', 'Stall-ul este legat de depășirea unghiului critic de atac, indiferent de viteza indicată la care se întâmplă.'],
      ['Recognition', 'Semnele pot include buffeting, pierdere de portanță, creștere de drag și tendința nasului de a coborî.'],
      ['Recovery principle', 'Principiul esențial este reducerea unghiului de atac; apoi se reconstruiește o traiectorie sigură conform procedurii aeronavei.']
    ],
    memoryTitle: 'Stall recovery begins by un-stalling the wing', memory: ['RECOGNISE', 'REDUCE AoA', 'POWER AS REQUIRED', 'RECOVER FLIGHTPATH'],
    remember: ['Critical AoA causes the stall', 'Airspeed alone does not define every stall', 'Controls are weaker at low speed'],
    visualIntro: 'Cum evoluează aripa de la zbor normal la stall și recuperare.', visualType: 'flow',
    visual: [['NORMAL','Attached airflow'],['AoA ↑','Lift rises within normal range'],['CRITICAL','Flow separation / stall'],['RECOVER','Reduce angle of attack']],
    cards: [
      ['What directly causes a stall?', 'Exceeding the critical angle of attack'],
      ['Can an aircraft stall at different airspeeds?', 'Yes'],
      ['How do controls feel in slow flight?', 'Less effective'],
      ['What is the first aerodynamic recovery principle?', 'Reduce angle of attack'],
      ['What happens to stall speed with increased load factor?', 'It increases']
    ],
    quiz: [
      ['A stall occurs when…', ['A fixed speed is always reached','Critical angle of attack is exceeded','The radio is off','Flaps are always up'],1,'Stall-ul apare la depășirea unghiului critic de atac.'],
      ['The essential first aerodynamic action in stall recovery is to…', ['Increase angle of attack','Reduce angle of attack','Apply brakes','Retract everything instantly'],1,'Aripa trebuie mai întâi scoasă din stall prin reducerea AoA.'],
      ['At low airspeed, controls are generally…', ['More effective','Less effective','Unaffected by airflow','Automatic'],1,'La viteză mică, autoritatea comenzilor scade.'],
      ['With increased load factor, stall speed generally…', ['Decreases to zero','Increases','Never changes','Becomes irrelevant'],1,'Încărcarea mai mare crește viteza de stall.'],
      ['Which statement is correct?', ['An aircraft can only stall wings level','A stall is possible whenever critical AoA is exceeded','Stall only happens with engine off','Stall always happens at one exact speed'],1,'Stall-ul poate apărea în mai multe atitudini și la viteze diferite.']
    ]
  }
];

const STORAGE_KEY = 'ppl-academy-v2-10chapters';
const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
state.current = Number.isInteger(state.current) ? Math.min(Math.max(state.current, 0), chapters.length - 1) : 0;
state.chapters = state.chapters || {};
chapters.forEach(ch => {
  state.chapters[ch.id] = state.chapters[ch.id] || { learned:false, visual:false, flashSeen:[], best:null, wrong:[] };
});

let currentPanel = 'dashboard';
let cardIndex = 0;
let qIndex = 0;
let score = 0;
let answered = false;

const $ = id => document.getElementById(id);
const currentChapter = () => chapters[state.current];
const currentProgress = () => state.chapters[currentChapter().id];
const save = () => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateDashboard(); };

function chapterPercent(ch) {
  const s = state.chapters[ch.id];
  let points = 0;
  if (s.learned) points += 30;
  if (s.visual) points += 20;
  points += Math.min(new Set(s.flashSeen).size, 5) * 6;
  if (s.best !== null) points += 20;
  return Math.min(points, 100);
}
function overallPercent() { return Math.round(chapters.reduce((sum,ch)=>sum+chapterPercent(ch),0)/chapters.length); }
function completedChapters() { return chapters.filter(ch => chapterPercent(ch) === 100).length; }

function showPanel(id) {
  currentPanel = id;
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active-panel', p.id === id));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.target === id));
  updateHeader();
  window.scrollTo({ top:0, behavior:'smooth' });
}

document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => showPanel(btn.dataset.target)));

function updateHeader() {
  if (currentPanel === 'dashboard') {
    $('chapterKicker').textContent = 'PPL • VOLUME 1';
    $('pageTitle').textContent = 'Flying Training';
  } else {
    const ch = currentChapter();
    $('chapterKicker').textContent = `CHAPTER ${String(ch.id).padStart(2,'0')} • ${currentPanel.toUpperCase()}`;
    $('pageTitle').textContent = ch.title;
  }
}

function selectChapter(index, panel='learn') {
  state.current = Math.min(Math.max(index, 0), chapters.length-1);
  cardIndex = 0; qIndex = 0; score = 0; answered = false;
  save();
  renderChapter();
  closeDrawer();
  showPanel(panel);
}

function renderChapterLists() {
  $('chapterGrid').innerHTML = chapters.map((ch,i) => {
    const pct = chapterPercent(ch);
    return `<button class="chapter-card ${pct===100?'done':''}" data-chapter="${i}">
      <div class="chapter-card-top"><span>${String(ch.id).padStart(2,'0')}</span><small>${ch.time}</small></div>
      <strong>${ch.title}</strong>
      <div class="chapter-card-progress"><i style="width:${pct}%"></i></div>
      <div class="chapter-meta"><span>${pct}%</span><span>${pct===100?'COMPLETED':'STUDY'}</span></div>
    </button>`;
  }).join('');
  document.querySelectorAll('.chapter-card').forEach(b => b.addEventListener('click', () => selectChapter(Number(b.dataset.chapter), 'learn')));

  $('chapterMiniList').innerHTML = chapters.map((ch,i)=>`<button class="mini-chapter ${i===state.current?'active':''}" data-mini="${i}"><span>${String(ch.id).padStart(2,'0')}</span><em>${ch.short}</em><b>${chapterPercent(ch)}%</b></button>`).join('');
  document.querySelectorAll('[data-mini]').forEach(b => b.addEventListener('click', ()=>selectChapter(Number(b.dataset.mini),'learn')));

  $('drawerList').innerHTML = chapters.map((ch,i)=>`<button class="drawer-item ${i===state.current?'active':''}" data-drawer-ch="${i}"><span>${String(ch.id).padStart(2,'0')}</span><div><strong>${ch.title}</strong><small>${ch.time} • ${chapterPercent(ch)}% complete</small></div><b>→</b></button>`).join('');
  document.querySelectorAll('[data-drawer-ch]').forEach(b => b.addEventListener('click',()=>selectChapter(Number(b.dataset.drawerCh),'learn')));
}

function updateDashboard() {
  const pct = overallPercent();
  $('coursePercent').textContent = `${pct}%`;
  $('courseBar').style.width = `${pct}%`;
  $('courseCount').textContent = `${completedChapters()} / 10`;
  $('heroProgress').textContent = `${pct}%`;
  $('chaptersCompleted').textContent = `${completedChapters()}/10`;
  const attempted = chapters.map(ch=>state.chapters[ch.id].best).filter(v=>v!==null);
  $('averageScore').textContent = attempted.length ? `${Math.round(attempted.reduce((a,b)=>a+b,0)/attempted.length*20)}%` : '—';
  const seen = chapters.reduce((sum,ch)=>sum + new Set(state.chapters[ch.id].flashSeen).size,0);
  $('totalCardsSeen').textContent = `${seen}`;
  const ch = currentChapter();
  $('continueBtn').textContent = `${chapterPercent(ch) ? 'Continue' : 'Start'} Chapter ${ch.id} →`;
  renderChapterLists();
}

function renderConcepts(ch) {
  $('conceptGrid').innerHTML = ch.concepts.map((c,i)=>`<article class="concept"><span>${String(i+1).padStart(2,'0')}</span><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('');
}
function renderMemory(ch) {
  $('memoryFlow').innerHTML = ch.memory.map((item,i)=>`${i?'<span class="flow-arrow">→</span>':''}<div class="flow-node">${item}</div>`).join('');
  $('rememberLine').innerHTML = ch.remember.map(x=>`<strong>${x}</strong>`).join('');
}

function renderVisual(ch) {
  $('visualIntro').textContent = ch.visualIntro;
  $('visualTitle').textContent = ch.visualType === 'aircraft' ? 'Tap the aircraft' : 'See the logic';
  if (ch.visualType === 'aircraft') {
    $('visualBoard').innerHTML = `<div class="aircraft-stage">
      <svg class="aircraft-svg" viewBox="0 0 900 430" role="img" aria-label="Simplified top-view aircraft diagram">
        <g class="plane-shape"><path d="M430 55 L470 55 L488 170 L720 220 L720 250 L492 235 L480 360 L540 390 L535 410 L450 385 L365 410 L360 390 L420 360 L408 235 L180 250 L180 220 L412 170 Z"/><ellipse cx="450" cy="155" rx="30" ry="70"/></g>
        <g class="hotspots"><circle class="hotspot" data-part="propeller" cx="450" cy="55" r="15"/><circle class="hotspot" data-part="cockpit" cx="450" cy="150" r="15"/><circle class="hotspot" data-part="wing" cx="280" cy="225" r="15"/><circle class="hotspot" data-part="aileron" cx="205" cy="238" r="15"/><circle class="hotspot" data-part="fuselage" cx="450" cy="260" r="15"/><circle class="hotspot" data-part="tail" cx="450" cy="382" r="15"/></g>
      </svg><div class="visual-info" id="visualInfo"><span class="eyebrow">SELECT A PART</span><h3>Aircraft overview</h3><p>Punctele luminoase indică principalele componente.</p></div></div>`;
    const map = Object.fromEntries(ch.visual.map(x=>[x[0],[x[1],x[2]]]));
    document.querySelectorAll('.hotspot').forEach(dot=>dot.addEventListener('click',()=>{
      const [title,text] = map[dot.dataset.part];
      $('visualInfo').innerHTML = `<span class="eyebrow">AIRCRAFT PART</span><h3>${title}</h3><p>${text}</p>`;
    }));
  } else if (ch.visualType === 'axes') {
    $('visualBoard').innerHTML = `<div class="axes-grid">${ch.visual.map(v=>`<article class="axis-card"><span>${v[0]}</span><strong>${v[1]}</strong><p>${v[2]}</p><div class="axis-orbit"></div></article>`).join('')}</div>`;
  } else if (ch.visualType === 'compare') {
    $('visualBoard').innerHTML = `<div class="compare-grid">${ch.visual.map(v=>`<article class="compare-card"><span>${v[0]}</span><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join('')}</div>`;
  } else {
    $('visualBoard').innerHTML = `<div class="process-flow">${ch.visual.map((v,i)=>`${i?'<div class="process-arrow">→</div>':''}<article class="process-card"><span>${String(i+1).padStart(2,'0')}</span><strong>${v[0]}</strong><p>${v[1]}</p></article>`).join('')}</div>`;
  }
}

function renderCard() {
  const ch = currentChapter();
  const [q,a] = ch.cards[cardIndex];
  $('cardLabel').textContent = `CARD ${cardIndex+1} / ${ch.cards.length}`;
  $('cardFront').textContent = q;
  $('cardBack').textContent = a;
  $('flashcard').classList.remove('revealed');
  $('flashTitle').textContent = `${ch.title} — Quick recall`;
}

function renderQuestion() {
  const ch = currentChapter();
  answered = false;
  const item = ch.quiz[qIndex];
  $('quizTitle').textContent = `Question ${qIndex+1} / ${ch.quiz.length}`;
  $('quizBar').style.width = `${(qIndex/ch.quiz.length)*100}%`;
  $('questionText').textContent = item[0];
  $('feedback').textContent = '';
  $('nextQuestion').classList.add('hidden');
  $('quizResult').classList.add('hidden');
  $('answers').innerHTML = '';
  item[1].forEach((answer,idx)=>{
    const b = document.createElement('button');
    b.className='answer-btn'; b.textContent = `${String.fromCharCode(65+idx)}. ${answer}`;
    b.addEventListener('click',()=>selectAnswer(idx));
    $('answers').appendChild(b);
  });
}
function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const item = currentChapter().quiz[qIndex];
  const buttons = [...document.querySelectorAll('.answer-btn')];
  buttons.forEach((b,i)=>{ b.disabled=true; if(i===item[2]) b.classList.add('correct'); });
  if (idx === item[2]) { score++; $('feedback').textContent = `Correct. ${item[3]}`; }
  else {
    buttons[idx].classList.add('wrong');
    $('feedback').textContent = `Not quite. ${item[3]}`;
    const s = currentProgress();
    if (!s.wrong.includes(qIndex)) s.wrong.push(qIndex);
  }
  $('quizLiveScore').textContent = `${score} correct`;
  $('nextQuestion').classList.remove('hidden');
  save();
}
function finishQuiz() {
  const ch = currentChapter();
  $('quizBar').style.width='100%'; $('answers').innerHTML=''; $('questionText').textContent='Chapter check complete'; $('feedback').textContent=''; $('nextQuestion').classList.add('hidden');
  const result = $('quizResult');
  const passed = score >= 4;
  result.classList.remove('hidden');
  result.innerHTML = `<span class="eyebrow">RESULT</span><h2>${score} / ${ch.quiz.length}</h2><p>${passed?'Strong result. Chapter knowledge check passed.':'Review the chapter and try again. Aim for at least 4/5.'}</p><div class="result-actions"><button id="retryQuiz" class="ghost-btn">Try again</button>${ch.id<10?'<button id="nextChapterBtn" class="primary-btn">Next chapter →</button>':''}</div>`;
  const s = currentProgress();
  s.best = s.best===null ? score : Math.max(s.best,score); save();
  $('retryQuiz').addEventListener('click',()=>{qIndex=0;score=0;$('quizLiveScore').textContent='0 correct';renderQuestion();});
  const next = $('nextChapterBtn'); if(next) next.addEventListener('click',()=>selectChapter(state.current+1,'learn'));
}

function renderChapter() {
  const ch = currentChapter();
  const s = currentProgress();
  $('lessonNumber').textContent = String(ch.id).padStart(2,'0');
  $('lessonPositionText').textContent = `Chapter ${ch.id} of ${chapters.length}`;
  $('learnEyebrow').textContent = `CHAPTER ${String(ch.id).padStart(2,'0')} • CORE IDEA`;
  $('learnTitle').textContent = ch.title;
  $('learnLead').textContent = ch.lead;
  renderConcepts(ch); renderMemory(ch); renderVisual(ch); renderCard();
  $('markLearned').textContent = s.learned ? 'Learn completed ✓' : 'Mark Learn complete';
  $('markVisual').textContent = s.visual ? 'Visual completed ✓' : 'Mark Visual complete';
  qIndex=0; score=0; answered=false; $('quizLiveScore').textContent='0 correct'; renderQuestion();
  updateHeader(); updateDashboard();
}

$('markLearned').addEventListener('click',()=>{ currentProgress().learned=true; save(); $('markLearned').textContent='Learn completed ✓'; });
$('markVisual').addEventListener('click',()=>{ currentProgress().visual=true; save(); $('markVisual').textContent='Visual completed ✓'; });

$('flashcard').addEventListener('click',()=>{
  $('flashcard').classList.toggle('revealed');
  const s=currentProgress(); if(!s.flashSeen.includes(cardIndex)){s.flashSeen.push(cardIndex);save();}
});
$('prevCard').addEventListener('click',()=>{cardIndex=(cardIndex-1+currentChapter().cards.length)%currentChapter().cards.length;renderCard();});
$('againCard').addEventListener('click',()=>$('flashcard').classList.remove('revealed'));
$('easyCard').addEventListener('click',()=>{const s=currentProgress();if(!s.flashSeen.includes(cardIndex))s.flashSeen.push(cardIndex);save();cardIndex=(cardIndex+1)%currentChapter().cards.length;renderCard();});

$('nextQuestion').addEventListener('click',()=>{if(qIndex<currentChapter().quiz.length-1){qIndex++;renderQuestion();}else finishQuiz();});

document.querySelectorAll('.chapter-step').forEach(btn=>btn.addEventListener('click',()=>selectChapter(state.current+Number(btn.dataset.dir),'learn')));
$('continueBtn').addEventListener('click',()=>selectChapter(state.current,'learn'));

function openDrawer(){ $('chapterDrawer').classList.remove('hidden'); $('chapterDrawer').setAttribute('aria-hidden','false'); }
function closeDrawer(){ $('chapterDrawer').classList.add('hidden'); $('chapterDrawer').setAttribute('aria-hidden','true'); }
$('openChapters').addEventListener('click',openDrawer); $('closeDrawer').addEventListener('click',closeDrawer); $('drawerBackdrop').addEventListener('click',closeDrawer);

$('resetProgress').addEventListener('click',()=>{
  if(confirm('Reset all progress for the 10 chapters?')){ localStorage.removeItem(STORAGE_KEY); location.reload(); }
});

renderChapter();
updateDashboard();
showPanel('dashboard');
