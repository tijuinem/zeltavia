import { PhaseData, StoryData, AntiTranslationError } from '../types/course';

export const THEORY_INFO = {
  title: "El Método ZELTAVIA",
  subtitle: "Manual Completo de Gramática Inglesa por Fases de Frecuencia Léxica",
  summary: "Un sistema de adquisición de inglés que integra tres elementos con sólido respaldo científico: la frecuencia léxica real del idioma (listas Zeltavia), la exposición mediante narrativa comprensible (Krashen) y el entrenamiento auditivo simultáneo a la lectura (codificación dual).",
  acronymComponents: [
    {
      letter: "Z",
      name: "Zipfian Frequency Mapping",
      what: "Vocabulario en bandas de 1.000 palabras según su frecuencia real de uso; decide qué se aprende primero.",
      science: "Zipf (1949); Davies y Gardner (2010)"
    },
    {
      letter: "E",
      name: "Explicit Rules after Noticing",
      what: "Una micro-regla breve, el «Aha», aparece después del cuento y nunca antes; nombra un patrón que ya has visto.",
      science: "Schmidt (1990)"
    },
    {
      letter: "L",
      name: "Lexical Coverage Control",
      what: "Cada cuento se verifica para que conozcas la gran mayoría de sus palabras (objetivo de 95-98% o más).",
      science: "Hu y Nation (2000); Schmitt, Jiang y Grabe (2011)"
    },
    {
      letter: "T",
      name: "Targeted Comprehensible Input",
      what: "Historias que saturan una gramática concreta con input ligeramente por encima de tu nivel (i+1).",
      science: "Krashen (1985)"
    },
    {
      letter: "A",
      name: "Audio-Visual Dual Coding",
      what: "Lectura con voz sintetizada simultánea y palabra resaltada, para usar vista y oído a la vez.",
      science: "Paivio (1986)"
    },
    {
      letter: "V",
      name: "Vocabulary Spaced Repetition",
      what: "Repaso a intervalos crecientes y reciclaje deliberado de la fase anterior en cada cuento.",
      science: "Ebbinghaus (1885/1913); Cepeda et al. (2006)"
    },
    {
      letter: "I",
      name: "Incremental Graded Narratives",
      what: "Un cuento breve por fase, de complejidad creciente, dentro del nivel de cada banda.",
      science: "Nakanishi (2015)"
    },
    {
      letter: "A",
      name: "Active Output",
      what: "Repetición en voz alta (shadowing) de las frases clave. Hoy con control de velocidad para afianzar fluidez motora.",
      science: "Swain (1985)"
    }
  ],
  scientificPillars: [
    {
      title: "Hipótesis del Input Comprensible (Krashen)",
      description: "La adquisición ocurre por exposición a mensajes comprensibles (i+1) y no por memorizar reglas abstractas. La gramática se asimila de forma natural entendiendo historias."
    },
    {
      title: "Frecuencia Léxica y Ley de Zipf (Zipf; Davies & Gardner)",
      description: "Pocas palabras concentran la gran mayoría del uso real (listas Zeltavia). El vocabulario y la sintaxis se ordenan por impacto comunicativo directo."
    },
    {
      title: "Umbral de Cobertura Léxica (Hu & Nation; van Zeeland & Schmitt)",
      description: "Comprender un texto exige reconocer el 98% de sus palabras. Cada cuento se calibra para garantizar ese umbral (98.3% a 100%) sin lagunas léxicas."
    },
    {
      title: "Hipótesis del Noticing (Schmidt)",
      description: "Aprender exige percibir conscientemente el patrón. La micro-regla «Aha» va siempre después del cuento: nombra y consolida lo que ya acabas de percibir."
    },
    {
      title: "Curva del Olvido y Espaciado (Ebbinghaus; Cepeda et al.)",
      description: "El recuerdo requiere repaso distribuido. Cada fase recicla de forma deliberada el vocabulario y las estructuras previas dentro del nuevo relato."
    },
    {
      title: "Producción Activa y Codificación Dual (Swain; Paivio)",
      description: "Escuchar y leer a la vez refuerza la memoria visual y fonológica. El shadowing (repetición en voz alta) afianza la dicción y fluidez motora."
    }
  ],
  architecture: {
    vocabTrack: "Entrenamiento auditivo puro: Escuchar y memorizar las 5.000 palabras más frecuentes en bandas de 1.000 palabras. Reconocerlas de oído antes de encontrarlas combinadas.",
    grammarTrack: "Pista Gramatical: Añade la gramática necesaria para combinar esas palabras en frases con sentido comunicativo real: esqueleto básico, pasado, futuro/modales, experiencias/present perfect, cambio de foco/condicionales, matices de énfasis."
  },
  usageSteps: [
    "Escucha y estudia la banda de frecuencia de la fase en la pista de vocabulario hasta reconocerla de oído.",
    "Consulta brevemente la ficha de prerrequisitos de 2 minutos (Fase 0 o notas iniciales).",
    "Escucha y lee el cuento de la fase con voz sintetizada (TTS) en el Lector Inmersivo, sin detenerte a diseccionar cada frase.",
    "Repasa las micro-reglas 'Aha' que siguen al cuento para hacer consciente el patrón.",
    "Practica shadowing (repetición en voz alta) con las frases clave marcadas, ajustando la velocidad de audio.",
    "Consolida con el filtro anti-traducción y avanza a la siguiente fase reciclada."
  ],
  scopeNotice: "El Método ZELTAVIA está diseñado para producir fluidez funcional de comprensión y conversación cotidiana (las ~5.000 palabras más usadas). Quedan fuera de alcance de forma deliberada el lenguaje legal/académico ultra formal y el subjuntivo literario arcaico."
};

export const PHASE_0_DATA = {
  title: "Fase 0 — Antes de la Primera Historia",
  subtitle: "Ficha de Referencia Rápida (Lectura de 2 minutos)",
  description: "No es una fase de gramática tradicional: es la ficha de referencia indispensable. Es el 'i' mínimo necesario para que el primer cuento se entienda como un patrón reconocible y no como ruido arbitrario.",
  pronouns: [
    { en: "I", es: "yo", tip: "Siempre en mayúscula" },
    { en: "you", es: "tú / usted", tip: "Igual para singular y plural formal" },
    { en: "he", es: "él", tip: "Personas masculinas" },
    { en: "she", es: "ella", tip: "Personas femeninas" },
    { en: "it", es: "ello (cosas, animales, situaciones)", tip: "Obligatorio en inglés, nunca se omite" },
    { en: "we", es: "nosotros / nosotras", tip: "Incluye al hablante" },
    { en: "you", es: "vosotros / ustedes", tip: "Plural de segunda persona" },
    { en: "they", es: "ellos / ellas", tip: "Plural de personas, cosas o animales" }
  ],
  toBe: [
    { subject: "I", full: "am", contraction: "I'm", example: "I am Tom. (I'm Tom.)" },
    { subject: "you", full: "are", contraction: "you're", example: "You are my friend. (You're my friend.)" },
    { subject: "he / she / it", full: "is", contraction: "he's / she's / it's", example: "He is a teacher. It is late." },
    { subject: "we", full: "are", contraction: "we're", example: "We are together. (We're together.)" },
    { subject: "they", full: "are", contraction: "they're", example: "They are here. (They're here.)" }
  ],
  sRule: {
    rule: "En presente simple, con he / she / it, el verbo SIEMPRE añade una -s final:",
    examples: [
      { base: "I work", thirdPerson: "he works" },
      { base: "you like", thirdPerson: "she likes" },
      { base: "we go", thirdPerson: "it goes", note: "Si acaba en -o, -ch, -sh, -x, -s añade -es" }
    ],
    goldenRule: "Con I / you / we / they el verbo se queda tal cual (I work, you like, we go). Esta es la ÚNICA vez que el verbo cambia de forma en presente simple afirmativo. ¡Todo lo demás (preguntas y negativas) lo hace do/does!"
  }
};

