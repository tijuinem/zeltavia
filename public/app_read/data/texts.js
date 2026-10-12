// ZELTAVIA Read - Textos y Cuentos del Curso + Listas de Frecuencia Léxica
const TEXTS_DATA = {
  stories: {
    1: {
      id: "story-1",
      phase: 1,
      title: "A Normal Day",
      wordsCount: 606,
      coverage: "98.3%",
      band: "0 - 1.000 palabras más frecuentes",
      description: "Rutinas diarias de Tom y Anna, contrastando presente simple y continuo.",
      paragraphs: [
        {
          en: "Tom is a man like many other men. He lives in a small house in a nice, quiet town. His house is not big, but it is warm and nice. In the house, there is a kitchen, a living room, and two bedrooms. Tom likes his home very much.",
          es: "Tom es un hombre como muchos otros. Vive en una casa pequeña en un pueblo bonito y tranquilo. Su casa no es grande, pero es acogedora y bonita. En la casa hay una cocina, una sala de estar y dos dormitorios. A Tom le gusta mucho su hogar."
        },
        {
          en: "Every day, Tom gets up at seven. He doesn't like to get up early, but he has a job, so he must. First, he goes to the bathroom. Then he goes to the kitchen and makes some coffee. He also eats a little bread.",
          es: "Todos los días, Tom se levanta a las siete. No le gusta madrugar, pero tiene trabajo, así que debe hacerlo. Primero va al baño. Luego va a la cocina y prepara café. También come un poco de pan."
        },
        {
          en: "Right now, it is seven in the morning, and Tom is standing in the kitchen. He is making coffee. His wife, Anna, is still sleeping. She works at night, so she sleeps in the morning.",
          es: "Ahora mismo son las siete de la mañana y Tom está de pie en la cocina. Está preparando café. Su esposa, Anna, todavía está durmiendo. Trabaja de noche, así que duerme por la mañana."
        },
        {
          en: "Tom has a car, but today he doesn't use it. He walks to work because it is a nice day. At work, Tom is a teacher. He teaches children at a school in the town. He likes his job, but he doesn't like Mondays. On Mondays, there are a lot of things to do, and not much time.",
          es: "Tom tiene coche, pero hoy no lo usa. Va caminando al trabajo porque hace un buen día. En el trabajo, Tom es maestro. Enseña a niños en un colegio del pueblo. Le gusta su trabajo, pero no le gustan los lunes. Los lunes hay muchas cosas que hacer y poco tiempo."
        },
        {
          en: "Does Tom have many friends at work? Yes, he does. He has a good friend called Mark. Mark is a teacher too, but he teaches in a different room. They often eat lunch together.",
          es: "¿Tiene Tom muchos amigos en el trabajo? Sí. Tiene un buen amigo llamado Mark. Mark también es profesor, pero enseña en un aula distinta. A menudo comen juntos."
        },
        {
          en: "At school, Tom teaches from eight to three. He doesn't have much free time during the day, but he has a short break at ten. During the break, he has some coffee and talks with Mark.",
          es: "En el colegio, Tom da clases de ocho a tres. No tiene mucho tiempo libre durante el día, pero tiene un breve descanso a las diez. Durante el recreo toma café y habla con Mark."
        },
        {
          en: "How are you today? Mark asks. I'm fine, thanks. And you? Tom answers. Not bad. Do you have a lot of work today? Yes, a lot. I have many students in my class, and some of them are difficult, Tom says with a smile.",
          es: "¿Cómo estás hoy?, pregunta Mark. Bien, gracias. ¿Y tú?, responde Tom. No me quejo. ¿Tienes mucho trabajo hoy? Sí, bastante. Tengo muchos alumnos en clase y algunos son difíciles, dice Tom con una sonrisa."
        },
        {
          en: "After school, Tom walks home. On the way, he sees a new neighbor. She is standing at the door of the house next to his. Hello, says Tom. Are you the new neighbor? Yes, I am, she says. My name is Laura. What's your name? I'm Tom. Nice to meet you, Laura. Nice to meet you too.",
          es: "Después del colegio, Tom regresa a pie a casa. En el camino ve a una nueva vecina. Está de pie en la puerta de la casa contigua a la suya. Hola, dice Tom. ¿Eres la nueva vecina? Sí, responde ella. Mi nombre es Laura. ¿Cómo te llamas? Soy Tom. Encantado de conocerte, Laura. Igualmente."
        },
        {
          en: "Do you like the town? Tom asks. I don't know yet. It's very quiet here. Yes, it is quiet, but it's a nice place. There are some good shops here, and the people are very nice.",
          es: "¿Te gusta el pueblo?, pregunta Tom. Todavía no lo sé. Es muy tranquilo aquí. Sí, es tranquilo, pero es un buen lugar. Hay buenas tiendas aquí y la gente es muy amable."
        },
        {
          en: "Laura's house is smaller than Tom's house, but it has a bigger garden. In the garden, there are many flowers and a small tree. Your garden is beautiful, Tom says. Thank you. It's not the best garden, but I like it, Laura answers.",
          es: "La casa de Laura es más pequeña que la de Tom, pero tiene un jardín más grande. En el jardín hay muchas flores y un pequeño árbol. Tu jardín es precioso, dice Tom. Gracias. No es el mejor jardín, pero me gusta, contesta Laura."
        },
        {
          en: "At home, Anna is not sleeping now. She is in the kitchen, and she is making dinner. There is a lot of food on the table: some rice, some vegetables, and a little meat. How was your day? Anna asks. It was good. I have a new neighbor now. Her name is Laura, Tom says. Is she nice? Yes, she is very nice.",
          es: "En casa, Anna ya no duerme. Está en la cocina preparando la cena. Hay mucha comida en la mesa: arroz, verduras y un poco de carne. ¿Qué tal el día?, pregunta Anna. Bien. Ahora tengo una nueva vecina. Se llama Laura, dice Tom. ¿Es simpática? Sí, muy agradable."
        },
        {
          en: "They sit down and eat dinner together. The food is very good. After dinner, Tom and Anna sit together and talk. Then they watch television. Later, Tom and Anna sit in the living room. It is quiet and nice. Outside, it is dark, and there aren't many cars in the street.",
          es: "Se sientan a cenar juntos. La comida está muy rica. Tras la cena, Tom y Anna se sientan a charlar. Luego ven la televisión. Más tarde se sientan en el salón. Hay calma y bienestar. Fuera está oscuro y apenas pasan coches por la calle."
        },
        {
          en: "Are you tired? Anna asks. A little, Tom says. But it was a good day. Yesterday was different. The weather was cold, and Tom wasn't very happy. But today is better. Today, everything is good. At ten, Tom and Anna go to bed. Tomorrow is a new day, but for now, they are resting. The end.",
          es: "¿Estás cansado?, pregunta Anna. Un poco, dice Tom. Pero ha sido un buen día. Ayer fue diferente. Hacía frío y Tom no estaba muy contento. Pero hoy ha ido mejor. Hoy todo está bien. A las diez, Tom y Anna se van a la cama. Mañana será otro día; por ahora, descansan. Fin."
        }
      ]
    },
    2: {
      id: "story-2",
      phase: 2,
      title: "The Strange Trip",
      wordsCount: 764,
      coverage: "100.0%",
      band: "1.000 - 2.000 palabras más frecuentes",
      description: "La escapada a la montaña y el rescate del perro Rex (pasado simple y continuo).",
      paragraphs: [
        {
          en: "Last summer, Tom and Anna decided to go on a trip. They both worked a lot that year, so they wanted a quiet holiday, away from the city. They talked about the beach, but in the end, they decided on the mountains.",
          es: "El verano pasado, Tom y Anna decidieron hacer un viaje. Ambos habían trabajado mucho ese año, así que querían unas vacaciones tranquilas, lejos de la ciudad. Hablaron sobre la playa, pero al final se decidieron por la montaña."
        },
        {
          en: "They planned the trip for two weeks. Anna looked for a good hotel on the internet, and Tom checked the weather every day. 'It looks fine,' he said. 'A little rain, maybe, but mostly sun.'",
          es: "Planearon el viaje durante dos semanas. Anna buscó un buen hotel en internet y Tom comprobaba el tiempo todos los días. 'Pinta bien', dijo. 'Quizá algo de lluvia, pero sobre todo sol.'"
        },
        {
          en: "They didn't have much time to pack, so they took only a few things: some clothes, a small bag, and a few books. On Friday, they packed their bags and left early in the morning. The drive to the mountains took five hours.",
          es: "No tuvieron mucho tiempo para hacer las maletas, así que solo llevaron pocas cosas: algo de ropa, una bolsa pequeña y algunos libros. El viernes hicieron el equipaje y salieron temprano. El trayecto en coche duró cinco horas."
        },
        {
          en: "They arrived at a small hotel in the evening. The hotel was old, but it was nice and comfortable. A nice man opened the door. 'How are you?' he asked. 'Tired, but happy,' Tom answered with a smile. 'Nice to meet you. My name is Tom, and this is Anna.' 'Nice to meet you too,' the owner said. 'My name is Paul. I hope you enjoy your stay.'",
          es: "Llegaron a un pequeño hotel por la tarde. El hotel era antiguo, pero agradable y cómodo. Un hombre amable abrió la puerta. '¿Qué tal están?', preguntó. 'Cansados, pero contentos', respondió Tom sonriendo. 'Encantado. Me llamo Tom y ella es Anna.' 'Igualmente', dijo el dueño. 'Me llamo Paul. Espero que disfruten de su estancia.'"
        },
        {
          en: "Suddenly, it started to rain while walking up the path. They didn't have an umbrella, so they looked for a place to wait. They found a small cave and went inside. Then, they heard a strange noise. 'Did you hear that?' Anna said quietly. 'Yes, I did,' Tom said. After a few minutes, a small brown dog came out.",
          es: "De repente, empezó a llover mientras subían por el sendero. No llevaban paraguas, así que buscaron refugio. Encontraron una pequeña cueva y entraron. Entonces oyeron un ruido extraño. '¿Has oído eso?', susurró Anna. 'Sí', dijo Tom. Tras unos minutos, apareció un perro marrón pequeño."
        },
        {
          en: "Meanwhile, back at the hotel, Paul was worried about his dog, Rex. Rex ran away three days before. Tom and Anna returned the dog. 'Rex!' Paul cried. 'You found him!' That evening they celebrated with local wine. It was a strange trip, but a really good one.",
          es: "Mientras tanto, en el hotel, Paul estaba preocupado por su perro Rex, que se había escapado tres días antes. Tom y Anna le devolvieron el perro. '¡Rex!', gritó Paul. '¡Lo habéis encontrado!' Aquella noche celebraron con vino local. Fue un viaje extraño, pero verdaderamente bueno."
        }
      ]
    },
    3: {
      id: "story-3",
      phase: 3,
      title: "A Big Decision",
      wordsCount: 645,
      coverage: "98.9%",
      band: "2.000 - 3.000 palabras más frecuentes",
      description: "La propuesta para dirigir un colegio en otra ciudad (modales, futuros y primer condicional).",
      paragraphs: [
        {
          en: "One evening, Tom got an email from a school in another city. It was a big surprise. The school wanted him to be the new director. It was a great opportunity, but it was also a big decision. 'You should read this,' Tom said to Anna. 'They want me to be the director of a school in the north.'",
          es: "Una tarde, Tom recibió un correo electrónico de un colegio de otra ciudad. Fue una gran sorpresa. Querían que fuese el nuevo director. Era una oportunidad magnífica, pero también una decisión importante. 'Deberías leer esto', le dijo Tom a Anna. 'Quieren que dirija un colegio en el norte.'"
        },
        {
          en: "'If you take the job, we will have more money,' Anna said. 'You will have a better position too.' 'Yes, but if we move, we will have to leave our friends,' Tom said. 'We must think about the future, not only about now.'",
          es: "'Si aceptas el trabajo, tendremos más dinero', dijo Anna. 'Además tendrás un cargo mejor.' 'Sí, pero si nos mudamos, tendremos que dejar a nuestros amigos', contestó Tom. 'Debemos pensar en el futuro, no solo en el presente.'"
        },
        {
          en: "In September, they moved to the new city. It was different, and sometimes difficult, but they were happy with their decision. 'If we never take chances, life will always stay the same,' Tom said. 'This could be a really good change for us.'",
          es: "En septiembre se mudaron a la nueva ciudad. Fue distinto y a veces difícil, pero estaban contentos con su decisión. 'Si nunca nos arriesgamos, la vida seguirá siendo siempre igual', dijo Tom. 'Esto puede ser un gran cambio para nosotros.'"
        }
      ]
    },
    4: {
      id: "story-4",
      phase: 4,
      title: "The Interview",
      wordsCount: 570,
      coverage: "99.6%",
      band: "3.000 - 4.000 palabras más frecuentes",
      description: "Anna acude a su entrevista escolar en la nueva ciudad (Present Perfect y phrasal verbs).",
      paragraphs: [
        {
          en: "It was September, and Anna had an interview for a teaching position at a new school. She had never worked in this city before, so she was a little nervous. 'Have you ever taught young children?' the interviewer asked. 'Yes, I have,' Anna said. 'I've taught for eight years now, since 2018.'",
          es: "Era septiembre y Anna tenía una entrevista para un puesto de profesora en un nuevo colegio. Nunca había trabajado en esta ciudad, así que estaba algo nerviosa. '¿Ha dado clase alguna vez a niños pequeños?', preguntó la entrevistadora. 'Sí', dijo Anna. 'Llevo ocho años enseñando, desde 2018.'"
        },
        {
          en: "'I've never given up on a difficult student,' Anna said. 'I always try to figure out what the problem is.' That evening, her phone rang: 'We want to offer you the position. Welcome to the team.' 'Good,' Tom said. 'I've never been happier.'",
          es: "'Nunca me he rendido con un alumno difícil', dijo Anna. 'Siempre intento averiguar cuál es el problema.' Esa tarde sonó su teléfono: 'Queremos ofrecerle el puesto. Bienvenida al equipo.' 'Genial', dijo Tom. 'Nunca he sido más feliz.'"
        }
      ]
    },
    5: {
      id: "story-5",
      phase: 5,
      title: "Missing Money",
      wordsCount: 614,
      coverage: "99.5%",
      band: "4.000 - 5.000 palabras más frecuentes",
      description: "La desaparición del dinero en el despacho escolar (Past Perfect, pasiva y 3º condicional).",
      paragraphs: [
        {
          en: "One morning, Tom arrived at his office and noticed something strange. The money box was empty. Someone had taken almost two hundred euros. Detective Lewis came to investigate: 'The lock hasn't been broken. Someone must have had a key.'",
          es: "Una mañana, Tom llegó a su despacho y notó algo extraño. La caja del dinero estaba vacía. Alguien se había llevado casi doscientos euros. El inspector Lewis vino a investigar: 'La cerradura no ha sido forzada. Alguien debió de tener una llave.'"
        },
        {
          en: "Later, the police arrested a man in a café near the station. 'If he had asked for help, someone would have helped him,' Tom said. 'If only he had asked. Small mistakes can lead to big problems.'",
          es: "Más tarde, la policía detuvo a un hombre en una cafetería junto a la estación. 'Si hubiese pedido ayuda, alguien le habría ayudado', dijo Tom. 'Si tan solo lo hubiese pedido. Los pequeños descuidos pueden desencadenar grandes problemas.'"
        }
      ]
    },
    6: {
      id: "story-6",
      phase: 6,
      title: "The Meeting That Changed Everything",
      wordsCount: 640,
      coverage: "99.4%",
      band: "5.000 palabras más frecuentes (retórica avanzada)",
      description: "Tom defiende la continuidad del colegio ante el ayuntamiento (cleft sentences e inversiones).",
      paragraphs: [
        {
          en: "On a cold morning in November, Tom received a letter from the city council. The school didn't have enough funding, and the council was thinking about closing it. Tom called an emergency meeting: 'We have to do something. This school means too much to too many people.'",
          es: "En una fría mañana de noviembre, Tom recibió una carta del ayuntamiento. El colegio no tenía fondos suficientes y el consistorio planeaba clausurarlo. Tom convocó una reunión urgente: 'Tenemos que hacer algo. Esta escuela significa demasiado para mucha gente.'"
        },
        {
          en: "Before the board, Tom spoke: 'It was this school that gave me my first job. Never have I seen so much dedication in one place.' Laura stood up to offer funding from her company fund. What really saved the school wasn't just money, but everyone who refused to give up.",
          es: "Ante la junta, Tom intervino: 'Fue este colegio el que me brindó mi primer empleo. Jamás he visto tanta entrega en un solo lugar.' Laura se levantó para aportar fondos de su empresa. Lo que verdaderamente salvó la escuela no fue solo el dinero, sino todos los que se negaron a rendirse."
        }
      ]
    }
  },

  // Bandas de Vocabulario por Frecuencia (1k a 5k)
  bands: {
    1: {
      name: "Banda 1 (0 – 1.000 palabras)",
      range: "0 - 1000",
      description: "El 72% del habla real diaria en inglés (verbos nucleares, pronombres y determinantes).",
      words: [
        { en: "the", es: "el / la / los / las", ex: "The school is in the town." },
        { en: "be", es: "ser / estar", ex: "Tom is a teacher." },
        { en: "have", es: "tener / haber", ex: "Does Tom have friends?" },
        { en: "say", es: "decir", ex: "Laura says hello." },
        { en: "make", es: "hacer / fabricar", ex: "He makes some coffee." },
        { en: "work", es: "trabajar / funcionar", ex: "Anna works at night." },
        { en: "know", es: "saber / conocer", ex: "I don't know yet." },
        { en: "people", es: "personas / gente", ex: "The people are very nice." },
        { en: "year", es: "año", ex: "They worked a lot that year." },
        { en: "good", es: "bueno / bien", ex: "It was a good day." },
        { en: "see", es: "ver", ex: "He sees a new neighbor." },
        { en: "day", es: "día", ex: "Every day, Tom gets up at seven." },
        { en: "come", es: "venir / llegar", ex: "An animal came out of the dark." },
        { en: "think", es: "pensar / creer", ex: "I think you should take the risk." },
        { en: "look", es: "mirar / parecer", ex: "It looked hungry and cold." },
        { en: "time", es: "tiempo / vez", ex: "There is not much time." }
      ]
    },
    2: {
      name: "Banda 2 (1.000 – 2.000 palabras)",
      range: "1000 - 2000",
      description: "Vocabulario de acción, relato en pasado, viajes, emociones y descripciones concretas.",
      words: [
        { en: "travel", es: "viajar", ex: "We used to travel a lot." },
        { en: "mountain", es: "montaña", ex: "The drive to the mountains took five hours." },
        { en: "suddenly", es: "de repente", ex: "Suddenly, it started to rain." },
        { en: "noise", es: "ruido", ex: "They heard a strange noise." },
        { en: "hungry", es: "hambriento/a", ex: "It looked hungry and cold." },
        { en: "holiday", es: "vacaciones", ex: "They wanted a quiet holiday." },
        { en: "umbrella", es: "paraguas", ex: "They didn't have an umbrella." },
        { en: "quietly", es: "en voz baja / sigilosamente", ex: "Anna said quietly." },
        { en: "gift", es: "regalo", ex: "Paul gave them a small gift." },
        { en: "wine", es: "vino", ex: "The wine was very good." },
        { en: "pack", es: "hacer la maleta / empacar", ex: "They packed their bags." },
        { en: "arrive", es: "llegar", ex: "They arrived at a small hotel." }
      ]
    },
    3: {
      name: "Banda 3 (2.000 – 3.000 palabras)",
      range: "2000 - 3000",
      description: "Razonamiento abstracto, decisiones, deliberación laboral y condicionales.",
      words: [
        { en: "decision", es: "decisión", ex: "It was a big decision." },
        { en: "opportunity", es: "oportunidad", ex: "It was a great opportunity." },
        { en: "director", es: "director/a", ex: "They want me to be the new director." },
        { en: "position", es: "cargo / puesto de trabajo", ex: "You will have a better position." },
        { en: "future", es: "futuro", ex: "We must think about the future." },
        { en: "risk", es: "riesgo", ex: "You should take the risk." },
        { en: "trust", es: "confiar / confianza", ex: "You must trust yourself a little more." },
        { en: "excited", es: "emocionado/a / ilusionado/a", ex: "They were excited about their new life." },
        { en: "explore", es: "explorar", ex: "A new city to explore." },
        { en: "chance", es: "oportunidad / casualidad", ex: "We should take more chances." }
      ]
    },
    4: {
      name: "Banda 4 (3.000 – 4.000 palabras)",
      range: "3000 - 4000",
      description: "Trayectoria laboral, expresiones de experiencia, entrevistas y phrasal verbs.",
      words: [
        { en: "interview", es: "entrevista", ex: "She had an interview for a teaching position." },
        { en: "experience", es: "experiencia", ex: "Mrs. Green asked about Anna's experience." },
        { en: "project", es: "proyecto", ex: "The projects she has finished." },
        { en: "figure out", es: "resolver / entender", ex: "We're still figuring out where everything goes." },
        { en: "fit in", es: "encajar", ex: "We think you'll fit in well here." },
        { en: "give up", es: "rendirse", ex: "I have never given up on a difficult student." },
        { en: "celebrate", es: "celebrar", ex: "Over the next few days, they celebrated." },
        { en: "head teacher", es: "director/a escolar", ex: "Have you been the head teacher here for long?" }
      ]
    },
    5: {
      name: "Banda 5 (4.000 – 5.000 palabras)",
      range: "4000 - 5000",
      description: "Registro culto, retórica, investigación, causas comunitarias y matices.",
      words: [
        { en: "council", es: "ayuntamiento / concejo", ex: "A letter from the city council." },
        { en: "funding", es: "financiación", ex: "The school didn't have enough funding." },
        { en: "dedication", es: "entrega / dedicación", ex: "Never have I seen so much dedication." },
        { en: "fundraising", es: "recaudación de fondos", ex: "The teachers organized fundraising events." },
        { en: "invest", es: "invertir", ex: "Willing to invest in a community." },
        { en: "poetic", es: "poético/a", ex: "Rarely do you sound this poetic." },
        { en: "relieved", es: "aliviado/a", ex: "Tom felt relieved that it was resolved." },
        { en: "witness", es: "testigo", ex: "Mark is an important witness." },
        { en: "evidence", es: "pruebas / evidencia", ex: "The evidence was clear." }
      ]
    },
    phrasal: {
      name: "Phrasal Verbs (200 verbos esenciales)",
      range: "Phrasal Verbs",
      description: "Verbos compuestos y partículas preposicionales de máxima frecuencia y uso cotidiano.",
      words: [
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
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEXTS_DATA;
}
