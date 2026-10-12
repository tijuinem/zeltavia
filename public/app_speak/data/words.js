// ZELTAVIA Speak — Vocabulario Oficial de las 5.000 Palabras Frecuentes del Curso
// Incluye las 5 Bandas Oficiales (1.000 palabras cada una) y Fases del Curso
const WORDS_DATA = {
  "bands": {
    "1": [
      {
        "word": "be",
        "translation": "ser, estar",
        "example": "I want to be happy."
      },
      {
        "word": "the",
        "translation": "el, la, los, las",
        "example": "The book is on the table."
      },
      {
        "word": "you",
        "translation": "tú, usted, vosotros, ustedes, te, ti",
        "example": "You are my friend."
      },
      {
        "word": "to",
        "translation": "a, para, hacia",
        "example": "I go to school."
      },
      {
        "word": "a",
        "translation": "un, una",
        "example": "I have a dog."
      },
      {
        "word": "i",
        "translation": "yo",
        "example": "I am tired."
      },
      {
        "word": "and",
        "translation": "y, e",
        "example": "Bread and butter."
      },
      {
        "word": "it",
        "translation": "ello, lo, eso (pronombre neutro)",
        "example": "It is raining."
      },
      {
        "word": "of",
        "translation": "de",
        "example": "The color of the sky."
      },
      {
        "word": "not",
        "translation": "no",
        "example": "I do not know."
      },
      {
        "word": "have",
        "translation": "tener, haber",
        "example": "I have two brothers."
      },
      {
        "word": "do",
        "translation": "hacer",
        "example": "What do you do?"
      },
      {
        "word": "in",
        "translation": "en, dentro de",
        "example": "He is in the house."
      },
      {
        "word": "that",
        "translation": "eso, ese, que",
        "example": "I know that."
      },
      {
        "word": "we",
        "translation": "nosotros, nosotras",
        "example": "We are ready."
      },
      {
        "word": "he",
        "translation": "él",
        "example": "He is a doctor."
      },
      {
        "word": "for",
        "translation": "para, por",
        "example": "This gift is for you."
      },
      {
        "word": "this",
        "translation": "esto, este, esta",
        "example": "This is my house."
      },
      {
        "word": "on",
        "translation": "sobre, en, encima de",
        "example": "The cup is on the table."
      },
      {
        "word": "will",
        "translation": "(futuro), voluntad",
        "example": "I will call you tomorrow."
      },
      {
        "word": "with",
        "translation": "con",
        "example": "I go with my friend."
      },
      {
        "word": "what",
        "translation": "qué, lo que",
        "example": "What is your name?"
      },
      {
        "word": "they",
        "translation": "ellos, ellas",
        "example": "They are at home."
      },
      {
        "word": "go",
        "translation": "ir",
        "example": "I go to work."
      },
      {
        "word": "get",
        "translation": "obtener, conseguir, recibir",
        "example": "I get a letter every week."
      },
      {
        "word": "but",
        "translation": "pero, sino",
        "example": "I am tired but happy."
      },
      {
        "word": "know",
        "translation": "saber, conocer",
        "example": "I know her."
      },
      {
        "word": "can",
        "translation": "poder, saber (hacer algo)",
        "example": "I can swim."
      },
      {
        "word": "she",
        "translation": "ella",
        "example": "She is my sister."
      },
      {
        "word": "all",
        "translation": "todo, todos",
        "example": "All the children are here."
      },
      {
        "word": "so",
        "translation": "así, tan, entonces",
        "example": "I was so tired."
      },
      {
        "word": "at",
        "translation": "en, a",
        "example": "I am at home."
      },
      {
        "word": "no",
        "translation": "no, ningún",
        "example": "No, thank you."
      },
      {
        "word": "there",
        "translation": "allí, ahí, hay",
        "example": "There is a cat in the garden."
      },
      {
        "word": "like",
        "translation": "gustar, como",
        "example": "I like coffee."
      },
      {
        "word": "as",
        "translation": "como, mientras",
        "example": "He works as a teacher."
      },
      {
        "word": "would",
        "translation": "(condicional), querría",
        "example": "I would like some water."
      },
      {
        "word": "if",
        "translation": "si",
        "example": "If it rains, we stay home."
      },
      {
        "word": "say",
        "translation": "decir",
        "example": "What did he say?"
      },
      {
        "word": "just",
        "translation": "solo, justo, simplemente",
        "example": "I just arrived."
      },
      {
        "word": "about",
        "translation": "sobre, acerca de, alrededor de",
        "example": "We talk about music."
      },
      {
        "word": "think",
        "translation": "pensar, creer",
        "example": "I think you are right."
      },
      {
        "word": "one",
        "translation": "uno, una",
        "example": "I have one brother."
      },
      {
        "word": "come",
        "translation": "venir",
        "example": "Come here, please."
      },
      {
        "word": "from",
        "translation": "de, desde",
        "example": "I am from Spain."
      },
      {
        "word": "see",
        "translation": "ver",
        "example": "I see a bird."
      },
      {
        "word": "up",
        "translation": "arriba, hacia arriba",
        "example": "Look up!"
      },
      {
        "word": "out",
        "translation": "fuera, afuera",
        "example": "The dog is out."
      },
      {
        "word": "here",
        "translation": "aquí",
        "example": "I live here."
      },
      {
        "word": "want",
        "translation": "querer, desear",
        "example": "I want some water."
      },
      {
        "word": "well",
        "translation": "bien, pozo",
        "example": "She sings well."
      },
      {
        "word": "now",
        "translation": "ahora",
        "example": "I am busy now."
      },
      {
        "word": "who",
        "translation": "quién, quien",
        "example": "Who is that man?"
      },
      {
        "word": "make",
        "translation": "hacer, fabricar, crear",
        "example": "I make bread every day."
      },
      {
        "word": "right",
        "translation": "derecho, correcto, derecha",
        "example": "Turn right at the corner."
      },
      {
        "word": "take",
        "translation": "tomar, llevar",
        "example": "Take this book."
      },
      {
        "word": "or",
        "translation": "o, u",
        "example": "Tea or coffee?"
      },
      {
        "word": "good",
        "translation": "bueno, bien",
        "example": "This is a good idea."
      },
      {
        "word": "time",
        "translation": "tiempo, vez, hora",
        "example": "I have no time."
      },
      {
        "word": "when",
        "translation": "cuando",
        "example": "When do you arrive?"
      },
      {
        "word": "by",
        "translation": "por, junto a, para (plazo)",
        "example": "The book was written by him."
      },
      {
        "word": "look",
        "translation": "mirar, parecer, aspecto",
        "example": "Look at the sky."
      },
      {
        "word": "how",
        "translation": "cómo",
        "example": "How are you?"
      },
      {
        "word": "tell",
        "translation": "decir, contar",
        "example": "Tell me the truth."
      },
      {
        "word": "some",
        "translation": "algunos, algo de, unos",
        "example": "I need some help."
      },
      {
        "word": "more",
        "translation": "más",
        "example": "I want more time."
      },
      {
        "word": "then",
        "translation": "entonces, luego",
        "example": "First eat, then play."
      },
      {
        "word": "could",
        "translation": "podía, podría",
        "example": "Could you help me?"
      },
      {
        "word": "back",
        "translation": "espalda, atrás, de vuelta",
        "example": "I will be back soon."
      },
      {
        "word": "where",
        "translation": "dónde, donde",
        "example": "Where do you live?"
      },
      {
        "word": "give",
        "translation": "dar",
        "example": "Give me the key."
      },
      {
        "word": "because",
        "translation": "porque",
        "example": "I stay home because I am sick."
      },
      {
        "word": "need",
        "translation": "necesitar, necesidad",
        "example": "I need help."
      },
      {
        "word": "why",
        "translation": "por qué",
        "example": "Why are you sad?"
      },
      {
        "word": "thing",
        "translation": "cosa",
        "example": "What is that thing?"
      },
      {
        "word": "people",
        "translation": "gente, personas, pueblo",
        "example": "Many people live here."
      },
      {
        "word": "very",
        "translation": "muy",
        "example": "She is very kind."
      },
      {
        "word": "work",
        "translation": "trabajar, trabajo",
        "example": "I work in an office."
      },
      {
        "word": "man",
        "translation": "hombre",
        "example": "The man is tall."
      },
      {
        "word": "let",
        "translation": "dejar, permitir",
        "example": "Let me help you."
      },
      {
        "word": "way",
        "translation": "camino, manera, forma",
        "example": "This is the way home."
      },
      {
        "word": "find",
        "translation": "encontrar, hallar",
        "example": "I can't find my keys."
      },
      {
        "word": "mean",
        "translation": "significar, querer decir, tacaño",
        "example": "What does this word mean?"
      },
      {
        "word": "only",
        "translation": "solo, solamente, único",
        "example": "I have only one pen."
      },
      {
        "word": "really",
        "translation": "realmente, de verdad",
        "example": "I really like it."
      },
      {
        "word": "yes",
        "translation": "sí",
        "example": "Yes, I agree."
      },
      {
        "word": "should",
        "translation": "debería, deber",
        "example": "You should sleep more."
      },
      {
        "word": "other",
        "translation": "otro, otros",
        "example": "Give me the other book."
      },
      {
        "word": "year",
        "translation": "año",
        "example": "Next year will be better."
      },
      {
        "word": "over",
        "translation": "sobre, por encima de, terminado",
        "example": "The plane flies over the city."
      },
      {
        "word": "day",
        "translation": "día",
        "example": "Today is a nice day."
      },
      {
        "word": "call",
        "translation": "llamar, llamada",
        "example": "I will call you later."
      },
      {
        "word": "down",
        "translation": "abajo, hacia abajo",
        "example": "Sit down, please."
      },
      {
        "word": "too",
        "translation": "también, demasiado",
        "example": "This is too expensive."
      },
      {
        "word": "any",
        "translation": "algún, ninguno, cualquier",
        "example": "Do you have any questions?"
      },
      {
        "word": "something",
        "translation": "algo",
        "example": "I want something to eat."
      },
      {
        "word": "use",
        "translation": "usar, utilizar, uso",
        "example": "Can I use your phone?"
      },
      {
        "word": "into",
        "translation": "en, dentro de, hacia dentro",
        "example": "She walked into the room."
      },
      {
        "word": "talk",
        "translation": "hablar, charla",
        "example": "We need to talk."
      },
      {
        "word": "much",
        "translation": "mucho",
        "example": "I don't have much money."
      },
      {
        "word": "first",
        "translation": "primero, primer",
        "example": "This is my first day."
      },
      {
        "word": "which",
        "translation": "cuál, que, el cual",
        "example": "Which book do you want?"
      },
      {
        "word": "even",
        "translation": "incluso, hasta, par",
        "example": "Even children know this."
      },
      {
        "word": "than",
        "translation": "que (comparativo)",
        "example": "She is taller than me."
      },
      {
        "word": "little",
        "translation": "pequeño, poco",
        "example": "I have a little time."
      },
      {
        "word": "never",
        "translation": "nunca, jamás",
        "example": "I never eat meat."
      },
      {
        "word": "life",
        "translation": "vida",
        "example": "Life is beautiful."
      },
      {
        "word": "try",
        "translation": "intentar, probar",
        "example": "Try this cake."
      },
      {
        "word": "after",
        "translation": "después de, tras",
        "example": "We eat after school."
      },
      {
        "word": "feel",
        "translation": "sentir, sentirse",
        "example": "I feel good today."
      },
      {
        "word": "help",
        "translation": "ayudar, ayuda",
        "example": "Can you help me?"
      },
      {
        "word": "love",
        "translation": "amar, querer, amor",
        "example": "I love you."
      },
      {
        "word": "off",
        "translation": "apagado, fuera, lejos",
        "example": "Turn off the light."
      },
      {
        "word": "new",
        "translation": "nuevo",
        "example": "I have a new phone."
      },
      {
        "word": "yeah",
        "translation": "sí, ajá (informal)",
        "example": "Yeah, I know."
      },
      {
        "word": "still",
        "translation": "todavía, aún, quieto",
        "example": "He is still sleeping."
      },
      {
        "word": "okay",
        "translation": "vale, bien, de acuerdo",
        "example": "Okay, let's go."
      },
      {
        "word": "before",
        "translation": "antes, antes de",
        "example": "Wash your hands before eating."
      },
      {
        "word": "long",
        "translation": "largo, mucho tiempo",
        "example": "The road is very long."
      },
      {
        "word": "ask",
        "translation": "preguntar, pedir",
        "example": "Ask your teacher."
      },
      {
        "word": "leave",
        "translation": "irse, salir, dejar",
        "example": "I leave at eight."
      },
      {
        "word": "last",
        "translation": "último, durar",
        "example": "This is the last page."
      },
      {
        "word": "great",
        "translation": "genial, grande, estupendo",
        "example": "That is a great idea!"
      },
      {
        "word": "put",
        "translation": "poner, colocar",
        "example": "Put the book on the table."
      },
      {
        "word": "hear",
        "translation": "oír, escuchar",
        "example": "I can't hear you."
      },
      {
        "word": "thank",
        "translation": "agradecer, dar las gracias",
        "example": "I thank you for your help."
      },
      {
        "word": "keep",
        "translation": "guardar, mantener, seguir",
        "example": "Keep the change."
      },
      {
        "word": "happen",
        "translation": "ocurrir, suceder, pasar",
        "example": "What happened?"
      },
      {
        "word": "must",
        "translation": "deber, tener que",
        "example": "I must go now."
      },
      {
        "word": "place",
        "translation": "lugar, sitio",
        "example": "This is a nice place."
      },
      {
        "word": "home",
        "translation": "casa, hogar",
        "example": "I am going home."
      },
      {
        "word": "again",
        "translation": "otra vez, de nuevo",
        "example": "Please say it again."
      },
      {
        "word": "show",
        "translation": "mostrar, enseñar, espectáculo",
        "example": "Show me your photo."
      },
      {
        "word": "start",
        "translation": "empezar, comenzar, inicio",
        "example": "The class starts at nine."
      },
      {
        "word": "sure",
        "translation": "seguro, claro",
        "example": "Are you sure?"
      },
      {
        "word": "meet",
        "translation": "conocer, encontrarse, reunirse",
        "example": "Nice to meet you."
      },
      {
        "word": "old",
        "translation": "viejo, antiguo, mayor",
        "example": "My car is old."
      },
      {
        "word": "please",
        "translation": "por favor, complacer",
        "example": "Please sit down."
      },
      {
        "word": "may",
        "translation": "poder, puede que, mayo (may)",
        "example": "May I come in?"
      },
      {
        "word": "name",
        "translation": "nombre, llamar",
        "example": "My name is Ana."
      },
      {
        "word": "wait",
        "translation": "esperar",
        "example": "Wait for me here."
      },
      {
        "word": "live",
        "translation": "vivir",
        "example": "I live in Madrid."
      },
      {
        "word": "friend",
        "translation": "amigo, amiga",
        "example": "She is my best friend."
      },
      {
        "word": "always",
        "translation": "siempre",
        "example": "I always drink coffee."
      },
      {
        "word": "away",
        "translation": "lejos, fuera",
        "example": "He lives far away."
      },
      {
        "word": "through",
        "translation": "a través de, por",
        "example": "We walk through the park."
      },
      {
        "word": "woman",
        "translation": "mujer",
        "example": "The woman is reading."
      },
      {
        "word": "big",
        "translation": "grande",
        "example": "They have a big house."
      },
      {
        "word": "around",
        "translation": "alrededor de, por ahí, aproximadamente",
        "example": "We sat around the table."
      },
      {
        "word": "play",
        "translation": "jugar, tocar, obra",
        "example": "The children play outside."
      },
      {
        "word": "lot",
        "translation": "mucho, montón, lote",
        "example": "I have a lot of work."
      },
      {
        "word": "stop",
        "translation": "parar, detener, parada",
        "example": "Stop the car!"
      },
      {
        "word": "anything",
        "translation": "cualquier cosa, algo, nada",
        "example": "Do you want anything?"
      },
      {
        "word": "night",
        "translation": "noche",
        "example": "Good night!"
      },
      {
        "word": "nothing",
        "translation": "nada",
        "example": "There is nothing here."
      },
      {
        "word": "also",
        "translation": "también, además",
        "example": "She also speaks French."
      },
      {
        "word": "money",
        "translation": "dinero",
        "example": "I have no money."
      },
      {
        "word": "run",
        "translation": "correr, funcionar, dirigir",
        "example": "I run every morning."
      },
      {
        "word": "kind",
        "translation": "amable, tipo, clase",
        "example": "What kind of music do you like?"
      },
      {
        "word": "bring",
        "translation": "traer, llevar",
        "example": "Bring your book tomorrow."
      },
      {
        "word": "own",
        "translation": "propio, poseer",
        "example": "I have my own room."
      },
      {
        "word": "many",
        "translation": "muchos, muchas",
        "example": "There are many people here."
      },
      {
        "word": "house",
        "translation": "casa",
        "example": "Their house is very big."
      },
      {
        "word": "most",
        "translation": "la mayoría, más, lo más",
        "example": "Most people like music."
      },
      {
        "word": "move",
        "translation": "mover, mudarse, moverse",
        "example": "Don't move!"
      },
      {
        "word": "guy",
        "translation": "tipo, chico, tío",
        "example": "He is a nice guy."
      },
      {
        "word": "child",
        "translation": "niño, niña, hijo",
        "example": "The child is sleeping."
      },
      {
        "word": "same",
        "translation": "mismo, igual",
        "example": "We have the same car."
      },
      {
        "word": "another",
        "translation": "otro, otra",
        "example": "Can I have another cup?"
      },
      {
        "word": "believe",
        "translation": "creer",
        "example": "I believe you."
      },
      {
        "word": "world",
        "translation": "mundo",
        "example": "The world is big."
      },
      {
        "word": "course",
        "translation": "curso, rumbo, plato",
        "example": "I take a French course."
      },
      {
        "word": "change",
        "translation": "cambiar, cambio",
        "example": "I want to change my job."
      },
      {
        "word": "every",
        "translation": "cada, todo",
        "example": "I run every day."
      },
      {
        "word": "might",
        "translation": "podría, puede que, poder",
        "example": "It might rain today."
      },
      {
        "word": "hand",
        "translation": "mano, entregar",
        "example": "Wash your hands."
      },
      {
        "word": "sorry",
        "translation": "lo siento, perdón, apenado",
        "example": "I am sorry for being late."
      },
      {
        "word": "turn",
        "translation": "girar, doblar, turno",
        "example": "Turn left at the corner."
      },
      {
        "word": "understand",
        "translation": "entender, comprender",
        "example": "I don't understand."
      },
      {
        "word": "next",
        "translation": "siguiente, próximo, luego",
        "example": "See you next week."
      },
      {
        "word": "kill",
        "translation": "matar",
        "example": "Don't kill the spider."
      },
      {
        "word": "maybe",
        "translation": "quizás, tal vez",
        "example": "Maybe he is right."
      },
      {
        "word": "such",
        "translation": "tal, tan, semejante",
        "example": "It was such a nice day."
      },
      {
        "word": "problem",
        "translation": "problema",
        "example": "We have a problem."
      },
      {
        "word": "girl",
        "translation": "niña, chica",
        "example": "The girl is singing."
      },
      {
        "word": "end",
        "translation": "fin, terminar, final",
        "example": "The movie has a sad end."
      },
      {
        "word": "everything",
        "translation": "todo",
        "example": "Everything is fine."
      },
      {
        "word": "stay",
        "translation": "quedarse, permanecer, estancia",
        "example": "Please stay here."
      },
      {
        "word": "ever",
        "translation": "alguna vez, siempre, jamás",
        "example": "Have you ever been to Paris?"
      },
      {
        "word": "family",
        "translation": "familia",
        "example": "My family is big."
      },
      {
        "word": "hold",
        "translation": "sostener, sujetar, celebrar",
        "example": "Hold my hand."
      },
      {
        "word": "both",
        "translation": "ambos, los dos",
        "example": "Both answers are correct."
      },
      {
        "word": "today",
        "translation": "hoy",
        "example": "Today is Monday."
      },
      {
        "word": "enough",
        "translation": "suficiente, bastante, basta",
        "example": "I have enough money."
      },
      {
        "word": "car",
        "translation": "coche, carro, automóvil",
        "example": "I drive a red car."
      },
      {
        "word": "bad",
        "translation": "malo, mal",
        "example": "The weather is bad."
      },
      {
        "word": "open",
        "translation": "abrir, abierto",
        "example": "Open the door, please."
      },
      {
        "word": "head",
        "translation": "cabeza, jefe",
        "example": "My head hurts."
      },
      {
        "word": "seem",
        "translation": "parecer",
        "example": "You seem tired."
      },
      {
        "word": "job",
        "translation": "trabajo, empleo",
        "example": "I need a new job."
      },
      {
        "word": "care",
        "translation": "cuidado, cuidar, importar",
        "example": "I care about you."
      },
      {
        "word": "father",
        "translation": "padre",
        "example": "My father is a teacher."
      },
      {
        "word": "write",
        "translation": "escribir",
        "example": "Write your name here."
      },
      {
        "word": "mother",
        "translation": "madre",
        "example": "My mother cooks well."
      },
      {
        "word": "school",
        "translation": "escuela, colegio",
        "example": "The school opens at eight."
      },
      {
        "word": "remember",
        "translation": "recordar, acordarse",
        "example": "I remember her name."
      },
      {
        "word": "while",
        "translation": "mientras, rato",
        "example": "I read while I eat."
      },
      {
        "word": "pay",
        "translation": "pagar, pago",
        "example": "I pay by card."
      },
      {
        "word": "without",
        "translation": "sin",
        "example": "I drink coffee without sugar."
      },
      {
        "word": "die",
        "translation": "morir",
        "example": "Flowers die in winter."
      },
      {
        "word": "week",
        "translation": "semana",
        "example": "I work five days a week."
      },
      {
        "word": "room",
        "translation": "habitación, cuarto, sala, espacio",
        "example": "My room is small."
      },
      {
        "word": "kid",
        "translation": "niño, crío, bromear",
        "example": "The kid is playing."
      },
      {
        "word": "someone",
        "translation": "alguien",
        "example": "Someone is at the door."
      },
      {
        "word": "part",
        "translation": "parte, papel, pieza",
        "example": "This is the best part."
      },
      {
        "word": "minute",
        "translation": "minuto",
        "example": "Wait a minute."
      },
      {
        "word": "hope",
        "translation": "esperar, esperanza",
        "example": "I hope you are well."
      },
      {
        "word": "boy",
        "translation": "niño, chico",
        "example": "The boy is running."
      },
      {
        "word": "since",
        "translation": "desde, ya que",
        "example": "I live here since 2020."
      },
      {
        "word": "become",
        "translation": "convertirse en, llegar a ser, volverse",
        "example": "She wants to become a doctor."
      },
      {
        "word": "case",
        "translation": "caso, caja, estuche",
        "example": "In that case, I stay."
      },
      {
        "word": "idea",
        "translation": "idea",
        "example": "That is a good idea."
      },
      {
        "word": "point",
        "translation": "punto, señalar, sentido",
        "example": "Don't point at people."
      },
      {
        "word": "nice",
        "translation": "agradable, simpático, bonito",
        "example": "You have a nice house."
      },
      {
        "word": "speak",
        "translation": "hablar",
        "example": "Do you speak English?"
      },
      {
        "word": "word",
        "translation": "palabra",
        "example": "I don't know this word."
      },
      {
        "word": "mind",
        "translation": "mente, importar",
        "example": "Do you mind if I sit here?"
      },
      {
        "word": "question",
        "translation": "pregunta, cuestión",
        "example": "I have a question."
      },
      {
        "word": "together",
        "translation": "juntos, juntas",
        "example": "We work together."
      },
      {
        "word": "each",
        "translation": "cada",
        "example": "Each child has a book."
      },
      {
        "word": "listen",
        "translation": "escuchar",
        "example": "Listen to the music."
      },
      {
        "word": "late",
        "translation": "tarde, tardío",
        "example": "I am late for class."
      },
      {
        "word": "watch",
        "translation": "mirar, ver, reloj",
        "example": "I watch TV at night."
      },
      {
        "word": "number",
        "translation": "número",
        "example": "What is your phone number?"
      },
      {
        "word": "few",
        "translation": "pocos, pocas",
        "example": "I have a few friends."
      },
      {
        "word": "face",
        "translation": "cara, rostro, enfrentar",
        "example": "She has a kind face."
      },
      {
        "word": "hour",
        "translation": "hora",
        "example": "The trip takes one hour."
      },
      {
        "word": "close",
        "translation": "cerrar, cerca",
        "example": "Close the window, please."
      },
      {
        "word": "once",
        "translation": "una vez, en cuanto",
        "example": "I go there once a year."
      },
      {
        "word": "actually",
        "translation": "en realidad, de hecho",
        "example": "Actually, I disagree."
      },
      {
        "word": "fine",
        "translation": "bien, multa, fino",
        "example": "I am fine, thanks."
      },
      {
        "word": "already",
        "translation": "ya",
        "example": "I already ate."
      },
      {
        "word": "second",
        "translation": "segundo, secundo",
        "example": "Wait a second."
      },
      {
        "word": "miss",
        "translation": "echar de menos, perder, fallar",
        "example": "I miss my family."
      },
      {
        "word": "high",
        "translation": "alto, elevado",
        "example": "The mountain is very high."
      },
      {
        "word": "hard",
        "translation": "duro, difícil, mucho",
        "example": "This exercise is hard."
      },
      {
        "word": "else",
        "translation": "más, otro, además",
        "example": "Anything else?"
      },
      {
        "word": "send",
        "translation": "enviar, mandar",
        "example": "Send me an email."
      },
      {
        "word": "real",
        "translation": "real, verdadero",
        "example": "Is this real gold?"
      },
      {
        "word": "sit",
        "translation": "sentarse",
        "example": "Please sit here."
      },
      {
        "word": "business",
        "translation": "negocio, empresa, asunto",
        "example": "He has a small business."
      },
      {
        "word": "matter",
        "translation": "asunto, importar, materia",
        "example": "It doesn't matter."
      },
      {
        "word": "wrong",
        "translation": "equivocado, incorrecto, mal",
        "example": "You are wrong."
      },
      {
        "word": "buy",
        "translation": "comprar",
        "example": "I want to buy bread."
      },
      {
        "word": "morning",
        "translation": "mañana, por la mañana",
        "example": "Good morning!"
      },
      {
        "word": "young",
        "translation": "joven",
        "example": "She is very young."
      },
      {
        "word": "whole",
        "translation": "entero, todo, completo",
        "example": "I ate the whole cake."
      },
      {
        "word": "yet",
        "translation": "todavía, aún, sin embargo",
        "example": "I haven't finished yet."
      },
      {
        "word": "different",
        "translation": "diferente, distinto",
        "example": "We have different ideas."
      },
      {
        "word": "bit",
        "translation": "poco, trozo, bit",
        "example": "I am a bit tired."
      },
      {
        "word": "set",
        "translation": "poner, fijar, conjunto",
        "example": "Set the table, please."
      },
      {
        "word": "plan",
        "translation": "plan, planear",
        "example": "I have a plan."
      },
      {
        "word": "until",
        "translation": "hasta, hasta que",
        "example": "Wait until tomorrow."
      },
      {
        "word": "between",
        "translation": "entre",
        "example": "The shop is between the bank and the school."
      },
      {
        "word": "stand",
        "translation": "estar de pie, levantarse, soportar",
        "example": "Please stand up."
      },
      {
        "word": "read",
        "translation": "leer",
        "example": "I read a book every week."
      },
      {
        "word": "month",
        "translation": "mes",
        "example": "There are twelve months in a year."
      },
      {
        "word": "order",
        "translation": "orden, pedir, ordenar",
        "example": "I want to order a pizza."
      },
      {
        "word": "under",
        "translation": "debajo de, bajo",
        "example": "The cat is under the table."
      },
      {
        "word": "eat",
        "translation": "comer",
        "example": "We eat at noon."
      },
      {
        "word": "break",
        "translation": "romper, descanso",
        "example": "Don't break the glass."
      },
      {
        "word": "walk",
        "translation": "caminar, pasear, paseo",
        "example": "I walk to work."
      },
      {
        "word": "eye",
        "translation": "ojo",
        "example": "She has blue eyes."
      },
      {
        "word": "soon",
        "translation": "pronto",
        "example": "See you soon!"
      },
      {
        "word": "book",
        "translation": "libro, reservar",
        "example": "I read a good book."
      },
      {
        "word": "door",
        "translation": "puerta",
        "example": "Close the door, please."
      },
      {
        "word": "follow",
        "translation": "seguir",
        "example": "Follow me."
      },
      {
        "word": "important",
        "translation": "importante",
        "example": "This is very important."
      },
      {
        "word": "happy",
        "translation": "feliz, contento",
        "example": "I am happy today."
      },
      {
        "word": "person",
        "translation": "persona",
        "example": "He is a kind person."
      },
      {
        "word": "far",
        "translation": "lejos",
        "example": "The station is not far."
      },
      {
        "word": "fall",
        "translation": "caer, caída, otoño",
        "example": "Leaves fall in autumn."
      },
      {
        "word": "ago",
        "translation": "hace (tiempo)",
        "example": "I met him two years ago."
      },
      {
        "word": "deal",
        "translation": "trato, acuerdo, tratar",
        "example": "It's a deal!"
      },
      {
        "word": "sound",
        "translation": "sonido, sonar, sano",
        "example": "That sounds good."
      },
      {
        "word": "phone",
        "translation": "teléfono, llamar",
        "example": "My phone is new."
      },
      {
        "word": "country",
        "translation": "país, campo",
        "example": "Spain is a beautiful country."
      },
      {
        "word": "water",
        "translation": "agua, regar",
        "example": "I drink a lot of water."
      },
      {
        "word": "company",
        "translation": "empresa, compañía",
        "example": "She works for a big company."
      },
      {
        "word": "story",
        "translation": "historia, cuento",
        "example": "Tell me a story."
      },
      {
        "word": "probably",
        "translation": "probablemente",
        "example": "It will probably rain."
      },
      {
        "word": "against",
        "translation": "contra, en contra de",
        "example": "I am against this plan."
      },
      {
        "word": "forget",
        "translation": "olvidar",
        "example": "Don't forget your keys."
      },
      {
        "word": "begin",
        "translation": "empezar, comenzar",
        "example": "The movie begins at eight."
      },
      {
        "word": "reason",
        "translation": "razón, motivo",
        "example": "What is the reason?"
      },
      {
        "word": "yourself",
        "translation": "ti mismo, tú mismo, usted mismo",
        "example": "Believe in yourself."
      },
      {
        "word": "build",
        "translation": "construir",
        "example": "They build a new house."
      },
      {
        "word": "cause",
        "translation": "causa, causar",
        "example": "Smoking can cause illness."
      },
      {
        "word": "party",
        "translation": "fiesta, partido",
        "example": "We have a party tonight."
      },
      {
        "word": "easy",
        "translation": "fácil, tranquilo",
        "example": "The test was easy."
      },
      {
        "word": "music",
        "translation": "música",
        "example": "I love music."
      },
      {
        "word": "wife",
        "translation": "esposa, mujer",
        "example": "His wife is a nurse."
      },
      {
        "word": "laugh",
        "translation": "reír, risa",
        "example": "The joke made me laugh."
      },
      {
        "word": "side",
        "translation": "lado, costado",
        "example": "Sit by my side."
      },
      {
        "word": "though",
        "translation": "aunque, sin embargo",
        "example": "I went out, though it was cold."
      },
      {
        "word": "me",
        "translation": "me, mí",
        "example": "Give me the book."
      },
      {
        "word": "line",
        "translation": "línea, fila, cola",
        "example": "Wait in line, please."
      },
      {
        "word": "light",
        "translation": "luz, ligero, encender",
        "example": "Turn on the light."
      },
      {
        "word": "pretty",
        "translation": "bonito, guapo, bastante",
        "example": "She is a pretty girl."
      },
      {
        "word": "fact",
        "translation": "hecho, dato",
        "example": "That is a fact."
      },
      {
        "word": "quite",
        "translation": "bastante, del todo",
        "example": "It is quite cold today."
      },
      {
        "word": "brother",
        "translation": "hermano",
        "example": "My brother is older than me."
      },
      {
        "word": "body",
        "translation": "cuerpo",
        "example": "The body needs water."
      },
      {
        "word": "drink",
        "translation": "beber, bebida",
        "example": "Do you want a drink?"
      },
      {
        "word": "baby",
        "translation": "bebé",
        "example": "The baby is sleeping."
      },
      {
        "word": "drive",
        "translation": "conducir, manejar, paseo en coche",
        "example": "I drive to work."
      },
      {
        "word": "check",
        "translation": "comprobar, revisar, cheque",
        "example": "Check your email."
      },
      {
        "word": "least",
        "translation": "menos, mínimo",
        "example": "At least call me."
      },
      {
        "word": "true",
        "translation": "verdadero, cierto",
        "example": "Is it true?"
      },
      {
        "word": "game",
        "translation": "juego, partido",
        "example": "We play a game."
      },
      {
        "word": "learn",
        "translation": "aprender",
        "example": "I learn Spanish."
      },
      {
        "word": "small",
        "translation": "pequeño",
        "example": "This room is small."
      },
      {
        "word": "answer",
        "translation": "respuesta, responder",
        "example": "I know the answer."
      },
      {
        "word": "early",
        "translation": "temprano, pronto",
        "example": "I get up early."
      },
      {
        "word": "lose",
        "translation": "perder",
        "example": "Don't lose your keys."
      },
      {
        "word": "city",
        "translation": "ciudad",
        "example": "Madrid is a big city."
      },
      {
        "word": "everyone",
        "translation": "todos, todo el mundo",
        "example": "Everyone is here."
      },
      {
        "word": "ready",
        "translation": "listo, preparado",
        "example": "Are you ready?"
      },
      {
        "word": "report",
        "translation": "informe, reportar, informar",
        "example": "I write a report."
      },
      {
        "word": "power",
        "translation": "poder, energía, potencia",
        "example": "The power is out."
      },
      {
        "word": "able",
        "translation": "capaz, poder",
        "example": "I am able to help you."
      },
      {
        "word": "spend",
        "translation": "gastar, pasar (tiempo)",
        "example": "I spend too much money."
      },
      {
        "word": "moment",
        "translation": "momento, instante",
        "example": "Wait a moment."
      },
      {
        "word": "myself",
        "translation": "yo mismo, me",
        "example": "I did it myself."
      },
      {
        "word": "worry",
        "translation": "preocuparse, preocupación",
        "example": "Don't worry."
      },
      {
        "word": "tomorrow",
        "translation": "mañana (día siguiente)",
        "example": "See you tomorrow."
      },
      {
        "word": "clear",
        "translation": "claro, despejado, aclarar",
        "example": "The sky is clear."
      },
      {
        "word": "save",
        "translation": "guardar, ahorrar, salvar",
        "example": "I save money every month."
      },
      {
        "word": "fire",
        "translation": "fuego, incendio, despedir",
        "example": "The fire is hot."
      },
      {
        "word": "state",
        "translation": "estado, declarar",
        "example": "The state is very big."
      },
      {
        "word": "police",
        "translation": "policía",
        "example": "Call the police!"
      },
      {
        "word": "almost",
        "translation": "casi",
        "example": "I am almost ready."
      },
      {
        "word": "cut",
        "translation": "cortar, corte",
        "example": "Cut the bread, please."
      },
      {
        "word": "guess",
        "translation": "adivinar, suponer",
        "example": "Guess what happened!"
      },
      {
        "word": "sleep",
        "translation": "dormir, sueño",
        "example": "I sleep eight hours."
      },
      {
        "word": "wish",
        "translation": "desear, deseo",
        "example": "I wish you luck."
      },
      {
        "word": "lead",
        "translation": "liderar, dirigir, llevar",
        "example": "She will lead the team."
      },
      {
        "word": "my",
        "translation": "mi, mis",
        "example": "This is my book."
      },
      {
        "word": "dad",
        "translation": "papá",
        "example": "My dad is at work."
      },
      {
        "word": "anyone",
        "translation": "alguien, cualquiera, nadie",
        "example": "Is anyone there?"
      },
      {
        "word": "office",
        "translation": "oficina, despacho",
        "example": "I work in an office."
      },
      {
        "word": "pick",
        "translation": "elegir, recoger, escoger",
        "example": "Pick a color."
      },
      {
        "word": "doctor",
        "translation": "médico, doctor",
        "example": "I have to see a doctor."
      },
      {
        "word": "town",
        "translation": "pueblo, ciudad pequeña",
        "example": "I live in a small town."
      },
      {
        "word": "chance",
        "translation": "oportunidad, posibilidad, azar",
        "example": "This is your chance."
      },
      {
        "word": "hit",
        "translation": "golpear, éxito",
        "example": "Don't hit the dog."
      },
      {
        "word": "pass",
        "translation": "pasar, aprobar, pase",
        "example": "Pass me the salt."
      },
      {
        "word": "free",
        "translation": "libre, gratis, gratuito",
        "example": "The ticket is free."
      },
      {
        "word": "sort",
        "translation": "tipo, clase, ordenar",
        "example": "What sort of food do you like?"
      },
      {
        "word": "rest",
        "translation": "descansar, descanso, resto",
        "example": "I need to rest."
      },
      {
        "word": "your",
        "translation": "tu, tus, su, vuestro",
        "example": "Is this your bag?"
      },
      {
        "word": "sell",
        "translation": "vender",
        "example": "They sell fresh bread."
      },
      {
        "word": "team",
        "translation": "equipo",
        "example": "Our team won the game."
      },
      {
        "word": "war",
        "translation": "guerra",
        "example": "Nobody wants war."
      },
      {
        "word": "train",
        "translation": "tren, entrenar",
        "example": "The train is late."
      },
      {
        "word": "half",
        "translation": "mitad, medio",
        "example": "Give me half of the cake."
      },
      {
        "word": "figure",
        "translation": "figura, cifra, imaginar",
        "example": "I can't figure it out."
      },
      {
        "word": "expect",
        "translation": "esperar, suponer",
        "example": "I expect a call today."
      },
      {
        "word": "either",
        "translation": "cualquiera de los dos, tampoco, o",
        "example": "I don't like it either."
      },
      {
        "word": "parent",
        "translation": "padre o madre, progenitor",
        "example": "Every parent loves their child."
      },
      {
        "word": "win",
        "translation": "ganar, victoria",
        "example": "I hope we win."
      },
      {
        "word": "exactly",
        "translation": "exactamente",
        "example": "That is exactly right."
      },
      {
        "word": "wear",
        "translation": "llevar puesto, vestir, usar",
        "example": "She wears a red dress."
      },
      {
        "word": "stuff",
        "translation": "cosas, material",
        "example": "I have a lot of stuff."
      },
      {
        "word": "control",
        "translation": "control, controlar",
        "example": "I have the remote control."
      },
      {
        "word": "grow",
        "translation": "crecer, cultivar",
        "example": "Children grow fast."
      },
      {
        "word": "decide",
        "translation": "decidir",
        "example": "I can't decide."
      },
      {
        "word": "food",
        "translation": "comida, alimento",
        "example": "The food is delicious."
      },
      {
        "word": "offer",
        "translation": "ofrecer, oferta",
        "example": "They offer me a job."
      },
      {
        "word": "catch",
        "translation": "atrapar, coger, pillar",
        "example": "Catch the ball!"
      },
      {
        "word": "full",
        "translation": "lleno, completo",
        "example": "The glass is full."
      },
      {
        "word": "whatever",
        "translation": "lo que sea, cualquier cosa que",
        "example": "Do whatever you want."
      },
      {
        "word": "behind",
        "translation": "detrás de, atrás",
        "example": "The garden is behind the house."
      },
      {
        "word": "system",
        "translation": "sistema",
        "example": "The system is very simple."
      },
      {
        "word": "along",
        "translation": "a lo largo de, junto con",
        "example": "We walk along the river."
      },
      {
        "word": "force",
        "translation": "fuerza, forzar",
        "example": "Don't force the door."
      },
      {
        "word": "black",
        "translation": "negro",
        "example": "She has a black cat."
      },
      {
        "word": "continue",
        "translation": "continuar, seguir",
        "example": "Please continue."
      },
      {
        "word": "sign",
        "translation": "señal, firmar, letrero",
        "example": "Sign here, please."
      },
      {
        "word": "couple",
        "translation": "pareja, par",
        "example": "They are a nice couple."
      },
      {
        "word": "possible",
        "translation": "posible",
        "example": "Is it possible?"
      },
      {
        "word": "record",
        "translation": "registro, grabar, récord",
        "example": "I record my voice."
      },
      {
        "word": "sometimes",
        "translation": "a veces",
        "example": "Sometimes I walk to work."
      },
      {
        "word": "front",
        "translation": "frente, delante",
        "example": "The car is in front of the house."
      },
      {
        "word": "two",
        "translation": "dos",
        "example": "I have two sisters."
      },
      {
        "word": "date",
        "translation": "fecha, cita",
        "example": "What is today's date?"
      },
      {
        "word": "group",
        "translation": "grupo",
        "example": "We are a big group."
      },
      {
        "word": "past",
        "translation": "pasado, más allá de",
        "example": "We walked past the shop."
      },
      {
        "word": "top",
        "translation": "cima, parte superior, superior",
        "example": "The book is on top of the table."
      },
      {
        "word": "finish",
        "translation": "terminar, acabar",
        "example": "I finish work at six."
      },
      {
        "word": "lady",
        "translation": "señora, dama",
        "example": "The lady is waiting outside."
      },
      {
        "word": "everybody",
        "translation": "todos, todo el mundo",
        "example": "Everybody likes pizza."
      },
      {
        "word": "tonight",
        "translation": "esta noche",
        "example": "We go out tonight."
      },
      {
        "word": "study",
        "translation": "estudiar, estudio",
        "example": "I study every day."
      },
      {
        "word": "less",
        "translation": "menos",
        "example": "I want less sugar."
      },
      {
        "word": "age",
        "translation": "edad, época",
        "example": "What is your age?"
      },
      {
        "word": "outside",
        "translation": "fuera, afuera, exterior",
        "example": "The children play outside."
      },
      {
        "word": "during",
        "translation": "durante",
        "example": "I sleep during the flight."
      },
      {
        "word": "test",
        "translation": "prueba, examen, probar",
        "example": "I have a test tomorrow."
      },
      {
        "word": "picture",
        "translation": "imagen, foto, cuadro",
        "example": "Take a picture of me."
      },
      {
        "word": "shall",
        "translation": "(futuro formal), deber",
        "example": "Shall we go?"
      },
      {
        "word": "mine",
        "translation": "mío, mía, mina",
        "example": "This book is mine."
      },
      {
        "word": "husband",
        "translation": "marido, esposo",
        "example": "Her husband is a chef."
      },
      {
        "word": "rather",
        "translation": "más bien, bastante, preferir",
        "example": "I would rather stay home."
      },
      {
        "word": "sense",
        "translation": "sentido, sensación",
        "example": "It makes sense."
      },
      {
        "word": "news",
        "translation": "noticias, noticia",
        "example": "I have good news."
      },
      {
        "word": "anyway",
        "translation": "de todos modos, en cualquier caso",
        "example": "I will go anyway."
      },
      {
        "word": "special",
        "translation": "especial",
        "example": "Today is a special day."
      },
      {
        "word": "allow",
        "translation": "permitir, dejar",
        "example": "They don't allow dogs here."
      },
      {
        "word": "perhaps",
        "translation": "quizás, tal vez",
        "example": "Perhaps he is sick."
      },
      {
        "word": "step",
        "translation": "paso, escalón",
        "example": "Take one step forward."
      },
      {
        "word": "trouble",
        "translation": "problema, molestia, apuro",
        "example": "I am in trouble."
      },
      {
        "word": "white",
        "translation": "blanco",
        "example": "She wears a white shirt."
      },
      {
        "word": "drop",
        "translation": "dejar caer, gota, soltar",
        "example": "Don't drop the glass."
      },
      {
        "word": "present",
        "translation": "regalo, presente, presentar",
        "example": "This is a present for you."
      },
      {
        "word": "sister",
        "translation": "hermana",
        "example": "My sister lives in Paris."
      },
      {
        "word": "fun",
        "translation": "diversión, divertido",
        "example": "The party was fun."
      },
      {
        "word": "foot",
        "translation": "pie",
        "example": "My foot hurts."
      },
      {
        "word": "dog",
        "translation": "perro",
        "example": "The dog is very friendly."
      },
      {
        "word": "service",
        "translation": "servicio",
        "example": "The service was excellent."
      },
      {
        "word": "area",
        "translation": "zona, área",
        "example": "This is a quiet area."
      },
      {
        "word": "wonder",
        "translation": "preguntarse, maravilla",
        "example": "I wonder where he is."
      },
      {
        "word": "nine",
        "translation": "nueve",
        "example": "I wake up at nine."
      },
      {
        "word": "land",
        "translation": "tierra, terreno, aterrizar",
        "example": "The plane will land soon."
      },
      {
        "word": "somebody",
        "translation": "alguien",
        "example": "Somebody called you."
      },
      {
        "word": "bed",
        "translation": "cama",
        "example": "I go to bed at eleven."
      },
      {
        "word": "agree",
        "translation": "estar de acuerdo, acordar",
        "example": "I agree with you."
      },
      {
        "word": "pull",
        "translation": "tirar, jalar",
        "example": "Pull the door."
      },
      {
        "word": "cover",
        "translation": "cubrir, tapa, portada",
        "example": "Cover the pot."
      },
      {
        "word": "information",
        "translation": "información",
        "example": "I need more information."
      },
      {
        "word": "letter",
        "translation": "carta, letra",
        "example": "I write a letter to my friend."
      },
      {
        "word": "throw",
        "translation": "lanzar, tirar",
        "example": "Throw me the ball."
      },
      {
        "word": "street",
        "translation": "calle",
        "example": "I live on this street."
      },
      {
        "word": "strong",
        "translation": "fuerte",
        "example": "He is very strong."
      },
      {
        "word": "ring",
        "translation": "anillo, sonar, llamar",
        "example": "The phone is ringing."
      },
      {
        "word": "paper",
        "translation": "papel, periódico, trabajo",
        "example": "I need a piece of paper."
      },
      {
        "word": "explain",
        "translation": "explicar",
        "example": "Can you explain this word?"
      },
      {
        "word": "carry",
        "translation": "llevar, cargar",
        "example": "I carry my books in a bag."
      },
      {
        "word": "law",
        "translation": "ley, derecho",
        "example": "It is against the law."
      },
      {
        "word": "class",
        "translation": "clase, curso",
        "example": "The class starts at nine."
      },
      {
        "word": "brown",
        "translation": "marrón, castaño, moreno",
        "example": "She has brown hair."
      },
      {
        "word": "rule",
        "translation": "regla, norma, gobernar",
        "example": "Follow the rules."
      },
      {
        "word": "realize",
        "translation": "darse cuenta, comprender",
        "example": "I realize my mistake."
      },
      {
        "word": "future",
        "translation": "futuro",
        "example": "I think about the future."
      },
      {
        "word": "sing",
        "translation": "cantar",
        "example": "She likes to sing."
      },
      {
        "word": "piece",
        "translation": "pieza, trozo, pedazo",
        "example": "I want a piece of cake."
      },
      {
        "word": "visit",
        "translation": "visitar, visita",
        "example": "I visit my grandmother on Sundays."
      },
      {
        "word": "charge",
        "translation": "cobrar, cargar, cargo",
        "example": "I charge my phone at night."
      },
      {
        "word": "share",
        "translation": "compartir, parte",
        "example": "Let's share the pizza."
      },
      {
        "word": "hang",
        "translation": "colgar",
        "example": "Hang your coat here."
      },
      {
        "word": "government",
        "translation": "gobierno",
        "example": "The government makes new laws."
      },
      {
        "word": "teach",
        "translation": "enseñar",
        "example": "She teaches English."
      },
      {
        "word": "son",
        "translation": "hijo",
        "example": "Their son is five years old."
      },
      {
        "word": "nobody",
        "translation": "nadie",
        "example": "Nobody is home."
      },
      {
        "word": "choose",
        "translation": "elegir, escoger",
        "example": "Choose a gift."
      },
      {
        "word": "air",
        "translation": "aire",
        "example": "The air is fresh."
      },
      {
        "word": "interest",
        "translation": "interés, interesar",
        "example": "I have an interest in music."
      },
      {
        "word": "low",
        "translation": "bajo, poco elevado",
        "example": "The price is low."
      },
      {
        "word": "twenty",
        "translation": "veinte",
        "example": "I am twenty years old."
      },
      {
        "word": "hot",
        "translation": "caliente, picante, caluroso",
        "example": "The soup is hot."
      },
      {
        "word": "dear",
        "translation": "querido, caro",
        "example": "Dear Anna, how are you?"
      },
      {
        "word": "consider",
        "translation": "considerar, pensar en",
        "example": "I consider it a good idea."
      },
      {
        "word": "experience",
        "translation": "experiencia, experimentar",
        "example": "I have a lot of experience."
      },
      {
        "word": "road",
        "translation": "carretera, camino",
        "example": "The road is closed."
      },
      {
        "word": "clean",
        "translation": "limpio, limpiar",
        "example": "I clean my room."
      },
      {
        "word": "enjoy",
        "translation": "disfrutar",
        "example": "Enjoy your meal!"
      },
      {
        "word": "cool",
        "translation": "fresco, genial, frío",
        "example": "The water is cool."
      },
      {
        "word": "general",
        "translation": "general, general (militar)",
        "example": "In general, I like it."
      },
      {
        "word": "student",
        "translation": "estudiante, alumno",
        "example": "She is a student."
      },
      {
        "word": "hate",
        "translation": "odiar, odio",
        "example": "I hate waiting."
      },
      {
        "word": "him",
        "translation": "le, lo, él",
        "example": "I know him."
      },
      {
        "word": "form",
        "translation": "forma, formulario, formar",
        "example": "Fill in the form."
      },
      {
        "word": "large",
        "translation": "grande, amplio",
        "example": "We have a large garden."
      },
      {
        "word": "near",
        "translation": "cerca, cercano",
        "example": "The shop is near here."
      },
      {
        "word": "oh",
        "translation": "oh, ah",
        "example": "Oh, I see!"
      },
      {
        "word": "public",
        "translation": "público",
        "example": "This is a public park."
      },
      {
        "word": "gray",
        "translation": "gris",
        "example": "The sky is gray today."
      },
      {
        "word": "shop",
        "translation": "tienda, comprar",
        "example": "The shop closes at eight."
      },
      {
        "word": "create",
        "translation": "crear",
        "example": "They create beautiful music."
      },
      {
        "word": "stick",
        "translation": "palo, pegar, clavar",
        "example": "The dog loves the stick."
      },
      {
        "word": "red",
        "translation": "rojo",
        "example": "I like the red car."
      },
      {
        "word": "issue",
        "translation": "tema, asunto, problema, emitir",
        "example": "This is an important issue."
      },
      {
        "word": "whether",
        "translation": "si",
        "example": "I don't know whether he is coming."
      },
      {
        "word": "support",
        "translation": "apoyar, apoyo",
        "example": "My family supports me."
      },
      {
        "word": "sir",
        "translation": "señor, caballero",
        "example": "Yes, sir."
      },
      {
        "word": "evening",
        "translation": "tarde, noche",
        "example": "Good evening!"
      },
      {
        "word": "ahead",
        "translation": "adelante, por delante",
        "example": "Go straight ahead."
      },
      {
        "word": "choice",
        "translation": "elección, opción",
        "example": "It is your choice."
      },
      {
        "word": "movie",
        "translation": "película",
        "example": "We watch a movie tonight."
      },
      {
        "word": "god",
        "translation": "dios",
        "example": "Many people believe in God."
      },
      {
        "word": "table",
        "translation": "mesa, tabla",
        "example": "The book is on the table."
      },
      {
        "word": "cost",
        "translation": "costar, coste, precio",
        "example": "How much does it cost?"
      },
      {
        "word": "hospital",
        "translation": "hospital",
        "example": "He is in the hospital."
      },
      {
        "word": "round",
        "translation": "redondo, ronda, alrededor",
        "example": "The table is round."
      },
      {
        "word": "yellow",
        "translation": "amarillo",
        "example": "The sun is yellow."
      },
      {
        "word": "color",
        "translation": "color",
        "example": "What color is your car?"
      },
      {
        "word": "situation",
        "translation": "situación",
        "example": "The situation is difficult."
      },
      {
        "word": "her",
        "translation": "su, la, le, ella",
        "example": "I know her brother."
      },
      {
        "word": "dead",
        "translation": "muerto",
        "example": "The flowers are dead."
      },
      {
        "word": "across",
        "translation": "a través de, al otro lado de",
        "example": "We walk across the bridge."
      },
      {
        "word": "fight",
        "translation": "pelear, pelea, luchar",
        "example": "Don't fight with your brother."
      },
      {
        "word": "short",
        "translation": "corto, bajo",
        "example": "This is a short story."
      },
      {
        "word": "involve",
        "translation": "implicar, involucrar",
        "example": "The job involves travel."
      },
      {
        "word": "within",
        "translation": "dentro de, en menos de",
        "example": "I will call you within an hour."
      },
      {
        "word": "left",
        "translation": "izquierda, izquierdo",
        "example": "Turn left here."
      },
      {
        "word": "park",
        "translation": "parque, aparcar",
        "example": "We walk in the park."
      },
      {
        "word": "hair",
        "translation": "pelo, cabello",
        "example": "She has long hair."
      },
      {
        "word": "often",
        "translation": "a menudo, con frecuencia",
        "example": "I often go to the beach."
      },
      {
        "word": "base",
        "translation": "base, basar",
        "example": "The story is based on a real event."
      },
      {
        "word": "cold",
        "translation": "frío, resfriado",
        "example": "It is very cold today."
      },
      {
        "word": "include",
        "translation": "incluir",
        "example": "The price includes breakfast."
      },
      {
        "word": "dinner",
        "translation": "cena, comida",
        "example": "Dinner is at eight."
      },
      {
        "word": "fifty",
        "translation": "cincuenta",
        "example": "The book costs fifty euros."
      },
      {
        "word": "lie",
        "translation": "mentir, mentira, tumbarse",
        "example": "Don't lie to me."
      },
      {
        "word": "member",
        "translation": "miembro, socio",
        "example": "She is a member of the club."
      },
      {
        "word": "funny",
        "translation": "gracioso, divertido, raro",
        "example": "That joke is funny."
      },
      {
        "word": "raise",
        "translation": "levantar, subir, criar, aumento",
        "example": "Raise your hand."
      },
      {
        "word": "heart",
        "translation": "corazón",
        "example": "My heart is beating fast."
      },
      {
        "word": "hey",
        "translation": "oye, hola",
        "example": "Hey, how are you?"
      },
      {
        "word": "draw",
        "translation": "dibujar, sacar, empate",
        "example": "I like to draw."
      },
      {
        "word": "price",
        "translation": "precio",
        "example": "The price is too high."
      },
      {
        "word": "level",
        "translation": "nivel",
        "example": "My English level is good."
      },
      {
        "word": "result",
        "translation": "resultado, resultar",
        "example": "The result is clear."
      },
      {
        "word": "accept",
        "translation": "aceptar",
        "example": "I accept your offer."
      },
      {
        "word": "position",
        "translation": "posición, puesto",
        "example": "He has a good position in the company."
      },
      {
        "word": "decision",
        "translation": "decisión",
        "example": "It was a hard decision."
      },
      {
        "word": "bear",
        "translation": "oso, soportar, aguantar",
        "example": "I can't bear the noise."
      },
      {
        "word": "program",
        "translation": "programa",
        "example": "I like this TV program."
      },
      {
        "word": "yesterday",
        "translation": "ayer",
        "example": "Yesterday was Sunday."
      },
      {
        "word": "certainly",
        "translation": "ciertamente, por supuesto",
        "example": "Certainly, I can help you."
      },
      {
        "word": "pink",
        "translation": "rosa",
        "example": "She has a pink bag."
      },
      {
        "word": "notice",
        "translation": "notar, darse cuenta, aviso",
        "example": "Did you notice the sign?"
      },
      {
        "word": "death",
        "translation": "muerte",
        "example": "Death is part of life."
      },
      {
        "word": "note",
        "translation": "nota, anotar",
        "example": "Take a note of this."
      },
      {
        "word": "major",
        "translation": "importante, mayor, principal",
        "example": "This is a major problem."
      },
      {
        "word": "worth",
        "translation": "valer, valor",
        "example": "This book is worth reading."
      },
      {
        "word": "marry",
        "translation": "casarse, casar",
        "example": "They want to marry in June."
      },
      {
        "word": "instead",
        "translation": "en lugar de, en vez de",
        "example": "Let's walk instead of driving."
      },
      {
        "word": "card",
        "translation": "tarjeta, carta",
        "example": "I pay with my card."
      },
      {
        "word": "alone",
        "translation": "solo, a solas",
        "example": "I live alone."
      },
      {
        "word": "suppose",
        "translation": "suponer",
        "example": "I suppose you are right."
      },
      {
        "word": "list",
        "translation": "lista",
        "example": "Make a shopping list."
      },
      {
        "word": "forward",
        "translation": "adelante, hacia delante",
        "example": "Move forward, please."
      },
      {
        "word": "type",
        "translation": "tipo, escribir a máquina",
        "example": "What type of music do you like?"
      },
      {
        "word": "three",
        "translation": "tres",
        "example": "I have three cats."
      },
      {
        "word": "certain",
        "translation": "seguro, cierto",
        "example": "I am certain about it."
      },
      {
        "word": "relationship",
        "translation": "relación",
        "example": "They have a good relationship."
      },
      {
        "word": "suggest",
        "translation": "sugerir, proponer",
        "example": "I suggest we go home."
      },
      {
        "word": "thirty",
        "translation": "treinta",
        "example": "He is thirty years old."
      },
      {
        "word": "teacher",
        "translation": "profesor, maestro",
        "example": "My teacher is very kind."
      },
      {
        "word": "difficult",
        "translation": "difícil",
        "example": "This exercise is difficult."
      },
      {
        "word": "mention",
        "translation": "mencionar, mención",
        "example": "Don't mention it."
      },
      {
        "word": "travel",
        "translation": "viajar, viaje",
        "example": "I love to travel."
      },
      {
        "word": "market",
        "translation": "mercado",
        "example": "We buy fruit at the market."
      },
      {
        "word": "single",
        "translation": "soltero, único, individual",
        "example": "He is single."
      },
      {
        "word": "receive",
        "translation": "recibir",
        "example": "I receive many emails."
      },
      {
        "word": "computer",
        "translation": "ordenador, computadora",
        "example": "I work on my computer."
      },
      {
        "word": "push",
        "translation": "empujar, empujón",
        "example": "Push the door."
      },
      {
        "word": "box",
        "translation": "caja",
        "example": "The box is empty."
      },
      {
        "word": "imagine",
        "translation": "imaginar",
        "example": "Imagine a big house."
      },
      {
        "word": "his",
        "translation": "su, suyo (de él)",
        "example": "This is his car."
      },
      {
        "word": "center",
        "translation": "centro",
        "example": "The shop is in the city center."
      },
      {
        "word": "surprise",
        "translation": "sorpresa, sorprender",
        "example": "This is a nice surprise."
      },
      {
        "word": "contact",
        "translation": "contacto, contactar",
        "example": "Contact me by email."
      },
      {
        "word": "anybody",
        "translation": "alguien, cualquiera, nadie",
        "example": "Is anybody home?"
      },
      {
        "word": "mile",
        "translation": "milla",
        "example": "The town is five miles away."
      },
      {
        "word": "twelve",
        "translation": "doce",
        "example": "It is twelve o'clock."
      },
      {
        "word": "return",
        "translation": "volver, devolver, regreso",
        "example": "I return home at six."
      },
      {
        "word": "bill",
        "translation": "factura, cuenta",
        "example": "Can I have the bill, please?"
      },
      {
        "word": "action",
        "translation": "acción",
        "example": "We must take action."
      },
      {
        "word": "especially",
        "translation": "especialmente, sobre todo",
        "example": "I like fruit, especially apples."
      },
      {
        "word": "difference",
        "translation": "diferencia",
        "example": "What is the difference?"
      },
      {
        "word": "floor",
        "translation": "suelo, piso, planta",
        "example": "My room is on the second floor."
      },
      {
        "word": "window",
        "translation": "ventana",
        "example": "Open the window, please."
      },
      {
        "word": "straight",
        "translation": "recto, derecho, directamente",
        "example": "Go straight ahead."
      },
      {
        "word": "local",
        "translation": "local",
        "example": "I like the local food."
      },
      {
        "word": "account",
        "translation": "cuenta, informe",
        "example": "I have a bank account."
      },
      {
        "word": "wonderful",
        "translation": "maravilloso",
        "example": "We had a wonderful day."
      },
      {
        "word": "absolutely",
        "translation": "absolutamente, totalmente",
        "example": "I absolutely agree."
      },
      {
        "word": "beautiful",
        "translation": "hermoso, bello, bonito",
        "example": "The garden is beautiful."
      },
      {
        "word": "vote",
        "translation": "votar, voto",
        "example": "I vote on Sunday."
      },
      {
        "word": "toward",
        "translation": "hacia",
        "example": "She walks toward the door."
      },
      {
        "word": "machine",
        "translation": "máquina",
        "example": "The machine is broken."
      },
      {
        "word": "provide",
        "translation": "proporcionar, ofrecer, suministrar",
        "example": "The hotel provides breakfast."
      },
      {
        "word": "orange",
        "translation": "naranja",
        "example": "I eat an orange every day."
      },
      {
        "word": "example",
        "translation": "ejemplo",
        "example": "Give me an example."
      },
      {
        "word": "quick",
        "translation": "rápido",
        "example": "Take a quick look."
      },
      {
        "word": "bag",
        "translation": "bolsa, bolso, mochila",
        "example": "My bag is heavy."
      },
      {
        "word": "fit",
        "translation": "encajar, quedar bien, en forma",
        "example": "These shoes fit me well."
      },
      {
        "word": "inside",
        "translation": "dentro, interior",
        "example": "The cat is inside the house."
      },
      {
        "word": "view",
        "translation": "vista, opinión, ver",
        "example": "The view from here is beautiful."
      },
      {
        "word": "somewhere",
        "translation": "en algún lugar, a algún sitio",
        "example": "Let's go somewhere quiet."
      },
      {
        "word": "further",
        "translation": "más lejos, además, adicional",
        "example": "The station is further down the road."
      },
      {
        "word": "completely",
        "translation": "completamente, totalmente",
        "example": "I completely forgot."
      },
      {
        "word": "although",
        "translation": "aunque",
        "example": "Although it was late, we kept working."
      },
      {
        "word": "middle",
        "translation": "medio, centro, mitad",
        "example": "The table is in the middle of the room."
      },
      {
        "word": "address",
        "translation": "dirección, domicilio, dirigirse a",
        "example": "What is your address?"
      },
      {
        "word": "till",
        "translation": "hasta, hasta que, caja registradora",
        "example": "I work till six."
      },
      {
        "word": "us",
        "translation": "nos, nosotros",
        "example": "Come with us."
      },
      {
        "word": "mom",
        "translation": "mamá",
        "example": "My mom is at home."
      },
      {
        "word": "add",
        "translation": "añadir, sumar",
        "example": "Add some salt."
      },
      {
        "word": "them",
        "translation": "los, las, les, ellos, ellas",
        "example": "I see them every day."
      },
      {
        "word": "sunday",
        "translation": "domingo",
        "example": "We rest on Sunday."
      },
      {
        "word": "board",
        "translation": "tablero, junta, embarcar",
        "example": "Write it on the board."
      },
      {
        "word": "human",
        "translation": "humano, ser humano",
        "example": "Every human needs water."
      },
      {
        "word": "process",
        "translation": "proceso, procesar",
        "example": "Learning is a slow process."
      },
      {
        "word": "term",
        "translation": "término, plazo, trimestre",
        "example": "This is a technical term."
      },
      {
        "word": "detail",
        "translation": "detalle",
        "example": "Tell me every detail."
      },
      {
        "word": "hi",
        "translation": "hola",
        "example": "Hi, how are you?"
      },
      {
        "word": "church",
        "translation": "iglesia",
        "example": "The church is very old."
      },
      {
        "word": "fill",
        "translation": "llenar",
        "example": "Fill the glass with water."
      },
      {
        "word": "language",
        "translation": "idioma, lengua, lenguaje",
        "example": "I speak three languages."
      },
      {
        "word": "unless",
        "translation": "a menos que, salvo que",
        "example": "I stay home unless it is sunny."
      },
      {
        "word": "hell",
        "translation": "infierno",
        "example": "The heat here is hell."
      },
      {
        "word": "act",
        "translation": "actuar, acto, acción",
        "example": "We must act now."
      },
      {
        "word": "themselves",
        "translation": "ellos mismos, ellas mismas, se",
        "example": "They did it themselves."
      },
      {
        "word": "press",
        "translation": "presionar, pulsar, prensa",
        "example": "Press the button."
      },
      {
        "word": "promise",
        "translation": "prometer, promesa",
        "example": "I promise to call you."
      },
      {
        "word": "stage",
        "translation": "escenario, etapa, fase",
        "example": "The singer is on the stage."
      },
      {
        "word": "usually",
        "translation": "normalmente, por lo general",
        "example": "I usually wake up at seven."
      },
      {
        "word": "fifteen",
        "translation": "quince",
        "example": "She is fifteen years old."
      },
      {
        "word": "college",
        "translation": "universidad, facultad",
        "example": "My sister goes to college."
      },
      {
        "word": "our",
        "translation": "nuestro, nuestra",
        "example": "This is our house."
      },
      {
        "word": "gonna",
        "translation": "ir a (informal)",
        "example": "I am gonna call him."
      },
      {
        "word": "fair",
        "translation": "justo, feria, rubio",
        "example": "That is not fair."
      },
      {
        "word": "several",
        "translation": "varios, varias",
        "example": "I have several friends here."
      },
      {
        "word": "fast",
        "translation": "rápido, deprisa",
        "example": "He drives very fast."
      },
      {
        "word": "daughter",
        "translation": "hija",
        "example": "Her daughter is ten years old."
      },
      {
        "word": "afternoon",
        "translation": "tarde",
        "example": "Good afternoon!"
      },
      {
        "word": "concern",
        "translation": "preocupación, preocupar, asunto",
        "example": "My health is a concern."
      },
      {
        "word": "effect",
        "translation": "efecto",
        "example": "The medicine has a good effect."
      },
      {
        "word": "bet",
        "translation": "apostar, apuesta",
        "example": "I bet he is late."
      },
      {
        "word": "summer",
        "translation": "verano",
        "example": "I love the summer."
      },
      {
        "word": "opportunity",
        "translation": "oportunidad",
        "example": "This is a great opportunity."
      },
      {
        "word": "dream",
        "translation": "soñar, sueño",
        "example": "I had a strange dream."
      },
      {
        "word": "himself",
        "translation": "él mismo, se",
        "example": "He cut himself."
      },
      {
        "word": "discuss",
        "translation": "discutir, hablar de",
        "example": "Let's discuss the plan."
      },
      {
        "word": "main",
        "translation": "principal",
        "example": "The main street is busy."
      },
      {
        "word": "friday",
        "translation": "viernes",
        "example": "See you on Friday."
      },
      {
        "word": "dollar",
        "translation": "dólar",
        "example": "It costs one dollar."
      },
      {
        "word": "totally",
        "translation": "totalmente, completamente",
        "example": "I totally agree."
      },
      {
        "word": "subject",
        "translation": "tema, asignatura, sujeto",
        "example": "Math is my favorite subject."
      },
      {
        "word": "obviously",
        "translation": "obviamente, claramente",
        "example": "Obviously, he is tired."
      },
      {
        "word": "project",
        "translation": "proyecto",
        "example": "We work on a big project."
      },
      {
        "word": "bus",
        "translation": "autobús",
        "example": "I take the bus to work."
      },
      {
        "word": "focus",
        "translation": "enfocar, concentrarse, enfoque",
        "example": "Focus on your work."
      },
      {
        "word": "hurt",
        "translation": "doler, herir, lastimar",
        "example": "My back hurts."
      },
      {
        "word": "itself",
        "translation": "sí mismo, se",
        "example": "The cat cleans itself."
      },
      {
        "word": "film",
        "translation": "película, filmar",
        "example": "We watched a good film."
      },
      {
        "word": "research",
        "translation": "investigación, investigar",
        "example": "She does research on animals."
      },
      {
        "word": "touch",
        "translation": "tocar, contacto",
        "example": "Don't touch the stove."
      },
      {
        "word": "health",
        "translation": "salud",
        "example": "Health is very important."
      },
      {
        "word": "trust",
        "translation": "confiar, confianza",
        "example": "I trust my friends."
      },
      {
        "word": "value",
        "translation": "valor, valorar",
        "example": "This ring has a great value."
      },
      {
        "word": "fuck",
        "translation": "joder, follar (vulgar)",
        "example": "Fuck, I forgot my keys!"
      },
      {
        "word": "definitely",
        "translation": "sin duda, definitivamente",
        "example": "I will definitely come."
      },
      {
        "word": "saturday",
        "translation": "sábado",
        "example": "We go out on Saturday."
      },
      {
        "word": "finally",
        "translation": "finalmente, por fin",
        "example": "Finally, we arrived."
      },
      {
        "word": "poor",
        "translation": "pobre, malo",
        "example": "They are very poor."
      },
      {
        "word": "shoot",
        "translation": "disparar, rodar, tirar",
        "example": "Don't shoot!"
      },
      {
        "word": "national",
        "translation": "nacional",
        "example": "This is the national team."
      },
      {
        "word": "increase",
        "translation": "aumentar, aumento",
        "example": "Prices increase every year."
      },
      {
        "word": "join",
        "translation": "unirse, unir",
        "example": "Join us for dinner."
      },
      {
        "word": "blood",
        "translation": "sangre",
        "example": "Blood is red."
      },
      {
        "word": "welcome",
        "translation": "bienvenido, dar la bienvenida",
        "example": "Welcome to our home!"
      },
      {
        "word": "voice",
        "translation": "voz",
        "example": "She has a beautiful voice."
      },
      {
        "word": "reach",
        "translation": "alcanzar, llegar a",
        "example": "I can't reach the shelf."
      },
      {
        "word": "trade",
        "translation": "comercio, intercambiar, oficio",
        "example": "They trade with many countries."
      },
      {
        "word": "attack",
        "translation": "atacar, ataque",
        "example": "The dog may attack you."
      },
      {
        "word": "dance",
        "translation": "bailar, baile",
        "example": "Let's dance!"
      },
      {
        "word": "sale",
        "translation": "venta, rebajas",
        "example": "The shoes are on sale."
      },
      {
        "word": "five",
        "translation": "cinco",
        "example": "I have five fingers on each hand."
      },
      {
        "word": "rate",
        "translation": "tasa, tarifa, valorar",
        "example": "The rate of exchange is good."
      },
      {
        "word": "lovely",
        "translation": "encantador, precioso, agradable",
        "example": "What a lovely day!"
      },
      {
        "word": "zero",
        "translation": "cero",
        "example": "The temperature is zero degrees."
      },
      {
        "word": "truth",
        "translation": "verdad",
        "example": "Tell me the truth."
      },
      {
        "word": "excuse",
        "translation": "excusa, disculpar, perdonar",
        "example": "Excuse me, where is the station?"
      },
      {
        "word": "correct",
        "translation": "correcto, corregir",
        "example": "Your answer is correct."
      },
      {
        "word": "arm",
        "translation": "brazo, armar",
        "example": "My arm hurts."
      },
      {
        "word": "afraid",
        "translation": "asustado, con miedo",
        "example": "I am afraid of dogs."
      },
      {
        "word": "page",
        "translation": "página",
        "example": "Open the book on page ten."
      },
      {
        "word": "require",
        "translation": "requerir, exigir, necesitar",
        "example": "This job requires experience."
      },
      {
        "word": "develop",
        "translation": "desarrollar, revelar",
        "example": "They develop new software."
      },
      {
        "word": "gun",
        "translation": "pistola, arma de fuego",
        "example": "The police officer has a gun."
      },
      {
        "word": "staff",
        "translation": "personal, plantilla, bastón",
        "example": "The hotel staff is friendly."
      },
      {
        "word": "community",
        "translation": "comunidad",
        "example": "Our community is small."
      },
      {
        "word": "safe",
        "translation": "seguro, a salvo, caja fuerte",
        "example": "This area is safe."
      },
      {
        "word": "four",
        "translation": "cuatro",
        "example": "There are four seasons."
      },
      {
        "word": "conversation",
        "translation": "conversación",
        "example": "We had a nice conversation."
      },
      {
        "word": "amount",
        "translation": "cantidad, importe",
        "example": "The amount is too high."
      },
      {
        "word": "beat",
        "translation": "golpear, ganar, latido, ritmo",
        "example": "My heart beat fast."
      },
      {
        "word": "bother",
        "translation": "molestar, preocuparse",
        "example": "Don't bother me now."
      },
      {
        "word": "monday",
        "translation": "lunes",
        "example": "I work on Monday."
      },
      {
        "word": "fly",
        "translation": "volar, mosca",
        "example": "Birds fly in the sky."
      },
      {
        "word": "key",
        "translation": "llave, clave, tecla",
        "example": "I lost my key."
      },
      {
        "word": "weekend",
        "translation": "fin de semana",
        "example": "Have a nice weekend!"
      },
      {
        "word": "period",
        "translation": "período, época, regla",
        "example": "The test period is two weeks."
      },
      {
        "word": "serious",
        "translation": "serio, grave",
        "example": "He is a serious man."
      },
      {
        "word": "size",
        "translation": "tamaño, talla",
        "example": "What size do you wear?"
      },
      {
        "word": "copy",
        "translation": "copiar, copia",
        "example": "Make a copy of this page."
      },
      {
        "word": "tea",
        "translation": "té",
        "example": "I drink tea in the morning."
      },
      {
        "word": "murder",
        "translation": "asesinato, asesinar",
        "example": "The police are investigating the murder."
      },
      {
        "word": "depend",
        "translation": "depender",
        "example": "It depends on the weather."
      },
      {
        "word": "shut",
        "translation": "cerrar, cerrado",
        "example": "Shut the door, please."
      },
      {
        "word": "produce",
        "translation": "producir, producto agrícola",
        "example": "This factory produces cars."
      },
      {
        "word": "history",
        "translation": "historia",
        "example": "I like history."
      },
      {
        "word": "shot",
        "translation": "disparo, tiro, inyección, foto",
        "example": "I heard a shot."
      },
      {
        "word": "site",
        "translation": "sitio, lugar, solar",
        "example": "This is a famous site."
      },
      {
        "word": "hello",
        "translation": "hola",
        "example": "Hello, my name is Ana."
      },
      {
        "word": "cry",
        "translation": "llorar, gritar, llanto",
        "example": "The baby began to cry."
      },
      {
        "word": "eleven",
        "translation": "once",
        "example": "The class starts at eleven."
      },
      {
        "word": "hide",
        "translation": "esconder, esconderse",
        "example": "The cat hides under the bed."
      },
      {
        "word": "purpose",
        "translation": "propósito, objetivo, finalidad",
        "example": "What is the purpose of this meeting?"
      },
      {
        "word": "dress",
        "translation": "vestido, vestirse",
        "example": "She wears a blue dress."
      },
      {
        "word": "per",
        "translation": "por",
        "example": "It costs two euros per kilo."
      },
      {
        "word": "remain",
        "translation": "permanecer, quedar, seguir",
        "example": "Please remain seated."
      },
      {
        "word": "star",
        "translation": "estrella",
        "example": "I see a star in the sky."
      },
      {
        "word": "song",
        "translation": "canción",
        "example": "This is my favorite song."
      },
      {
        "word": "pound",
        "translation": "libra, golpear",
        "example": "It costs ten pounds."
      },
      {
        "word": "president",
        "translation": "presidente",
        "example": "The president gives a speech."
      },
      {
        "word": "extra",
        "translation": "extra, adicional",
        "example": "I need extra time."
      },
      {
        "word": "these",
        "translation": "estos, estas",
        "example": "These apples are red."
      },
      {
        "word": "product",
        "translation": "producto",
        "example": "This product is very good."
      },
      {
        "word": "particular",
        "translation": "particular, concreto, especial",
        "example": "Is there a particular reason?"
      },
      {
        "word": "court",
        "translation": "tribunal, cancha, corte",
        "example": "The tennis court is empty."
      },
      {
        "word": "mr",
        "translation": "señor (Sr.)",
        "example": "Mr. Smith is my teacher."
      },
      {
        "word": "arrive",
        "translation": "llegar",
        "example": "The train arrives at noon."
      },
      {
        "word": "alright",
        "translation": "bien, vale, de acuerdo",
        "example": "Are you alright?"
      },
      {
        "word": "forty",
        "translation": "cuarenta",
        "example": "He is forty years old."
      },
      {
        "word": "officer",
        "translation": "oficial, agente, policía",
        "example": "The officer asked for my passport."
      },
      {
        "word": "mark",
        "translation": "marca, marcar, nota",
        "example": "I got a good mark."
      },
      {
        "word": "perfect",
        "translation": "perfecto",
        "example": "Your Spanish is perfect."
      },
      {
        "word": "crazy",
        "translation": "loco, descabellado",
        "example": "That idea is crazy."
      },
      {
        "word": "animal",
        "translation": "animal",
        "example": "The dog is my favorite animal."
      },
      {
        "word": "tape",
        "translation": "cinta, cinta adhesiva, grabar",
        "example": "I need some tape."
      },
      {
        "word": "ground",
        "translation": "suelo, tierra, terreno",
        "example": "The ground is wet."
      },
      {
        "word": "security",
        "translation": "seguridad",
        "example": "Security is very important."
      },
      {
        "word": "effort",
        "translation": "esfuerzo",
        "example": "It takes a lot of effort."
      },
      {
        "word": "drug",
        "translation": "droga, medicamento",
        "example": "This drug is very strong."
      },
      {
        "word": "uh",
        "translation": "eh, em (duda)",
        "example": "Uh, I don't know."
      },
      {
        "word": "secret",
        "translation": "secreto",
        "example": "Can you keep a secret?"
      },
      {
        "word": "protect",
        "translation": "proteger",
        "example": "Sunscreen protects your skin."
      },
      {
        "word": "evidence",
        "translation": "prueba, evidencia",
        "example": "There is no evidence."
      },
      {
        "word": "ride",
        "translation": "montar, paseo, viaje",
        "example": "I ride my bike to school."
      },
      {
        "word": "bottom",
        "translation": "fondo, parte inferior",
        "example": "The key is at the bottom of the bag."
      },
      {
        "word": "bank",
        "translation": "banco, orilla",
        "example": "I go to the bank."
      },
      {
        "word": "thursday",
        "translation": "jueves",
        "example": "The meeting is on Thursday."
      },
      {
        "word": "blow",
        "translation": "soplar, golpe",
        "example": "Blow out the candles."
      },
      {
        "word": "however",
        "translation": "sin embargo, no obstante",
        "example": "However, I disagree."
      },
      {
        "word": "mistake",
        "translation": "error, equivocación",
        "example": "I made a mistake."
      },
      {
        "word": "six",
        "translation": "seis",
        "example": "I have six books."
      },
      {
        "word": "space",
        "translation": "espacio",
        "example": "There is no space here."
      },
      {
        "word": "statement",
        "translation": "declaración, afirmación",
        "example": "He made a short statement."
      },
      {
        "word": "station",
        "translation": "estación",
        "example": "The station is near here."
      },
      {
        "word": "prepare",
        "translation": "preparar",
        "example": "I prepare dinner every night."
      },
      {
        "word": "fear",
        "translation": "miedo, temer",
        "example": "She has no fear."
      },
      {
        "word": "score",
        "translation": "puntuación, marcador, anotar",
        "example": "What is the score?"
      },
      {
        "word": "available",
        "translation": "disponible",
        "example": "Is this room available?"
      },
      {
        "word": "serve",
        "translation": "servir",
        "example": "They serve breakfast until ten."
      },
      {
        "word": "damn",
        "translation": "maldito, maldición",
        "example": "Damn, I missed the bus!"
      },
      {
        "word": "prove",
        "translation": "probar, demostrar",
        "example": "Can you prove it?"
      },
      {
        "word": "their",
        "translation": "su, sus (de ellos)",
        "example": "This is their house."
      },
      {
        "word": "holiday",
        "translation": "vacaciones, fiesta, día festivo",
        "example": "We go on holiday in August."
      },
      {
        "word": "count",
        "translation": "contar",
        "example": "Count from one to ten."
      },
      {
        "word": "tuesday",
        "translation": "martes",
        "example": "I have class on Tuesday."
      },
      {
        "word": "wall",
        "translation": "pared, muro",
        "example": "The wall is white."
      },
      {
        "word": "patient",
        "translation": "paciente",
        "example": "The doctor sees a patient."
      },
      {
        "word": "respect",
        "translation": "respeto, respetar",
        "example": "I respect my teacher."
      },
      {
        "word": "sex",
        "translation": "sexo",
        "example": "Please write your age and sex."
      },
      {
        "word": "load",
        "translation": "carga, cargar",
        "example": "The truck has a heavy load."
      },
      {
        "word": "appear",
        "translation": "aparecer, parecer",
        "example": "A star appears in the sky."
      },
      {
        "word": "field",
        "translation": "campo, terreno, ámbito",
        "example": "The cows are in the field."
      },
      {
        "word": "ship",
        "translation": "barco, buque, enviar",
        "example": "The ship leaves at noon."
      },
      {
        "word": "fish",
        "translation": "pez, pescado, pescar",
        "example": "I eat fish on Fridays."
      },
      {
        "word": "rock",
        "translation": "roca, piedra, rock",
        "example": "The rock is very heavy."
      },
      {
        "word": "earth",
        "translation": "tierra, planeta Tierra",
        "example": "The earth goes around the sun."
      },
      {
        "word": "cell",
        "translation": "célula, celda, móvil",
        "example": "The cell is very small."
      },
      {
        "word": "fix",
        "translation": "arreglar, reparar",
        "example": "Can you fix my phone?"
      },
      {
        "word": "steal",
        "translation": "robar",
        "example": "Someone stole my bag."
      },
      {
        "word": "million",
        "translation": "millón",
        "example": "The city has one million people."
      },
      {
        "word": "attention",
        "translation": "atención",
        "example": "Pay attention, please."
      },
      {
        "word": "message",
        "translation": "mensaje",
        "example": "I have a message for you."
      },
      {
        "word": "wednesday",
        "translation": "miércoles",
        "example": "We meet on Wednesday."
      },
      {
        "word": "burn",
        "translation": "quemar, arder, quemadura",
        "example": "Don't burn the toast."
      },
      {
        "word": "degree",
        "translation": "grado, título",
        "example": "It is twenty degrees outside."
      },
      {
        "word": "pain",
        "translation": "dolor",
        "example": "I have a pain in my leg."
      },
      {
        "word": "policy",
        "translation": "política, normativa",
        "example": "This is our company policy."
      },
      {
        "word": "hotel",
        "translation": "hotel",
        "example": "We stay at a hotel."
      },
      {
        "word": "tree",
        "translation": "árbol",
        "example": "The tree is very tall."
      },
      {
        "word": "glad",
        "translation": "contento, alegre",
        "example": "I am glad to see you."
      },
      {
        "word": "text",
        "translation": "texto, mensaje, enviar un mensaje",
        "example": "Read the text carefully."
      },
      {
        "word": "club",
        "translation": "club, garrote",
        "example": "I go to the chess club."
      },
      {
        "word": "laughter",
        "translation": "risa, carcajadas",
        "example": "I heard laughter in the room."
      },
      {
        "word": "individual",
        "translation": "individual, individuo, persona",
        "example": "Each individual is different."
      },
      {
        "word": "bar",
        "translation": "bar, barra, barrote",
        "example": "Let's meet at the bar."
      },
      {
        "word": "fund",
        "translation": "fondo, financiar",
        "example": "They raise funds for the school."
      },
      {
        "word": "bloody",
        "translation": "sangriento, maldito (vulgar)",
        "example": "His hand was bloody."
      },
      {
        "word": "simple",
        "translation": "simple, sencillo",
        "example": "It is a simple question."
      },
      {
        "word": "anymore",
        "translation": "ya no, más",
        "example": "I don't live there anymore."
      },
      {
        "word": "apply",
        "translation": "solicitar, aplicar",
        "example": "I apply for a new job."
      },
      {
        "word": "sixty",
        "translation": "sesenta",
        "example": "My grandfather is sixty years old."
      },
      {
        "word": "risk",
        "translation": "riesgo, arriesgar",
        "example": "There is a risk of rain."
      },
      {
        "word": "dark",
        "translation": "oscuro, oscuridad",
        "example": "It is dark outside."
      },
      {
        "word": "deep",
        "translation": "profundo, hondo",
        "example": "The lake is very deep."
      },
      {
        "word": "those",
        "translation": "esos, esas, aquellos",
        "example": "Those shoes are nice."
      },
      {
        "word": "plus",
        "translation": "más, además",
        "example": "Two plus two is four."
      },
      {
        "word": "horse",
        "translation": "caballo",
        "example": "She rides a horse."
      },
      {
        "word": "blue",
        "translation": "azul",
        "example": "The sea is blue."
      },
      {
        "word": "aware",
        "translation": "consciente",
        "example": "I am aware of the problem."
      },
      {
        "word": "personal",
        "translation": "personal",
        "example": "This is a personal question."
      },
      {
        "word": "art",
        "translation": "arte",
        "example": "I like modern art."
      },
      {
        "word": "clock",
        "translation": "reloj (de pared)",
        "example": "The clock shows ten o'clock."
      },
      {
        "word": "treat",
        "translation": "tratar, invitar, convite",
        "example": "Doctors treat sick people."
      },
      {
        "word": "better",
        "translation": "mejor",
        "example": "This is better than that."
      },
      {
        "word": "wake",
        "translation": "despertar, despertarse",
        "example": "I wake up at seven."
      },
      {
        "word": "affect",
        "translation": "afectar",
        "example": "The weather affects my mood."
      },
      {
        "word": "handle",
        "translation": "manejar, mango, asa",
        "example": "I can handle it."
      },
      {
        "word": "store",
        "translation": "tienda, almacenar",
        "example": "The store opens at nine."
      },
      {
        "word": "purple",
        "translation": "morado, púrpura",
        "example": "She has a purple scarf."
      },
      {
        "word": "ball",
        "translation": "pelota, balón, bola",
        "example": "The children play with a ball."
      },
      {
        "word": "search",
        "translation": "buscar, búsqueda",
        "example": "I search for my keys."
      },
      {
        "word": "seat",
        "translation": "asiento",
        "example": "Is this seat free?"
      },
      {
        "word": "alive",
        "translation": "vivo",
        "example": "The fish is still alive."
      },
      {
        "word": "ten",
        "translation": "diez",
        "example": "I have ten fingers."
      },
      {
        "word": "king",
        "translation": "rey",
        "example": "The king lives in a castle."
      },
      {
        "word": "cheap",
        "translation": "barato",
        "example": "This hotel is cheap."
      },
      {
        "word": "quality",
        "translation": "calidad",
        "example": "The quality is very good."
      },
      {
        "word": "therefore",
        "translation": "por lo tanto, por eso",
        "example": "I was sick, therefore I stayed home."
      },
      {
        "word": "noise",
        "translation": "ruido",
        "example": "I hear a strange noise."
      },
      {
        "word": "none",
        "translation": "ninguno, nada",
        "example": "None of them came."
      },
      {
        "word": "trip",
        "translation": "viaje, excursión, tropezar",
        "example": "We go on a trip tomorrow."
      },
      {
        "word": "sick",
        "translation": "enfermo",
        "example": "I am sick today."
      },
      {
        "word": "paint",
        "translation": "pintar, pintura",
        "example": "I paint the walls white."
      },
      {
        "word": "leg",
        "translation": "pierna, pata",
        "example": "My leg hurts."
      },
      {
        "word": "quiet",
        "translation": "tranquilo, silencioso, callado",
        "example": "Please be quiet."
      },
      {
        "word": "master",
        "translation": "maestro, dominar, amo",
        "example": "He is a master of music."
      },
      {
        "word": "eighty",
        "translation": "ochenta",
        "example": "My grandmother is eighty."
      },
      {
        "word": "benefit",
        "translation": "beneficio, ventaja, beneficiar",
        "example": "Exercise has many benefits."
      },
      {
        "word": "practice",
        "translation": "práctica, practicar, ensayar",
        "example": "I practice English every day."
      },
      {
        "word": "boss",
        "translation": "jefe, jefa",
        "example": "My boss is very kind."
      },
      {
        "word": "breath",
        "translation": "aliento, respiración",
        "example": "Take a deep breath."
      },
      {
        "word": "kiss",
        "translation": "besar, beso",
        "example": "She gave him a kiss."
      },
      {
        "word": "except",
        "translation": "excepto, salvo",
        "example": "I eat everything except fish."
      },
      {
        "word": "condition",
        "translation": "condición, estado",
        "example": "The car is in good condition."
      },
      {
        "word": "standard",
        "translation": "estándar, norma, nivel",
        "example": "The quality is above standard."
      },
      {
        "word": "ought",
        "translation": "deber (debería)",
        "example": "You ought to rest."
      },
      {
        "word": "judge",
        "translation": "juez, juzgar",
        "example": "The judge listens carefully."
      },
      {
        "word": "shit",
        "translation": "mierda (vulgar)",
        "example": "Oh shit, I forgot my wallet!"
      },
      {
        "word": "awful",
        "translation": "horrible, terrible",
        "example": "The weather is awful."
      },
      {
        "word": "private",
        "translation": "privado, particular",
        "example": "This is a private road."
      },
      {
        "word": "among",
        "translation": "entre, en medio de",
        "example": "She is among friends."
      },
      {
        "word": "agent",
        "translation": "agente",
        "example": "He is a travel agent."
      },
      {
        "word": "tax",
        "translation": "impuesto, impuestos",
        "example": "We pay a lot of tax."
      },
      {
        "word": "clothes",
        "translation": "ropa, prendas",
        "example": "I need new clothes."
      },
      {
        "word": "seventy",
        "translation": "setenta",
        "example": "The bus is seventy years old."
      },
      {
        "word": "coffee",
        "translation": "café",
        "example": "I drink coffee every morning."
      },
      {
        "word": "quickly",
        "translation": "rápidamente, rápido",
        "example": "He eats very quickly."
      },
      {
        "word": "chief",
        "translation": "jefe, principal",
        "example": "He is the chief of the police."
      },
      {
        "word": "peace",
        "translation": "paz",
        "example": "We want peace."
      },
      {
        "word": "race",
        "translation": "carrera, raza",
        "example": "She won the race."
      },
      {
        "word": "sweet",
        "translation": "dulce, caramelo",
        "example": "This cake is very sweet."
      },
      {
        "word": "crime",
        "translation": "crimen, delito",
        "example": "The police solve the crime."
      },
      {
        "word": "normal",
        "translation": "normal",
        "example": "It is a normal day."
      },
      {
        "word": "stupid",
        "translation": "estúpido, tonto",
        "example": "That was a stupid mistake."
      },
      {
        "word": "file",
        "translation": "archivo, fichero, carpeta, lima",
        "example": "Save the file on your computer."
      },
      {
        "word": "track",
        "translation": "pista, rastro, seguir la pista",
        "example": "The train is on track three."
      },
      {
        "word": "match",
        "translation": "partido, cerilla, coincidir",
        "example": "We watch the football match."
      },
      {
        "word": "honor",
        "translation": "honor, honrar",
        "example": "It is an honor to meet you."
      },
      {
        "word": "manage",
        "translation": "dirigir, gestionar, lograr",
        "example": "She manages a small shop."
      },
      {
        "word": "doubt",
        "translation": "duda, dudar",
        "example": "I have no doubt."
      },
      {
        "word": "complete",
        "translation": "completo, completar, terminar",
        "example": "Complete the form, please."
      },
      {
        "word": "gentleman",
        "translation": "caballero, señor",
        "example": "He is a real gentleman."
      },
      {
        "word": "nineteen",
        "translation": "diecinueve",
        "example": "He is nineteen years old."
      },
      {
        "word": "education",
        "translation": "educación, formación",
        "example": "Education is very important."
      },
      {
        "word": "cross",
        "translation": "cruzar, cruz, enfadado",
        "example": "Cross the street carefully."
      },
      {
        "word": "fail",
        "translation": "fracasar, suspender, fallar",
        "example": "I don't want to fail the exam."
      },
      {
        "word": "brain",
        "translation": "cerebro",
        "example": "The brain is a powerful organ."
      },
      {
        "word": "document",
        "translation": "documento",
        "example": "I need an important document."
      },
      {
        "word": "strange",
        "translation": "extraño, raro",
        "example": "That is a strange noise."
      },
      {
        "word": "percent",
        "translation": "por ciento",
        "example": "Fifty percent of the people agree."
      },
      {
        "word": "relate",
        "translation": "relacionar, relatar, contar",
        "example": "I can relate to your story."
      },
      {
        "word": "busy",
        "translation": "ocupado, concurrido",
        "example": "I am busy right now."
      },
      {
        "word": "rich",
        "translation": "rico, adinerado",
        "example": "They are very rich."
      },
      {
        "word": "memory",
        "translation": "memoria, recuerdo",
        "example": "I have a good memory."
      },
      {
        "word": "exist",
        "translation": "existir",
        "example": "Do ghosts exist?"
      },
      {
        "word": "above",
        "translation": "encima de, arriba, por encima de",
        "example": "The picture is above the sofa."
      },
      {
        "word": "sea",
        "translation": "mar",
        "example": "The sea is calm today."
      },
      {
        "word": "arrest",
        "translation": "arrestar, detener, arresto",
        "example": "The police arrest the thief."
      },
      {
        "word": "upon",
        "translation": "sobre, encima de, al",
        "example": "Once upon a time, there was a king."
      },
      {
        "word": "scene",
        "translation": "escena, escenario",
        "example": "This is my favorite scene."
      },
      {
        "word": "ninety",
        "translation": "noventa",
        "example": "My grandmother is ninety."
      },
      {
        "word": "strike",
        "translation": "golpear, huelga, atacar",
        "example": "The workers are on strike."
      },
      {
        "word": "lock",
        "translation": "cerradura, cerrar con llave",
        "example": "Lock the door, please."
      },
      {
        "word": "enter",
        "translation": "entrar, introducir",
        "example": "Please enter the room."
      },
      {
        "word": "scream",
        "translation": "gritar, grito",
        "example": "The child began to scream."
      },
      {
        "word": "smile",
        "translation": "sonreír, sonrisa",
        "example": "She has a beautiful smile."
      },
      {
        "word": "suffer",
        "translation": "sufrir, padecer",
        "example": "He suffers from headaches."
      },
      {
        "word": "event",
        "translation": "evento, acontecimiento",
        "example": "The event starts at eight."
      },
      {
        "word": "lucky",
        "translation": "afortunado, con suerte",
        "example": "You are lucky!"
      },
      {
        "word": "mouth",
        "translation": "boca",
        "example": "Open your mouth."
      },
      {
        "word": "careful",
        "translation": "cuidadoso, con cuidado",
        "example": "Be careful!"
      },
      {
        "word": "destroy",
        "translation": "destruir",
        "example": "The storm destroyed the house."
      },
      {
        "word": "recognize",
        "translation": "reconocer",
        "example": "I recognize your voice."
      },
      {
        "word": "thanks",
        "translation": "gracias",
        "example": "Thanks for your help."
      },
      {
        "word": "luck",
        "translation": "suerte",
        "example": "Good luck!"
      },
      {
        "word": "claim",
        "translation": "afirmar, reclamar, reclamación",
        "example": "He claims he is innocent."
      },
      {
        "word": "radio",
        "translation": "radio",
        "example": "I listen to the radio in the car."
      },
      {
        "word": "jump",
        "translation": "saltar, salto",
        "example": "The cat jumps on the table."
      },
      {
        "word": "sixteen",
        "translation": "dieciséis",
        "example": "She is sixteen years old."
      },
      {
        "word": "lay",
        "translation": "poner, colocar, tumbar",
        "example": "Lay the book on the table."
      },
      {
        "word": "cook",
        "translation": "cocinar, cocinero",
        "example": "I cook dinner every night."
      },
      {
        "word": "village",
        "translation": "pueblo, aldea",
        "example": "They live in a small village."
      },
      {
        "word": "smoke",
        "translation": "humo, fumar",
        "example": "I don't smoke."
      },
      {
        "word": "weapon",
        "translation": "arma",
        "example": "The police found a weapon."
      },
      {
        "word": "release",
        "translation": "liberar, soltar, publicar, lanzamiento",
        "example": "They release the new album today."
      },
      {
        "word": "final",
        "translation": "final, último",
        "example": "This is the final exam."
      },
      {
        "word": "waste",
        "translation": "desperdiciar, desperdicio, residuos",
        "example": "Don't waste water."
      },
      {
        "word": "invite",
        "translation": "invitar",
        "example": "I invite you to my party."
      },
      {
        "word": "entire",
        "translation": "entero, completo",
        "example": "I spent the entire day at home."
      },
      {
        "word": "leader",
        "translation": "líder, jefe",
        "example": "She is a good leader."
      },
      {
        "word": "rise",
        "translation": "subir, levantarse, aumento",
        "example": "The sun rises at seven."
      },
      {
        "word": "hurry",
        "translation": "darse prisa, prisa",
        "example": "Hurry up!"
      },
      {
        "word": "basically",
        "translation": "básicamente, en esencia",
        "example": "Basically, it is a simple idea."
      },
      {
        "word": "comment",
        "translation": "comentario, comentar",
        "example": "I read your comment."
      },
      {
        "word": "boat",
        "translation": "barco, bote",
        "example": "We go on a boat trip."
      },
      {
        "word": "development",
        "translation": "desarrollo",
        "example": "The development of the city is fast."
      },
      {
        "word": "thirteen",
        "translation": "trece",
        "example": "My brother is thirteen."
      },
      {
        "word": "knock",
        "translation": "llamar (a la puerta), golpear",
        "example": "Someone knocks on the door."
      },
      {
        "word": "camera",
        "translation": "cámara",
        "example": "I bought a new camera."
      },
      {
        "word": "favor",
        "translation": "favor",
        "example": "Can you do me a favor?"
      },
      {
        "word": "roll",
        "translation": "rodar, rollo, panecillo",
        "example": "The ball rolls down the hill."
      },
      {
        "word": "thousand",
        "translation": "mil",
        "example": "The book costs one thousand euros."
      },
      {
        "word": "terrible",
        "translation": "terrible, horrible",
        "example": "I have a terrible headache."
      },
      {
        "word": "approach",
        "translation": "acercarse, enfoque, método",
        "example": "The train approaches the station."
      },
      {
        "word": "joke",
        "translation": "chiste, bromear",
        "example": "He told a funny joke."
      },
      {
        "word": "model",
        "translation": "modelo, maqueta",
        "example": "This is the newest model."
      },
      {
        "word": "design",
        "translation": "diseño, diseñar",
        "example": "I like the design of this chair."
      },
      {
        "word": "marriage",
        "translation": "matrimonio, boda",
        "example": "Their marriage is happy."
      },
      {
        "word": "huge",
        "translation": "enorme, gigantesco",
        "example": "They have a huge house."
      },
      {
        "word": "green",
        "translation": "verde",
        "example": "The grass is green."
      },
      {
        "word": "partner",
        "translation": "pareja, socio, compañero",
        "example": "She is my business partner."
      },
      {
        "word": "director",
        "translation": "director, directora",
        "example": "The director of the film is famous."
      },
      {
        "word": "bird",
        "translation": "pájaro, ave",
        "example": "A bird sings in the tree."
      },
      {
        "word": "calm",
        "translation": "tranquilo, calma, calmar",
        "example": "Stay calm, please."
      },
      {
        "word": "eighteen",
        "translation": "dieciocho",
        "example": "He is eighteen years old."
      },
      {
        "word": "plant",
        "translation": "planta, plantar",
        "example": "I water the plants every day."
      },
      {
        "word": "favorite",
        "translation": "favorito, preferido",
        "example": "Blue is my favorite color."
      },
      {
        "word": "wind",
        "translation": "viento",
        "example": "The wind is strong today."
      },
      {
        "word": "seven",
        "translation": "siete",
        "example": "There are seven days in a week."
      },
      {
        "word": "particularly",
        "translation": "particularmente, especialmente",
        "example": "I am particularly tired today."
      },
      {
        "word": "slow",
        "translation": "lento, despacio",
        "example": "The bus is very slow."
      },
      {
        "word": "smell",
        "translation": "oler, olor",
        "example": "The flowers smell nice."
      },
      {
        "word": "item",
        "translation": "artículo, elemento, objeto",
        "example": "Check each item on the list."
      },
      {
        "word": "army",
        "translation": "ejército",
        "example": "He joined the army."
      },
      {
        "word": "common",
        "translation": "común, frecuente",
        "example": "This name is very common."
      },
      {
        "word": "feed",
        "translation": "alimentar, dar de comer",
        "example": "I feed the cat twice a day."
      },
      {
        "word": "accident",
        "translation": "accidente",
        "example": "He had a car accident."
      },
      {
        "word": "spot",
        "translation": "lugar, mancha, localizar",
        "example": "This is a nice spot for a picnic."
      },
      {
        "word": "suit",
        "translation": "traje, convenir, sentar bien",
        "example": "He wears a black suit."
      },
      {
        "word": "sun",
        "translation": "sol",
        "example": "The sun is shining."
      },
      {
        "word": "hundred",
        "translation": "cien, centenar",
        "example": "The shirt costs one hundred euros."
      },
      {
        "word": "escape",
        "translation": "escapar, huir, fuga",
        "example": "The bird escaped from the cage."
      },
      {
        "word": "fourteen",
        "translation": "catorce",
        "example": "She is fourteen years old."
      },
      {
        "word": "response",
        "translation": "respuesta, reacción",
        "example": "I am waiting for your response."
      },
      {
        "word": "social",
        "translation": "social",
        "example": "She likes social events."
      },
      {
        "word": "fault",
        "translation": "culpa, defecto, falla",
        "example": "It is not my fault."
      },
      {
        "word": "challenge",
        "translation": "desafío, reto, retar",
        "example": "This is a big challenge."
      },
      {
        "word": "dangerous",
        "translation": "peligroso",
        "example": "The road is dangerous at night."
      },
      {
        "word": "admit",
        "translation": "admitir, reconocer",
        "example": "I admit my mistake."
      },
      {
        "word": "victim",
        "translation": "víctima",
        "example": "The victim is in the hospital."
      },
      {
        "word": "lunch",
        "translation": "almuerzo, comida",
        "example": "We have lunch at two."
      },
      {
        "word": "relax",
        "translation": "relajarse, descansar",
        "example": "I relax on the sofa."
      },
      {
        "word": "department",
        "translation": "departamento, sección",
        "example": "She works in the sales department."
      },
      {
        "word": "warn",
        "translation": "advertir, avisar",
        "example": "I warn you, it is dangerous."
      },
      {
        "word": "kick",
        "translation": "patear, dar una patada, patada",
        "example": "He kicks the ball."
      },
      {
        "word": "honest",
        "translation": "honesto, sincero",
        "example": "Be honest with me."
      },
      {
        "word": "character",
        "translation": "personaje, carácter",
        "example": "She has a strong character."
      },
      {
        "word": "indeed",
        "translation": "de hecho, en efecto, realmente",
        "example": "It is indeed a good idea."
      },
      {
        "word": "belong",
        "translation": "pertenecer",
        "example": "This book belongs to me."
      },
      {
        "word": "official",
        "translation": "oficial, funcionario",
        "example": "This is an official document."
      },
      {
        "word": "eight",
        "translation": "ocho",
        "example": "The shop opens at eight."
      },
      {
        "word": "seventeen",
        "translation": "diecisiete",
        "example": "He is seventeen years old."
      },
      {
        "word": "review",
        "translation": "reseña, revisar, repasar",
        "example": "I read a review of the film."
      },
      {
        "word": "due",
        "translation": "debido, pendiente, previsto",
        "example": "The homework is due on Monday."
      },
      {
        "word": "grade",
        "translation": "nota, calificación, curso",
        "example": "I got a good grade."
      },
      {
        "word": "island",
        "translation": "isla",
        "example": "We spent a week on an island."
      },
      {
        "word": "mad",
        "translation": "loco, enfadado",
        "example": "He is mad at me."
      },
      {
        "word": "gift",
        "translation": "regalo, don",
        "example": "This is a gift for you."
      },
      {
        "word": "soldier",
        "translation": "soldado",
        "example": "The soldier is very brave."
      },
      {
        "word": "simply",
        "translation": "simplemente, sencillamente",
        "example": "She simply smiled."
      }
    ],
    "2": [
      {
        "word": "plane",
        "translation": "avión",
        "example": "The plane lands at noon."
      },
      {
        "word": "specific",
        "translation": "específico, concreto",
        "example": "I need a specific answer."
      },
      {
        "word": "seriously",
        "translation": "en serio, seriamente",
        "example": "I am seriously tired."
      },
      {
        "word": "uncle",
        "translation": "tío",
        "example": "My uncle lives in Madrid."
      },
      {
        "word": "target",
        "translation": "objetivo, blanco, meta",
        "example": "He hit the target."
      },
      {
        "word": "pressure",
        "translation": "presión",
        "example": "I feel a lot of pressure."
      },
      {
        "word": "nature",
        "translation": "naturaleza",
        "example": "I love walking in nature."
      },
      {
        "word": "tough",
        "translation": "duro, difícil, resistente",
        "example": "It was a tough day."
      },
      {
        "word": "photo",
        "translation": "foto",
        "example": "This photo is beautiful."
      },
      {
        "word": "warm",
        "translation": "cálido, caliente, templado",
        "example": "The water is warm."
      },
      {
        "word": "ah",
        "translation": "ah",
        "example": "Ah, now I understand."
      },
      {
        "word": "council",
        "translation": "consejo, concejo",
        "example": "The council approved the plan."
      },
      {
        "word": "best",
        "translation": "mejor, el mejor",
        "example": "She is my best friend."
      },
      {
        "word": "appreciate",
        "translation": "apreciar, agradecer, valorar",
        "example": "I appreciate your help."
      },
      {
        "word": "glass",
        "translation": "vaso, cristal, vidrio",
        "example": "Please give me a glass of water."
      },
      {
        "word": "flower",
        "translation": "flor",
        "example": "She picked a red flower."
      },
      {
        "word": "prison",
        "translation": "prisión, cárcel",
        "example": "He spent ten years in prison."
      },
      {
        "word": "gold",
        "translation": "oro",
        "example": "The ring is made of gold."
      },
      {
        "word": "immediately",
        "translation": "inmediatamente, enseguida",
        "example": "Call me immediately."
      },
      {
        "word": "pop",
        "translation": "estallar, pop, reventar",
        "example": "The balloon will pop."
      },
      {
        "word": "tear",
        "translation": "lágrima; rasgar, romper",
        "example": "A tear ran down her cheek."
      },
      {
        "word": "pleasure",
        "translation": "placer, gusto",
        "example": "It's a pleasure to meet you."
      },
      {
        "word": "lawyer",
        "translation": "abogado, abogada",
        "example": "My lawyer will call you."
      },
      {
        "word": "energy",
        "translation": "energía",
        "example": "I have no energy today."
      },
      {
        "word": "taste",
        "translation": "sabor, gusto; probar",
        "example": "Taste the soup, please."
      },
      {
        "word": "guard",
        "translation": "guardia, vigilante; vigilar",
        "example": "The guard opened the gate."
      },
      {
        "word": "sad",
        "translation": "triste",
        "example": "I feel sad today."
      },
      {
        "word": "customer",
        "translation": "cliente",
        "example": "The customer is always right."
      },
      {
        "word": "ticket",
        "translation": "billete, entrada, boleto",
        "example": "I bought two tickets."
      },
      {
        "word": "shoe",
        "translation": "zapato",
        "example": "I lost my left shoe."
      },
      {
        "word": "neither",
        "translation": "ninguno de los dos; tampoco",
        "example": "Neither answer is correct."
      },
      {
        "word": "suddenly",
        "translation": "de repente, de pronto",
        "example": "Suddenly the lights went out."
      },
      {
        "word": "unit",
        "translation": "unidad",
        "example": "Each unit costs five euros."
      },
      {
        "word": "block",
        "translation": "bloque, manzana; bloquear",
        "example": "Don't block the door."
      },
      {
        "word": "anywhere",
        "translation": "en cualquier parte, a cualquier sitio",
        "example": "I can't find it anywhere."
      },
      {
        "word": "operation",
        "translation": "operación, funcionamiento",
        "example": "The operation was successful."
      },
      {
        "word": "river",
        "translation": "río",
        "example": "We swam in the river."
      },
      {
        "word": "introduce",
        "translation": "presentar, introducir",
        "example": "Let me introduce my sister."
      },
      {
        "word": "century",
        "translation": "siglo",
        "example": "This church is from the 12th century."
      },
      {
        "word": "tend",
        "translation": "tender a, soler",
        "example": "I tend to wake up early."
      },
      {
        "word": "witness",
        "translation": "testigo; presenciar",
        "example": "The witness saw everything."
      },
      {
        "word": "south",
        "translation": "sur",
        "example": "They live in the south of Spain."
      },
      {
        "word": "necessary",
        "translation": "necesario",
        "example": "It is necessary to sleep."
      },
      {
        "word": "rain",
        "translation": "lluvia; llover",
        "example": "I love the sound of rain."
      },
      {
        "word": "manager",
        "translation": "gerente, director, encargado",
        "example": "The manager is in a meeting."
      },
      {
        "word": "fool",
        "translation": "tonto, necio; engañar",
        "example": "Don't be a fool."
      },
      {
        "word": "ice",
        "translation": "hielo",
        "example": "Do you want ice in your drink?"
      },
      {
        "word": "interview",
        "translation": "entrevista; entrevistar",
        "example": "I have a job interview tomorrow."
      },
      {
        "word": "bomb",
        "translation": "bomba",
        "example": "The police found a bomb."
      },
      {
        "word": "soul",
        "translation": "alma",
        "example": "Music feeds the soul."
      },
      {
        "word": "pack",
        "translation": "empacar, hacer la maleta; paquete",
        "example": "I need to pack my bags."
      },
      {
        "word": "impossible",
        "translation": "imposible",
        "example": "That is impossible."
      },
      {
        "word": "committee",
        "translation": "comité, comisión",
        "example": "The committee meets on Monday."
      },
      {
        "word": "suspect",
        "translation": "sospechoso; sospechar",
        "example": "The suspect ran away."
      },
      {
        "word": "cat",
        "translation": "gato, gata",
        "example": "My cat sleeps all day."
      },
      {
        "word": "survive",
        "translation": "sobrevivir",
        "example": "Few people survived the crash."
      },
      {
        "word": "tie",
        "translation": "corbata; atar, empatar",
        "example": "He wore a blue tie."
      },
      {
        "word": "assume",
        "translation": "suponer, asumir",
        "example": "I assume you are hungry."
      },
      {
        "word": "society",
        "translation": "sociedad",
        "example": "Society is changing fast."
      },
      {
        "word": "political",
        "translation": "político",
        "example": "He has strong political opinions."
      },
      {
        "word": "opinion",
        "translation": "opinión",
        "example": "In my opinion, it's too expensive."
      },
      {
        "word": "spirit",
        "translation": "espíritu",
        "example": "She has a free spirit."
      },
      {
        "word": "military",
        "translation": "militar",
        "example": "He joined the military at eighteen."
      },
      {
        "word": "video",
        "translation": "vídeo",
        "example": "We watched a funny video."
      },
      {
        "word": "player",
        "translation": "jugador, jugadora; reproductor",
        "example": "He is a great football player."
      },
      {
        "word": "huh",
        "translation": "¿eh?, ¿qué?",
        "example": "Huh? What did you say?"
      },
      {
        "word": "mess",
        "translation": "desorden, lío",
        "example": "Your room is a mess."
      },
      {
        "word": "camp",
        "translation": "campamento; acampar",
        "example": "We set up camp near the lake."
      },
      {
        "word": "crowd",
        "translation": "multitud, gentío",
        "example": "A large crowd gathered outside."
      },
      {
        "word": "north",
        "translation": "norte",
        "example": "The wind comes from the north."
      },
      {
        "word": "mountain",
        "translation": "montaña",
        "example": "We climbed the mountain."
      },
      {
        "word": "breathe",
        "translation": "respirar",
        "example": "Breathe slowly and relax."
      },
      {
        "word": "clearly",
        "translation": "claramente",
        "example": "Speak clearly, please."
      },
      {
        "word": "herself",
        "translation": "ella misma, se",
        "example": "She hurt herself."
      },
      {
        "word": "smart",
        "translation": "inteligente, listo",
        "example": "She is a smart student."
      },
      {
        "word": "discover",
        "translation": "descubrir",
        "example": "They discovered a new planet."
      },
      {
        "word": "stone",
        "translation": "piedra",
        "example": "The wall is made of stone."
      },
      {
        "word": "duty",
        "translation": "deber, obligación; servicio",
        "example": "It is my duty to help."
      },
      {
        "word": "double",
        "translation": "doble; duplicar",
        "example": "I ordered a double coffee."
      },
      {
        "word": "cash",
        "translation": "efectivo, dinero en metálico",
        "example": "Do you pay in cash?"
      },
      {
        "word": "restaurant",
        "translation": "restaurante",
        "example": "We had dinner at a nice restaurant."
      },
      {
        "word": "demand",
        "translation": "exigir; demanda, exigencia",
        "example": "The workers demand higher pay."
      },
      {
        "word": "otherwise",
        "translation": "de lo contrario, si no",
        "example": "Hurry up, otherwise we'll be late."
      },
      {
        "word": "wine",
        "translation": "vino",
        "example": "We drank red wine."
      },
      {
        "word": "shout",
        "translation": "gritar; grito",
        "example": "Don't shout at me."
      },
      {
        "word": "guest",
        "translation": "invitado, huésped",
        "example": "We have a guest tonight."
      },
      {
        "word": "band",
        "translation": "banda, grupo musical",
        "example": "My brother plays in a band."
      },
      {
        "word": "damage",
        "translation": "daño; dañar",
        "example": "The storm caused serious damage."
      },
      {
        "word": "sport",
        "translation": "deporte",
        "example": "Football is my favorite sport."
      },
      {
        "word": "enemy",
        "translation": "enemigo",
        "example": "He has no enemies."
      },
      {
        "word": "total",
        "translation": "total",
        "example": "The total is fifty euros."
      },
      {
        "word": "battle",
        "translation": "batalla; luchar",
        "example": "They won the battle."
      },
      {
        "word": "finger",
        "translation": "dedo (de la mano)",
        "example": "I cut my finger."
      },
      {
        "word": "settle",
        "translation": "resolver, asentarse, acordar",
        "example": "They settled in a small town."
      },
      {
        "word": "blame",
        "translation": "culpar; culpa",
        "example": "Don't blame me."
      },
      {
        "word": "wash",
        "translation": "lavar",
        "example": "I wash my hands often."
      },
      {
        "word": "post",
        "translation": "publicar; correo, puesto",
        "example": "She posted a photo online."
      },
      {
        "word": "limit",
        "translation": "límite; limitar",
        "example": "The speed limit is 50."
      },
      {
        "word": "season",
        "translation": "temporada, estación",
        "example": "Summer is my favorite season."
      },
      {
        "word": "heavy",
        "translation": "pesado, fuerte",
        "example": "This bag is very heavy."
      },
      {
        "word": "hole",
        "translation": "agujero, hoyo",
        "example": "There is a hole in my sock."
      },
      {
        "word": "image",
        "translation": "imagen",
        "example": "The image is not clear."
      },
      {
        "word": "gas",
        "translation": "gas, gasolina",
        "example": "We need to buy gas."
      },
      {
        "word": "describe",
        "translation": "describir",
        "example": "Can you describe the man?"
      },
      {
        "word": "kitchen",
        "translation": "cocina",
        "example": "She is cooking in the kitchen."
      },
      {
        "word": "apart",
        "translation": "separado, aparte",
        "example": "They live far apart."
      },
      {
        "word": "role",
        "translation": "papel, rol",
        "example": "He plays the main role."
      },
      {
        "word": "angry",
        "translation": "enfadado, enojado",
        "example": "I am angry with you."
      },
      {
        "word": "contract",
        "translation": "contrato; contraer",
        "example": "I signed the contract today."
      },
      {
        "word": "beyond",
        "translation": "más allá de",
        "example": "The village is beyond the hill."
      },
      {
        "word": "deliver",
        "translation": "entregar, repartir",
        "example": "They deliver pizza at night."
      },
      {
        "word": "proud",
        "translation": "orgulloso",
        "example": "I am proud of you."
      },
      {
        "word": "career",
        "translation": "carrera, trayectoria profesional",
        "example": "She has a successful career."
      },
      {
        "word": "wanna",
        "translation": "querer (forma coloquial de «want to»)",
        "example": "I wanna go home."
      },
      {
        "word": "nearly",
        "translation": "casi",
        "example": "It's nearly midnight."
      },
      {
        "word": "disappear",
        "translation": "desaparecer",
        "example": "The cat disappeared yesterday."
      },
      {
        "word": "speed",
        "translation": "velocidad",
        "example": "The car was at full speed."
      },
      {
        "word": "natural",
        "translation": "natural",
        "example": "Her smile is natural."
      },
      {
        "word": "deserve",
        "translation": "merecer",
        "example": "You deserve a vacation."
      },
      {
        "word": "medical",
        "translation": "médico",
        "example": "He needs medical care."
      },
      {
        "word": "brief",
        "translation": "breve, corto",
        "example": "Please be brief."
      },
      {
        "word": "um",
        "translation": "eh, este (muletilla)",
        "example": "Um, I'm not sure."
      },
      {
        "word": "wow",
        "translation": "guau, vaya",
        "example": "Wow, this is amazing!"
      },
      {
        "word": "famous",
        "translation": "famoso",
        "example": "She is a famous singer."
      },
      {
        "word": "corner",
        "translation": "esquina, rincón",
        "example": "The shop is on the corner."
      },
      {
        "word": "driver",
        "translation": "conductor, chófer",
        "example": "The driver stopped the bus."
      },
      {
        "word": "dry",
        "translation": "seco; secar",
        "example": "The towel is dry."
      },
      {
        "word": "normally",
        "translation": "normalmente",
        "example": "I normally drink tea."
      },
      {
        "word": "trial",
        "translation": "juicio; prueba",
        "example": "The trial begins on Monday."
      },
      {
        "word": "prefer",
        "translation": "preferir",
        "example": "I prefer tea to coffee."
      },
      {
        "word": "remind",
        "translation": "recordar (a alguien)",
        "example": "Remind me to call her."
      },
      {
        "word": "attempt",
        "translation": "intento; intentar",
        "example": "It was a good attempt."
      },
      {
        "word": "flight",
        "translation": "vuelo",
        "example": "My flight leaves at six."
      },
      {
        "word": "honey",
        "translation": "miel; cariño",
        "example": "Would you like honey in your tea?"
      },
      {
        "word": "bye",
        "translation": "adiós, chao",
        "example": "Bye! See you tomorrow."
      },
      {
        "word": "gotta",
        "translation": "tener que (forma coloquial de «got to»)",
        "example": "I gotta go now."
      },
      {
        "word": "refuse",
        "translation": "rechazar, negarse",
        "example": "He refused to answer."
      },
      {
        "word": "avoid",
        "translation": "evitar",
        "example": "Avoid the city center today."
      },
      {
        "word": "swear",
        "translation": "jurar; decir palabrotas",
        "example": "I swear I didn't do it."
      },
      {
        "word": "bottle",
        "translation": "botella",
        "example": "Bring a bottle of water."
      },
      {
        "word": "request",
        "translation": "petición, solicitud; solicitar",
        "example": "I have a small request."
      },
      {
        "word": "source",
        "translation": "fuente, origen",
        "example": "The river's source is in the mountains."
      },
      {
        "word": "separate",
        "translation": "separado; separar",
        "example": "They sleep in separate rooms."
      },
      {
        "word": "lift",
        "translation": "levantar; ascensor",
        "example": "Can you lift this box?"
      },
      {
        "word": "nurse",
        "translation": "enfermero, enfermera",
        "example": "The nurse checked my blood pressure."
      },
      {
        "word": "besides",
        "translation": "además, aparte de",
        "example": "Besides, it's too late."
      },
      {
        "word": "skill",
        "translation": "habilidad, destreza",
        "example": "Cooking is a useful skill."
      },
      {
        "word": "egg",
        "translation": "huevo",
        "example": "I eat an egg for breakfast."
      },
      {
        "word": "fresh",
        "translation": "fresco",
        "example": "The bread is fresh."
      },
      {
        "word": "worker",
        "translation": "trabajador, obrero",
        "example": "The workers are on strike."
      },
      {
        "word": "male",
        "translation": "masculino, varón; macho",
        "example": "The form asks if you are male or female."
      },
      {
        "word": "nor",
        "translation": "ni",
        "example": "He neither eats nor drinks."
      },
      {
        "word": "professor",
        "translation": "profesor, catedrático",
        "example": "The professor gave a long lecture."
      },
      {
        "word": "chair",
        "translation": "silla; presidir",
        "example": "Please sit on this chair."
      },
      {
        "word": "likely",
        "translation": "probable, probablemente",
        "example": "It will likely rain tomorrow."
      },
      {
        "word": "science",
        "translation": "ciencia",
        "example": "I love science class."
      },
      {
        "word": "recently",
        "translation": "recientemente, hace poco",
        "example": "I recently moved to Salamanca."
      },
      {
        "word": "lost",
        "translation": "perdido",
        "example": "I am lost."
      },
      {
        "word": "commit",
        "translation": "cometer; comprometerse",
        "example": "He committed a serious mistake."
      },
      {
        "word": "responsible",
        "translation": "responsable",
        "example": "You are responsible for this."
      },
      {
        "word": "weird",
        "translation": "raro, extraño",
        "example": "That sounds weird."
      },
      {
        "word": "shake",
        "translation": "sacudir, agitar; estrechar",
        "example": "Shake the bottle before use."
      },
      {
        "word": "credit",
        "translation": "crédito",
        "example": "I paid with a credit card."
      },
      {
        "word": "grab",
        "translation": "agarrar, coger",
        "example": "Grab your coat and let's go."
      },
      {
        "word": "lord",
        "translation": "señor, lord",
        "example": "The lord lived in a castle."
      },
      {
        "word": "engine",
        "translation": "motor",
        "example": "The engine is making a noise."
      },
      {
        "word": "discussion",
        "translation": "discusión, debate",
        "example": "We had a long discussion."
      },
      {
        "word": "twice",
        "translation": "dos veces",
        "example": "I called her twice."
      },
      {
        "word": "female",
        "translation": "femenino, mujer; hembra",
        "example": "The female lion hunts for food."
      },
      {
        "word": "oil",
        "translation": "aceite; petróleo",
        "example": "Olive oil is healthy."
      },
      {
        "word": "code",
        "translation": "código",
        "example": "Enter the secret code."
      },
      {
        "word": "seek",
        "translation": "buscar, procurar",
        "example": "They seek a better life."
      },
      {
        "word": "remove",
        "translation": "quitar, eliminar",
        "example": "Please remove your shoes."
      },
      {
        "word": "owe",
        "translation": "deber (dinero)",
        "example": "I owe you ten euros."
      },
      {
        "word": "direct",
        "translation": "directo; dirigir",
        "example": "This is a direct flight."
      },
      {
        "word": "fan",
        "translation": "aficionado, fan; ventilador",
        "example": "I am a big fan of this band."
      },
      {
        "word": "captain",
        "translation": "capitán",
        "example": "The captain gave an order."
      },
      {
        "word": "style",
        "translation": "estilo",
        "example": "I like your style."
      },
      {
        "word": "upset",
        "translation": "disgustado, molesto; disgustar",
        "example": "She was upset about the news."
      },
      {
        "word": "dare",
        "translation": "atreverse, desafiar",
        "example": "Don't you dare lie to me."
      },
      {
        "word": "earn",
        "translation": "ganar (dinero), merecer",
        "example": "She earns a good salary."
      },
      {
        "word": "wood",
        "translation": "madera, leña; bosque",
        "example": "The table is made of wood."
      },
      {
        "word": "responsibility",
        "translation": "responsabilidad",
        "example": "It's your responsibility."
      },
      {
        "word": "speech",
        "translation": "discurso",
        "example": "He gave a short speech."
      },
      {
        "word": "advice",
        "translation": "consejo(s)",
        "example": "Thanks for your advice."
      },
      {
        "word": "forever",
        "translation": "para siempre",
        "example": "I will love you forever."
      },
      {
        "word": "hire",
        "translation": "contratar; alquilar",
        "example": "They want to hire a new teacher."
      },
      {
        "word": "property",
        "translation": "propiedad, bien inmueble",
        "example": "This is private property."
      },
      {
        "word": "material",
        "translation": "material",
        "example": "The material is very soft."
      },
      {
        "word": "danger",
        "translation": "peligro",
        "example": "Danger! Do not enter."
      },
      {
        "word": "garden",
        "translation": "jardín",
        "example": "The kids play in the garden."
      },
      {
        "word": "fat",
        "translation": "gordo; grasa",
        "example": "The cat is very fat."
      },
      {
        "word": "neighbor",
        "translation": "vecino, vecina",
        "example": "My neighbor is very kind."
      },
      {
        "word": "excellent",
        "translation": "excelente",
        "example": "The food was excellent."
      },
      {
        "word": "beach",
        "translation": "playa",
        "example": "We spent the day at the beach."
      },
      {
        "word": "heat",
        "translation": "calor; calentar",
        "example": "I can't stand the heat."
      },
      {
        "word": "access",
        "translation": "acceso; acceder",
        "example": "Do you have access to the file?"
      },
      {
        "word": "later",
        "translation": "más tarde, luego",
        "example": "See you later!"
      },
      {
        "word": "theory",
        "translation": "teoría",
        "example": "It's just a theory."
      },
      {
        "word": "original",
        "translation": "original",
        "example": "This is the original version."
      },
      {
        "word": "apparently",
        "translation": "al parecer, aparentemente",
        "example": "Apparently, he left early."
      },
      {
        "word": "loss",
        "translation": "pérdida",
        "example": "We mourn the loss of a friend."
      },
      {
        "word": "bore",
        "translation": "aburrir",
        "example": "Politics bores me."
      },
      {
        "word": "argue",
        "translation": "discutir, argumentar",
        "example": "They always argue about money."
      },
      {
        "word": "mission",
        "translation": "misión",
        "example": "The mission was a success."
      },
      {
        "word": "nation",
        "translation": "nación, país",
        "example": "The whole nation was watching."
      },
      {
        "word": "beer",
        "translation": "cerveza",
        "example": "I'd like a cold beer."
      },
      {
        "word": "truck",
        "translation": "camión",
        "example": "The truck is full of boxes."
      },
      {
        "word": "various",
        "translation": "varios, diversos",
        "example": "We tried various options."
      },
      {
        "word": "ass",
        "translation": "culo, trasero (vulgar); burro",
        "example": "He fell on his ass."
      },
      {
        "word": "success",
        "translation": "éxito",
        "example": "Hard work leads to success."
      },
      {
        "word": "shock",
        "translation": "conmoción, susto; impactar",
        "example": "The news was a shock."
      },
      {
        "word": "foreign",
        "translation": "extranjero",
        "example": "She speaks three foreign languages."
      },
      {
        "word": "coach",
        "translation": "entrenador; autocar; entrenar",
        "example": "The coach is very strict."
      },
      {
        "word": "artist",
        "translation": "artista",
        "example": "My sister is a talented artist."
      },
      {
        "word": "regard",
        "translation": "considerar; consideración",
        "example": "I regard him as a friend."
      },
      {
        "word": "data",
        "translation": "datos",
        "example": "We need more data."
      },
      {
        "word": "empty",
        "translation": "vacío; vaciar",
        "example": "The box is empty."
      },
      {
        "word": "ear",
        "translation": "oreja, oído",
        "example": "My left ear hurts."
      },
      {
        "word": "apartment",
        "translation": "apartamento, piso",
        "example": "They rent a small apartment."
      },
      {
        "word": "grant",
        "translation": "conceder; subvención, beca",
        "example": "They granted him permission."
      },
      {
        "word": "wild",
        "translation": "salvaje, silvestre",
        "example": "Wild animals live here."
      },
      {
        "word": "wave",
        "translation": "ola; saludar con la mano",
        "example": "She waved goodbye."
      },
      {
        "word": "supply",
        "translation": "suministro; suministrar",
        "example": "We ran out of supplies."
      },
      {
        "word": "mix",
        "translation": "mezclar; mezcla",
        "example": "Mix the eggs and the flour."
      },
      {
        "word": "west",
        "translation": "oeste",
        "example": "The sun sets in the west."
      },
      {
        "word": "defense",
        "translation": "defensa",
        "example": "Our defense is strong."
      },
      {
        "word": "lesson",
        "translation": "lección, clase",
        "example": "I have a piano lesson today."
      },
      {
        "word": "shape",
        "translation": "forma",
        "example": "The cake has a heart shape."
      },
      {
        "word": "legal",
        "translation": "legal, jurídico",
        "example": "Is this legal?"
      },
      {
        "word": "print",
        "translation": "imprimir",
        "example": "Please print this document."
      },
      {
        "word": "sky",
        "translation": "cielo",
        "example": "The sky is full of stars."
      },
      {
        "word": "faith",
        "translation": "fe",
        "example": "She has faith in him."
      },
      {
        "word": "ruin",
        "translation": "arruinar; ruina",
        "example": "Don't ruin the surprise."
      },
      {
        "word": "performance",
        "translation": "actuación, rendimiento",
        "example": "The performance was amazing."
      },
      {
        "word": "hero",
        "translation": "héroe",
        "example": "He is a hero to his son."
      },
      {
        "word": "activity",
        "translation": "actividad",
        "example": "Swimming is a fun activity."
      },
      {
        "word": "professional",
        "translation": "profesional",
        "example": "He is a professional photographer."
      },
      {
        "word": "advance",
        "translation": "avance; avanzar",
        "example": "Please book in advance."
      },
      {
        "word": "skin",
        "translation": "piel",
        "example": "She has soft skin."
      },
      {
        "word": "sight",
        "translation": "vista; visión",
        "example": "I fainted at the sight of blood."
      },
      {
        "word": "weight",
        "translation": "peso",
        "example": "I want to lose weight."
      },
      {
        "word": "ourselves",
        "translation": "nosotros mismos, nos",
        "example": "We enjoyed ourselves a lot."
      },
      {
        "word": "represent",
        "translation": "representar",
        "example": "He represents our company."
      },
      {
        "word": "perform",
        "translation": "realizar, actuar, interpretar",
        "example": "The band will perform tonight."
      },
      {
        "word": "flat",
        "translation": "plano, llano; piso",
        "example": "The road is flat."
      },
      {
        "word": "everywhere",
        "translation": "en todas partes",
        "example": "There are flowers everywhere."
      },
      {
        "word": "planet",
        "translation": "planeta",
        "example": "Mars is a red planet."
      },
      {
        "word": "cup",
        "translation": "taza",
        "example": "I'd like a cup of coffee."
      },
      {
        "word": "swim",
        "translation": "nadar",
        "example": "Can you swim?"
      },
      {
        "word": "knowledge",
        "translation": "conocimiento",
        "example": "Knowledge is power."
      },
      {
        "word": "hall",
        "translation": "sala, vestíbulo",
        "example": "The meeting is in the main hall."
      },
      {
        "word": "direction",
        "translation": "dirección, sentido",
        "example": "Which direction is the station?"
      },
      {
        "word": "evil",
        "translation": "malo, malvado; mal",
        "example": "The story has an evil witch."
      },
      {
        "word": "spread",
        "translation": "extender, difundir; propagación",
        "example": "Rumors spread quickly."
      },
      {
        "word": "connection",
        "translation": "conexión, relación",
        "example": "I have a bad internet connection."
      },
      {
        "word": "repeat",
        "translation": "repetir",
        "example": "Can you repeat that, please?"
      },
      {
        "word": "investigation",
        "translation": "investigación",
        "example": "The police started an investigation."
      },
      {
        "word": "folk",
        "translation": "gente; popular, folclórico",
        "example": "Folk music is relaxing."
      },
      {
        "word": "criminal",
        "translation": "criminal; delincuente",
        "example": "The criminal was arrested."
      },
      {
        "word": "strength",
        "translation": "fuerza, fortaleza",
        "example": "She has great inner strength."
      },
      {
        "word": "firm",
        "translation": "firme; empresa",
        "example": "He works for a law firm."
      },
      {
        "word": "collect",
        "translation": "coleccionar, recoger",
        "example": "I collect old coins."
      },
      {
        "word": "fellow",
        "translation": "compañero; tipo",
        "example": "He is a nice fellow."
      },
      {
        "word": "mate",
        "translation": "compañero, colega; pareja",
        "example": "He's my best mate."
      },
      {
        "word": "audience",
        "translation": "público, audiencia",
        "example": "The audience applauded loudly."
      },
      {
        "word": "sake",
        "translation": "bien, causa (for the sake of)",
        "example": "Do it for my sake."
      },
      {
        "word": "its",
        "translation": "su, suyo (de cosa o animal)",
        "example": "The dog wagged its tail."
      },
      {
        "word": "minister",
        "translation": "ministro, ministra",
        "example": "The minister gave a speech."
      },
      {
        "word": "farm",
        "translation": "granja, finca",
        "example": "They live on a farm."
      },
      {
        "word": "solve",
        "translation": "resolver",
        "example": "Can you solve this problem?"
      },
      {
        "word": "cop",
        "translation": "policía (coloquial)",
        "example": "The cop stopped the car."
      },
      {
        "word": "powerful",
        "translation": "poderoso, potente",
        "example": "This is a powerful engine."
      },
      {
        "word": "bone",
        "translation": "hueso",
        "example": "The dog is chewing a bone."
      },
      {
        "word": "hardly",
        "translation": "apenas, casi no",
        "example": "I can hardly hear you."
      },
      {
        "word": "soft",
        "translation": "suave, blando",
        "example": "The pillow is very soft."
      },
      {
        "word": "positive",
        "translation": "positivo",
        "example": "Try to stay positive."
      },
      {
        "word": "possibly",
        "translation": "posiblemente, quizá",
        "example": "It's possibly the best film ever."
      },
      {
        "word": "former",
        "translation": "anterior, antiguo, ex",
        "example": "He is a former president."
      },
      {
        "word": "tire",
        "translation": "cansar(se); neumático",
        "example": "Long walks tire me."
      },
      {
        "word": "technology",
        "translation": "tecnología",
        "example": "Technology changes our lives."
      },
      {
        "word": "cheer",
        "translation": "animar, vitorear; ovación",
        "example": "The fans cheered loudly."
      },
      {
        "word": "range",
        "translation": "rango, gama; abarcar",
        "example": "The shop offers a wide range of products."
      },
      {
        "word": "nervous",
        "translation": "nervioso",
        "example": "I'm nervous about the exam."
      },
      {
        "word": "hat",
        "translation": "sombrero, gorro",
        "example": "She wore a red hat."
      },
      {
        "word": "pair",
        "translation": "par, pareja",
        "example": "I bought a pair of shoes."
      },
      {
        "word": "measure",
        "translation": "medir; medida",
        "example": "Measure the table first."
      },
      {
        "word": "plenty",
        "translation": "mucho, de sobra",
        "example": "We have plenty of time."
      },
      {
        "word": "option",
        "translation": "opción",
        "example": "You have two options."
      },
      {
        "word": "disease",
        "translation": "enfermedad",
        "example": "It is a serious disease."
      },
      {
        "word": "connect",
        "translation": "conectar, unir",
        "example": "Connect the cable to the computer."
      },
      {
        "word": "beauty",
        "translation": "belleza",
        "example": "I admire the beauty of the sea."
      },
      {
        "word": "distance",
        "translation": "distancia",
        "example": "The distance is ten kilometers."
      },
      {
        "word": "easily",
        "translation": "fácilmente",
        "example": "She passed the exam easily."
      },
      {
        "word": "mrs",
        "translation": "señora (Sra.)",
        "example": "Mrs. Smith is our teacher."
      },
      {
        "word": "behavior",
        "translation": "comportamiento, conducta",
        "example": "His behavior was strange."
      },
      {
        "word": "spring",
        "translation": "primavera; manantial; saltar",
        "example": "Flowers bloom in spring."
      },
      {
        "word": "dr",
        "translation": "doctor (Dr.)",
        "example": "Dr. Lopez is in the office."
      },
      {
        "word": "freedom",
        "translation": "libertad",
        "example": "Freedom is very important."
      },
      {
        "word": "budget",
        "translation": "presupuesto",
        "example": "Our budget is limited."
      },
      {
        "word": "culture",
        "translation": "cultura",
        "example": "I love learning about other cultures."
      },
      {
        "word": "quarter",
        "translation": "cuarto, trimestre; barrio",
        "example": "It's a quarter past three."
      },
      {
        "word": "newspaper",
        "translation": "periódico, diario",
        "example": "He reads the newspaper every morning."
      },
      {
        "word": "crash",
        "translation": "choque, accidente; chocar",
        "example": "The car crashed into a wall."
      },
      {
        "word": "hunt",
        "translation": "cazar; caza",
        "example": "Wolves hunt at night."
      },
      {
        "word": "stock",
        "translation": "existencias, stock; acciones",
        "example": "The shop is out of stock."
      },
      {
        "word": "bridge",
        "translation": "puente",
        "example": "We crossed the old bridge."
      },
      {
        "word": "competition",
        "translation": "competición, concurso",
        "example": "She won the competition."
      },
      {
        "word": "lack",
        "translation": "falta, carencia; carecer de",
        "example": "There is a lack of water."
      },
      {
        "word": "advantage",
        "translation": "ventaja",
        "example": "Speaking English is an advantage."
      },
      {
        "word": "gather",
        "translation": "reunir(se), recoger",
        "example": "Let's gather around the table."
      },
      {
        "word": "gay",
        "translation": "gay, homosexual",
        "example": "He is gay and proud."
      },
      {
        "word": "physical",
        "translation": "físico",
        "example": "Physical exercise is healthy."
      },
      {
        "word": "freeze",
        "translation": "congelar(se), helar",
        "example": "Water freezes at zero degrees."
      },
      {
        "word": "grand",
        "translation": "grande, grandioso",
        "example": "They live in a grand house."
      },
      {
        "word": "tour",
        "translation": "gira, visita, recorrido",
        "example": "We took a tour of the city."
      },
      {
        "word": "owner",
        "translation": "dueño, propietario",
        "example": "The owner of the shop is nice."
      },
      {
        "word": "object",
        "translation": "objeto; oponerse",
        "example": "What is this object?"
      },
      {
        "word": "compare",
        "translation": "comparar",
        "example": "Compare the two prices."
      },
      {
        "word": "whoa",
        "translation": "¡guau!, ¡para!, ¡ojo!",
        "example": "Whoa, slow down!"
      },
      {
        "word": "dirty",
        "translation": "sucio",
        "example": "My hands are dirty."
      },
      {
        "word": "threaten",
        "translation": "amenazar",
        "example": "He threatened to leave."
      },
      {
        "word": "link",
        "translation": "enlace, vínculo; vincular",
        "example": "Click on this link."
      },
      {
        "word": "affair",
        "translation": "asunto; aventura amorosa",
        "example": "It's a private affair."
      },
      {
        "word": "wound",
        "translation": "herida; herir",
        "example": "The wound is deep."
      },
      {
        "word": "apologize",
        "translation": "disculparse, pedir perdón",
        "example": "I apologize for being late."
      },
      {
        "word": "weather",
        "translation": "tiempo (meteorológico), clima",
        "example": "The weather is nice today."
      },
      {
        "word": "breakfast",
        "translation": "desayuno",
        "example": "I have breakfast at eight."
      },
      {
        "word": "path",
        "translation": "camino, sendero",
        "example": "The path leads to the lake."
      },
      {
        "word": "loud",
        "translation": "fuerte, ruidoso",
        "example": "The music is too loud."
      },
      {
        "word": "chicken",
        "translation": "pollo, gallina",
        "example": "We had roast chicken for dinner."
      },
      {
        "word": "confirm",
        "translation": "confirmar",
        "example": "Please confirm your reservation."
      },
      {
        "word": "determine",
        "translation": "determinar, decidir",
        "example": "We must determine the cause."
      },
      {
        "word": "identify",
        "translation": "identificar",
        "example": "Can you identify this bird?"
      },
      {
        "word": "gain",
        "translation": "ganar, obtener; ganancia",
        "example": "He gained a lot of experience."
      },
      {
        "word": "university",
        "translation": "universidad",
        "example": "She studies at the university."
      },
      {
        "word": "section",
        "translation": "sección, apartado",
        "example": "Read the first section."
      },
      {
        "word": "comfortable",
        "translation": "cómodo",
        "example": "This sofa is very comfortable."
      },
      {
        "word": "switch",
        "translation": "cambiar; interruptor",
        "example": "Switch off the light, please."
      },
      {
        "word": "television",
        "translation": "televisión",
        "example": "We watch television at night."
      },
      {
        "word": "command",
        "translation": "orden; mandar",
        "example": "The dog obeys every command."
      },
      {
        "word": "campaign",
        "translation": "campaña",
        "example": "The campaign starts next month."
      },
      {
        "word": "jail",
        "translation": "cárcel; encarcelar",
        "example": "He went to jail for a year."
      },
      {
        "word": "unfortunately",
        "translation": "desafortunadamente, por desgracia",
        "example": "Unfortunately, I can't come."
      },
      {
        "word": "hill",
        "translation": "colina, cerro",
        "example": "The house is on a hill."
      },
      {
        "word": "signal",
        "translation": "señal; señalar",
        "example": "There is no signal here."
      },
      {
        "word": "treatment",
        "translation": "tratamiento",
        "example": "The treatment lasts six weeks."
      },
      {
        "word": "telephone",
        "translation": "teléfono",
        "example": "The telephone is ringing."
      },
      {
        "word": "movement",
        "translation": "movimiento",
        "example": "I saw a movement in the dark."
      },
      {
        "word": "transfer",
        "translation": "transferir, trasladar; traslado",
        "example": "I will transfer the money today."
      },
      {
        "word": "celebrate",
        "translation": "celebrar",
        "example": "We celebrate his birthday tomorrow."
      },
      {
        "word": "justice",
        "translation": "justicia",
        "example": "Everyone deserves justice."
      },
      {
        "word": "neck",
        "translation": "cuello",
        "example": "My neck hurts."
      },
      {
        "word": "tooth",
        "translation": "diente",
        "example": "I have a loose tooth."
      },
      {
        "word": "married",
        "translation": "casado",
        "example": "They have been married for ten years."
      },
      {
        "word": "supposed",
        "translation": "supuesto; se supone que",
        "example": "You are supposed to wait here."
      },
      {
        "word": "intend",
        "translation": "tener la intención de, pretender",
        "example": "I intend to study abroad."
      },
      {
        "word": "dig",
        "translation": "cavar, excavar",
        "example": "The children dig a hole in the sand."
      },
      {
        "word": "goal",
        "translation": "meta, objetivo; gol",
        "example": "My goal is to learn English."
      },
      {
        "word": "onto",
        "translation": "sobre, encima de (movimiento)",
        "example": "The cat jumped onto the table."
      },
      {
        "word": "pool",
        "translation": "piscina; charco",
        "example": "Let's swim in the pool."
      },
      {
        "word": "struggle",
        "translation": "luchar, esforzarse; lucha",
        "example": "I struggle with math."
      },
      {
        "word": "sentence",
        "translation": "frase, oración; condena",
        "example": "Write a short sentence."
      },
      {
        "word": "rent",
        "translation": "alquiler; alquilar",
        "example": "The rent is too high."
      },
      {
        "word": "article",
        "translation": "artículo",
        "example": "I read an interesting article."
      },
      {
        "word": "current",
        "translation": "actual; corriente",
        "example": "What is your current address?"
      },
      {
        "word": "forgive",
        "translation": "perdonar",
        "example": "Please forgive me."
      },
      {
        "word": "arrange",
        "translation": "organizar, arreglar, disponer",
        "example": "I will arrange a meeting."
      },
      {
        "word": "meal",
        "translation": "comida (plato), comida principal",
        "example": "Dinner is my favorite meal."
      },
      {
        "word": "below",
        "translation": "debajo, abajo",
        "example": "Please sign below."
      },
      {
        "word": "nose",
        "translation": "nariz",
        "example": "He has a big nose."
      },
      {
        "word": "attend",
        "translation": "asistir a",
        "example": "I attend classes every day."
      },
      {
        "word": "trap",
        "translation": "trampa; atrapar",
        "example": "The mouse is in the trap."
      },
      {
        "word": "bright",
        "translation": "brillante, luminoso, listo",
        "example": "The room is bright and sunny."
      },
      {
        "word": "desire",
        "translation": "deseo; desear",
        "example": "He has a strong desire to travel."
      },
      {
        "word": "wide",
        "translation": "ancho, amplio",
        "example": "The river is very wide."
      },
      {
        "word": "adult",
        "translation": "adulto",
        "example": "The ticket costs ten euros for an adult."
      },
      {
        "word": "inform",
        "translation": "informar",
        "example": "Please inform me of any changes."
      },
      {
        "word": "trick",
        "translation": "truco; engañar",
        "example": "The magician did a clever trick."
      },
      {
        "word": "guilty",
        "translation": "culpable",
        "example": "He felt guilty about the lie."
      },
      {
        "word": "tight",
        "translation": "apretado, ajustado",
        "example": "These shoes are too tight."
      },
      {
        "word": "map",
        "translation": "mapa",
        "example": "Let me look at the map."
      },
      {
        "word": "bell",
        "translation": "campana, timbre",
        "example": "Someone rang the bell."
      },
      {
        "word": "organization",
        "translation": "organización",
        "example": "She works for a charity organization."
      },
      {
        "word": "employee",
        "translation": "empleado, empleada",
        "example": "The company has fifty employees."
      },
      {
        "word": "expensive",
        "translation": "caro",
        "example": "This watch is very expensive."
      },
      {
        "word": "usual",
        "translation": "habitual, usual",
        "example": "He arrived at the usual time."
      },
      {
        "word": "rid",
        "translation": "librarse de (get rid of)",
        "example": "I want to get rid of this old sofa."
      },
      {
        "word": "industry",
        "translation": "industria",
        "example": "The car industry is growing."
      },
      {
        "word": "rush",
        "translation": "prisa; apresurarse",
        "example": "Don't rush, we have time."
      },
      {
        "word": "pretend",
        "translation": "fingir",
        "example": "The children pretend to be pirates."
      },
      {
        "word": "ability",
        "translation": "habilidad, capacidad",
        "example": "She has the ability to learn fast."
      },
      {
        "word": "blind",
        "translation": "ciego",
        "example": "He became blind at the age of ten."
      },
      {
        "word": "reality",
        "translation": "realidad",
        "example": "Face reality."
      },
      {
        "word": "magazine",
        "translation": "revista",
        "example": "I bought a fashion magazine."
      },
      {
        "word": "somehow",
        "translation": "de algún modo, de alguna manera",
        "example": "Somehow, we found the way."
      },
      {
        "word": "east",
        "translation": "este",
        "example": "The sun rises in the east."
      },
      {
        "word": "modern",
        "translation": "moderno",
        "example": "They live in a modern house."
      },
      {
        "word": "solution",
        "translation": "solución",
        "example": "We found a simple solution."
      },
      {
        "word": "similar",
        "translation": "similar, parecido",
        "example": "Our phones are similar."
      },
      {
        "word": "contain",
        "translation": "contener",
        "example": "This box contains old photos."
      },
      {
        "word": "magic",
        "translation": "magia; mágico",
        "example": "The child believes in magic."
      },
      {
        "word": "singer",
        "translation": "cantante",
        "example": "The singer has a beautiful voice."
      },
      {
        "word": "milk",
        "translation": "leche",
        "example": "I drink milk every morning."
      },
      {
        "word": "shift",
        "translation": "turno; cambio; cambiar",
        "example": "She works the night shift."
      },
      {
        "word": "express",
        "translation": "expresar; urgente",
        "example": "It's hard to express my feelings."
      },
      {
        "word": "climb",
        "translation": "escalar, subir",
        "example": "We climbed the tower."
      },
      {
        "word": "threat",
        "translation": "amenaza",
        "example": "The storm is a threat to the village."
      },
      {
        "word": "exam",
        "translation": "examen",
        "example": "I have an exam tomorrow."
      },
      {
        "word": "theater",
        "translation": "teatro",
        "example": "We went to the theater last night."
      },
      {
        "word": "afford",
        "translation": "permitirse (económicamente)",
        "example": "I can't afford a new car."
      },
      {
        "word": "weak",
        "translation": "débil, flojo",
        "example": "I feel weak after the flu."
      },
      {
        "word": "birth",
        "translation": "nacimiento",
        "example": "We celebrated the birth of her baby."
      },
      {
        "word": "secretary",
        "translation": "secretario, secretaria",
        "example": "The secretary answered the phone."
      },
      {
        "word": "salt",
        "translation": "sal",
        "example": "Pass me the salt, please."
      },
      {
        "word": "moon",
        "translation": "luna",
        "example": "The moon is full tonight."
      },
      {
        "word": "talent",
        "translation": "talento",
        "example": "She has a lot of talent."
      },
      {
        "word": "darling",
        "translation": "querido, cariño",
        "example": "Good morning, darling."
      },
      {
        "word": "schedule",
        "translation": "horario, programa; programar",
        "example": "What is your schedule today?"
      },
      {
        "word": "shirt",
        "translation": "camisa, camiseta",
        "example": "He wore a white shirt."
      },
      {
        "word": "third",
        "translation": "tercero, tercer",
        "example": "This is my third attempt."
      },
      {
        "word": "emergency",
        "translation": "emergencia, urgencia",
        "example": "Call 112 in an emergency."
      },
      {
        "word": "occur",
        "translation": "ocurrir, suceder",
        "example": "Accidents occur every day."
      },
      {
        "word": "stress",
        "translation": "estrés; estresar",
        "example": "Too much stress is bad for you."
      },
      {
        "word": "reveal",
        "translation": "revelar",
        "example": "He revealed the secret."
      },
      {
        "word": "football",
        "translation": "fútbol; fútbol americano",
        "example": "We play football on Sundays."
      },
      {
        "word": "rice",
        "translation": "arroz",
        "example": "We eat rice with chicken."
      },
      {
        "word": "yours",
        "translation": "tuyo, tuya, suyo",
        "example": "This book is yours."
      },
      {
        "word": "aim",
        "translation": "objetivo; apuntar, aspirar",
        "example": "The aim of the game is to win."
      },
      {
        "word": "international",
        "translation": "internacional",
        "example": "It's an international airport."
      },
      {
        "word": "screen",
        "translation": "pantalla; cribar",
        "example": "The screen is broken."
      },
      {
        "word": "crack",
        "translation": "grieta; agrietar, romper",
        "example": "There is a crack in the wall."
      },
      {
        "word": "potato",
        "translation": "patata, papa",
        "example": "I want fried potatoes."
      },
      {
        "word": "bury",
        "translation": "enterrar",
        "example": "The dog buried a bone."
      },
      {
        "word": "organize",
        "translation": "organizar",
        "example": "I organize the party."
      },
      {
        "word": "winter",
        "translation": "invierno",
        "example": "Winter is cold here."
      },
      {
        "word": "plate",
        "translation": "plato",
        "example": "Put the food on the plate."
      },
      {
        "word": "expert",
        "translation": "experto, experta",
        "example": "He is an expert in history."
      },
      {
        "word": "routine",
        "translation": "rutina",
        "example": "My morning routine is simple."
      },
      {
        "word": "cake",
        "translation": "pastel, tarta",
        "example": "She baked a chocolate cake."
      },
      {
        "word": "central",
        "translation": "central",
        "example": "The hotel has a central location."
      },
      {
        "word": "replace",
        "translation": "reemplazar, sustituir",
        "example": "I need to replace the battery."
      },
      {
        "word": "van",
        "translation": "furgoneta",
        "example": "The van is full of boxes."
      },
      {
        "word": "deny",
        "translation": "negar",
        "example": "He denies everything."
      },
      {
        "word": "guitar",
        "translation": "guitarra",
        "example": "He plays the guitar well."
      },
      {
        "word": "series",
        "translation": "serie",
        "example": "We watched a TV series."
      },
      {
        "word": "popular",
        "translation": "popular",
        "example": "This song is very popular."
      },
      {
        "word": "square",
        "translation": "cuadrado; plaza",
        "example": "We met in the town square."
      },
      {
        "word": "operate",
        "translation": "operar, manejar, funcionar",
        "example": "Do you know how to operate this machine?"
      },
      {
        "word": "bless",
        "translation": "bendecir",
        "example": "God bless you."
      },
      {
        "word": "description",
        "translation": "descripción",
        "example": "Her description was very clear."
      },
      {
        "word": "exchange",
        "translation": "intercambio; intercambiar, cambiar",
        "example": "I want to exchange this shirt."
      },
      {
        "word": "safety",
        "translation": "seguridad",
        "example": "Safety comes first."
      },
      {
        "word": "actor",
        "translation": "actor",
        "example": "He is a famous actor."
      },
      {
        "word": "regular",
        "translation": "regular, habitual",
        "example": "He is a regular customer."
      },
      {
        "word": "meat",
        "translation": "carne",
        "example": "I don't eat meat."
      },
      {
        "word": "tourist",
        "translation": "turista",
        "example": "The city is full of tourists."
      },
      {
        "word": "slip",
        "translation": "resbalar; resbalón",
        "example": "Be careful not to slip."
      },
      {
        "word": "writer",
        "translation": "escritor, escritora",
        "example": "She is a famous writer."
      },
      {
        "word": "gate",
        "translation": "puerta (de acceso), verja",
        "example": "Your flight leaves from gate twelve."
      },
      {
        "word": "throat",
        "translation": "garganta",
        "example": "I have a sore throat."
      },
      {
        "word": "goodbye",
        "translation": "adiós",
        "example": "She waved goodbye."
      },
      {
        "word": "toilet",
        "translation": "inodoro, baño, aseo",
        "example": "Where is the toilet?"
      },
      {
        "word": "influence",
        "translation": "influencia; influir",
        "example": "Friends have a strong influence on us."
      },
      {
        "word": "forest",
        "translation": "bosque",
        "example": "We walked in the forest."
      },
      {
        "word": "improve",
        "translation": "mejorar",
        "example": "I want to improve my English."
      },
      {
        "word": "pocket",
        "translation": "bolsillo",
        "example": "My keys are in my pocket."
      },
      {
        "word": "ha",
        "translation": "ja (risa); ¡ajá!",
        "example": "Ha! I knew it!"
      },
      {
        "word": "festival",
        "translation": "festival, fiesta",
        "example": "The music festival starts on Friday."
      },
      {
        "word": "tip",
        "translation": "propina; consejo; punta",
        "example": "Leave a tip for the waiter."
      },
      {
        "word": "location",
        "translation": "ubicación, lugar",
        "example": "The location of the hotel is perfect."
      },
      {
        "word": "engage",
        "translation": "involucrar(se), atraer, comprometer",
        "example": "The teacher engages the students."
      },
      {
        "word": "desk",
        "translation": "escritorio, mesa de trabajo",
        "example": "My desk is by the window."
      },
      {
        "word": "traffic",
        "translation": "tráfico, tránsito",
        "example": "There is a lot of traffic today."
      },
      {
        "word": "diet",
        "translation": "dieta",
        "example": "He is on a diet."
      },
      {
        "word": "cousin",
        "translation": "primo, prima",
        "example": "My cousin lives in Paris."
      },
      {
        "word": "eventually",
        "translation": "finalmente, con el tiempo",
        "example": "Eventually, we arrived home."
      },
      {
        "word": "harm",
        "translation": "daño; dañar",
        "example": "Smoking can harm your health."
      },
      {
        "word": "crew",
        "translation": "tripulación, equipo",
        "example": "The crew welcomed us on board."
      },
      {
        "word": "bastard",
        "translation": "bastardo, cabrón (vulgar)",
        "example": "That man is a bastard."
      },
      {
        "word": "feeling",
        "translation": "sentimiento, sensación",
        "example": "I have a good feeling about this."
      },
      {
        "word": "surely",
        "translation": "seguramente, sin duda",
        "example": "Surely you remember me."
      },
      {
        "word": "tiny",
        "translation": "diminuto, minúsculo",
        "example": "The baby has tiny hands."
      },
      {
        "word": "edge",
        "translation": "borde, filo",
        "example": "Don't stand near the edge."
      },
      {
        "word": "slowly",
        "translation": "lentamente, despacio",
        "example": "Please speak slowly."
      },
      {
        "word": "bedroom",
        "translation": "dormitorio, habitación",
        "example": "My bedroom is upstairs."
      },
      {
        "word": "grandfather",
        "translation": "abuelo",
        "example": "My grandfather tells great stories."
      },
      {
        "word": "pray",
        "translation": "rezar, orar",
        "example": "They pray every night."
      },
      {
        "word": "truly",
        "translation": "verdaderamente, de verdad",
        "example": "I am truly sorry."
      },
      {
        "word": "pregnant",
        "translation": "embarazada",
        "example": "She is six months pregnant."
      },
      {
        "word": "task",
        "translation": "tarea",
        "example": "This task is not easy."
      },
      {
        "word": "propose",
        "translation": "proponer; pedir matrimonio",
        "example": "I propose a short break."
      },
      {
        "word": "airport",
        "translation": "aeropuerto",
        "example": "We arrived at the airport early."
      },
      {
        "word": "obvious",
        "translation": "obvio, evidente",
        "example": "The answer is obvious."
      },
      {
        "word": "divorce",
        "translation": "divorcio; divorciarse",
        "example": "They are getting a divorce."
      },
      {
        "word": "vehicle",
        "translation": "vehículo",
        "example": "The vehicle stopped suddenly."
      },
      {
        "word": "convince",
        "translation": "convencer",
        "example": "I can't convince him."
      },
      {
        "word": "birthday",
        "translation": "cumpleaños",
        "example": "Today is my birthday."
      },
      {
        "word": "snake",
        "translation": "serpiente, culebra",
        "example": "I saw a snake in the garden."
      },
      {
        "word": "generation",
        "translation": "generación",
        "example": "Each generation is different."
      },
      {
        "word": "bunch",
        "translation": "manojo, grupo, montón",
        "example": "He gave her a bunch of flowers."
      },
      {
        "word": "possibility",
        "translation": "posibilidad",
        "example": "There is a possibility of rain."
      },
      {
        "word": "successful",
        "translation": "exitoso, con éxito",
        "example": "She is a successful lawyer."
      },
      {
        "word": "cancer",
        "translation": "cáncer",
        "example": "Doctors are fighting cancer."
      },
      {
        "word": "downstairs",
        "translation": "abajo, en la planta baja",
        "example": "The kitchen is downstairs."
      },
      {
        "word": "chase",
        "translation": "perseguir; persecución",
        "example": "The dog chased the cat."
      },
      {
        "word": "confuse",
        "translation": "confundir",
        "example": "The instructions confuse me."
      },
      {
        "word": "innocent",
        "translation": "inocente",
        "example": "The man is innocent."
      },
      {
        "word": "conference",
        "translation": "conferencia, congreso",
        "example": "She spoke at the conference."
      },
      {
        "word": "production",
        "translation": "producción",
        "example": "Production starts next week."
      },
      {
        "word": "delicious",
        "translation": "delicioso",
        "example": "This soup is delicious."
      },
      {
        "word": "financial",
        "translation": "financiero",
        "example": "They have financial problems."
      },
      {
        "word": "medicine",
        "translation": "medicina, medicamento",
        "example": "Take this medicine twice a day."
      },
      {
        "word": "perfectly",
        "translation": "perfectamente",
        "example": "The plan worked perfectly."
      },
      {
        "word": "despite",
        "translation": "a pesar de",
        "example": "We went out despite the rain."
      },
      {
        "word": "ignore",
        "translation": "ignorar",
        "example": "Don't ignore the warning."
      },
      {
        "word": "excited",
        "translation": "emocionado, ilusionado",
        "example": "I'm excited about the trip."
      },
      {
        "word": "agreement",
        "translation": "acuerdo",
        "example": "We reached an agreement."
      },
      {
        "word": "aunt",
        "translation": "tía",
        "example": "My aunt makes great cakes."
      },
      {
        "word": "insurance",
        "translation": "seguro",
        "example": "I have car insurance."
      },
      {
        "word": "flow",
        "translation": "flujo; fluir",
        "example": "The river flows to the sea."
      },
      {
        "word": "taxi",
        "translation": "taxi",
        "example": "Let's take a taxi."
      },
      {
        "word": "vacation",
        "translation": "vacaciones",
        "example": "We are on vacation next week."
      },
      {
        "word": "license",
        "translation": "licencia, permiso",
        "example": "I need a driver's license."
      },
      {
        "word": "split",
        "translation": "dividir, partir; división",
        "example": "Let's split the bill."
      },
      {
        "word": "ancient",
        "translation": "antiguo, milenario",
        "example": "We visited ancient ruins."
      },
      {
        "word": "sexual",
        "translation": "sexual",
        "example": "Sexual education is important."
      },
      {
        "word": "journey",
        "translation": "viaje, trayecto",
        "example": "The journey took three hours."
      },
      {
        "word": "apple",
        "translation": "manzana",
        "example": "I eat an apple every day."
      },
      {
        "word": "knife",
        "translation": "cuchillo",
        "example": "Be careful with the knife."
      },
      {
        "word": "shoulder",
        "translation": "hombro",
        "example": "My shoulder hurts."
      },
      {
        "word": "agency",
        "translation": "agencia",
        "example": "She works at a travel agency."
      },
      {
        "word": "photograph",
        "translation": "fotografía; fotografiar",
        "example": "This photograph is very old."
      },
      {
        "word": "scare",
        "translation": "asustar; susto",
        "example": "You scared me!"
      },
      {
        "word": "sheep",
        "translation": "oveja",
        "example": "The sheep are in the field."
      },
      {
        "word": "sample",
        "translation": "muestra; probar",
        "example": "Can I have a free sample?"
      },
      {
        "word": "launch",
        "translation": "lanzar; lanzamiento",
        "example": "They will launch a new product."
      },
      {
        "word": "surface",
        "translation": "superficie; salir a la superficie",
        "example": "The surface of the lake is calm."
      },
      {
        "word": "surround",
        "translation": "rodear",
        "example": "Mountains surround the village."
      },
      {
        "word": "insist",
        "translation": "insistir",
        "example": "I insist on paying."
      },
      {
        "word": "soup",
        "translation": "sopa",
        "example": "I made vegetable soup."
      },
      {
        "word": "pattern",
        "translation": "patrón, dibujo",
        "example": "The dress has a floral pattern."
      },
      {
        "word": "exercise",
        "translation": "ejercicio; hacer ejercicio",
        "example": "I exercise three times a week."
      },
      {
        "word": "election",
        "translation": "elección, elecciones",
        "example": "The election is in November."
      },
      {
        "word": "chain",
        "translation": "cadena",
        "example": "She wore a gold chain."
      },
      {
        "word": "engineer",
        "translation": "ingeniero, ingeniera",
        "example": "My father is an engineer."
      },
      {
        "word": "vegetable",
        "translation": "verdura, hortaliza",
        "example": "Eat more vegetables."
      },
      {
        "word": "coat",
        "translation": "abrigo, chaqueta",
        "example": "Take your coat, it's cold."
      },
      {
        "word": "prisoner",
        "translation": "prisionero, preso",
        "example": "The prisoner escaped last night."
      },
      {
        "word": "wing",
        "translation": "ala",
        "example": "The bird has a broken wing."
      },
      {
        "word": "union",
        "translation": "unión; sindicato",
        "example": "The workers joined the union."
      },
      {
        "word": "progress",
        "translation": "progreso; progresar",
        "example": "You are making good progress."
      },
      {
        "word": "chart",
        "translation": "gráfico, tabla",
        "example": "The chart shows the sales."
      },
      {
        "word": "silly",
        "translation": "tonto, bobo",
        "example": "Don't be silly."
      },
      {
        "word": "scientist",
        "translation": "científico, científica",
        "example": "The scientist made a discovery."
      },
      {
        "word": "detective",
        "translation": "detective",
        "example": "The detective found a clue."
      },
      {
        "word": "lake",
        "translation": "lago",
        "example": "We swam in the lake."
      },
      {
        "word": "pig",
        "translation": "cerdo, puerco",
        "example": "The pig is in the mud."
      },
      {
        "word": "midnight",
        "translation": "medianoche",
        "example": "The party ended at midnight."
      },
      {
        "word": "directly",
        "translation": "directamente",
        "example": "Go directly to the office."
      },
      {
        "word": "drag",
        "translation": "arrastrar",
        "example": "He dragged the box across the floor."
      },
      {
        "word": "borrow",
        "translation": "pedir prestado",
        "example": "Can I borrow your pen?"
      },
      {
        "word": "guide",
        "translation": "guía; guiar",
        "example": "The guide showed us the castle."
      },
      {
        "word": "hmm",
        "translation": "mmm",
        "example": "Hmm, let me think."
      },
      {
        "word": "jeans",
        "translation": "vaqueros, jeans",
        "example": "I bought new jeans."
      },
      {
        "word": "healthy",
        "translation": "sano, saludable",
        "example": "Eat healthy food."
      },
      {
        "word": "network",
        "translation": "red",
        "example": "The network is down."
      },
      {
        "word": "balance",
        "translation": "equilibrio; saldo",
        "example": "I lost my balance and fell."
      },
      {
        "word": "snow",
        "translation": "nieve; nevar",
        "example": "It snows a lot in winter."
      },
      {
        "word": "familiar",
        "translation": "familiar, conocido",
        "example": "His face looks familiar."
      },
      {
        "word": "sandwich",
        "translation": "bocadillo, sándwich",
        "example": "I'd like a ham sandwich."
      },
      {
        "word": "investigate",
        "translation": "investigar",
        "example": "The police will investigate the case."
      },
      {
        "word": "storm",
        "translation": "tormenta",
        "example": "A storm is coming."
      },
      {
        "word": "function",
        "translation": "función; funcionar",
        "example": "The machine does not function."
      },
      {
        "word": "carefully",
        "translation": "con cuidado, cuidadosamente",
        "example": "Read the text carefully."
      },
      {
        "word": "fairly",
        "translation": "bastante; justamente",
        "example": "The test was fairly easy."
      },
      {
        "word": "lion",
        "translation": "león",
        "example": "The lion is the king of the jungle."
      },
      {
        "word": "proof",
        "translation": "prueba",
        "example": "Do you have any proof?"
      },
      {
        "word": "argument",
        "translation": "discusión; argumento",
        "example": "They had an argument about money."
      },
      {
        "word": "complain",
        "translation": "quejarse",
        "example": "Stop complaining all the time."
      },
      {
        "word": "achieve",
        "translation": "lograr, alcanzar",
        "example": "She achieved her goal."
      },
      {
        "word": "mass",
        "translation": "masa; misa",
        "example": "A mass of people filled the square."
      },
      {
        "word": "billion",
        "translation": "mil millones",
        "example": "The city has a billion-euro budget."
      },
      {
        "word": "spare",
        "translation": "de repuesto, libre; ahorrar",
        "example": "Do you have a spare key?"
      },
      {
        "word": "capital",
        "translation": "capital; mayúscula",
        "example": "Madrid is the capital of Spain."
      },
      {
        "word": "alarm",
        "translation": "alarma",
        "example": "The alarm woke me up at six."
      },
      {
        "word": "citizen",
        "translation": "ciudadano, ciudadana",
        "example": "She is a Spanish citizen."
      },
      {
        "word": "bite",
        "translation": "morder; mordisco",
        "example": "The dog might bite you."
      },
      {
        "word": "tennis",
        "translation": "tenis",
        "example": "We play tennis on Saturdays."
      },
      {
        "word": "neighborhood",
        "translation": "barrio, vecindario",
        "example": "It's a quiet neighborhood."
      },
      {
        "word": "bitch",
        "translation": "perra; zorra (vulgar, insulto)",
        "example": "The bitch had five puppies."
      },
      {
        "word": "establish",
        "translation": "establecer, fundar",
        "example": "They established a new company."
      },
      {
        "word": "assistant",
        "translation": "asistente, ayudante",
        "example": "The assistant answered the phone."
      },
      {
        "word": "spell",
        "translation": "deletrear; hechizo",
        "example": "How do you spell your name?"
      },
      {
        "word": "juice",
        "translation": "zumo, jugo",
        "example": "I drink orange juice at breakfast."
      },
      {
        "word": "wheel",
        "translation": "rueda; volante",
        "example": "The car has a flat wheel."
      },
      {
        "word": "experiment",
        "translation": "experimento; experimentar",
        "example": "We did a science experiment."
      },
      {
        "word": "killer",
        "translation": "asesino, asesina",
        "example": "The police caught the killer."
      },
      {
        "word": "respond",
        "translation": "responder",
        "example": "Please respond to my email."
      },
      {
        "word": "negative",
        "translation": "negativo",
        "example": "Don't be so negative."
      },
      {
        "word": "phrase",
        "translation": "frase, expresión",
        "example": "Learn this useful phrase."
      },
      {
        "word": "odd",
        "translation": "raro, extraño; impar",
        "example": "That's odd, the door is open."
      },
      {
        "word": "shower",
        "translation": "ducha; ducharse",
        "example": "I take a shower every morning."
      },
      {
        "word": "tall",
        "translation": "alto",
        "example": "My brother is very tall."
      },
      {
        "word": "proper",
        "translation": "adecuado, apropiado",
        "example": "Use the proper tool."
      },
      {
        "word": "circle",
        "translation": "círculo",
        "example": "Draw a circle on the paper."
      },
      {
        "word": "topic",
        "translation": "tema",
        "example": "What's the topic of the lesson?"
      },
      {
        "word": "studio",
        "translation": "estudio",
        "example": "The singer is in the recording studio."
      },
      {
        "word": "embarrass",
        "translation": "avergonzar",
        "example": "Don't embarrass me in front of everyone."
      },
      {
        "word": "method",
        "translation": "método",
        "example": "This method is very effective."
      },
      {
        "word": "pause",
        "translation": "pausa; hacer una pausa",
        "example": "Let's take a short pause."
      },
      {
        "word": "factory",
        "translation": "fábrica",
        "example": "He works in a car factory."
      },
      {
        "word": "teenager",
        "translation": "adolescente",
        "example": "My sister is a teenager."
      },
      {
        "word": "yard",
        "translation": "patio, jardín; yarda",
        "example": "The kids play in the yard."
      },
      {
        "word": "potential",
        "translation": "potencial; posible",
        "example": "She has great potential."
      },
      {
        "word": "defend",
        "translation": "defender",
        "example": "They defend their country."
      },
      {
        "word": "charm",
        "translation": "encanto; encantar",
        "example": "The village has a lot of charm."
      },
      {
        "word": "wire",
        "translation": "alambre, cable; transferir",
        "example": "The wire is too short."
      },
      {
        "word": "reader",
        "translation": "lector, lectora",
        "example": "He is an avid reader."
      },
      {
        "word": "cast",
        "translation": "reparto; lanzar",
        "example": "The cast of the film is excellent."
      },
      {
        "word": "extremely",
        "translation": "extremadamente",
        "example": "It is extremely cold today."
      },
      {
        "word": "scared",
        "translation": "asustado, con miedo",
        "example": "I'm scared of spiders."
      },
      {
        "word": "trace",
        "translation": "rastro, huella; rastrear",
        "example": "There is no trace of him."
      },
      {
        "word": "regret",
        "translation": "lamentar, arrepentirse; arrepentimiento",
        "example": "I regret what I said."
      },
      {
        "word": "april",
        "translation": "abril",
        "example": "My birthday is in April."
      },
      {
        "word": "attitude",
        "translation": "actitud",
        "example": "I like your positive attitude."
      },
      {
        "word": "circumstance",
        "translation": "circunstancia",
        "example": "Under no circumstances open the door."
      },
      {
        "word": "cent",
        "translation": "céntimo",
        "example": "The pen costs fifty cents."
      },
      {
        "word": "silence",
        "translation": "silencio",
        "example": "The room fell into silence."
      },
      {
        "word": "senior",
        "translation": "mayor; superior",
        "example": "He is a senior manager."
      },
      {
        "word": "skirt",
        "translation": "falda",
        "example": "She bought a red skirt."
      },
      {
        "word": "satisfy",
        "translation": "satisfacer",
        "example": "Nothing seems to satisfy him."
      },
      {
        "word": "bike",
        "translation": "bici, bicicleta",
        "example": "I go to work by bike."
      },
      {
        "word": "ill",
        "translation": "enfermo",
        "example": "She is ill in bed."
      },
      {
        "word": "equipment",
        "translation": "equipo, equipamiento",
        "example": "We need new equipment."
      },
      {
        "word": "brilliant",
        "translation": "brillante, genial",
        "example": "That's a brilliant idea!"
      },
      {
        "word": "menu",
        "translation": "menú, carta",
        "example": "Can I see the menu, please?"
      },
      {
        "word": "capture",
        "translation": "capturar, captar",
        "example": "The police captured the thief."
      },
      {
        "word": "recent",
        "translation": "reciente",
        "example": "It's a recent photo."
      },
      {
        "word": "accuse",
        "translation": "acusar",
        "example": "They accused him of theft."
      },
      {
        "word": "presence",
        "translation": "presencia",
        "example": "Your presence is required."
      },
      {
        "word": "relative",
        "translation": "pariente; relativo",
        "example": "All my relatives came to the party."
      },
      {
        "word": "butter",
        "translation": "mantequilla",
        "example": "Spread butter on the bread."
      },
      {
        "word": "whisper",
        "translation": "susurrar; susurro",
        "example": "She whispered in my ear."
      },
      {
        "word": "guarantee",
        "translation": "garantía; garantizar",
        "example": "I guarantee you will like it."
      },
      {
        "word": "girlfriend",
        "translation": "novia",
        "example": "He has a new girlfriend."
      },
      {
        "word": "route",
        "translation": "ruta, camino",
        "example": "Which route do you take to work?"
      },
      {
        "word": "useful",
        "translation": "útil",
        "example": "This app is very useful."
      },
      {
        "word": "email",
        "translation": "correo electrónico, email",
        "example": "I sent you an email."
      },
      {
        "word": "title",
        "translation": "título",
        "example": "What is the title of the book?"
      },
      {
        "word": "announce",
        "translation": "anunciar",
        "example": "They will announce the winner tomorrow."
      },
      {
        "word": "bath",
        "translation": "baño, bañera",
        "example": "I take a bath every evening."
      },
      {
        "word": "stare",
        "translation": "mirar fijamente",
        "example": "It's rude to stare at people."
      },
      {
        "word": "roof",
        "translation": "techo, tejado",
        "example": "The roof is covered with snow."
      },
      {
        "word": "policeman",
        "translation": "policía (hombre)",
        "example": "The policeman stopped the traffic."
      },
      {
        "word": "click",
        "translation": "hacer clic; clic",
        "example": "Click on the icon to open it."
      },
      {
        "word": "abandon",
        "translation": "abandonar",
        "example": "They abandoned the old house."
      },
      {
        "word": "colleague",
        "translation": "colega (de trabajo)",
        "example": "My colleague helped me today."
      },
      {
        "word": "associate",
        "translation": "asociar; socio",
        "example": "I associate this smell with summer."
      },
      {
        "word": "dish",
        "translation": "plato (comida), fuente",
        "example": "This dish is very spicy."
      },
      {
        "word": "exciting",
        "translation": "emocionante",
        "example": "It was an exciting game."
      },
      {
        "word": "debt",
        "translation": "deuda",
        "example": "He has a lot of debt."
      },
      {
        "word": "heaven",
        "translation": "cielo, paraíso",
        "example": "This cake tastes like heaven."
      },
      {
        "word": "prevent",
        "translation": "prevenir, evitar",
        "example": "Vaccines prevent diseases."
      },
      {
        "word": "mostly",
        "translation": "mayormente, sobre todo",
        "example": "I mostly eat vegetables."
      },
      {
        "word": "mail",
        "translation": "correo; enviar por correo",
        "example": "Did you check the mail?"
      },
      {
        "word": "dancer",
        "translation": "bailarín, bailarina",
        "example": "She is a professional dancer."
      },
      {
        "word": "whenever",
        "translation": "siempre que, cuando quiera",
        "example": "Call me whenever you want."
      },
      {
        "word": "violence",
        "translation": "violencia",
        "example": "We must stop violence."
      },
      {
        "word": "tool",
        "translation": "herramienta",
        "example": "I need a tool to fix this."
      },
      {
        "word": "profit",
        "translation": "beneficio, ganancia",
        "example": "The company made a big profit."
      },
      {
        "word": "bond",
        "translation": "vínculo, lazo; bono",
        "example": "There is a strong bond between them."
      },
      {
        "word": "elephant",
        "translation": "elefante",
        "example": "The elephant is a huge animal."
      },
      {
        "word": "fantastic",
        "translation": "fantástico",
        "example": "The view is fantastic."
      },
      {
        "word": "daddy",
        "translation": "papá, papi",
        "example": "Daddy, can you help me?"
      },
      {
        "word": "cream",
        "translation": "crema, nata",
        "example": "I'd like coffee with cream."
      },
      {
        "word": "lover",
        "translation": "amante; aficionado",
        "example": "He is a lover of classical music."
      },
      {
        "word": "reduce",
        "translation": "reducir",
        "example": "We must reduce our costs."
      },
      {
        "word": "passport",
        "translation": "pasaporte",
        "example": "Don't forget your passport."
      },
      {
        "word": "feature",
        "translation": "característica, rasgo; presentar",
        "example": "The phone has many new features."
      },
      {
        "word": "refer",
        "translation": "referirse a, remitir",
        "example": "What are you referring to?"
      },
      {
        "word": "environment",
        "translation": "medio ambiente, entorno",
        "example": "We must protect the environment."
      },
      {
        "word": "secure",
        "translation": "seguro; asegurar",
        "example": "Is this website secure?"
      },
      {
        "word": "drunk",
        "translation": "borracho",
        "example": "He was too drunk to drive."
      },
      {
        "word": "june",
        "translation": "junio",
        "example": "We travel in June."
      },
      {
        "word": "wet",
        "translation": "mojado, húmedo",
        "example": "My shoes are wet."
      },
      {
        "word": "bind",
        "translation": "atar, unir, encuadernar",
        "example": "They bind the books by hand."
      },
      {
        "word": "average",
        "translation": "promedio, media; medio",
        "example": "The average age is thirty."
      },
      {
        "word": "unite",
        "translation": "unir(se)",
        "example": "The two countries decided to unite."
      },
      {
        "word": "fruit",
        "translation": "fruta, fruto",
        "example": "I eat fruit every day."
      },
      {
        "word": "gym",
        "translation": "gimnasio",
        "example": "I go to the gym three times a week."
      },
      {
        "word": "creature",
        "translation": "criatura, ser",
        "example": "The cave is full of strange creatures."
      },
      {
        "word": "loose",
        "translation": "suelto, flojo",
        "example": "The screw is loose."
      },
      {
        "word": "queen",
        "translation": "reina",
        "example": "The queen waved at the crowd."
      },
      {
        "word": "failure",
        "translation": "fracaso; fallo",
        "example": "Failure is part of learning."
      },
      {
        "word": "joy",
        "translation": "alegría",
        "example": "The children jumped for joy."
      },
      {
        "word": "homework",
        "translation": "deberes, tarea",
        "example": "I have a lot of homework today."
      },
      {
        "word": "personally",
        "translation": "personalmente",
        "example": "Personally, I prefer tea."
      },
      {
        "word": "winner",
        "translation": "ganador, ganadora",
        "example": "Who is the winner?"
      },
      {
        "word": "chip",
        "translation": "patata frita; ficha, chip",
        "example": "I bought a bag of chips."
      },
      {
        "word": "sudden",
        "translation": "repentino, súbito",
        "example": "It was a sudden change."
      },
      {
        "word": "cigarette",
        "translation": "cigarrillo",
        "example": "He smoked a cigarette."
      },
      {
        "word": "o'clock",
        "translation": "en punto (hora)",
        "example": "It is three o'clock."
      },
      {
        "word": "politics",
        "translation": "política",
        "example": "I don't talk about politics."
      },
      {
        "word": "quit",
        "translation": "dejar, renunciar",
        "example": "I want to quit smoking."
      },
      {
        "word": "version",
        "translation": "versión",
        "example": "Is there a Spanish version?"
      },
      {
        "word": "device",
        "translation": "dispositivo, aparato",
        "example": "This device is very useful."
      },
      {
        "word": "row",
        "translation": "fila; remar",
        "example": "We sat in the front row."
      },
      {
        "word": "actress",
        "translation": "actriz",
        "example": "She is a famous actress."
      },
      {
        "word": "troop",
        "translation": "tropa",
        "example": "The troops arrived at dawn."
      },
      {
        "word": "bathroom",
        "translation": "baño, cuarto de baño",
        "example": "Where is the bathroom?"
      },
      {
        "word": "daily",
        "translation": "diario, cotidiano",
        "example": "It's part of my daily routine."
      },
      {
        "word": "horrible",
        "translation": "horrible",
        "example": "The weather is horrible today."
      },
      {
        "word": "structure",
        "translation": "estructura",
        "example": "The structure of the bridge is solid."
      },
      {
        "word": "border",
        "translation": "frontera; borde",
        "example": "We crossed the border at night."
      },
      {
        "word": "salad",
        "translation": "ensalada",
        "example": "I'd like a green salad."
      },
      {
        "word": "library",
        "translation": "biblioteca",
        "example": "I study in the library."
      },
      {
        "word": "screw",
        "translation": "tornillo; atornillar",
        "example": "I need a screw and a screwdriver."
      },
      {
        "word": "knee",
        "translation": "rodilla",
        "example": "My knee hurts when I run."
      },
      {
        "word": "boyfriend",
        "translation": "novio",
        "example": "Her boyfriend is very nice."
      },
      {
        "word": "surgery",
        "translation": "cirugía, operación",
        "example": "He needs surgery on his knee."
      },
      {
        "word": "banana",
        "translation": "plátano, banana",
        "example": "He eats a banana every morning."
      },
      {
        "word": "beg",
        "translation": "suplicar, mendigar",
        "example": "I beg you, don't go."
      },
      {
        "word": "highly",
        "translation": "muy, altamente",
        "example": "She is a highly skilled doctor."
      },
      {
        "word": "mood",
        "translation": "estado de ánimo, humor",
        "example": "I'm in a good mood today."
      },
      {
        "word": "lip",
        "translation": "labio",
        "example": "She bit her lip."
      },
      {
        "word": "fully",
        "translation": "completamente, totalmente",
        "example": "I fully agree with you."
      },
      {
        "word": "website",
        "translation": "sitio web",
        "example": "Visit our website for more information."
      },
      {
        "word": "basic",
        "translation": "básico",
        "example": "He has basic knowledge of English."
      },
      {
        "word": "vision",
        "translation": "visión",
        "example": "He has poor vision."
      },
      {
        "word": "sharp",
        "translation": "afilado, agudo",
        "example": "Be careful, the knife is sharp."
      },
      {
        "word": "practical",
        "translation": "práctico",
        "example": "This bag is very practical."
      },
      {
        "word": "appointment",
        "translation": "cita",
        "example": "I have a doctor's appointment."
      },
      {
        "word": "internet",
        "translation": "internet",
        "example": "I don't have internet at home."
      },
      {
        "word": "hungry",
        "translation": "hambriento, con hambre",
        "example": "I'm very hungry."
      },
      {
        "word": "rat",
        "translation": "rata",
        "example": "There is a rat in the kitchen."
      },
      {
        "word": "pilot",
        "translation": "piloto; probar (experimental)",
        "example": "The pilot welcomed the passengers."
      },
      {
        "word": "maintain",
        "translation": "mantener",
        "example": "It's important to maintain a healthy lifestyle."
      },
      {
        "word": "reporter",
        "translation": "reportero, periodista",
        "example": "The reporter asked many questions."
      },
      {
        "word": "fourth",
        "translation": "cuarto",
        "example": "Today is the fourth of May."
      },
      {
        "word": "recommend",
        "translation": "recomendar",
        "example": "Can you recommend a good restaurant?"
      },
      {
        "word": "cute",
        "translation": "mono, adorable",
        "example": "Your puppy is so cute!"
      },
      {
        "word": "sugar",
        "translation": "azúcar",
        "example": "Do you take sugar in your coffee?"
      },
      {
        "word": "mental",
        "translation": "mental",
        "example": "Mental health is important."
      },
      {
        "word": "fashion",
        "translation": "moda",
        "example": "She works in the fashion industry."
      },
      {
        "word": "august",
        "translation": "agosto",
        "example": "It's very hot in August."
      },
      {
        "word": "client",
        "translation": "cliente",
        "example": "I have a meeting with a client."
      },
      {
        "word": "package",
        "translation": "paquete, bulto",
        "example": "A package arrived for you."
      },
      {
        "word": "holy",
        "translation": "santo, sagrado",
        "example": "It is a holy place."
      },
      {
        "word": "federal",
        "translation": "federal",
        "example": "It's a federal law."
      },
      {
        "word": "interesting",
        "translation": "interesante",
        "example": "That's an interesting idea."
      },
      {
        "word": "recover",
        "translation": "recuperarse, recuperar",
        "example": "He is recovering from the flu."
      },
      {
        "word": "waiter",
        "translation": "camarero",
        "example": "The waiter brought the menu."
      },
      {
        "word": "protection",
        "translation": "protección",
        "example": "Wear sunscreen for protection."
      },
      {
        "word": "theme",
        "translation": "tema",
        "example": "The theme of the party is the sea."
      },
      {
        "word": "labor",
        "translation": "trabajo, mano de obra; parto",
        "example": "Labor costs are rising."
      },
      {
        "word": "communication",
        "translation": "comunicación",
        "example": "Good communication is essential."
      },
      {
        "word": "giant",
        "translation": "gigante; gigantesco",
        "example": "The story is about a friendly giant."
      },
      {
        "word": "july",
        "translation": "julio",
        "example": "We go on vacation in July."
      },
      {
        "word": "hook",
        "translation": "gancho; enganchar",
        "example": "Hang your coat on the hook."
      },
      {
        "word": "victory",
        "translation": "victoria",
        "example": "The team celebrated their victory."
      },
      {
        "word": "equal",
        "translation": "igual; igualar",
        "example": "All people are equal."
      },
      {
        "word": "thus",
        "translation": "así, por lo tanto",
        "example": "He was tired, and thus went to bed early."
      },
      {
        "word": "background",
        "translation": "fondo; antecedentes",
        "example": "The photo has a blue background."
      },
      {
        "word": "cinema",
        "translation": "cine",
        "example": "Let's go to the cinema tonight."
      },
      {
        "word": "monitor",
        "translation": "monitor, pantalla; supervisar",
        "example": "My monitor is very large."
      },
      {
        "word": "youth",
        "translation": "juventud, joven",
        "example": "He spent his youth in Madrid."
      },
      {
        "word": "jesus",
        "translation": "Jesús",
        "example": "Jesus is an important figure in history."
      },
      {
        "word": "reward",
        "translation": "recompensa; recompensar",
        "example": "He received a reward for his work."
      },
      {
        "word": "manner",
        "translation": "manera, modo; modales",
        "example": "She spoke in a polite manner."
      },
      {
        "word": "blond",
        "translation": "rubio",
        "example": "The boy has blond hair."
      },
      {
        "word": "uniform",
        "translation": "uniforme",
        "example": "The students wear a uniform."
      },
      {
        "word": "march",
        "translation": "marcha; marchar; marzo",
        "example": "The soldiers march every morning."
      },
      {
        "word": "collection",
        "translation": "colección",
        "example": "He has a large stamp collection."
      },
      {
        "word": "defeat",
        "translation": "derrota; derrotar",
        "example": "The team suffered a heavy defeat."
      },
      {
        "word": "throughout",
        "translation": "a lo largo de, por todo",
        "example": "It rained throughout the day."
      },
      {
        "word": "september",
        "translation": "septiembre",
        "example": "School starts in September."
      },
      {
        "word": "shadow",
        "translation": "sombra",
        "example": "I saw a shadow on the wall."
      },
      {
        "word": "channel",
        "translation": "canal",
        "example": "Change the channel, please."
      },
      {
        "word": "indicate",
        "translation": "indicar",
        "example": "The sign indicates the way out."
      },
      {
        "word": "aid",
        "translation": "ayuda; ayudar",
        "example": "They sent aid to the victims."
      },
      {
        "word": "nowhere",
        "translation": "en ninguna parte",
        "example": "The keys are nowhere to be found."
      },
      {
        "word": "pepper",
        "translation": "pimienta; pimiento",
        "example": "Add some salt and pepper."
      },
      {
        "word": "desert",
        "translation": "desierto; abandonar",
        "example": "The Sahara is a huge desert."
      },
      {
        "word": "conduct",
        "translation": "conducta; dirigir, realizar",
        "example": "They conducted an experiment."
      },
      {
        "word": "loan",
        "translation": "préstamo; prestar",
        "example": "I asked the bank for a loan."
      },
      {
        "word": "element",
        "translation": "elemento",
        "example": "Water is an essential element."
      },
      {
        "word": "fancy",
        "translation": "elegante, de lujo; apetecer",
        "example": "It's a fancy restaurant."
      },
      {
        "word": "october",
        "translation": "octubre",
        "example": "My wedding is in October."
      },
      {
        "word": "dude",
        "translation": "tío, colega, tipo (coloquial)",
        "example": "Hey dude, what's up?"
      },
      {
        "word": "mouse",
        "translation": "ratón",
        "example": "The cat chased the mouse."
      },
      {
        "word": "swing",
        "translation": "columpio; balancear(se)",
        "example": "The kids are on the swing."
      },
      {
        "word": "suck",
        "translation": "chupar, mamar; ser pésimo (coloquial)",
        "example": "The baby sucks his thumb."
      },
      {
        "word": "silver",
        "translation": "plata; plateado",
        "example": "She wore a silver necklace."
      },
      {
        "word": "frame",
        "translation": "marco; enmarcar",
        "example": "I bought a frame for the photo."
      },
      {
        "word": "euro",
        "translation": "euro",
        "example": "The ticket costs ten euros."
      },
      {
        "word": "rescue",
        "translation": "rescate; rescatar",
        "example": "The firefighters rescued the child."
      },
      {
        "word": "toy",
        "translation": "juguete",
        "example": "The baby has many toys."
      },
      {
        "word": "pure",
        "translation": "puro",
        "example": "The water is pure."
      },
      {
        "word": "population",
        "translation": "población",
        "example": "The population is growing."
      },
      {
        "word": "rough",
        "translation": "áspero, bruto; difícil",
        "example": "The sea was rough yesterday."
      },
      {
        "word": "tomato",
        "translation": "tomate",
        "example": "I put tomato in the salad."
      },
      {
        "word": "reaction",
        "translation": "reacción",
        "example": "What was his reaction?"
      },
      {
        "word": "visitor",
        "translation": "visitante",
        "example": "We have a visitor."
      },
      {
        "word": "universe",
        "translation": "universo",
        "example": "The universe is very large."
      },
      {
        "word": "frighten",
        "translation": "asustar, aterrar",
        "example": "Thunder frightens the dog."
      },
      {
        "word": "bread",
        "translation": "pan",
        "example": "I buy fresh bread every day."
      },
      {
        "word": "november",
        "translation": "noviembre",
        "example": "It gets cold in November."
      },
      {
        "word": "appeal",
        "translation": "atractivo; apelar, atraer",
        "example": "The idea has little appeal for me."
      },
      {
        "word": "district",
        "translation": "distrito, barrio",
        "example": "They live in the old district."
      },
      {
        "word": "metal",
        "translation": "metal",
        "example": "The gate is made of metal."
      },
      {
        "word": "technical",
        "translation": "técnico",
        "example": "We have a technical problem."
      },
      {
        "word": "disturb",
        "translation": "molestar, perturbar",
        "example": "Do not disturb."
      },
      {
        "word": "fifth",
        "translation": "quinto",
        "example": "He lives on the fifth floor."
      },
      {
        "word": "ordinary",
        "translation": "ordinario, normal",
        "example": "It was an ordinary day."
      },
      {
        "word": "award",
        "translation": "premio; otorgar",
        "example": "She won an award for her book."
      },
      {
        "word": "facility",
        "translation": "instalación",
        "example": "The hotel has a gym facility."
      },
      {
        "word": "mirror",
        "translation": "espejo",
        "example": "She looked at herself in the mirror."
      },
      {
        "word": "stranger",
        "translation": "desconocido, extraño",
        "example": "Don't talk to strangers."
      },
      {
        "word": "kilometer",
        "translation": "kilómetro",
        "example": "The village is ten kilometers away."
      },
      {
        "word": "prime",
        "translation": "principal, primero; mejor momento",
        "example": "He is in the prime of his life."
      },
      {
        "word": "emotional",
        "translation": "emocional, emotivo",
        "example": "It was an emotional goodbye."
      },
      {
        "word": "delivery",
        "translation": "entrega, reparto",
        "example": "The delivery arrives tomorrow."
      },
      {
        "word": "opposite",
        "translation": "opuesto; enfrente de",
        "example": "The bank is opposite the park."
      },
      {
        "word": "dozen",
        "translation": "docena",
        "example": "I bought a dozen eggs."
      },
      {
        "word": "autumn",
        "translation": "otoño",
        "example": "The leaves fall in autumn."
      },
      {
        "word": "ghost",
        "translation": "fantasma",
        "example": "The children believe in ghosts."
      },
      {
        "word": "cloud",
        "translation": "nube",
        "example": "There isn't a cloud in the sky."
      },
      {
        "word": "cancel",
        "translation": "cancelar",
        "example": "I have to cancel the appointment."
      },
      {
        "word": "register",
        "translation": "registrar(se), inscribirse; registro",
        "example": "You must register online."
      },
      {
        "word": "pen",
        "translation": "bolígrafo",
        "example": "Can I borrow your pen?"
      },
      {
        "word": "resource",
        "translation": "recurso",
        "example": "Water is a precious resource."
      },
      {
        "word": "sweater",
        "translation": "jersey, suéter",
        "example": "I need a warm sweater."
      },
      {
        "word": "tank",
        "translation": "tanque, depósito; tanque (militar)",
        "example": "The tank is almost empty."
      },
      {
        "word": "chest",
        "translation": "pecho; cofre",
        "example": "I feel pain in my chest."
      },
      {
        "word": "seal",
        "translation": "sello; foca; sellar",
        "example": "Seal the envelope, please."
      },
      {
        "word": "region",
        "translation": "región",
        "example": "This region is famous for its wine."
      },
      {
        "word": "actual",
        "translation": "real, verdadero",
        "example": "What is the actual price?"
      },
      {
        "word": "december",
        "translation": "diciembre",
        "example": "Christmas is in December."
      },
      {
        "word": "sink",
        "translation": "fregadero, lavabo; hundirse",
        "example": "The dishes are in the sink."
      },
      {
        "word": "relation",
        "translation": "relación",
        "example": "They have a good relation with their neighbors."
      },
      {
        "word": "delay",
        "translation": "retraso; retrasar",
        "example": "The train has a ten-minute delay."
      },
      {
        "word": "button",
        "translation": "botón",
        "example": "Press the green button."
      },
      {
        "word": "intelligence",
        "translation": "inteligencia",
        "example": "She has a high level of intelligence."
      },
      {
        "word": "onion",
        "translation": "cebolla",
        "example": "Cutting onions makes me cry."
      },
      {
        "word": "proceed",
        "translation": "proceder, continuar",
        "example": "Please proceed to the exit."
      },
      {
        "word": "host",
        "translation": "anfitrión; presentador; acoger",
        "example": "She was a wonderful host."
      },
      {
        "word": "incident",
        "translation": "incidente",
        "example": "The police are investigating the incident."
      },
      {
        "word": "jacket",
        "translation": "chaqueta",
        "example": "Take your jacket, it's cold."
      },
      {
        "word": "yell",
        "translation": "gritar; grito",
        "example": "Don't yell at the children."
      },
      {
        "word": "pencil",
        "translation": "lápiz",
        "example": "Write it with a pencil."
      },
      {
        "word": "friendly",
        "translation": "amistoso, amable",
        "example": "The staff are very friendly."
      },
      {
        "word": "recall",
        "translation": "recordar; retirar (producto)",
        "example": "I can't recall his name."
      },
      {
        "word": "transport",
        "translation": "transporte; transportar",
        "example": "Public transport is cheap here."
      },
      {
        "word": "assure",
        "translation": "asegurar, garantizar",
        "example": "I assure you it's safe."
      },
      {
        "word": "retire",
        "translation": "jubilarse, retirarse",
        "example": "My father will retire next year."
      },
      {
        "word": "january",
        "translation": "enero",
        "example": "January is the coldest month."
      },
      {
        "word": "properly",
        "translation": "correctamente, bien",
        "example": "The machine isn't working properly."
      },
      {
        "word": "coast",
        "translation": "costa",
        "example": "We live on the coast."
      },
      {
        "word": "attract",
        "translation": "atraer",
        "example": "The festival attracts many tourists."
      },
      {
        "word": "iron",
        "translation": "hierro; plancha; planchar",
        "example": "I need to iron my shirt."
      },
      {
        "word": "root",
        "translation": "raíz",
        "example": "The tree has deep roots."
      },
      {
        "word": "hobby",
        "translation": "afición, pasatiempo",
        "example": "My hobby is painting."
      },
      {
        "word": "permission",
        "translation": "permiso",
        "example": "You need permission to enter."
      },
      {
        "word": "strategy",
        "translation": "estrategia",
        "example": "We need a new strategy."
      },
      {
        "word": "behave",
        "translation": "comportarse",
        "example": "Please behave yourselves."
      },
      {
        "word": "encourage",
        "translation": "animar, alentar",
        "example": "Teachers encourage students to read."
      },
      {
        "word": "shine",
        "translation": "brillar",
        "example": "The sun shines brightly today."
      },
      {
        "word": "bicycle",
        "translation": "bicicleta",
        "example": "She rides a bicycle to school."
      },
      {
        "word": "wedding",
        "translation": "boda",
        "example": "We are invited to their wedding."
      },
      {
        "word": "online",
        "translation": "en línea, conectado",
        "example": "I bought the tickets online."
      },
      {
        "word": "aside",
        "translation": "a un lado, aparte",
        "example": "Put your phone aside."
      },
      {
        "word": "amazing",
        "translation": "asombroso, increíble",
        "example": "The view is amazing."
      },
      {
        "word": "pour",
        "translation": "verter, servir",
        "example": "Pour some water into the glass."
      },
      {
        "word": "wrap",
        "translation": "envolver; envoltorio",
        "example": "I need to wrap the gift."
      },
      {
        "word": "umbrella",
        "translation": "paraguas",
        "example": "Take an umbrella, it's raining."
      },
      {
        "word": "rare",
        "translation": "raro, poco común",
        "example": "This bird is very rare."
      },
      {
        "word": "impress",
        "translation": "impresionar",
        "example": "You really impressed me."
      },
      {
        "word": "concert",
        "translation": "concierto",
        "example": "We went to a concert last night."
      },
      {
        "word": "museum",
        "translation": "museo",
        "example": "The museum opens at ten."
      },
      {
        "word": "happiness",
        "translation": "felicidad",
        "example": "Money doesn't buy happiness."
      },
      {
        "word": "february",
        "translation": "febrero",
        "example": "February is a short month."
      },
      {
        "word": "cow",
        "translation": "vaca",
        "example": "The cow gives us milk."
      },
      {
        "word": "bowl",
        "translation": "cuenco, tazón",
        "example": "I ate a bowl of soup."
      },
      {
        "word": "slave",
        "translation": "esclavo, esclava",
        "example": "Slavery was abolished long ago."
      },
      {
        "word": "crap",
        "translation": "mierda, porquería (vulgar)",
        "example": "This movie is crap."
      },
      {
        "word": "fortune",
        "translation": "fortuna, suerte",
        "example": "He made a fortune in business."
      },
      {
        "word": "thirsty",
        "translation": "sediento, con sed",
        "example": "I'm thirsty, can I have some water?"
      },
      {
        "word": "identity",
        "translation": "identidad",
        "example": "Please show your identity card."
      },
      {
        "word": "capable",
        "translation": "capaz",
        "example": "She is capable of great things."
      },
      {
        "word": "shame",
        "translation": "vergüenza; pena",
        "example": "What a shame you can't come."
      },
      {
        "word": "confidence",
        "translation": "confianza, seguridad",
        "example": "She speaks with confidence."
      },
      {
        "word": "procedure",
        "translation": "procedimiento",
        "example": "Follow the safety procedure."
      },
      {
        "word": "trousers",
        "translation": "pantalones",
        "example": "These trousers are too long."
      },
      {
        "word": "stomach",
        "translation": "estómago",
        "example": "My stomach hurts."
      },
      {
        "word": "boot",
        "translation": "bota",
        "example": "I bought new winter boots."
      },
      {
        "word": "ocean",
        "translation": "océano",
        "example": "The ocean is deep and blue."
      },
      {
        "word": "worried",
        "translation": "preocupado",
        "example": "I'm worried about my exam."
      },
      {
        "word": "succeed",
        "translation": "tener éxito, lograr",
        "example": "She succeeded in finding a job."
      },
      {
        "word": "building",
        "translation": "edificio",
        "example": "That building is very old."
      },
      {
        "word": "cheese",
        "translation": "queso",
        "example": "I'd like a cheese sandwich."
      },
      {
        "word": "county",
        "translation": "condado",
        "example": "The county is known for its farms."
      },
      {
        "word": "badly",
        "translation": "mal; gravemente",
        "example": "He plays the guitar badly."
      },
      {
        "word": "nuclear",
        "translation": "nuclear",
        "example": "The country has a nuclear power plant."
      },
      {
        "word": "economic",
        "translation": "económico",
        "example": "The country has economic problems."
      },
      {
        "word": "meeting",
        "translation": "reunión",
        "example": "The meeting starts at nine."
      },
      {
        "word": "thin",
        "translation": "delgado, fino",
        "example": "She is tall and thin."
      },
      {
        "word": "tradition",
        "translation": "tradición",
        "example": "It's a family tradition."
      },
      {
        "word": "scale",
        "translation": "escala; báscula",
        "example": "The map has a scale of one to ten thousand."
      },
      {
        "word": "abuse",
        "translation": "abuso, maltrato; abusar, maltratar",
        "example": "Animal abuse is a crime."
      },
      {
        "word": "grandmother",
        "translation": "abuela",
        "example": "My grandmother makes delicious soup."
      },
      {
        "word": "grateful",
        "translation": "agradecido",
        "example": "I'm grateful for your help."
      },
      {
        "word": "painting",
        "translation": "pintura, cuadro",
        "example": "The painting is beautiful."
      },
      {
        "word": "tired",
        "translation": "cansado",
        "example": "I'm tired after work."
      },
      {
        "word": "governor",
        "translation": "gobernador, gobernadora",
        "example": "The governor visited the town."
      },
      {
        "word": "angel",
        "translation": "ángel",
        "example": "She looks like an angel."
      },
      {
        "word": "castle",
        "translation": "castillo",
        "example": "We visited an old castle."
      },
      {
        "word": "previously",
        "translation": "anteriormente, antes",
        "example": "I had previously met her."
      },
      {
        "word": "supermarket",
        "translation": "supermercado",
        "example": "I go to the supermarket on Fridays."
      },
      {
        "word": "unusual",
        "translation": "inusual, raro",
        "example": "It's an unusual name."
      },
      {
        "word": "instance",
        "translation": "ejemplo, caso",
        "example": "For instance, you can use a pen."
      },
      {
        "word": "temperature",
        "translation": "temperatura",
        "example": "The temperature is twenty degrees."
      },
      {
        "word": "ugly",
        "translation": "feo",
        "example": "That building is ugly."
      },
      {
        "word": "brand",
        "translation": "marca",
        "example": "What brand of phone do you have?"
      },
      {
        "word": "classroom",
        "translation": "aula, clase",
        "example": "The classroom is empty."
      },
      {
        "word": "examine",
        "translation": "examinar",
        "example": "The doctor will examine you."
      },
      {
        "word": "worse",
        "translation": "peor",
        "example": "The weather is worse today."
      },
      {
        "word": "tower",
        "translation": "torre",
        "example": "We climbed the tower."
      },
      {
        "word": "stretch",
        "translation": "estirar(se); tramo",
        "example": "Stretch your legs before running."
      },
      {
        "word": "complex",
        "translation": "complejo",
        "example": "It's a complex problem."
      },
      {
        "word": "meaning",
        "translation": "significado, sentido",
        "example": "What is the meaning of this word?"
      },
      {
        "word": "crisis",
        "translation": "crisis",
        "example": "The country is in a crisis."
      },
      {
        "word": "principle",
        "translation": "principio",
        "example": "I never lie, it's a matter of principle."
      },
      {
        "word": "observe",
        "translation": "observar",
        "example": "They observe the stars at night."
      },
      {
        "word": "incredible",
        "translation": "increíble",
        "example": "The show was incredible."
      },
      {
        "word": "eh",
        "translation": "¿eh?, ¿no?",
        "example": "Nice day, eh?"
      },
      {
        "word": "cafe",
        "translation": "cafetería, café",
        "example": "Let's meet at the cafe."
      },
      {
        "word": "explanation",
        "translation": "explicación",
        "example": "I need an explanation."
      },
      {
        "word": "candidate",
        "translation": "candidato, candidata",
        "example": "The candidate gave a good speech."
      },
      {
        "word": "illegal",
        "translation": "ilegal",
        "example": "Parking here is illegal."
      },
      {
        "word": "estate",
        "translation": "finca, propiedad; urbanización",
        "example": "They own a large estate."
      },
      {
        "word": "idiot",
        "translation": "idiota, tonto",
        "example": "Don't be an idiot."
      },
      {
        "word": "dialogue",
        "translation": "diálogo",
        "example": "Read the dialogue aloud."
      },
      {
        "word": "management",
        "translation": "gestión, dirección",
        "example": "The management is changing."
      },
      {
        "word": "buddy",
        "translation": "colega, amigo",
        "example": "He's my old buddy."
      },
      {
        "word": "freak",
        "translation": "bicho raro; obsesionado",
        "example": "He's a computer freak."
      },
      {
        "word": "expose",
        "translation": "exponer, revelar",
        "example": "Don't expose the film to light."
      },
      {
        "word": "locate",
        "translation": "localizar, ubicar",
        "example": "Can you locate the problem?"
      },
      {
        "word": "paragraph",
        "translation": "párrafo",
        "example": "Read the first paragraph."
      },
      {
        "word": "concentrate",
        "translation": "concentrarse",
        "example": "I can't concentrate with this noise."
      },
      {
        "word": "piano",
        "translation": "piano",
        "example": "She plays the piano beautifully."
      },
      {
        "word": "emotion",
        "translation": "emoción",
        "example": "He showed no emotion."
      },
      {
        "word": "deeply",
        "translation": "profundamente",
        "example": "I am deeply sorry."
      },
      {
        "word": "mystery",
        "translation": "misterio",
        "example": "The case is still a mystery."
      },
      {
        "word": "dramatic",
        "translation": "dramático, espectacular",
        "example": "There was a dramatic change."
      },
      {
        "word": "grandparent",
        "translation": "abuelo, abuela",
        "example": "My grandparents live in the village."
      },
      {
        "word": "entirely",
        "translation": "enteramente, totalmente",
        "example": "I entirely agree with you."
      },
      {
        "word": "status",
        "translation": "estado, situación; estatus",
        "example": "What is the status of my order?"
      },
      {
        "word": "prince",
        "translation": "príncipe",
        "example": "The prince lives in a castle."
      },
      {
        "word": "zone",
        "translation": "zona",
        "example": "This is a no-parking zone."
      },
      {
        "word": "investment",
        "translation": "inversión",
        "example": "Education is a good investment."
      },
      {
        "word": "carrot",
        "translation": "zanahoria",
        "example": "Rabbits love carrots."
      },
      {
        "word": "barely",
        "translation": "apenas",
        "example": "I barely slept last night."
      },
      {
        "word": "false",
        "translation": "falso",
        "example": "The answer is false."
      },
      {
        "word": "prize",
        "translation": "premio",
        "example": "She won first prize."
      },
      {
        "word": "monster",
        "translation": "monstruo",
        "example": "There is no monster under the bed."
      },
      {
        "word": "previous",
        "translation": "anterior, previo",
        "example": "Check the previous page."
      },
      {
        "word": "t-shirt",
        "translation": "camiseta",
        "example": "I bought a blue t-shirt."
      },
      {
        "word": "joint",
        "translation": "conjunto, mutuo; articulación",
        "example": "They opened a joint account."
      },
      {
        "word": "sheet",
        "translation": "hoja; sábana",
        "example": "I need a sheet of paper."
      },
      {
        "word": "delight",
        "translation": "placer, deleite; encantar",
        "example": "The children squealed with delight."
      },
      {
        "word": "mayor",
        "translation": "alcalde, alcaldesa",
        "example": "The mayor opened the festival."
      },
      {
        "word": "content",
        "translation": "contenido; satisfecho",
        "example": "The content of the book is interesting."
      },
      {
        "word": "cd",
        "translation": "CD, disco compacto",
        "example": "I bought a CD of her music."
      },
      {
        "word": "bullet",
        "translation": "bala",
        "example": "The bullet missed him."
      },
      {
        "word": "sail",
        "translation": "navegar; vela",
        "example": "We sail every summer."
      },
      {
        "word": "unique",
        "translation": "único",
        "example": "Every snowflake is unique."
      },
      {
        "word": "tv",
        "translation": "tele, televisión",
        "example": "Turn off the TV, please."
      },
      {
        "word": "romantic",
        "translation": "romántico",
        "example": "It was a romantic dinner."
      },
      {
        "word": "dvd",
        "translation": "DVD",
        "example": "Let's watch a DVD tonight."
      },
      {
        "word": "born",
        "translation": "nacido",
        "example": "I was born in Salamanca."
      },
      {
        "word": "occasion",
        "translation": "ocasión",
        "example": "It was a special occasion."
      },
      {
        "word": "commercial",
        "translation": "comercial; anuncio",
        "example": "It's a commercial building."
      },
      {
        "word": "sergeant",
        "translation": "sargento",
        "example": "The sergeant gave the order."
      },
      {
        "word": "tongue",
        "translation": "lengua",
        "example": "I burned my tongue."
      },
      {
        "word": "dictionary",
        "translation": "diccionario",
        "example": "Look it up in the dictionary."
      },
      {
        "word": "consequence",
        "translation": "consecuencia",
        "example": "Every action has a consequence."
      },
      {
        "word": "buck",
        "translation": "dólar (coloquial); ciervo macho",
        "example": "It costs ten bucks."
      },
      {
        "word": "chocolate",
        "translation": "chocolate",
        "example": "I love dark chocolate."
      },
      {
        "word": "farmer",
        "translation": "agricultor, granjero",
        "example": "The farmer works in the fields."
      },
      {
        "word": "meter",
        "translation": "metro",
        "example": "The room is five meters long."
      },
      {
        "word": "interested",
        "translation": "interesado",
        "example": "I'm interested in history."
      },
      {
        "word": "judgment",
        "translation": "juicio, sentencia",
        "example": "I trust his judgment."
      },
      {
        "word": "geography",
        "translation": "geografía",
        "example": "Geography is my favorite subject."
      },
      {
        "word": "upstairs",
        "translation": "arriba, en el piso de arriba",
        "example": "The bedrooms are upstairs."
      },
      {
        "word": "christmas",
        "translation": "Navidad",
        "example": "We decorate the tree at Christmas."
      },
      {
        "word": "tone",
        "translation": "tono",
        "example": "I don't like your tone."
      },
      {
        "word": "graduate",
        "translation": "graduarse, licenciarse; graduado",
        "example": "She graduated from university in June."
      },
      {
        "word": "tail",
        "translation": "cola, rabo",
        "example": "The dog wagged its tail."
      },
      {
        "word": "blog",
        "translation": "blog",
        "example": "She writes a travel blog."
      }
    ],
    "3": [
      {
        "word": "technique",
        "translation": "técnica",
        "example": "This technique is very effective."
      },
      {
        "word": "conclusion",
        "translation": "conclusión",
        "example": "What is your conclusion?"
      },
      {
        "word": "comfort",
        "translation": "comodidad, consuelo; consolar",
        "example": "The hotel offers great comfort."
      },
      {
        "word": "adopt",
        "translation": "adoptar",
        "example": "They want to adopt a child."
      },
      {
        "word": "wise",
        "translation": "sabio, prudente",
        "example": "He is a wise old man."
      },
      {
        "word": "injury",
        "translation": "lesión, herida",
        "example": "He has a serious knee injury."
      },
      {
        "word": "payment",
        "translation": "pago",
        "example": "The payment is due tomorrow."
      },
      {
        "word": "episode",
        "translation": "episodio, capítulo",
        "example": "I watched the last episode yesterday."
      },
      {
        "word": "civil",
        "translation": "civil",
        "example": "They fought for civil rights."
      },
      {
        "word": "novel",
        "translation": "novela; novedoso",
        "example": "She is writing a novel."
      },
      {
        "word": "fuel",
        "translation": "combustible, carburante",
        "example": "We need to buy fuel."
      },
      {
        "word": "intention",
        "translation": "intención",
        "example": "I have no intention of leaving."
      },
      {
        "word": "jury",
        "translation": "jurado",
        "example": "The jury found him guilty."
      },
      {
        "word": "devil",
        "translation": "diablo, demonio",
        "example": "They say he sold his soul to the devil."
      },
      {
        "word": "branch",
        "translation": "rama; sucursal",
        "example": "A bird sat on the branch."
      },
      {
        "word": "ad",
        "translation": "anuncio",
        "example": "I saw an ad for a new phone."
      },
      {
        "word": "impression",
        "translation": "impresión",
        "example": "She made a good impression."
      },
      {
        "word": "arrangement",
        "translation": "arreglo, acuerdo, disposición",
        "example": "We made an arrangement with the owner."
      },
      {
        "word": "division",
        "translation": "división",
        "example": "Division is harder than addition."
      },
      {
        "word": "spin",
        "translation": "girar, hacer girar; giro",
        "example": "The wheel began to spin."
      },
      {
        "word": "string",
        "translation": "cuerda, cordel; hilo",
        "example": "Tie it with a piece of string."
      },
      {
        "word": "cheat",
        "translation": "hacer trampa, engañar; tramposo",
        "example": "He cheated on the exam."
      },
      {
        "word": "slightly",
        "translation": "ligeramente, un poco",
        "example": "The price is slightly higher."
      },
      {
        "word": "analysis",
        "translation": "análisis",
        "example": "The analysis shows a clear result."
      },
      {
        "word": "terrorist",
        "translation": "terrorista",
        "example": "The terrorist was arrested."
      },
      {
        "word": "reputation",
        "translation": "reputación, fama",
        "example": "The hotel has a good reputation."
      },
      {
        "word": "silent",
        "translation": "silencioso, callado",
        "example": "The room was silent."
      },
      {
        "word": "boom",
        "translation": "estruendo; auge",
        "example": "We heard a loud boom."
      },
      {
        "word": "ridiculous",
        "translation": "ridículo, absurdo",
        "example": "That idea is ridiculous."
      },
      {
        "word": "religious",
        "translation": "religioso",
        "example": "She comes from a religious family."
      },
      {
        "word": "proposal",
        "translation": "propuesta; petición de matrimonio",
        "example": "They accepted our proposal."
      },
      {
        "word": "habit",
        "translation": "hábito, costumbre",
        "example": "Smoking is a bad habit."
      },
      {
        "word": "extend",
        "translation": "extender, ampliar, prolongar",
        "example": "They extended the deadline."
      },
      {
        "word": "net",
        "translation": "red; neto",
        "example": "The fisherman cast his net."
      },
      {
        "word": "construction",
        "translation": "construcción",
        "example": "The construction of the bridge took two years."
      },
      {
        "word": "self",
        "translation": "uno mismo, yo",
        "example": "She is back to her old self."
      },
      {
        "word": "approve",
        "translation": "aprobar",
        "example": "The council approved the plan."
      },
      {
        "word": "chat",
        "translation": "charlar; charla",
        "example": "We chatted for an hour."
      },
      {
        "word": "session",
        "translation": "sesión",
        "example": "The next session starts at ten."
      },
      {
        "word": "dust",
        "translation": "polvo; quitar el polvo",
        "example": "There is dust on the shelves."
      },
      {
        "word": "fake",
        "translation": "falso; falsificación",
        "example": "This bag is fake."
      },
      {
        "word": "royal",
        "translation": "real, regio",
        "example": "The royal family lives in the palace."
      },
      {
        "word": "tune",
        "translation": "melodía; afinar",
        "example": "I can't get that tune out of my head."
      },
      {
        "word": "appropriate",
        "translation": "apropiado, adecuado",
        "example": "That dress is not appropriate for work."
      },
      {
        "word": "moral",
        "translation": "moral; moraleja",
        "example": "It's a moral question."
      },
      {
        "word": "anger",
        "translation": "ira, enfado",
        "example": "He shouted in anger."
      },
      {
        "word": "application",
        "translation": "solicitud; aplicación",
        "example": "I sent my job application yesterday."
      },
      {
        "word": "bend",
        "translation": "doblar(se), curvar; curva",
        "example": "Bend your knees."
      },
      {
        "word": "economy",
        "translation": "economía",
        "example": "The economy is growing."
      },
      {
        "word": "friendship",
        "translation": "amistad",
        "example": "Their friendship lasted for years."
      },
      {
        "word": "complaint",
        "translation": "queja, reclamación",
        "example": "I made a complaint to the manager."
      },
      {
        "word": "commander",
        "translation": "comandante",
        "example": "The commander gave the order."
      },
      {
        "word": "whoever",
        "translation": "quienquiera que, quien",
        "example": "Whoever finds it can keep it."
      },
      {
        "word": "nut",
        "translation": "nuez, fruto seco; tuerca",
        "example": "Squirrels eat nuts."
      },
      {
        "word": "nerve",
        "translation": "nervio; valor, descaro",
        "example": "He lost his nerve at the last moment."
      },
      {
        "word": "asleep",
        "translation": "dormido",
        "example": "The baby is asleep."
      },
      {
        "word": "plain",
        "translation": "sencillo, llano; claro",
        "example": "She wore a plain white dress."
      },
      {
        "word": "debate",
        "translation": "debate; debatir",
        "example": "There was a long debate about it."
      },
      {
        "word": "bang",
        "translation": "golpe, estampido; golpear",
        "example": "The door closed with a bang."
      },
      {
        "word": "permit",
        "translation": "permitir; permiso",
        "example": "Smoking is not permitted here."
      },
      {
        "word": "volunteer",
        "translation": "voluntario; ofrecerse",
        "example": "She volunteers at the hospital."
      },
      {
        "word": "pot",
        "translation": "olla, puchero; maceta",
        "example": "Put the pot on the stove."
      },
      {
        "word": "childhood",
        "translation": "infancia",
        "example": "I had a happy childhood."
      },
      {
        "word": "religion",
        "translation": "religión",
        "example": "Religion is important to him."
      },
      {
        "word": "golden",
        "translation": "dorado, de oro",
        "example": "She has golden hair."
      },
      {
        "word": "passenger",
        "translation": "pasajero, pasajera",
        "example": "The passengers are waiting at the gate."
      },
      {
        "word": "declare",
        "translation": "declarar",
        "example": "The mayor declared a state of emergency."
      },
      {
        "word": "american",
        "translation": "estadounidense, americano",
        "example": "He is an American doctor."
      },
      {
        "word": "pride",
        "translation": "orgullo",
        "example": "She felt great pride in her son."
      },
      {
        "word": "factor",
        "translation": "factor",
        "example": "Price is an important factor."
      },
      {
        "word": "reference",
        "translation": "referencia",
        "example": "He gave me a reference for the job."
      },
      {
        "word": "tap",
        "translation": "grifo; golpecito; golpear suavemente",
        "example": "Turn off the tap, please."
      },
      {
        "word": "mama",
        "translation": "mamá",
        "example": "Mama, I'm hungry."
      },
      {
        "word": "wipe",
        "translation": "limpiar, secar; pasar un paño",
        "example": "Wipe the table, please."
      },
      {
        "word": "panic",
        "translation": "pánico; entrar en pánico",
        "example": "Don't panic!"
      },
      {
        "word": "wherever",
        "translation": "dondequiera, donde sea",
        "example": "I'll follow you wherever you go."
      },
      {
        "word": "decade",
        "translation": "década",
        "example": "He lived there for a decade."
      },
      {
        "word": "servant",
        "translation": "sirviente, criado",
        "example": "The servant opened the door."
      },
      {
        "word": "revolution",
        "translation": "revolución",
        "example": "The revolution changed the country."
      },
      {
        "word": "literally",
        "translation": "literalmente",
        "example": "I literally have no money."
      },
      {
        "word": "display",
        "translation": "exhibir, mostrar; pantalla, exposición",
        "example": "The shop displays its products in the window."
      },
      {
        "word": "breast",
        "translation": "pecho, seno",
        "example": "The doctor examined her breast."
      },
      {
        "word": "exact",
        "translation": "exacto",
        "example": "What is the exact time?"
      },
      {
        "word": "flash",
        "translation": "destello, flash; destellar",
        "example": "A flash of light filled the room."
      },
      {
        "word": "curious",
        "translation": "curioso",
        "example": "The children are curious about everything."
      },
      {
        "word": "repair",
        "translation": "reparar; reparación",
        "example": "I need to repair my bike."
      },
      {
        "word": "principal",
        "translation": "director, directora; principal",
        "example": "The principal spoke to the students."
      },
      {
        "word": "sand",
        "translation": "arena",
        "example": "The children play in the sand."
      },
      {
        "word": "divide",
        "translation": "dividir",
        "example": "Divide the cake into eight pieces."
      },
      {
        "word": "traditional",
        "translation": "tradicional",
        "example": "We ate a traditional dish."
      },
      {
        "word": "rob",
        "translation": "robar, atracar",
        "example": "Someone robbed the bank."
      },
      {
        "word": "poison",
        "translation": "veneno; envenenar",
        "example": "The snake's poison is dangerous."
      },
      {
        "word": "essential",
        "translation": "esencial, imprescindible",
        "example": "Water is essential for life."
      },
      {
        "word": "conflict",
        "translation": "conflicto",
        "example": "They tried to avoid conflict."
      },
      {
        "word": "mobile",
        "translation": "móvil; teléfono móvil",
        "example": "My mobile is out of battery."
      },
      {
        "word": "solid",
        "translation": "sólido",
        "example": "The table is made of solid wood."
      },
      {
        "word": "disaster",
        "translation": "desastre",
        "example": "The flood was a disaster."
      },
      {
        "word": "inspector",
        "translation": "inspector, inspectora",
        "example": "The inspector checked the kitchen."
      },
      {
        "word": "executive",
        "translation": "ejecutivo, directivo",
        "example": "She is a senior executive."
      },
      {
        "word": "basis",
        "translation": "base, fundamento",
        "example": "We meet on a weekly basis."
      },
      {
        "word": "independent",
        "translation": "independiente",
        "example": "She is a very independent woman."
      },
      {
        "word": "massive",
        "translation": "enorme, masivo",
        "example": "They built a massive wall."
      },
      {
        "word": "extraordinary",
        "translation": "extraordinario",
        "example": "It was an extraordinary performance."
      },
      {
        "word": "purchase",
        "translation": "compra; comprar",
        "example": "Keep the receipt as proof of purchase."
      },
      {
        "word": "chemical",
        "translation": "químico; sustancia química",
        "example": "The factory uses dangerous chemicals."
      },
      {
        "word": "pardon",
        "translation": "perdón; perdonar, indultar",
        "example": "Pardon me, where is the station?"
      },
      {
        "word": "producer",
        "translation": "productor, productora",
        "example": "He is a film producer."
      },
      {
        "word": "fee",
        "translation": "tarifa, cuota, honorarios",
        "example": "There is an entrance fee."
      },
      {
        "word": "strip",
        "translation": "tira, franja; desnudar(se)",
        "example": "Cut the paper into strips."
      },
      {
        "word": "dump",
        "translation": "vertedero; tirar, descargar",
        "example": "Don't dump rubbish here."
      },
      {
        "word": "trail",
        "translation": "sendero, rastro",
        "example": "We followed the trail through the forest."
      },
      {
        "word": "classic",
        "translation": "clásico",
        "example": "This film is a classic."
      },
      {
        "word": "passion",
        "translation": "pasión",
        "example": "Cooking is her passion."
      },
      {
        "word": "personality",
        "translation": "personalidad",
        "example": "She has a warm personality."
      },
      {
        "word": "expression",
        "translation": "expresión",
        "example": "There was surprise in her expression."
      },
      {
        "word": "rank",
        "translation": "rango, categoría; clasificar",
        "example": "He has the rank of captain."
      },
      {
        "word": "motion",
        "translation": "movimiento; moción",
        "example": "The motion of the waves is relaxing."
      },
      {
        "word": "twist",
        "translation": "torcer, retorcer; giro",
        "example": "The story has a surprising twist."
      },
      {
        "word": "effective",
        "translation": "eficaz, efectivo",
        "example": "This medicine is very effective."
      },
      {
        "word": "instruction",
        "translation": "instrucción; enseñanza",
        "example": "Follow the instructions carefully."
      },
      {
        "word": "alcohol",
        "translation": "alcohol",
        "example": "He doesn't drink alcohol."
      },
      {
        "word": "active",
        "translation": "activo",
        "example": "My grandfather is still very active."
      },
      {
        "word": "plastic",
        "translation": "plástico",
        "example": "Don't use plastic bags."
      },
      {
        "word": "ow",
        "translation": "¡ay!",
        "example": "Ow! That hurts!"
      },
      {
        "word": "lend",
        "translation": "prestar",
        "example": "Can you lend me some money?"
      },
      {
        "word": "valley",
        "translation": "valle",
        "example": "The village is in a green valley."
      },
      {
        "word": "snap",
        "translation": "chasquear, romper(se); chasquido",
        "example": "The branch snapped in two."
      },
      {
        "word": "inch",
        "translation": "pulgada",
        "example": "The screen is fifteen inches wide."
      },
      {
        "word": "drama",
        "translation": "drama",
        "example": "It's a TV drama about a family."
      },
      {
        "word": "muscle",
        "translation": "músculo",
        "example": "I pulled a muscle in my leg."
      },
      {
        "word": "thief",
        "translation": "ladrón, ladrona",
        "example": "The thief ran away."
      },
      {
        "word": "global",
        "translation": "global, mundial",
        "example": "Global warming is a serious problem."
      },
      {
        "word": "stable",
        "translation": "estable; establo",
        "example": "The patient is in a stable condition."
      },
      {
        "word": "concept",
        "translation": "concepto",
        "example": "It's a difficult concept to explain."
      },
      {
        "word": "gene",
        "translation": "gen",
        "example": "This gene affects eye color."
      },
      {
        "word": "slide",
        "translation": "deslizar(se), resbalar; diapositiva; tobogán",
        "example": "The kids love the slide."
      },
      {
        "word": "super",
        "translation": "súper, genial",
        "example": "That's a super idea!"
      },
      {
        "word": "steady",
        "translation": "constante, firme, estable",
        "example": "Keep the ladder steady."
      },
      {
        "word": "twin",
        "translation": "gemelo, gemela",
        "example": "She has a twin sister."
      },
      {
        "word": "pitch",
        "translation": "lanzar; tono; campo (deportivo)",
        "example": "The players ran onto the pitch."
      },
      {
        "word": "attractive",
        "translation": "atractivo",
        "example": "It's a very attractive offer."
      },
      {
        "word": "appearance",
        "translation": "apariencia, aspecto; aparición",
        "example": "Don't judge by appearance."
      },
      {
        "word": "collapse",
        "translation": "derrumbarse, colapsar; derrumbe",
        "example": "The old bridge collapsed."
      },
      {
        "word": "broken",
        "translation": "roto, estropeado",
        "example": "The window is broken."
      },
      {
        "word": "sword",
        "translation": "espada",
        "example": "The knight drew his sword."
      },
      {
        "word": "significant",
        "translation": "significativo, importante",
        "example": "There was a significant improvement."
      },
      {
        "word": "define",
        "translation": "definir",
        "example": "Can you define this word?"
      },
      {
        "word": "advise",
        "translation": "aconsejar, asesorar",
        "example": "I advise you to wait."
      },
      {
        "word": "addition",
        "translation": "adición, suma; añadidura",
        "example": "In addition, the room is free."
      },
      {
        "word": "speaker",
        "translation": "orador, hablante; altavoz",
        "example": "The speaker was very interesting."
      },
      {
        "word": "lonely",
        "translation": "solitario, solo",
        "example": "She felt lonely in the big city."
      },
      {
        "word": "reflect",
        "translation": "reflejar; reflexionar",
        "example": "The lake reflects the mountains."
      },
      {
        "word": "belt",
        "translation": "cinturón",
        "example": "He wears a black belt."
      },
      {
        "word": "lab",
        "translation": "laboratorio",
        "example": "The scientists work in a lab."
      },
      {
        "word": "naturally",
        "translation": "naturalmente, por supuesto",
        "example": "Naturally, I said yes."
      },
      {
        "word": "reply",
        "translation": "responder; respuesta",
        "example": "I'm waiting for your reply."
      },
      {
        "word": "english",
        "translation": "inglés; inglesa",
        "example": "She speaks English very well."
      },
      {
        "word": "dealer",
        "translation": "comerciante, vendedor; traficante",
        "example": "He is a car dealer."
      },
      {
        "word": "heavily",
        "translation": "mucho, con fuerza",
        "example": "It rained heavily all night."
      },
      {
        "word": "suicide",
        "translation": "suicidio",
        "example": "Suicide prevention saves lives."
      },
      {
        "word": "reject",
        "translation": "rechazar",
        "example": "They rejected my offer."
      },
      {
        "word": "valuable",
        "translation": "valioso",
        "example": "This ring is very valuable."
      },
      {
        "word": "offense",
        "translation": "ofensa, delito",
        "example": "No offense, but I disagree."
      },
      {
        "word": "mommy",
        "translation": "mamá, mami",
        "example": "Mommy, I want some water."
      },
      {
        "word": "inspire",
        "translation": "inspirar",
        "example": "Her story inspires me."
      },
      {
        "word": "lieutenant",
        "translation": "teniente",
        "example": "The lieutenant led the group."
      },
      {
        "word": "violent",
        "translation": "violento",
        "example": "The film is too violent for children."
      },
      {
        "word": "critical",
        "translation": "crítico",
        "example": "The patient is in critical condition."
      },
      {
        "word": "thick",
        "translation": "grueso, espeso",
        "example": "The wall is very thick."
      },
      {
        "word": "difficulty",
        "translation": "dificultad",
        "example": "I have difficulty sleeping."
      },
      {
        "word": "stake",
        "translation": "estaca; apuesta, participación",
        "example": "Our jobs are at stake."
      },
      {
        "word": "nonsense",
        "translation": "tontería, disparate",
        "example": "Don't talk nonsense."
      },
      {
        "word": "invest",
        "translation": "invertir",
        "example": "They invested in a new company."
      },
      {
        "word": "reasonable",
        "translation": "razonable",
        "example": "The price is reasonable."
      },
      {
        "word": "whistle",
        "translation": "silbato; silbar",
        "example": "The referee blew the whistle."
      },
      {
        "word": "unknown",
        "translation": "desconocido",
        "example": "The cause is still unknown."
      },
      {
        "word": "chapter",
        "translation": "capítulo",
        "example": "I read the first chapter."
      },
      {
        "word": "atmosphere",
        "translation": "atmósfera, ambiente",
        "example": "The café has a cozy atmosphere."
      },
      {
        "word": "belief",
        "translation": "creencia",
        "example": "It's my belief that he is honest."
      },
      {
        "word": "ally",
        "translation": "aliado, aliada",
        "example": "Spain was an ally of France."
      },
      {
        "word": "gang",
        "translation": "banda, pandilla",
        "example": "A gang of kids played in the street."
      },
      {
        "word": "french",
        "translation": "francés; francesa",
        "example": "She is learning French."
      },
      {
        "word": "attach",
        "translation": "adjuntar, sujetar",
        "example": "Please attach the file to the email."
      },
      {
        "word": "flag",
        "translation": "bandera",
        "example": "The flag is red and yellow."
      },
      {
        "word": "commission",
        "translation": "comisión; encargo",
        "example": "He earns a ten percent commission."
      },
      {
        "word": "quote",
        "translation": "citar; cita; presupuesto",
        "example": "He quoted a famous poem."
      },
      {
        "word": "dumb",
        "translation": "tonto, mudo",
        "example": "That was a dumb mistake."
      },
      {
        "word": "expense",
        "translation": "gasto, coste",
        "example": "Travel is a big expense."
      },
      {
        "word": "pump",
        "translation": "bomba; bombear",
        "example": "The pump brings water from the well."
      },
      {
        "word": "suggestion",
        "translation": "sugerencia",
        "example": "Do you have any suggestions?"
      },
      {
        "word": "rape",
        "translation": "violación; violar",
        "example": "The law punishes rape severely."
      },
      {
        "word": "brave",
        "translation": "valiente",
        "example": "The firefighter was very brave."
      },
      {
        "word": "sin",
        "translation": "pecado; pecar",
        "example": "He confessed his sin."
      },
      {
        "word": "trigger",
        "translation": "gatillo; desencadenar",
        "example": "Don't pull the trigger."
      },
      {
        "word": "sensitive",
        "translation": "sensible",
        "example": "I have sensitive skin."
      },
      {
        "word": "cap",
        "translation": "gorra; tapón",
        "example": "He wears a baseball cap."
      },
      {
        "word": "sweep",
        "translation": "barrer",
        "example": "I sweep the floor every day."
      },
      {
        "word": "native",
        "translation": "nativo; natal",
        "example": "English is not my native language."
      },
      {
        "word": "bleed",
        "translation": "sangrar",
        "example": "My finger is bleeding."
      },
      {
        "word": "plot",
        "translation": "trama; parcela; conspirar",
        "example": "The plot of the film is very simple."
      },
      {
        "word": "broad",
        "translation": "ancho, amplio",
        "example": "The river is broad here."
      },
      {
        "word": "promote",
        "translation": "promover, ascender",
        "example": "They promoted her to manager."
      },
      {
        "word": "smooth",
        "translation": "suave, liso",
        "example": "The surface is smooth."
      },
      {
        "word": "pipe",
        "translation": "tubería; pipa",
        "example": "The pipe is leaking."
      },
      {
        "word": "float",
        "translation": "flotar",
        "example": "The boat floats on the water."
      },
      {
        "word": "internal",
        "translation": "interno, interior",
        "example": "It's an internal matter."
      },
      {
        "word": "entrance",
        "translation": "entrada",
        "example": "Meet me at the entrance."
      },
      {
        "word": "temporary",
        "translation": "temporal, provisional",
        "example": "It's only a temporary solution."
      },
      {
        "word": "fascinate",
        "translation": "fascinar",
        "example": "Space fascinates me."
      },
      {
        "word": "select",
        "translation": "seleccionar, elegir",
        "example": "Select the correct answer."
      },
      {
        "word": "alternative",
        "translation": "alternativa; alternativo",
        "example": "Is there an alternative?"
      },
      {
        "word": "fate",
        "translation": "destino",
        "example": "It was fate that we met."
      },
      {
        "word": "gear",
        "translation": "equipo, equipamiento; marcha",
        "example": "Put on your hiking gear."
      },
      {
        "word": "champion",
        "translation": "campeón, campeona",
        "example": "She is the world champion."
      },
      {
        "word": "congratulations",
        "translation": "felicidades, enhorabuena",
        "example": "Congratulations on your new job!"
      },
      {
        "word": "rely",
        "translation": "confiar, depender",
        "example": "You can rely on me."
      },
      {
        "word": "seed",
        "translation": "semilla",
        "example": "Plant the seeds in spring."
      },
      {
        "word": "author",
        "translation": "autor, autora",
        "example": "The author signed my book."
      },
      {
        "word": "port",
        "translation": "puerto",
        "example": "The ship arrived at the port."
      },
      {
        "word": "log",
        "translation": "tronco, leño; registro; registrar",
        "example": "He put a log on the fire."
      },
      {
        "word": "murderer",
        "translation": "asesino, asesina",
        "example": "The murderer was caught."
      },
      {
        "word": "scheme",
        "translation": "plan, esquema; intriga",
        "example": "It's a clever scheme."
      },
      {
        "word": "horn",
        "translation": "cuerno; bocina; trompa",
        "example": "The driver honked the horn."
      },
      {
        "word": "relief",
        "translation": "alivio",
        "example": "What a relief!"
      },
      {
        "word": "oppose",
        "translation": "oponerse a",
        "example": "Many people oppose the plan."
      },
      {
        "word": "scientific",
        "translation": "científico",
        "example": "It's a scientific discovery."
      },
      {
        "word": "chairman",
        "translation": "presidente (de una junta)",
        "example": "The chairman opened the meeting."
      },
      {
        "word": "currently",
        "translation": "actualmente",
        "example": "I am currently unemployed."
      },
      {
        "word": "punch",
        "translation": "puñetazo; golpear con el puño",
        "example": "He punched the wall."
      },
      {
        "word": "pill",
        "translation": "pastilla, píldora",
        "example": "Take one pill every morning."
      },
      {
        "word": "ideal",
        "translation": "ideal",
        "example": "It's the ideal place for a picnic."
      },
      {
        "word": "reserve",
        "translation": "reservar; reserva",
        "example": "I'd like to reserve a table."
      },
      {
        "word": "whose",
        "translation": "cuyo, de quién",
        "example": "Whose bag is this?"
      },
      {
        "word": "height",
        "translation": "altura, estatura",
        "example": "What is your height?"
      },
      {
        "word": "permanent",
        "translation": "permanente",
        "example": "He has a permanent job."
      },
      {
        "word": "bust",
        "translation": "busto; reventar, romper",
        "example": "The statue is a bust of the king."
      },
      {
        "word": "unlike",
        "translation": "a diferencia de; distinto",
        "example": "Unlike his brother, he loves sports."
      },
      {
        "word": "league",
        "translation": "liga",
        "example": "Our team is first in the league."
      },
      {
        "word": "chamber",
        "translation": "cámara, sala",
        "example": "The council met in the chamber."
      },
      {
        "word": "charity",
        "translation": "caridad; organización benéfica",
        "example": "She gave money to charity."
      },
      {
        "word": "resist",
        "translation": "resistir(se)",
        "example": "I can't resist chocolate."
      },
      {
        "word": "rip",
        "translation": "rasgar, desgarrar",
        "example": "I ripped my jeans."
      },
      {
        "word": "impressive",
        "translation": "impresionante",
        "example": "The view is impressive."
      },
      {
        "word": "cycle",
        "translation": "ciclo; montar en bici",
        "example": "Water goes through a natural cycle."
      },
      {
        "word": "grass",
        "translation": "hierba, césped",
        "example": "The cows eat grass."
      },
      {
        "word": "madam",
        "translation": "señora",
        "example": "Can I help you, madam?"
      },
      {
        "word": "priest",
        "translation": "sacerdote, cura",
        "example": "The priest blessed the couple."
      },
      {
        "word": "ease",
        "translation": "facilidad; aliviar",
        "example": "She passed the test with ease."
      },
      {
        "word": "instrument",
        "translation": "instrumento",
        "example": "Which instrument do you play?"
      },
      {
        "word": "chef",
        "translation": "chef, cocinero",
        "example": "The chef prepared a special dish."
      },
      {
        "word": "admire",
        "translation": "admirar",
        "example": "I admire her courage."
      },
      {
        "word": "bid",
        "translation": "oferta, puja; pujar",
        "example": "He made a bid for the painting."
      },
      {
        "word": "sum",
        "translation": "suma, cantidad",
        "example": "He paid a large sum of money."
      },
      {
        "word": "empire",
        "translation": "imperio",
        "example": "The Roman Empire was huge."
      },
      {
        "word": "handsome",
        "translation": "guapo, apuesto",
        "example": "He is a handsome man."
      },
      {
        "word": "sacrifice",
        "translation": "sacrificio; sacrificar",
        "example": "She made many sacrifices for her kids."
      },
      {
        "word": "colonel",
        "translation": "coronel",
        "example": "The colonel inspected the troops."
      },
      {
        "word": "tale",
        "translation": "cuento, relato",
        "example": "My grandmother told us a fairy tale."
      },
      {
        "word": "electricity",
        "translation": "electricidad",
        "example": "The electricity went out."
      },
      {
        "word": "forth",
        "translation": "adelante, hacia delante",
        "example": "They walked back and forth."
      },
      {
        "word": "kidnap",
        "translation": "secuestrar",
        "example": "The criminals kidnapped the child."
      },
      {
        "word": "growth",
        "translation": "crecimiento",
        "example": "The company has seen rapid growth."
      },
      {
        "word": "spy",
        "translation": "espía; espiar",
        "example": "The spy sent secret messages."
      },
      {
        "word": "lately",
        "translation": "últimamente",
        "example": "I've been very tired lately."
      },
      {
        "word": "protest",
        "translation": "protesta; protestar",
        "example": "People protested in the street."
      },
      {
        "word": "editor",
        "translation": "editor, redactor",
        "example": "The editor corrected my article."
      },
      {
        "word": "territory",
        "translation": "territorio",
        "example": "The animal protects its territory."
      },
      {
        "word": "typical",
        "translation": "típico",
        "example": "It's a typical Spanish dish."
      },
      {
        "word": "lean",
        "translation": "inclinarse, apoyarse; delgado, magro",
        "example": "Don't lean on the wall."
      },
      {
        "word": "invent",
        "translation": "inventar",
        "example": "Who invented the telephone?"
      },
      {
        "word": "christ",
        "translation": "Cristo",
        "example": "Christ is central in Christianity."
      },
      {
        "word": "profile",
        "translation": "perfil",
        "example": "Update your profile picture."
      },
      {
        "word": "explore",
        "translation": "explorar",
        "example": "We explored the old town."
      },
      {
        "word": "virus",
        "translation": "virus",
        "example": "The virus spreads quickly."
      },
      {
        "word": "ms",
        "translation": "señora (Sra.)",
        "example": "Ms. Garcia is the new manager."
      },
      {
        "word": "extreme",
        "translation": "extremo",
        "example": "They live in extreme poverty."
      },
      {
        "word": "musical",
        "translation": "musical; obra musical",
        "example": "She has great musical talent."
      },
      {
        "word": "ceremony",
        "translation": "ceremonia",
        "example": "The ceremony starts at noon."
      },
      {
        "word": "darkness",
        "translation": "oscuridad",
        "example": "The room was filled with darkness."
      },
      {
        "word": "poem",
        "translation": "poema",
        "example": "She wrote a poem for him."
      },
      {
        "word": "coin",
        "translation": "moneda",
        "example": "I found a coin on the street."
      },
      {
        "word": "steel",
        "translation": "acero",
        "example": "The bridge is made of steel."
      },
      {
        "word": "lots",
        "translation": "mucho, un montón",
        "example": "We have lots of time."
      },
      {
        "word": "merely",
        "translation": "meramente, simplemente",
        "example": "It was merely a joke."
      },
      {
        "word": "expand",
        "translation": "expandir, ampliar",
        "example": "The company wants to expand abroad."
      },
      {
        "word": "curse",
        "translation": "maldición; maldecir",
        "example": "They say the house has a curse."
      },
      {
        "word": "vice",
        "translation": "vicio; vice- (prefijo)",
        "example": "Smoking is his only vice."
      },
      {
        "word": "electronic",
        "translation": "electrónico",
        "example": "I bought an electronic dictionary."
      },
      {
        "word": "funeral",
        "translation": "funeral, entierro",
        "example": "The funeral was yesterday."
      },
      {
        "word": "shell",
        "translation": "concha; cáscara",
        "example": "She collected shells on the beach."
      },
      {
        "word": "compete",
        "translation": "competir",
        "example": "Many teams compete for the prize."
      },
      {
        "word": "nearby",
        "translation": "cercano, cerca",
        "example": "Is there a bank nearby?"
      },
      {
        "word": "multiple",
        "translation": "múltiple, varios",
        "example": "The report has multiple errors."
      },
      {
        "word": "existence",
        "translation": "existencia",
        "example": "He doubts the existence of ghosts."
      },
      {
        "word": "authority",
        "translation": "autoridad",
        "example": "The local authorities closed the road."
      },
      {
        "word": "yo",
        "translation": "oye, ey (coloquial)",
        "example": "Yo, what's up?"
      },
      {
        "word": "narrow",
        "translation": "estrecho",
        "example": "The street is very narrow."
      },
      {
        "word": "piss",
        "translation": "mear (vulgar); orina",
        "example": "He had to piss badly."
      },
      {
        "word": "label",
        "translation": "etiqueta; etiquetar",
        "example": "Read the label on the bottle."
      },
      {
        "word": "grave",
        "translation": "tumba; grave",
        "example": "They visited his grave."
      },
      {
        "word": "worst",
        "translation": "peor, el peor",
        "example": "This is the worst day of my life."
      },
      {
        "word": "resident",
        "translation": "residente, vecino",
        "example": "The residents complained about the noise."
      },
      {
        "word": "medium",
        "translation": "medio, mediano; medio (de comunicación)",
        "example": "I wear a medium size."
      },
      {
        "word": "asshole",
        "translation": "gilipollas, imbécil (vulgar)",
        "example": "He acted like an asshole."
      },
      {
        "word": "unable",
        "translation": "incapaz, no poder",
        "example": "I am unable to attend the meeting."
      },
      {
        "word": "angle",
        "translation": "ángulo",
        "example": "Draw a ninety-degree angle."
      },
      {
        "word": "minor",
        "translation": "menor, leve; menor de edad",
        "example": "It's only a minor problem."
      },
      {
        "word": "estimate",
        "translation": "estimar, calcular; estimación",
        "example": "I estimate the cost at fifty euros."
      },
      {
        "word": "symbol",
        "translation": "símbolo",
        "example": "The dove is a symbol of peace."
      },
      {
        "word": "ensure",
        "translation": "asegurar, garantizar",
        "example": "Please ensure the door is locked."
      },
      {
        "word": "invitation",
        "translation": "invitación",
        "example": "Thank you for the invitation."
      },
      {
        "word": "primary",
        "translation": "primario, principal",
        "example": "My primary goal is to learn English."
      },
      {
        "word": "yep",
        "translation": "sí (coloquial)",
        "example": "Yep, I'm ready."
      },
      {
        "word": "everyday",
        "translation": "diario, cotidiano",
        "example": "It's part of everyday life."
      },
      {
        "word": "finance",
        "translation": "finanzas; financiar",
        "example": "She studies finance at university."
      },
      {
        "word": "contest",
        "translation": "concurso, competición",
        "example": "He won the singing contest."
      },
      {
        "word": "entry",
        "translation": "entrada, acceso; inscripción",
        "example": "Entry is free for children."
      },
      {
        "word": "depress",
        "translation": "deprimir",
        "example": "Rainy days depress me."
      },
      {
        "word": "naked",
        "translation": "desnudo",
        "example": "The baby was naked in the bath."
      },
      {
        "word": "generally",
        "translation": "generalmente",
        "example": "Generally, I get up at seven."
      },
      {
        "word": "western",
        "translation": "occidental, del oeste; película del oeste",
        "example": "They live in western Spain."
      },
      {
        "word": "monkey",
        "translation": "mono",
        "example": "The monkey climbed the tree."
      },
      {
        "word": "disgust",
        "translation": "asco, repugnancia; repugnar",
        "example": "She looked at it with disgust."
      },
      {
        "word": "buzz",
        "translation": "zumbido; zumbar",
        "example": "I heard a buzz in my ear."
      },
      {
        "word": "nail",
        "translation": "clavo; uña; clavar",
        "example": "He hit the nail with a hammer."
      },
      {
        "word": "pursue",
        "translation": "perseguir, buscar",
        "example": "She wants to pursue a career in music."
      },
      {
        "word": "enormous",
        "translation": "enorme",
        "example": "They live in an enormous house."
      },
      {
        "word": "combine",
        "translation": "combinar",
        "example": "Combine the flour and the sugar."
      },
      {
        "word": "income",
        "translation": "ingresos",
        "example": "Her income is quite low."
      },
      {
        "word": "meanwhile",
        "translation": "mientras tanto",
        "example": "Meanwhile, I'll prepare dinner."
      },
      {
        "word": "cure",
        "translation": "cura; curar",
        "example": "There is no cure for this disease."
      },
      {
        "word": "golf",
        "translation": "golf",
        "example": "My father plays golf on Sundays."
      },
      {
        "word": "reckon",
        "translation": "calcular; suponer, creer",
        "example": "I reckon it will rain later."
      },
      {
        "word": "tube",
        "translation": "tubo",
        "example": "Squeeze the tube gently."
      },
      {
        "word": "slight",
        "translation": "leve, ligero",
        "example": "There is a slight difference."
      },
      {
        "word": "species",
        "translation": "especie",
        "example": "This species is in danger."
      },
      {
        "word": "alien",
        "translation": "extraterrestre; extranjero, ajeno",
        "example": "The film is about an alien."
      },
      {
        "word": "adventure",
        "translation": "aventura",
        "example": "We went on a great adventure."
      },
      {
        "word": "error",
        "translation": "error",
        "example": "The computer shows an error message."
      },
      {
        "word": "communicate",
        "translation": "comunicar(se)",
        "example": "We communicate by email."
      },
      {
        "word": "genius",
        "translation": "genio",
        "example": "Einstein was a genius."
      },
      {
        "word": "imagination",
        "translation": "imaginación",
        "example": "Children have a lot of imagination."
      },
      {
        "word": "salary",
        "translation": "sueldo, salario",
        "example": "My salary is paid monthly."
      },
      {
        "word": "quietly",
        "translation": "en silencio, tranquilamente",
        "example": "She closed the door quietly."
      },
      {
        "word": "praise",
        "translation": "elogio; elogiar",
        "example": "The teacher praised her work."
      },
      {
        "word": "awesome",
        "translation": "impresionante, genial",
        "example": "The concert was awesome!"
      },
      {
        "word": "helpful",
        "translation": "útil, servicial",
        "example": "The staff were very helpful."
      },
      {
        "word": "bark",
        "translation": "ladrar; ladrido; corteza",
        "example": "The dog barks at strangers."
      },
      {
        "word": "miracle",
        "translation": "milagro",
        "example": "It's a miracle that he survived."
      },
      {
        "word": "ooh",
        "translation": "¡oh!, ¡ooh!",
        "example": "Ooh, that looks delicious!"
      },
      {
        "word": "encounter",
        "translation": "encuentro; encontrar(se) con",
        "example": "We had a strange encounter in the forest."
      },
      {
        "word": "cable",
        "translation": "cable",
        "example": "Plug the cable into the socket."
      },
      {
        "word": "length",
        "translation": "longitud, largo; duración",
        "example": "What is the length of the room?"
      },
      {
        "word": "advertise",
        "translation": "anunciar, hacer publicidad",
        "example": "They advertise their products on TV."
      },
      {
        "word": "surprised",
        "translation": "sorprendido",
        "example": "I was surprised by the news."
      },
      {
        "word": "strict",
        "translation": "estricto",
        "example": "Our teacher is very strict."
      },
      {
        "word": "clue",
        "translation": "pista, indicio",
        "example": "The detective found a clue."
      },
      {
        "word": "flood",
        "translation": "inundación; inundar",
        "example": "The flood destroyed many houses."
      },
      {
        "word": "priority",
        "translation": "prioridad",
        "example": "Safety is our top priority."
      },
      {
        "word": "fence",
        "translation": "valla, cerca",
        "example": "There is a fence around the garden."
      },
      {
        "word": "shelter",
        "translation": "refugio; refugiar(se)",
        "example": "We found shelter from the rain."
      },
      {
        "word": "bug",
        "translation": "bicho, insecto; error",
        "example": "There is a bug on the wall."
      },
      {
        "word": "hopefully",
        "translation": "ojalá, con suerte",
        "example": "Hopefully, it won't rain."
      },
      {
        "word": "beside",
        "translation": "al lado de, junto a",
        "example": "Sit beside me."
      },
      {
        "word": "pleasant",
        "translation": "agradable",
        "example": "We had a pleasant evening."
      },
      {
        "word": "therapy",
        "translation": "terapia",
        "example": "She goes to therapy once a week."
      },
      {
        "word": "album",
        "translation": "álbum",
        "example": "The band released a new album."
      },
      {
        "word": "mount",
        "translation": "montar, subir; monte",
        "example": "He mounted the horse."
      },
      {
        "word": "eliminate",
        "translation": "eliminar",
        "example": "We must eliminate waste."
      },
      {
        "word": "journalist",
        "translation": "periodista",
        "example": "The journalist interviewed the mayor."
      },
      {
        "word": "necessarily",
        "translation": "necesariamente",
        "example": "Expensive doesn't necessarily mean better."
      },
      {
        "word": "severe",
        "translation": "grave, severo",
        "example": "He has a severe headache."
      },
      {
        "word": "diamond",
        "translation": "diamante",
        "example": "She wore a diamond ring."
      },
      {
        "word": "betray",
        "translation": "traicionar",
        "example": "He betrayed his best friend."
      },
      {
        "word": "politician",
        "translation": "político, política",
        "example": "The politician gave a speech."
      },
      {
        "word": "brush",
        "translation": "cepillo, pincel; cepillar",
        "example": "Brush your teeth before bed."
      },
      {
        "word": "exhaust",
        "translation": "agotar, extenuar; tubo de escape",
        "example": "The long trip exhausted us."
      },
      {
        "word": "core",
        "translation": "núcleo, centro",
        "example": "The core of the problem is money."
      },
      {
        "word": "revenge",
        "translation": "venganza",
        "example": "He wants revenge."
      },
      {
        "word": "asset",
        "translation": "activo, bien; ventaja",
        "example": "Her experience is a great asset."
      },
      {
        "word": "closed",
        "translation": "cerrado",
        "example": "The shop is closed on Sundays."
      },
      {
        "word": "pile",
        "translation": "pila, montón; apilar",
        "example": "There is a pile of books on the desk."
      },
      {
        "word": "initial",
        "translation": "inicial",
        "example": "My initial reaction was surprise."
      },
      {
        "word": "injure",
        "translation": "herir, lesionar",
        "example": "He injured his leg playing football."
      },
      {
        "word": "gut",
        "translation": "intestino, tripa; instinto",
        "example": "I have a gut feeling about this."
      },
      {
        "word": "combination",
        "translation": "combinación",
        "example": "The combination of flavors is perfect."
      },
      {
        "word": "attorney",
        "translation": "abogado, abogada",
        "example": "The attorney spoke to the judge."
      },
      {
        "word": "wander",
        "translation": "vagar, deambular",
        "example": "We wandered through the old streets."
      },
      {
        "word": "confident",
        "translation": "seguro de sí mismo, confiado",
        "example": "She feels confident about the exam."
      },
      {
        "word": "crush",
        "translation": "aplastar; enamoramiento",
        "example": "Don't crush the box."
      },
      {
        "word": "temple",
        "translation": "templo; sien",
        "example": "We visited an ancient temple."
      },
      {
        "word": "witch",
        "translation": "bruja",
        "example": "The witch cast a spell."
      },
      {
        "word": "desperate",
        "translation": "desesperado",
        "example": "He was desperate for help."
      },
      {
        "word": "phase",
        "translation": "fase",
        "example": "This is the final phase of the project."
      },
      {
        "word": "possess",
        "translation": "poseer",
        "example": "He possesses a large collection of books."
      },
      {
        "word": "sector",
        "translation": "sector",
        "example": "She works in the public sector."
      },
      {
        "word": "commitment",
        "translation": "compromiso, dedicación",
        "example": "Marriage is a big commitment."
      },
      {
        "word": "treasure",
        "translation": "tesoro",
        "example": "The pirates hid the treasure."
      },
      {
        "word": "scary",
        "translation": "que da miedo, espeluznante",
        "example": "That movie was really scary."
      },
      {
        "word": "predict",
        "translation": "predecir",
        "example": "Nobody can predict the future."
      },
      {
        "word": "accompany",
        "translation": "acompañar",
        "example": "I'll accompany you to the station."
      },
      {
        "word": "remarkable",
        "translation": "notable, extraordinario",
        "example": "She made a remarkable recovery."
      },
      {
        "word": "boil",
        "translation": "hervir, hacer hervir",
        "example": "Boil the water for ten minutes."
      },
      {
        "word": "emerge",
        "translation": "surgir, emerger",
        "example": "The sun emerged from behind the clouds."
      },
      {
        "word": "importance",
        "translation": "importancia",
        "example": "Education is of great importance."
      },
      {
        "word": "penny",
        "translation": "penique, centavo",
        "example": "I don't have a penny."
      },
      {
        "word": "vast",
        "translation": "vasto, inmenso",
        "example": "The desert is vast."
      },
      {
        "word": "southern",
        "translation": "del sur, meridional",
        "example": "They live in southern Spain."
      },
      {
        "word": "pity",
        "translation": "lástima, pena; compadecer",
        "example": "It's a pity you can't come."
      },
      {
        "word": "media",
        "translation": "medios de comunicación",
        "example": "The media reported the news."
      },
      {
        "word": "sexy",
        "translation": "sexi, atractivo",
        "example": "She wore a sexy dress."
      },
      {
        "word": "remote",
        "translation": "remoto, lejano; mando a distancia",
        "example": "They live in a remote village."
      },
      {
        "word": "goddamn",
        "translation": "maldito (exclamación vulgar)",
        "example": "Where is my goddamn phone?"
      },
      {
        "word": "electric",
        "translation": "eléctrico",
        "example": "He drives an electric car."
      },
      {
        "word": "stroke",
        "translation": "ictus, derrame; caricia; acariciar",
        "example": "She stroked the cat gently."
      },
      {
        "word": "pizza",
        "translation": "pizza",
        "example": "Let's order a pizza."
      },
      {
        "word": "intelligent",
        "translation": "inteligente",
        "example": "She is a very intelligent girl."
      },
      {
        "word": "scan",
        "translation": "escanear; escáner",
        "example": "Please scan this document."
      },
      {
        "word": "institution",
        "translation": "institución",
        "example": "The bank is an old institution."
      },
      {
        "word": "beast",
        "translation": "bestia",
        "example": "The beast roared in the dark."
      },
      {
        "word": "punish",
        "translation": "castigar",
        "example": "The teacher punished the class."
      },
      {
        "word": "fulfill",
        "translation": "cumplir, realizar",
        "example": "She fulfilled her dream."
      },
      {
        "word": "ashamed",
        "translation": "avergonzado",
        "example": "I'm ashamed of what I did."
      },
      {
        "word": "employer",
        "translation": "empleador, empresario",
        "example": "My employer is very flexible."
      },
      {
        "word": "clever",
        "translation": "listo, inteligente, ingenioso",
        "example": "That was a clever idea."
      },
      {
        "word": "react",
        "translation": "reaccionar",
        "example": "How did she react to the news?"
      },
      {
        "word": "torture",
        "translation": "tortura; torturar",
        "example": "Torture is illegal."
      },
      {
        "word": "fry",
        "translation": "freír",
        "example": "Fry the eggs in a little oil."
      },
      {
        "word": "hug",
        "translation": "abrazar; abrazo",
        "example": "Give me a hug."
      },
      {
        "word": "lad",
        "translation": "chico, muchacho",
        "example": "He's a nice young lad."
      },
      {
        "word": "lazy",
        "translation": "perezoso, vago",
        "example": "He is too lazy to cook."
      },
      {
        "word": "soil",
        "translation": "tierra, suelo",
        "example": "The soil is rich and dark."
      },
      {
        "word": "compromise",
        "translation": "compromiso, acuerdo; ceder",
        "example": "We reached a compromise."
      },
      {
        "word": "dick",
        "translation": "pene (vulgar); imbécil (vulgar)",
        "example": "Don't be a dick."
      },
      {
        "word": "upper",
        "translation": "superior, de arriba",
        "example": "He lives on the upper floor."
      },
      {
        "word": "reverse",
        "translation": "invertir; marcha atrás; inverso",
        "example": "She put the car in reverse."
      },
      {
        "word": "dismiss",
        "translation": "despedir; descartar",
        "example": "The company dismissed ten workers."
      },
      {
        "word": "lemon",
        "translation": "limón",
        "example": "Add a slice of lemon to the tea."
      },
      {
        "word": "constant",
        "translation": "constante",
        "example": "The noise was constant."
      },
      {
        "word": "burst",
        "translation": "reventar, estallar; estallido",
        "example": "The pipe burst in winter."
      },
      {
        "word": "disappoint",
        "translation": "decepcionar",
        "example": "I don't want to disappoint you."
      },
      {
        "word": "pole",
        "translation": "poste, palo; polo",
        "example": "The flag is on a tall pole."
      },
      {
        "word": "weigh",
        "translation": "pesar",
        "example": "How much do you weigh?"
      },
      {
        "word": "formal",
        "translation": "formal",
        "example": "It's a formal dinner."
      },
      {
        "word": "digital",
        "translation": "digital",
        "example": "I bought a digital camera."
      },
      {
        "word": "majesty",
        "translation": "majestad",
        "example": "Your Majesty, the guests have arrived."
      },
      {
        "word": "employ",
        "translation": "emplear, contratar",
        "example": "The factory employs 200 people."
      },
      {
        "word": "confess",
        "translation": "confesar",
        "example": "He confessed to the crime."
      },
      {
        "word": "motor",
        "translation": "motor",
        "example": "The motor is very noisy."
      },
      {
        "word": "deposit",
        "translation": "depósito, fianza; ingresar",
        "example": "I paid a deposit for the flat."
      },
      {
        "word": "dawn",
        "translation": "amanecer, alba",
        "example": "We got up at dawn."
      },
      {
        "word": "jewelry",
        "translation": "joyas, joyería",
        "example": "She keeps her jewelry in a box."
      },
      {
        "word": "sweetheart",
        "translation": "cariño, amor",
        "example": "Goodnight, sweetheart."
      },
      {
        "word": "gentle",
        "translation": "suave, amable, delicado",
        "example": "He is a gentle person."
      },
      {
        "word": "nightmare",
        "translation": "pesadilla",
        "example": "I had a terrible nightmare."
      },
      {
        "word": "whom",
        "translation": "a quién, quien",
        "example": "To whom did you give the book?"
      },
      {
        "word": "precisely",
        "translation": "precisamente, exactamente",
        "example": "That is precisely what I mean."
      },
      {
        "word": "humor",
        "translation": "humor",
        "example": "He has a great sense of humor."
      },
      {
        "word": "wooden",
        "translation": "de madera",
        "example": "They sat on a wooden bench."
      },
      {
        "word": "foundation",
        "translation": "fundación; base",
        "example": "The foundation helps poor children."
      },
      {
        "word": "awake",
        "translation": "despierto",
        "example": "I was awake all night."
      },
      {
        "word": "negotiate",
        "translation": "negociar",
        "example": "They negotiated a better price."
      },
      {
        "word": "pose",
        "translation": "posar; plantear; pose",
        "example": "The model posed for the photographer."
      },
      {
        "word": "duck",
        "translation": "pato; agacharse",
        "example": "The duck swims on the pond."
      },
      {
        "word": "amaze",
        "translation": "asombrar",
        "example": "Her talent amazes me."
      },
      {
        "word": "jazz",
        "translation": "jazz",
        "example": "He plays jazz on the saxophone."
      },
      {
        "word": "illness",
        "translation": "enfermedad",
        "example": "She recovered from a long illness."
      },
      {
        "word": "princess",
        "translation": "princesa",
        "example": "The princess lives in a castle."
      },
      {
        "word": "random",
        "translation": "aleatorio, al azar",
        "example": "Choose a random number."
      },
      {
        "word": "withdraw",
        "translation": "retirar; retirarse",
        "example": "I need to withdraw some cash."
      },
      {
        "word": "furniture",
        "translation": "muebles",
        "example": "We bought new furniture."
      },
      {
        "word": "qualify",
        "translation": "cualificarse, clasificarse; calificar",
        "example": "The team qualified for the final."
      },
      {
        "word": "polite",
        "translation": "educado, cortés",
        "example": "The children are very polite."
      },
      {
        "word": "possession",
        "translation": "posesión, propiedad",
        "example": "Drugs possession is illegal."
      },
      {
        "word": "majority",
        "translation": "mayoría",
        "example": "The majority voted yes."
      },
      {
        "word": "palace",
        "translation": "palacio",
        "example": "The king lives in the palace."
      },
      {
        "word": "distant",
        "translation": "distante, lejano",
        "example": "The mountains are distant."
      },
      {
        "word": "counsel",
        "translation": "consejo; abogado; aconsejar",
        "example": "Seek legal counsel."
      },
      {
        "word": "demonstrate",
        "translation": "demostrar; manifestarse",
        "example": "Let me demonstrate how it works."
      },
      {
        "word": "soap",
        "translation": "jabón",
        "example": "Wash your hands with soap."
      },
      {
        "word": "mask",
        "translation": "máscara, mascarilla",
        "example": "He wore a mask at the party."
      },
      {
        "word": "pants",
        "translation": "pantalones; calzoncillos",
        "example": "These pants are too big."
      },
      {
        "word": "drown",
        "translation": "ahogarse, ahogar",
        "example": "He almost drowned in the river."
      },
      {
        "word": "breed",
        "translation": "raza; criar",
        "example": "What breed is your dog?"
      },
      {
        "word": "rope",
        "translation": "cuerda, soga",
        "example": "He climbed up the rope."
      },
      {
        "word": "rumor",
        "translation": "rumor",
        "example": "I heard a rumor about the boss."
      },
      {
        "word": "rubbish",
        "translation": "basura; tonterías",
        "example": "Put the rubbish in the bin."
      },
      {
        "word": "discovery",
        "translation": "descubrimiento",
        "example": "It was an important discovery."
      },
      {
        "word": "explosion",
        "translation": "explosión",
        "example": "We heard a loud explosion."
      },
      {
        "word": "burden",
        "translation": "carga, peso",
        "example": "The debt is a heavy burden."
      },
      {
        "word": "draft",
        "translation": "borrador; redactar",
        "example": "This is the first draft."
      },
      {
        "word": "restore",
        "translation": "restaurar, restablecer",
        "example": "They restored the old church."
      },
      {
        "word": "german",
        "translation": "alemán; alemana",
        "example": "He is learning German."
      },
      {
        "word": "classical",
        "translation": "clásico",
        "example": "I love classical music."
      },
      {
        "word": "lecture",
        "translation": "conferencia, clase magistral",
        "example": "The lecture starts at nine."
      },
      {
        "word": "participate",
        "translation": "participar",
        "example": "Everyone can participate."
      },
      {
        "word": "wage",
        "translation": "salario, sueldo (por hora)",
        "example": "The minimum wage went up."
      },
      {
        "word": "vital",
        "translation": "vital, esencial",
        "example": "Water is vital for life."
      },
      {
        "word": "ban",
        "translation": "prohibir; prohibición",
        "example": "They banned smoking in restaurants."
      },
      {
        "word": "bullshit",
        "translation": "gilipollez, mentira (vulgar)",
        "example": "Don't give me that bullshit."
      },
      {
        "word": "lamp",
        "translation": "lámpara",
        "example": "Turn on the lamp, please."
      },
      {
        "word": "privilege",
        "translation": "privilegio",
        "example": "It's a privilege to meet you."
      },
      {
        "word": "doll",
        "translation": "muñeca",
        "example": "The girl hugged her doll."
      },
      {
        "word": "beneath",
        "translation": "debajo de, bajo",
        "example": "The cat slept beneath the table."
      },
      {
        "word": "heal",
        "translation": "curar, sanar",
        "example": "The wound will heal soon."
      },
      {
        "word": "administration",
        "translation": "administración",
        "example": "He works in school administration."
      },
      {
        "word": "interrupt",
        "translation": "interrumpir",
        "example": "Please don't interrupt me."
      },
      {
        "word": "diary",
        "translation": "diario (personal)",
        "example": "She writes in her diary every night."
      },
      {
        "word": "variety",
        "translation": "variedad",
        "example": "The market sells a variety of fruit."
      },
      {
        "word": "scratch",
        "translation": "rascar, arañar; arañazo",
        "example": "The cat scratched the sofa."
      },
      {
        "word": "intense",
        "translation": "intenso",
        "example": "I felt intense pain."
      },
      {
        "word": "pub",
        "translation": "bar, pub",
        "example": "We met at the pub."
      },
      {
        "word": "courage",
        "translation": "valor, coraje",
        "example": "It takes courage to speak up."
      },
      {
        "word": "representative",
        "translation": "representante; representativo",
        "example": "A sales representative called me."
      },
      {
        "word": "fridge",
        "translation": "nevera, frigorífico",
        "example": "There is milk in the fridge."
      },
      {
        "word": "stab",
        "translation": "apuñalar; puñalada",
        "example": "The man was stabbed in the street."
      },
      {
        "word": "unclear",
        "translation": "poco claro, confuso",
        "example": "The instructions are unclear."
      },
      {
        "word": "occupy",
        "translation": "ocupar",
        "example": "The family occupies the whole floor."
      },
      {
        "word": "specifically",
        "translation": "específicamente, en concreto",
        "example": "I specifically asked for a quiet room."
      },
      {
        "word": "custom",
        "translation": "costumbre",
        "example": "It's a local custom."
      },
      {
        "word": "grandma",
        "translation": "abuela, yaya",
        "example": "Grandma is baking cookies."
      },
      {
        "word": "reception",
        "translation": "recepción; acogida",
        "example": "Please wait at the reception."
      },
      {
        "word": "hunter",
        "translation": "cazador, cazadora",
        "example": "The hunter followed the tracks."
      },
      {
        "word": "pro",
        "translation": "profesional; a favor",
        "example": "He is a pro golfer."
      },
      {
        "word": "northern",
        "translation": "del norte, septentrional",
        "example": "They live in northern Spain."
      },
      {
        "word": "uh-huh",
        "translation": "ajá, sí (coloquial)",
        "example": "Uh-huh, I understand."
      },
      {
        "word": "perspective",
        "translation": "perspectiva",
        "example": "Try to see it from my perspective."
      },
      {
        "word": "corporate",
        "translation": "corporativo, empresarial",
        "example": "She works in a corporate office."
      },
      {
        "word": "athlete",
        "translation": "atleta, deportista",
        "example": "The athlete trains every day."
      },
      {
        "word": "pie",
        "translation": "tarta, pastel",
        "example": "Grandma baked an apple pie."
      },
      {
        "word": "association",
        "translation": "asociación",
        "example": "He belongs to a sports association."
      },
      {
        "word": "recruit",
        "translation": "reclutar, contratar; recluta",
        "example": "The company wants to recruit new staff."
      },
      {
        "word": "constantly",
        "translation": "constantemente",
        "example": "He constantly checks his phone."
      },
      {
        "word": "toast",
        "translation": "tostada; brindis; brindar",
        "example": "I had toast for breakfast."
      },
      {
        "word": "absolute",
        "translation": "absoluto",
        "example": "It's an absolute disaster."
      },
      {
        "word": "basketball",
        "translation": "baloncesto",
        "example": "They play basketball after school."
      },
      {
        "word": "abroad",
        "translation": "en el extranjero",
        "example": "She studied abroad for a year."
      },
      {
        "word": "insult",
        "translation": "insulto; insultar",
        "example": "Don't insult my friend."
      },
      {
        "word": "closely",
        "translation": "de cerca, estrechamente",
        "example": "Watch closely."
      },
      {
        "word": "column",
        "translation": "columna",
        "example": "The temple has tall columns."
      },
      {
        "word": "prayer",
        "translation": "oración, rezo",
        "example": "They said a prayer before dinner."
      },
      {
        "word": "resolve",
        "translation": "resolver; determinación",
        "example": "We need to resolve this problem."
      },
      {
        "word": "celebrity",
        "translation": "celebridad, famoso",
        "example": "She wants to be a celebrity."
      },
      {
        "word": "bride",
        "translation": "novia (de boda)",
        "example": "The bride wore a white dress."
      },
      {
        "word": "preserve",
        "translation": "conservar, preservar; conserva",
        "example": "We must preserve our history."
      },
      {
        "word": "embrace",
        "translation": "abrazar; adoptar",
        "example": "They embraced at the airport."
      },
      {
        "word": "volume",
        "translation": "volumen; tomo",
        "example": "Please turn down the volume."
      },
      {
        "word": "saint",
        "translation": "santo, santa",
        "example": "Saint Francis is a famous saint."
      },
      {
        "word": "accomplish",
        "translation": "lograr, realizar",
        "example": "She accomplished her goal."
      },
      {
        "word": "fiction",
        "translation": "ficción",
        "example": "I prefer fiction to non-fiction."
      },
      {
        "word": "elect",
        "translation": "elegir (por votación)",
        "example": "They elected a new president."
      },
      {
        "word": "wealth",
        "translation": "riqueza",
        "example": "His wealth comes from business."
      },
      {
        "word": "starve",
        "translation": "pasar hambre, morir de hambre",
        "example": "Many people starve in the world."
      },
      {
        "word": "assault",
        "translation": "agresión, asalto; agredir",
        "example": "He was arrested for assault."
      },
      {
        "word": "blast",
        "translation": "explosión, ráfaga; volar",
        "example": "The blast shook the building."
      },
      {
        "word": "decent",
        "translation": "decente, razonable",
        "example": "He earns a decent salary."
      },
      {
        "word": "blank",
        "translation": "en blanco, vacío",
        "example": "The page was blank."
      },
      {
        "word": "stream",
        "translation": "arroyo, corriente; transmitir",
        "example": "A small stream runs through the garden."
      },
      {
        "word": "update",
        "translation": "actualizar; actualización",
        "example": "Please update your software."
      },
      {
        "word": "resistance",
        "translation": "resistencia",
        "example": "There was little resistance to the plan."
      },
      {
        "word": "broadcast",
        "translation": "emitir, transmitir; emisión",
        "example": "The match will be broadcast live."
      },
      {
        "word": "weakness",
        "translation": "debilidad",
        "example": "Chocolate is my weakness."
      },
      {
        "word": "junior",
        "translation": "júnior, subalterno; hijo (del mismo nombre)",
        "example": "He is a junior manager."
      },
      {
        "word": "airline",
        "translation": "aerolínea",
        "example": "Which airline are you flying with?"
      },
      {
        "word": "web",
        "translation": "red; telaraña; web",
        "example": "A spider built a web in the corner."
      },
      {
        "word": "bull",
        "translation": "toro",
        "example": "The bull ran into the arena."
      },
      {
        "word": "designer",
        "translation": "diseñador, diseñadora",
        "example": "My sister is a fashion designer."
      },
      {
        "word": "opera",
        "translation": "ópera",
        "example": "We went to the opera last night."
      },
      {
        "word": "sweat",
        "translation": "sudor; sudar",
        "example": "I sweat a lot in summer."
      },
      {
        "word": "warrant",
        "translation": "orden judicial; justificar",
        "example": "The police have a warrant."
      },
      {
        "word": "researcher",
        "translation": "investigador, investigadora",
        "example": "The researcher published a study."
      },
      {
        "word": "shore",
        "translation": "orilla, costa",
        "example": "We walked along the shore."
      },
      {
        "word": "somewhat",
        "translation": "algo, un tanto",
        "example": "I'm somewhat tired today."
      },
      {
        "word": "crown",
        "translation": "corona",
        "example": "The queen wore a gold crown."
      },
      {
        "word": "immediate",
        "translation": "inmediato",
        "example": "We need an immediate answer."
      },
      {
        "word": "apology",
        "translation": "disculpa, perdón",
        "example": "I owe you an apology."
      },
      {
        "word": "spit",
        "translation": "escupir",
        "example": "Don't spit on the street."
      },
      {
        "word": "poster",
        "translation": "cartel, póster",
        "example": "There is a poster on my wall."
      },
      {
        "word": "pace",
        "translation": "ritmo, paso",
        "example": "He walks at a slow pace."
      },
      {
        "word": "cab",
        "translation": "taxi",
        "example": "Let's take a cab to the airport."
      },
      {
        "word": "objective",
        "translation": "objetivo; objetivo (imparcial)",
        "example": "Our objective is to win."
      },
      {
        "word": "annual",
        "translation": "anual",
        "example": "The annual meeting is in May."
      },
      {
        "word": "entertainment",
        "translation": "entretenimiento",
        "example": "There is live entertainment tonight."
      },
      {
        "word": "reform",
        "translation": "reforma; reformar",
        "example": "The government announced a reform."
      },
      {
        "word": "insect",
        "translation": "insecto",
        "example": "An insect bit my arm."
      },
      {
        "word": "aw",
        "translation": "¡ay!, ¡oh! (ternura o decepción)",
        "example": "Aw, that's so sweet!"
      },
      {
        "word": "prior",
        "translation": "previo, anterior",
        "example": "Prior experience is not required."
      },
      {
        "word": "greet",
        "translation": "saludar, recibir",
        "example": "She greeted us at the door."
      },
      {
        "word": "strain",
        "translation": "tensión, esfuerzo; forzar",
        "example": "Don't strain your eyes."
      },
      {
        "word": "bat",
        "translation": "bate; murciélago",
        "example": "A bat flew out of the cave."
      },
      {
        "word": "creative",
        "translation": "creativo",
        "example": "She has a creative mind."
      },
      {
        "word": "essay",
        "translation": "ensayo, redacción",
        "example": "I have to write an essay."
      },
      {
        "word": "inner",
        "translation": "interior, interno",
        "example": "He found inner peace."
      },
      {
        "word": "discipline",
        "translation": "disciplina; disciplinar",
        "example": "Success requires discipline."
      },
      {
        "word": "jew",
        "translation": "judío, judía",
        "example": "My neighbor is a Jew and celebrates Hanukkah."
      },
      {
        "word": "smash",
        "translation": "romper, aplastar; golpe",
        "example": "He smashed the plate on the floor."
      },
      {
        "word": "urge",
        "translation": "impulso; instar",
        "example": "I felt an urge to laugh."
      },
      {
        "word": "decline",
        "translation": "disminuir; rechazar; descenso",
        "example": "I have to decline your invitation."
      },
      {
        "word": "soccer",
        "translation": "fútbol",
        "example": "They play soccer every weekend."
      },
      {
        "word": "tent",
        "translation": "tienda de campaña",
        "example": "We put up the tent near the river."
      },
      {
        "word": "symptom",
        "translation": "síntoma",
        "example": "Fever is a common symptom."
      },
      {
        "word": "warrior",
        "translation": "guerrero, guerrera",
        "example": "The warrior fought bravely."
      },
      {
        "word": "spoil",
        "translation": "estropear, echar a perder; consentir",
        "example": "Don't spoil the surprise."
      },
      {
        "word": "annoy",
        "translation": "molestar, fastidiar",
        "example": "His constant noise annoys me."
      },
      {
        "word": "trash",
        "translation": "basura",
        "example": "Take out the trash, please."
      },
      {
        "word": "recipe",
        "translation": "receta",
        "example": "This is my grandmother's recipe."
      },
      {
        "word": "tiger",
        "translation": "tigre",
        "example": "The tiger is a powerful animal."
      },
      {
        "word": "analyze",
        "translation": "analizar",
        "example": "We need to analyze the data."
      },
      {
        "word": "champagne",
        "translation": "champán, cava",
        "example": "They opened a bottle of champagne."
      },
      {
        "word": "arrival",
        "translation": "llegada",
        "example": "The arrival of the train was delayed."
      },
      {
        "word": "chop",
        "translation": "cortar, picar; chuleta",
        "example": "Chop the onions finely."
      },
      {
        "word": "skip",
        "translation": "saltarse, omitir; saltar",
        "example": "Don't skip breakfast."
      },
      {
        "word": "ankle",
        "translation": "tobillo",
        "example": "I twisted my ankle."
      },
      {
        "word": "civilian",
        "translation": "civil",
        "example": "Many civilians left the city."
      },
      {
        "word": "kingdom",
        "translation": "reino",
        "example": "The kingdom was rich and peaceful."
      },
      {
        "word": "grandpa",
        "translation": "abuelo, yayo",
        "example": "Grandpa tells great stories."
      },
      {
        "word": "papa",
        "translation": "papá, papi",
        "example": "Papa, can you help me?"
      },
      {
        "word": "persuade",
        "translation": "persuadir, convencer",
        "example": "I persuaded him to come."
      },
      {
        "word": "rude",
        "translation": "grosero, maleducado",
        "example": "It's rude to interrupt."
      },
      {
        "word": "oven",
        "translation": "horno",
        "example": "Put the cake in the oven."
      },
      {
        "word": "dedicate",
        "translation": "dedicar",
        "example": "She dedicated her life to teaching."
      },
      {
        "word": "precious",
        "translation": "precioso, valioso",
        "example": "Time is precious."
      },
      {
        "word": "chinese",
        "translation": "chino; china",
        "example": "I'm learning Chinese."
      },
      {
        "word": "sweetie",
        "translation": "cariño, cielo",
        "example": "Come here, sweetie."
      },
      {
        "word": "creation",
        "translation": "creación",
        "example": "The creation of the museum took years."
      },
      {
        "word": "survival",
        "translation": "supervivencia",
        "example": "Water is essential for survival."
      },
      {
        "word": "businessman",
        "translation": "hombre de negocios, empresario",
        "example": "The businessman signed the contract."
      },
      {
        "word": "assist",
        "translation": "ayudar, asistir",
        "example": "Can I assist you with anything?"
      },
      {
        "word": "bow",
        "translation": "reverencia; inclinarse; arco",
        "example": "The actors took a bow."
      },
      {
        "word": "mathematics",
        "translation": "matemáticas",
        "example": "He studies mathematics at university."
      },
      {
        "word": "tunnel",
        "translation": "túnel",
        "example": "The train goes through a long tunnel."
      },
      {
        "word": "destruction",
        "translation": "destrucción",
        "example": "The storm caused great destruction."
      },
      {
        "word": "acquire",
        "translation": "adquirir, obtener",
        "example": "She acquired new skills."
      },
      {
        "word": "math",
        "translation": "matemáticas, mates",
        "example": "I'm good at math."
      },
      {
        "word": "ambulance",
        "translation": "ambulancia",
        "example": "Call an ambulance!"
      },
      {
        "word": "transform",
        "translation": "transformar",
        "example": "The rain transformed the garden."
      },
      {
        "word": "cookie",
        "translation": "galleta",
        "example": "Would you like a cookie?"
      },
      {
        "word": "fade",
        "translation": "desvanecerse, desteñirse",
        "example": "The colors faded in the sun."
      },
      {
        "word": "roar",
        "translation": "rugir; rugido",
        "example": "The lion roared loudly."
      },
      {
        "word": "passage",
        "translation": "pasaje, pasillo; paso",
        "example": "We walked through a narrow passage."
      },
      {
        "word": "painter",
        "translation": "pintor, pintora",
        "example": "The painter showed us his paintings."
      },
      {
        "word": "concerned",
        "translation": "preocupado; interesado",
        "example": "I'm concerned about your health."
      },
      {
        "word": "sheriff",
        "translation": "sheriff",
        "example": "The sheriff arrested the thief."
      },
      {
        "word": "ugh",
        "translation": "¡puaj!, ¡agh!",
        "example": "Ugh, this is disgusting!"
      },
      {
        "word": "squad",
        "translation": "escuadra, equipo",
        "example": "The squad trains every morning."
      },
      {
        "word": "cultural",
        "translation": "cultural",
        "example": "The city has a rich cultural life."
      },
      {
        "word": "software",
        "translation": "software, programa",
        "example": "I need to install new software."
      },
      {
        "word": "teenage",
        "translation": "adolescente",
        "example": "She has two teenage sons."
      },
      {
        "word": "counter",
        "translation": "mostrador; contador; contrarrestar",
        "example": "The keys are on the kitchen counter."
      },
      {
        "word": "elsewhere",
        "translation": "en otro lugar",
        "example": "Let's go elsewhere, it's too crowded."
      },
      {
        "word": "vessel",
        "translation": "buque, embarcación; recipiente; vaso (sanguíneo)",
        "example": "The vessel sailed at dawn."
      },
      {
        "word": "thought",
        "translation": "pensamiento, idea; pasado de «think»",
        "example": "I had a strange thought."
      },
      {
        "word": "musician",
        "translation": "músico, música",
        "example": "He is a talented musician."
      },
      {
        "word": "dive",
        "translation": "bucear, zambullirse; buceo",
        "example": "They dive in the sea every summer."
      },
      {
        "word": "electrical",
        "translation": "eléctrico",
        "example": "There is an electrical problem."
      },
      {
        "word": "nasty",
        "translation": "desagradable, asqueroso",
        "example": "That was a nasty surprise."
      },
      {
        "word": "forbid",
        "translation": "prohibir",
        "example": "The law forbids smoking here."
      },
      {
        "word": "peak",
        "translation": "cima, pico; punto álgido",
        "example": "They reached the peak at noon."
      },
      {
        "word": "garage",
        "translation": "garaje; taller mecánico",
        "example": "The car is in the garage."
      },
      {
        "word": "educate",
        "translation": "educar",
        "example": "We must educate our children."
      },
      {
        "word": "cave",
        "translation": "cueva",
        "example": "Bats live in the cave."
      },
      {
        "word": "dentist",
        "translation": "dentista",
        "example": "I have an appointment with the dentist."
      },
      {
        "word": "entertain",
        "translation": "entretener; recibir invitados",
        "example": "The clown entertained the children."
      },
      {
        "word": "stamp",
        "translation": "sello; estampilla; pisar fuerte",
        "example": "I need a stamp for this letter."
      },
      {
        "word": "translate",
        "translation": "traducir",
        "example": "Can you translate this sentence?"
      },
      {
        "word": "alert",
        "translation": "alerta; alertar; atento",
        "example": "The police issued an alert."
      },
      {
        "word": "jealous",
        "translation": "celoso, envidioso",
        "example": "She is jealous of her sister."
      },
      {
        "word": "assign",
        "translation": "asignar, encargar",
        "example": "The teacher assigned a new task."
      },
      {
        "word": "laptop",
        "translation": "portátil",
        "example": "I work on my laptop."
      },
      {
        "word": "slap",
        "translation": "bofetada; abofetear",
        "example": "He got a slap on the face."
      },
      {
        "word": "pal",
        "translation": "colega, amigo",
        "example": "He's an old pal of mine."
      },
      {
        "word": "genetic",
        "translation": "genético",
        "example": "It's a genetic disease."
      },
      {
        "word": "urgent",
        "translation": "urgente",
        "example": "It's an urgent matter."
      },
      {
        "word": "gamble",
        "translation": "apostar; apuesta, riesgo",
        "example": "He gambled all his money."
      },
      {
        "word": "layer",
        "translation": "capa",
        "example": "Wear an extra layer, it's cold."
      },
      {
        "word": "spider",
        "translation": "araña",
        "example": "There is a spider on the wall."
      },
      {
        "word": "robot",
        "translation": "robot",
        "example": "The robot cleans the floor."
      },
      {
        "word": "detect",
        "translation": "detectar",
        "example": "The alarm detected smoke."
      },
      {
        "word": "depth",
        "translation": "profundidad",
        "example": "The depth of the lake is ten meters."
      },
      {
        "word": "tension",
        "translation": "tensión",
        "example": "There was tension in the room."
      },
      {
        "word": "exception",
        "translation": "excepción",
        "example": "There is an exception to every rule."
      },
      {
        "word": "domestic",
        "translation": "doméstico; nacional",
        "example": "Cats are domestic animals."
      },
      {
        "word": "fork",
        "translation": "tenedor; bifurcación",
        "example": "Use a fork to eat the salad."
      },
      {
        "word": "aircraft",
        "translation": "avión, aeronave",
        "example": "The aircraft landed safely."
      },
      {
        "word": "babe",
        "translation": "nena, cariño; bebé",
        "example": "Hey babe, how was your day?"
      },
      {
        "word": "poet",
        "translation": "poeta, poetisa",
        "example": "The poet read his work aloud."
      },
      {
        "word": "capacity",
        "translation": "capacidad",
        "example": "The stadium has a capacity of 50,000."
      },
      {
        "word": "nowadays",
        "translation": "hoy en día, actualmente",
        "example": "Nowadays, everyone has a phone."
      },
      {
        "word": "regulation",
        "translation": "regulación, norma",
        "example": "Safety regulations are very strict."
      },
      {
        "word": "invention",
        "translation": "invento, invención",
        "example": "The telephone was a great invention."
      },
      {
        "word": "slice",
        "translation": "rebanada, trozo; cortar en rodajas",
        "example": "I'd like a slice of cake."
      },
      {
        "word": "fold",
        "translation": "doblar, plegar",
        "example": "Fold the paper in half."
      },
      {
        "word": "contribute",
        "translation": "contribuir",
        "example": "Everyone should contribute to the project."
      },
      {
        "word": "senator",
        "translation": "senador, senadora",
        "example": "The senator voted against the law."
      },
      {
        "word": "additional",
        "translation": "adicional",
        "example": "There is an additional charge."
      },
      {
        "word": "survey",
        "translation": "encuesta; sondear",
        "example": "We did a survey of customers."
      },
      {
        "word": "secondly",
        "translation": "en segundo lugar",
        "example": "Secondly, we need more time."
      },
      {
        "word": "harbor",
        "translation": "puerto; albergar",
        "example": "The boats are in the harbor."
      },
      {
        "word": "acknowledge",
        "translation": "reconocer, admitir",
        "example": "He acknowledged his mistake."
      },
      {
        "word": "curtain",
        "translation": "cortina, telón",
        "example": "Close the curtains, please."
      },
      {
        "word": "explode",
        "translation": "explotar",
        "example": "The bomb exploded at noon."
      },
      {
        "word": "historical",
        "translation": "histórico",
        "example": "It's a historical building."
      },
      {
        "word": "isolate",
        "translation": "aislar",
        "example": "The patient was isolated from others."
      },
      {
        "word": "hers",
        "translation": "suyo, suya (de ella)",
        "example": "This book is hers."
      },
      {
        "word": "celebration",
        "translation": "celebración, fiesta",
        "example": "We had a big celebration."
      },
      {
        "word": "costume",
        "translation": "disfraz, traje",
        "example": "She wore a pirate costume."
      },
      {
        "word": "enterprise",
        "translation": "empresa; iniciativa",
        "example": "He runs a small enterprise."
      },
      {
        "word": "visual",
        "translation": "visual",
        "example": "I'm a visual learner."
      },
      {
        "word": "sometime",
        "translation": "algún día, en algún momento",
        "example": "Let's meet sometime next week."
      },
      {
        "word": "assistance",
        "translation": "asistencia, ayuda",
        "example": "Do you need any assistance?"
      },
      {
        "word": "pronounce",
        "translation": "pronunciar",
        "example": "How do you pronounce this word?"
      },
      {
        "word": "british",
        "translation": "británico",
        "example": "He has a British passport."
      },
      {
        "word": "promotion",
        "translation": "ascenso; promoción",
        "example": "She got a promotion at work."
      },
      {
        "word": "consult",
        "translation": "consultar",
        "example": "You should consult a doctor."
      },
      {
        "word": "corporation",
        "translation": "corporación, empresa",
        "example": "He works for a large corporation."
      },
      {
        "word": "conclude",
        "translation": "concluir",
        "example": "We concluded the meeting at six."
      },
      {
        "word": "anxious",
        "translation": "ansioso, nervioso",
        "example": "She felt anxious before the exam."
      },
      {
        "word": "physics",
        "translation": "física",
        "example": "Physics is my favorite subject."
      },
      {
        "word": "poetry",
        "translation": "poesía",
        "example": "He reads poetry in the evenings."
      },
      {
        "word": "ours",
        "translation": "nuestro, nuestra",
        "example": "This house is ours."
      },
      {
        "word": "operator",
        "translation": "operador, operadora; telefonista",
        "example": "The operator answered the call."
      },
      {
        "word": "gorgeous",
        "translation": "precioso, espléndido",
        "example": "You look gorgeous tonight."
      },
      {
        "word": "mister",
        "translation": "señor",
        "example": "Excuse me, mister, is this seat free?"
      },
      {
        "word": "rabbit",
        "translation": "conejo",
        "example": "The rabbit ate a carrot."
      },
      {
        "word": "hockey",
        "translation": "hockey",
        "example": "They play hockey on the ice."
      },
      {
        "word": "overcome",
        "translation": "superar, vencer",
        "example": "She overcame her fear."
      },
      {
        "word": "legend",
        "translation": "leyenda",
        "example": "It's an old legend."
      },
      {
        "word": "alter",
        "translation": "alterar, modificar",
        "example": "We had to alter our plans."
      },
      {
        "word": "surrender",
        "translation": "rendirse; rendición",
        "example": "The soldiers refused to surrender."
      },
      {
        "word": "comedy",
        "translation": "comedia",
        "example": "We watched a funny comedy."
      },
      {
        "word": "flame",
        "translation": "llama",
        "example": "The flame went out."
      },
      {
        "word": "biscuit",
        "translation": "galleta; bizcocho",
        "example": "I had tea and a biscuit."
      },
      {
        "word": "absence",
        "translation": "ausencia",
        "example": "Her absence was noticed."
      },
      {
        "word": "glory",
        "translation": "gloria",
        "example": "The team won eternal glory."
      },
      {
        "word": "appoint",
        "translation": "nombrar, designar",
        "example": "They appointed a new manager."
      },
      {
        "word": "era",
        "translation": "era, época",
        "example": "It was the end of an era."
      },
      {
        "word": "mare",
        "translation": "yegua",
        "example": "The mare and her foal grazed in the field."
      },
      {
        "word": "democracy",
        "translation": "democracia",
        "example": "Spain is a democracy."
      },
      {
        "word": "quantity",
        "translation": "cantidad",
        "example": "We need a large quantity of paper."
      },
      {
        "word": "generate",
        "translation": "generar",
        "example": "Solar panels generate electricity."
      },
      {
        "word": "jam",
        "translation": "mermelada; atasco; apretujar",
        "example": "I like jam on my toast."
      },
      {
        "word": "exit",
        "translation": "salida; salir",
        "example": "The exit is on the left."
      },
      {
        "word": "panel",
        "translation": "panel; jurado",
        "example": "A panel of experts will decide."
      },
      {
        "word": "pet",
        "translation": "mascota; acariciar",
        "example": "Do you have a pet?"
      },
      {
        "word": "ton",
        "translation": "tonelada; montón (coloquial)",
        "example": "The truck carries ten tons of sand."
      },
      {
        "word": "architecture",
        "translation": "arquitectura",
        "example": "I love Gothic architecture."
      },
      {
        "word": "leak",
        "translation": "fuga, gotera; gotear, filtrar",
        "example": "There is a leak in the roof."
      },
      {
        "word": "disk",
        "translation": "disco",
        "example": "Save the file on the disk."
      },
      {
        "word": "ash",
        "translation": "ceniza; fresno",
        "example": "Ash fell from the volcano."
      },
      {
        "word": "mm-hmm",
        "translation": "ajá, mm-hmm (asentimiento)",
        "example": "Mm-hmm, I agree."
      },
      {
        "word": "pin",
        "translation": "alfiler, pasador; fijar",
        "example": "She pinned the note to the board."
      },
      {
        "word": "infection",
        "translation": "infección",
        "example": "The wound has an infection."
      },
      {
        "word": "frog",
        "translation": "rana",
        "example": "A frog jumped into the pond."
      },
      {
        "word": "bay",
        "translation": "bahía",
        "example": "The boats sailed across the bay."
      },
      {
        "word": "coincidence",
        "translation": "coincidencia",
        "example": "What a coincidence!"
      },
      {
        "word": "genuine",
        "translation": "genuino, auténtico",
        "example": "This is a genuine leather bag."
      },
      {
        "word": "chill",
        "translation": "enfriar; frío; relajarse (coloquial)",
        "example": "Chill the wine before dinner."
      },
      {
        "word": "insane",
        "translation": "loco, demente",
        "example": "That idea is completely insane."
      },
      {
        "word": "resign",
        "translation": "dimitir, renunciar",
        "example": "The minister resigned yesterday."
      },
      {
        "word": "railway",
        "translation": "ferrocarril, vía férrea",
        "example": "The railway goes through the mountains."
      },
      {
        "word": "announcement",
        "translation": "anuncio, comunicado",
        "example": "There was an announcement at the airport."
      },
      {
        "word": "differently",
        "translation": "de manera diferente",
        "example": "She thinks differently from me."
      },
      {
        "word": "tissue",
        "translation": "pañuelo de papel; tejido",
        "example": "Do you have a tissue?"
      },
      {
        "word": "noble",
        "translation": "noble",
        "example": "It was a noble gesture."
      },
      {
        "word": "beloved",
        "translation": "querido, amado",
        "example": "She lost her beloved husband."
      },
      {
        "word": "expectation",
        "translation": "expectativa",
        "example": "The film met my expectations."
      },
      {
        "word": "chemistry",
        "translation": "química",
        "example": "He teaches chemistry at school."
      },
      {
        "word": "raw",
        "translation": "crudo; en bruto",
        "example": "Don't eat raw meat."
      },
      {
        "word": "submit",
        "translation": "presentar, enviar; someterse",
        "example": "Submit your essay by Friday."
      },
      {
        "word": "flesh",
        "translation": "carne (del cuerpo); pulpa",
        "example": "The fruit has sweet flesh."
      },
      {
        "word": "presentation",
        "translation": "presentación",
        "example": "I have a presentation tomorrow."
      },
      {
        "word": "hostage",
        "translation": "rehén",
        "example": "The hostages were released."
      },
      {
        "word": "fighter",
        "translation": "luchador, combatiente; caza (avión)",
        "example": "He is a brave fighter."
      },
      {
        "word": "continent",
        "translation": "continente",
        "example": "Africa is a huge continent."
      },
      {
        "word": "spanish",
        "translation": "español; española",
        "example": "I speak Spanish and English."
      },
      {
        "word": "bump",
        "translation": "golpe, bulto; chocar",
        "example": "I have a bump on my head."
      },
      {
        "word": "imply",
        "translation": "implicar, insinuar",
        "example": "Are you implying that I'm wrong?"
      },
      {
        "word": "tribe",
        "translation": "tribu",
        "example": "The tribe lives in the forest."
      },
      {
        "word": "liar",
        "translation": "mentiroso, mentirosa",
        "example": "Don't trust him, he's a liar."
      },
      {
        "word": "leadership",
        "translation": "liderazgo",
        "example": "She showed great leadership."
      },
      {
        "word": "download",
        "translation": "descargar; descarga",
        "example": "I downloaded the app yesterday."
      },
      {
        "word": "cruel",
        "translation": "cruel",
        "example": "It was a cruel joke."
      },
      {
        "word": "accurate",
        "translation": "preciso, exacto",
        "example": "The report is accurate."
      },
      {
        "word": "crop",
        "translation": "cultivo, cosecha",
        "example": "Rice is the main crop here."
      },
      {
        "word": "whip",
        "translation": "látigo; azotar; batir",
        "example": "Whip the cream until it is thick."
      },
      {
        "word": "flip",
        "translation": "dar la vuelta, voltear",
        "example": "Flip the pancake."
      },
      {
        "word": "formula",
        "translation": "fórmula",
        "example": "What is the formula for water?"
      },
      {
        "word": "flu",
        "translation": "gripe",
        "example": "I have the flu."
      },
      {
        "word": "devote",
        "translation": "dedicar, consagrar",
        "example": "He devotes his time to his family."
      },
      {
        "word": "adjust",
        "translation": "ajustar, adaptar",
        "example": "Adjust the seat before driving."
      },
      {
        "word": "towel",
        "translation": "toalla",
        "example": "Bring me a clean towel."
      },
      {
        "word": "household",
        "translation": "hogar, familia",
        "example": "Every household received a letter."
      },
      {
        "word": "custody",
        "translation": "custodia; detención",
        "example": "She has custody of the children."
      },
      {
        "word": "aggressive",
        "translation": "agresivo",
        "example": "The dog became aggressive."
      },
      {
        "word": "carpet",
        "translation": "alfombra, moqueta",
        "example": "The carpet in the living room is new."
      },
      {
        "word": "architect",
        "translation": "arquitecto, arquitecta",
        "example": "The architect designed the museum."
      },
      {
        "word": "mercy",
        "translation": "misericordia, clemencia",
        "example": "The judge showed mercy."
      },
      {
        "word": "ski",
        "translation": "esquí; esquiar",
        "example": "We go skiing every winter."
      },
      {
        "word": "install",
        "translation": "instalar",
        "example": "I need to install this program."
      },
      {
        "word": "glove",
        "translation": "guante",
        "example": "I lost my left glove."
      },
      {
        "word": "nope",
        "translation": "no (coloquial)",
        "example": "Nope, I haven't seen it."
      },
      {
        "word": "fever",
        "translation": "fiebre",
        "example": "The child has a high fever."
      },
      {
        "word": "traveler",
        "translation": "viajero, viajera",
        "example": "The traveler asked for directions."
      },
      {
        "word": "origin",
        "translation": "origen",
        "example": "What is the origin of this word?"
      },
      {
        "word": "swallow",
        "translation": "tragar; golondrina",
        "example": "It hurts when I swallow."
      },
      {
        "word": "settlement",
        "translation": "asentamiento; acuerdo",
        "example": "They reached a settlement."
      },
      {
        "word": "russian",
        "translation": "ruso; rusa",
        "example": "He speaks Russian fluently."
      },
      {
        "word": "gap",
        "translation": "hueco, brecha",
        "example": "Mind the gap."
      },
      {
        "word": "stain",
        "translation": "mancha; manchar",
        "example": "There's a stain on my shirt."
      },
      {
        "word": "runner",
        "translation": "corredor, corredora",
        "example": "She is a marathon runner."
      },
      {
        "word": "versus",
        "translation": "contra, frente a",
        "example": "It's Spain versus Italy tonight."
      },
      {
        "word": "keen",
        "translation": "entusiasta, aficionado",
        "example": "She is keen on tennis."
      },
      {
        "word": "sponsor",
        "translation": "patrocinador; patrocinar",
        "example": "A bank sponsors the festival."
      },
      {
        "word": "consideration",
        "translation": "consideración",
        "example": "Thank you for your consideration."
      },
      {
        "word": "terrify",
        "translation": "aterrorizar",
        "example": "Thunder terrifies my dog."
      },
      {
        "word": "convention",
        "translation": "convención; congreso",
        "example": "He attended a medical convention."
      },
      {
        "word": "cartoon",
        "translation": "dibujos animados; viñeta",
        "example": "The kids watch cartoons on Saturday."
      },
      {
        "word": "whore",
        "translation": "puta (vulgar, insulto)",
        "example": "That word is a vulgar insult."
      },
      {
        "word": "justify",
        "translation": "justificar",
        "example": "You can't justify that behavior."
      },
      {
        "word": "hum",
        "translation": "tararear; zumbar",
        "example": "She hummed a happy tune."
      },
      {
        "word": "terrific",
        "translation": "estupendo, fantástico",
        "example": "We had a terrific time."
      },
      {
        "word": "crystal",
        "translation": "cristal",
        "example": "The crystal glass sparkled."
      },
      {
        "word": "cope",
        "translation": "arreglárselas, sobrellevar",
        "example": "She can't cope with the stress."
      },
      {
        "word": "tidy",
        "translation": "ordenado; ordenar",
        "example": "Please keep your room tidy."
      },
      {
        "word": "jerk",
        "translation": "imbécil (coloquial); tirón; dar un tirón",
        "example": "Don't be a jerk."
      },
      {
        "word": "bee",
        "translation": "abeja",
        "example": "A bee landed on the flower."
      },
      {
        "word": "deck",
        "translation": "cubierta; baraja",
        "example": "We stood on the deck of the ship."
      },
      {
        "word": "skull",
        "translation": "cráneo, calavera",
        "example": "The skull was found in the cave."
      },
      {
        "word": "wolf",
        "translation": "lobo",
        "example": "The wolf howled at the moon."
      },
      {
        "word": "minimum",
        "translation": "mínimo",
        "example": "The minimum age is eighteen."
      },
      {
        "word": "unhappy",
        "translation": "infeliz, descontento",
        "example": "She is unhappy with her job."
      },
      {
        "word": "lifestyle",
        "translation": "estilo de vida",
        "example": "He leads a healthy lifestyle."
      },
      {
        "word": "lung",
        "translation": "pulmón",
        "example": "Smoking damages the lungs."
      },
      {
        "word": "bean",
        "translation": "judía, frijol, haba",
        "example": "I like beans with rice."
      },
      {
        "word": "sock",
        "translation": "calcetín",
        "example": "I can't find my other sock."
      },
      {
        "word": "monk",
        "translation": "monje",
        "example": "The monk lives in a monastery."
      },
      {
        "word": "shy",
        "translation": "tímido",
        "example": "The boy is very shy."
      },
      {
        "word": "bin",
        "translation": "cubo de basura, papelera",
        "example": "Put it in the bin."
      },
      {
        "word": "advertisement",
        "translation": "anuncio, publicidad",
        "example": "I saw an advertisement on TV."
      },
      {
        "word": "maximum",
        "translation": "máximo",
        "example": "The maximum speed is 120."
      },
      {
        "word": "industrial",
        "translation": "industrial",
        "example": "It's an industrial area."
      },
      {
        "word": "lane",
        "translation": "carril; callejón",
        "example": "Stay in your lane."
      },
      {
        "word": "drill",
        "translation": "taladro; taladrar; ejercicio",
        "example": "He used a drill to make a hole."
      },
      {
        "word": "good-bye",
        "translation": "adiós",
        "example": "She said good-bye and left."
      },
      {
        "word": "observation",
        "translation": "observación",
        "example": "His observation was very accurate."
      },
      {
        "word": "motorcycle",
        "translation": "motocicleta, moto",
        "example": "He rides a motorcycle to work."
      },
      {
        "word": "literature",
        "translation": "literatura",
        "example": "She studies English literature."
      },
      {
        "word": "opponent",
        "translation": "oponente, adversario",
        "example": "He defeated his opponent."
      },
      {
        "word": "dirt",
        "translation": "suciedad, tierra",
        "example": "There's dirt on your shoes."
      },
      {
        "word": "punishment",
        "translation": "castigo",
        "example": "The punishment was too harsh."
      },
      {
        "word": "stir",
        "translation": "remover, revolver",
        "example": "Stir the soup slowly."
      },
      {
        "word": "fortunate",
        "translation": "afortunado",
        "example": "We were fortunate to find a room."
      },
      {
        "word": "trainer",
        "translation": "entrenador, entrenadora",
        "example": "My trainer is very strict."
      },
      {
        "word": "basement",
        "translation": "sótano",
        "example": "The washing machine is in the basement."
      },
      {
        "word": "mainly",
        "translation": "principalmente",
        "example": "I mainly read novels."
      },
      {
        "word": "disorder",
        "translation": "desorden; trastorno",
        "example": "The room was in complete disorder."
      },
      {
        "word": "afterward",
        "translation": "después, luego",
        "example": "We had dinner and afterward went for a walk."
      },
      {
        "word": "butt",
        "translation": "trasero; colilla; embestir",
        "example": "He put out his cigarette butt."
      },
      {
        "word": "couch",
        "translation": "sofá, diván",
        "example": "The cat is sleeping on the couch."
      },
      {
        "word": "printer",
        "translation": "impresora",
        "example": "The printer is out of paper."
      },
      {
        "word": "testify",
        "translation": "testificar",
        "example": "She testified in court."
      },
      {
        "word": "crawl",
        "translation": "gatear, arrastrarse",
        "example": "The baby is learning to crawl."
      },
      {
        "word": "hammer",
        "translation": "martillo; martillear",
        "example": "Pass me the hammer, please."
      },
      {
        "word": "landscape",
        "translation": "paisaje",
        "example": "The landscape is beautiful."
      },
      {
        "word": "cage",
        "translation": "jaula",
        "example": "The bird is in the cage."
      },
      {
        "word": "gosh",
        "translation": "¡caramba!, ¡vaya!",
        "example": "Gosh, that's expensive!"
      },
      {
        "word": "spoon",
        "translation": "cuchara",
        "example": "Eat the soup with a spoon."
      },
      {
        "word": "manufacture",
        "translation": "fabricar; fabricación",
        "example": "They manufacture cars here."
      },
      {
        "word": "rear",
        "translation": "trasero, posterior; parte trasera",
        "example": "Sit in the rear seat."
      },
      {
        "word": "accent",
        "translation": "acento",
        "example": "She has a Scottish accent."
      },
      {
        "word": "headache",
        "translation": "dolor de cabeza",
        "example": "I have a terrible headache."
      },
      {
        "word": "mysterious",
        "translation": "misterioso",
        "example": "A mysterious man entered the room."
      },
      {
        "word": "rub",
        "translation": "frotar, restregar",
        "example": "Rub your hands to get warm."
      },
      {
        "word": "japanese",
        "translation": "japonés; japonesa",
        "example": "She is learning Japanese."
      },
      {
        "word": "noisy",
        "translation": "ruidoso",
        "example": "The street is very noisy."
      },
      {
        "word": "suspicious",
        "translation": "sospechoso; receloso",
        "example": "I saw a suspicious man outside."
      },
      {
        "word": "script",
        "translation": "guion; letra",
        "example": "He wrote the script for the film."
      },
      {
        "word": "suspend",
        "translation": "suspender",
        "example": "The school suspended him for a week."
      },
      {
        "word": "misunderstand",
        "translation": "malinterpretar, entender mal",
        "example": "I think you misunderstood me."
      },
      {
        "word": "outfit",
        "translation": "conjunto, atuendo",
        "example": "I love your outfit."
      },
      {
        "word": "envelope",
        "translation": "sobre",
        "example": "Put the letter in the envelope."
      },
      {
        "word": "instructor",
        "translation": "instructor, instructora",
        "example": "My driving instructor is patient."
      },
      {
        "word": "coal",
        "translation": "carbón",
        "example": "They burn coal for heat."
      },
      {
        "word": "via",
        "translation": "a través de, vía",
        "example": "We flew to Rome via Paris."
      },
      {
        "word": "mature",
        "translation": "maduro; madurar",
        "example": "She is very mature for her age."
      },
      {
        "word": "suitable",
        "translation": "adecuado, apropiado",
        "example": "This is not a suitable place."
      },
      {
        "word": "gallery",
        "translation": "galería",
        "example": "We visited an art gallery."
      },
      {
        "word": "originally",
        "translation": "originalmente, al principio",
        "example": "He is originally from Chile."
      },
      {
        "word": "surprising",
        "translation": "sorprendente",
        "example": "It's surprising news."
      },
      {
        "word": "eastern",
        "translation": "oriental, del este",
        "example": "They live in eastern Spain."
      },
      {
        "word": "miserable",
        "translation": "desdichado, infeliz; lamentable",
        "example": "The weather was miserable."
      },
      {
        "word": "penalty",
        "translation": "penalización; penalti",
        "example": "He scored from a penalty."
      },
      {
        "word": "sustain",
        "translation": "sostener, mantener",
        "example": "The wall can't sustain the weight."
      },
      {
        "word": "sequence",
        "translation": "secuencia",
        "example": "Put the numbers in sequence."
      },
      {
        "word": "drum",
        "translation": "tambor, batería",
        "example": "He plays the drums in a band."
      },
      {
        "word": "cupboard",
        "translation": "armario (de cocina), alacena",
        "example": "The plates are in the cupboard."
      },
      {
        "word": "discount",
        "translation": "descuento; descontar",
        "example": "Is there a student discount?"
      },
      {
        "word": "navy",
        "translation": "marina (armada); azul marino",
        "example": "He served in the navy."
      },
      {
        "word": "strongly",
        "translation": "fuertemente, firmemente",
        "example": "I strongly disagree."
      },
      {
        "word": "disagree",
        "translation": "discrepar, no estar de acuerdo",
        "example": "I disagree with you."
      },
      {
        "word": "profession",
        "translation": "profesión",
        "example": "Teaching is a noble profession."
      },
      {
        "word": "platform",
        "translation": "andén; plataforma",
        "example": "The train leaves from platform two."
      },
      {
        "word": "pollution",
        "translation": "contaminación",
        "example": "Air pollution is a big problem."
      },
      {
        "word": "fox",
        "translation": "zorro",
        "example": "A fox crossed the road."
      },
      {
        "word": "specialist",
        "translation": "especialista",
        "example": "I need to see a specialist."
      },
      {
        "word": "motive",
        "translation": "motivo, móvil",
        "example": "The police are looking for a motive."
      },
      {
        "word": "bush",
        "translation": "arbusto, matorral",
        "example": "A bird hid in the bush."
      },
      {
        "word": "gross",
        "translation": "asqueroso (coloquial); bruto",
        "example": "That smell is gross."
      },
      {
        "word": "shave",
        "translation": "afeitar(se)",
        "example": "He shaves every morning."
      },
      {
        "word": "petrol",
        "translation": "gasolina",
        "example": "Petrol is expensive now."
      },
      {
        "word": "beef",
        "translation": "carne de res, ternera",
        "example": "We had roast beef for lunch."
      },
      {
        "word": "cheek",
        "translation": "mejilla; descaro",
        "example": "She kissed him on the cheek."
      },
      {
        "word": "santa",
        "translation": "Papá Noel",
        "example": "The kids are waiting for Santa."
      },
      {
        "word": "extent",
        "translation": "extensión, grado",
        "example": "I don't know the extent of the damage."
      },
      {
        "word": "contribution",
        "translation": "contribución, aportación",
        "example": "Thank you for your contribution."
      },
      {
        "word": "resort",
        "translation": "centro turístico, complejo vacacional",
        "example": "We stayed at a beach resort."
      },
      {
        "word": "slam",
        "translation": "cerrar de golpe; portazo",
        "example": "Don't slam the door!"
      },
      {
        "word": "listener",
        "translation": "oyente",
        "example": "She is a good listener."
      },
      {
        "word": "clothing",
        "translation": "ropa, vestimenta",
        "example": "They sell clothing for children."
      },
      {
        "word": "tender",
        "translation": "tierno, blando; sensible",
        "example": "The meat is very tender."
      },
      {
        "word": "thrill",
        "translation": "emoción, ilusión; emocionar",
        "example": "Roller coasters give me a thrill."
      },
      {
        "word": "pit",
        "translation": "hoyo, foso; hueso (de fruta)",
        "example": "They dug a deep pit."
      },
      {
        "word": "swell",
        "translation": "hincharse, aumentar",
        "example": "My ankle began to swell."
      },
      {
        "word": "baseball",
        "translation": "béisbol",
        "example": "Baseball is popular in the US."
      },
      {
        "word": "biology",
        "translation": "biología",
        "example": "She studies biology at university."
      },
      {
        "word": "climate",
        "translation": "clima",
        "example": "The climate here is dry."
      },
      {
        "word": "fantasy",
        "translation": "fantasía",
        "example": "He loves fantasy books."
      },
      {
        "word": "patrol",
        "translation": "patrulla; patrullar",
        "example": "The police patrol the area at night."
      },
      {
        "word": "notion",
        "translation": "noción, idea",
        "example": "I have no notion what he means."
      },
      {
        "word": "flee",
        "translation": "huir",
        "example": "The people fled from the fire."
      },
      {
        "word": "relevant",
        "translation": "relevante, pertinente",
        "example": "That is not relevant to the question."
      },
      {
        "word": "firstly",
        "translation": "en primer lugar",
        "example": "Firstly, we need a plan."
      },
      {
        "word": "publish",
        "translation": "publicar",
        "example": "They will publish the book in May."
      },
      {
        "word": "leap",
        "translation": "saltar; salto",
        "example": "The cat leapt onto the wall."
      },
      {
        "word": "europe",
        "translation": "Europa",
        "example": "Spain is in Europe."
      },
      {
        "word": "personnel",
        "translation": "personal, plantilla",
        "example": "All personnel must wear a badge."
      },
      {
        "word": "chick",
        "translation": "pollito; chica (coloquial)",
        "example": "The hen has five chicks."
      },
      {
        "word": "lifetime",
        "translation": "vida (duración), toda la vida",
        "example": "It was the chance of a lifetime."
      },
      {
        "word": "recycle",
        "translation": "reciclar",
        "example": "We recycle paper and glass."
      },
      {
        "word": "cliff",
        "translation": "acantilado",
        "example": "The house stands on a cliff."
      },
      {
        "word": "demon",
        "translation": "demonio",
        "example": "The story is about a demon."
      },
      {
        "word": "cabin",
        "translation": "cabaña; camarote",
        "example": "We rented a cabin in the mountains."
      },
      {
        "word": "motherfucker",
        "translation": "hijo de puta (vulgar, insulto)",
        "example": "That word is a strong vulgar insult."
      },
      {
        "word": "dna",
        "translation": "ADN",
        "example": "The test uses DNA samples."
      },
      {
        "word": "whereas",
        "translation": "mientras que",
        "example": "She likes tea, whereas he prefers coffee."
      },
      {
        "word": "stove",
        "translation": "cocina (de gas, de leña), fogón",
        "example": "Put the pot on the stove."
      },
      {
        "word": "toe",
        "translation": "dedo del pie",
        "example": "I hurt my big toe."
      },
      {
        "word": "commissioner",
        "translation": "comisionado, comisario",
        "example": "The commissioner announced new rules."
      },
      {
        "word": "retirement",
        "translation": "jubilación",
        "example": "He enjoys his retirement."
      },
      {
        "word": "arise",
        "translation": "surgir, presentarse",
        "example": "Problems may arise later."
      },
      {
        "word": "underground",
        "translation": "subterráneo; metro",
        "example": "The tunnel is underground."
      },
      {
        "word": "confession",
        "translation": "confesión",
        "example": "He made a full confession."
      },
      {
        "word": "trunk",
        "translation": "tronco; maletero; baúl",
        "example": "Put the bags in the trunk."
      },
      {
        "word": "tablet",
        "translation": "tableta; pastilla",
        "example": "I read books on my tablet."
      },
      {
        "word": "faint",
        "translation": "débil, tenue; desmayarse",
        "example": "I heard a faint noise."
      },
      {
        "word": "recovery",
        "translation": "recuperación",
        "example": "He is making a quick recovery."
      },
      {
        "word": "battery",
        "translation": "batería, pila",
        "example": "The battery is dead."
      },
      {
        "word": "consistent",
        "translation": "coherente, constante",
        "example": "Her results are consistent."
      },
      {
        "word": "dimension",
        "translation": "dimensión",
        "example": "What are the dimensions of the room?"
      },
      {
        "word": "dragon",
        "translation": "dragón",
        "example": "The knight fought a dragon."
      },
      {
        "word": "tourism",
        "translation": "turismo",
        "example": "Tourism is important for the economy."
      },
      {
        "word": "deputy",
        "translation": "adjunto, diputado",
        "example": "The deputy mayor spoke first."
      },
      {
        "word": "complicated",
        "translation": "complicado",
        "example": "It's a complicated situation."
      },
      {
        "word": "leather",
        "translation": "cuero, piel",
        "example": "He bought a leather jacket."
      },
      {
        "word": "user",
        "translation": "usuario, usuaria",
        "example": "The app has a million users."
      },
      {
        "word": "candle",
        "translation": "vela",
        "example": "She lit a candle."
      },
      {
        "word": "philosophy",
        "translation": "filosofía",
        "example": "He studies philosophy at university."
      },
      {
        "word": "curly",
        "translation": "rizado",
        "example": "She has long curly hair."
      },
      {
        "word": "convert",
        "translation": "convertir(se)",
        "example": "Convert the file to PDF."
      },
      {
        "word": "loser",
        "translation": "perdedor, perdedora",
        "example": "Nobody wants to be the loser."
      },
      {
        "word": "escort",
        "translation": "escoltar, acompañar; escolta",
        "example": "A guard escorted him to the door."
      },
      {
        "word": "gesture",
        "translation": "gesto",
        "example": "It was a kind gesture."
      },
      {
        "word": "hail",
        "translation": "granizo; granizar; saludar",
        "example": "Hail damaged the car."
      },
      {
        "word": "sauce",
        "translation": "salsa",
        "example": "I like tomato sauce on pasta."
      },
      {
        "word": "informal",
        "translation": "informal",
        "example": "It's an informal dinner."
      },
      {
        "word": "calculate",
        "translation": "calcular",
        "example": "Calculate the total cost."
      },
      {
        "word": "choke",
        "translation": "atragantarse, ahogarse",
        "example": "He choked on a piece of bread."
      },
      {
        "word": "journal",
        "translation": "diario; revista especializada",
        "example": "She keeps a journal of her trips."
      },
      {
        "word": "pleased",
        "translation": "contento, satisfecho",
        "example": "I'm pleased to meet you."
      },
      {
        "word": "marine",
        "translation": "marino; infante de marina",
        "example": "Marine life is fascinating."
      },
      {
        "word": "aboard",
        "translation": "a bordo",
        "example": "Welcome aboard!"
      },
      {
        "word": "app",
        "translation": "aplicación, app",
        "example": "I downloaded a new app."
      },
      {
        "word": "clinic",
        "translation": "clínica, consultorio",
        "example": "She works at a medical clinic."
      },
      {
        "word": "signature",
        "translation": "firma",
        "example": "I need your signature here."
      },
      {
        "word": "preparation",
        "translation": "preparación",
        "example": "The preparation took two days."
      },
      {
        "word": "blade",
        "translation": "hoja (de cuchillo), cuchilla",
        "example": "The blade is very sharp."
      },
      {
        "word": "fetch",
        "translation": "ir a buscar, traer",
        "example": "The dog fetched the ball."
      },
      {
        "word": "introduction",
        "translation": "introducción; presentación",
        "example": "Read the introduction first."
      },
      {
        "word": "stair",
        "translation": "escalón; escaleras",
        "example": "Be careful on the stairs."
      },
      {
        "word": "depression",
        "translation": "depresión",
        "example": "She is being treated for depression."
      },
      {
        "word": "context",
        "translation": "contexto",
        "example": "You must understand the context."
      },
      {
        "word": "rocket",
        "translation": "cohete",
        "example": "The rocket launched at dawn."
      },
      {
        "word": "melt",
        "translation": "derretir(se), fundir",
        "example": "The snow melts in spring."
      },
      {
        "word": "purse",
        "translation": "monedero, bolso",
        "example": "She put her keys in her purse."
      },
      {
        "word": "inquiry",
        "translation": "consulta, investigación",
        "example": "I made an inquiry about prices."
      },
      {
        "word": "generous",
        "translation": "generoso",
        "example": "He is a very generous man."
      },
      {
        "word": "smartphone",
        "translation": "teléfono inteligente, móvil",
        "example": "Everyone has a smartphone."
      },
      {
        "word": "china",
        "translation": "China; porcelana",
        "example": "China is a very large country."
      },
      {
        "word": "improvement",
        "translation": "mejora",
        "example": "There has been a big improvement."
      },
      {
        "word": "evolve",
        "translation": "evolucionar",
        "example": "Languages evolve over time."
      }
    ],
    "4": [
      {
        "word": "liquid",
        "translation": "líquido",
        "example": "Water is a liquid."
      },
      {
        "word": "hop",
        "translation": "saltar a la pata coja; salto",
        "example": "The rabbit hopped across the lawn."
      },
      {
        "word": "jungle",
        "translation": "selva, jungla",
        "example": "Tigers live in the jungle."
      },
      {
        "word": "gently",
        "translation": "suavemente, con delicadeza",
        "example": "She gently touched his hand."
      },
      {
        "word": "hint",
        "translation": "pista, indirecta; insinuar",
        "example": "Give me a hint, please."
      },
      {
        "word": "exhibit",
        "translation": "exponer; objeto expuesto",
        "example": "The museum exhibits ancient coins."
      },
      {
        "word": "spill",
        "translation": "derramar(se); derrame",
        "example": "Be careful not to spill the milk."
      },
      {
        "word": "entitle",
        "translation": "dar derecho a, titular",
        "example": "This ticket entitles you to a free drink."
      },
      {
        "word": "rival",
        "translation": "rival; rivalizar con",
        "example": "The two teams are old rivals."
      },
      {
        "word": "import",
        "translation": "importar; importación",
        "example": "Spain imports oil."
      },
      {
        "word": "defendant",
        "translation": "acusado, demandado",
        "example": "The defendant said he was innocent."
      },
      {
        "word": "glasses",
        "translation": "gafas",
        "example": "I can't read without my glasses."
      },
      {
        "word": "creep",
        "translation": "arrastrarse, moverse sigilosamente",
        "example": "The cat crept toward the bird."
      },
      {
        "word": "toss",
        "translation": "lanzar, tirar",
        "example": "Toss me the ball."
      },
      {
        "word": "category",
        "translation": "categoría",
        "example": "Choose a category."
      },
      {
        "word": "squeeze",
        "translation": "apretar, exprimir",
        "example": "Squeeze the lemon over the fish."
      },
      {
        "word": "equally",
        "translation": "igualmente, por igual",
        "example": "They share the work equally."
      },
      {
        "word": "helicopter",
        "translation": "helicóptero",
        "example": "The helicopter landed on the roof."
      },
      {
        "word": "approximately",
        "translation": "aproximadamente",
        "example": "It takes approximately two hours."
      },
      {
        "word": "ultimately",
        "translation": "en última instancia, finalmente",
        "example": "Ultimately, the decision is yours."
      },
      {
        "word": "distract",
        "translation": "distraer",
        "example": "Don't distract me while I work."
      },
      {
        "word": "goat",
        "translation": "cabra",
        "example": "The goat eats grass on the hill."
      },
      {
        "word": "wreck",
        "translation": "naufragio, restos; destrozar",
        "example": "The car was a complete wreck."
      },
      {
        "word": "awkward",
        "translation": "torpe; incómodo, embarazoso",
        "example": "There was an awkward silence."
      },
      {
        "word": "bubble",
        "translation": "burbuja; burbujear",
        "example": "The child blew a soap bubble."
      },
      {
        "word": "siren",
        "translation": "sirena (alarma)",
        "example": "We heard a siren in the distance."
      },
      {
        "word": "interfere",
        "translation": "interferir, entrometerse",
        "example": "Don't interfere in my business."
      },
      {
        "word": "distinguish",
        "translation": "distinguir",
        "example": "I can't distinguish the twins."
      },
      {
        "word": "substance",
        "translation": "sustancia",
        "example": "The substance is harmful."
      },
      {
        "word": "wealthy",
        "translation": "rico, adinerado",
        "example": "He comes from a wealthy family."
      },
      {
        "word": "shh",
        "translation": "¡chitón!, ¡chis!",
        "example": "Shh, the baby is sleeping."
      },
      {
        "word": "scar",
        "translation": "cicatriz",
        "example": "He has a scar on his arm."
      },
      {
        "word": "hip",
        "translation": "cadera",
        "example": "She broke her hip."
      },
      {
        "word": "shield",
        "translation": "escudo; proteger",
        "example": "The knight raised his shield."
      },
      {
        "word": "sacred",
        "translation": "sagrado",
        "example": "The river is sacred to them."
      },
      {
        "word": "mere",
        "translation": "simple, mero",
        "example": "It was a mere accident."
      },
      {
        "word": "dial",
        "translation": "marcar (teléfono); esfera",
        "example": "Dial 112 in an emergency."
      },
      {
        "word": "sack",
        "translation": "saco; despedir",
        "example": "He carried a sack of potatoes."
      },
      {
        "word": "crucial",
        "translation": "crucial, decisivo",
        "example": "It's a crucial moment for the team."
      },
      {
        "word": "hesitate",
        "translation": "dudar, vacilar",
        "example": "Don't hesitate to call me."
      },
      {
        "word": "shade",
        "translation": "sombra; tono",
        "example": "Let's sit in the shade."
      },
      {
        "word": "rage",
        "translation": "rabia, furia",
        "example": "He shouted in rage."
      },
      {
        "word": "obey",
        "translation": "obedecer",
        "example": "Children must obey their parents."
      },
      {
        "word": "negotiation",
        "translation": "negociación",
        "example": "The negotiation lasted two days."
      },
      {
        "word": "outcome",
        "translation": "resultado, desenlace",
        "example": "We are happy with the outcome."
      },
      {
        "word": "edit",
        "translation": "editar, corregir",
        "example": "I need to edit my essay."
      },
      {
        "word": "haunt",
        "translation": "rondar, atormentar (fantasmas)",
        "example": "They say ghosts haunt this house."
      },
      {
        "word": "compound",
        "translation": "compuesto; recinto",
        "example": "Water is a chemical compound."
      },
      {
        "word": "rifle",
        "translation": "rifle, fusil",
        "example": "The hunter carried a rifle."
      },
      {
        "word": "bully",
        "translation": "matón; intimidar",
        "example": "The bully took his lunch."
      },
      {
        "word": "execute",
        "translation": "ejecutar; llevar a cabo",
        "example": "They executed the plan perfectly."
      },
      {
        "word": "frequency",
        "translation": "frecuencia",
        "example": "The frequency of buses is low."
      },
      {
        "word": "buyer",
        "translation": "comprador, compradora",
        "example": "The buyer paid in cash."
      },
      {
        "word": "according",
        "translation": "según (according to)",
        "example": "According to the news, it will rain."
      },
      {
        "word": "pulse",
        "translation": "pulso",
        "example": "The nurse checked his pulse."
      },
      {
        "word": "conscious",
        "translation": "consciente",
        "example": "The patient is conscious."
      },
      {
        "word": "rarely",
        "translation": "rara vez, raramente",
        "example": "He rarely eats meat."
      },
      {
        "word": "belly",
        "translation": "barriga, vientre",
        "example": "The cat has a fat belly."
      },
      {
        "word": "radical",
        "translation": "radical",
        "example": "They proposed a radical change."
      },
      {
        "word": "excitement",
        "translation": "emoción, entusiasmo",
        "example": "The children jumped with excitement."
      },
      {
        "word": "adviser",
        "translation": "asesor, asesora",
        "example": "She is the president's adviser."
      },
      {
        "word": "brake",
        "translation": "freno; frenar",
        "example": "Press the brake!"
      },
      {
        "word": "instant",
        "translation": "instante; instantáneo",
        "example": "Just wait an instant."
      },
      {
        "word": "jet",
        "translation": "reactor, avión a reacción; chorro",
        "example": "The jet flew over the city."
      },
      {
        "word": "comrade",
        "translation": "camarada",
        "example": "The soldier helped his comrade."
      },
      {
        "word": "bishop",
        "translation": "obispo",
        "example": "The bishop blessed the people."
      },
      {
        "word": "mutual",
        "translation": "mutuo, recíproco",
        "example": "The feeling is mutual."
      },
      {
        "word": "recommendation",
        "translation": "recomendación",
        "example": "Thanks for the recommendation."
      },
      {
        "word": "brick",
        "translation": "ladrillo",
        "example": "The house is made of brick."
      },
      {
        "word": "tick",
        "translation": "marcar con una señal; tictac; garrapata",
        "example": "Tick the correct box."
      },
      {
        "word": "unlikely",
        "translation": "improbable",
        "example": "It's unlikely to rain today."
      },
      {
        "word": "surveillance",
        "translation": "vigilancia",
        "example": "The shop has video surveillance."
      },
      {
        "word": "investor",
        "translation": "inversor, inversora",
        "example": "The investors lost money."
      },
      {
        "word": "obligation",
        "translation": "obligación",
        "example": "You have no obligation to buy."
      },
      {
        "word": "pupil",
        "translation": "alumno, alumna; pupila",
        "example": "The teacher has twenty pupils."
      },
      {
        "word": "shed",
        "translation": "cobertizo; derramar, mudar",
        "example": "The tools are in the shed."
      },
      {
        "word": "tag",
        "translation": "etiqueta; etiquetar",
        "example": "The price tag is missing."
      },
      {
        "word": "underneath",
        "translation": "debajo de, bajo",
        "example": "The keys are underneath the book."
      },
      {
        "word": "intellectual",
        "translation": "intelectual",
        "example": "He is a famous intellectual."
      },
      {
        "word": "echo",
        "translation": "eco; hacer eco",
        "example": "I heard an echo in the cave."
      },
      {
        "word": "luxury",
        "translation": "lujo",
        "example": "They live in luxury."
      },
      {
        "word": "scout",
        "translation": "explorador; explorar",
        "example": "He is a boy scout."
      },
      {
        "word": "pale",
        "translation": "pálido",
        "example": "She looks pale today."
      },
      {
        "word": "surgeon",
        "translation": "cirujano, cirujana",
        "example": "The surgeon operated on his knee."
      },
      {
        "word": "unbelievable",
        "translation": "increíble",
        "example": "The view is unbelievable."
      },
      {
        "word": "anniversary",
        "translation": "aniversario",
        "example": "It's our tenth anniversary."
      },
      {
        "word": "boundary",
        "translation": "límite, frontera",
        "example": "The fence marks the boundary."
      },
      {
        "word": "indian",
        "translation": "indio; de la India",
        "example": "I love Indian food."
      },
      {
        "word": "italian",
        "translation": "italiano; italiana",
        "example": "She speaks Italian."
      },
      {
        "word": "impact",
        "translation": "impacto; afectar",
        "example": "The news had a big impact."
      },
      {
        "word": "ward",
        "translation": "sala (de hospital); pupilo",
        "example": "She works in the children's ward."
      },
      {
        "word": "sneak",
        "translation": "colarse, moverse a hurtadillas",
        "example": "He sneaked out of the room."
      },
      {
        "word": "pension",
        "translation": "pensión, jubilación",
        "example": "My grandfather gets a small pension."
      },
      {
        "word": "needle",
        "translation": "aguja",
        "example": "Thread the needle."
      },
      {
        "word": "objection",
        "translation": "objeción",
        "example": "Does anyone have an objection?"
      },
      {
        "word": "widow",
        "translation": "viuda",
        "example": "The widow lives alone."
      },
      {
        "word": "patience",
        "translation": "paciencia",
        "example": "You need a lot of patience."
      },
      {
        "word": "approval",
        "translation": "aprobación",
        "example": "I need your approval."
      },
      {
        "word": "bitter",
        "translation": "amargo; rencoroso",
        "example": "The coffee tastes bitter."
      },
      {
        "word": "impose",
        "translation": "imponer",
        "example": "They imposed a new tax."
      },
      {
        "word": "bake",
        "translation": "hornear, cocer al horno",
        "example": "I bake bread on Sundays."
      },
      {
        "word": "candy",
        "translation": "caramelo, golosina",
        "example": "The kids ate too much candy."
      },
      {
        "word": "chuck",
        "translation": "tirar, lanzar (coloquial)",
        "example": "Chuck me the keys."
      },
      {
        "word": "foster",
        "translation": "fomentar; acoger (en adopción temporal)",
        "example": "The school fosters creativity."
      },
      {
        "word": "agenda",
        "translation": "orden del día, agenda",
        "example": "What's on the agenda today?"
      },
      {
        "word": "championship",
        "translation": "campeonato",
        "example": "They won the championship."
      },
      {
        "word": "conscience",
        "translation": "conciencia (moral)",
        "example": "I have a clear conscience."
      },
      {
        "word": "rebel",
        "translation": "rebelde; rebelarse",
        "example": "The rebels took the town."
      },
      {
        "word": "coward",
        "translation": "cobarde",
        "example": "Don't be a coward."
      },
      {
        "word": "rail",
        "translation": "raíl, barandilla; ferrocarril",
        "example": "Hold the rail on the stairs."
      },
      {
        "word": "efficient",
        "translation": "eficiente",
        "example": "This machine is very efficient."
      },
      {
        "word": "stink",
        "translation": "apestar; peste",
        "example": "The rubbish stinks."
      },
      {
        "word": "patch",
        "translation": "parche; remendar",
        "example": "He sewed a patch on his jeans."
      },
      {
        "word": "storage",
        "translation": "almacenamiento, almacén",
        "example": "There is storage under the bed."
      },
      {
        "word": "shelf",
        "translation": "estante, balda",
        "example": "Put the books on the shelf."
      },
      {
        "word": "concrete",
        "translation": "hormigón; concreto",
        "example": "The wall is made of concrete."
      },
      {
        "word": "definition",
        "translation": "definición",
        "example": "Look up the definition in the dictionary."
      },
      {
        "word": "examination",
        "translation": "examen; revisión",
        "example": "The doctor did a full examination."
      },
      {
        "word": "relieve",
        "translation": "aliviar",
        "example": "This medicine relieves pain."
      },
      {
        "word": "nevertheless",
        "translation": "sin embargo, no obstante",
        "example": "It was raining; nevertheless, we went out."
      },
      {
        "word": "organ",
        "translation": "órgano",
        "example": "The heart is an important organ."
      },
      {
        "word": "survivor",
        "translation": "superviviente",
        "example": "There were three survivors."
      },
      {
        "word": "wed",
        "translation": "casarse",
        "example": "They will wed in June."
      },
      {
        "word": "concentration",
        "translation": "concentración",
        "example": "I lost my concentration."
      },
      {
        "word": "database",
        "translation": "base de datos",
        "example": "The database contains all names."
      },
      {
        "word": "con",
        "translation": "estafa; estafar",
        "example": "It was a con from the start."
      },
      {
        "word": "guilt",
        "translation": "culpa, culpabilidad",
        "example": "He felt guilt about lying."
      },
      {
        "word": "demonstration",
        "translation": "demostración; manifestación",
        "example": "The teacher gave a demonstration."
      },
      {
        "word": "superior",
        "translation": "superior",
        "example": "This product is superior in quality."
      },
      {
        "word": "clay",
        "translation": "arcilla, barro",
        "example": "The pot is made of clay."
      },
      {
        "word": "lap",
        "translation": "regazo; vuelta (carrera)",
        "example": "The cat sat on my lap."
      },
      {
        "word": "fundamental",
        "translation": "fundamental",
        "example": "Respect is fundamental."
      },
      {
        "word": "compliment",
        "translation": "cumplido, elogio; elogiar",
        "example": "Thanks for the compliment."
      },
      {
        "word": "behalf",
        "translation": "nombre (on behalf of: en nombre de)",
        "example": "I speak on behalf of the team."
      },
      {
        "word": "overall",
        "translation": "en general; global",
        "example": "Overall, it was a good trip."
      },
      {
        "word": "loyal",
        "translation": "leal, fiel",
        "example": "The dog is loyal to its owner."
      },
      {
        "word": "visible",
        "translation": "visible",
        "example": "The mountains are visible from here."
      },
      {
        "word": "beard",
        "translation": "barba",
        "example": "He has a long beard."
      },
      {
        "word": "statue",
        "translation": "estatua",
        "example": "The statue stands in the square."
      },
      {
        "word": "mode",
        "translation": "modo",
        "example": "Put your phone in silent mode."
      },
      {
        "word": "christian",
        "translation": "cristiano; cristiana",
        "example": "She is a Christian."
      },
      {
        "word": "solar",
        "translation": "solar",
        "example": "We installed solar panels."
      },
      {
        "word": "offend",
        "translation": "ofender",
        "example": "I didn't mean to offend you."
      },
      {
        "word": "vanish",
        "translation": "desaparecer",
        "example": "The magician made the coin vanish."
      },
      {
        "word": "enable",
        "translation": "permitir, habilitar",
        "example": "This tool enables us to work faster."
      },
      {
        "word": "convict",
        "translation": "condenar; convicto",
        "example": "He was convicted of fraud."
      },
      {
        "word": "kit",
        "translation": "kit, equipo",
        "example": "Take the first aid kit."
      },
      {
        "word": "await",
        "translation": "esperar, aguardar",
        "example": "We await your reply."
      },
      {
        "word": "welfare",
        "translation": "bienestar; asistencia social",
        "example": "They care about the children's welfare."
      },
      {
        "word": "instinct",
        "translation": "instinto",
        "example": "Trust your instinct."
      },
      {
        "word": "critic",
        "translation": "crítico, crítica",
        "example": "The critic liked the film."
      },
      {
        "word": "blanket",
        "translation": "manta",
        "example": "I need an extra blanket."
      },
      {
        "word": "ex",
        "translation": "ex (expareja)",
        "example": "She met her ex at the party."
      },
      {
        "word": "downtown",
        "translation": "centro (de la ciudad); al centro",
        "example": "We went downtown to shop."
      },
      {
        "word": "sufficient",
        "translation": "suficiente",
        "example": "Ten euros should be sufficient."
      },
      {
        "word": "uncomfortable",
        "translation": "incómodo",
        "example": "This chair is uncomfortable."
      },
      {
        "word": "meantime",
        "translation": "mientras tanto (in the meantime)",
        "example": "In the meantime, relax."
      },
      {
        "word": "powder",
        "translation": "polvo",
        "example": "Mix the powder with water."
      },
      {
        "word": "environmental",
        "translation": "medioambiental, ambiental",
        "example": "Environmental protection is important."
      },
      {
        "word": "chant",
        "translation": "cántico; corear",
        "example": "The crowd began to chant."
      },
      {
        "word": "tragedy",
        "translation": "tragedia",
        "example": "The accident was a tragedy."
      },
      {
        "word": "anxiety",
        "translation": "ansiedad",
        "example": "She suffers from anxiety."
      },
      {
        "word": "heel",
        "translation": "talón; tacón",
        "example": "My heel hurts."
      },
      {
        "word": "poll",
        "translation": "encuesta; sondear",
        "example": "The latest poll shows a tie."
      },
      {
        "word": "pan",
        "translation": "sartén, cazuela",
        "example": "Heat the oil in a pan."
      },
      {
        "word": "portrait",
        "translation": "retrato",
        "example": "She painted a portrait of her mother."
      },
      {
        "word": "considerable",
        "translation": "considerable",
        "example": "It cost a considerable amount of money."
      },
      {
        "word": "chew",
        "translation": "masticar, mascar",
        "example": "Chew your food slowly."
      },
      {
        "word": "assignment",
        "translation": "tarea, trabajo asignado",
        "example": "I have to finish my assignment."
      },
      {
        "word": "craft",
        "translation": "artesanía; oficio",
        "example": "She sells local crafts."
      },
      {
        "word": "poverty",
        "translation": "pobreza",
        "example": "Poverty is a global problem."
      },
      {
        "word": "laboratory",
        "translation": "laboratorio",
        "example": "The experiment is in the laboratory."
      },
      {
        "word": "psychological",
        "translation": "psicológico",
        "example": "It's a psychological problem."
      },
      {
        "word": "independence",
        "translation": "independencia",
        "example": "The country won its independence."
      },
      {
        "word": "deed",
        "translation": "hecho, acción; escritura",
        "example": "He was praised for his good deed."
      },
      {
        "word": "romance",
        "translation": "romance, historia de amor",
        "example": "It's a classic romance."
      },
      {
        "word": "phenomenon",
        "translation": "fenómeno",
        "example": "Rainbows are a natural phenomenon."
      },
      {
        "word": "raid",
        "translation": "redada, incursión; asaltar",
        "example": "The police made a raid last night."
      },
      {
        "word": "selection",
        "translation": "selección",
        "example": "The shop has a wide selection."
      },
      {
        "word": "curve",
        "translation": "curva",
        "example": "The road has a sharp curve."
      },
      {
        "word": "merry",
        "translation": "alegre, feliz",
        "example": "Merry Christmas!"
      },
      {
        "word": "weed",
        "translation": "mala hierba; maleza",
        "example": "I pulled the weeds from the garden."
      },
      {
        "word": "maker",
        "translation": "fabricante, creador",
        "example": "The maker of the toy is famous."
      },
      {
        "word": "satellite",
        "translation": "satélite",
        "example": "The satellite orbits the Earth."
      },
      {
        "word": "yield",
        "translation": "producir, ceder; rendimiento",
        "example": "The farm yields good crops."
      },
      {
        "word": "liberty",
        "translation": "libertad",
        "example": "Liberty is a basic right."
      },
      {
        "word": "mud",
        "translation": "barro, lodo",
        "example": "My shoes are covered in mud."
      },
      {
        "word": "engagement",
        "translation": "compromiso (matrimonial); participación",
        "example": "They announced their engagement."
      },
      {
        "word": "palm",
        "translation": "palma (de la mano); palmera",
        "example": "She held a coin in her palm."
      },
      {
        "word": "beam",
        "translation": "rayo, haz; viga; sonreír",
        "example": "A beam of light came through the window."
      },
      {
        "word": "vampire",
        "translation": "vampiro",
        "example": "The film is about a vampire."
      },
      {
        "word": "africa",
        "translation": "África",
        "example": "Kenya is in Africa."
      },
      {
        "word": "bounce",
        "translation": "rebotar; rebote",
        "example": "The ball bounced twice."
      },
      {
        "word": "consume",
        "translation": "consumir",
        "example": "This car consumes a lot of fuel."
      },
      {
        "word": "deaf",
        "translation": "sordo",
        "example": "He is deaf in one ear."
      },
      {
        "word": "arrow",
        "translation": "flecha",
        "example": "Follow the arrow."
      },
      {
        "word": "reliable",
        "translation": "fiable, de confianza",
        "example": "He is a reliable worker."
      },
      {
        "word": "convinced",
        "translation": "convencido",
        "example": "I'm convinced he is right."
      },
      {
        "word": "barrier",
        "translation": "barrera",
        "example": "Language can be a barrier."
      },
      {
        "word": "missile",
        "translation": "misil",
        "example": "The missile was launched at dawn."
      },
      {
        "word": "dine",
        "translation": "cenar",
        "example": "We dine at eight."
      },
      {
        "word": "someday",
        "translation": "algún día",
        "example": "Someday I will visit Japan."
      },
      {
        "word": "humanity",
        "translation": "humanidad",
        "example": "Humanity faces many challenges."
      },
      {
        "word": "remark",
        "translation": "comentario, observación; comentar",
        "example": "He made a rude remark."
      },
      {
        "word": "elevator",
        "translation": "ascensor",
        "example": "Take the elevator to the fifth floor."
      },
      {
        "word": "loyalty",
        "translation": "lealtad",
        "example": "I value loyalty in friends."
      },
      {
        "word": "construct",
        "translation": "construir",
        "example": "They will construct a new bridge."
      },
      {
        "word": "drain",
        "translation": "desagüe; drenar, vaciar",
        "example": "The drain is blocked."
      },
      {
        "word": "opposition",
        "translation": "oposición",
        "example": "There was strong opposition to the plan."
      },
      {
        "word": "highway",
        "translation": "autopista, carretera",
        "example": "The highway was closed due to snow."
      },
      {
        "word": "whale",
        "translation": "ballena",
        "example": "We saw a whale in the ocean."
      },
      {
        "word": "noon",
        "translation": "mediodía",
        "example": "Lunch is at noon."
      },
      {
        "word": "fond",
        "translation": "aficionado, cariñoso (be fond of)",
        "example": "I'm fond of old movies."
      },
      {
        "word": "tense",
        "translation": "tenso; tiempo verbal",
        "example": "The atmosphere was tense."
      },
      {
        "word": "marvelous",
        "translation": "maravilloso",
        "example": "We had a marvelous holiday."
      },
      {
        "word": "dock",
        "translation": "muelle; atracar",
        "example": "The ship is at the dock."
      },
      {
        "word": "bucket",
        "translation": "cubo",
        "example": "Fill the bucket with water."
      },
      {
        "word": "destiny",
        "translation": "destino",
        "example": "She believes in destiny."
      },
      {
        "word": "exhibition",
        "translation": "exposición",
        "example": "We visited an art exhibition."
      },
      {
        "word": "corn",
        "translation": "maíz",
        "example": "The farmer grows corn."
      },
      {
        "word": "mortgage",
        "translation": "hipoteca",
        "example": "They pay a mortgage every month."
      },
      {
        "word": "shatter",
        "translation": "romper(se) en pedazos, hacer añicos",
        "example": "The glass shattered on the floor."
      },
      {
        "word": "steam",
        "translation": "vapor",
        "example": "Steam rose from the soup."
      },
      {
        "word": "oxygen",
        "translation": "oxígeno",
        "example": "We need oxygen to breathe."
      },
      {
        "word": "eve",
        "translation": "víspera, nochebuena (Christmas Eve)",
        "example": "We celebrate on Christmas Eve."
      },
      {
        "word": "mill",
        "translation": "molino; fábrica",
        "example": "The old mill is by the river."
      },
      {
        "word": "venture",
        "translation": "aventura, empresa arriesgada; aventurarse",
        "example": "It's a new business venture."
      },
      {
        "word": "jeez",
        "translation": "¡caray!, ¡madre mía!",
        "example": "Jeez, it's so hot today!"
      },
      {
        "word": "chaos",
        "translation": "caos",
        "example": "The city was in chaos."
      },
      {
        "word": "emperor",
        "translation": "emperador",
        "example": "The emperor ruled for forty years."
      },
      {
        "word": "dominate",
        "translation": "dominar",
        "example": "The team dominated the match."
      },
      {
        "word": "distribute",
        "translation": "distribuir, repartir",
        "example": "They distribute food to the poor."
      },
      {
        "word": "invisible",
        "translation": "invisible",
        "example": "The wind is invisible."
      },
      {
        "word": "nest",
        "translation": "nido",
        "example": "The bird built a nest in the tree."
      },
      {
        "word": "achievement",
        "translation": "logro",
        "example": "Graduating was a great achievement."
      },
      {
        "word": "conservative",
        "translation": "conservador",
        "example": "He has conservative views."
      },
      {
        "word": "robbery",
        "translation": "robo, atraco",
        "example": "There was a robbery at the bank."
      },
      {
        "word": "fleet",
        "translation": "flota",
        "example": "The company has a fleet of trucks."
      },
      {
        "word": "cock",
        "translation": "gallo; pene (vulgar)",
        "example": "The cock crows at dawn."
      },
      {
        "word": "explosive",
        "translation": "explosivo",
        "example": "The material is highly explosive."
      },
      {
        "word": "drawer",
        "translation": "cajón",
        "example": "The keys are in the drawer."
      },
      {
        "word": "percentage",
        "translation": "porcentaje",
        "example": "What percentage of students passed?"
      },
      {
        "word": "suitcase",
        "translation": "maleta",
        "example": "My suitcase is very heavy."
      },
      {
        "word": "worthy",
        "translation": "digno, merecedor",
        "example": "She is worthy of the prize."
      },
      {
        "word": "magical",
        "translation": "mágico",
        "example": "It was a magical night."
      },
      {
        "word": "maid",
        "translation": "criada, empleada doméstica",
        "example": "The maid cleaned the room."
      },
      {
        "word": "pa",
        "translation": "papá (coloquial)",
        "example": "Pa, can I borrow the car?"
      },
      {
        "word": "warehouse",
        "translation": "almacén",
        "example": "The goods are in the warehouse."
      },
      {
        "word": "premise",
        "translation": "premisa; local (premises)",
        "example": "The argument has a false premise."
      },
      {
        "word": "thunder",
        "translation": "trueno; tronar",
        "example": "We heard thunder in the distance."
      },
      {
        "word": "snack",
        "translation": "aperitivo, tentempié, merienda",
        "example": "I had a snack before dinner."
      },
      {
        "word": "worm",
        "translation": "gusano, lombriz",
        "example": "A bird caught a worm."
      },
      {
        "word": "adapt",
        "translation": "adaptar(se)",
        "example": "You must adapt to the new situation."
      },
      {
        "word": "armor",
        "translation": "armadura, blindaje",
        "example": "The knight wore heavy armor."
      },
      {
        "word": "retreat",
        "translation": "retirada; retirarse",
        "example": "The army had to retreat."
      },
      {
        "word": "counselor",
        "translation": "consejero, consejera",
        "example": "The school counselor helped him."
      },
      {
        "word": "communist",
        "translation": "comunista",
        "example": "He was a member of the communist party."
      },
      {
        "word": "backward",
        "translation": "hacia atrás; atrasado",
        "example": "Take one step backward."
      },
      {
        "word": "pee",
        "translation": "orinar; pipí (coloquial)",
        "example": "The child needs to pee."
      },
      {
        "word": "trauma",
        "translation": "trauma",
        "example": "He suffered a childhood trauma."
      },
      {
        "word": "hence",
        "translation": "por lo tanto, de ahí",
        "example": "He is ill, hence his absence."
      },
      {
        "word": "humble",
        "translation": "humilde",
        "example": "He is a humble man."
      },
      {
        "word": "stairs",
        "translation": "escaleras",
        "example": "Take the stairs to the second floor."
      },
      {
        "word": "civilization",
        "translation": "civilización",
        "example": "Ancient civilizations built great cities."
      },
      {
        "word": "rapidly",
        "translation": "rápidamente",
        "example": "The city is growing rapidly."
      },
      {
        "word": "junk",
        "translation": "trastos, basura",
        "example": "The garage is full of junk."
      },
      {
        "word": "ancestor",
        "translation": "antepasado",
        "example": "My ancestors came from Italy."
      },
      {
        "word": "ambassador",
        "translation": "embajador, embajadora",
        "example": "The ambassador met the president."
      },
      {
        "word": "horror",
        "translation": "horror",
        "example": "She watched in horror."
      },
      {
        "word": "employment",
        "translation": "empleo",
        "example": "He is looking for employment."
      },
      {
        "word": "grain",
        "translation": "grano, cereal",
        "example": "They store grain in the barn."
      },
      {
        "word": "accord",
        "translation": "acuerdo; concordar",
        "example": "They signed a peace accord."
      },
      {
        "word": "chap",
        "translation": "tipo, tío (coloquial británico)",
        "example": "He's a nice chap."
      },
      {
        "word": "relatively",
        "translation": "relativamente",
        "example": "The test was relatively easy."
      },
      {
        "word": "lamb",
        "translation": "cordero",
        "example": "We had roast lamb for dinner."
      },
      {
        "word": "medication",
        "translation": "medicación, medicamento",
        "example": "Take your medication twice a day."
      },
      {
        "word": "amen",
        "translation": "amén",
        "example": "They said amen at the end of the prayer."
      },
      {
        "word": "tournament",
        "translation": "torneo",
        "example": "He won the tennis tournament."
      },
      {
        "word": "medal",
        "translation": "medalla",
        "example": "She won a gold medal."
      },
      {
        "word": "protein",
        "translation": "proteína",
        "example": "Eggs are rich in protein."
      },
      {
        "word": "divine",
        "translation": "divino",
        "example": "The food was divine."
      },
      {
        "word": "confusion",
        "translation": "confusión",
        "example": "There was confusion at the station."
      },
      {
        "word": "pillow",
        "translation": "almohada",
        "example": "I need a softer pillow."
      },
      {
        "word": "serial",
        "translation": "en serie; serial",
        "example": "It's a serial number."
      },
      {
        "word": "feather",
        "translation": "pluma",
        "example": "The bird lost a feather."
      },
      {
        "word": "sailor",
        "translation": "marinero, marinera",
        "example": "The sailor loves the sea."
      },
      {
        "word": "abortion",
        "translation": "aborto",
        "example": "Abortion is a controversial topic."
      },
      {
        "word": "worship",
        "translation": "culto, adoración; adorar",
        "example": "They go to a place of worship on Sundays."
      },
      {
        "word": "evolution",
        "translation": "evolución",
        "example": "Darwin explained evolution."
      },
      {
        "word": "occasionally",
        "translation": "ocasionalmente, de vez en cuando",
        "example": "We occasionally eat out."
      },
      {
        "word": "supper",
        "translation": "cena",
        "example": "What's for supper tonight?"
      },
      {
        "word": "tattoo",
        "translation": "tatuaje; tatuar",
        "example": "He has a tattoo on his arm."
      },
      {
        "word": "virgin",
        "translation": "virgen",
        "example": "The virgin forest is protected."
      },
      {
        "word": "addict",
        "translation": "adicto, adicta",
        "example": "He is a coffee addict."
      },
      {
        "word": "satisfaction",
        "translation": "satisfacción",
        "example": "Customer satisfaction is our goal."
      },
      {
        "word": "fraud",
        "translation": "fraude",
        "example": "He was arrested for fraud."
      },
      {
        "word": "bruise",
        "translation": "moratón, hematoma; magullar",
        "example": "I have a bruise on my leg."
      },
      {
        "word": "robin",
        "translation": "petirrojo",
        "example": "A robin sat on the fence."
      },
      {
        "word": "balloon",
        "translation": "globo",
        "example": "The child holds a red balloon."
      },
      {
        "word": "fabulous",
        "translation": "fabuloso",
        "example": "You look fabulous!"
      },
      {
        "word": "pregnancy",
        "translation": "embarazo",
        "example": "Her pregnancy is going well."
      },
      {
        "word": "grief",
        "translation": "dolor, pena (por una pérdida)",
        "example": "She was overcome with grief."
      },
      {
        "word": "fist",
        "translation": "puño",
        "example": "He clenched his fist."
      },
      {
        "word": "prosecutor",
        "translation": "fiscal",
        "example": "The prosecutor questioned the witness."
      },
      {
        "word": "logic",
        "translation": "lógica",
        "example": "Your logic is correct."
      },
      {
        "word": "testimony",
        "translation": "testimonio",
        "example": "Her testimony helped the case."
      },
      {
        "word": "airplane",
        "translation": "avión",
        "example": "The airplane took off on time."
      },
      {
        "word": "rehearsal",
        "translation": "ensayo",
        "example": "The rehearsal starts at six."
      },
      {
        "word": "spike",
        "translation": "pincho, pico; subida repentina",
        "example": "There was a spike in prices."
      },
      {
        "word": "puzzle",
        "translation": "rompecabezas, puzle; desconcertar",
        "example": "The child loves puzzles."
      },
      {
        "word": "seize",
        "translation": "agarrar, apoderarse de",
        "example": "Police seized the stolen goods."
      },
      {
        "word": "comic",
        "translation": "cómico; cómic",
        "example": "He reads comic books."
      },
      {
        "word": "temper",
        "translation": "genio, carácter; mal genio",
        "example": "He has a bad temper."
      },
      {
        "word": "carbon",
        "translation": "carbono",
        "example": "Carbon dioxide warms the planet."
      },
      {
        "word": "vow",
        "translation": "promesa solemne; jurar",
        "example": "They exchanged wedding vows."
      },
      {
        "word": "plug",
        "translation": "enchufe; tapón; enchufar",
        "example": "Plug the lamp into the wall."
      },
      {
        "word": "mechanism",
        "translation": "mecanismo",
        "example": "The clock has a complex mechanism."
      },
      {
        "word": "prospect",
        "translation": "perspectiva, posibilidad",
        "example": "The prospect of rain worried us."
      },
      {
        "word": "mall",
        "translation": "centro comercial",
        "example": "We went to the mall to shop."
      },
      {
        "word": "precise",
        "translation": "preciso, exacto",
        "example": "Give me precise instructions."
      },
      {
        "word": "component",
        "translation": "componente",
        "example": "Each component is tested."
      },
      {
        "word": "tragic",
        "translation": "trágico",
        "example": "It was a tragic accident."
      },
      {
        "word": "unexpected",
        "translation": "inesperado",
        "example": "We had an unexpected visitor."
      },
      {
        "word": "initiative",
        "translation": "iniciativa",
        "example": "She showed great initiative."
      },
      {
        "word": "barrel",
        "translation": "barril",
        "example": "The wine is kept in a barrel."
      },
      {
        "word": "knight",
        "translation": "caballero (medieval)",
        "example": "The knight rode a white horse."
      },
      {
        "word": "magnificent",
        "translation": "magnífico",
        "example": "The palace is magnificent."
      },
      {
        "word": "academic",
        "translation": "académico",
        "example": "Academic results are important."
      },
      {
        "word": "biological",
        "translation": "biológico",
        "example": "It's a biological process."
      },
      {
        "word": "edition",
        "translation": "edición",
        "example": "This is the second edition of the book."
      },
      {
        "word": "cooperation",
        "translation": "cooperación",
        "example": "Thank you for your cooperation."
      },
      {
        "word": "stall",
        "translation": "puesto (de mercado); calar(se)",
        "example": "She sells fruit at a market stall."
      },
      {
        "word": "bum",
        "translation": "vagabundo; trasero (coloquial)",
        "example": "A bum was sleeping on the bench."
      },
      {
        "word": "rig",
        "translation": "equipo, plataforma; amañar",
        "example": "He works on an oil rig."
      },
      {
        "word": "bargain",
        "translation": "ganga; negociar",
        "example": "This jacket was a bargain."
      },
      {
        "word": "bro",
        "translation": "hermano, colega (coloquial)",
        "example": "Hey bro, how are you?"
      },
      {
        "word": "parade",
        "translation": "desfile",
        "example": "We watched the parade."
      },
      {
        "word": "infect",
        "translation": "infectar, contagiar",
        "example": "The virus can infect anyone."
      },
      {
        "word": "trend",
        "translation": "tendencia",
        "example": "It's a new fashion trend."
      },
      {
        "word": "scholar",
        "translation": "erudito, estudioso",
        "example": "He is a famous scholar."
      },
      {
        "word": "doom",
        "translation": "perdición, fatalidad; condenar",
        "example": "They felt a sense of doom."
      },
      {
        "word": "bravo",
        "translation": "¡bravo!",
        "example": "The audience shouted bravo."
      },
      {
        "word": "ram",
        "translation": "carnero; embestir",
        "example": "The ram has big horns."
      },
      {
        "word": "shark",
        "translation": "tiburón",
        "example": "We saw a shark in the sea."
      },
      {
        "word": "cart",
        "translation": "carro, carrito",
        "example": "Push the shopping cart."
      },
      {
        "word": "flush",
        "translation": "tirar de la cadena; enrojecer",
        "example": "Don't forget to flush the toilet."
      },
      {
        "word": "shrink",
        "translation": "encoger(se), reducir(se)",
        "example": "My sweater shrank in the wash."
      },
      {
        "word": "cooperate",
        "translation": "cooperar",
        "example": "They agreed to cooperate."
      },
      {
        "word": "disguise",
        "translation": "disfrazar, disimular; disfraz",
        "example": "He wore a disguise."
      },
      {
        "word": "spray",
        "translation": "rociar; aerosol",
        "example": "Spray the plants with water."
      },
      {
        "word": "doc",
        "translation": "doctor, médico (coloquial)",
        "example": "Hey doc, how is he?"
      },
      {
        "word": "ritual",
        "translation": "ritual",
        "example": "Coffee is part of my morning ritual."
      },
      {
        "word": "sore",
        "translation": "dolorido; llaga",
        "example": "My throat is sore."
      },
      {
        "word": "barn",
        "translation": "granero",
        "example": "The hay is in the barn."
      },
      {
        "word": "bud",
        "translation": "brote, capullo; colega (coloquial)",
        "example": "The tree has new buds."
      },
      {
        "word": "bail",
        "translation": "fianza; achicar",
        "example": "He was released on bail."
      },
      {
        "word": "summon",
        "translation": "convocar, citar",
        "example": "The judge summoned the witness."
      },
      {
        "word": "requirement",
        "translation": "requisito",
        "example": "Age is a requirement for the job."
      },
      {
        "word": "shortly",
        "translation": "pronto, en breve",
        "example": "The train will arrive shortly."
      },
      {
        "word": "arch",
        "translation": "arco",
        "example": "We walked under the stone arch."
      },
      {
        "word": "kidney",
        "translation": "riñón",
        "example": "The kidney filters the blood."
      },
      {
        "word": "gee",
        "translation": "¡caramba!",
        "example": "Gee, thanks a lot!"
      },
      {
        "word": "traitor",
        "translation": "traidor, traidora",
        "example": "He was called a traitor."
      },
      {
        "word": "ultimate",
        "translation": "definitivo, máximo",
        "example": "This is the ultimate challenge."
      },
      {
        "word": "allege",
        "translation": "alegar, afirmar",
        "example": "The police allege that he stole it."
      },
      {
        "word": "comparison",
        "translation": "comparación",
        "example": "There is no comparison."
      },
      {
        "word": "rapid",
        "translation": "rápido",
        "example": "We saw rapid progress."
      },
      {
        "word": "basket",
        "translation": "cesta, cesto",
        "example": "The basket is full of apples."
      },
      {
        "word": "disappointed",
        "translation": "decepcionado",
        "example": "I'm disappointed with the result."
      },
      {
        "word": "rap",
        "translation": "rap; golpear",
        "example": "He listens to rap music."
      },
      {
        "word": "duke",
        "translation": "duque",
        "example": "The duke lives in a castle."
      },
      {
        "word": "dispute",
        "translation": "disputa; discutir",
        "example": "They had a dispute over money."
      },
      {
        "word": "urban",
        "translation": "urbano",
        "example": "Urban life is busy."
      },
      {
        "word": "wrist",
        "translation": "muñeca (de la mano)",
        "example": "He wears a watch on his wrist."
      },
      {
        "word": "garbage",
        "translation": "basura",
        "example": "Take out the garbage, please."
      },
      {
        "word": "universal",
        "translation": "universal",
        "example": "Music is a universal language."
      },
      {
        "word": "liberal",
        "translation": "liberal",
        "example": "She has liberal opinions."
      },
      {
        "word": "halfway",
        "translation": "a mitad de camino",
        "example": "We are halfway there."
      },
      {
        "word": "cruise",
        "translation": "crucero; navegar",
        "example": "They went on a Mediterranean cruise."
      },
      {
        "word": "roast",
        "translation": "asar; asado",
        "example": "Roast the chicken for an hour."
      },
      {
        "word": "thumb",
        "translation": "pulgar",
        "example": "I hit my thumb with the hammer."
      },
      {
        "word": "suspicion",
        "translation": "sospecha",
        "example": "I have a suspicion he is lying."
      },
      {
        "word": "sew",
        "translation": "coser",
        "example": "She can sew her own clothes."
      },
      {
        "word": "delicate",
        "translation": "delicado",
        "example": "Be careful, it's very delicate."
      },
      {
        "word": "flavor",
        "translation": "sabor",
        "example": "I like the chocolate flavor."
      },
      {
        "word": "closet",
        "translation": "armario (ropero)",
        "example": "My clothes are in the closet."
      },
      {
        "word": "carol",
        "translation": "villancico",
        "example": "They sang a Christmas carol."
      },
      {
        "word": "gossip",
        "translation": "cotilleo, chisme; cotillear",
        "example": "I don't like office gossip."
      },
      {
        "word": "photographer",
        "translation": "fotógrafo, fotógrafa",
        "example": "The photographer took many pictures."
      },
      {
        "word": "regardless",
        "translation": "sin importar, a pesar de todo",
        "example": "We'll go, regardless of the weather."
      },
      {
        "word": "tease",
        "translation": "burlarse, tomar el pelo",
        "example": "Stop teasing your little brother."
      },
      {
        "word": "anticipate",
        "translation": "anticipar, prever",
        "example": "We anticipate heavy traffic."
      },
      {
        "word": "neglect",
        "translation": "descuidar; descuido",
        "example": "Don't neglect your health."
      },
      {
        "word": "unfortunate",
        "translation": "desafortunado",
        "example": "It was an unfortunate mistake."
      },
      {
        "word": "excite",
        "translation": "emocionar, entusiasmar",
        "example": "The idea excites me."
      },
      {
        "word": "combat",
        "translation": "combate; combatir",
        "example": "The soldiers were trained for combat."
      },
      {
        "word": "fella",
        "translation": "tío, tipo (coloquial)",
        "example": "He's a friendly fella."
      },
      {
        "word": "privacy",
        "translation": "privacidad, intimidad",
        "example": "I need some privacy."
      },
      {
        "word": "wisdom",
        "translation": "sabiduría",
        "example": "With age comes wisdom."
      },
      {
        "word": "portion",
        "translation": "porción, ración",
        "example": "The portion was too big for me."
      },
      {
        "word": "rib",
        "translation": "costilla",
        "example": "He broke a rib."
      },
      {
        "word": "criticize",
        "translation": "criticar",
        "example": "Don't criticize without reason."
      },
      {
        "word": "grip",
        "translation": "agarre; agarrar",
        "example": "Keep a firm grip on the rope."
      },
      {
        "word": "butterfly",
        "translation": "mariposa",
        "example": "A butterfly landed on my hand."
      },
      {
        "word": "bold",
        "translation": "audaz, atrevido; negrita",
        "example": "It was a bold decision."
      },
      {
        "word": "recognition",
        "translation": "reconocimiento",
        "example": "She received recognition for her work."
      },
      {
        "word": "pussy",
        "translation": "gatito (coloquial); vulgar (genitales)",
        "example": "The little pussy slept on the sofa."
      },
      {
        "word": "harsh",
        "translation": "duro, severo, áspero",
        "example": "The winter here is harsh."
      },
      {
        "word": "consumer",
        "translation": "consumidor, consumidora",
        "example": "Consumers want lower prices."
      },
      {
        "word": "unconscious",
        "translation": "inconsciente",
        "example": "He was unconscious for ten minutes."
      },
      {
        "word": "formation",
        "translation": "formación",
        "example": "The formation of ice takes time."
      },
      {
        "word": "unfair",
        "translation": "injusto",
        "example": "That's unfair!"
      },
      {
        "word": "province",
        "translation": "provincia",
        "example": "Salamanca is a province in Spain."
      },
      {
        "word": "zoo",
        "translation": "zoo, zoológico",
        "example": "The kids love the zoo."
      },
      {
        "word": "terror",
        "translation": "terror",
        "example": "She screamed in terror."
      },
      {
        "word": "clown",
        "translation": "payaso",
        "example": "The clown made the kids laugh."
      },
      {
        "word": "whiskey",
        "translation": "whisky",
        "example": "He drank a glass of whiskey."
      },
      {
        "word": "vulnerable",
        "translation": "vulnerable",
        "example": "Children are vulnerable."
      },
      {
        "word": "amuse",
        "translation": "divertir, entretener",
        "example": "The joke amused everyone."
      },
      {
        "word": "peer",
        "translation": "compañero, igual; mirar con atención",
        "example": "He is respected by his peers."
      },
      {
        "word": "alliance",
        "translation": "alianza",
        "example": "The two countries formed an alliance."
      },
      {
        "word": "helmet",
        "translation": "casco",
        "example": "Wear a helmet when you ride a bike."
      },
      {
        "word": "avenue",
        "translation": "avenida",
        "example": "They live on a wide avenue."
      },
      {
        "word": "pathetic",
        "translation": "patético, lamentable",
        "example": "That was a pathetic excuse."
      },
      {
        "word": "reservation",
        "translation": "reserva",
        "example": "I have a reservation for two."
      },
      {
        "word": "maintenance",
        "translation": "mantenimiento",
        "example": "The elevator is under maintenance."
      },
      {
        "word": "plead",
        "translation": "suplicar; declararse (ante un tribunal)",
        "example": "He pleaded not guilty."
      },
      {
        "word": "refugee",
        "translation": "refugiado, refugiada",
        "example": "Many refugees crossed the border."
      },
      {
        "word": "highlight",
        "translation": "destacar; momento culminante",
        "example": "Highlight the important words."
      },
      {
        "word": "coordinate",
        "translation": "coordinar; coordenada",
        "example": "She coordinates the whole team."
      },
      {
        "word": "stun",
        "translation": "aturdir, dejar atónito",
        "example": "The news stunned everyone."
      },
      {
        "word": "ranger",
        "translation": "guarda forestal",
        "example": "The ranger showed us the trail."
      },
      {
        "word": "extension",
        "translation": "ampliación, prórroga; extensión",
        "example": "I asked for an extension."
      },
      {
        "word": "overwhelm",
        "translation": "abrumar, desbordar",
        "example": "The work overwhelmed him."
      },
      {
        "word": "brutal",
        "translation": "brutal",
        "example": "It was a brutal attack."
      },
      {
        "word": "mighty",
        "translation": "poderoso, potente",
        "example": "The mighty river flows to the sea."
      },
      {
        "word": "competitive",
        "translation": "competitivo",
        "example": "She is very competitive."
      },
      {
        "word": "gravity",
        "translation": "gravedad",
        "example": "Gravity pulls objects down."
      },
      {
        "word": "wallet",
        "translation": "cartera, billetera",
        "example": "I lost my wallet."
      },
      {
        "word": "utter",
        "translation": "pronunciar; total, absoluto",
        "example": "He didn't utter a word."
      },
      {
        "word": "dot",
        "translation": "punto",
        "example": "Put a dot at the end."
      },
      {
        "word": "activate",
        "translation": "activar",
        "example": "Activate the alarm before leaving."
      },
      {
        "word": "organic",
        "translation": "orgánico, ecológico",
        "example": "I buy organic vegetables."
      },
      {
        "word": "assumption",
        "translation": "suposición",
        "example": "That's a false assumption."
      },
      {
        "word": "educational",
        "translation": "educativo",
        "example": "It was an educational trip."
      },
      {
        "word": "hunger",
        "translation": "hambre",
        "example": "Hunger is a serious problem."
      },
      {
        "word": "glance",
        "translation": "mirada rápida; echar un vistazo",
        "example": "She glanced at her watch."
      },
      {
        "word": "hut",
        "translation": "cabaña, choza",
        "example": "They slept in a mountain hut."
      },
      {
        "word": "collar",
        "translation": "cuello (de camisa); collar",
        "example": "The dog wears a red collar."
      },
      {
        "word": "halt",
        "translation": "detener(se); parada",
        "example": "The train came to a halt."
      },
      {
        "word": "unemployment",
        "translation": "desempleo, paro",
        "example": "Unemployment is rising."
      },
      {
        "word": "corpse",
        "translation": "cadáver",
        "example": "The police found a corpse."
      },
      {
        "word": "scandal",
        "translation": "escándalo",
        "example": "The scandal ruined his career."
      },
      {
        "word": "conspiracy",
        "translation": "conspiración",
        "example": "They uncovered a conspiracy."
      },
      {
        "word": "spiritual",
        "translation": "espiritual",
        "example": "She is a very spiritual person."
      },
      {
        "word": "sunshine",
        "translation": "luz del sol, sol",
        "example": "I love the morning sunshine."
      },
      {
        "word": "container",
        "translation": "recipiente, contenedor",
        "example": "Store the rice in a container."
      },
      {
        "word": "altogether",
        "translation": "en total; del todo",
        "example": "It costs fifty euros altogether."
      },
      {
        "word": "contrary",
        "translation": "contrario",
        "example": "Contrary to popular belief, it's safe."
      },
      {
        "word": "interior",
        "translation": "interior",
        "example": "The interior of the house is modern."
      },
      {
        "word": "specialize",
        "translation": "especializarse",
        "example": "She specializes in children's medicine."
      },
      {
        "word": "tackle",
        "translation": "abordar; placar",
        "example": "We must tackle this problem now."
      },
      {
        "word": "documentary",
        "translation": "documental",
        "example": "We watched a documentary about whales."
      },
      {
        "word": "extract",
        "translation": "extraer; extracto",
        "example": "The dentist extracted a tooth."
      },
      {
        "word": "selfish",
        "translation": "egoísta",
        "example": "Don't be so selfish."
      },
      {
        "word": "mock",
        "translation": "burlarse de; falso, simulado",
        "example": "Don't mock other people."
      },
      {
        "word": "roman",
        "translation": "romano; romana",
        "example": "They visited a Roman bridge."
      },
      {
        "word": "weep",
        "translation": "llorar",
        "example": "She wept with joy."
      },
      {
        "word": "stadium",
        "translation": "estadio",
        "example": "The stadium holds 60,000 people."
      },
      {
        "word": "absurd",
        "translation": "absurdo",
        "example": "That's an absurd idea."
      },
      {
        "word": "cocktail",
        "translation": "cóctel",
        "example": "Would you like a cocktail?"
      },
      {
        "word": "foul",
        "translation": "asqueroso; falta (deporte)",
        "example": "The water had a foul smell."
      },
      {
        "word": "sting",
        "translation": "picadura; picar",
        "example": "A bee stung me."
      },
      {
        "word": "splendid",
        "translation": "espléndido",
        "example": "It was a splendid party."
      },
      {
        "word": "typically",
        "translation": "típicamente, normalmente",
        "example": "Typically, I wake up at seven."
      },
      {
        "word": "bye-bye",
        "translation": "adiós (informal)",
        "example": "Say bye-bye to grandma."
      },
      {
        "word": "drift",
        "translation": "ir a la deriva, dejarse llevar",
        "example": "The boat drifted down the river."
      },
      {
        "word": "ant",
        "translation": "hormiga",
        "example": "An ant is carrying a leaf."
      },
      {
        "word": "companion",
        "translation": "compañero, compañera",
        "example": "The dog is his loyal companion."
      },
      {
        "word": "stitch",
        "translation": "puntada, punto; coser",
        "example": "The doctor put in five stitches."
      },
      {
        "word": "photography",
        "translation": "fotografía (arte)",
        "example": "She studies photography."
      },
      {
        "word": "certificate",
        "translation": "certificado",
        "example": "She received a certificate."
      },
      {
        "word": "overseas",
        "translation": "en el extranjero, ultramar",
        "example": "He works overseas."
      },
      {
        "word": "anonymous",
        "translation": "anónimo",
        "example": "The letter was anonymous."
      },
      {
        "word": "protocol",
        "translation": "protocolo",
        "example": "We follow the safety protocol."
      },
      {
        "word": "moreover",
        "translation": "además, por otra parte",
        "example": "Moreover, it's very cheap."
      },
      {
        "word": "mixture",
        "translation": "mezcla",
        "example": "Stir the mixture well."
      },
      {
        "word": "bench",
        "translation": "banco",
        "example": "We sat on a park bench."
      },
      {
        "word": "virtually",
        "translation": "prácticamente",
        "example": "It's virtually impossible."
      },
      {
        "word": "spark",
        "translation": "chispa; provocar",
        "example": "A spark started the fire."
      },
      {
        "word": "endure",
        "translation": "soportar, aguantar",
        "example": "They endured a long winter."
      },
      {
        "word": "sunny",
        "translation": "soleado",
        "example": "It's a sunny day."
      },
      {
        "word": "hurricane",
        "translation": "huracán",
        "example": "The hurricane destroyed many homes."
      },
      {
        "word": "turtle",
        "translation": "tortuga",
        "example": "The turtle walks very slowly."
      },
      {
        "word": "mason",
        "translation": "albañil, cantero",
        "example": "The mason built the stone wall."
      },
      {
        "word": "myth",
        "translation": "mito",
        "example": "It's a popular myth."
      },
      {
        "word": "suite",
        "translation": "suite; conjunto",
        "example": "We booked a hotel suite."
      },
      {
        "word": "illusion",
        "translation": "ilusión (engaño)",
        "example": "It was just an optical illusion."
      },
      {
        "word": "accommodation",
        "translation": "alojamiento",
        "example": "We found cheap accommodation."
      },
      {
        "word": "clip",
        "translation": "clip, pinza; fragmento (de vídeo); recortar",
        "example": "I watched a short video clip."
      },
      {
        "word": "assessment",
        "translation": "evaluación, valoración",
        "example": "The assessment will take an hour."
      },
      {
        "word": "proportion",
        "translation": "proporción",
        "example": "A large proportion of students passed."
      },
      {
        "word": "competitor",
        "translation": "competidor, competidora",
        "example": "Our main competitor lowered prices."
      },
      {
        "word": "pad",
        "translation": "almohadilla; bloc de notas",
        "example": "I wrote it on a notepad."
      },
      {
        "word": "ambitious",
        "translation": "ambicioso",
        "example": "She is an ambitious young woman."
      },
      {
        "word": "sec",
        "translation": "segundo (coloq.: un momento)",
        "example": "Wait a sec!"
      },
      {
        "word": "exposure",
        "translation": "exposición",
        "example": "Too much exposure to the sun is harmful."
      },
      {
        "word": "rod",
        "translation": "vara, caña",
        "example": "He caught a fish with his rod."
      },
      {
        "word": "neat",
        "translation": "ordenado, pulcro",
        "example": "Her desk is always neat."
      },
      {
        "word": "lesbian",
        "translation": "lesbiana",
        "example": "She is a lesbian and lives with her partner."
      },
      {
        "word": "dislike",
        "translation": "no gustar, tener aversión; aversión",
        "example": "I dislike cold weather."
      },
      {
        "word": "reflection",
        "translation": "reflejo; reflexión",
        "example": "I saw my reflection in the water."
      },
      {
        "word": "punk",
        "translation": "punk; gamberro",
        "example": "He listens to punk music."
      },
      {
        "word": "acid",
        "translation": "ácido",
        "example": "Lemons contain acid."
      },
      {
        "word": "steer",
        "translation": "dirigir, conducir (un vehículo)",
        "example": "He steered the boat to the shore."
      },
      {
        "word": "revenue",
        "translation": "ingresos",
        "example": "The company's revenue grew."
      },
      {
        "word": "departure",
        "translation": "salida, partida",
        "example": "The departure is at nine."
      },
      {
        "word": "receipt",
        "translation": "recibo, ticket",
        "example": "Keep the receipt."
      },
      {
        "word": "theft",
        "translation": "robo, hurto",
        "example": "He was arrested for theft."
      },
      {
        "word": "frustrate",
        "translation": "frustrar",
        "example": "Traffic frustrates me."
      },
      {
        "word": "thorough",
        "translation": "minucioso, exhaustivo",
        "example": "They did a thorough investigation."
      },
      {
        "word": "feast",
        "translation": "banquete, festín",
        "example": "They prepared a great feast."
      },
      {
        "word": "mild",
        "translation": "suave, templado",
        "example": "We had a mild winter."
      },
      {
        "word": "cabinet",
        "translation": "armario, gabinete (gobierno)",
        "example": "The plates are in the cabinet."
      },
      {
        "word": "tin",
        "translation": "lata; estaño",
        "example": "I opened a tin of tomatoes."
      },
      {
        "word": "cricket",
        "translation": "críquet; grillo",
        "example": "They play cricket on Sundays."
      },
      {
        "word": "sole",
        "translation": "único; suela; lenguado",
        "example": "She is the sole survivor."
      },
      {
        "word": "elderly",
        "translation": "anciano, mayor",
        "example": "An elderly man crossed the street."
      },
      {
        "word": "countryside",
        "translation": "campo, zona rural",
        "example": "We live in the countryside."
      },
      {
        "word": "solo",
        "translation": "solo, en solitario; solista",
        "example": "He is traveling solo."
      },
      {
        "word": "rubber",
        "translation": "goma, caucho",
        "example": "The tires are made of rubber."
      },
      {
        "word": "kitty",
        "translation": "gatito; fondo común",
        "example": "The kitty drinks milk."
      },
      {
        "word": "vary",
        "translation": "variar",
        "example": "Prices vary from shop to shop."
      },
      {
        "word": "cattle",
        "translation": "ganado vacuno",
        "example": "The cattle graze in the field."
      },
      {
        "word": "viewer",
        "translation": "espectador, telespectador",
        "example": "Millions of viewers watched the show."
      },
      {
        "word": "boost",
        "translation": "impulsar, aumentar; impulso",
        "example": "Exercise boosts your energy."
      },
      {
        "word": "radiation",
        "translation": "radiación",
        "example": "Radiation can be dangerous."
      },
      {
        "word": "orbit",
        "translation": "órbita; orbitar",
        "example": "The moon orbits the Earth."
      },
      {
        "word": "bloom",
        "translation": "florecer; flor",
        "example": "The roses bloom in May."
      },
      {
        "word": "anytime",
        "translation": "en cualquier momento",
        "example": "You can call me anytime."
      },
      {
        "word": "clause",
        "translation": "cláusula",
        "example": "There is a clause in the contract."
      },
      {
        "word": "partnership",
        "translation": "asociación, sociedad",
        "example": "They formed a business partnership."
      },
      {
        "word": "ax",
        "translation": "hacha; despedir (coloq.)",
        "example": "He chopped wood with an ax."
      },
      {
        "word": "envy",
        "translation": "envidia; envidiar",
        "example": "I envy your success."
      },
      {
        "word": "bible",
        "translation": "Biblia",
        "example": "She reads the Bible every night."
      },
      {
        "word": "glow",
        "translation": "brillo; brillar",
        "example": "The lamp gave a warm glow."
      },
      {
        "word": "old-fashioned",
        "translation": "anticuado, pasado de moda",
        "example": "My grandfather is old-fashioned."
      },
      {
        "word": "turkey",
        "translation": "pavo; Turquía",
        "example": "We eat turkey at Christmas."
      },
      {
        "word": "riot",
        "translation": "disturbio; amotinarse",
        "example": "There was a riot in the city."
      },
      {
        "word": "insight",
        "translation": "perspicacia, visión profunda",
        "example": "The book gives insight into history."
      },
      {
        "word": "republic",
        "translation": "república",
        "example": "France is a republic."
      },
      {
        "word": "fame",
        "translation": "fama",
        "example": "She achieved fame at twenty."
      },
      {
        "word": "unemployed",
        "translation": "desempleado, parado",
        "example": "He has been unemployed for a year."
      },
      {
        "word": "confront",
        "translation": "enfrentar, confrontar",
        "example": "He confronted his fear."
      },
      {
        "word": "presidential",
        "translation": "presidencial",
        "example": "The presidential election is in May."
      },
      {
        "word": "laser",
        "translation": "láser",
        "example": "The doctor used a laser."
      },
      {
        "word": "ladder",
        "translation": "escalera de mano",
        "example": "He climbed the ladder."
      },
      {
        "word": "retain",
        "translation": "retener, conservar",
        "example": "They retained their title."
      },
      {
        "word": "sculpture",
        "translation": "escultura",
        "example": "The museum has a famous sculpture."
      },
      {
        "word": "kinda",
        "translation": "algo, un poco (coloq. de «kind of»)",
        "example": "I'm kinda tired."
      },
      {
        "word": "bureau",
        "translation": "oficina, agencia; cómoda",
        "example": "She works at the tourist bureau."
      },
      {
        "word": "attraction",
        "translation": "atracción",
        "example": "The tower is a tourist attraction."
      },
      {
        "word": "dip",
        "translation": "sumergir, mojar; baño; salsa",
        "example": "Dip the bread in the oil."
      },
      {
        "word": "fairy",
        "translation": "hada",
        "example": "The story has a good fairy."
      },
      {
        "word": "definite",
        "translation": "definido, seguro",
        "example": "We need a definite answer."
      },
      {
        "word": "rhythm",
        "translation": "ritmo",
        "example": "I love the rhythm of this song."
      },
      {
        "word": "tomb",
        "translation": "tumba, sepulcro",
        "example": "They visited the king's tomb."
      },
      {
        "word": "luggage",
        "translation": "equipaje",
        "example": "Where is my luggage?"
      },
      {
        "word": "prey",
        "translation": "presa",
        "example": "The eagle watched its prey."
      },
      {
        "word": "lodge",
        "translation": "cabaña, pabellón; alojarse",
        "example": "We stayed in a ski lodge."
      },
      {
        "word": "flour",
        "translation": "harina",
        "example": "Mix the flour with water."
      },
      {
        "word": "sketch",
        "translation": "boceto; bosquejar",
        "example": "She made a sketch of the house."
      },
      {
        "word": "plague",
        "translation": "plaga, peste",
        "example": "The plague killed many people."
      },
      {
        "word": "torch",
        "translation": "antorcha; linterna",
        "example": "Take a torch, it's dark."
      },
      {
        "word": "alike",
        "translation": "parecido, igual; igualmente",
        "example": "The twins look alike."
      },
      {
        "word": "gaze",
        "translation": "mirada fija; mirar fijamente",
        "example": "She gazed at the stars."
      },
      {
        "word": "outdoor",
        "translation": "al aire libre",
        "example": "We love outdoor activities."
      },
      {
        "word": "enhance",
        "translation": "mejorar, realzar",
        "example": "Music can enhance your mood."
      },
      {
        "word": "bolt",
        "translation": "cerrojo; perno; salir corriendo",
        "example": "He locked the door with a bolt."
      },
      {
        "word": "consist",
        "translation": "consistir, constar",
        "example": "The team consists of ten players."
      },
      {
        "word": "silk",
        "translation": "seda",
        "example": "The scarf is made of silk."
      },
      {
        "word": "colony",
        "translation": "colonia",
        "example": "It was once a Spanish colony."
      },
      {
        "word": "theirs",
        "translation": "suyo, suya (de ellos)",
        "example": "This house is theirs."
      },
      {
        "word": "tempt",
        "translation": "tentar",
        "example": "The cake tempts me."
      },
      {
        "word": "mistress",
        "translation": "amante; señora, maestra",
        "example": "The king had a mistress."
      },
      {
        "word": "overnight",
        "translation": "durante la noche; de la noche a la mañana",
        "example": "We stayed overnight in a hotel."
      },
      {
        "word": "nephew",
        "translation": "sobrino",
        "example": "My nephew is five years old."
      },
      {
        "word": "characteristic",
        "translation": "característica; característico",
        "example": "Kindness is her best characteristic."
      },
      {
        "word": "alcoholic",
        "translation": "alcohólico; alcohólico (persona)",
        "example": "This is a non-alcoholic drink."
      },
      {
        "word": "dignity",
        "translation": "dignidad",
        "example": "He faced it with dignity."
      },
      {
        "word": "motivate",
        "translation": "motivar",
        "example": "A good teacher motivates students."
      },
      {
        "word": "exclusive",
        "translation": "exclusivo",
        "example": "It's an exclusive club."
      },
      {
        "word": "misery",
        "translation": "miseria, sufrimiento",
        "example": "They lived in misery."
      },
      {
        "word": "copper",
        "translation": "cobre",
        "example": "The pipes are made of copper."
      },
      {
        "word": "worldwide",
        "translation": "en todo el mundo, mundial",
        "example": "The film was a success worldwide."
      },
      {
        "word": "cotton",
        "translation": "algodón",
        "example": "This shirt is 100% cotton."
      },
      {
        "word": "democratic",
        "translation": "democrático",
        "example": "They held democratic elections."
      },
      {
        "word": "execution",
        "translation": "ejecución",
        "example": "The execution of the plan was perfect."
      },
      {
        "word": "stem",
        "translation": "tallo; detener",
        "example": "Cut the stem of the flower."
      },
      {
        "word": "stiff",
        "translation": "rígido, tieso",
        "example": "My neck is stiff."
      },
      {
        "word": "keyboard",
        "translation": "teclado",
        "example": "My keyboard is broken."
      },
      {
        "word": "equation",
        "translation": "ecuación",
        "example": "Solve this equation."
      },
      {
        "word": "footstep",
        "translation": "paso, pisada",
        "example": "I heard footsteps behind me."
      },
      {
        "word": "ambition",
        "translation": "ambición",
        "example": "Her ambition is to be a doctor."
      },
      {
        "word": "trailer",
        "translation": "tráiler; remolque",
        "example": "We watched the film trailer."
      },
      {
        "word": "embassy",
        "translation": "embajada",
        "example": "The embassy is closed today."
      },
      {
        "word": "revise",
        "translation": "revisar, repasar; corregir",
        "example": "I need to revise for the exam."
      },
      {
        "word": "heck",
        "translation": "¡caramba! (eufemismo)",
        "example": "What the heck is that?"
      },
      {
        "word": "scent",
        "translation": "aroma, olor agradable",
        "example": "I love the scent of roses."
      },
      {
        "word": "moron",
        "translation": "imbécil, tonto",
        "example": "Don't be such a moron."
      },
      {
        "word": "consent",
        "translation": "consentimiento; consentir",
        "example": "You need his consent."
      },
      {
        "word": "hatch",
        "translation": "escotilla; eclosionar",
        "example": "The eggs will hatch soon."
      },
      {
        "word": "queue",
        "translation": "cola, fila; hacer cola",
        "example": "There is a long queue at the bank."
      },
      {
        "word": "uh-oh",
        "translation": "¡uy!, ¡oh, oh!",
        "example": "Uh-oh, I forgot my keys."
      },
      {
        "word": "restrict",
        "translation": "restringir, limitar",
        "example": "They restrict access to the building."
      },
      {
        "word": "inherit",
        "translation": "heredar",
        "example": "She inherited her grandmother's house."
      },
      {
        "word": "convenient",
        "translation": "conveniente, cómodo",
        "example": "The hotel is in a convenient location."
      },
      {
        "word": "fluid",
        "translation": "fluido; líquido",
        "example": "Drink plenty of fluids."
      },
      {
        "word": "shiny",
        "translation": "brillante, reluciente",
        "example": "She has shiny black hair."
      },
      {
        "word": "haul",
        "translation": "arrastrar, acarrear; botín",
        "example": "They hauled the boat onto the beach."
      },
      {
        "word": "tan",
        "translation": "bronceado; broncearse",
        "example": "She has a nice tan."
      },
      {
        "word": "parallel",
        "translation": "paralelo",
        "example": "The two roads run parallel."
      },
      {
        "word": "transition",
        "translation": "transición",
        "example": "The transition was smooth."
      },
      {
        "word": "clerk",
        "translation": "empleado, dependiente",
        "example": "The clerk helped me find a book."
      },
      {
        "word": "wool",
        "translation": "lana",
        "example": "The sweater is made of wool."
      },
      {
        "word": "gradually",
        "translation": "gradualmente, poco a poco",
        "example": "The weather gradually improved."
      },
      {
        "word": "stack",
        "translation": "montón, pila; apilar",
        "example": "There's a stack of books on the floor."
      },
      {
        "word": "distress",
        "translation": "angustia, aflicción",
        "example": "She was in great distress."
      },
      {
        "word": "grill",
        "translation": "parrilla; asar a la parrilla",
        "example": "We cook meat on the grill."
      },
      {
        "word": "corrupt",
        "translation": "corrupto; corromper",
        "example": "The official was corrupt."
      },
      {
        "word": "supervise",
        "translation": "supervisar",
        "example": "She supervises ten employees."
      },
      {
        "word": "skate",
        "translation": "patinar; patín",
        "example": "They skate on the frozen lake."
      },
      {
        "word": "contrast",
        "translation": "contraste; contrastar",
        "example": "There is a sharp contrast between them."
      },
      {
        "word": "veteran",
        "translation": "veterano, veterana",
        "example": "He is a war veteran."
      },
      {
        "word": "makeup",
        "translation": "maquillaje",
        "example": "She put on some makeup."
      },
      {
        "word": "consultant",
        "translation": "consultor, consultora",
        "example": "He works as a business consultant."
      },
      {
        "word": "qualification",
        "translation": "título, cualificación",
        "example": "She has a teaching qualification."
      },
      {
        "word": "deliberate",
        "translation": "deliberado; deliberar",
        "example": "It was a deliberate choice."
      },
      {
        "word": "ceiling",
        "translation": "techo",
        "example": "The ceiling is very high."
      },
      {
        "word": "investigator",
        "translation": "investigador, investigadora",
        "example": "The investigator examined the scene."
      },
      {
        "word": "acceptable",
        "translation": "aceptable",
        "example": "The quality is acceptable."
      },
      {
        "word": "nah",
        "translation": "no (coloquial)",
        "example": "Nah, I'm not hungry."
      },
      {
        "word": "seminar",
        "translation": "seminario",
        "example": "I'm attending a seminar tomorrow."
      },
      {
        "word": "dash",
        "translation": "correr, precipitarse; carrera corta; guion largo",
        "example": "I had to dash to catch the bus."
      },
      {
        "word": "woo",
        "translation": "cortejar; ¡uuu!",
        "example": "He tried to woo her with flowers."
      },
      {
        "word": "discharge",
        "translation": "dar de alta; descargar; liberar",
        "example": "The patient was discharged from hospital."
      },
      {
        "word": "hack",
        "translation": "piratear; hachazo",
        "example": "Someone hacked my account."
      },
      {
        "word": "establishment",
        "translation": "establecimiento; sistema establecido",
        "example": "The establishment opened last year."
      },
      {
        "word": "indoor",
        "translation": "de interior, bajo techo",
        "example": "They have an indoor swimming pool."
      },
      {
        "word": "cease",
        "translation": "cesar, dejar de",
        "example": "The noise finally ceased."
      },
      {
        "word": "voter",
        "translation": "votante",
        "example": "Many voters stayed home."
      },
      {
        "word": "resume",
        "translation": "reanudar, retomar; currículum (EE. UU.)",
        "example": "The meeting will resume at three."
      },
      {
        "word": "fragment",
        "translation": "fragmento",
        "example": "He found a fragment of pottery."
      },
      {
        "word": "surf",
        "translation": "hacer surf; surfear",
        "example": "They surf every weekend."
      },
      {
        "word": "backpack",
        "translation": "mochila",
        "example": "He carries a heavy backpack."
      },
      {
        "word": "affection",
        "translation": "cariño, afecto",
        "example": "She shows her affection with hugs."
      },
      {
        "word": "audition",
        "translation": "audición, prueba; hacer una prueba",
        "example": "She has an audition tomorrow."
      },
      {
        "word": "regularly",
        "translation": "regularmente",
        "example": "I exercise regularly."
      },
      {
        "word": "tide",
        "translation": "marea",
        "example": "The tide is coming in."
      },
      {
        "word": "amateur",
        "translation": "aficionado, amateur",
        "example": "He is an amateur photographer."
      },
      {
        "word": "narrative",
        "translation": "narrativa, relato; narrativo",
        "example": "The book has a strong narrative."
      },
      {
        "word": "grocery",
        "translation": "tienda de comestibles; comestibles",
        "example": "I need to buy groceries."
      },
      {
        "word": "greeting",
        "translation": "saludo",
        "example": "She waved in greeting."
      },
      {
        "word": "compose",
        "translation": "componer; redactar",
        "example": "Mozart composed beautiful music."
      },
      {
        "word": "circuit",
        "translation": "circuito",
        "example": "There is a problem with the circuit."
      },
      {
        "word": "breach",
        "translation": "incumplimiento, brecha; violar",
        "example": "That is a breach of contract."
      },
      {
        "word": "leisure",
        "translation": "ocio, tiempo libre",
        "example": "Reading is my leisure activity."
      },
      {
        "word": "pledge",
        "translation": "promesa, compromiso; prometer",
        "example": "They made a pledge to help."
      },
      {
        "word": "coverage",
        "translation": "cobertura",
        "example": "The news gave full coverage of the event."
      },
      {
        "word": "harvest",
        "translation": "cosecha; cosechar",
        "example": "The grape harvest begins in September."
      },
      {
        "word": "historic",
        "translation": "histórico (importante)",
        "example": "It was a historic day."
      },
      {
        "word": "appetite",
        "translation": "apetito",
        "example": "I have no appetite today."
      },
      {
        "word": "holly",
        "translation": "acebo",
        "example": "They decorated with holly at Christmas."
      },
      {
        "word": "prediction",
        "translation": "predicción",
        "example": "His prediction was correct."
      },
      {
        "word": "substitute",
        "translation": "sustituto; sustituir",
        "example": "Use honey as a substitute for sugar."
      },
      {
        "word": "tuck",
        "translation": "meter, remeter",
        "example": "Tuck your shirt into your pants."
      },
      {
        "word": "carve",
        "translation": "tallar, esculpir; cortar (carne)",
        "example": "He carved a small wooden bird."
      },
      {
        "word": "assess",
        "translation": "evaluar, valorar",
        "example": "The doctor will assess your condition."
      },
      {
        "word": "hood",
        "translation": "capucha; capó",
        "example": "She pulled up her hood."
      },
      {
        "word": "refrigerator",
        "translation": "nevera, frigorífico, refrigerador",
        "example": "The milk is in the refrigerator."
      },
      {
        "word": "currency",
        "translation": "moneda (divisa)",
        "example": "The euro is the currency of Spain."
      },
      {
        "word": "pony",
        "translation": "poni",
        "example": "The girl rides a pony."
      },
      {
        "word": "filter",
        "translation": "filtro; filtrar",
        "example": "Change the water filter."
      },
      {
        "word": "peasant",
        "translation": "campesino, labriego",
        "example": "The peasants worked the land."
      },
      {
        "word": "dull",
        "translation": "aburrido; apagado, sin filo",
        "example": "The lecture was dull."
      },
      {
        "word": "summary",
        "translation": "resumen",
        "example": "Write a short summary."
      },
      {
        "word": "booth",
        "translation": "cabina, puesto",
        "example": "He called from a phone booth."
      },
      {
        "word": "resolution",
        "translation": "resolución; propósito",
        "example": "My New Year's resolution is to read more."
      },
      {
        "word": "outta",
        "translation": "fuera de (coloq. de «out of»)",
        "example": "Get outta here!"
      },
      {
        "word": "foreigner",
        "translation": "extranjero, extranjera",
        "example": "Many foreigners visit the city."
      },
      {
        "word": "headquarters",
        "translation": "sede central",
        "example": "The headquarters are in Madrid."
      },
      {
        "word": "overtime",
        "translation": "horas extra",
        "example": "I worked overtime last week."
      },
      {
        "word": "earthquake",
        "translation": "terremoto",
        "example": "The earthquake shook the town."
      },
      {
        "word": "picnic",
        "translation": "picnic",
        "example": "Let's have a picnic in the park."
      },
      {
        "word": "invade",
        "translation": "invadir",
        "example": "The army invaded the country."
      },
      {
        "word": "soak",
        "translation": "empapar, remojar",
        "example": "Soak the beans overnight."
      },
      {
        "word": "tolerate",
        "translation": "tolerar, soportar",
        "example": "I can't tolerate this noise."
      },
      {
        "word": "spicy",
        "translation": "picante",
        "example": "I like spicy food."
      },
      {
        "word": "mar",
        "translation": "estropear, empañar",
        "example": "Rain marred the celebration."
      },
      {
        "word": "bare",
        "translation": "desnudo, descubierto",
        "example": "He walked on the beach in bare feet."
      },
      {
        "word": "destination",
        "translation": "destino (lugar)",
        "example": "Our destination is Lisbon."
      },
      {
        "word": "pirate",
        "translation": "pirata",
        "example": "The pirates hid their treasure."
      },
      {
        "word": "server",
        "translation": "servidor; camarero",
        "example": "The server is down."
      },
      {
        "word": "inquire",
        "translation": "preguntar, informarse",
        "example": "I'd like to inquire about the price."
      },
      {
        "word": "auction",
        "translation": "subasta; subastar",
        "example": "The painting sold at auction."
      },
      {
        "word": "doorbell",
        "translation": "timbre (de la puerta)",
        "example": "The doorbell rang."
      },
      {
        "word": "knot",
        "translation": "nudo; anudar",
        "example": "Tie a strong knot."
      },
      {
        "word": "forge",
        "translation": "forjar; falsificar",
        "example": "He forged a sword."
      },
      {
        "word": "condemn",
        "translation": "condenar",
        "example": "Leaders condemned the attack."
      },
      {
        "word": "microwave",
        "translation": "microondas",
        "example": "Heat the soup in the microwave."
      },
      {
        "word": "leaf",
        "translation": "hoja (de planta)",
        "example": "A red leaf fell from the tree."
      },
      {
        "word": "chess",
        "translation": "ajedrez",
        "example": "He plays chess very well."
      },
      {
        "word": "jar",
        "translation": "tarro, frasco",
        "example": "The jam is in a glass jar."
      },
      {
        "word": "bonus",
        "translation": "bonificación, extra",
        "example": "She got a bonus at work."
      },
      {
        "word": "lure",
        "translation": "atraer, seducir; señuelo",
        "example": "The smell lured us into the bakery."
      },
      {
        "word": "cargo",
        "translation": "carga (mercancía)",
        "example": "The ship carries cargo to Asia."
      },
      {
        "word": "poisonous",
        "translation": "venenoso",
        "example": "Some mushrooms are poisonous."
      },
      {
        "word": "institute",
        "translation": "instituto; instituir",
        "example": "She works at a research institute."
      },
      {
        "word": "numerous",
        "translation": "numeroso, muchos",
        "example": "Numerous people attended."
      },
      {
        "word": "infant",
        "translation": "bebé, niño pequeño",
        "example": "The infant is sleeping."
      },
      {
        "word": "carriage",
        "translation": "carruaje; vagón",
        "example": "They rode in a horse carriage."
      },
      {
        "word": "flaw",
        "translation": "defecto, fallo",
        "example": "The diamond has a small flaw."
      },
      {
        "word": "baggage",
        "translation": "equipaje",
        "example": "Where can I collect my baggage?"
      },
      {
        "word": "vein",
        "translation": "vena",
        "example": "The nurse found a vein."
      },
      {
        "word": "filthy",
        "translation": "asqueroso, muy sucio",
        "example": "The floor was filthy."
      },
      {
        "word": "increasingly",
        "translation": "cada vez más",
        "example": "It's increasingly difficult to find jobs."
      },
      {
        "word": "advocate",
        "translation": "defender, abogar por; defensor",
        "example": "She advocates for animal rights."
      },
      {
        "word": "backup",
        "translation": "copia de seguridad; respaldo",
        "example": "Make a backup of your files."
      },
      {
        "word": "imaginary",
        "translation": "imaginario",
        "example": "The child has an imaginary friend."
      },
      {
        "word": "publisher",
        "translation": "editor, editorial",
        "example": "The publisher printed 5,000 copies."
      },
      {
        "word": "campus",
        "translation": "campus",
        "example": "The campus is very large."
      },
      {
        "word": "instrumental",
        "translation": "instrumental; fundamental",
        "example": "She was instrumental in the project."
      },
      {
        "word": "lobby",
        "translation": "vestíbulo; grupo de presión; presionar",
        "example": "Wait for me in the hotel lobby."
      },
      {
        "word": "someplace",
        "translation": "en algún sitio",
        "example": "Let's go someplace quiet."
      },
      {
        "word": "pharmacy",
        "translation": "farmacia",
        "example": "The pharmacy is next to the bank."
      },
      {
        "word": "risky",
        "translation": "arriesgado",
        "example": "It's a risky plan."
      },
      {
        "word": "fur",
        "translation": "piel (de animal), pelo",
        "example": "The cat has soft fur."
      },
      {
        "word": "violate",
        "translation": "violar (una norma), infringir",
        "example": "He violated the rules."
      },
      {
        "word": "greatly",
        "translation": "mucho, enormemente",
        "example": "I greatly appreciate your help."
      },
      {
        "word": "residence",
        "translation": "residencia",
        "example": "This is my permanent residence."
      },
      {
        "word": "similarly",
        "translation": "de manera similar, igualmente",
        "example": "Similarly, the second plan failed."
      },
      {
        "word": "eager",
        "translation": "ansioso, entusiasta",
        "example": "The kids are eager to start."
      },
      {
        "word": "donate",
        "translation": "donar",
        "example": "He donated money to the hospital."
      },
      {
        "word": "nickname",
        "translation": "apodo",
        "example": "His nickname is Tiger."
      },
      {
        "word": "glue",
        "translation": "pegamento; pegar",
        "example": "I need glue to fix this."
      },
      {
        "word": "partly",
        "translation": "en parte",
        "example": "The roof is partly broken."
      },
      {
        "word": "brochure",
        "translation": "folleto",
        "example": "Take a brochure at the entrance."
      },
      {
        "word": "homicide",
        "translation": "homicidio",
        "example": "The police are investigating a homicide."
      },
      {
        "word": "fingerprint",
        "translation": "huella dactilar",
        "example": "They found a fingerprint on the glass."
      },
      {
        "word": "olive",
        "translation": "aceituna, oliva; olivo",
        "example": "I like green olives."
      },
      {
        "word": "continuous",
        "translation": "continuo",
        "example": "There was continuous rain all week."
      },
      {
        "word": "decrease",
        "translation": "disminuir; disminución",
        "example": "Sales decreased last month."
      },
      {
        "word": "pinch",
        "translation": "pellizcar; pellizco",
        "example": "Add a pinch of salt."
      },
      {
        "word": "cafeteria",
        "translation": "cafetería, comedor",
        "example": "We have lunch in the cafeteria."
      },
      {
        "word": "jaw",
        "translation": "mandíbula, mentón",
        "example": "He hit him on the jaw."
      },
      {
        "word": "humiliate",
        "translation": "humillar",
        "example": "Don't humiliate him in public."
      },
      {
        "word": "manipulate",
        "translation": "manipular",
        "example": "He tried to manipulate her."
      },
      {
        "word": "porn",
        "translation": "pornografía, porno",
        "example": "Porn is banned for minors."
      },
      {
        "word": "involvement",
        "translation": "implicación, participación",
        "example": "His involvement in the project was important."
      },
      {
        "word": "similarity",
        "translation": "similitud, parecido",
        "example": "There is a similarity between them."
      },
      {
        "word": "sympathy",
        "translation": "compasión, simpatía",
        "example": "I have sympathy for them."
      },
      {
        "word": "tumor",
        "translation": "tumor",
        "example": "The doctor found a small tumor."
      },
      {
        "word": "manual",
        "translation": "manual (adj.); manual (libro)",
        "example": "Read the instruction manual."
      },
      {
        "word": "passionate",
        "translation": "apasionado",
        "example": "He is passionate about music."
      },
      {
        "word": "tremendous",
        "translation": "tremendo, enorme",
        "example": "It was a tremendous success."
      },
      {
        "word": "fashionable",
        "translation": "de moda, elegante",
        "example": "This is a fashionable restaurant."
      },
      {
        "word": "substantial",
        "translation": "sustancial, considerable",
        "example": "They made a substantial profit."
      },
      {
        "word": "hatred",
        "translation": "odio",
        "example": "Hatred only creates more problems."
      },
      {
        "word": "strap",
        "translation": "correa, tirante",
        "example": "The strap of my bag broke."
      },
      {
        "word": "immigrant",
        "translation": "inmigrante",
        "example": "Her parents were immigrants."
      },
      {
        "word": "intervention",
        "translation": "intervención",
        "example": "The doctors recommended an intervention."
      },
      {
        "word": "sidewalk",
        "translation": "acera, banqueta",
        "example": "Please walk on the sidewalk."
      },
      {
        "word": "particle",
        "translation": "partícula",
        "example": "Dust is made of tiny particles."
      },
      {
        "word": "ministry",
        "translation": "ministerio",
        "example": "He works at the Ministry of Education."
      },
      {
        "word": "provision",
        "translation": "provisión, suministro",
        "example": "They made provision for emergencies."
      },
      {
        "word": "inspiration",
        "translation": "inspiración",
        "example": "Nature is her inspiration."
      },
      {
        "word": "being",
        "translation": "ser; estar siendo",
        "example": "Every human being has rights."
      },
      {
        "word": "disadvantage",
        "translation": "desventaja",
        "example": "Lack of experience is a disadvantage."
      },
      {
        "word": "splash",
        "translation": "salpicadura; salpicar",
        "example": "The children splashed in the pool."
      },
      {
        "word": "notify",
        "translation": "notificar, avisar",
        "example": "Please notify me of any changes."
      },
      {
        "word": "stubborn",
        "translation": "terco, testarudo",
        "example": "My son is very stubborn."
      },
      {
        "word": "prick",
        "translation": "pinchar; pinchazo; (vulgar) imbécil",
        "example": "I pricked my finger on a thorn."
      },
      {
        "word": "mechanic",
        "translation": "mecánico, mecánica",
        "example": "The mechanic fixed my car."
      },
      {
        "word": "invoice",
        "translation": "factura",
        "example": "Please send me the invoice."
      },
      {
        "word": "invasion",
        "translation": "invasión",
        "example": "The invasion began at dawn."
      },
      {
        "word": "steak",
        "translation": "filete, bistec",
        "example": "I'd like my steak well done."
      },
      {
        "word": "export",
        "translation": "exportar; exportación",
        "example": "Spain exports olive oil."
      },
      {
        "word": "scatter",
        "translation": "esparcir, dispersar",
        "example": "He scattered seeds in the garden."
      },
      {
        "word": "apparent",
        "translation": "evidente, aparente",
        "example": "It was apparent that he was tired."
      },
      {
        "word": "coupon",
        "translation": "cupón",
        "example": "I have a coupon for this store."
      },
      {
        "word": "translation",
        "translation": "traducción",
        "example": "I need a translation of this text."
      },
      {
        "word": "herd",
        "translation": "manada, rebaño",
        "example": "A herd of cows crossed the road."
      },
      {
        "word": "cowboy",
        "translation": "vaquero",
        "example": "The cowboy rode his horse."
      },
      {
        "word": "tit",
        "translation": "teta (vulgar); herrerillo (ave)",
        "example": "A blue tit sat on the branch."
      },
      {
        "word": "successfully",
        "translation": "con éxito",
        "example": "She successfully finished the course."
      },
      {
        "word": "pope",
        "translation": "papa (el Papa)",
        "example": "The Pope visited Spain."
      },
      {
        "word": "diagram",
        "translation": "diagrama, esquema",
        "example": "Look at the diagram on page ten."
      },
      {
        "word": "rotten",
        "translation": "podrido",
        "example": "These apples are rotten."
      },
      {
        "word": "paradise",
        "translation": "paraíso",
        "example": "The island is a paradise."
      },
      {
        "word": "devastate",
        "translation": "devastar, arrasar",
        "example": "The fire devastated the forest."
      },
      {
        "word": "furious",
        "translation": "furioso",
        "example": "She was furious with him."
      },
      {
        "word": "oblige",
        "translation": "obligar",
        "example": "The law obliges drivers to wear a belt."
      },
      {
        "word": "fasten",
        "translation": "abrochar, sujetar",
        "example": "Fasten your seat belt."
      },
      {
        "word": "depart",
        "translation": "partir, salir",
        "example": "The train departs at noon."
      },
      {
        "word": "intimate",
        "translation": "íntimo",
        "example": "It was an intimate dinner."
      },
      {
        "word": "shove",
        "translation": "empujar, dar un empujón",
        "example": "He shoved the box under the bed."
      },
      {
        "word": "dreadful",
        "translation": "terrible, espantoso",
        "example": "The weather was dreadful."
      },
      {
        "word": "bass",
        "translation": "bajo (instrumento, voz); lubina",
        "example": "He plays bass in a band."
      },
      {
        "word": "enclose",
        "translation": "adjuntar, incluir",
        "example": "Please enclose a copy of your passport."
      },
      {
        "word": "frequently",
        "translation": "frecuentemente",
        "example": "I frequently visit my grandmother."
      },
      {
        "word": "sync",
        "translation": "sincronizar; sincronización",
        "example": "Sync your phone with the computer."
      },
      {
        "word": "laundry",
        "translation": "colada, ropa sucia; lavandería",
        "example": "I do the laundry on Saturdays."
      },
      {
        "word": "verdict",
        "translation": "veredicto",
        "example": "The jury reached a verdict."
      },
      {
        "word": "lousy",
        "translation": "pésimo, malísimo (coloq.)",
        "example": "I had a lousy day."
      },
      {
        "word": "cashier",
        "translation": "cajero, cajera",
        "example": "Pay the cashier at the exit."
      },
      {
        "word": "rally",
        "translation": "mitin, concentración; reunir",
        "example": "Thousands attended the rally."
      },
      {
        "word": "fatal",
        "translation": "mortal, fatal",
        "example": "It was a fatal accident."
      },
      {
        "word": "spite",
        "translation": "rencor (in spite of: a pesar de)",
        "example": "We went out in spite of the rain."
      },
      {
        "word": "decorate",
        "translation": "decorar",
        "example": "We decorate the tree at Christmas."
      },
      {
        "word": "registration",
        "translation": "registro, inscripción, matrícula",
        "example": "Registration opens on Monday."
      },
      {
        "word": "refund",
        "translation": "reembolso; reembolsar",
        "example": "I'd like a refund, please."
      },
      {
        "word": "circus",
        "translation": "circo",
        "example": "The kids love the circus."
      },
      {
        "word": "eagle",
        "translation": "águila",
        "example": "The eagle flew over the mountains."
      },
      {
        "word": "conviction",
        "translation": "condena; convicción",
        "example": "He has two previous convictions."
      },
      {
        "word": "supporter",
        "translation": "seguidor, partidario",
        "example": "He is a Barcelona supporter."
      },
      {
        "word": "zombie",
        "translation": "zombi",
        "example": "The film is about zombies."
      },
      {
        "word": "folder",
        "translation": "carpeta",
        "example": "Put the papers in this folder."
      },
      {
        "word": "outer",
        "translation": "exterior, externo",
        "example": "Paint the outer wall."
      },
      {
        "word": "walker",
        "translation": "caminante, senderista",
        "example": "The path is popular with walkers."
      },
      {
        "word": "greek",
        "translation": "griego; griega",
        "example": "We ate Greek salad."
      },
      {
        "word": "statistic",
        "translation": "estadística, dato estadístico",
        "example": "The statistics are surprising."
      },
      {
        "word": "pine",
        "translation": "pino",
        "example": "Pine trees cover the hills."
      },
      {
        "word": "underwear",
        "translation": "ropa interior",
        "example": "Pack some clean underwear."
      },
      {
        "word": "applicant",
        "translation": "candidato, solicitante",
        "example": "There are fifty applicants for the job."
      },
      {
        "word": "regional",
        "translation": "regional",
        "example": "It's a regional dish."
      },
      {
        "word": "pearl",
        "translation": "perla",
        "example": "She wore a pearl necklace."
      },
      {
        "word": "perceive",
        "translation": "percibir",
        "example": "I perceived a change in his mood."
      },
      {
        "word": "farewell",
        "translation": "despedida; adiós",
        "example": "They said a sad farewell."
      },
      {
        "word": "handy",
        "translation": "práctico, útil; a mano",
        "example": "A knife is handy in the kitchen."
      },
      {
        "word": "receptionist",
        "translation": "recepcionista",
        "example": "Ask the receptionist for the key."
      },
      {
        "word": "tricky",
        "translation": "difícil, complicado, delicado",
        "example": "It's a tricky situation."
      },
      {
        "word": "hike",
        "translation": "excursión a pie; hacer senderismo",
        "example": "We went for a hike in the mountains."
      },
      {
        "word": "obtain",
        "translation": "obtener, conseguir",
        "example": "You need to obtain a visa."
      },
      {
        "word": "newly",
        "translation": "recién, recientemente",
        "example": "They are a newly married couple."
      },
      {
        "word": "thread",
        "translation": "hilo; enhebrar",
        "example": "I need a needle and thread."
      },
      {
        "word": "beverage",
        "translation": "bebida",
        "example": "Beverages are included in the price."
      },
      {
        "word": "equivalent",
        "translation": "equivalente",
        "example": "One euro is the equivalent of one hundred cents."
      },
      {
        "word": "eternal",
        "translation": "eterno",
        "example": "They promised eternal love."
      },
      {
        "word": "interpret",
        "translation": "interpretar",
        "example": "How do you interpret this poem?"
      },
      {
        "word": "lick",
        "translation": "lamer; lametón",
        "example": "The dog licked my hand."
      },
      {
        "word": "rider",
        "translation": "jinete; ciclista; motorista",
        "example": "The rider wore a helmet."
      },
      {
        "word": "indirect",
        "translation": "indirecto",
        "example": "It was an indirect answer."
      },
      {
        "word": "footage",
        "translation": "metraje, grabaciones",
        "example": "The police reviewed the security footage."
      },
      {
        "word": "extensive",
        "translation": "extenso, amplio",
        "example": "She has extensive experience."
      },
      {
        "word": "odds",
        "translation": "probabilidades, posibilidades",
        "example": "The odds are against us."
      },
      {
        "word": "vest",
        "translation": "chaleco; camiseta interior",
        "example": "He wore a bulletproof vest."
      },
      {
        "word": "burger",
        "translation": "hamburguesa",
        "example": "I'd like a cheese burger."
      },
      {
        "word": "subscription",
        "translation": "suscripción, abono",
        "example": "I cancelled my subscription."
      },
      {
        "word": "secondary",
        "translation": "secundario",
        "example": "She attends secondary school."
      },
      {
        "word": "boo",
        "translation": "abuchear; ¡bu!",
        "example": "The crowd booed the referee."
      },
      {
        "word": "alibi",
        "translation": "coartada",
        "example": "He has a strong alibi."
      },
      {
        "word": "ingredient",
        "translation": "ingrediente",
        "example": "Flour is the main ingredient."
      },
      {
        "word": "blah",
        "translation": "bla (palabrería)",
        "example": "He talked on and on, blah blah blah."
      },
      {
        "word": "timetable",
        "translation": "horario",
        "example": "Check the train timetable."
      },
      {
        "word": "exceed",
        "translation": "exceder, superar",
        "example": "Don't exceed the speed limit."
      },
      {
        "word": "congratulate",
        "translation": "felicitar",
        "example": "I congratulated him on his win."
      },
      {
        "word": "penis",
        "translation": "pene",
        "example": "The doctor explained male anatomy."
      },
      {
        "word": "naive",
        "translation": "ingenuo",
        "example": "Don't be so naive."
      },
      {
        "word": "prosecution",
        "translation": "acusación (fiscal); procesamiento",
        "example": "The prosecution called a witness."
      },
      {
        "word": "upcoming",
        "translation": "próximo, venidero",
        "example": "I'm busy with the upcoming exam."
      },
      {
        "word": "unpleasant",
        "translation": "desagradable",
        "example": "It was an unpleasant surprise."
      },
      {
        "word": "britain",
        "translation": "Gran Bretaña",
        "example": "London is in Britain."
      },
      {
        "word": "perception",
        "translation": "percepción",
        "example": "Our perception of time changes."
      },
      {
        "word": "roughly",
        "translation": "aproximadamente; bruscamente",
        "example": "It costs roughly ten euros."
      },
      {
        "word": "exaggerate",
        "translation": "exagerar",
        "example": "Don't exaggerate, it wasn't that bad."
      },
      {
        "word": "unnecessary",
        "translation": "innecesario",
        "example": "That was an unnecessary expense."
      },
      {
        "word": "rugby",
        "translation": "rugby",
        "example": "They play rugby on Saturdays."
      },
      {
        "word": "blackmail",
        "translation": "chantaje; chantajear",
        "example": "He was a victim of blackmail."
      },
      {
        "word": "transmission",
        "translation": "transmisión",
        "example": "The transmission of the virus is fast."
      },
      {
        "word": "alongside",
        "translation": "junto a, al lado de",
        "example": "She worked alongside her father."
      },
      {
        "word": "potentially",
        "translation": "potencialmente",
        "example": "This is potentially dangerous."
      },
      {
        "word": "straw",
        "translation": "paja; pajita",
        "example": "He drank juice through a straw."
      },
      {
        "word": "coworker",
        "translation": "compañero de trabajo, colega",
        "example": "My coworker is on holiday."
      },
      {
        "word": "rattle",
        "translation": "traquetear; sonajero",
        "example": "The windows rattled in the wind."
      },
      {
        "word": "loop",
        "translation": "bucle, lazo",
        "example": "Make a loop with the rope."
      },
      {
        "word": "rack",
        "translation": "estante, soporte; torturar",
        "example": "Put the bike on the rack."
      },
      {
        "word": "inevitable",
        "translation": "inevitable",
        "example": "Change is inevitable."
      },
      {
        "word": "logical",
        "translation": "lógico",
        "example": "That's a logical conclusion."
      },
      {
        "word": "appliance",
        "translation": "electrodoméstico, aparato",
        "example": "We need a new kitchen appliance."
      },
      {
        "word": "vet",
        "translation": "veterinario, veterinaria",
        "example": "Take the dog to the vet."
      },
      {
        "word": "lawn",
        "translation": "césped",
        "example": "He mows the lawn on Saturdays."
      },
      {
        "word": "scenario",
        "translation": "escenario",
        "example": "Imagine the worst scenario."
      },
      {
        "word": "alley",
        "translation": "callejón",
        "example": "The cat ran down the alley."
      },
      {
        "word": "compensation",
        "translation": "compensación, indemnización",
        "example": "He received compensation for the injury."
      },
      {
        "word": "organizer",
        "translation": "organizador, organizadora",
        "example": "The organizer welcomed the guests."
      },
      {
        "word": "revolutionary",
        "translation": "revolucionario",
        "example": "It's a revolutionary idea."
      },
      {
        "word": "dose",
        "translation": "dosis",
        "example": "Do not exceed the daily dose."
      },
      {
        "word": "mushroom",
        "translation": "seta, champiñón",
        "example": "I fried some mushrooms."
      },
      {
        "word": "underestimate",
        "translation": "subestimar",
        "example": "Don't underestimate your opponent."
      },
      {
        "word": "dispatch",
        "translation": "enviar, despachar; envío",
        "example": "They dispatched a rescue team."
      },
      {
        "word": "workplace",
        "translation": "lugar de trabajo",
        "example": "My workplace is close to home."
      },
      {
        "word": "distinct",
        "translation": "distinto, claro",
        "example": "There is a distinct difference."
      },
      {
        "word": "necklace",
        "translation": "collar",
        "example": "She wore a gold necklace."
      },
      {
        "word": "cloth",
        "translation": "tela, paño",
        "example": "Wipe the table with a cloth."
      },
      {
        "word": "pond",
        "translation": "estanque",
        "example": "Ducks swim in the pond."
      },
      {
        "word": "mold",
        "translation": "moho; molde",
        "example": "There is mold on the bread."
      },
      {
        "word": "affordable",
        "translation": "asequible, económico",
        "example": "We offer affordable prices."
      },
      {
        "word": "puppy",
        "translation": "cachorro (de perro)",
        "example": "The puppy is playing in the garden."
      },
      {
        "word": "locker",
        "translation": "taquilla",
        "example": "My shoes are in the locker."
      },
      {
        "word": "merchant",
        "translation": "comerciante, mercader",
        "example": "The merchant sold silk."
      },
      {
        "word": "cottage",
        "translation": "casita de campo, cabaña",
        "example": "We rented a cottage by the sea."
      },
      {
        "word": "corridor",
        "translation": "pasillo, corredor",
        "example": "The classroom is at the end of the corridor."
      },
      {
        "word": "undertake",
        "translation": "emprender, asumir",
        "example": "They undertook a big project."
      },
      {
        "word": "commute",
        "translation": "desplazarse al trabajo; trayecto diario",
        "example": "I commute by train every day."
      },
      {
        "word": "govern",
        "translation": "gobernar",
        "example": "The president governs the country."
      },
      {
        "word": "slut",
        "translation": "zorra, puta (vulgar, insulto)",
        "example": "That word is a vulgar insult."
      },
      {
        "word": "sleeve",
        "translation": "manga",
        "example": "The sleeve of my shirt is torn."
      },
      {
        "word": "predator",
        "translation": "depredador, predador",
        "example": "The lion is a predator."
      },
      {
        "word": "toll",
        "translation": "peaje; tañer",
        "example": "We paid the toll on the highway."
      },
      {
        "word": "quotation",
        "translation": "cita; presupuesto",
        "example": "He read a quotation from the book."
      },
      {
        "word": "soviet",
        "translation": "soviético",
        "example": "The Soviet Union ended in 1991."
      },
      {
        "word": "indication",
        "translation": "indicio, señal",
        "example": "There is no indication of danger."
      },
      {
        "word": "galaxy",
        "translation": "galaxia",
        "example": "Our galaxy is called the Milky Way."
      },
      {
        "word": "academy",
        "translation": "academia",
        "example": "She studies at a music academy."
      },
      {
        "word": "badge",
        "translation": "insignia, placa",
        "example": "The officer showed his badge."
      },
      {
        "word": "summarize",
        "translation": "resumir",
        "example": "Please summarize the main points."
      },
      {
        "word": "criticism",
        "translation": "crítica",
        "example": "He accepted the criticism."
      },
      {
        "word": "automatically",
        "translation": "automáticamente",
        "example": "The door opens automatically."
      },
      {
        "word": "pierce",
        "translation": "perforar, atravesar",
        "example": "She pierced her ears."
      },
      {
        "word": "obsess",
        "translation": "obsesionar(se)",
        "example": "He is obsessed with football."
      },
      {
        "word": "creepy",
        "translation": "espeluznante, escalofriante",
        "example": "The old house is creepy."
      },
      {
        "word": "warranty",
        "translation": "garantía",
        "example": "The phone has a two-year warranty."
      },
      {
        "word": "coke",
        "translation": "cola; cocaína (coloq.); coque",
        "example": "I'd like a Coke with ice."
      },
      {
        "word": "presume",
        "translation": "suponer, presumir",
        "example": "I presume you are tired."
      },
      {
        "word": "cord",
        "translation": "cuerda, cable",
        "example": "Pull the cord to turn on the light."
      },
      {
        "word": "herb",
        "translation": "hierba aromática",
        "example": "I grow herbs on my balcony."
      },
      {
        "word": "fort",
        "translation": "fuerte, fortaleza",
        "example": "The soldiers defended the fort."
      },
      {
        "word": "itinerary",
        "translation": "itinerario",
        "example": "Here is your itinerary for the trip."
      },
      {
        "word": "oak",
        "translation": "roble",
        "example": "The oak tree is hundreds of years old."
      },
      {
        "word": "supplier",
        "translation": "proveedor, proveedora",
        "example": "We changed our supplier."
      },
      {
        "word": "prescription",
        "translation": "receta (médica)",
        "example": "I need a prescription for this medicine."
      },
      {
        "word": "reverend",
        "translation": "reverendo",
        "example": "The reverend led the service."
      },
      {
        "word": "implement",
        "translation": "implementar, poner en práctica; herramienta",
        "example": "They will implement the new rules."
      },
      {
        "word": "voucher",
        "translation": "vale, bono",
        "example": "I got a voucher for the hotel."
      },
      {
        "word": "casual",
        "translation": "informal, casual",
        "example": "Wear casual clothes."
      },
      {
        "word": "prompt",
        "translation": "puntual, rápido; incitar",
        "example": "We appreciate your prompt reply."
      },
      {
        "word": "static",
        "translation": "estático; electricidad estática",
        "example": "The radio made a static noise."
      },
      {
        "word": "fart",
        "translation": "pedo; tirarse un pedo (vulgar)",
        "example": "The children laughed at the fart."
      },
      {
        "word": "sensible",
        "translation": "sensato, razonable",
        "example": "That's a sensible decision."
      },
      {
        "word": "shopper",
        "translation": "comprador, cliente",
        "example": "The mall was full of shoppers."
      },
      {
        "word": "expedition",
        "translation": "expedición",
        "example": "They planned an expedition to the pole."
      },
      {
        "word": "triple",
        "translation": "triple; triplicar",
        "example": "The price has tripled."
      },
      {
        "word": "dessert",
        "translation": "postre",
        "example": "What's for dessert?"
      },
      {
        "word": "swap",
        "translation": "intercambiar; intercambio",
        "example": "Let's swap seats."
      },
      {
        "word": "lightning",
        "translation": "relámpago, rayo",
        "example": "Lightning struck the tree."
      },
      {
        "word": "casualty",
        "translation": "víctima, baja; urgencias",
        "example": "There were no casualties."
      },
      {
        "word": "reschedule",
        "translation": "reprogramar, cambiar la fecha",
        "example": "Can we reschedule the meeting?"
      },
      {
        "word": "transportation",
        "translation": "transporte",
        "example": "Public transportation is cheap here."
      },
      {
        "word": "aspect",
        "translation": "aspecto",
        "example": "Consider every aspect of the problem."
      },
      {
        "word": "exploit",
        "translation": "explotar, aprovecharse de; hazaña",
        "example": "Don't exploit workers."
      },
      {
        "word": "crane",
        "translation": "grúa; grulla",
        "example": "A crane lifted the steel beams."
      },
      {
        "word": "wicked",
        "translation": "malvado, perverso",
        "example": "The wicked witch cast a spell."
      },
      {
        "word": "cancellation",
        "translation": "cancelación",
        "example": "The cancellation was free."
      },
      {
        "word": "briefly",
        "translation": "brevemente",
        "example": "Let me briefly explain."
      },
      {
        "word": "exclude",
        "translation": "excluir",
        "example": "They excluded him from the team."
      },
      {
        "word": "sorrow",
        "translation": "pena, tristeza",
        "example": "She felt deep sorrow."
      },
      {
        "word": "clinical",
        "translation": "clínico",
        "example": "They conducted a clinical trial."
      },
      {
        "word": "liquor",
        "translation": "licor, bebida alcohólica",
        "example": "They sell liquor in that shop."
      },
      {
        "word": "photocopy",
        "translation": "fotocopia; fotocopiar",
        "example": "Make a photocopy of the form."
      },
      {
        "word": "soda",
        "translation": "refresco, gaseosa",
        "example": "Would you like a soda?"
      },
      {
        "word": "rebuild",
        "translation": "reconstruir",
        "example": "They will rebuild the bridge."
      },
      {
        "word": "brass",
        "translation": "latón; metales (orquesta)",
        "example": "The door handle is made of brass."
      },
      {
        "word": "latin",
        "translation": "latín; latino",
        "example": "She studies Latin at school."
      },
      {
        "word": "furthermore",
        "translation": "además, asimismo",
        "example": "Furthermore, it is very cheap."
      },
      {
        "word": "reimburse",
        "translation": "reembolsar",
        "example": "The company will reimburse your expenses."
      },
      {
        "word": "gender",
        "translation": "género (sexo)",
        "example": "Gender equality is important."
      },
      {
        "word": "ace",
        "translation": "as; excelente",
        "example": "He is an ace pilot."
      },
      {
        "word": "rot",
        "translation": "pudrirse; podredumbre",
        "example": "The fruit will rot if you leave it."
      },
      {
        "word": "catalog",
        "translation": "catálogo",
        "example": "I looked through the catalog."
      },
      {
        "word": "granny",
        "translation": "abuelita",
        "example": "Granny knits warm sweaters."
      },
      {
        "word": "sunscreen",
        "translation": "protector solar, crema solar",
        "example": "Don't forget your sunscreen."
      },
      {
        "word": "guardian",
        "translation": "tutor, guardián",
        "example": "He is the child's legal guardian."
      },
      {
        "word": "sandy",
        "translation": "arenoso",
        "example": "We walked on a sandy beach."
      },
      {
        "word": "weekly",
        "translation": "semanal; semanalmente",
        "example": "We have a weekly meeting."
      },
      {
        "word": "jewel",
        "translation": "joya, alhaja",
        "example": "The crown has many jewels."
      },
      {
        "word": "wagon",
        "translation": "carro, vagón",
        "example": "The wagon was pulled by horses."
      },
      {
        "word": "newsletter",
        "translation": "boletín, newsletter",
        "example": "I read the company newsletter."
      },
      {
        "word": "delete",
        "translation": "borrar, eliminar",
        "example": "Delete the old files."
      },
      {
        "word": "publicity",
        "translation": "publicidad, promoción",
        "example": "The film got a lot of publicity."
      },
      {
        "word": "clan",
        "translation": "clan",
        "example": "The clan lived in the mountains."
      },
      {
        "word": "spreadsheet",
        "translation": "hoja de cálculo",
        "example": "Open the spreadsheet, please."
      },
      {
        "word": "effectively",
        "translation": "eficazmente, de forma efectiva",
        "example": "She communicates effectively."
      },
      {
        "word": "headline",
        "translation": "titular",
        "example": "The headline caught my eye."
      },
      {
        "word": "scholarship",
        "translation": "beca; erudición",
        "example": "She won a scholarship to study abroad."
      },
      {
        "word": "scope",
        "translation": "alcance, ámbito",
        "example": "This is outside the scope of the project."
      },
      {
        "word": "weekday",
        "translation": "día laborable, día de la semana",
        "example": "The office is open on weekdays."
      },
      {
        "word": "surprisingly",
        "translation": "sorprendentemente",
        "example": "Surprisingly, the exam was easy."
      },
      {
        "word": "slope",
        "translation": "pendiente, ladera",
        "example": "The house is on a steep slope."
      },
      {
        "word": "ink",
        "translation": "tinta",
        "example": "My pen is out of ink."
      },
      {
        "word": "authorize",
        "translation": "autorizar",
        "example": "The manager authorized the payment."
      }
    ],
    "5": [
      {
        "word": "lease",
        "translation": "arrendamiento; arrendar",
        "example": "We signed a one-year lease."
      },
      {
        "word": "fuse",
        "translation": "fusible; fundir(se)",
        "example": "The fuse blew and the lights went out."
      },
      {
        "word": "throne",
        "translation": "trono",
        "example": "The king sat on his throne."
      },
      {
        "word": "bomber",
        "translation": "bombardero",
        "example": "The bomber flew over the city."
      },
      {
        "word": "donor",
        "translation": "donante",
        "example": "He is a blood donor."
      },
      {
        "word": "dam",
        "translation": "presa, embalse",
        "example": "The dam provides electricity."
      },
      {
        "word": "minus",
        "translation": "menos",
        "example": "Ten minus three is seven."
      },
      {
        "word": "spectacular",
        "translation": "espectacular",
        "example": "The view was spectacular."
      },
      {
        "word": "hostile",
        "translation": "hostil",
        "example": "The crowd was hostile."
      },
      {
        "word": "bout",
        "translation": "combate; ataque, racha",
        "example": "He had a bout of flu."
      },
      {
        "word": "massage",
        "translation": "masaje; dar un masaje",
        "example": "I need a back massage."
      },
      {
        "word": "wit",
        "translation": "ingenio, agudeza",
        "example": "She is known for her quick wit."
      },
      {
        "word": "anchor",
        "translation": "ancla; presentador; anclar",
        "example": "The ship dropped anchor."
      },
      {
        "word": "fierce",
        "translation": "feroz, intenso",
        "example": "The dog looked fierce."
      },
      {
        "word": "landlord",
        "translation": "casero, propietario (de vivienda)",
        "example": "The landlord raised the rent."
      },
      {
        "word": "ache",
        "translation": "dolor; doler",
        "example": "I have an ache in my back."
      },
      {
        "word": "calendar",
        "translation": "calendario",
        "example": "Mark the date on the calendar."
      },
      {
        "word": "triumph",
        "translation": "triunfo; triunfar",
        "example": "The victory was a great triumph."
      },
      {
        "word": "descend",
        "translation": "descender, bajar",
        "example": "The plane began to descend."
      },
      {
        "word": "innocence",
        "translation": "inocencia",
        "example": "He proved his innocence."
      },
      {
        "word": "railroad",
        "translation": "ferrocarril, vía férrea",
        "example": "The railroad crosses the valley."
      },
      {
        "word": "goddess",
        "translation": "diosa",
        "example": "Athena was a Greek goddess."
      },
      {
        "word": "replacement",
        "translation": "reemplazo, sustituto",
        "example": "We need a replacement for the broken part."
      },
      {
        "word": "antique",
        "translation": "antigüedad; antiguo",
        "example": "She collects antique furniture."
      },
      {
        "word": "baker",
        "translation": "panadero, panadera",
        "example": "The baker makes fresh bread every morning."
      },
      {
        "word": "marshal",
        "translation": "mariscal; alguacil",
        "example": "The marshal rode into town."
      },
      {
        "word": "dope",
        "translation": "droga (coloq.); tonto",
        "example": "Don't be a dope."
      },
      {
        "word": "admiral",
        "translation": "almirante",
        "example": "The admiral commanded the fleet."
      },
      {
        "word": "groom",
        "translation": "novio (en la boda); acicalar",
        "example": "The groom waited at the altar."
      },
      {
        "word": "cue",
        "translation": "señal, pie (teatro); taco (billar)",
        "example": "Wait for my cue."
      },
      {
        "word": "limb",
        "translation": "miembro (brazo o pierna); rama grande",
        "example": "He broke a limb in the fall."
      },
      {
        "word": "minority",
        "translation": "minoría",
        "example": "Only a small minority voted no."
      },
      {
        "word": "elegant",
        "translation": "elegante",
        "example": "She wore an elegant dress."
      },
      {
        "word": "ballet",
        "translation": "ballet",
        "example": "She takes ballet lessons."
      },
      {
        "word": "crook",
        "translation": "delincuente, estafador (coloq.)",
        "example": "The police caught the crook."
      },
      {
        "word": "external",
        "translation": "externo, exterior",
        "example": "Use an external hard drive."
      },
      {
        "word": "curiosity",
        "translation": "curiosidad",
        "example": "Curiosity killed the cat."
      },
      {
        "word": "motel",
        "translation": "motel",
        "example": "We stayed at a cheap motel."
      },
      {
        "word": "grind",
        "translation": "moler, triturar; rutina agotadora",
        "example": "Grind the coffee beans."
      },
      {
        "word": "naughty",
        "translation": "travieso, malo (niño)",
        "example": "The naughty child hid the shoes."
      },
      {
        "word": "classify",
        "translation": "clasificar",
        "example": "Classify the animals by size."
      },
      {
        "word": "corps",
        "translation": "cuerpo (militar o diplomático)",
        "example": "He served in the Marine Corps."
      },
      {
        "word": "modify",
        "translation": "modificar",
        "example": "We had to modify the plan."
      },
      {
        "word": "compel",
        "translation": "obligar, forzar",
        "example": "The law compels drivers to stop."
      },
      {
        "word": "sperm",
        "translation": "esperma",
        "example": "Sperm cells are very small."
      },
      {
        "word": "scrap",
        "translation": "trozo, desecho; desechar",
        "example": "He sold the car for scrap."
      },
      {
        "word": "roommate",
        "translation": "compañero de piso",
        "example": "My roommate cooks very well."
      },
      {
        "word": "fare",
        "translation": "tarifa, precio del billete",
        "example": "The bus fare is two euros."
      },
      {
        "word": "shuttle",
        "translation": "lanzadera, servicio de enlace",
        "example": "A shuttle takes you to the airport."
      },
      {
        "word": "whatsoever",
        "translation": "en absoluto, de ningún tipo",
        "example": "I have no interest whatsoever."
      },
      {
        "word": "intrigue",
        "translation": "intriga; intrigar",
        "example": "The mystery intrigued me."
      },
      {
        "word": "teen",
        "translation": "adolescente",
        "example": "She is a teen magazine reader."
      },
      {
        "word": "sucker",
        "translation": "ingenuo, primo; chupón",
        "example": "Don't be a sucker."
      },
      {
        "word": "memorial",
        "translation": "monumento conmemorativo; conmemorativo",
        "example": "They visited the war memorial."
      },
      {
        "word": "provoke",
        "translation": "provocar",
        "example": "Don't provoke the dog."
      },
      {
        "word": "chin",
        "translation": "barbilla, mentón",
        "example": "He rested his chin on his hand."
      },
      {
        "word": "chime",
        "translation": "sonar (campanas); campanada",
        "example": "The clock chimed twelve."
      },
      {
        "word": "fabric",
        "translation": "tela, tejido",
        "example": "This fabric is soft."
      },
      {
        "word": "accountant",
        "translation": "contable, contador",
        "example": "The accountant checked the numbers."
      },
      {
        "word": "reign",
        "translation": "reinado; reinar",
        "example": "The queen's reign lasted fifty years."
      },
      {
        "word": "bunny",
        "translation": "conejito",
        "example": "The bunny ate a carrot."
      },
      {
        "word": "choir",
        "translation": "coro",
        "example": "She sings in the church choir."
      },
      {
        "word": "honeymoon",
        "translation": "luna de miel",
        "example": "They spent their honeymoon in Italy."
      },
      {
        "word": "strengthen",
        "translation": "fortalecer, reforzar",
        "example": "Exercise strengthens your muscles."
      },
      {
        "word": "accusation",
        "translation": "acusación",
        "example": "He denied the accusation."
      },
      {
        "word": "initially",
        "translation": "inicialmente, al principio",
        "example": "Initially, I didn't like it."
      },
      {
        "word": "casino",
        "translation": "casino",
        "example": "They lost money at the casino."
      },
      {
        "word": "undergo",
        "translation": "someterse a, pasar por",
        "example": "He will undergo surgery next week."
      },
      {
        "word": "stimulate",
        "translation": "estimular",
        "example": "Coffee stimulates the brain."
      },
      {
        "word": "assemble",
        "translation": "montar, reunir",
        "example": "I assembled the furniture myself."
      },
      {
        "word": "offensive",
        "translation": "ofensivo; ofensiva",
        "example": "That joke was offensive."
      },
      {
        "word": "balcony",
        "translation": "balcón",
        "example": "We had dinner on the balcony."
      },
      {
        "word": "tendency",
        "translation": "tendencia",
        "example": "He has a tendency to be late."
      },
      {
        "word": "cherry",
        "translation": "cereza",
        "example": "I love cherry pie."
      },
      {
        "word": "canal",
        "translation": "canal (artificial)",
        "example": "Boats travel along the canal."
      },
      {
        "word": "peanut",
        "translation": "cacahuete",
        "example": "I'm allergic to peanuts."
      },
      {
        "word": "violation",
        "translation": "violación (de una norma), infracción",
        "example": "It's a violation of the rules."
      },
      {
        "word": "legacy",
        "translation": "legado, herencia",
        "example": "He left a legacy of kindness."
      },
      {
        "word": "stumble",
        "translation": "tropezar",
        "example": "I stumbled on the stairs."
      },
      {
        "word": "manufacturer",
        "translation": "fabricante",
        "example": "The manufacturer offers a warranty."
      },
      {
        "word": "collector",
        "translation": "coleccionista; recaudador",
        "example": "He is a stamp collector."
      },
      {
        "word": "ditch",
        "translation": "zanja; abandonar (coloq.)",
        "example": "The car fell into a ditch."
      },
      {
        "word": "banker",
        "translation": "banquero, banquera",
        "example": "The banker approved the loan."
      },
      {
        "word": "slim",
        "translation": "delgado, esbelto",
        "example": "She has a slim figure."
      },
      {
        "word": "conquer",
        "translation": "conquistar, vencer",
        "example": "They conquered the city."
      },
      {
        "word": "evaluation",
        "translation": "evaluación",
        "example": "The evaluation takes two weeks."
      },
      {
        "word": "plea",
        "translation": "súplica; declaración (ante tribunal)",
        "example": "He entered a plea of not guilty."
      },
      {
        "word": "accidental",
        "translation": "accidental, fortuito",
        "example": "It was an accidental meeting."
      },
      {
        "word": "auto",
        "translation": "automóvil, coche",
        "example": "The auto industry is growing."
      },
      {
        "word": "vacuum",
        "translation": "aspirar; vacío",
        "example": "I vacuum the floor every day."
      },
      {
        "word": "quest",
        "translation": "búsqueda, misión",
        "example": "They went on a quest for treasure."
      },
      {
        "word": "jersey",
        "translation": "jersey, camiseta deportiva",
        "example": "He wore his team's jersey."
      },
      {
        "word": "grid",
        "translation": "cuadrícula, red eléctrica",
        "example": "The map is divided into a grid."
      },
      {
        "word": "notebook",
        "translation": "cuaderno; portátil",
        "example": "Write it in your notebook."
      },
      {
        "word": "sincere",
        "translation": "sincero",
        "example": "Please accept my sincere apologies."
      },
      {
        "word": "input",
        "translation": "entrada (datos); aportación",
        "example": "We need your input on this."
      },
      {
        "word": "virtue",
        "translation": "virtud",
        "example": "Patience is a virtue."
      },
      {
        "word": "interpretation",
        "translation": "interpretación",
        "example": "There are many interpretations of the poem."
      },
      {
        "word": "pursuit",
        "translation": "búsqueda, persecución; afición",
        "example": "The police are in pursuit of the thief."
      },
      {
        "word": "daisy",
        "translation": "margarita (flor)",
        "example": "She picked a daisy."
      },
      {
        "word": "cannon",
        "translation": "cañón",
        "example": "The cannon fired at dawn."
      },
      {
        "word": "voluntary",
        "translation": "voluntario",
        "example": "The work is voluntary."
      },
      {
        "word": "nap",
        "translation": "siesta; echar una siesta",
        "example": "I take a nap after lunch."
      },
      {
        "word": "tribal",
        "translation": "tribal",
        "example": "They study tribal customs."
      },
      {
        "word": "orphan",
        "translation": "huérfano, huérfana",
        "example": "The orphan found a new family."
      },
      {
        "word": "sausage",
        "translation": "salchicha, embutido",
        "example": "We grilled sausages."
      },
      {
        "word": "pork",
        "translation": "cerdo (carne)",
        "example": "I don't eat pork."
      },
      {
        "word": "paperwork",
        "translation": "papeleo, trámites",
        "example": "I have a lot of paperwork today."
      },
      {
        "word": "sofa",
        "translation": "sofá",
        "example": "The sofa is very comfortable."
      },
      {
        "word": "legitimate",
        "translation": "legítimo",
        "example": "It's a legitimate question."
      },
      {
        "word": "despair",
        "translation": "desesperación; desesperarse",
        "example": "She cried in despair."
      },
      {
        "word": "bribe",
        "translation": "soborno; sobornar",
        "example": "He refused to take the bribe."
      },
      {
        "word": "gig",
        "translation": "concierto (de banda), bolo",
        "example": "The band has a gig tonight."
      },
      {
        "word": "prostitute",
        "translation": "prostituta, prostituto",
        "example": "The law protects prostitutes from violence."
      },
      {
        "word": "dolphin",
        "translation": "delfín",
        "example": "We saw dolphins near the boat."
      },
      {
        "word": "booze",
        "translation": "alcohol, bebida (coloq.)",
        "example": "They brought some booze to the party."
      },
      {
        "word": "flirt",
        "translation": "flirtear; coqueteo",
        "example": "He likes to flirt with everyone."
      },
      {
        "word": "immigration",
        "translation": "inmigración",
        "example": "Immigration is a topic of debate."
      },
      {
        "word": "preach",
        "translation": "predicar",
        "example": "The priest preached about kindness."
      },
      {
        "word": "inhale",
        "translation": "inhalar, aspirar",
        "example": "Inhale deeply and relax."
      },
      {
        "word": "probe",
        "translation": "investigar, sondear; sonda",
        "example": "Police will probe the incident."
      },
      {
        "word": "forensic",
        "translation": "forense",
        "example": "Forensic experts examined the scene."
      },
      {
        "word": "donation",
        "translation": "donación, donativo",
        "example": "Thank you for your donation."
      },
      {
        "word": "elbow",
        "translation": "codo",
        "example": "I hurt my elbow."
      },
      {
        "word": "niece",
        "translation": "sobrina",
        "example": "My niece is three years old."
      },
      {
        "word": "transplant",
        "translation": "trasplante; trasplantar",
        "example": "He needs a kidney transplant."
      },
      {
        "word": "sober",
        "translation": "sobrio",
        "example": "He has been sober for a year."
      },
      {
        "word": "baron",
        "translation": "barón",
        "example": "The baron owned a large castle."
      },
      {
        "word": "courtesy",
        "translation": "cortesía",
        "example": "He treated us with courtesy."
      },
      {
        "word": "fisherman",
        "translation": "pescador",
        "example": "The fisherman caught a big fish."
      },
      {
        "word": "fragile",
        "translation": "frágil",
        "example": "Be careful, it's fragile."
      },
      {
        "word": "verse",
        "translation": "verso, estrofa",
        "example": "She wrote a verse for the card."
      },
      {
        "word": "republican",
        "translation": "republicano",
        "example": "He is a Republican voter."
      },
      {
        "word": "disgrace",
        "translation": "deshonra, vergüenza",
        "example": "It's a disgrace!"
      },
      {
        "word": "membership",
        "translation": "afiliación, ser socio",
        "example": "I renewed my gym membership."
      },
      {
        "word": "dependent",
        "translation": "dependiente",
        "example": "Children are dependent on their parents."
      },
      {
        "word": "ridge",
        "translation": "cresta, loma",
        "example": "They walked along the ridge."
      },
      {
        "word": "valentine",
        "translation": "San Valentín; tarjeta de San Valentín",
        "example": "He sent her a valentine."
      },
      {
        "word": "injection",
        "translation": "inyección",
        "example": "The nurse gave me an injection."
      },
      {
        "word": "grasp",
        "translation": "agarrar; comprensión",
        "example": "He grasped the rope tightly."
      },
      {
        "word": "inappropriate",
        "translation": "inapropiado",
        "example": "That comment was inappropriate."
      },
      {
        "word": "clap",
        "translation": "aplaudir; palmada",
        "example": "Everyone clapped at the end."
      },
      {
        "word": "intent",
        "translation": "intención; decidido",
        "example": "He had no intent to harm anyone."
      },
      {
        "word": "howl",
        "translation": "aullar; aullido",
        "example": "Wolves howl at night."
      },
      {
        "word": "harmony",
        "translation": "armonía",
        "example": "They live in harmony."
      },
      {
        "word": "partial",
        "translation": "parcial",
        "example": "He made a partial payment."
      },
      {
        "word": "lens",
        "translation": "lente, objetivo",
        "example": "The camera lens is dirty."
      },
      {
        "word": "horizon",
        "translation": "horizonte",
        "example": "The sun sank below the horizon."
      },
      {
        "word": "coffin",
        "translation": "ataúd",
        "example": "They carried the coffin slowly."
      },
      {
        "word": "subtle",
        "translation": "sutil",
        "example": "There is a subtle difference."
      },
      {
        "word": "ruby",
        "translation": "rubí",
        "example": "The ring has a red ruby."
      },
      {
        "word": "bizarre",
        "translation": "extraño, estrafalario",
        "example": "It was a bizarre story."
      },
      {
        "word": "motivation",
        "translation": "motivación",
        "example": "I have no motivation today."
      },
      {
        "word": "realm",
        "translation": "reino, ámbito",
        "example": "It's in the realm of possibility."
      },
      {
        "word": "lyric",
        "translation": "letra (de una canción); lírico",
        "example": "She wrote the lyrics for the song."
      },
      {
        "word": "butcher",
        "translation": "carnicero, carnicera",
        "example": "I buy meat from the butcher."
      },
      {
        "word": "erase",
        "translation": "borrar",
        "example": "Erase the board, please."
      },
      {
        "word": "catholic",
        "translation": "católico",
        "example": "She goes to a Catholic school."
      },
      {
        "word": "supervisor",
        "translation": "supervisor, supervisora",
        "example": "My supervisor approved my request."
      },
      {
        "word": "exile",
        "translation": "exilio; exiliar",
        "example": "He lived in exile for ten years."
      },
      {
        "word": "vodka",
        "translation": "vodka",
        "example": "He ordered vodka with ice."
      },
      {
        "word": "incorporate",
        "translation": "incorporar, integrar",
        "example": "Incorporate new ideas into the plan."
      },
      {
        "word": "toxic",
        "translation": "tóxico",
        "example": "This chemical is toxic."
      },
      {
        "word": "modest",
        "translation": "modesto",
        "example": "He is a modest man."
      },
      {
        "word": "absorb",
        "translation": "absorber",
        "example": "The sponge absorbs water."
      },
      {
        "word": "lame",
        "translation": "cojo; patético (coloq.)",
        "example": "The horse went lame."
      },
      {
        "word": "e-mail",
        "translation": "correo electrónico",
        "example": "I'll send you an e-mail."
      },
      {
        "word": "cult",
        "translation": "secta; de culto",
        "example": "He left the cult after two years."
      },
      {
        "word": "tactic",
        "translation": "táctica",
        "example": "It's a clever tactic."
      },
      {
        "word": "tray",
        "translation": "bandeja",
        "example": "The waiter carried a tray of drinks."
      },
      {
        "word": "rocky",
        "translation": "rocoso, pedregoso",
        "example": "The path is rocky."
      },
      {
        "word": "amendment",
        "translation": "enmienda",
        "example": "They voted on an amendment."
      },
      {
        "word": "atom",
        "translation": "átomo",
        "example": "An atom is very small."
      },
      {
        "word": "grandson",
        "translation": "nieto",
        "example": "My grandson is learning to read."
      },
      {
        "word": "boob",
        "translation": "pecho (coloq.); tonto; error",
        "example": "Don't be such a boob."
      },
      {
        "word": "frequent",
        "translation": "frecuente; frecuentar",
        "example": "He is a frequent visitor."
      },
      {
        "word": "outline",
        "translation": "esquema, contorno; esbozar",
        "example": "Write an outline of your essay."
      },
      {
        "word": "radar",
        "translation": "radar",
        "example": "The radar detected a plane."
      },
      {
        "word": "deceive",
        "translation": "engañar",
        "example": "He deceived his friends."
      },
      {
        "word": "warren",
        "translation": "conejera; laberinto",
        "example": "The rabbits live in a warren."
      },
      {
        "word": "med",
        "translation": "medicamento (abreviatura coloq.)",
        "example": "Take your meds."
      },
      {
        "word": "grandchild",
        "translation": "nieto, nieta",
        "example": "She has five grandchildren."
      },
      {
        "word": "follower",
        "translation": "seguidor, seguidora",
        "example": "She has many followers online."
      },
      {
        "word": "globe",
        "translation": "globo terráqueo; mundo",
        "example": "We have a globe on the desk."
      },
      {
        "word": "marble",
        "translation": "mármol; canica",
        "example": "The floor is made of marble."
      },
      {
        "word": "conceal",
        "translation": "ocultar, esconder",
        "example": "He tried to conceal the truth."
      },
      {
        "word": "pervert",
        "translation": "pervertido; pervertir",
        "example": "The police arrested a pervert."
      },
      {
        "word": "disable",
        "translation": "desactivar; incapacitar",
        "example": "Disable the alarm before opening the door."
      },
      {
        "word": "parliament",
        "translation": "parlamento",
        "example": "The parliament passed a new law."
      },
      {
        "word": "elite",
        "translation": "élite",
        "example": "Only the elite attend that club."
      },
      {
        "word": "mug",
        "translation": "taza grande, jarra; atracar",
        "example": "I drink tea from a big mug."
      },
      {
        "word": "obstacle",
        "translation": "obstáculo",
        "example": "Money is the main obstacle."
      },
      {
        "word": "salmon",
        "translation": "salmón",
        "example": "We had grilled salmon for dinner."
      },
      {
        "word": "ranch",
        "translation": "rancho, hacienda",
        "example": "They live on a cattle ranch."
      },
      {
        "word": "initiate",
        "translation": "iniciar",
        "example": "They will initiate the project in May."
      },
      {
        "word": "bandit",
        "translation": "bandido",
        "example": "The bandits robbed the train."
      },
      {
        "word": "goose",
        "translation": "ganso, oca",
        "example": "A goose crossed the road."
      },
      {
        "word": "fuss",
        "translation": "alboroto, escándalo",
        "example": "Don't make a fuss."
      },
      {
        "word": "prom",
        "translation": "baile de graduación",
        "example": "She wore a blue dress to the prom."
      },
      {
        "word": "integrity",
        "translation": "integridad",
        "example": "He is a man of integrity."
      },
      {
        "word": "irish",
        "translation": "irlandés; irlandesa",
        "example": "She loves Irish music."
      },
      {
        "word": "nanny",
        "translation": "niñera",
        "example": "The nanny looks after the children."
      },
      {
        "word": "lawsuit",
        "translation": "demanda judicial",
        "example": "They filed a lawsuit against the company."
      },
      {
        "word": "c'mon",
        "translation": "venga, vamos (coloq. de «come on»)",
        "example": "C'mon, we're late!"
      },
      {
        "word": "capability",
        "translation": "capacidad, aptitud",
        "example": "The machine has new capabilities."
      },
      {
        "word": "blend",
        "translation": "mezclar; mezcla",
        "example": "Blend the fruit with milk."
      },
      {
        "word": "undercover",
        "translation": "encubierto, de incógnito",
        "example": "He worked undercover for the police."
      },
      {
        "word": "inspection",
        "translation": "inspección",
        "example": "The car passed the inspection."
      },
      {
        "word": "poker",
        "translation": "póquer",
        "example": "They play poker on Fridays."
      },
      {
        "word": "korean",
        "translation": "coreano; coreana",
        "example": "I'm learning Korean."
      },
      {
        "word": "measurement",
        "translation": "medida, medición",
        "example": "Take the measurements of the room."
      },
      {
        "word": "significance",
        "translation": "importancia, significado",
        "example": "The date has historical significance."
      },
      {
        "word": "artificial",
        "translation": "artificial",
        "example": "The flowers are artificial."
      },
      {
        "word": "intact",
        "translation": "intacto",
        "example": "The box arrived intact."
      },
      {
        "word": "identical",
        "translation": "idéntico",
        "example": "The twins have identical clothes."
      },
      {
        "word": "tenant",
        "translation": "inquilino, inquilina",
        "example": "The tenant pays the rent monthly."
      },
      {
        "word": "differ",
        "translation": "diferir, ser distinto",
        "example": "Our opinions differ."
      },
      {
        "word": "obsession",
        "translation": "obsesión",
        "example": "Football is his obsession."
      },
      {
        "word": "orchestra",
        "translation": "orquesta",
        "example": "The orchestra played beautifully."
      },
      {
        "word": "contemporary",
        "translation": "contemporáneo",
        "example": "She likes contemporary art."
      },
      {
        "word": "shaft",
        "translation": "eje, pozo; asta",
        "example": "They went down the mine shaft."
      },
      {
        "word": "mustache",
        "translation": "bigote",
        "example": "He has a thick mustache."
      },
      {
        "word": "bait",
        "translation": "cebo, carnada; cebar",
        "example": "The fisherman put bait on the hook."
      },
      {
        "word": "european",
        "translation": "europeo; europea",
        "example": "She is a European citizen."
      },
      {
        "word": "murmur",
        "translation": "murmullo; murmurar",
        "example": "We heard a soft murmur."
      },
      {
        "word": "acquaintance",
        "translation": "conocido, conocida",
        "example": "He's just an acquaintance, not a friend."
      },
      {
        "word": "tutor",
        "translation": "tutor, profesor particular",
        "example": "She has a math tutor."
      },
      {
        "word": "margin",
        "translation": "margen",
        "example": "Write notes in the margin."
      },
      {
        "word": "gum",
        "translation": "chicle; encía",
        "example": "Do you have any gum?"
      },
      {
        "word": "australia",
        "translation": "Australia",
        "example": "Kangaroos live in Australia."
      },
      {
        "word": "physician",
        "translation": "médico, médica",
        "example": "The physician examined the patient."
      },
      {
        "word": "chapel",
        "translation": "capilla",
        "example": "They married in a small chapel."
      },
      {
        "word": "snore",
        "translation": "roncar; ronquido",
        "example": "He snores loudly at night."
      },
      {
        "word": "gunfire",
        "translation": "disparos, tiroteo",
        "example": "We heard gunfire in the distance."
      },
      {
        "word": "terminal",
        "translation": "terminal; terminal (enfermedad)",
        "example": "Meet me at Terminal 2."
      },
      {
        "word": "prop",
        "translation": "accesorio (teatro); apoyar",
        "example": "The actor held a prop sword."
      },
      {
        "word": "hooker",
        "translation": "prostituta (coloq., vulgar); talonador (rugby)",
        "example": "The rugby hooker threw the ball in."
      },
      {
        "word": "petty",
        "translation": "insignificante, mezquino",
        "example": "Don't be so petty."
      },
      {
        "word": "crow",
        "translation": "cuervo; cantar el gallo",
        "example": "A crow sat on the fence."
      },
      {
        "word": "expansion",
        "translation": "expansión",
        "example": "The company plans an expansion."
      },
      {
        "word": "ruler",
        "translation": "gobernante; regla",
        "example": "Use a ruler to draw a line."
      },
      {
        "word": "regain",
        "translation": "recuperar, recobrar",
        "example": "He regained consciousness."
      },
      {
        "word": "mexican",
        "translation": "mexicano; mexicana",
        "example": "I love Mexican food."
      },
      {
        "word": "bacon",
        "translation": "beicon, panceta",
        "example": "I had eggs and bacon for breakfast."
      },
      {
        "word": "dutch",
        "translation": "holandés, neerlandés; holandesa",
        "example": "She is learning Dutch."
      },
      {
        "word": "assembly",
        "translation": "asamblea; montaje",
        "example": "The school assembly starts at nine."
      },
      {
        "word": "automatic",
        "translation": "automático",
        "example": "It's an automatic car."
      },
      {
        "word": "darn",
        "translation": "¡caramba! (eufemismo); zurcir",
        "example": "Darn, I forgot my keys!"
      },
      {
        "word": "yen",
        "translation": "yen (moneda de Japón)",
        "example": "The shirt costs 3,000 yen."
      },
      {
        "word": "mob",
        "translation": "multitud, turba; mafia",
        "example": "An angry mob gathered outside."
      },
      {
        "word": "monthly",
        "translation": "mensual; mensualmente",
        "example": "I pay a monthly fee."
      },
      {
        "word": "disco",
        "translation": "discoteca; música disco",
        "example": "We went to a disco on Saturday."
      },
      {
        "word": "instruct",
        "translation": "instruir, indicar",
        "example": "The teacher instructed us to wait."
      },
      {
        "word": "tobacco",
        "translation": "tabaco",
        "example": "Tobacco is harmful to health."
      },
      {
        "word": "retrieve",
        "translation": "recuperar, recobrar",
        "example": "The dog retrieved the ball."
      },
      {
        "word": "analyst",
        "translation": "analista",
        "example": "The analyst studied the market."
      },
      {
        "word": "mortal",
        "translation": "mortal",
        "example": "All humans are mortal."
      },
      {
        "word": "pistol",
        "translation": "pistola",
        "example": "The police officer carries a pistol."
      },
      {
        "word": "transmit",
        "translation": "transmitir",
        "example": "The radio transmits music all day."
      },
      {
        "word": "smack",
        "translation": "bofetada, golpe; golpear",
        "example": "He gave the ball a smack."
      },
      {
        "word": "ham",
        "translation": "jamón",
        "example": "I'd like a ham sandwich."
      },
      {
        "word": "lounge",
        "translation": "salón, sala de estar; holgazanear",
        "example": "We waited in the airport lounge."
      },
      {
        "word": "caption",
        "translation": "pie de foto; subtítulo",
        "example": "Read the caption under the photo."
      },
      {
        "word": "villain",
        "translation": "villano, malo (de ficción)",
        "example": "The villain escaped at the end."
      },
      {
        "word": "unlock",
        "translation": "abrir (con llave), desbloquear",
        "example": "Unlock the door, please."
      },
      {
        "word": "savage",
        "translation": "salvaje, feroz",
        "example": "The dog gave a savage growl."
      },
      {
        "word": "largely",
        "translation": "en gran parte",
        "example": "The report is largely correct."
      },
      {
        "word": "corruption",
        "translation": "corrupción",
        "example": "The mayor was accused of corruption."
      },
      {
        "word": "burial",
        "translation": "entierro, sepelio",
        "example": "The burial took place on Monday."
      },
      {
        "word": "refresh",
        "translation": "refrescar, actualizar",
        "example": "Refresh the page to see the update."
      },
      {
        "word": "specialty",
        "translation": "especialidad",
        "example": "Paella is the specialty of the house."
      },
      {
        "word": "determination",
        "translation": "determinación, empeño",
        "example": "She showed great determination."
      },
      {
        "word": "verify",
        "translation": "verificar, comprobar",
        "example": "Please verify your email address."
      },
      {
        "word": "carrier",
        "translation": "transportista, portador; aerolínea",
        "example": "The carrier delivered the package."
      },
      {
        "word": "postpone",
        "translation": "aplazar, posponer",
        "example": "They postponed the meeting."
      },
      {
        "word": "index",
        "translation": "índice",
        "example": "Look it up in the index."
      },
      {
        "word": "experimental",
        "translation": "experimental",
        "example": "It's an experimental method."
      },
      {
        "word": "adjustment",
        "translation": "ajuste, adaptación",
        "example": "Make a small adjustment."
      },
      {
        "word": "thanksgiving",
        "translation": "Acción de Gracias; acción de gracias",
        "example": "We eat turkey on Thanksgiving."
      },
      {
        "word": "guidance",
        "translation": "orientación, guía",
        "example": "Students need guidance."
      },
      {
        "word": "firmly",
        "translation": "firmemente",
        "example": "He firmly shook my hand."
      },
      {
        "word": "historian",
        "translation": "historiador, historiadora",
        "example": "The historian wrote a book on Rome."
      },
      {
        "word": "implication",
        "translation": "implicación, consecuencia",
        "example": "The implications are serious."
      },
      {
        "word": "scramble",
        "translation": "trepar, apresurarse; revolver",
        "example": "They scrambled up the rocks."
      },
      {
        "word": "adore",
        "translation": "adorar",
        "example": "The kids adore their grandmother."
      },
      {
        "word": "irritate",
        "translation": "irritar, molestar",
        "example": "The noise irritates me."
      },
      {
        "word": "breakdown",
        "translation": "avería; colapso nervioso",
        "example": "We had a car breakdown on the highway."
      },
      {
        "word": "mechanical",
        "translation": "mecánico",
        "example": "There is a mechanical problem."
      },
      {
        "word": "immunity",
        "translation": "inmunidad",
        "example": "Vaccines give immunity to diseases."
      },
      {
        "word": "deadline",
        "translation": "plazo, fecha límite",
        "example": "The deadline is Friday."
      },
      {
        "word": "oath",
        "translation": "juramento",
        "example": "He took an oath of loyalty."
      },
      {
        "word": "perfume",
        "translation": "perfume",
        "example": "She wears a sweet perfume."
      },
      {
        "word": "flexible",
        "translation": "flexible",
        "example": "I have flexible working hours."
      },
      {
        "word": "strangle",
        "translation": "estrangular",
        "example": "The story describes a man who was strangled."
      },
      {
        "word": "impulse",
        "translation": "impulso",
        "example": "He bought it on impulse."
      },
      {
        "word": "autopsy",
        "translation": "autopsia",
        "example": "The autopsy showed the cause of death."
      },
      {
        "word": "conventional",
        "translation": "convencional",
        "example": "They use conventional methods."
      },
      {
        "word": "profound",
        "translation": "profundo",
        "example": "It was a profound change."
      },
      {
        "word": "restrain",
        "translation": "contener, sujetar",
        "example": "He couldn't restrain his laughter."
      },
      {
        "word": "vault",
        "translation": "cámara acorazada; bóveda; saltar",
        "example": "The money is in the bank vault."
      },
      {
        "word": "whine",
        "translation": "quejarse, gimotear; quejido",
        "example": "Stop whining and help me."
      },
      {
        "word": "uncover",
        "translation": "descubrir, destapar",
        "example": "The police uncovered a plot."
      },
      {
        "word": "supreme",
        "translation": "supremo",
        "example": "The Supreme Court made a decision."
      },
      {
        "word": "slaughter",
        "translation": "matanza; sacrificar (animales)",
        "example": "The slaughter of animals is regulated."
      },
      {
        "word": "disappointment",
        "translation": "decepción",
        "example": "The result was a disappointment."
      },
      {
        "word": "vague",
        "translation": "vago, impreciso",
        "example": "His answer was vague."
      },
      {
        "word": "cigar",
        "translation": "puro, cigarro",
        "example": "He smoked a cigar after dinner."
      },
      {
        "word": "protective",
        "translation": "protector",
        "example": "She is very protective of her kids."
      },
      {
        "word": "sensation",
        "translation": "sensación",
        "example": "I felt a burning sensation."
      },
      {
        "word": "pint",
        "translation": "pinta (medida)",
        "example": "He ordered a pint of beer."
      },
      {
        "word": "theoretical",
        "translation": "teórico",
        "example": "It's only a theoretical possibility."
      },
      {
        "word": "fiber",
        "translation": "fibra",
        "example": "Vegetables are rich in fiber."
      },
      {
        "word": "coma",
        "translation": "coma",
        "example": "The patient is in a coma."
      },
      {
        "word": "auntie",
        "translation": "tita, tía (cariñoso)",
        "example": "Auntie Mary bakes great cakes."
      },
      {
        "word": "strand",
        "translation": "hebra, hilo; varar",
        "example": "A strand of hair fell on her face."
      },
      {
        "word": "stroll",
        "translation": "paseo; pasear",
        "example": "We took a stroll along the river."
      },
      {
        "word": "gangster",
        "translation": "gánster, mafioso",
        "example": "The film is about a gangster."
      },
      {
        "word": "rascal",
        "translation": "pillo, granuja",
        "example": "That little rascal hid my keys!"
      },
      {
        "word": "excess",
        "translation": "exceso",
        "example": "Avoid excess salt in your food."
      },
      {
        "word": "magnetic",
        "translation": "magnético",
        "example": "The needle is magnetic."
      },
      {
        "word": "essence",
        "translation": "esencia",
        "example": "Honesty is the essence of friendship."
      },
      {
        "word": "outstanding",
        "translation": "sobresaliente, destacado; pendiente",
        "example": "She gave an outstanding performance."
      },
      {
        "word": "wardrobe",
        "translation": "armario (de ropa); vestuario",
        "example": "My clothes are in the wardrobe."
      },
      {
        "word": "pm",
        "translation": "de la tarde/noche (p. m.)",
        "example": "The meeting is at 3 pm."
      },
      {
        "word": "cemetery",
        "translation": "cementerio",
        "example": "The cemetery is on the hill."
      },
      {
        "word": "lump",
        "translation": "bulto, terrón; grumo",
        "example": "He felt a lump on his neck."
      },
      {
        "word": "halloween",
        "translation": "Halloween",
        "example": "Kids wear costumes on Halloween."
      },
      {
        "word": "hawk",
        "translation": "halcón; gavilán",
        "example": "A hawk flew over the field."
      },
      {
        "word": "honorable",
        "translation": "honorable, honroso",
        "example": "He is an honorable man."
      },
      {
        "word": "muffle",
        "translation": "amortiguar, apagar (sonido)",
        "example": "The thick walls muffle the noise."
      },
      {
        "word": "dummy",
        "translation": "maniquí; tonto; chupete",
        "example": "The dummy in the window wears a suit."
      },
      {
        "word": "oops",
        "translation": "¡ups!",
        "example": "Oops, I dropped my phone."
      },
      {
        "word": "inject",
        "translation": "inyectar",
        "example": "The nurse injected the vaccine."
      },
      {
        "word": "cluster",
        "translation": "grupo, racimo",
        "example": "A cluster of houses stood on the hill."
      },
      {
        "word": "skinny",
        "translation": "flaco, delgado",
        "example": "He was a skinny little boy."
      },
      {
        "word": "dough",
        "translation": "masa",
        "example": "Knead the dough for ten minutes."
      },
      {
        "word": "interaction",
        "translation": "interacción",
        "example": "Social interaction is important."
      },
      {
        "word": "blaze",
        "translation": "incendio, llamarada; arder",
        "example": "Firefighters fought the blaze."
      },
      {
        "word": "classmate",
        "translation": "compañero de clase",
        "example": "My classmate lent me a pen."
      },
      {
        "word": "shepherd",
        "translation": "pastor, pastora",
        "example": "The shepherd led the sheep home."
      },
      {
        "word": "assassin",
        "translation": "asesino (de una figura importante)",
        "example": "The assassin was never caught."
      },
      {
        "word": "representation",
        "translation": "representación",
        "example": "The painting is a representation of peace."
      },
      {
        "word": "overlook",
        "translation": "pasar por alto; dar a",
        "example": "Don't overlook this detail."
      },
      {
        "word": "participant",
        "translation": "participante",
        "example": "Each participant received a certificate."
      },
      {
        "word": "liability",
        "translation": "responsabilidad (legal); desventaja",
        "example": "The company accepts no liability."
      },
      {
        "word": "shallow",
        "translation": "poco profundo; superficial",
        "example": "The river is shallow here."
      },
      {
        "word": "rev",
        "translation": "acelerar (motor); revolución (rpm)",
        "example": "He revved the engine."
      },
      {
        "word": "brat",
        "translation": "niño malcriado, mocoso",
        "example": "Stop acting like a brat."
      },
      {
        "word": "lid",
        "translation": "tapa",
        "example": "Put the lid on the pot."
      },
      {
        "word": "heroin",
        "translation": "heroína",
        "example": "Heroin is a dangerous drug."
      },
      {
        "word": "psycho",
        "translation": "psicópata (coloq.)",
        "example": "The film is about a psycho killer."
      },
      {
        "word": "fracture",
        "translation": "fractura; fracturar",
        "example": "He has a fracture in his leg."
      },
      {
        "word": "inn",
        "translation": "posada, mesón",
        "example": "We stayed at a small inn."
      },
      {
        "word": "poke",
        "translation": "pinchar, empujar con el dedo",
        "example": "Don't poke me in the eye."
      },
      {
        "word": "outsider",
        "translation": "forastero, extraño",
        "example": "He always felt like an outsider."
      },
      {
        "word": "treaty",
        "translation": "tratado",
        "example": "The two countries signed a treaty."
      },
      {
        "word": "canvas",
        "translation": "lienzo; lona",
        "example": "The painter bought a new canvas."
      },
      {
        "word": "imitate",
        "translation": "imitar",
        "example": "The parrot imitates my voice."
      },
      {
        "word": "exceptional",
        "translation": "excepcional",
        "example": "She is an exceptional student."
      },
      {
        "word": "bingo",
        "translation": "bingo; ¡exacto!",
        "example": "Grandma plays bingo on Fridays."
      },
      {
        "word": "mankind",
        "translation": "humanidad, género humano",
        "example": "This invention helps mankind."
      },
      {
        "word": "enforcement",
        "translation": "aplicación (de la ley)",
        "example": "Law enforcement officers arrived quickly."
      },
      {
        "word": "penetrate",
        "translation": "penetrar",
        "example": "The knife penetrated the wood."
      },
      {
        "word": "idol",
        "translation": "ídolo",
        "example": "He is a teenage idol."
      },
      {
        "word": "artery",
        "translation": "arteria",
        "example": "The artery carries blood from the heart."
      },
      {
        "word": "workshop",
        "translation": "taller",
        "example": "He repairs bikes in his workshop."
      },
      {
        "word": "distinction",
        "translation": "distinción, diferencia",
        "example": "There is a clear distinction between them."
      },
      {
        "word": "crab",
        "translation": "cangrejo",
        "example": "We ate crab at the beach."
      },
      {
        "word": "doughnut",
        "translation": "rosquilla, dónut",
        "example": "I'd like a chocolate doughnut."
      },
      {
        "word": "cocaine",
        "translation": "cocaína",
        "example": "Cocaine is an illegal drug."
      },
      {
        "word": "chili",
        "translation": "chile, guindilla",
        "example": "The sauce has chili in it."
      },
      {
        "word": "sway",
        "translation": "balancearse; influir",
        "example": "The trees swayed in the wind."
      },
      {
        "word": "legendary",
        "translation": "legendario",
        "example": "He is a legendary musician."
      },
      {
        "word": "occupation",
        "translation": "ocupación, profesión; ocupación (militar)",
        "example": "What is your occupation?"
      },
      {
        "word": "mentor",
        "translation": "mentor, mentora",
        "example": "She was my mentor at work."
      },
      {
        "word": "vomit",
        "translation": "vomitar; vómito",
        "example": "The child felt sick and vomited."
      },
      {
        "word": "maneuver",
        "translation": "maniobra; maniobrar",
        "example": "The driver made a quick maneuver."
      },
      {
        "word": "stripe",
        "translation": "raya, franja",
        "example": "The flag has red and white stripes."
      },
      {
        "word": "claw",
        "translation": "garra, uña (de animal)",
        "example": "The cat scratched me with its claw."
      },
      {
        "word": "psychic",
        "translation": "vidente; psíquico",
        "example": "She visited a psychic."
      },
      {
        "word": "brother-in-law",
        "translation": "cuñado",
        "example": "My brother-in-law is a doctor."
      },
      {
        "word": "pigeon",
        "translation": "paloma",
        "example": "Pigeons gather in the square."
      },
      {
        "word": "condom",
        "translation": "preservativo",
        "example": "Condoms help prevent infections."
      },
      {
        "word": "sparkle",
        "translation": "brillar, centellear; destello",
        "example": "The stars sparkle at night."
      },
      {
        "word": "adorable",
        "translation": "adorable",
        "example": "The puppy is adorable."
      },
      {
        "word": "prosecute",
        "translation": "procesar, enjuiciar",
        "example": "They will prosecute the thief."
      },
      {
        "word": "nun",
        "translation": "monja",
        "example": "The nun lives in a convent."
      },
      {
        "word": "fax",
        "translation": "fax; enviar por fax",
        "example": "Please send me a fax."
      },
      {
        "word": "realistic",
        "translation": "realista",
        "example": "Be realistic about your goals."
      },
      {
        "word": "noodle",
        "translation": "fideo, tallarín",
        "example": "I'd like a bowl of noodle soup."
      },
      {
        "word": "astonish",
        "translation": "asombrar, sorprender",
        "example": "Her talent astonished everyone."
      },
      {
        "word": "identification",
        "translation": "identificación",
        "example": "Please show your identification."
      },
      {
        "word": "found",
        "translation": "fundar, establecer",
        "example": "They want to found a new school."
      },
      {
        "word": "rural",
        "translation": "rural",
        "example": "They live in a rural area."
      },
      {
        "word": "wrestle",
        "translation": "luchar (cuerpo a cuerpo)",
        "example": "The boys wrestled on the grass."
      },
      {
        "word": "sixth",
        "translation": "sexto",
        "example": "Today is the sixth of June."
      },
      {
        "word": "constitution",
        "translation": "constitución",
        "example": "The Constitution protects our rights."
      },
      {
        "word": "composition",
        "translation": "composición",
        "example": "Write a composition about your family."
      },
      {
        "word": "dinosaur",
        "translation": "dinosaurio",
        "example": "Kids love dinosaurs."
      },
      {
        "word": "literary",
        "translation": "literario",
        "example": "She won a literary prize."
      },
      {
        "word": "emphasize",
        "translation": "enfatizar, destacar",
        "example": "The teacher emphasized the importance of reading."
      },
      {
        "word": "batter",
        "translation": "masa líquida (para rebozar); batear",
        "example": "Dip the fish in the batter."
      },
      {
        "word": "scum",
        "translation": "escoria; capa de espuma",
        "example": "There is scum on the pond."
      },
      {
        "word": "x-ray",
        "translation": "radiografía; rayos X",
        "example": "The doctor ordered an X-ray."
      },
      {
        "word": "petition",
        "translation": "petición, petición firmada",
        "example": "Thousands signed the petition."
      },
      {
        "word": "temptation",
        "translation": "tentación",
        "example": "I can't resist temptation."
      },
      {
        "word": "villa",
        "translation": "villa, chalet",
        "example": "They rented a villa by the sea."
      },
      {
        "word": "wizard",
        "translation": "mago, hechicero",
        "example": "The wizard waved his wand."
      },
      {
        "word": "uh-uh",
        "translation": "no (negación coloquial)",
        "example": "Uh-uh, I don't think so."
      },
      {
        "word": "disposal",
        "translation": "eliminación, desecho",
        "example": "Waste disposal is a problem."
      },
      {
        "word": "suburb",
        "translation": "barrio periférico, suburbio",
        "example": "They live in a quiet suburb."
      },
      {
        "word": "syndrome",
        "translation": "síndrome",
        "example": "He has a rare syndrome."
      },
      {
        "word": "shitty",
        "translation": "de mierda, pésimo (vulgar)",
        "example": "I had a shitty day at work."
      },
      {
        "word": "therapist",
        "translation": "terapeuta",
        "example": "She sees a therapist every week."
      },
      {
        "word": "corporal",
        "translation": "cabo (militar); corporal",
        "example": "The corporal gave the order."
      },
      {
        "word": "tub",
        "translation": "bañera; tarrina",
        "example": "The baby is in the tub."
      },
      {
        "word": "exclaim",
        "translation": "exclamar",
        "example": "\"Wow!\" she exclaimed."
      },
      {
        "word": "swamp",
        "translation": "pantano; inundar",
        "example": "The swamp is full of frogs."
      },
      {
        "word": "variation",
        "translation": "variación",
        "example": "There is a small variation in price."
      },
      {
        "word": "heir",
        "translation": "heredero, heredera",
        "example": "He is the heir to the throne."
      },
      {
        "word": "visa",
        "translation": "visado, visa",
        "example": "I need a visa to travel there."
      },
      {
        "word": "nod",
        "translation": "asentir con la cabeza; cabezada",
        "example": "She nodded in agreement."
      },
      {
        "word": "gag",
        "translation": "mordaza; chiste; dar arcadas",
        "example": "They put a gag on the prisoner."
      },
      {
        "word": "pickle",
        "translation": "encurtido, pepinillo",
        "example": "I like pickles on my burger."
      },
      {
        "word": "exotic",
        "translation": "exótico",
        "example": "She grows exotic plants."
      },
      {
        "word": "bracelet",
        "translation": "pulsera",
        "example": "She wore a silver bracelet."
      },
      {
        "word": "distort",
        "translation": "distorsionar, deformar",
        "example": "The mirror distorts your face."
      },
      {
        "word": "wheat",
        "translation": "trigo",
        "example": "The farmer grows wheat."
      },
      {
        "word": "gal",
        "translation": "chica (coloq.)",
        "example": "She's a smart gal."
      },
      {
        "word": "proposition",
        "translation": "propuesta, proposición",
        "example": "He made me an interesting proposition."
      },
      {
        "word": "cellphone",
        "translation": "teléfono móvil, celular",
        "example": "Please turn off your cellphone."
      },
      {
        "word": "bra",
        "translation": "sujetador",
        "example": "She bought a new bra."
      },
      {
        "word": "presumably",
        "translation": "presumiblemente, supuestamente",
        "example": "Presumably, he is at home."
      },
      {
        "word": "complicate",
        "translation": "complicar",
        "example": "Don't complicate things."
      },
      {
        "word": "flock",
        "translation": "bandada, rebaño",
        "example": "A flock of birds flew over us."
      },
      {
        "word": "african",
        "translation": "africano; africana",
        "example": "She loves African music."
      },
      {
        "word": "evaluate",
        "translation": "evaluar",
        "example": "We need to evaluate the results."
      },
      {
        "word": "vitamin",
        "translation": "vitamina",
        "example": "Oranges are rich in vitamin C."
      },
      {
        "word": "efficiency",
        "translation": "eficiencia",
        "example": "We want to improve efficiency."
      },
      {
        "word": "prep",
        "translation": "preparación (coloq.); preparar",
        "example": "I need some prep time for the exam."
      },
      {
        "word": "wildlife",
        "translation": "fauna silvestre, vida salvaje",
        "example": "The park protects local wildlife."
      },
      {
        "word": "awareness",
        "translation": "conciencia, concienciación",
        "example": "The campaign raises awareness."
      },
      {
        "word": "sonic",
        "translation": "sónico",
        "example": "The plane broke the sonic barrier."
      },
      {
        "word": "ratio",
        "translation": "proporción, razón",
        "example": "The ratio of boys to girls is two to one."
      },
      {
        "word": "artistic",
        "translation": "artístico",
        "example": "She has an artistic talent."
      },
      {
        "word": "parole",
        "translation": "libertad condicional",
        "example": "He was released on parole."
      },
      {
        "word": "rainbow",
        "translation": "arcoíris",
        "example": "A rainbow appeared after the rain."
      },
      {
        "word": "caller",
        "translation": "persona que llama",
        "example": "The caller hung up."
      },
      {
        "word": "waist",
        "translation": "cintura",
        "example": "The belt goes around your waist."
      },
      {
        "word": "microphone",
        "translation": "micrófono",
        "example": "Speak into the microphone."
      },
      {
        "word": "virtual",
        "translation": "virtual",
        "example": "We had a virtual meeting."
      },
      {
        "word": "rusty",
        "translation": "oxidado",
        "example": "The gate is rusty."
      },
      {
        "word": "marker",
        "translation": "rotulador; marcador",
        "example": "Use a red marker."
      },
      {
        "word": "repay",
        "translation": "devolver (dinero), reembolsar",
        "example": "I will repay you next week."
      },
      {
        "word": "primitive",
        "translation": "primitivo",
        "example": "They used primitive tools."
      },
      {
        "word": "waitress",
        "translation": "camarera",
        "example": "The waitress brought the menu."
      },
      {
        "word": "sunlight",
        "translation": "luz del sol",
        "example": "Plants need sunlight."
      },
      {
        "word": "confine",
        "translation": "confinar, limitar",
        "example": "The animals are confined to a small area."
      },
      {
        "word": "ferry",
        "translation": "ferri, transbordador",
        "example": "We took the ferry to the island."
      },
      {
        "word": "bald",
        "translation": "calvo",
        "example": "My uncle is bald."
      },
      {
        "word": "venue",
        "translation": "lugar (de un evento)",
        "example": "The concert venue is full."
      },
      {
        "word": "dynamic",
        "translation": "dinámico",
        "example": "She is a dynamic leader."
      },
      {
        "word": "render",
        "translation": "hacer, prestar; representar",
        "example": "The accident rendered him unable to work."
      },
      {
        "word": "warden",
        "translation": "guardián, alcaide",
        "example": "The warden walked through the prison."
      },
      {
        "word": "startle",
        "translation": "sobresaltar, asustar",
        "example": "The loud noise startled me."
      },
      {
        "word": "rational",
        "translation": "racional",
        "example": "Be rational about this."
      },
      {
        "word": "hush",
        "translation": "silencio; silenciar, callar",
        "example": "A hush fell over the crowd."
      },
      {
        "word": "rag",
        "translation": "trapo",
        "example": "Clean it with a rag."
      },
      {
        "word": "smuggle",
        "translation": "contrabandear, pasar de contrabando",
        "example": "They tried to smuggle goods across the border."
      },
      {
        "word": "admission",
        "translation": "admisión, entrada; confesión",
        "example": "Admission is free on Sundays."
      },
      {
        "word": "upward",
        "translation": "hacia arriba",
        "example": "The path leads upward."
      },
      {
        "word": "dispose",
        "translation": "deshacerse de (dispose of)",
        "example": "Dispose of the waste properly."
      },
      {
        "word": "pancake",
        "translation": "tortita, crepe",
        "example": "I had pancakes for breakfast."
      },
      {
        "word": "glorious",
        "translation": "glorioso, espléndido",
        "example": "It was a glorious sunny day."
      },
      {
        "word": "stalk",
        "translation": "tallo; acechar",
        "example": "The cat stalked the bird."
      },
      {
        "word": "donkey",
        "translation": "burro, asno",
        "example": "The donkey carried heavy bags."
      },
      {
        "word": "mourn",
        "translation": "llorar (a un difunto), estar de luto",
        "example": "The family mourns his death."
      },
      {
        "word": "caution",
        "translation": "precaución, cautela; advertir",
        "example": "Proceed with caution."
      },
      {
        "word": "telescope",
        "translation": "telescopio",
        "example": "We looked at the stars through a telescope."
      },
      {
        "word": "sunset",
        "translation": "puesta de sol, atardecer",
        "example": "The sunset was beautiful."
      },
      {
        "word": "emphasis",
        "translation": "énfasis",
        "example": "The school puts emphasis on reading."
      },
      {
        "word": "straighten",
        "translation": "enderezar, ordenar",
        "example": "Straighten your back."
      },
      {
        "word": "scotch",
        "translation": "whisky escocés; escocés",
        "example": "He drinks scotch with ice."
      },
      {
        "word": "ginger",
        "translation": "jengibre",
        "example": "I like ginger tea."
      },
      {
        "word": "correspond",
        "translation": "corresponder; cartearse",
        "example": "The numbers correspond to the names."
      },
      {
        "word": "resemble",
        "translation": "parecerse a",
        "example": "She resembles her mother."
      },
      {
        "word": "attribute",
        "translation": "atribuir; atributo",
        "example": "They attribute his success to hard work."
      },
      {
        "word": "psychology",
        "translation": "psicología",
        "example": "She studies psychology."
      },
      {
        "word": "pimp",
        "translation": "proxeneta; chulo (vulgar)",
        "example": "The police arrested a pimp."
      },
      {
        "word": "martial",
        "translation": "marcial",
        "example": "He studies martial arts."
      },
      {
        "word": "enthusiastic",
        "translation": "entusiasta",
        "example": "The students are enthusiastic."
      },
      {
        "word": "puppet",
        "translation": "marioneta, títere",
        "example": "The children watched a puppet show."
      },
      {
        "word": "imperial",
        "translation": "imperial",
        "example": "The imperial palace is huge."
      },
      {
        "word": "lace",
        "translation": "encaje; cordón; atar",
        "example": "Tie your shoe laces."
      },
      {
        "word": "token",
        "translation": "ficha; símbolo, muestra",
        "example": "I need a token for the machine."
      },
      {
        "word": "paranoid",
        "translation": "paranoico",
        "example": "He is paranoid about being followed."
      },
      {
        "word": "rehearse",
        "translation": "ensayar",
        "example": "The actors rehearse every day."
      },
      {
        "word": "miner",
        "translation": "minero, minera",
        "example": "The miner works underground."
      },
      {
        "word": "congress",
        "translation": "congreso",
        "example": "The congress meets in May."
      },
      {
        "word": "mole",
        "translation": "lunar; topo",
        "example": "She has a mole on her cheek."
      },
      {
        "word": "shortage",
        "translation": "escasez, falta",
        "example": "There is a shortage of water."
      },
      {
        "word": "dizzy",
        "translation": "mareado",
        "example": "I feel dizzy."
      },
      {
        "word": "segment",
        "translation": "segmento",
        "example": "The show has three segments."
      },
      {
        "word": "curl",
        "translation": "rizo; rizar",
        "example": "She has long curls."
      },
      {
        "word": "porter",
        "translation": "mozo, maletero; portero",
        "example": "The porter carried our bags."
      },
      {
        "word": "hormone",
        "translation": "hormona",
        "example": "Insulin is a hormone."
      },
      {
        "word": "reed",
        "translation": "caña, junco",
        "example": "Reeds grow near the river."
      },
      {
        "word": "artifact",
        "translation": "artefacto",
        "example": "The museum displays ancient artifacts."
      },
      {
        "word": "robber",
        "translation": "ladrón, atracador",
        "example": "The robber ran away with the money."
      },
      {
        "word": "norm",
        "translation": "norma",
        "example": "Social norms change over time."
      },
      {
        "word": "outlet",
        "translation": "enchufe, salida; tienda outlet",
        "example": "Is there an outlet near the desk?"
      },
      {
        "word": "stunt",
        "translation": "acrobacia, truco; ardid",
        "example": "The actor did his own stunts."
      },
      {
        "word": "racial",
        "translation": "racial",
        "example": "They fight against racial discrimination."
      },
      {
        "word": "gypsy",
        "translation": "gitano (término a veces considerado ofensivo)",
        "example": "The word «gypsy» is considered offensive by many Roma."
      },
      {
        "word": "bachelor",
        "translation": "soltero; licenciado (grado)",
        "example": "He is a bachelor and lives alone."
      },
      {
        "word": "adequate",
        "translation": "adecuado, suficiente",
        "example": "The room is adequate for two people."
      },
      {
        "word": "trophy",
        "translation": "trofeo",
        "example": "The team lifted the trophy."
      },
      {
        "word": "psychiatrist",
        "translation": "psiquiatra",
        "example": "The psychiatrist prescribed a treatment."
      },
      {
        "word": "pacific",
        "translation": "Pacífico; pacífico",
        "example": "We crossed the Pacific Ocean."
      },
      {
        "word": "whack",
        "translation": "golpear; golpe fuerte",
        "example": "He whacked the ball over the fence."
      },
      {
        "word": "sticky",
        "translation": "pegajoso",
        "example": "My hands are sticky."
      },
      {
        "word": "champ",
        "translation": "campeón (coloq.)",
        "example": "Good job, champ!"
      },
      {
        "word": "subway",
        "translation": "metro",
        "example": "I take the subway to work."
      },
      {
        "word": "endanger",
        "translation": "poner en peligro",
        "example": "Pollution endangers wildlife."
      },
      {
        "word": "postcard",
        "translation": "postal, tarjeta postal",
        "example": "I sent you a postcard from Rome."
      },
      {
        "word": "variable",
        "translation": "variable",
        "example": "The weather is variable today."
      },
      {
        "word": "naval",
        "translation": "naval",
        "example": "It's a naval base."
      },
      {
        "word": "arena",
        "translation": "estadio, arena; ruedo",
        "example": "The concert is in the arena."
      },
      {
        "word": "cling",
        "translation": "aferrarse, adherirse",
        "example": "The child clung to his mother."
      },
      {
        "word": "barbecue",
        "translation": "barbacoa",
        "example": "We had a barbecue in the garden."
      },
      {
        "word": "spouse",
        "translation": "cónyuge, esposo, esposa",
        "example": "Please bring your spouse to the party."
      },
      {
        "word": "so-called",
        "translation": "llamado, supuesto",
        "example": "His so-called friends left him."
      },
      {
        "word": "packet",
        "translation": "paquete (pequeño), sobre",
        "example": "I bought a packet of biscuits."
      },
      {
        "word": "daylight",
        "translation": "luz del día",
        "example": "We left at daylight."
      },
      {
        "word": "flick",
        "translation": "chasquear, dar un toque; película (coloq.)",
        "example": "He flicked the light switch."
      },
      {
        "word": "publication",
        "translation": "publicación",
        "example": "The publication of the book is in May."
      },
      {
        "word": "deploy",
        "translation": "desplegar",
        "example": "They deployed troops to the border."
      },
      {
        "word": "lively",
        "translation": "animado, vivaz",
        "example": "It's a lively city at night."
      },
      {
        "word": "elder",
        "translation": "mayor (de dos); anciano",
        "example": "My elder brother lives in Madrid."
      },
      {
        "word": "reminder",
        "translation": "recordatorio",
        "example": "I set a reminder on my phone."
      },
      {
        "word": "ethical",
        "translation": "ético",
        "example": "It's an ethical question."
      },
      {
        "word": "peculiar",
        "translation": "peculiar, extraño",
        "example": "There's a peculiar smell in here."
      },
      {
        "word": "mutter",
        "translation": "murmurar, farfullar",
        "example": "He muttered something under his breath."
      },
      {
        "word": "mumble",
        "translation": "mascullar, hablar entre dientes",
        "example": "Don't mumble, speak clearly."
      },
      {
        "word": "messenger",
        "translation": "mensajero, mensajera",
        "example": "The messenger brought a letter."
      },
      {
        "word": "limitation",
        "translation": "limitación",
        "example": "Every method has its limitations."
      },
      {
        "word": "breeze",
        "translation": "brisa",
        "example": "A cool breeze came from the sea."
      },
      {
        "word": "password",
        "translation": "contraseña",
        "example": "Don't share your password."
      },
      {
        "word": "brandy",
        "translation": "brandy, coñac",
        "example": "He drank a glass of brandy."
      },
      {
        "word": "dime",
        "translation": "moneda de diez centavos",
        "example": "I found a dime on the ground."
      },
      {
        "word": "impatient",
        "translation": "impaciente",
        "example": "Don't be so impatient."
      },
      {
        "word": "bulb",
        "translation": "bombilla; bulbo",
        "example": "The light bulb burned out."
      },
      {
        "word": "weave",
        "translation": "tejer",
        "example": "They weave baskets from reeds."
      },
      {
        "word": "clutch",
        "translation": "agarrar con fuerza; embrague",
        "example": "She clutched her bag tightly."
      },
      {
        "word": "offender",
        "translation": "delincuente, infractor",
        "example": "The offender was fined."
      },
      {
        "word": "bluff",
        "translation": "farol; fingir, farolear",
        "example": "He was only bluffing."
      },
      {
        "word": "integrate",
        "translation": "integrar(se)",
        "example": "The school helps students integrate."
      },
      {
        "word": "archive",
        "translation": "archivo, archivar",
        "example": "The documents are in the archive."
      },
      {
        "word": "mansion",
        "translation": "mansión",
        "example": "They live in a huge mansion."
      },
      {
        "word": "lunatic",
        "translation": "loco, lunático",
        "example": "He drives like a lunatic."
      },
      {
        "word": "mandatory",
        "translation": "obligatorio",
        "example": "The training is mandatory."
      },
      {
        "word": "blossom",
        "translation": "flor (de árbol); florecer",
        "example": "The cherry trees are in blossom."
      },
      {
        "word": "cellar",
        "translation": "sótano, bodega",
        "example": "The wine is in the cellar."
      },
      {
        "word": "defensive",
        "translation": "defensivo",
        "example": "He became defensive when I asked."
      },
      {
        "word": "peel",
        "translation": "pelar; piel, cáscara",
        "example": "Peel the potatoes, please."
      },
      {
        "word": "psychologist",
        "translation": "psicólogo, psicóloga",
        "example": "The psychologist talked with the child."
      },
      {
        "word": "bacteria",
        "translation": "bacterias",
        "example": "Bacteria can cause infections."
      },
      {
        "word": "hallway",
        "translation": "pasillo, vestíbulo",
        "example": "Leave your shoes in the hallway."
      },
      {
        "word": "specimen",
        "translation": "espécimen, muestra",
        "example": "The lab tested the specimen."
      },
      {
        "word": "scrub",
        "translation": "fregar, restregar",
        "example": "Scrub the floor with a brush."
      },
      {
        "word": "portable",
        "translation": "portátil",
        "example": "I bought a portable speaker."
      },
      {
        "word": "lust",
        "translation": "lujuria; deseo intenso",
        "example": "He has a lust for power."
      },
      {
        "word": "vain",
        "translation": "vanidoso; vano",
        "example": "He is vain about his looks."
      },
      {
        "word": "deer",
        "translation": "ciervo, venado",
        "example": "We saw a deer in the forest."
      },
      {
        "word": "confirmation",
        "translation": "confirmación",
        "example": "I need confirmation of my booking."
      },
      {
        "word": "adoption",
        "translation": "adopción",
        "example": "The adoption took a year."
      },
      {
        "word": "sanction",
        "translation": "sanción; sancionar",
        "example": "The country faces economic sanctions."
      },
      {
        "word": "probability",
        "translation": "probabilidad",
        "example": "The probability of rain is high."
      },
      {
        "word": "shotgun",
        "translation": "escopeta",
        "example": "The hunter carried a shotgun."
      },
      {
        "word": "warmth",
        "translation": "calidez, calor",
        "example": "I felt the warmth of the fire."
      },
      {
        "word": "popularity",
        "translation": "popularidad",
        "example": "The singer's popularity is growing."
      },
      {
        "word": "calculation",
        "translation": "cálculo",
        "example": "Check your calculations."
      },
      {
        "word": "conceive",
        "translation": "concebir",
        "example": "I can't conceive of such a thing."
      },
      {
        "word": "terrace",
        "translation": "terraza",
        "example": "We had breakfast on the terrace."
      },
      {
        "word": "glimpse",
        "translation": "vistazo, atisbo; vislumbrar",
        "example": "I caught a glimpse of the singer."
      },
      {
        "word": "tailor",
        "translation": "sastre; adaptar",
        "example": "The tailor made me a suit."
      },
      {
        "word": "evacuate",
        "translation": "evacuar",
        "example": "They evacuated the building."
      },
      {
        "word": "stammer",
        "translation": "tartamudear",
        "example": "He stammers when he is nervous."
      },
      {
        "word": "evident",
        "translation": "evidente",
        "example": "It was evident that she was upset."
      },
      {
        "word": "output",
        "translation": "producción, salida",
        "example": "The factory doubled its output."
      },
      {
        "word": "long-term",
        "translation": "a largo plazo",
        "example": "We need a long-term solution."
      },
      {
        "word": "illustrate",
        "translation": "ilustrar",
        "example": "Let me illustrate with an example."
      },
      {
        "word": "flatter",
        "translation": "halagar, adular",
        "example": "You flatter me."
      },
      {
        "word": "superb",
        "translation": "magnífico, excelente",
        "example": "The food was superb."
      },
      {
        "word": "handcuff",
        "translation": "esposar; esposas",
        "example": "The police handcuffed the thief."
      },
      {
        "word": "vegetarian",
        "translation": "vegetariano, vegetariana",
        "example": "My sister is a vegetarian."
      },
      {
        "word": "heap",
        "translation": "montón, pila; amontonar",
        "example": "There is a heap of clothes on the bed."
      },
      {
        "word": "vocal",
        "translation": "vocal; cantante principal",
        "example": "She is a vocal critic of the plan."
      },
      {
        "word": "scrape",
        "translation": "raspar, rascar; rasguño",
        "example": "He scraped the paint off the wall."
      },
      {
        "word": "merit",
        "translation": "mérito; merecer",
        "example": "The idea has merit."
      },
      {
        "word": "banquet",
        "translation": "banquete",
        "example": "The banquet starts at eight."
      },
      {
        "word": "correction",
        "translation": "corrección",
        "example": "The teacher made a correction."
      },
      {
        "word": "resignation",
        "translation": "dimisión; resignación",
        "example": "He handed in his resignation."
      },
      {
        "word": "addiction",
        "translation": "adicción",
        "example": "He is fighting an addiction."
      },
      {
        "word": "snatch",
        "translation": "arrebatar, agarrar",
        "example": "He snatched the bag and ran."
      },
      {
        "word": "eternity",
        "translation": "eternidad",
        "example": "It felt like an eternity."
      },
      {
        "word": "sheer",
        "translation": "puro, total; escarpado",
        "example": "It was sheer luck."
      },
      {
        "word": "sibling",
        "translation": "hermano o hermana",
        "example": "Do you have any siblings?"
      },
      {
        "word": "valve",
        "translation": "válvula",
        "example": "Close the valve to stop the water."
      },
      {
        "word": "rental",
        "translation": "alquiler",
        "example": "We booked a car rental."
      },
      {
        "word": "eligible",
        "translation": "elegible, con derecho a",
        "example": "You are eligible for a discount."
      },
      {
        "word": "cripple",
        "translation": "lisiar; persona con discapacidad (término ofensivo)",
        "example": "The storm crippled the transport system."
      },
      {
        "word": "trim",
        "translation": "recortar, podar; ordenado",
        "example": "Trim the hedge in spring."
      },
      {
        "word": "sensor",
        "translation": "sensor",
        "example": "The sensor detects movement."
      },
      {
        "word": "peg",
        "translation": "clavija, gancho; pinza (de ropa)",
        "example": "Hang your coat on the peg."
      },
      {
        "word": "contractor",
        "translation": "contratista",
        "example": "The contractor repaired the roof."
      },
      {
        "word": "patty",
        "translation": "hamburguesa (carne); empanadilla",
        "example": "The burger has a thick patty."
      },
      {
        "word": "tech",
        "translation": "tecnología (coloq.); técnico",
        "example": "He works in tech."
      },
      {
        "word": "wax",
        "translation": "cera; encerar",
        "example": "The candle is made of wax."
      },
      {
        "word": "tribute",
        "translation": "homenaje, tributo",
        "example": "They paid tribute to the hero."
      },
      {
        "word": "exploration",
        "translation": "exploración",
        "example": "Space exploration is expensive."
      },
      {
        "word": "thrust",
        "translation": "empujar con fuerza; empuje",
        "example": "He thrust the door open."
      },
      {
        "word": "cuff",
        "translation": "puño (de camisa); esposa",
        "example": "The cuff of my shirt is dirty."
      },
      {
        "word": "undo",
        "translation": "deshacer; desabrochar",
        "example": "You can't undo what you've done."
      },
      {
        "word": "woody",
        "translation": "leñoso, de madera; arbolado",
        "example": "The herb has a woody stem."
      },
      {
        "word": "seduce",
        "translation": "seducir",
        "example": "He tried to seduce her with flowers."
      },
      {
        "word": "plow",
        "translation": "arar; arado",
        "example": "The farmer plows the field in spring."
      },
      {
        "word": "ego",
        "translation": "ego, amor propio",
        "example": "His ego is huge."
      },
      {
        "word": "immense",
        "translation": "inmenso, enorme",
        "example": "They live in an immense house."
      },
      {
        "word": "anyhow",
        "translation": "de todos modos, en cualquier caso",
        "example": "Anyhow, let's get started."
      },
      {
        "word": "compatible",
        "translation": "compatible",
        "example": "Is this charger compatible with my phone?"
      },
      {
        "word": "retail",
        "translation": "venta al por menor, comercio minorista",
        "example": "She works in retail."
      },
      {
        "word": "thrive",
        "translation": "prosperar, crecer bien",
        "example": "The plants thrive in the sun."
      },
      {
        "word": "dread",
        "translation": "temer, pavor",
        "example": "I dread going to the dentist."
      },
      {
        "word": "ambush",
        "translation": "emboscada; emboscar",
        "example": "The soldiers fell into an ambush."
      },
      {
        "word": "tickle",
        "translation": "hacer cosquillas",
        "example": "Stop tickling me!"
      },
      {
        "word": "butler",
        "translation": "mayordomo",
        "example": "The butler opened the door."
      },
      {
        "word": "quarrel",
        "translation": "riña, disputa; discutir",
        "example": "They had a quarrel last night."
      },
      {
        "word": "shutter",
        "translation": "contraventana, persiana; obturador",
        "example": "Close the shutters, it's hot."
      },
      {
        "word": "autograph",
        "translation": "autógrafo",
        "example": "The fan asked for an autograph."
      },
      {
        "word": "technician",
        "translation": "técnico, técnica",
        "example": "The technician will fix the printer."
      },
      {
        "word": "creator",
        "translation": "creador, creadora",
        "example": "The creator of the game is famous."
      },
      {
        "word": "monument",
        "translation": "monumento",
        "example": "We visited an ancient monument."
      },
      {
        "word": "reassure",
        "translation": "tranquilizar, asegurar",
        "example": "The doctor reassured the patient."
      },
      {
        "word": "bodyguard",
        "translation": "guardaespaldas",
        "example": "The singer has two bodyguards."
      },
      {
        "word": "peach",
        "translation": "melocotón",
        "example": "I love peach juice."
      },
      {
        "word": "pioneer",
        "translation": "pionero, pionera",
        "example": "She was a pioneer in medicine."
      },
      {
        "word": "commence",
        "translation": "comenzar",
        "example": "The ceremony will commence at noon."
      },
      {
        "word": "violet",
        "translation": "violeta (color o flor)",
        "example": "She wore a violet dress."
      },
      {
        "word": "dictate",
        "translation": "dictar; imponer",
        "example": "The boss dictated a letter."
      },
      {
        "word": "installation",
        "translation": "instalación",
        "example": "The installation takes two hours."
      },
      {
        "word": "memo",
        "translation": "memorando, nota interna",
        "example": "I sent a memo to the staff."
      },
      {
        "word": "irrelevant",
        "translation": "irrelevante",
        "example": "That detail is irrelevant."
      },
      {
        "word": "innovation",
        "translation": "innovación",
        "example": "The company is known for innovation."
      },
      {
        "word": "disrespect",
        "translation": "falta de respeto",
        "example": "I mean no disrespect."
      },
      {
        "word": "enthusiasm",
        "translation": "entusiasmo",
        "example": "She spoke with great enthusiasm."
      },
      {
        "word": "hardware",
        "translation": "ferretería; hardware",
        "example": "He bought tools at the hardware store."
      },
      {
        "word": "pinkie",
        "translation": "meñique",
        "example": "She hurt her pinkie."
      },
      {
        "word": "summit",
        "translation": "cumbre; cumbre (reunión)",
        "example": "They reached the summit at noon."
      },
      {
        "word": "audio",
        "translation": "audio",
        "example": "The audio quality is excellent."
      },
      {
        "word": "trainee",
        "translation": "aprendiz, becario",
        "example": "She is a trainee in our office."
      },
      {
        "word": "mineral",
        "translation": "mineral",
        "example": "The water contains minerals."
      },
      {
        "word": "forecast",
        "translation": "pronóstico; pronosticar",
        "example": "The weather forecast says rain."
      },
      {
        "word": "controversial",
        "translation": "controvertido, polémico",
        "example": "It's a controversial topic."
      },
      {
        "word": "squash",
        "translation": "aplastar; calabacín; squash",
        "example": "Be careful not to squash the bread."
      },
      {
        "word": "bundle",
        "translation": "fardo, paquete; atar",
        "example": "He carried a bundle of papers."
      },
      {
        "word": "shrimp",
        "translation": "gamba, camarón",
        "example": "We ate grilled shrimp."
      },
      {
        "word": "astronaut",
        "translation": "astronauta",
        "example": "The astronaut returned to Earth."
      },
      {
        "word": "den",
        "translation": "guarida; cuarto de estar",
        "example": "The fox went back to its den."
      },
      {
        "word": "poop",
        "translation": "caca (infantil); cubierta de popa",
        "example": "The dog left some poop on the grass."
      },
      {
        "word": "illustration",
        "translation": "ilustración",
        "example": "The book has beautiful illustrations."
      },
      {
        "word": "prejudice",
        "translation": "prejuicio",
        "example": "Prejudice causes unfair treatment."
      },
      {
        "word": "drip",
        "translation": "gotear; gota",
        "example": "The tap is dripping."
      },
      {
        "word": "magician",
        "translation": "mago, ilusionista",
        "example": "The magician pulled a rabbit from a hat."
      },
      {
        "word": "applaud",
        "translation": "aplaudir",
        "example": "The audience applauded for a long time."
      },
      {
        "word": "honesty",
        "translation": "honestidad",
        "example": "Honesty is the best policy."
      },
      {
        "word": "stability",
        "translation": "estabilidad",
        "example": "The country needs political stability."
      },
      {
        "word": "goodnight",
        "translation": "buenas noches",
        "example": "She said goodnight and went to bed."
      },
      {
        "word": "slot",
        "translation": "ranura; hueco (horario)",
        "example": "Put a coin in the slot."
      },
      {
        "word": "fossil",
        "translation": "fósil",
        "example": "They found a dinosaur fossil."
      },
      {
        "word": "orientation",
        "translation": "orientación, sesión de bienvenida",
        "example": "New employees attend an orientation."
      },
      {
        "word": "terminate",
        "translation": "terminar, poner fin",
        "example": "They terminated the contract."
      },
      {
        "word": "accelerate",
        "translation": "acelerar",
        "example": "The car began to accelerate."
      },
      {
        "word": "recorder",
        "translation": "grabadora; flauta dulce",
        "example": "I play the recorder at school."
      },
      {
        "word": "suspense",
        "translation": "suspense, tensión",
        "example": "The film is full of suspense."
      },
      {
        "word": "drone",
        "translation": "dron; zumbido",
        "example": "The drone took beautiful photos."
      },
      {
        "word": "separation",
        "translation": "separación",
        "example": "The separation was difficult."
      },
      {
        "word": "parish",
        "translation": "parroquia",
        "example": "The parish church is very old."
      },
      {
        "word": "broker",
        "translation": "corredor, agente (bolsa, seguros)",
        "example": "The broker sold the shares."
      },
      {
        "word": "complication",
        "translation": "complicación",
        "example": "There were complications after surgery."
      },
      {
        "word": "inconvenience",
        "translation": "inconveniente, molestia",
        "example": "We apologize for the inconvenience."
      },
      {
        "word": "primarily",
        "translation": "principalmente",
        "example": "The company sells primarily online."
      },
      {
        "word": "widely",
        "translation": "ampliamente, extensamente",
        "example": "The book is widely read."
      },
      {
        "word": "understandable",
        "translation": "comprensible",
        "example": "Your reaction is understandable."
      },
      {
        "word": "salute",
        "translation": "saludar (militar); saludo",
        "example": "The soldier saluted the officer."
      },
      {
        "word": "wig",
        "translation": "peluca",
        "example": "She wore a blond wig."
      },
      {
        "word": "collective",
        "translation": "colectivo",
        "example": "It was a collective decision."
      },
      {
        "word": "overlap",
        "translation": "solaparse, coincidir; solapamiento",
        "example": "Our work schedules overlap."
      },
      {
        "word": "cape",
        "translation": "capa; cabo",
        "example": "The superhero wore a red cape."
      },
      {
        "word": "restriction",
        "translation": "restricción",
        "example": "There are travel restrictions."
      },
      {
        "word": "payroll",
        "translation": "nómina",
        "example": "She works in the payroll department."
      },
      {
        "word": "weaken",
        "translation": "debilitar(se)",
        "example": "The illness weakened him."
      },
      {
        "word": "roam",
        "translation": "vagar, deambular",
        "example": "Cows roam freely in the fields."
      },
      {
        "word": "patron",
        "translation": "cliente habitual; mecenas",
        "example": "The patrons of the café are loyal."
      },
      {
        "word": "streak",
        "translation": "racha; raya",
        "example": "The team is on a winning streak."
      },
      {
        "word": "tasty",
        "translation": "sabroso",
        "example": "This soup is very tasty."
      },
      {
        "word": "immune",
        "translation": "inmune",
        "example": "He is immune to the virus."
      },
      {
        "word": "fiance",
        "translation": "prometido",
        "example": "Her fiance works abroad."
      },
      {
        "word": "blink",
        "translation": "parpadear",
        "example": "Don't blink or you'll miss it."
      },
      {
        "word": "nursery",
        "translation": "guardería; vivero",
        "example": "The baby goes to nursery."
      },
      {
        "word": "genre",
        "translation": "género (literario, musical)",
        "example": "What is your favorite music genre?"
      },
      {
        "word": "expire",
        "translation": "caducar, vencer",
        "example": "My passport expires in May."
      },
      {
        "word": "interference",
        "translation": "interferencia, intromisión",
        "example": "I don't like his interference."
      },
      {
        "word": "transaction",
        "translation": "transacción",
        "example": "The transaction was completed."
      },
      {
        "word": "cereal",
        "translation": "cereal",
        "example": "I eat cereal for breakfast."
      },
      {
        "word": "preference",
        "translation": "preferencia",
        "example": "Do you have a preference?"
      },
      {
        "word": "scam",
        "translation": "estafa; estafar",
        "example": "It was a scam."
      },
      {
        "word": "mutant",
        "translation": "mutante",
        "example": "The film features a mutant hero."
      },
      {
        "word": "chopper",
        "translation": "helicóptero (coloq.); hacha",
        "example": "A chopper flew over the city."
      },
      {
        "word": "stash",
        "translation": "alijo, escondite; esconder",
        "example": "He keeps a stash of chocolate in his desk."
      },
      {
        "word": "downward",
        "translation": "hacia abajo",
        "example": "The path slopes downward."
      },
      {
        "word": "decoration",
        "translation": "decoración, adorno",
        "example": "We bought Christmas decorations."
      },
      {
        "word": "elementary",
        "translation": "elemental; primaria",
        "example": "She teaches at an elementary school."
      },
      {
        "word": "dissolve",
        "translation": "disolver(se)",
        "example": "Sugar dissolves in water."
      },
      {
        "word": "diagnose",
        "translation": "diagnosticar",
        "example": "The doctor diagnosed the flu."
      },
      {
        "word": "sleepy",
        "translation": "somnoliento, con sueño",
        "example": "I feel sleepy after lunch."
      },
      {
        "word": "vicious",
        "translation": "cruel, feroz",
        "example": "The dog was vicious."
      },
      {
        "word": "metaphor",
        "translation": "metáfora",
        "example": "\"Time is money\" is a metaphor."
      },
      {
        "word": "shareholder",
        "translation": "accionista",
        "example": "The shareholders approved the plan."
      },
      {
        "word": "playground",
        "translation": "parque infantil, patio de recreo",
        "example": "The kids are in the playground."
      },
      {
        "word": "consultation",
        "translation": "consulta",
        "example": "I have a consultation at three."
      },
      {
        "word": "ransom",
        "translation": "rescate (secuestro)",
        "example": "The kidnappers demanded a ransom."
      },
      {
        "word": "batch",
        "translation": "lote, tanda",
        "example": "She baked a batch of cookies."
      },
      {
        "word": "muslim",
        "translation": "musulmán, musulmana",
        "example": "He is Muslim and fasts during Ramadan."
      },
      {
        "word": "authentic",
        "translation": "auténtico",
        "example": "This is an authentic Italian pizza."
      },
      {
        "word": "maniac",
        "translation": "maníaco; loco (coloq.)",
        "example": "He drives like a maniac."
      },
      {
        "word": "gin",
        "translation": "ginebra",
        "example": "She ordered a gin and tonic."
      },
      {
        "word": "regime",
        "translation": "régimen (político)",
        "example": "The regime fell after ten years."
      },
      {
        "word": "bias",
        "translation": "prejuicio, sesgo",
        "example": "The report shows a clear bias."
      },
      {
        "word": "translator",
        "translation": "traductor, traductora",
        "example": "She works as a translator."
      },
      {
        "word": "preview",
        "translation": "avance, vista previa",
        "example": "Click here for a preview."
      },
      {
        "word": "cautious",
        "translation": "cauteloso, prudente",
        "example": "He is a cautious driver."
      },
      {
        "word": "volcano",
        "translation": "volcán",
        "example": "The volcano erupted last night."
      },
      {
        "word": "prescribe",
        "translation": "recetar, prescribir",
        "example": "The doctor prescribed antibiotics."
      },
      {
        "word": "diagnosis",
        "translation": "diagnóstico",
        "example": "The diagnosis was clear."
      },
      {
        "word": "insert",
        "translation": "insertar, introducir",
        "example": "Insert a coin in the machine."
      },
      {
        "word": "firework",
        "translation": "fuego artificial",
        "example": "We watched the fireworks at midnight."
      },
      {
        "word": "sister-in-law",
        "translation": "cuñada",
        "example": "My sister-in-law lives in Bilbao."
      },
      {
        "word": "hilarious",
        "translation": "desternillante, muy gracioso",
        "example": "The movie was hilarious."
      },
      {
        "word": "upgrade",
        "translation": "mejorar, actualizar; mejora",
        "example": "I need to upgrade my phone."
      },
      {
        "word": "bulletin",
        "translation": "boletín, comunicado",
        "example": "The bulletin is posted on the wall."
      },
      {
        "word": "salesman",
        "translation": "vendedor",
        "example": "The salesman showed us the car."
      },
      {
        "word": "prank",
        "translation": "broma (travesura)",
        "example": "The kids played a prank on their teacher."
      },
      {
        "word": "hospitality",
        "translation": "hospitalidad",
        "example": "Thank you for your hospitality."
      },
      {
        "word": "runway",
        "translation": "pista (de aterrizaje); pasarela",
        "example": "The plane landed on the runway."
      },
      {
        "word": "reduction",
        "translation": "reducción",
        "example": "There was a reduction in prices."
      },
      {
        "word": "philosopher",
        "translation": "filósofo, filósofa",
        "example": "Plato was a Greek philosopher."
      },
      {
        "word": "juvenile",
        "translation": "juvenil; menor",
        "example": "He is in a juvenile court."
      },
      {
        "word": "kilo",
        "translation": "kilo",
        "example": "I bought a kilo of apples."
      },
      {
        "word": "holder",
        "translation": "titular, poseedor; soporte",
        "example": "She is the record holder."
      },
      {
        "word": "logo",
        "translation": "logotipo, logo",
        "example": "Our company has a new logo."
      },
      {
        "word": "forehead",
        "translation": "frente (de la cara)",
        "example": "He wiped his forehead."
      },
      {
        "word": "breakthrough",
        "translation": "avance, descubrimiento clave",
        "example": "Scientists made a breakthrough."
      },
      {
        "word": "racist",
        "translation": "racista",
        "example": "Racist comments are unacceptable."
      },
      {
        "word": "elaborate",
        "translation": "elaborado, detallado; elaborar",
        "example": "They made an elaborate plan."
      },
      {
        "word": "buffalo",
        "translation": "búfalo",
        "example": "Buffalo roamed the plains."
      },
      {
        "word": "hamburger",
        "translation": "hamburguesa",
        "example": "I ordered a hamburger and fries."
      },
      {
        "word": "tile",
        "translation": "baldosa, azulejo",
        "example": "The kitchen has blue tiles."
      },
      {
        "word": "plunge",
        "translation": "sumergirse, zambullirse; caída",
        "example": "He plunged into the cold water."
      },
      {
        "word": "puke",
        "translation": "vomitar (coloq.)",
        "example": "I felt sick and wanted to puke."
      },
      {
        "word": "dishonest",
        "translation": "deshonesto",
        "example": "It was a dishonest answer."
      },
      {
        "word": "lottery",
        "translation": "lotería",
        "example": "He won the lottery."
      },
      {
        "word": "tighten",
        "translation": "apretar, ajustar",
        "example": "Tighten the screws."
      },
      {
        "word": "atlantic",
        "translation": "Atlántico; atlántico",
        "example": "They crossed the Atlantic by ship."
      },
      {
        "word": "allergic",
        "translation": "alérgico",
        "example": "I'm allergic to dust."
      },
      {
        "word": "moderate",
        "translation": "moderado",
        "example": "We had moderate rain."
      },
      {
        "word": "gratitude",
        "translation": "gratitud",
        "example": "She expressed her gratitude."
      },
      {
        "word": "thug",
        "translation": "matón, gamberro",
        "example": "A thug attacked him in the street."
      },
      {
        "word": "knit",
        "translation": "tejer (punto)",
        "example": "Grandma knits sweaters."
      },
      {
        "word": "preliminary",
        "translation": "preliminar",
        "example": "These are preliminary results."
      },
      {
        "word": "accessible",
        "translation": "accesible",
        "example": "The hotel is accessible for wheelchairs."
      },
      {
        "word": "inmate",
        "translation": "recluso, interno",
        "example": "The inmate was moved to another cell."
      },
      {
        "word": "psychiatric",
        "translation": "psiquiátrico",
        "example": "He is in a psychiatric hospital."
      },
      {
        "word": "latter",
        "translation": "este último, el segundo",
        "example": "I prefer the latter option."
      },
      {
        "word": "diplomatic",
        "translation": "diplomático",
        "example": "They had a diplomatic meeting."
      },
      {
        "word": "rash",
        "translation": "sarpullido; precipitado",
        "example": "I have a rash on my arm."
      },
      {
        "word": "nerd",
        "translation": "empollón, friki",
        "example": "He is a computer nerd."
      },
      {
        "word": "terrorism",
        "translation": "terrorismo",
        "example": "The country fights terrorism."
      },
      {
        "word": "dodge",
        "translation": "esquivar",
        "example": "He dodged the ball."
      },
      {
        "word": "melody",
        "translation": "melodía",
        "example": "I love the melody of this song."
      },
      {
        "word": "refreshment",
        "translation": "refrigerio, refresco",
        "example": "Refreshments are served after the talk."
      },
      {
        "word": "reunion",
        "translation": "reencuentro, reunión",
        "example": "We had a family reunion."
      },
      {
        "word": "neutral",
        "translation": "neutral, neutro",
        "example": "Switzerland is a neutral country."
      },
      {
        "word": "revelation",
        "translation": "revelación",
        "example": "The news was a revelation."
      },
      {
        "word": "beggar",
        "translation": "mendigo, mendiga",
        "example": "A beggar sat near the church."
      },
      {
        "word": "creek",
        "translation": "arroyo, riachuelo",
        "example": "We crossed the creek on foot."
      },
      {
        "word": "youngster",
        "translation": "joven, chaval",
        "example": "The youngsters played football in the park."
      },
      {
        "word": "denial",
        "translation": "negación; negativa",
        "example": "His denial surprised everyone."
      },
      {
        "word": "avenge",
        "translation": "vengar",
        "example": "He wants to avenge his brother."
      },
      {
        "word": "ape",
        "translation": "simio, antropoide",
        "example": "The ape climbed the tree."
      },
      {
        "word": "directory",
        "translation": "directorio, guía",
        "example": "Look up the number in the directory."
      },
      {
        "word": "allowance",
        "translation": "asignación, paga",
        "example": "She gets a weekly allowance."
      },
      {
        "word": "lobster",
        "translation": "langosta, bogavante",
        "example": "We ate lobster for dinner."
      },
      {
        "word": "slavery",
        "translation": "esclavitud",
        "example": "Slavery was abolished in 1865."
      },
      {
        "word": "accomplice",
        "translation": "cómplice",
        "example": "The thief and his accomplice were caught."
      },
      {
        "word": "torment",
        "translation": "atormentar; tormento",
        "example": "Guilt tormented him."
      },
      {
        "word": "comb",
        "translation": "peine; peinar",
        "example": "Comb your hair before school."
      },
      {
        "word": "messy",
        "translation": "desordenado, sucio",
        "example": "Your room is messy."
      },
      {
        "word": "chunk",
        "translation": "trozo grande, pedazo",
        "example": "He cut a chunk of cheese."
      },
      {
        "word": "frontier",
        "translation": "frontera (zona fronteriza)",
        "example": "They live near the frontier."
      },
      {
        "word": "renovation",
        "translation": "reforma, renovación",
        "example": "The hotel is closed for renovation."
      },
      {
        "word": "prophet",
        "translation": "profeta",
        "example": "The prophet predicted the flood."
      },
      {
        "word": "patent",
        "translation": "patente; patentar",
        "example": "He has a patent for the invention."
      },
      {
        "word": "earring",
        "translation": "pendiente",
        "example": "She lost an earring."
      },
      {
        "word": "robe",
        "translation": "bata; túnica",
        "example": "He wore a white robe."
      },
      {
        "word": "seventh",
        "translation": "séptimo",
        "example": "It's my seventh birthday."
      },
      {
        "word": "disturbance",
        "translation": "disturbio, alteración",
        "example": "The police received a report of a disturbance."
      },
      {
        "word": "diner",
        "translation": "restaurante sencillo; comensal",
        "example": "We had breakfast at a diner."
      },
      {
        "word": "rewrite",
        "translation": "reescribir",
        "example": "I need to rewrite my essay."
      },
      {
        "word": "inventory",
        "translation": "inventario, existencias",
        "example": "The shop counts its inventory every month."
      },
      {
        "word": "renewal",
        "translation": "renovación",
        "example": "The renewal of my passport takes a week."
      },
      {
        "word": "spontaneous",
        "translation": "espontáneo",
        "example": "It was a spontaneous decision."
      },
      {
        "word": "tremble",
        "translation": "temblar",
        "example": "His hands trembled with fear."
      },
      {
        "word": "irony",
        "translation": "ironía",
        "example": "The irony is that he was late."
      },
      {
        "word": "greedy",
        "translation": "codicioso, glotón",
        "example": "Don't be greedy, share the cake."
      },
      {
        "word": "zip",
        "translation": "cremallera; cerrar la cremallera",
        "example": "Zip up your jacket."
      },
      {
        "word": "fountain",
        "translation": "fuente (de agua)",
        "example": "There is a fountain in the square."
      },
      {
        "word": "fog",
        "translation": "niebla",
        "example": "The fog was thick this morning."
      },
      {
        "word": "legislation",
        "translation": "legislación",
        "example": "The government introduced new legislation."
      },
      {
        "word": "suppress",
        "translation": "suprimir, reprimir",
        "example": "He tried to suppress a laugh."
      },
      {
        "word": "recruitment",
        "translation": "contratación, selección de personal",
        "example": "The recruitment of new staff starts in May."
      },
      {
        "word": "handicap",
        "translation": "desventaja; discapacidad (término antiguo)",
        "example": "Lack of money is a handicap."
      },
      {
        "word": "good-looking",
        "translation": "guapo, atractivo",
        "example": "He is a good-looking man."
      },
      {
        "word": "sabotage",
        "translation": "sabotaje; sabotear",
        "example": "They tried to sabotage the project."
      },
      {
        "word": "stark",
        "translation": "austero, crudo; completamente",
        "example": "The room was stark and cold."
      },
      {
        "word": "interrogation",
        "translation": "interrogatorio",
        "example": "The interrogation lasted two hours."
      },
      {
        "word": "kneel",
        "translation": "arrodillarse",
        "example": "She knelt to pray."
      },
      {
        "word": "bartender",
        "translation": "camarero de barra, barman",
        "example": "The bartender made me a cocktail."
      },
      {
        "word": "arrogant",
        "translation": "arrogante",
        "example": "He is arrogant and rude."
      },
      {
        "word": "frost",
        "translation": "escarcha, helada",
        "example": "There was frost on the grass."
      },
      {
        "word": "questionnaire",
        "translation": "cuestionario, encuesta",
        "example": "Please fill out this questionnaire."
      },
      {
        "word": "equip",
        "translation": "equipar",
        "example": "The lab is equipped with modern tools."
      },
      {
        "word": "outrage",
        "translation": "indignación; escándalo",
        "example": "The decision caused public outrage."
      },
      {
        "word": "bun",
        "translation": "panecillo; moño",
        "example": "She tied her hair in a bun."
      },
      {
        "word": "jurisdiction",
        "translation": "jurisdicción",
        "example": "This case is outside our jurisdiction."
      },
      {
        "word": "grenade",
        "translation": "granada (explosivo)",
        "example": "The soldier threw a grenade."
      },
      {
        "word": "homeland",
        "translation": "patria, tierra natal",
        "example": "He returned to his homeland."
      },
      {
        "word": "attendant",
        "translation": "asistente, encargado",
        "example": "The flight attendant served drinks."
      },
      {
        "word": "bash",
        "translation": "golpear; fiesta (coloq.)",
        "example": "He bashed the door open."
      },
      {
        "word": "haircut",
        "translation": "corte de pelo",
        "example": "I need a haircut."
      },
      {
        "word": "defective",
        "translation": "defectuoso",
        "example": "The product was defective."
      },
      {
        "word": "savior",
        "translation": "salvador, salvadora",
        "example": "The firefighter was their savior."
      },
      {
        "word": "ivy",
        "translation": "hiedra",
        "example": "Ivy covers the old wall."
      },
      {
        "word": "sip",
        "translation": "sorbo; sorber",
        "example": "She took a sip of tea."
      },
      {
        "word": "sniper",
        "translation": "francotirador",
        "example": "The sniper waited on the roof."
      },
      {
        "word": "manuscript",
        "translation": "manuscrito",
        "example": "The author sent the manuscript to a publisher."
      },
      {
        "word": "performer",
        "translation": "artista, intérprete",
        "example": "The performer sang beautifully."
      },
      {
        "word": "strawberry",
        "translation": "fresa, frutilla",
        "example": "I love strawberry ice cream."
      },
      {
        "word": "granddad",
        "translation": "abuelo, yayo",
        "example": "Granddad is reading the newspaper."
      },
      {
        "word": "contempt",
        "translation": "desprecio",
        "example": "She looked at him with contempt."
      },
      {
        "word": "usage",
        "translation": "uso, utilización",
        "example": "Check your data usage."
      },
      {
        "word": "scarf",
        "translation": "bufanda",
        "example": "Wear a scarf, it's cold."
      },
      {
        "word": "hypothesis",
        "translation": "hipótesis",
        "example": "The scientist tested his hypothesis."
      },
      {
        "word": "vaccine",
        "translation": "vacuna",
        "example": "The vaccine protects against the flu."
      },
      {
        "word": "heartbeat",
        "translation": "latido del corazón",
        "example": "I could hear her heartbeat."
      },
      {
        "word": "rogue",
        "translation": "pícaro; rebelde, descontrolado",
        "example": "The film is about a charming rogue."
      },
      {
        "word": "saving",
        "translation": "ahorro",
        "example": "This offer means a big saving."
      },
      {
        "word": "allegation",
        "translation": "acusación (sin probar), alegación",
        "example": "The allegation was false."
      },
      {
        "word": "beware",
        "translation": "tener cuidado, cuidado con",
        "example": "Beware of the dog!"
      },
      {
        "word": "spear",
        "translation": "lanza",
        "example": "The hunter carried a spear."
      },
      {
        "word": "complimentary",
        "translation": "gratuito, de cortesía",
        "example": "Breakfast is complimentary."
      },
      {
        "word": "builder",
        "translation": "constructor, albañil",
        "example": "The builder finished the house."
      },
      {
        "word": "cathedral",
        "translation": "catedral",
        "example": "We visited the old cathedral."
      },
      {
        "word": "inspect",
        "translation": "inspeccionar, revisar",
        "example": "The officer inspected the luggage."
      },
      {
        "word": "manifest",
        "translation": "manifestar, mostrar; evidente",
        "example": "The disease manifests with fever."
      },
      {
        "word": "founder",
        "translation": "fundador, fundadora",
        "example": "The founder of the company is 80."
      },
      {
        "word": "litter",
        "translation": "basura (en la calle); camada",
        "example": "Please don't leave litter in the park."
      },
      {
        "word": "derive",
        "translation": "derivar, obtener",
        "example": "The word derives from Latin."
      },
      {
        "word": "convey",
        "translation": "transmitir, expresar",
        "example": "Words can't convey my feelings."
      },
      {
        "word": "pawn",
        "translation": "peón (ajedrez); empeñar",
        "example": "He pawned his watch for money."
      },
      {
        "word": "workforce",
        "translation": "plantilla, mano de obra",
        "example": "The company has a large workforce."
      },
      {
        "word": "diaper",
        "translation": "pañal",
        "example": "The baby needs a new diaper."
      },
      {
        "word": "yay",
        "translation": "¡hurra!, ¡bien!",
        "example": "Yay! We won!"
      },
      {
        "word": "grin",
        "translation": "sonrisa amplia; sonreír de oreja a oreja",
        "example": "He had a big grin on his face."
      },
      {
        "word": "buzzer",
        "translation": "timbre, zumbador",
        "example": "Press the buzzer to enter."
      },
      {
        "word": "revive",
        "translation": "reanimar, revivir",
        "example": "The doctor revived the patient."
      },
      {
        "word": "intern",
        "translation": "becario, interno; hacer prácticas",
        "example": "She works as an intern at a hospital."
      },
      {
        "word": "errand",
        "translation": "recado, mandado",
        "example": "I have some errands to run."
      },
      {
        "word": "whew",
        "translation": "¡uf! (alivio)",
        "example": "Whew, that was close!"
      },
      {
        "word": "immortal",
        "translation": "inmortal",
        "example": "The gods were immortal."
      },
      {
        "word": "retailer",
        "translation": "minorista, comerciante",
        "example": "This retailer sells shoes online."
      },
      {
        "word": "gallon",
        "translation": "galón",
        "example": "The car uses a gallon of fuel."
      },
      {
        "word": "font",
        "translation": "fuente (tipografía)",
        "example": "Choose a bigger font."
      },
      {
        "word": "agricultural",
        "translation": "agrícola",
        "example": "It's an agricultural region."
      },
      {
        "word": "abduct",
        "translation": "secuestrar, raptar",
        "example": "The criminals abducted the child."
      },
      {
        "word": "prevail",
        "translation": "prevalecer, imponerse",
        "example": "Common sense prevailed."
      },
      {
        "word": "rhyme",
        "translation": "rima; rimar",
        "example": "\"Cat\" rhymes with \"hat\"."
      },
      {
        "word": "ignorance",
        "translation": "ignorancia",
        "example": "Ignorance is not an excuse."
      },
      {
        "word": "pod",
        "translation": "vaina; cápsula",
        "example": "Open the pea pod."
      },
      {
        "word": "cater",
        "translation": "proveer comida (catering); atender",
        "example": "They cater for weddings."
      },
      {
        "word": "calculator",
        "translation": "calculadora",
        "example": "I need a calculator."
      },
      {
        "word": "lipstick",
        "translation": "pintalabios",
        "example": "She put on red lipstick."
      },
      {
        "word": "reckless",
        "translation": "imprudente, temerario",
        "example": "It was a reckless decision."
      },
      {
        "word": "distribution",
        "translation": "distribución",
        "example": "The distribution of food was fair."
      },
      {
        "word": "ownership",
        "translation": "propiedad (posesión)",
        "example": "The ownership of the house is unclear."
      },
      {
        "word": "remedy",
        "translation": "remedio; remediar",
        "example": "Honey is a natural remedy for coughs."
      },
      {
        "word": "phony",
        "translation": "falso, fingido",
        "example": "His smile was phony."
      },
      {
        "word": "upbeat",
        "translation": "optimista, animado",
        "example": "She is always upbeat."
      },
      {
        "word": "asian",
        "translation": "asiático; asiática",
        "example": "I love Asian food."
      },
      {
        "word": "merge",
        "translation": "fusionar(se), unir(se)",
        "example": "The two companies will merge."
      },
      {
        "word": "steep",
        "translation": "empinado, pronunciado",
        "example": "The hill is very steep."
      },
      {
        "word": "humorous",
        "translation": "gracioso, humorístico",
        "example": "It was a humorous story."
      },
      {
        "word": "pudding",
        "translation": "pudín, postre",
        "example": "We had chocolate pudding for dessert."
      },
      {
        "word": "brace",
        "translation": "aparato (dental); prepararse",
        "example": "She wears a brace on her teeth."
      },
      {
        "word": "slay",
        "translation": "matar (literario); triunfar (coloq.)",
        "example": "The knight slew the dragon."
      },
      {
        "word": "grim",
        "translation": "sombrío, lúgubre",
        "example": "The news was grim."
      },
      {
        "word": "medieval",
        "translation": "medieval",
        "example": "We visited a medieval castle."
      },
      {
        "word": "asia",
        "translation": "Asia",
        "example": "Japan is in Asia."
      },
      {
        "word": "sentiment",
        "translation": "sentimiento, opinión",
        "example": "Public sentiment is against the plan."
      },
      {
        "word": "intervene",
        "translation": "intervenir",
        "example": "The teacher intervened in the fight."
      },
      {
        "word": "spice",
        "translation": "especia; sazonar",
        "example": "Add some spice to the soup."
      },
      {
        "word": "stationery",
        "translation": "papelería, artículos de oficina",
        "example": "We order stationery every month."
      },
      {
        "word": "confidential",
        "translation": "confidencial",
        "example": "This document is confidential."
      },
      {
        "word": "owl",
        "translation": "búho, lechuza",
        "example": "An owl hooted in the night."
      },
      {
        "word": "organism",
        "translation": "organismo",
        "example": "Bacteria are living organisms."
      },
      {
        "word": "saddle",
        "translation": "silla de montar; ensillar",
        "example": "He put a saddle on the horse."
      },
      {
        "word": "marsh",
        "translation": "pantano, ciénaga",
        "example": "Birds live in the marsh."
      },
      {
        "word": "unacceptable",
        "translation": "inaceptable",
        "example": "This behavior is unacceptable."
      },
      {
        "word": "pyramid",
        "translation": "pirámide",
        "example": "We visited the pyramids in Egypt."
      },
      {
        "word": "convenience",
        "translation": "comodidad, conveniencia",
        "example": "I shop online for convenience."
      },
      {
        "word": "swan",
        "translation": "cisne",
        "example": "A swan glided across the lake."
      },
      {
        "word": "desktop",
        "translation": "escritorio, ordenador de sobremesa",
        "example": "Save the file on your desktop."
      },
      {
        "word": "incentive",
        "translation": "incentivo, estímulo",
        "example": "Money is a good incentive."
      },
      {
        "word": "pea",
        "translation": "guisante",
        "example": "I don't like peas."
      },
      {
        "word": "stew",
        "translation": "guiso, estofado",
        "example": "Grandma made beef stew."
      },
      {
        "word": "expel",
        "translation": "expulsar",
        "example": "The school expelled the student."
      },
      {
        "word": "gown",
        "translation": "vestido largo; bata",
        "example": "She wore an evening gown."
      },
      {
        "word": "heritage",
        "translation": "patrimonio, herencia cultural",
        "example": "The city has a rich cultural heritage."
      },
      {
        "word": "renew",
        "translation": "renovar",
        "example": "I need to renew my passport."
      },
      {
        "word": "jade",
        "translation": "jade",
        "example": "The statue is made of jade."
      },
      {
        "word": "blur",
        "translation": "borrosidad; difuminar",
        "example": "The photo is a blur."
      },
      {
        "word": "durable",
        "translation": "duradero, resistente",
        "example": "This bag is strong and durable."
      },
      {
        "word": "vagina",
        "translation": "vagina",
        "example": "The doctor explained female anatomy."
      },
      {
        "word": "backyard",
        "translation": "patio trasero, jardín trasero",
        "example": "The kids play in the backyard."
      },
      {
        "word": "whereabouts",
        "translation": "paradero",
        "example": "His whereabouts are unknown."
      },
      {
        "word": "appreciation",
        "translation": "agradecimiento; apreciación",
        "example": "I want to show my appreciation."
      },
      {
        "word": "dense",
        "translation": "denso, espeso",
        "example": "The forest is very dense."
      },
      {
        "word": "significantly",
        "translation": "significativamente",
        "example": "Prices have increased significantly."
      },
      {
        "word": "antibiotic",
        "translation": "antibiótico",
        "example": "The doctor prescribed an antibiotic."
      },
      {
        "word": "morgue",
        "translation": "morgue, depósito de cadáveres",
        "example": "The body was taken to the morgue."
      },
      {
        "word": "feedback",
        "translation": "opinión, retroalimentación",
        "example": "Thanks for your feedback."
      },
      {
        "word": "valid",
        "translation": "válido",
        "example": "Your ticket is valid for one day."
      },
      {
        "word": "healthcare",
        "translation": "sanidad, atención sanitaria",
        "example": "Healthcare is free in this country."
      },
      {
        "word": "coconut",
        "translation": "coco",
        "example": "I love coconut milk."
      },
      {
        "word": "hazard",
        "translation": "peligro, riesgo",
        "example": "Smoking is a health hazard."
      },
      {
        "word": "dwarf",
        "translation": "enano; empequeñecer",
        "example": "The story has seven dwarfs."
      },
      {
        "word": "generator",
        "translation": "generador",
        "example": "The generator provides electricity."
      },
      {
        "word": "discretion",
        "translation": "discreción",
        "example": "Please use your discretion."
      },
      {
        "word": "absent",
        "translation": "ausente",
        "example": "Three students are absent today."
      },
      {
        "word": "machinery",
        "translation": "maquinaria",
        "example": "The factory has modern machinery."
      },
      {
        "word": "cite",
        "translation": "citar, mencionar",
        "example": "He cited several examples."
      },
      {
        "word": "supportive",
        "translation": "que apoya, comprensivo",
        "example": "My family is very supportive."
      },
      {
        "word": "referral",
        "translation": "recomendación, derivación",
        "example": "You need a referral from your doctor."
      },
      {
        "word": "shipment",
        "translation": "envío, cargamento",
        "example": "The shipment arrives on Friday."
      },
      {
        "word": "expertise",
        "translation": "pericia, conocimientos especializados",
        "example": "She has expertise in law."
      },
      {
        "word": "penguin",
        "translation": "pingüino",
        "example": "Penguins live in cold places."
      },
      {
        "word": "undress",
        "translation": "desvestir(se)",
        "example": "The doctor asked me to undress."
      },
      {
        "word": "embarrassment",
        "translation": "vergüenza, apuro",
        "example": "He blushed with embarrassment."
      },
      {
        "word": "grape",
        "translation": "uva",
        "example": "We picked grapes in the vineyard."
      },
      {
        "word": "pastor",
        "translation": "pastor, párroco",
        "example": "The pastor gave a short sermon."
      },
      {
        "word": "tab",
        "translation": "pestaña; cuenta (en un bar)",
        "example": "I opened a new tab in my browser."
      },
      {
        "word": "stray",
        "translation": "callejero, perdido; desviarse",
        "example": "A stray dog followed us home."
      },
      {
        "word": "salesperson",
        "translation": "vendedor, vendedora",
        "example": "The salesperson was very helpful."
      },
      {
        "word": "shovel",
        "translation": "pala; palear",
        "example": "He used a shovel to dig the hole."
      },
      {
        "word": "horny",
        "translation": "cachondo, excitado (vulgar)",
        "example": "The word «horny» is informal and vulgar."
      },
      {
        "word": "son-in-law",
        "translation": "yerno",
        "example": "Her son-in-law is a doctor."
      },
      {
        "word": "pumpkin",
        "translation": "calabaza",
        "example": "We carved a pumpkin for Halloween."
      },
      {
        "word": "squirrel",
        "translation": "ardilla",
        "example": "A squirrel climbed the tree."
      },
      {
        "word": "seller",
        "translation": "vendedor, vendedora",
        "example": "The seller lowered the price."
      },
      {
        "word": "intimidate",
        "translation": "intimidar",
        "example": "Don't let him intimidate you."
      },
      {
        "word": "spine",
        "translation": "columna vertebral; lomo (de libro)",
        "example": "He injured his spine."
      },
      {
        "word": "crisp",
        "translation": "crujiente; fresco",
        "example": "The apple is fresh and crisp."
      },
      {
        "word": "criterion",
        "translation": "criterio",
        "example": "What is the main criterion?"
      },
      {
        "word": "camel",
        "translation": "camello",
        "example": "We rode a camel in the desert."
      },
      {
        "word": "faculty",
        "translation": "facultad; profesorado",
        "example": "She studies at the faculty of law."
      },
      {
        "word": "grieve",
        "translation": "llorar una pérdida, afligirse",
        "example": "They grieve for their lost son."
      },
      {
        "word": "tropical",
        "translation": "tropical",
        "example": "They went to a tropical island."
      },
      {
        "word": "frustration",
        "translation": "frustración",
        "example": "He shouted in frustration."
      },
      {
        "word": "rug",
        "translation": "alfombra (pequeña)",
        "example": "The cat sleeps on the rug."
      },
      {
        "word": "violin",
        "translation": "violín",
        "example": "She plays the violin beautifully."
      },
      {
        "word": "hollow",
        "translation": "hueco, vacío",
        "example": "The tree trunk is hollow."
      },
      {
        "word": "shorts",
        "translation": "pantalones cortos",
        "example": "It's hot, wear shorts."
      },
      {
        "word": "briefcase",
        "translation": "maletín",
        "example": "He carried a leather briefcase."
      },
      {
        "word": "attendee",
        "translation": "asistente, participante",
        "example": "Each attendee gets a badge."
      },
      {
        "word": "mint",
        "translation": "menta; casa de la moneda",
        "example": "I like mint tea."
      },
      {
        "word": "prohibit",
        "translation": "prohibir",
        "example": "The law prohibits smoking here."
      },
      {
        "word": "trumpet",
        "translation": "trompeta",
        "example": "He plays the trumpet in a band."
      },
      {
        "word": "wheelchair",
        "translation": "silla de ruedas",
        "example": "The building is wheelchair accessible."
      },
      {
        "word": "jeep",
        "translation": "jeep, todoterreno",
        "example": "We drove a jeep through the desert."
      },
      {
        "word": "skeleton",
        "translation": "esqueleto",
        "example": "The museum has a dinosaur skeleton."
      }
    ]
  },
  "phases": {
    "1": [
      {
        "word": "kitchen",
        "translation": "cocina",
        "example": "In the house, there is a kitchen."
      },
      {
        "word": "bedroom",
        "translation": "dormitorio",
        "example": "He walked into the bedroom."
      },
      {
        "word": "bathroom",
        "translation": "cuarto de baño",
        "example": "First, he goes to the bathroom."
      },
      {
        "word": "garden",
        "translation": "jardín",
        "example": "It has a bigger garden."
      },
      {
        "word": "coffee",
        "translation": "café",
        "example": "He makes some coffee in the morning."
      },
      {
        "word": "bread",
        "translation": "pan",
        "example": "He eats a little bread."
      },
      {
        "word": "lunch",
        "translation": "almuerzo",
        "example": "They often eat lunch together."
      },
      {
        "word": "dinner",
        "translation": "cena",
        "example": "She is making dinner."
      },
      {
        "word": "neighbor",
        "translation": "vecino/a",
        "example": "He sees a new neighbor."
      },
      {
        "word": "quiet",
        "translation": "tranquilo/a",
        "example": "A nice, quiet town."
      },
      {
        "word": "tired",
        "translation": "cansado/a",
        "example": "Are you tired? A little."
      },
      {
        "word": "weather",
        "translation": "tiempo meteorológico",
        "example": "The weather was cold."
      }
    ],
    "2": [
      {
        "word": "mountain",
        "translation": "montaña",
        "example": "The drive to the mountains took five hours."
      },
      {
        "word": "holiday",
        "translation": "vacaciones",
        "example": "They wanted a quiet holiday."
      },
      {
        "word": "suddenly",
        "translation": "de repente",
        "example": "Suddenly, it started to rain."
      },
      {
        "word": "noise",
        "translation": "ruido",
        "example": "They heard a strange noise."
      },
      {
        "word": "hungry",
        "translation": "hambriento/a",
        "example": "It looked hungry and cold."
      },
      {
        "word": "umbrella",
        "translation": "paraguas",
        "example": "They didn't have an umbrella."
      },
      {
        "word": "quietly",
        "translation": "en voz baja",
        "example": "Anna said quietly."
      },
      {
        "word": "travel",
        "translation": "viajar",
        "example": "We used to travel a lot."
      }
    ],
    "3": [
      {
        "word": "decision",
        "translation": "decisión",
        "example": "It was a big decision."
      },
      {
        "word": "opportunity",
        "translation": "oportunidad",
        "example": "It was a great opportunity."
      },
      {
        "word": "director",
        "translation": "director/a",
        "example": "They want me to be the new director."
      },
      {
        "word": "position",
        "translation": "puesto / cargo",
        "example": "You will have a better position."
      },
      {
        "word": "future",
        "translation": "futuro",
        "example": "We must think about the future."
      },
      {
        "word": "risk",
        "translation": "riesgo",
        "example": "You should take the risk."
      },
      {
        "word": "trust",
        "translation": "confiar",
        "example": "You must trust yourself a little more."
      },
      {
        "word": "excited",
        "translation": "ilusionado/a",
        "example": "They were excited about their new life."
      }
    ],
    "4": [
      {
        "word": "interview",
        "translation": "entrevista",
        "example": "She had an interview for a teaching position."
      },
      {
        "word": "experience",
        "translation": "experiencia",
        "example": "She asked about Anna's experience."
      },
      {
        "word": "project",
        "translation": "proyecto",
        "example": "The projects she has finished."
      },
      {
        "word": "accept",
        "translation": "aceptar",
        "example": "My husband has just accepted a job."
      },
      {
        "word": "celebrate",
        "translation": "celebrar",
        "example": "Over the next few days, they celebrated."
      },
      {
        "word": "figure out",
        "translation": "resolver / entender",
        "example": "We're still figuring out where everything goes."
      },
      {
        "word": "give up",
        "translation": "rendirse",
        "example": "I have never given up on a difficult student."
      }
    ],
    "5": [
      {
        "word": "detective",
        "translation": "detective",
        "example": "An officer, Detective Lewis, arrived."
      },
      {
        "word": "evidence",
        "translation": "pruebas / evidencia",
        "example": "The evidence was clear."
      },
      {
        "word": "mistake",
        "translation": "error / equivocación",
        "example": "Small mistakes can lead to big problems."
      },
      {
        "word": "hurry",
        "translation": "prisa",
        "example": "Yesterday I was in a hurry."
      },
      {
        "word": "careful",
        "translation": "cuidadoso/a",
        "example": "A very careful director."
      },
      {
        "word": "witness",
        "translation": "testigo",
        "example": "He is an important witness."
      },
      {
        "word": "relieved",
        "translation": "aliviado/a",
        "example": "Tom felt relieved that it was resolved."
      }
    ],
    "6": [
      {
        "word": "council",
        "translation": "ayuntamiento / concejo",
        "example": "A letter from the city council."
      },
      {
        "word": "funding",
        "translation": "financiación",
        "example": "The school didn't have enough funding."
      },
      {
        "word": "dedication",
        "translation": "dedicación / entrega",
        "example": "Never have I seen so much dedication."
      },
      {
        "word": "fundraising",
        "translation": "recaudación de fondos",
        "example": "The teachers organized fundraising events."
      },
      {
        "word": "invest",
        "translation": "invertir",
        "example": "Willing to invest in a community."
      },
      {
        "word": "poetic",
        "translation": "poético/a",
        "example": "Rarely do you sound this poetic."
      }
    ]
  },
  "totalWords": 5000
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORDS_DATA;
}