export const PHASES_DATA: PhaseData[] = [
  {
    id: 1,
    number: 1,
    title: "Fase 1: El Esqueleto del Idioma",
    subtitle: "Presente simple, To Be, preguntas, artículos y estructura básica",
    frequencyBand: "Top 0 – 1.000 palabras más frecuentes",
    prerequisites: {
      summary: "Haber revisado la Fase 0 (pronombres, verbo to be en presente y la regla de la -s).",
      details: [
        "El sujeto nunca se omite en inglés (a diferencia del español).",
        "Formas de To Be: am / are / is.",
        "Tercera persona singular añade -s en presente afirmativo."
      ]
    },
    thematicVocabulary: [
      { word: "kitchen", translation: "cocina", context: "In the house, there is a kitchen..." },
      { word: "bedroom(s)", translation: "dormitorio(s)", context: "...and two bedrooms." },
      { word: "bathroom", translation: "cuarto de baño", context: "First, he goes to the bathroom." },
      { word: "garden", translation: "jardín", context: "It has a bigger garden." },
      { word: "coffee", translation: "café", context: "Makes some coffee." },
      { word: "bread", translation: "pan", context: "He also eats a little bread." },
      { word: "lunch", translation: "almuerzo / comida", context: "They often eat lunch together." },
      { word: "dinner", translation: "cena", context: "She is making dinner." },
      { word: "rice", translation: "arroz", context: "Some rice, some vegetables..." },
      { word: "vegetable(s)", translation: "verdura(s)", context: "Some vegetables and meat." },
      { word: "meat", translation: "carne", context: "...and a little meat." },
      { word: "neighbor", translation: "vecino / vecina", context: "He sees a new neighbor." },
      { word: "shop(s)", translation: "tienda(s)", context: "There are some good shops here." },
      { word: "quiet", translation: "tranquilo / silencioso", context: "A nice, quiet town." },
      { word: "tired", translation: "cansado / cansada", context: "Are you tired? A little." },
      { word: "sleep", translation: "dormir", context: "She sleeps in the morning." },
      { word: "men", translation: "hombres (plural de man)", context: "A man like many other men." },
      { word: "warm", translation: "cálido / acogedor", context: "It is warm and nice." },
      { word: "smile", translation: "sonrisa / sonreír", context: "Tom says with a smile." },
      { word: "hello", translation: "hola", context: "Hello, says Tom." },
      { word: "flower(s)", translation: "flor(es)", context: "There are many flowers." },
      { word: "yesterday", translation: "ayer", context: "Yesterday was different." },
      { word: "weather", translation: "tiempo meteorológico", context: "The weather was cold." },
      { word: "tomorrow", translation: "mañana (día siguiente)", context: "Tomorrow is a new day." },
      { word: "Monday(s)", translation: "lunes", context: "He doesn't like Mondays." }
    ],
    lexicalCoverageStats: {
      wordCount: 606,
      coveragePercent: 98.3,
      outOfControlTokens: "10 tokens de única aparición",
      benchmarkNote: "Dentro del objetivo de 95-98% de comprensión fijado por Hu & Nation."
    },
    storyMeta: {
      id: "story-1",
      title: "A Normal Day",
      estimatedReadTime: "4 minutos",
      focus: "Rutinas diarias de Tom y Anna, contrastando presente simple y continuo."
    },
    ahaRules: [
      {
        number: 1,
        title: "El sujeto nunca desaparece",
        description: "En español decimos 'Llueve' o 'Es tarde' sin sujeto. En inglés hace falta siempre un sujeto formal aunque no represente a nadie.",
        examples: [
          "it is dark (está oscuro / es de noche)",
          "it is a nice day (es un buen día)",
          "it is seven in the morning (son las siete de la mañana)"
        ],
        keyInsight: "El 'it' no traduce nada, solo ocupa el hueco indispensable del sujeto inglés."
      },
      {
        number: 2,
        title: "To be: is / are / was / were",
        description: "Un solo verbo con cuatro caras esenciales. Presente con he/she/it → is. Presente con you/we/they → are. En pasado: is → was, are → were.",
        examples: [
          "He is standing in the kitchen",
          "There are many flowers",
          "Yesterday was different, and Tom wasn't very happy"
        ],
        keyInsight: "El cuento reserva el pasado solo al final ('was/wasn't') para asimilar primero el presente sin mezclas prematuras."
      },
      {
        number: 3,
        title: "La -s de la tercera persona",
        description: "Con he/she/it en presente simple afirmativo, el verbo añade obligatoriamente -s. Con I/you/we/they se mantiene idéntico a la base.",
        examples: [
          "he gets up, he goes, he teaches, she works, she sleeps",
          "I work, you like, they eat lunch together"
        ],
        keyInsight: "Es la única variación de forma que experimenta el verbo regular en presente simple."
      },
      {
        number: 4,
        title: "Presente simple vs. Presente continuo",
        description: "'He teaches children' expresa su rutina habitual, profesión permanente. 'He is making coffee' describe la acción que ocurre en este preciso instante.",
        examples: [
          "Rutina: He works at school. Anna sleeps in the morning.",
          "Momento exacto: Tom is standing in the kitchen. She is making dinner."
        ],
        keyInsight: "El continuo siempre lleva is/are + verbo-ing. La -s nunca se añade a un continuo ('he is makes' es un error grave)."
      },
      {
        number: 5,
        title: "Do / Does no significan nada: solo preguntan y niegan",
        description: "En preguntas y negaciones simples, el verbo real conserva su forma base. Do/does opera como operador sintáctico.",
        examples: [
          "Does Tom have many friends? (El verbo real es have; does abre la pregunta)",
          "He doesn't like Mondays (El verbo real es like; doesn't niega)",
          "Do you have a lot of work today?"
        ],
        keyInsight: "La -s de la 3ª persona se 'absorbe' en does/doesn't. Es 'does he like', nunca 'does he likes'."
      },
      {
        number: 6,
        title: "A / An / The / Artículo cero",
        description: "a job, a car (algo no específico, por primera vez) · the kitchen, the town (algo concreto ya conocido) · Mondays, coffee, food (sin artículo, conceptos en general).",
        examples: [
          "Tom is a teacher (profesión no específica)",
          "Anna is in the kitchen (la cocina de la casa, conocida)",
          "They eat lunch, coffee, bread (incontables o genéricos sin 'the')"
        ]
      },
      {
        number: 7,
        title: "Contables e incontables + some / any / much / many",
        description: "Contables (se cuentan uno a uno): a car, many students, many friends. Incontables (materia continua): some coffee, some rice, a little meat, not much time.",
        examples: [
          "Do you have a lot of work? / Not much time.",
          "Some rice, some vegetables, and a little meat.",
          "Some se usa en afirmativa; any en preguntas y negativas habituales."
        ]
      },
      {
        number: 8,
        title: "Comparativo y superlativo",
        description: "Regla del sufijo -er para adjetivos breves: smaller, bigger (con duplicación de consonante). Para 'good', el superlativo irregular es 'the best' (nunca 'the goodest').",
        examples: [
          "Laura's house is smaller than Tom's house",
          "It has a bigger garden",
          "It's not the best garden, but I like it"
        ]
      },
      {
        number: 9,
        title: "Preposiciones in / on / at",
        description: "at: un punto o momento exacto (at seven, at ten, at work, at school). in: espacio delimitado o periodo amplio (in the kitchen, in the morning, in the garden). on: días de la semana (on Mondays).",
        examples: [
          "at seven in the morning",
          "at school / at home",
          "on Mondays"
        ]
      }
    ],
    chunks: [
      { phrase: "What's your name?", meaning: "¿Cómo te llamas?", note: "Fórmula fija indivisible" },
      { phrase: "How are you? / I'm fine, thanks.", meaning: "¿Cómo estás? / Estoy bien, gracias.", note: "Saludo social automático" },
      { phrase: "I don't know", meaning: "No lo sé / No sé", note: "Uso diario instantáneo" },
      { phrase: "Nice to meet you (too)", meaning: "Encantado/a de conocerte (igualmente)", note: "Presentaciones" }
    ],
    antiTranslation: [
      {
        rule: "El sujeto formal 'it' nunca se suprime",
        wrong: "Is dark / Rains / Is a nice day",
        right: "It is dark / It rains / It is a nice day",
        why: "En inglés la oración no puede carecer de sujeto gramatical visible."
      },
      {
        rule: "'People' es plural en inglés y concierta con 'are'",
        wrong: "The people is nice",
        right: "The people are nice",
        why: "People representa colectivamente a 'las personas', por lo que el verbo va siempre en plural."
      }
    ],
    repasoObligatorio: "El cuento de la Fase 2 reciclará: to be, do/does, algún comparativo, y al menos dos de los chunks de esta fase."
  },
  {
    id: 2,
    number: 2,
    title: "Fase 2: Narrar el Pasado",
    subtitle: "Pasado regular (-ed), verbos irregulares clave, did universal, used to y pasado continuo",
    frequencyBand: "Top 1.000 – 2.000 palabras más frecuentes",
    prerequisites: {
      summary: "Fases 0 y 1 completas (pronombres, to be, regla de -s, do/does, artículos, comparativos).",
      details: [
        "Pasado regular (-ed) y variantes ortográficas (stop→stopped, carry→carried).",
        "'Did' como auxiliar universal en pasado (todas las personas por igual, verbo vuelve a base en preguntas/negativas)."
      ]
    },
    thematicVocabulary: [
      { word: "cave", translation: "cueva", context: "They found a small cave near the path..." },
      { word: "noise", translation: "ruido", context: "Then, they heard a strange noise." },
      { word: "hungry", translation: "hambriento / con hambre", context: "It looked hungry and cold." },
      { word: "pack / packed", translation: "hacer las maletas / empacar", context: "They packed their bags and left early." },
      { word: "Friday", translation: "viernes", context: "On Friday, they packed their bags..." },
      { word: "umbrella", translation: "paraguas", context: "They didn't have an umbrella..." },
      { word: "quietly", translation: "en voz baja / sigilosamente", context: "Anna said quietly." }
    ],
    lexicalCoverageStats: {
      wordCount: 764,
      coveragePercent: 100.0,
      outOfControlTokens: "0 tokens fuera de control",
      benchmarkNote: "100% de cobertura total sobre el vocabulario acumulado."
    },
    storyMeta: {
      id: "story-2",
      title: "The Strange Trip",
      estimatedReadTime: "5 minutos",
      focus: "La escapada de fin de semana de Tom y Anna a la montaña y el rescate del perro Rex."
    },
    ahaRules: [
      {
        number: 1,
        title: "Pasado regular: Verbo + -ed y variantes",
        description: "walk→walked, look→looked. Reglas fonéticas/ortográficas: doblar consonante en monosílabos acentuados (plan→planned), si termina en -e solo añadir -d (decide→decided), si termina en consonante+y cambia a -ied (carry→carried).",
        examples: [
          "They walked for two hours",
          "They planned the trip for two weeks",
          "Tom picked it up and carried it"
        ]
      },
      {
        number: 2,
        title: "Los verbos irregulares se asimilan por uso",
        description: "No añaden -ed: go→went, see→saw, have→had, get→got, come→came, find→found, hear→heard, leave→left, run→ran, say→said. No hay atajo formal, se adquieren viéndolos repetidamente en contexto.",
        examples: [
          "They left early in the morning",
          "They heard a strange noise",
          "Paul saw the dog and his face changed completely"
        ]
      },
      {
        number: 3,
        title: "'Did' sirve para todas las personas",
        description: "No existe 'he dids' ni 'did she went'. Did es universal para I, you, he, she, it, we, they. En cuanto aparece did/didn't, el verbo principal recupera su forma base desnuda.",
        examples: [
          "Did you hear that? (nunca 'Did you heard?')",
          "He didn't want to leave it alone (nunca 'He didn't wanted')",
          "They didn't have much time"
        ]
      },
      {
        number: 4,
        title: "Pasado simple vs. Pasado continuo: La interrupción",
        description: "'They walked for two hours' = acción concluida. 'Paul was walking near the door' = acción en progreso en un instante pretérito. El patrón central es la interrupción: acción larga en continuo cortada por una acción puntual en simple.",
        examples: [
          "They were waiting in the cave when they heard a noise",
          "Paul was walking near the door when Tom arrived"
        ]
      },
      {
        number: 5,
        title: "Conectores temporales de relato",
        description: "suddenly (de repente), then (entonces), meanwhile (mientras tanto), after a while (al cabo de un rato), until (hasta que). Dan fluidez cronológica sin recurrir continuamente al manido 'and then'.",
        examples: [
          "Suddenly, it started to rain",
          "Meanwhile, back at the hotel, Paul was walking near the door",
          "The rain stopped after a while"
        ]
      },
      {
        number: 6,
        title: "Used to: Hábitos y realidades que ya no existen",
        description: "'We used to travel a lot' = solíamos viajar antes, pero ahora ya no. Se diferencia del pasado simple en que describe una época o hábito extinguido, no un suceso puntual.",
        examples: [
          "We used to sleep in cheap hotels and eat simple food",
          "It used to have an owner, I think, but now it doesn't"
        ]
      }
    ],
    chunks: [
      { phrase: "Did you hear that? / Yes, I did.", meaning: "¿Has oído eso? / Sí, lo oí.", note: "Respuesta corta con auxiliar" },
      { phrase: "I don't know", meaning: "No lo sé (repaso activo de Fase 1)", note: "Mantiene presente en diálogos" },
      { phrase: "Thank you so much", meaning: "Muchísimas gracias", note: "Cortesía intensificada" },
      { phrase: "Poor thing", meaning: "Pobrecillo / Pobrecilla", note: "Empatía coloquial inglesa" }
    ],
    antiTranslation: [
      {
        rule: "La edad en inglés se 'es' (To Be), no se 'tiene' (Have)",
        wrong: "I had 20 years",
        right: "I was 20 years old / I was 20",
        why: "En inglés la edad es un estado de existencia temporal, no una posesión material."
      },
      {
        rule: "didn't + infinitivo base (nunca duplicar pasado)",
        wrong: "He didn't wanted / Did you heard?",
        right: "He didn't want / Did you hear?",
        why: "El pasado gramatical ya lo carga el auxiliar did; poner el verbo en pasado sería una redundancia errónea."
      }
    ],
    repasoCumplido: "to be reforzado en pasado (was/were), did como sustituto de do/does, comparativos (better, more comfortable), incontables (much time, a few things).",
    repasoObligatorio: "El cuento de la Fase 3 reciclará: pasado simple y continuo, al menos 3 verbos irregulares de esta lista, y el chunk 'I don't know'."
  },
  {
    id: 3,
    number: 3,
    title: "Fase 3: Decisiones, Futuro y Posibilidad",
    subtitle: "Modales (can, could, must, should, might), los 3 futuros y el primer condicional",
    frequencyBand: "Top 2.000 – 3.000 palabras más frecuentes",
    prerequisites: {
      summary: "Fases 0, 1 y 2 completadas satisfactoriamente.",
      details: [
        "Los modales (can, could, must, should, might, may) NUNCA cambian de forma: ni llevan -s en 3ª persona ni llevan 'to' detrás.",
        "Contraste con 'have to': 'have to' sí es un verbo normal y por tanto dice 'he has to go'."
      ]
    },
    thematicVocabulary: [
      { word: "September", translation: "septiembre", context: "They want me to start in September." },
      { word: "Saturday", translation: "sábado", context: "We're having dinner with my parents on Saturday." },
      { word: "email", translation: "correo electrónico", context: "Tom got an email from a school..." },
      { word: "wow", translation: "¡vaya! / ¡guau!", context: "Wow, Anna said. What do you think?" },
      { word: "excited", translation: "ilusionado / emocionado", context: "They were excited about their new life." }
    ],
    lexicalCoverageStats: {
      wordCount: 645,
      coveragePercent: 98.9,
      outOfControlTokens: "Solo 5 palabras temáticas nuevas",
      benchmarkNote: "Mayor solidez léxica al abarcar el acumulado de las 3.000 palabras más usadas."
    },
    storyMeta: {
      id: "story-3",
      title: "A Big Decision",
      estimatedReadTime: "4.5 minutos",
      focus: "La oferta laboral que recibe Tom para ser director en otra ciudad y la deliberación familiar."
    },
    ahaRules: [
      {
        number: 1,
        title: "Los modales nunca cambian de forma",
        description: "can, could, must, should, might, may son inmutables para cualquier sujeto: I can, he can, she can (jamás 'he cans'). Y siempre van seguidos directamente del verbo en su forma base pura sin 'to': you should read, no 'you should to read'.",
        examples: [
          "Can you do it?",
          "You should read this",
          "We must think about the future"
        ]
      },
      {
        number: 2,
        title: "'Have to' no es un modal: es un verbo común",
        description: "A diferencia de must, 'have to' sí se conjuga como verbo ordinario: he has to go (con -s), he had to give an answer (en pasado). Must carece de pasado propio.",
        examples: [
          "He had to give an answer by Friday (pasado de have to)",
          "We must think about the future (must es modal invariable)"
        ]
      },
      {
        number: 3,
        title: "La escala de matices en los modales",
        description: "can = habilidad o permiso ('Can you do it?') · could = posibilidad suave o cortesía ('I could ask for more time') · must = obligación moral o necesidad imperiosa ('we must think') · have to = obligación impuesta por las circunstancias ('he had to decide') · should = consejo ('you should take the risk') · might / may = posibilidad incierta ('you may not find a job', 'we might always wonder').",
        examples: [
          "You should take the risk (consejo)",
          "We might always wonder (posibilidad remota)"
        ]
      },
      {
        number: 4,
        title: "Los tres futuros del inglés",
        description: "1. will = decisión espontánea o predicción no planificada ('we will have more money'). 2. going to = plan preconcebido o intención madurada ('I'm going to call them'). 3. presente continuo = cita fija con día/hora acordada en agenda ('We're having dinner on Saturday').",
        examples: [
          "I'm going to say yes (intención decidida)",
          "We're having dinner with my parents on Saturday (agenda cerrada)",
          "We will have some time to plan (predicción lógica)"
        ]
      },
      {
        number: 5,
        title: "Primer condicional: if + presente, will + base",
        description: "La condición real de futuro exige presente tras 'if': 'If you take the job, we will have more money'. El error hispano número uno es meter will dentro del if ('if it will rain').",
        examples: [
          "If you take the job, we will have more money",
          "If we don't try, we might always wonder (variante con modal)"
        ]
      }
    ],
    chunks: [
      { phrase: "What do you think?", meaning: "¿Qué opinas? / ¿Qué te parece?", note: "Petición de criterio" },
      { phrase: "I'm not sure", meaning: "No estoy seguro/a", note: "Duda ponderada" },
      { phrase: "That's true", meaning: "Es verdad / Tienes razón", note: "Acuerdo en diálogo" },
      { phrase: "Let's do it", meaning: "Hagámoslo / ¡Adelante!", note: "Llamada a la acción decidida" }
    ],
    antiTranslation: [
      {
        rule: "if + presente simple (jamás 'if + will')",
        wrong: "If it will rain tomorrow / If you will take the job",
        right: "If it rains tomorrow / If you take the job",
        why: "En las oraciones subordinadas condicionales en inglés el presente asume el valor de futuro."
      },
      {
        rule: "can vs could: no usar 'can' para todas las peticiones",
        wrong: "Can I to ask for more time? / I can to go",
        right: "Could I ask for more time? / I could ask",
        why: "Could suaviza la petición educadamente y los modales nunca admiten la partícula 'to'."
      }
    ],
    repasoCumplido: "to be, comparativos (better position, more money), chunks 'I don't know', pasado en el epílogo ('they moved', 'they were happy').",
    repasoObligatorio: "El cuento de la Fase 4 reciclará: al menos un modal, uno de los 3 futuros, y el primer condicional, dentro de una trama en present perfect."
  },
  {
    id: 4,
    number: 4,
    title: "Fase 4: Experiencias y Conexión",
    subtitle: "Present Perfect, participios irregulares, ever/never/already/yet, for vs since y phrasal verbs",
    frequencyBand: "Top 3.000 – 4.000 palabras más frecuentes",
    prerequisites: {
      summary: "Fases 0, 1, 2 y 3 completas.",
      details: [
        "El Present Perfect requiere la tercera columna: el PARTICIPIO pasado (gone, seen, done, written, spoken, etc.).",
        "Muchos verbos irregulares tienen participio distinto del pasado simple (ej. saw vs seen, wrote vs written)."
      ]
    },
    thematicVocabulary: [
      { word: "interviewer", translation: "entrevistador / entrevistadora", context: "The interviewer, Mrs. Green, asked." },
      { word: "position", translation: "puesto de trabajo / vacante", context: "An interview for a teaching position." },
      { word: "rang", translation: "sonó (pasado de ring)", context: "That evening, her phone rang." }
    ],
    lexicalCoverageStats: {
      wordCount: 570,
      coveragePercent: 99.6,
      outOfControlTokens: "Solo 2 residuales de un solo uso",
      benchmarkNote: "Comprensión casi absoluta del 99.6% cruzado con el corpus léxico acumulado."
    },
    storyMeta: {
      id: "story-4",
      title: "The Interview",
      estimatedReadTime: "4 minutos",
      focus: "La entrevista de trabajo de Anna como profesora en la nueva ciudad y la consolidación de su hogar."
    },
    ahaRules: [
      {
        number: 1,
        title: "Participio irregular ≠ Pasado simple",
        description: "En Fase 2 aprendiste la 2ª columna (went, saw, did, wrote). Para el present perfect requieres la 3ª forma: gone, seen, done, given, taken, written, spoken, eaten, broken, known, grown, begun.",
        examples: [
          "She had done that too",
          "We've grown as a family",
          "It had gone well"
        ]
      },
      {
        number: 2,
        title: "Present Perfect vs. Pasado Simple: El nexo con el presente",
        description: "'I've taught for eight years' = sigo enseñando hoy, el periodo sigue abierto. 'I taught in Madrid in 2015' = acción cerrada en fecha fija extinta. El present perfect NUNCA admite fechas pasadas cerradas (nunca 'I have visited Paris in 2019').",
        examples: [
          "I've worked here for three years (sigue trabajando allí hoy)",
          "Before that, I worked at a bigger school (etapa pasada finalizada)"
        ]
      },
      {
        number: 3,
        title: "Ever / Never / Already / Yet / Just",
        description: "ever = alguna vez en tu vida (preguntas: 'Have you ever taught...?') · never = jamás ('I've never given up') · already = ya, antes de lo previsto ('Have you already found a house?') · yet = aún/todavía en preguntas o negaciones ('Not yet') · just = acabar de ('My husband has just accepted').",
        examples: [
          "Have you ever taught young children?",
          "Many of our students have just arrived",
          "Have you already found a house? - Not yet"
        ]
      },
      {
        number: 4,
        title: "For vs. Since",
        description: "for + duración o cantidad de tiempo (for eight years, for three years) · since + punto exacto de partida cronológica (since 2018).",
        examples: [
          "I've taught for eight years now, since 2018 (ambos coexisten clarísimamente en el cuento)"
        ]
      },
      {
        number: 5,
        title: "Verb Patterns: Gerundio (-ing) vs Infinitivo con 'to'",
        description: "Dependen del verbo que manda: enjoy + -ing (enjoyed helping) · decide + to (decided to ask) · want + to (want to move) · hope + to (hope to find) · look forward to + -ing (looking forward to starting).",
        examples: [
          "I've always enjoyed helping students",
          "She decided to ask a question",
          "I'm looking forward to it"
        ]
      },
      {
        number: 6,
        title: "Phrasal Verbs de alta frecuencia",
        description: "give up (rendirse) · find out (averiguar/descubrir) · look forward to (tener muchas ganas de) · fit in (encajar) · figure out (descifrar/entender) · work out (salir bien/resolverse) · come along (progresar).",
        examples: [
          "I've never given up on a difficult student",
          "We think you'll fit in well here",
          "We're still figuring out where everything goes"
        ]
      }
    ],
    chunks: [
      { phrase: "I can't believe it", meaning: "No me lo puedo creer", note: "Asombro genuino" },
      { phrase: "I'm really happy to hear that", meaning: "Me alegra muchísimo oír eso", note: "Respuesta empática profesional" },
      { phrase: "How's it coming along?", meaning: "¿Cómo va marchando / cómo progresa?", note: "Pregunta por proyectos en curso" },
      { phrase: "I've never been happier", meaning: "Nunca he sido más feliz", note: "Present perfect superlativo" }
    ],
    antiTranslation: [
      {
        rule: "Make vs. Do en acciones fijas",
        wrong: "I have made that too / He has done a decision",
        right: "I have done that too / He has made a decision",
        why: "Do se asocia a tareas y acciones generales; Make a la creación, decisiones y planes."
      },
      {
        rule: "No poner fechas cerradas en Present Perfect",
        wrong: "I have visited London in 2018",
        right: "I visited London in 2018 / I have visited London",
        why: "Una fecha cerrada extingue la conexión con el presente, obligando al Past Simple."
      }
    ],
    repasoCumplido: "to be, modales (could, want to), futuros (going to, will, presente continuo), comparativos (happier, bigger).",
    repasoObligatorio: "El cuento de la Fase 5 reciclará: present perfect, al menos dos phrasal verbs, y un verb pattern."
  },
  {
    id: 5,
    number: 5,
    title: "Fase 5: Cambiar el Foco",
    subtitle: "Past Perfect, Would, estilo indirecto (backshifting), voz pasiva, 2º y 3º condicional, wish y oraciones de relativo",
    frequencyBand: "Top 4.000 – 5.000 palabras más frecuentes",
    prerequisites: {
      summary: "Fases 0 a 4 completadas.",
      details: [
        "Pasado perfecto (had + participio): el pasado previo a otro pasado ('antes de que llegara Tom, alguien ya se había llevado el dinero').",
        "'Would' como modal formal (pasado de will en estilo indirecto y núcleo de los condicionales 2º y 3º)."
      ]
    },
    thematicVocabulary: [
      { word: "euros", translation: "euros", context: "Someone had taken almost two hundred euros." },
      { word: "grey", translation: "gris (ortografía británica de gray)", context: "He was wearing a grey jacket." },
      { word: "café", translation: "cafetería / café", context: "The police found the man in a café..." },
      { word: "steal → stole → stolen", translation: "robar (participio irregular nuevo)", context: "He had stolen the money." }
    ],
    lexicalCoverageStats: {
      wordCount: 614,
      coveragePercent: 99.5,
      outOfControlTokens: "0 tokens descontrolados tras paquete temático",
      benchmarkNote: "Dominio de las 5.000 palabras más representativas del idioma inglés contemporáneo."
    },
    storyMeta: {
      id: "story-5",
      title: "Missing Money",
      estimatedReadTime: "4.5 minutos",
      focus: "La desaparición de la caja de efectivo en el colegio de Tom, la investigación policial y las reflexiones morales."
    },
    ahaRules: [
      {
        number: 1,
        title: "Pasado Perfecto: had + participio (El pasado dentro del pasado)",
        description: "Sirve para ordenar cronológicamente dos sucesos del pasado: el que ocurrió ANTES lleva had + participio. 'Tom arrived and noticed the money was empty. Someone had taken it.' El robo ocurrió con anterioridad a la llegada de Tom.",
        examples: [
          "Someone had taken almost two hundred euros",
          "He had lost his job a few months before"
        ]
      },
      {
        number: 2,
        title: "Would: El modal formal indispensable",
        description: "Invariable, seguido de infinitivo base (he would come, nunca 'he woulds'). Cumple dos misiones clave: pasado de 'will' en estilo indirecto y motor de hipótesis en los condicionales.",
        examples: [
          "He said he would come back (en presente dijo: 'I will come back')",
          "I don't think I would do the same thing"
        ]
      },
      {
        number: 3,
        title: "Estilo Indirecto: El salto hacia atrás (Backshifting)",
        description: "Al reportar lo dicho por otro, los tiempos retroceden un grado: presente→pasado ('I am looking' → he said he was looking), pasado simple→pasado perfecto ('I saw him' → she said she had seen him), will→would, can→could.",
        examples: [
          "He told me he was looking for the head teacher",
          "A woman told that she had seen the same man"
        ]
      },
      {
        number: 4,
        title: "Voz Pasiva: Cuando importa el hecho, no el ejecutor",
        description: "Estructura: To Be + participio pasado. 'The lock hasn't been broken' (lo que importa es el estado de la cerradura). 'He was arrested' (el foco está en el sospechoso, no es necesario recalcar 'la policía').",
        examples: [
          "The lock hasn't been broken",
          "He was arrested and questioned",
          "He wasn't sent to prison"
        ]
      },
      {
        number: 5,
        title: "Segundo Condicional: Hipótesis de presente (if + past, would + base)",
        description: "Describe situaciones imaginarias o irreales: 'If I were in his position, I wouldn't do the same thing'. En registro formal se utiliza 'were' para todas las personas (If I were, if he were).",
        examples: [
          "If I were in his position, I wouldn't do that"
        ]
      },
      {
        number: 6,
        title: "Tercer Condicional: El pasado inalterable (if + had done, would have done)",
        description: "Expresa lo que habría sucedido si el pasado hubiese sido diferente: 'If he had asked for help, someone would have helped him'. Se usa constantemente al reflexionar sobre equivocaciones pasadas.",
        examples: [
          "If he had asked for help, someone would have helped him",
          "If we had done that from the beginning, none of this would have happened"
        ]
      },
      {
        number: 7,
        title: "Wish / If only + Pasado Perfecto: Arrepentimiento sincero",
        description: "Para lamentar no haber hecho algo en el pasado: 'I wish I had checked it twice' / 'If only he had asked'. 'If only' aporta un tono aún más emocional o enfático.",
        examples: [
          "I wish I had checked it twice",
          "If only he had asked. It's sad."
        ]
      },
      {
        number: 8,
        title: "Oraciones de Relativo: Defining vs. Non-Defining",
        description: "Sin comas (defining, esencial para identificar de quién se habla): 'the people who work at the school'. Con comas (non-defining, información añadida que se podría omitir): 'Mark, who has been a teacher here for many years, ...'.",
        examples: [
          "The man, whose name was Peter Owen, admitted...",
          "The money, which he hadn't spent yet, was found in his bag"
        ]
      }
    ],
    chunks: [
      { phrase: "I wish I had...", meaning: "Ojalá hubiera / Desearía haber...", note: "Expresión de deseo retrospectivo" },
      { phrase: "If only...", meaning: "Si tan solo... / Ojalá...", note: "Énfasis emocional" },
      { phrase: "I don't think I would...", meaning: "No creo que yo hiciera...", note: "Ponderación diplomática" },
      { phrase: "You can't blame yourself", meaning: "No puedes culparte", note: "Alivio y consuelo interpersonal" }
    ],
    antiTranslation: [
      {
        rule: "El pasado perfecto no es un adorno: sirve para secuenciar",
        wrong: "I had gone to the supermarket yesterday (si fue un acto único)",
        right: "I went to the supermarket yesterday",
        why: "Solo se usa past perfect cuando necesitas situarlo antes de otro evento pasado concreto."
      },
      {
        rule: "Subjuntivo condicional 'If I were' en registro cuidado",
        wrong: "If I was in his position (en contexto formal)",
        right: "If I were in his position",
        why: "'Were' es la forma culta y precisa para todas las personas en oraciones irreales de segundo condicional."
      }
    ],
    repasoCumplido: "present perfect ('he has done this before'), phrasal verbs (find out, turn out), verb pattern (want to ask), modales pasados (must have had).",
    repasoObligatorio: "El cuento de la Fase 6 reciclará: voz pasiva, reported speech, y al menos un condicional (2º o 3º), dentro de una historia con matices estilísticos."
  },
  {
    id: 6,
    number: 6,
    title: "Fase 6: Matices y 'Deshispanización'",
    subtitle: "Cleft sentences, inversión enfática, puntuación que altera el sentido y diferencias UK/US",
    frequencyBand: "Top 5.000 palabras + colocaciones avanzadas",
    prerequisites: {
      summary: "Fases 0, 1, 2, 3, 4 y 5 completadas.",
      details: [
        "'What' como pronombre relativo sustantivado ('lo que', no como pregunta interrogativa): 'What we need is a plan'.",
        "Inversión de sujeto y auxiliar tras adverbios negativos o restrictivos (never, rarely, not only): estructura de pregunta sin signo de interrogación."
      ]
    },
    thematicVocabulary: [
      { word: "November", translation: "noviembre", context: "On a cold morning in November..." },
      { word: "fundraising", translation: "recaudación de fondos", context: "The teachers organized fundraising events." },
      { word: "dedication", translation: "dedicación / entrega", context: "Never have I seen so much dedication in one place." },
      { word: "poetic", translation: "poético / inspirador", context: "Rarely do you sound this poetic." }
    ],
    lexicalCoverageStats: {
      wordCount: 640,
      coveragePercent: 99.4,
      outOfControlTokens: "0 tokens ajenos al marco de referencia",
      benchmarkNote: "Culminación del currículum cerrado de adquisición funcional de alta frecuencia."
    },
    storyMeta: {
      id: "story-6",
      title: "The Meeting That Changed Everything",
      estimatedReadTime: "5 minutos",
      focus: "La reunión crucial del ayuntamiento para salvar el colegio y la inesperada ayuda de Laura."
    },
    ahaRules: [
      {
        number: 1,
        title: "Cleft sentences con 'it': Partir la frase para dar máximo relieve",
        description: "En vez de la estructura neutra 'This school gave me my first job', se fractura con 'It was + elemento relevante + that/who': 'It was this school that gave me my first job'. Pone un foco dramático e incisivo.",
        examples: [
          "It was this school that gave me my first job",
          "It was Laura who saved us, really",
          "It's this school that has given hundreds of children a chance"
        ]
      },
      {
        number: 2,
        title: "Cleft sentences con 'what': Lo que importa es...",
        description: "Permite colocar en primera posición el concepto rector: 'What we need is a plan' (= lo que necesitamos es un plan). 'What really saved the school wasn't the money' (= lo que de verdad salvó al colegio no fue el dinero).",
        examples: [
          "What we need is a plan, a good one, and fast",
          "What really matters here is whether we're willing to invest",
          "What really saved the school wasn't the money"
        ]
      },
      {
        number: 3,
        title: "Inversión tras adverbios negativos o restrictivos",
        description: "Al iniciar una frase formal con Never, Rarely, Not only, Seldom, Little..., el sujeto y el verbo auxiliar invierten su orden exactamente igual que en una pregunta, generando un impacto retórico supremo.",
        examples: [
          "Never have I seen so much dedication (en vez de 'I have never seen')",
          "Rarely do you sound this poetic (en vez de 'You rarely sound')",
          "Not only have the teachers worked extra hours... but they have also organized events"
        ],
        keyInsight: "'Not only' va siempre emparejado simétricamente con 'but also' en la segunda cláusula."
      },
      {
        number: 4,
        title: "La coma que transforma el significado ontológico",
        description: "La puntuación en las oraciones de relativo delimita si la información define o simplemente añade un dato supletorio. Sin comas: 'My brother who lives in London is a doctor' (tengo varios hermanos, hablo concretamente del de Londres). Con comas: 'My brother, who lives in London, is a doctor' (tengo un único hermano, y además apunto que reside en Londres).",
        examples: [
          "Tom, who had been so worried for weeks, finally felt like he could breathe again",
          "The school, which had almost closed forever, now had a real chance"
        ]
      },
      {
        number: 5,
        title: "Diferencias ortográficas y léxicas UK vs. US",
        description: "grey (UK) / gray (US) · colour (UK) / color (US) · travelled (UK) / traveled (US) · organise (UK) / organize (US). Ninguna variante es superior o incorrecta: la regla de oro es mantener una coherencia estilística unificada a lo largo del texto.",
        examples: [
          "Variantes ortográficas paralelas perfectamente válidas",
          "Coherencia en la elección de norma editorial"
        ]
      }
    ],
    chunks: [
      { phrase: "What we need is...", meaning: "Lo que necesitamos es...", note: "Estructura enfática para liderar" },
      { phrase: "It was... who / that...", meaning: "Fue... quien / que...", note: "Poner el foco en el protagonista" },
      { phrase: "Small world, isn't it?", meaning: "El mundo es un pañuelo, ¿verdad?", note: "Coincidencias de la vida" },
      { phrase: "Don't get used to it", meaning: "No te acostumbres", note: "Respuesta cómplice e irónica" }
    ],
    antiTranslation: [
      {
        rule: "No omitir el auxiliar en inversiones negativas",
        wrong: "Never I have seen such dedication",
        right: "Never have I seen such dedication",
        why: "La colocación frontal del adverbio negativo desencadena obligatoriamente la inversión de auxiliar y sujeto."
      },
      {
        rule: "Distinción entre Tell y Say con objeto indirecto",
        wrong: "He said me / He told that",
        right: "He told me / He said that",
        why: "Tell requiere obligatoriamente a quién se le dice (told me, told Anna); Say conecta con el contenido dicho."
      }
    ],
    repasoCumplido: "voz pasiva ('letters were written'), reported speech ('he would be fine'), tercer condicional ('if the council hadn't agreed... would have happened'), relativas explicativas y especificativas.",
    repasoObligatorio: "Consolidación de las 6 fases: El curriculum gramatical completo de ZELTAVIA queda cerrado y verificado con datos reales."
  }
];

export const CONSOLIDATED_ANTI_TRANSLATION_TABLE: AntiTranslationError[] = [
  {
    typicalError: "Rains / Is dark (sin sujeto)",
    correctForm: "It rains / It is dark",
    explanation: "En inglés el pronombre formal 'it' es obligatorio para verbos meteorológicos o impersonales. La frase no puede empezar sin sujeto.",
    phaseId: 1
  },
  {
    typicalError: "People is",
    correctForm: "People are",
    explanation: "'People' es sustantivo plural en inglés (las personas) y siempre concuerda con 'are / were / have'.",
    phaseId: 1
  },
  {
    typicalError: "I have 20 years",
    correctForm: "I am 20 (years old)",
    explanation: "La edad no se posee; es un atributo temporal del estado del ser, por tanto se expresa con el verbo 'To Be'.",
    phaseId: 2
  },
  {
    typicalError: "He didn't wanted / Did you heard?",
    correctForm: "He didn't want / Did you hear?",
    explanation: "El auxiliar 'did' ya transporta el tiempo pretérito; el verbo principal debe conservar su forma base sin desinencia.",
    phaseId: 2
  },
  {
    typicalError: "He must goes / You should to read",
    correctForm: "He must go / You should read",
    explanation: "Los verbos modales nunca añaden -s en tercera persona y van acompañados de infinitivo sin la preposición 'to'.",
    phaseId: 3
  },
  {
    typicalError: "If it will rain / If you will come",
    correctForm: "If it rains / If you come",
    explanation: "En la prótasis del primer condicional (tras 'if'), el inglés utiliza presente de indicativo con valor de futuro.",
    phaseId: 3
  },
  {
    typicalError: "I have made that (acción genérica)",
    correctForm: "I have done that",
    explanation: "'Do' rige tareas, actividades indefinidas y deberes; 'Make' se destina a fabricar, crear o adoptar decisiones.",
    phaseId: 4
  },
  {
    typicalError: "I have visited Paris in 2019",
    correctForm: "I visited Paris in 2019",
    explanation: "Si se precisa un año, mes o fecha concreta cerrada en el pasado, la regla impone Past Simple, nunca Present Perfect.",
    phaseId: 4
  },
  {
    typicalError: "If I was (en registro formal / cuidado)",
    correctForm: "If I were",
    explanation: "El modo subjuntivo irreal en el segundo condicional adopta 'were' para todas las personas gramaticales.",
    phaseId: 5
  },
  {
    typicalError: "He said me",
    correctForm: "He told me / He said to me",
    explanation: "'Tell' exige el pronombre de persona inmediatamente sin preposición (tell me); 'Say' introduce directamente lo dicho.",
    phaseId: 6
  }
];

export const STORIES_DATA: Record<string, StoryData> = {
  "story-1": {
    id: "story-1",
    phaseId: 1,
    title: "A Normal Day",
    tokensCount: 606,
    lexicalCoverage: "98.3%",
    description: "Una inmersión narrativa en la rutina cotidiana de Tom y Anna, contrastando el presente simple con el continuo y saturando las estructuras básicas.",
    paragraphs: [
      "Tom is a man like many other men. He lives in a small house in a nice, quiet town. His house is not big, but it is warm and nice. In the house, there is a kitchen, a living room, and two bedrooms. Tom likes his home very much.",
      "Every day, Tom gets up at seven. He doesn't like to get up early, but he has a job, so he must. First, he goes to the bathroom. Then he goes to the kitchen and makes some coffee. He also eats a little bread.",
      "Right now, it is seven in the morning, and Tom is standing in the kitchen. He is making coffee. His wife, Anna, is still sleeping. She works at night, so she sleeps in the morning.",
      "Tom has a car, but today he doesn't use it. He walks to work because it is a nice day. At work, Tom is a teacher. He teaches children at a school in the town. He likes his job, but he doesn't like Mondays. On Mondays, there are a lot of things to do, and not much time.",
      "Does Tom have many friends at work? Yes, he does. He has a good friend called Mark. Mark is a teacher too, but he teaches in a different room. They often eat lunch together.",
      "At school, Tom teaches from eight to three. He doesn't have much free time during the day, but he has a short break at ten. During the break, he has some coffee and talks with Mark.",
      "How are you today? Mark asks. I'm fine, thanks. And you? Tom answers. Not bad. Do you have a lot of work today? Yes, a lot. I have many students in my class, and some of them are difficult, Tom says with a smile.",
      "After school, Tom walks home. On the way, he sees a new neighbor. She is standing at the door of the house next to his.",
      "Hello, says Tom. Are you the new neighbor? Yes, I am, she says. My name is Laura. What's your name? I'm Tom. Nice to meet you, Laura. Nice to meet you too.",
      "Do you like the town? Tom asks. I don't know yet. It's very quiet here. Yes, it is quiet, but it's a nice place. There are some good shops here, and the people are very nice.",
      "Laura's house is smaller than Tom's house, but it has a bigger garden. In the garden, there are many flowers and a small tree.",
      "Your garden is beautiful, Tom says. Thank you. It's not the best garden, but I like it, Laura answers.",
      "At home, Anna is not sleeping now. She is in the kitchen, and she is making dinner. There is a lot of food on the table: some rice, some vegetables, and a little meat.",
      "How was your day? Anna asks. It was good. I have a new neighbor now. Her name is Laura, Tom says. Is she nice? Yes, she is very nice.",
      "They sit down and eat dinner together. The food is very good. After dinner, Tom and Anna sit together and talk. Then they watch television.",
      "Later, Tom and Anna sit in the living room. It is quiet and nice. Outside, it is dark, and there aren't many cars in the street.",
      "Are you tired? Anna asks. A little, Tom says. But it was a good day.",
      "Yesterday was different. The weather was cold, and Tom wasn't very happy. But today is better. Today, everything is good.",
      "At ten, Tom and Anna go to bed. Tomorrow is a new day, but for now, they are resting. The end."
    ],
    keySentencesForShadowing: [
      "Every day, Tom gets up at seven.",
      "Right now, it is seven in the morning, and Tom is standing in the kitchen.",
      "Does Tom have many friends at work? Yes, he does.",
      "Nice to meet you, Laura. Nice to meet you too.",
      "Outside, it is dark, and there aren't many cars in the street.",
      "Yesterday was different. The weather was cold, and Tom wasn't very happy."
    ]
  },
  "story-2": {
    id: "story-2",
    phaseId: 2,
    title: "The Strange Trip",
    tokensCount: 764,
    lexicalCoverage: "100.0%",
    description: "Una excursión a las montañas donde Tom y Anna viven una aventura imprevista y rescatan a un perro extraviado, saturando el pasado simple y continuo.",
    paragraphs: [
      "Last summer, Tom and Anna decided to go on a trip. They both worked a lot that year, so they wanted a quiet holiday, away from the city. They talked about the beach, but in the end, they decided on the mountains.",
      "They planned the trip for two weeks. Anna looked for a good hotel on the internet, and Tom checked the weather every day. 'It looks fine,' he said. 'A little rain, maybe, but mostly sun.'",
      "They didn't have much time to pack, so they took only a few things: some clothes, a small bag, and a few books. Anna wanted to take more things, but Tom said there wasn't much space in the car.",
      "On Friday, they packed their bags and left early in the morning. The drive to the mountains took five hours. They stopped once, at a small restaurant, and had lunch there. The food wasn't great, but they were hungry, so they enjoyed it.",
      "They arrived at a small hotel in the evening. The hotel was old, but it was nice and comfortable. A nice man opened the door. 'How are you?' he asked. 'Tired, but happy,' Tom answered with a smile. 'Nice to meet you. My name is Tom, and this is Anna.'",
      "'Nice to meet you too,' the owner said. 'My name is Paul. I hope you enjoy your stay.'",
      "That night, they slept very well. The room was quiet, and the bed was more comfortable than they expected.",
      "The next morning, they walked up a mountain path. The weather was better than the day before, and the sky was blue. They walked for two hours and talked about their plans for the rest of the trip.",
      "Suddenly, it started to rain. They didn't have an umbrella, so they looked for a place to wait. They found a small cave near the path and went inside. It was dark, but it was dry.",
      "Then, they heard a strange noise. 'Did you hear that?' Anna said quietly. 'Yes, I did,' Tom said quietly. They stayed still and listened. The noise didn't stop.",
      "'Maybe it's an animal,' Anna said. 'Or maybe it's nothing,' Tom answered. 'I don't know,' he added, and he didn't sound very sure. They waited until the noise stopped.",
      "After a few minutes, an animal came out of the dark. It was a small brown dog. It looked hungry and cold, and it didn't move very much. 'Poor thing,' Anna said. 'It used to have an owner, I think, but now it doesn't.'",
      "Meanwhile, back at the hotel, Paul was walking near the door. He was worried about his dog, Rex. Rex ran away three days before, and Paul didn't know where he was.",
      "The rain stopped after a while, so Tom and Anna left the cave. The little dog followed them all the way down the mountain. Tom didn't want to leave it alone, so he picked it up and carried it.",
      "At the hotel, Paul saw the dog and his face changed completely. 'Rex!' he said. 'That's my dog! He ran away three days ago. Where did you find him?'",
      "'In a cave, up on the mountain,' Anna said. 'He was alone and cold.'",
      "'Thank you so much,' Paul said. 'I looked for him every day, but I never found him. You found him in one afternoon!'",
      "That evening, Tom and Anna had dinner at the hotel restaurant, and Rex slept next to the table. The food was better than they expected, and the wine was very good. They talked about the day and laughed about the strange noise in the cave.",
      "'Do you remember when we were students?' Anna asked. 'We used to travel a lot, but we didn't have much money.'",
      "'Yes,' Tom said. 'We used to sleep in cheap hotels and eat very simple food. Now we have more money, but less time.'",
      "'Maybe next year we can have both,' Anna said, and Tom laughed.",
      "The next day, before they left, Paul gave them a small gift: a bottle of local wine. 'Thank you for finding Rex,' he said. 'You are very kind people. You must come back next year.'",
      "'We will,' Tom said. 'This was a wonderful trip.'",
      "On the way home, Tom and Anna didn't talk much. They were tired, but it was a good kind of tired. Anna looked out of the window and smiled.",
      "'It was a strange trip,' she said finally. 'Yes,' Tom answered. 'But a really good one.'",
      "They arrived home late that night, tired but happy, already thinking about their next holiday. The end."
    ],
    keySentencesForShadowing: [
      "Last summer, Tom and Anna decided to go on a trip.",
      "They didn't have much time to pack, so they took only a few things.",
      "Did you hear that? Yes, I did.",
      "Meanwhile, back at the hotel, Paul was walking near the door.",
      "We used to travel a lot, but we didn't have much money.",
      "It was a strange trip, but a really good one."
    ]
  },
  "story-3": {
    id: "story-3",
    phaseId: 3,
    title: "A Big Decision",
    tokensCount: 645,
    lexicalCoverage: "98.9%",
    description: "Tom recibe una oferta trascendental para convertirse en director escolar en otra ciudad. Las deliberaciones exponen con fluidez modales, futuros y condicionales.",
    paragraphs: [
      "One evening, Tom got an email from a school in another city. It was a big surprise. The school wanted him to be the new director. It was a great opportunity, but it was also a big decision.",
      "'You should read this,' Tom said to Anna. 'They want me to be the director of a school in the north.'",
      "'Wow,' Anna said. 'What do you think? Can you do it?'",
      "'I think I can,' Tom said. 'But I'm not sure I should. We have a good life here.'",
      "They sat down at the kitchen table and talked about it for a long time.",
      "'If you take the job, we will have more money,' Anna said. 'You will have a better position too.'",
      "'Yes, but if we move, we will have to leave our friends and our house,' Tom said. 'And you may not find a new job easily there.'",
      "'That's true,' Anna said. 'But if we don't try, we might always wonder what could have happened. We must think about the future, not only about now.'",
      "Tom didn't know what to do. He had to give an answer by Friday. The school was going to call him at nine in the morning.",
      "'Maybe we should make a list,' Anna said. 'Good things and bad things.'",
      "They took a piece of paper and made two lists. On one side: more money, a better position, a new city to explore. On the other side: leaving friends, a new school for the children, less family time at first.",
      "'I could ask for more time,' Tom said. 'Maybe they can wait one more week.'",
      "'You could try,' Anna said. 'But I don't think they will wait very long. They need an answer soon.'",
      "The next day, Tom talked to Mark at school during their break. 'I have a big decision to make,' Tom said, and he told Mark about the job offer. 'What should I do?' Tom asked.",
      "'You have to decide what's important to you,' Mark said. 'But if you ask me, I think you should take the risk. You can always come back if it doesn't work.'",
      "'That's true,' Tom said. 'But it's not easy.'",
      "'Nothing important is easy,' Mark said with a smile. 'You must trust yourself a little more.'",
      "That night, Tom couldn't sleep well. He kept thinking about the decision. In the morning, he woke up early and made a decision.",
      "'I'm going to call them,' he said to Anna. 'I've decided.'",
      "'What are you going to say?' Anna asked.",
      "'I'm going to say yes,' Tom said. 'If we don't try new things, we will never grow. And you always say we should take more chances.'",
      "Anna smiled. 'I did say that. Okay, let's do it. When are we going to move?'",
      "'They want me to start in September,' Tom said. 'So we will have some time to plan everything.'",
      "'We're going to need a new house,' Anna said. 'And we must tell our families soon.'",
      "'We can tell them this weekend,' Tom said. 'We're having dinner with my parents on Saturday.'",
      "Over the next few weeks, they made a lot of plans. They talked to a few schools for Anna, and they looked at houses online. It wasn't easy, but they felt good about the decision.",
      "'Do you think we're doing the right thing?' Anna asked one night.",
      "'I don't know for sure,' Tom said. 'But if we never take chances, life will always stay the same. And I don't want that.'",
      "'Neither do I,' Anna said. 'This could be a really good change for us.'",
      "In September, they moved to the new city. It was different, and sometimes difficult, but they were happy with their decision. They knew that if things didn't work well, they could always try something else. But for now, they were excited about their new life. The end."
    ],
    keySentencesForShadowing: [
      "You should read this. What do you think?",
      "If you take the job, we will have more money.",
      "We must think about the future, not only about now.",
      "I'm going to call them. I've decided.",
      "We're having dinner with my parents on Saturday.",
      "If we never take chances, life will always stay the same."
    ]
  },
  "story-4": {
    id: "story-4",
    phaseId: 4,
    title: "The Interview",
    tokensCount: 570,
    lexicalCoverage: "99.6%",
    description: "Anna acude a una entrevista decisiva en el nuevo colegio. El relato satura las formas de Present Perfect, verb patterns y phrasal verbs en un entorno profesional.",
    paragraphs: [
      "Tom had started his new job three weeks before. He had already met most of the teachers, and he had organized his new office. He liked the school, but he missed Anna during the day, because she was still looking for a job.",
      "It was September, and Anna had an interview for a teaching position at a new school. She had never worked in this city before, so she was a little nervous.",
      "'Have you ever taught young children?' the interviewer, Mrs. Green, asked.",
      "'Yes, I have,' Anna said. 'I've taught for eight years now, since 2018, mostly children between six and ten.'",
      "'Great. Have you worked with children who don't speak much English?'",
      "'Yes, I have done that too. I've always enjoyed helping students who find it difficult at first.'",
      "Mrs. Green smiled. 'That's exactly what we need here. Many of our students have just arrived from other countries.'",
      "Anna felt more relaxed. She decided to ask a question too. 'Have you been the head teacher here for a long time?'",
      "'I've worked here for three years,' Mrs. Green said. 'Before that, I worked at a bigger school in the south.'",
      "They talked for almost an hour. Mrs. Green asked about Anna's experience, and Anna talked about the things she has done, the classes she has taught, and the projects she has finished.",
      "'I've never given up on a difficult student,' Anna said. 'I always try to find out what the problem is.'",
      "'I like that,' Mrs. Green said. 'We're looking for someone who doesn't give up easily.'",
      "Near the end, Mrs. Green asked, 'Why do you want to move to this city?'",
      "'My husband has just accepted a new job here,' Anna said. 'We're planning to start a new life. I'm looking forward to it, even though it's a big change.'",
      "'Have you already found a house?'",
      "'Not yet, but we're looking. We hope to find something soon.'",
      "After the interview, Anna waited outside. She had done everything she could. She hoped it had gone well.",
      "That evening, her phone rang. It was Mrs. Green. 'I'm calling to tell you that we want to offer you the position,' she said.",
      "Anna couldn't believe it. 'Thank you so much! I'm really happy to hear that.'",
      "'We think you'll fit in well here,' Mrs. Green said. 'When can you start?'",
      "'I could start in September, if that works for you,' Anna said. 'Perfect. Welcome to the team.'",
      "When Anna told Tom the news, he hugged her. 'I knew you could do it,' he said. 'You've worked so hard for this.'",
      "'I have,' Anna said. 'And now our new life can really begin.'",
      "Over the next few days, they celebrated. They had already found a house near Tom's new school, and now Anna had a job too. Everything was going well.",
      "'It hasn't been an easy year,' Tom said one evening. 'But I think we made the right decision.'",
      "'I agree,' Anna said. 'We've learned a lot, and we've grown as a family. I'm glad we took this risk.'",
      "Tom laughed. 'That sounds very wise for someone who couldn't sleep for a week before making this decision.'",
      "'I've changed,' Anna said, smiling. 'A little, at least.'",
      "A few days later, Tom asked, 'How's the house coming along?'",
      "'We're still figuring out where everything goes,' Anna said, 'but I think it's working out fine.'",
      "'Good,' Tom said. 'I've never been happier.' The end."
    ],
    keySentencesForShadowing: [
      "Have you ever taught young children? Yes, I have.",
      "I've taught for eight years now, since 2018.",
      "I've never given up on a difficult student.",
      "I'm looking forward to it, even though it's a big change.",
      "Have you already found a house? Not yet.",
      "How's the house coming along? I think it's working out fine."
    ]
  },
  "story-5": {
    id: "story-5",
    phaseId: 5,
    title: "Missing Money",
    tokensCount: 614,
    lexicalCoverage: "99.5%",
    description: "Un incidente policial en el colegio: la desaparición del dinero de la caja y su investigación. El relato encadena pasado perfecto, voz pasiva, condicionales 2º y 3º y estilo indirecto.",
    paragraphs: [
      "One morning, Tom arrived at his office and noticed something strange. The money box, where the school kept some cash for small expenses, was empty. Someone had taken almost two hundred euros.",
      "Tom called the police immediately. An officer, Detective Lewis, came to the school an hour later. He wanted to find out exactly what had happened.",
      "'When did you last see the money?' Detective Lewis asked.",
      "'I saw it yesterday afternoon,' Tom said. 'I locked the office before I left, but this morning the door was open.'",
      "The detective looked around the office carefully. 'The lock hasn't been broken,' he said. 'Someone must have had a key, or the door wasn't locked properly.'",
      "'I wish I had checked it twice,' Tom said. 'I always lock it, but yesterday I was in a hurry.'",
      "Detective Lewis wanted to talk to the people who work at the school. He spoke first to Mark, who has been a teacher at the school for many years and is an important witness.",
      "'Did you see anyone near the office yesterday?' the detective asked.",
      "'Yes,' Mark said. 'I saw a man I didn't know standing near the door around five o'clock. He told me he was looking for the head teacher, but when I offered to help, he said he would come back later. He never did.'",
      "'Can you describe him?'",
      "'He was tall, with short brown hair. He was wearing a grey jacket.'",
      "The detective wrote this down and thanked Mark for his help.",
      "Later, a woman who cleans the school in the evenings told the detective that she had seen the same man leaving through the back door. 'I thought he was a visitor,' she said, 'so I didn't stop him.'",
      "Detective Lewis explained that a man matching this description had been seen near two other schools in the area. 'We believe he has done this before,' he said.",
      "That afternoon, the police found the man in a café near the train station. He was arrested and questioned. At first, he said he hadn't done anything wrong, but the evidence was clear: the money, which he hadn't spent yet, was found in his bag.",
      "A few weeks later, there was a short trial. The man, whose name was Peter Owen, admitted that he had stolen the money. He said he had lost his job a few months before, and he didn't want to ask anyone for help.",
      "'If he had asked for help, someone would have helped him,' Tom said to Anna that evening. 'If only he had asked. It's sad.'",
      "'I know,' Anna said. 'But that doesn't make it right. If I were in his position, I don't think I would do the same thing.'",
      "'Me neither,' Tom said. 'But if I hadn't been in such a hurry that day, this might never have happened.'",
      "'You can't blame yourself,' Anna said. 'The door being open wasn't your fault. He decided to steal, not you.'",
      "The judge decided that Peter had to pay the money back and do some community work. He wasn't sent to prison, because it was his first crime and the amount wasn't very large.",
      "After the trial, Tom felt relieved that the situation had been resolved. He talked to the staff and asked everyone to be more careful with the office door.",
      "'From now on, we should always check the door twice before we leave,' he said. 'If we had done that from the beginning, none of this would have happened.'",
      "Mark laughed. 'You've turned out to be a very careful director.'",
      "'Well,' Tom said, 'if this experience has taught me anything, it's that small mistakes can lead to big problems.' The end."
    ],
    keySentencesForShadowing: [
      "Someone had taken almost two hundred euros.",
      "The lock hasn't been broken. Someone must have had a key.",
      "I wish I had checked it twice.",
      "He said he would come back later.",
      "If he had asked for help, someone would have helped him.",
      "If I were in his position, I don't think I would do the same thing."
    ]
  },
  "story-6": {
    id: "story-6",
    phaseId: 6,
    title: "The Meeting That Changed Everything",
    tokensCount: 640,
    lexicalCoverage: "99.4%",
    description: "El momento cumbre: Tom defiende la permanencia del colegio ante el consejo municipal. Una lección magistral de énfasis retórico con cleft sentences, inversiones y matices.",
    paragraphs: [
      "On a cold morning in November, Tom received a letter from the city council. He read it twice, because he couldn't believe what it said. The school didn't have enough funding, and the council was thinking about closing it at the end of the year.",
      "Tom called an emergency meeting with the teachers. 'We have to do something,' he said. 'This school means too much to too many people. We can't just let it close.'",
      "Mark agreed. 'What we need is a plan,' he said. 'A good one, and fast.'",
      "Over the next two weeks, the whole school worked together. The teachers organized fundraising events, and the students made posters about why the school mattered to them. Letters were written by parents and students, and Anna helped send them to local businesses. It wasn't easy, and sometimes it felt like nothing was working.",
      "Finally, the council agreed to a meeting where Tom could present his case. The night before, Tom couldn't sleep. He kept thinking about what he was going to say.",
      "Anna told him he would be fine and that he should just say what he really believed.",
      "The next day, Tom stood in front of the board. His hands were shaking, but he began to speak.",
      "'It was this school that gave me my first job, many years ago,' he said. 'And it's this school that has given hundreds of children a chance to learn, to grow, and to believe in themselves. Never have I seen so much dedication in one place. The teachers here don't just teach — they care.'",
      "He paused and looked around the room.",
      "'Not only have the teachers worked extra hours without pay, but they have also organized events every weekend to raise money. Not only have the parents supported us, but the students themselves have written letters explaining what this school means to them.'",
      "One of the board members, an older woman, raised her hand. 'That's all very moving, Mr. Wilson, but moving words don't pay bills.'",
      "'You're right,' Tom said. 'Numbers matter. But what really matters here is whether we're willing to invest in a community that has already invested so much in itself.'",
      "There was a long silence. Then, a woman near the back of the room stood up. Tom recognized her immediately: it was Laura, his old neighbor from years ago, whom he hadn't seen since they moved to this city.",
      "'I think I can help,' Laura said. 'My company has a fund for local education projects. I hadn't planned to say anything today, but after hearing this, I want to offer some support.'",
      "Everyone in the room turned to look at her. Tom could hardly believe it. 'Laura?' he said. 'I didn't know you were on the board.'",
      "'I joined last year,' she said, smiling. 'Small world, isn't it?'",
      "After the meeting, Laura explained that her company could offer enough funding to keep the school open for at least three more years. 'It won't solve every problem,' she said, 'but it's a start.'",
      "If the council hadn't agreed to that meeting, none of this would have happened. Tom, who had been so worried for weeks, finally felt like he could breathe again. The school, which had almost closed forever, now had a real chance.",
      "That evening, Tom told Anna everything. 'It was incredible,' he said. 'Not only did the board listen, but someone we knew from years ago decided to help. It was Laura who saved us, really.'",
      "'Sometimes,' Anna said, 'the people who matter most come back into your life exactly when you need them.'",
      "'What really saved the school,' Tom said quietly, 'wasn't the money. It was everyone who refused to give up.'",
      "Anna smiled. 'That's a very wise thing to say. Rarely do you sound this poetic.'",
      "Tom laughed. 'Don't get used to it.' The end."
    ],
    keySentencesForShadowing: [
      "What we need is a plan. A good one, and fast.",
      "It was this school that gave me my first job, many years ago.",
      "Never have I seen so much dedication in one place.",
      "Not only have the teachers worked extra hours, but they have also organized events.",
      "What really matters here is whether we're willing to invest.",
      "Rarely do you sound this poetic. Don't get used to it."
    ]
  }
};

export const COURSE_SUMMARY_LINES = [
  { phase: "Fase 0-1", summary: "El esqueleto: sujeto fijo obligatorio, to be, presente simple vs continuo, do/does auxiliar." },
  { phase: "Fase 2", summary: "Narrar el pasado: regular con -ed, irregulares de uso, did universal, pasado continuo y used to." },
  { phase: "Fase 3", summary: "Decidir sobre el futuro: escala de modales invariables, 3 futuros bien delimitados, primer condicional." },
  { phase: "Fase 4", summary: "Conectar experiencias: present perfect y conexión viva, participios, verb patterns y phrasal verbs." },
  { phase: "Fase 5", summary: "Cambiar el foco: pasado perfecto cronológico, would formal, voz pasiva, estilo indirecto y condicionales 2º/3º." },
  { phase: "Fase 6", summary: "Matices finales: cleft sentences de relieve (it/what), inversiones enfáticas, puntuación con coma y deshispanización." }
];

export const VOCABULARY_BANDS_DATA = [
  {
    band: "Banda 1 (0 – 1.000)",
    range: "0 - 1000",
    coveragePercent: "72% del habla cotidiana",
    description: "El núcleo indispensable del idioma inglés. Cubre verbos primarios, pronombres, determinantes y objetos inmediatos.",
    sampleWords: [
      { en: "the", es: "el / la / los / las", ex: "The school is in the town." },
      { en: "be", es: "ser / estar", ex: "He is a teacher." },
      { en: "have", es: "tener / haber", ex: "Does Tom have friends?" },
      { en: "say", es: "decir", ex: "Laura says hello." },
      { en: "make", es: "hacer / fabricar", ex: "He makes some coffee." },
      { en: "work", es: "trabajar / funcionar", ex: "Anna works at night." },
      { en: "know", es: "saber / conocer", ex: "I don't know yet." },
      { en: "people", es: "personas / gente", ex: "The people are very nice." }
    ]
  },
  {
    band: "Banda 2 (1.000 – 2.000)",
    range: "1000 - 2000",
    coveragePercent: "84% acumulado",
    description: "Vocabulario de acción, relato en pasado, emociones comunes, viajes y descripciones concretas.",
    sampleWords: [
      { en: "travel", es: "viajar", ex: "We used to travel a lot." },
      { en: "mountain", es: "montaña", ex: "The drive to the mountains took five hours." },
      { en: "suddenly", es: "de repente", ex: "Suddenly, it started to rain." },
      { en: "noise", es: "ruido", ex: "They heard a strange noise." },
      { en: "hungry", es: "hambriento", ex: "It looked hungry and cold." },
      { en: "wonder", es: "preguntarse / maravillarse", ex: "We might always wonder." },
      { en: "gift", es: "regalo", ex: "Paul gave them a small gift." }
    ]
  },
  {
    band: "Banda 3 (2.000 – 3.000)",
    range: "2000 - 3000",
    coveragePercent: "91% acumulado",
    description: "Decisiones, razonamiento abstracto, proyectos de vida, acuerdos y posibilidades condicionales.",
    sampleWords: [
      { en: "decision", es: "decisión", ex: "It was a big decision." },
      { en: "opportunity", es: "oportunidad", ex: "It was a great opportunity." },
      { en: "position", es: "cargo / puesto", ex: "You will have a better position." },
      { en: "risk", es: "riesgo", ex: "You should take the risk." },
      { en: "trust", es: "confiar / confianza", ex: "You must trust yourself." },
      { en: "explore", es: "explorar", ex: "A new city to explore." }
    ]
  },
  {
    band: "Banda 4 (3.000 – 4.000)",
    range: "3000 - 4000",
    coveragePercent: "95% acumulado",
    description: "Trayectoria profesional, entrevistas laborales, matices temporales y phrasal verbs.",
    sampleWords: [
      { en: "interview", es: "entrevista", ex: "She had an interview for a teaching position." },
      { en: "head teacher", es: "director/a escolar", ex: "Have you been the head teacher here for long?" },
      { en: "figure out", es: "resolver / entender", ex: "We're still figuring out where everything goes." },
      { en: "fit in", es: "encajar", ex: "We think you'll fit in well here." },
      { en: "give up", es: "rendirse", ex: "I've never given up on a student." },
      { en: "celebrate", es: "celebrar", ex: "Over the next few days, they celebrated." }
    ]
  },
  {
    band: "Banda 5 (4.000 – 5.000)",
    range: "4000 - 5000",
    coveragePercent: "98% de comprensión funcional total",
    description: "Registro sofisticado, retórica, investigación, causas sociales, matices discursivos y énfasis.",
    sampleWords: [
      { en: "council", es: "ayuntamiento / concejo", ex: "A letter from the city council." },
      { en: "funding", es: "financiación", ex: "The school didn't have enough funding." },
      { en: "dedication", es: "entrega / dedicación", ex: "Never have I seen so much dedication." },
      { en: "fundraising", es: "recaudación de fondos", ex: "The teachers organized fundraising events." },
      { word: "relieved", en: "relieved", es: "aliviado/a", ex: "Tom felt relieved that it was resolved." },
      { en: "invest", es: "invertir", ex: "Willing to invest in a community." },
      { en: "poetic", es: "poético", ex: "Rarely do you sound this poetic." }
    ]
  },
  {
    band: "Phrasal Verbs (Top 200)",
    range: "Phrasal Verbs",
    coveragePercent: "+15% fluidez oral",
    description: "Verbos compuestos y partículas preposicionales indispensables para el habla cotidiana natural y comprensión auditiva.",
    sampleWords: [
      { en: "go on", es: "seguir, continuar, ocurrir", ex: "Please go on with your story." },
      { en: "pick up", es: "recoger, coger", ex: "I will pick up the kids at five." },
      { en: "come back", es: "volver, regresar", ex: "She will come back tomorrow." },
      { en: "find out", es: "descubrir, averiguar", ex: "I need to find out the truth." },
      { en: "give up", es: "rendirse, abandonar", ex: "Never give up on your dreams." },
      { en: "figure out", es: "descubrir, entender", ex: "I can't figure out this problem." },
      { en: "look forward to", es: "tener ganas de, esperar con ilusión", ex: "I look forward to seeing you." },
      { en: "catch up", es: "ponerse al día, alcanzar", ex: "Let's catch up over coffee." }
    ]
  }
];
