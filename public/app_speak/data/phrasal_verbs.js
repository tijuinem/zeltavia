// ZELTAVIA — 200 Phrasal Verbs Esenciales con Traducciones y Ejemplos
const PHRASAL_VERBS_DATA = [
  {
    "rank": 1,
    "en": "go on",
    "translations": {
      "es": "seguir, continuar, ocurrir",
      "fr": "continuer, se passer",
      "de": "weitermachen, weitergehen, passieren"
    },
    "example": {
      "en": "Please go on with your story.",
      "es": "Por favor, sigue con tu historia.",
      "fr": "Continue ton histoire, s'il te plaît.",
      "de": "Erzähl bitte deine Geschichte weiter."
    }
  },
  {
    "rank": 2,
    "en": "pick up",
    "translations": {
      "es": "recoger, coger",
      "fr": "ramasser, prendre",
      "de": "aufheben, abholen"
    },
    "example": {
      "en": "I will pick up the kids at five.",
      "es": "Recogeré a los niños a las cinco.",
      "fr": "J'irai chercher les enfants à cinq heures.",
      "de": "Ich hole die Kinder um fünf Uhr ab."
    }
  },
  {
    "rank": 3,
    "en": "come back",
    "translations": {
      "es": "volver, regresar",
      "fr": "revenir, rentrer",
      "de": "zurückkommen"
    },
    "example": {
      "en": "She will come back tomorrow.",
      "es": "Ella volverá mañana.",
      "fr": "Elle reviendra demain.",
      "de": "Sie kommt morgen zurück."
    }
  },
  {
    "rank": 4,
    "en": "come up",
    "translations": {
      "es": "surgir, acercarse, subir",
      "fr": "surgir, se présenter",
      "de": "aufkommen, auftauchen"
    },
    "example": {
      "en": "Something urgent came up.",
      "es": "Ha surgido algo urgente.",
      "fr": "Quelque chose d'urgent est survenu.",
      "de": "Es ist etwas Dringendes dazwischengekommen."
    }
  },
  {
    "rank": 5,
    "en": "go back",
    "translations": {
      "es": "volver, regresar",
      "fr": "retourner",
      "de": "zurückgehen"
    },
    "example": {
      "en": "I want to go back home.",
      "es": "Quiero volver a casa.",
      "fr": "Je veux retourner à la maison.",
      "de": "Ich möchte nach Hause zurückgehen."
    }
  },
  {
    "rank": 6,
    "en": "find out",
    "translations": {
      "es": "descubrir, averiguar",
      "fr": "découvrir, apprendre",
      "de": "herausfinden"
    },
    "example": {
      "en": "I need to find out the truth.",
      "es": "Necesito averiguar la verdad.",
      "fr": "Je dois découvrir la vérité.",
      "de": "Ich muss die Wahrheit herausfinden."
    }
  },
  {
    "rank": 7,
    "en": "come out",
    "translations": {
      "es": "salir, publicarse",
      "fr": "sortir, paraître",
      "de": "herauskommen, erscheinen"
    },
    "example": {
      "en": "The new book comes out in May.",
      "es": "El nuevo libro sale en mayo.",
      "fr": "Le nouveau livre sort en mai.",
      "de": "Das neue Buch erscheint im Mai."
    }
  },
  {
    "rank": 8,
    "en": "go out",
    "translations": {
      "es": "salir",
      "fr": "sortir",
      "de": "ausgehen"
    },
    "example": {
      "en": "We go out every Friday.",
      "es": "Salimos todos los viernes.",
      "fr": "Nous sortons tous les vendredis.",
      "de": "Wir gehen jeden Freitag aus."
    }
  },
  {
    "rank": 9,
    "en": "point out",
    "translations": {
      "es": "señalar, indicar",
      "fr": "souligner, signaler",
      "de": "hinweisen auf, aufzeigen"
    },
    "example": {
      "en": "He pointed out a mistake.",
      "es": "Él señaló un error.",
      "fr": "Il a signalé une erreur.",
      "de": "Er wies auf einen Fehler hin."
    }
  },
  {
    "rank": 10,
    "en": "grow up",
    "translations": {
      "es": "crecer, madurar",
      "fr": "grandir",
      "de": "aufwachsen, erwachsen werden"
    },
    "example": {
      "en": "I grew up in a small town.",
      "es": "Crecí en un pueblo pequeño.",
      "fr": "J'ai grandi dans une petite ville.",
      "de": "Ich bin in einer Kleinstadt aufgewachsen."
    }
  },
  {
    "rank": 11,
    "en": "set up",
    "translations": {
      "es": "montar, establecer, configurar",
      "fr": "installer, créer, configurer",
      "de": "einrichten, aufbauen, gründen"
    },
    "example": {
      "en": "They set up a new company.",
      "es": "Montaron una nueva empresa.",
      "fr": "Ils ont créé une nouvelle entreprise.",
      "de": "Sie haben eine neue Firma gegründet."
    }
  },
  {
    "rank": 12,
    "en": "turn out",
    "translations": {
      "es": "resultar, salir (bien/mal)",
      "fr": "s'avérer, se révéler",
      "de": "sich herausstellen, ausfallen"
    },
    "example": {
      "en": "It turned out to be a good idea.",
      "es": "Resultó ser una buena idea.",
      "fr": "Cela s'est avéré être une bonne idée.",
      "de": "Es stellte sich als gute Idee heraus."
    }
  },
  {
    "rank": 13,
    "en": "get out",
    "translations": {
      "es": "salir, bajarse",
      "fr": "sortir, descendre",
      "de": "aussteigen, herauskommen"
    },
    "example": {
      "en": "Get out of the car, please.",
      "es": "Sal del coche, por favor.",
      "fr": "Sors de la voiture, s'il te plaît.",
      "de": "Steig bitte aus dem Auto aus."
    }
  },
  {
    "rank": 14,
    "en": "come in",
    "translations": {
      "es": "entrar, pasar",
      "fr": "entrer",
      "de": "hereinkommen"
    },
    "example": {
      "en": "Please come in.",
      "es": "Pasa, por favor.",
      "fr": "Entrez, s'il vous plaît.",
      "de": "Komm bitte herein."
    }
  },
  {
    "rank": 15,
    "en": "take on",
    "translations": {
      "es": "asumir, aceptar, contratar",
      "fr": "assumer, accepter, embaucher",
      "de": "übernehmen, annehmen, einstellen"
    },
    "example": {
      "en": "She took on a new project.",
      "es": "Ella asumió un nuevo proyecto.",
      "fr": "Elle a pris en charge un nouveau projet.",
      "de": "Sie hat ein neues Projekt übernommen."
    }
  },
  {
    "rank": 16,
    "en": "look for",
    "translations": {
      "es": "buscar",
      "fr": "chercher",
      "de": "suchen"
    },
    "example": {
      "en": "I am looking for my keys.",
      "es": "Estoy buscando mis llaves.",
      "fr": "Je cherche mes clés.",
      "de": "Ich suche meine Schlüssel."
    }
  },
  {
    "rank": 17,
    "en": "give up",
    "translations": {
      "es": "rendirse, abandonar",
      "fr": "abandonner, renoncer",
      "de": "aufgeben"
    },
    "example": {
      "en": "Never give up on your dreams.",
      "es": "Nunca renuncies a tus sueños.",
      "fr": "N'abandonne jamais tes rêves.",
      "de": "Gib deine Träume niemals auf."
    }
  },
  {
    "rank": 18,
    "en": "make up",
    "translations": {
      "es": "inventar, maquillar, reconciliarse",
      "fr": "inventer, maquiller, se réconcilier",
      "de": "erfinden, schminken, sich versöhnen"
    },
    "example": {
      "en": "He made up an excuse.",
      "es": "Él se inventó una excusa.",
      "fr": "Il a inventé une excuse.",
      "de": "Er hat eine Ausrede erfunden."
    }
  },
  {
    "rank": 19,
    "en": "end up",
    "translations": {
      "es": "acabar, terminar (en)",
      "fr": "finir par, se retrouver",
      "de": "landen, enden"
    },
    "example": {
      "en": "We ended up at a small café.",
      "es": "Acabamos en una pequeña cafetería.",
      "fr": "Nous avons fini dans un petit café.",
      "de": "Wir sind in einem kleinen Café gelandet."
    }
  },
  {
    "rank": 20,
    "en": "get back",
    "translations": {
      "es": "volver, recuperar",
      "fr": "revenir, récupérer",
      "de": "zurückkommen, zurückbekommen"
    },
    "example": {
      "en": "When did you get back?",
      "es": "¿Cuándo volviste?",
      "fr": "Quand es-tu rentré ?",
      "de": "Wann bist du zurückgekommen?"
    }
  },
  {
    "rank": 21,
    "en": "look up",
    "translations": {
      "es": "buscar (en un diccionario), mirar hacia arriba",
      "fr": "chercher (dans un dictionnaire), lever les yeux",
      "de": "nachschlagen, aufschauen"
    },
    "example": {
      "en": "Look up the word in the dictionary.",
      "es": "Busca la palabra en el diccionario.",
      "fr": "Cherche le mot dans le dictionnaire.",
      "de": "Schlag das Wort im Wörterbuch nach."
    }
  },
  {
    "rank": 22,
    "en": "figure out",
    "translations": {
      "es": "descubrir, entender",
      "fr": "comprendre, trouver",
      "de": "herausfinden, verstehen"
    },
    "example": {
      "en": "I can't figure out this problem.",
      "es": "No consigo entender este problema.",
      "fr": "Je n'arrive pas à comprendre ce problème.",
      "de": "Ich kann dieses Problem nicht lösen."
    }
  },
  {
    "rank": 23,
    "en": "sit down",
    "translations": {
      "es": "sentarse",
      "fr": "s'asseoir",
      "de": "sich hinsetzen"
    },
    "example": {
      "en": "Please sit down.",
      "es": "Siéntate, por favor.",
      "fr": "Assieds-toi, s'il te plaît.",
      "de": "Setz dich bitte hin."
    }
  },
  {
    "rank": 24,
    "en": "get up",
    "translations": {
      "es": "levantarse",
      "fr": "se lever",
      "de": "aufstehen"
    },
    "example": {
      "en": "I get up at seven.",
      "es": "Me levanto a las siete.",
      "fr": "Je me lève à sept heures.",
      "de": "Ich stehe um sieben Uhr auf."
    }
  },
  {
    "rank": 25,
    "en": "take out",
    "translations": {
      "es": "sacar, llevar fuera",
      "fr": "sortir, emporter",
      "de": "herausnehmen, ausführen"
    },
    "example": {
      "en": "Take out the trash.",
      "es": "Saca la basura.",
      "fr": "Sors la poubelle.",
      "de": "Bring den Müll raus."
    }
  },
  {
    "rank": 26,
    "en": "come on",
    "translations": {
      "es": "vamos, venga, darse prisa",
      "fr": "allez, dépêche-toi",
      "de": "komm schon, los"
    },
    "example": {
      "en": "Come on, we are late!",
      "es": "¡Venga, llegamos tarde!",
      "fr": "Allez, nous sommes en retard !",
      "de": "Komm schon, wir sind spät dran!"
    }
  },
  {
    "rank": 27,
    "en": "go down",
    "translations": {
      "es": "bajar, descender",
      "fr": "descendre, baisser",
      "de": "hinuntergehen, sinken"
    },
    "example": {
      "en": "Prices are going down.",
      "es": "Los precios están bajando.",
      "fr": "Les prix baissent.",
      "de": "Die Preise sinken."
    }
  },
  {
    "rank": 28,
    "en": "show up",
    "translations": {
      "es": "aparecer, presentarse",
      "fr": "se montrer, arriver",
      "de": "auftauchen, erscheinen"
    },
    "example": {
      "en": "He didn't show up at the party.",
      "es": "Él no apareció en la fiesta.",
      "fr": "Il ne s'est pas montré à la fête.",
      "de": "Er ist auf der Party nicht aufgetaucht."
    }
  },
  {
    "rank": 29,
    "en": "take off",
    "translations": {
      "es": "despegar, quitarse",
      "fr": "décoller, enlever",
      "de": "abheben, ausziehen"
    },
    "example": {
      "en": "The plane takes off at noon.",
      "es": "El avión despega a mediodía.",
      "fr": "L'avion décolle à midi.",
      "de": "Das Flugzeug hebt mittags ab."
    }
  },
  {
    "rank": 30,
    "en": "work out",
    "translations": {
      "es": "hacer ejercicio, resolver, funcionar",
      "fr": "faire du sport, résoudre, marcher",
      "de": "trainieren, lösen, klappen"
    },
    "example": {
      "en": "I work out three times a week.",
      "es": "Hago ejercicio tres veces por semana.",
      "fr": "Je fais du sport trois fois par semaine.",
      "de": "Ich trainiere dreimal pro Woche."
    }
  },
  {
    "rank": 31,
    "en": "stand up",
    "translations": {
      "es": "levantarse, ponerse de pie",
      "fr": "se lever, se mettre debout",
      "de": "aufstehen"
    },
    "example": {
      "en": "Everyone stood up.",
      "es": "Todos se pusieron de pie.",
      "fr": "Tout le monde s'est levé.",
      "de": "Alle standen auf."
    }
  },
  {
    "rank": 32,
    "en": "come down",
    "translations": {
      "es": "bajar, descender",
      "fr": "descendre",
      "de": "herunterkommen"
    },
    "example": {
      "en": "Come down, dinner is ready.",
      "es": "Baja, la cena está lista.",
      "fr": "Descends, le dîner est prêt.",
      "de": "Komm runter, das Essen ist fertig."
    }
  },
  {
    "rank": 33,
    "en": "go ahead",
    "translations": {
      "es": "adelante, proceder",
      "fr": "allez-y, continuer",
      "de": "los, nur zu"
    },
    "example": {
      "en": "Go ahead, I'm listening.",
      "es": "Adelante, te escucho.",
      "fr": "Vas-y, je t'écoute.",
      "de": "Nur zu, ich höre zu."
    }
  },
  {
    "rank": 34,
    "en": "go up",
    "translations": {
      "es": "subir, aumentar",
      "fr": "monter, augmenter",
      "de": "hinaufgehen, steigen"
    },
    "example": {
      "en": "The temperature went up.",
      "es": "La temperatura subió.",
      "fr": "La température a augmenté.",
      "de": "Die Temperatur ist gestiegen."
    }
  },
  {
    "rank": 35,
    "en": "look back",
    "translations": {
      "es": "mirar atrás, recordar",
      "fr": "regarder en arrière, repenser",
      "de": "zurückblicken"
    },
    "example": {
      "en": "I often look back on those years.",
      "es": "A menudo recuerdo aquellos años.",
      "fr": "Je repense souvent à ces années.",
      "de": "Ich blicke oft auf diese Jahre zurück."
    }
  },
  {
    "rank": 36,
    "en": "wake up",
    "translations": {
      "es": "despertarse, despertar",
      "fr": "se réveiller, réveiller",
      "de": "aufwachen, aufwecken"
    },
    "example": {
      "en": "I wake up early.",
      "es": "Me despierto temprano.",
      "fr": "Je me réveille tôt.",
      "de": "Ich wache früh auf."
    }
  },
  {
    "rank": 37,
    "en": "carry out",
    "translations": {
      "es": "llevar a cabo, realizar",
      "fr": "réaliser, effectuer",
      "de": "durchführen"
    },
    "example": {
      "en": "They carried out an experiment.",
      "es": "Llevaron a cabo un experimento.",
      "fr": "Ils ont réalisé une expérience.",
      "de": "Sie führten ein Experiment durch."
    }
  },
  {
    "rank": 38,
    "en": "take over",
    "translations": {
      "es": "asumir el control, hacerse cargo",
      "fr": "prendre le contrôle, reprendre",
      "de": "übernehmen"
    },
    "example": {
      "en": "She took over the company.",
      "es": "Ella se hizo cargo de la empresa.",
      "fr": "Elle a repris l'entreprise.",
      "de": "Sie hat die Firma übernommen."
    }
  },
  {
    "rank": 39,
    "en": "hold up",
    "translations": {
      "es": "retrasar, sostener, atracar",
      "fr": "retarder, soutenir, braquer",
      "de": "aufhalten, stützen, überfallen"
    },
    "example": {
      "en": "The traffic held us up.",
      "es": "El tráfico nos retrasó.",
      "fr": "La circulation nous a retardés.",
      "de": "Der Verkehr hat uns aufgehalten."
    }
  },
  {
    "rank": 40,
    "en": "look after",
    "translations": {
      "es": "cuidar, ocuparse de",
      "fr": "s'occuper de, garder",
      "de": "sich kümmern um, aufpassen auf"
    },
    "example": {
      "en": "She looks after her grandmother.",
      "es": "Ella cuida de su abuela.",
      "fr": "Elle s'occupe de sa grand-mère.",
      "de": "Sie kümmert sich um ihre Großmutter."
    }
  },
  {
    "rank": 41,
    "en": "pull out",
    "translations": {
      "es": "sacar, retirarse",
      "fr": "sortir, retirer, se retirer",
      "de": "herausziehen, aussteigen"
    },
    "example": {
      "en": "He pulled out a coin.",
      "es": "Él sacó una moneda.",
      "fr": "Il a sorti une pièce.",
      "de": "Er zog eine Münze heraus."
    }
  },
  {
    "rank": 42,
    "en": "turn around",
    "translations": {
      "es": "darse la vuelta, girar",
      "fr": "se retourner, faire demi-tour",
      "de": "sich umdrehen, umkehren"
    },
    "example": {
      "en": "Turn around and look.",
      "es": "Date la vuelta y mira.",
      "fr": "Retourne-toi et regarde.",
      "de": "Dreh dich um und schau."
    }
  },
  {
    "rank": 43,
    "en": "take up",
    "translations": {
      "es": "empezar (afición), ocupar",
      "fr": "se mettre à, occuper",
      "de": "anfangen mit, einnehmen"
    },
    "example": {
      "en": "He took up painting.",
      "es": "Él se puso a pintar.",
      "fr": "Il s'est mis à la peinture.",
      "de": "Er hat mit dem Malen angefangen."
    }
  },
  {
    "rank": 44,
    "en": "look down",
    "translations": {
      "es": "mirar hacia abajo, menospreciar",
      "fr": "regarder en bas, mépriser",
      "de": "hinunterschauen, herabsehen"
    },
    "example": {
      "en": "Don't look down on others.",
      "es": "No menosprecies a los demás.",
      "fr": "Ne méprise pas les autres.",
      "de": "Sieh nicht auf andere herab."
    }
  },
  {
    "rank": 45,
    "en": "put up",
    "translations": {
      "es": "colgar, levantar, alojar",
      "fr": "accrocher, ériger, héberger",
      "de": "aufhängen, aufstellen, unterbringen"
    },
    "example": {
      "en": "We put up a tent.",
      "es": "Montamos una tienda de campaña.",
      "fr": "Nous avons monté une tente.",
      "de": "Wir haben ein Zelt aufgebaut."
    }
  },
  {
    "rank": 46,
    "en": "bring back",
    "translations": {
      "es": "devolver, traer de vuelta",
      "fr": "rapporter, ramener",
      "de": "zurückbringen"
    },
    "example": {
      "en": "Bring back my book.",
      "es": "Devuélveme mi libro.",
      "fr": "Rapporte-moi mon livre.",
      "de": "Bring mein Buch zurück."
    }
  },
  {
    "rank": 47,
    "en": "bring up",
    "translations": {
      "es": "criar, plantear, mencionar",
      "fr": "élever, soulever, évoquer",
      "de": "erziehen, ansprechen"
    },
    "example": {
      "en": "She brought up the topic again.",
      "es": "Ella volvió a sacar el tema.",
      "fr": "Elle a de nouveau évoqué le sujet.",
      "de": "Sie hat das Thema wieder angesprochen."
    }
  },
  {
    "rank": 48,
    "en": "look out",
    "translations": {
      "es": "tener cuidado, ¡cuidado!",
      "fr": "faire attention, attention !",
      "de": "aufpassen, Vorsicht"
    },
    "example": {
      "en": "Look out! A car is coming.",
      "es": "¡Cuidado! Viene un coche.",
      "fr": "Attention ! Une voiture arrive.",
      "de": "Pass auf! Ein Auto kommt."
    }
  },
  {
    "rank": 49,
    "en": "bring in",
    "translations": {
      "es": "introducir, traer, generar",
      "fr": "introduire, apporter, rapporter",
      "de": "einführen, hereinbringen, einbringen"
    },
    "example": {
      "en": "The shop brings in a lot of money.",
      "es": "La tienda genera mucho dinero.",
      "fr": "Le magasin rapporte beaucoup d'argent.",
      "de": "Der Laden bringt viel Geld ein."
    }
  },
  {
    "rank": 50,
    "en": "open up",
    "translations": {
      "es": "abrir, abrirse, sincerarse",
      "fr": "ouvrir, s'ouvrir",
      "de": "öffnen, sich öffnen"
    },
    "example": {
      "en": "He finally opened up to me.",
      "es": "Por fin se sinceró conmigo.",
      "fr": "Il s'est enfin confié à moi.",
      "de": "Er hat sich mir endlich geöffnet."
    }
  },
  {
    "rank": 51,
    "en": "check out",
    "translations": {
      "es": "comprobar, echar un vistazo, dejar el hotel",
      "fr": "vérifier, jeter un œil, quitter l'hôtel",
      "de": "ausprobieren, anschauen, auschecken"
    },
    "example": {
      "en": "Check out this new song.",
      "es": "Escucha esta nueva canción.",
      "fr": "Écoute cette nouvelle chanson.",
      "de": "Hör dir dieses neue Lied an."
    }
  },
  {
    "rank": 52,
    "en": "move on",
    "translations": {
      "es": "seguir adelante, pasar a otra cosa",
      "fr": "passer à autre chose, avancer",
      "de": "weitermachen, weiterziehen"
    },
    "example": {
      "en": "It's time to move on.",
      "es": "Es hora de seguir adelante.",
      "fr": "Il est temps de passer à autre chose.",
      "de": "Es ist Zeit, weiterzumachen."
    }
  },
  {
    "rank": 53,
    "en": "put out",
    "translations": {
      "es": "apagar, publicar",
      "fr": "éteindre, publier",
      "de": "löschen, veröffentlichen"
    },
    "example": {
      "en": "The firefighters put out the fire.",
      "es": "Los bomberos apagaron el fuego.",
      "fr": "Les pompiers ont éteint l'incendie.",
      "de": "Die Feuerwehr löschte das Feuer."
    }
  },
  {
    "rank": 54,
    "en": "look around",
    "translations": {
      "es": "mirar alrededor, echar un vistazo",
      "fr": "regarder autour, jeter un œil",
      "de": "sich umsehen"
    },
    "example": {
      "en": "We looked around the city.",
      "es": "Echamos un vistazo por la ciudad.",
      "fr": "Nous avons visité la ville.",
      "de": "Wir haben uns in der Stadt umgesehen."
    }
  },
  {
    "rank": 55,
    "en": "catch up",
    "translations": {
      "es": "ponerse al día, alcanzar",
      "fr": "rattraper, se mettre à jour",
      "de": "aufholen, nachholen"
    },
    "example": {
      "en": "Let's catch up over coffee.",
      "es": "Pongámonos al día con un café.",
      "fr": "Mettons-nous à jour autour d'un café.",
      "de": "Lass uns bei einem Kaffee über alles Neue reden."
    }
  },
  {
    "rank": 56,
    "en": "go in",
    "translations": {
      "es": "entrar",
      "fr": "entrer",
      "de": "hineingehen"
    },
    "example": {
      "en": "Let's go in.",
      "es": "Entremos.",
      "fr": "Entrons.",
      "de": "Gehen wir hinein."
    }
  },
  {
    "rank": 57,
    "en": "break down",
    "translations": {
      "es": "averiarse, romperse, desglosar",
      "fr": "tomber en panne, s'effondrer",
      "de": "kaputtgehen, zusammenbrechen"
    },
    "example": {
      "en": "The car broke down.",
      "es": "El coche se averió.",
      "fr": "La voiture est tombée en panne.",
      "de": "Das Auto ist kaputtgegangen."
    }
  },
  {
    "rank": 58,
    "en": "get off",
    "translations": {
      "es": "bajarse, salir",
      "fr": "descendre",
      "de": "aussteigen"
    },
    "example": {
      "en": "I get off at the next stop.",
      "es": "Me bajo en la próxima parada.",
      "fr": "Je descends au prochain arrêt.",
      "de": "Ich steige an der nächsten Haltestelle aus."
    }
  },
  {
    "rank": 59,
    "en": "keep up",
    "translations": {
      "es": "mantener, seguir el ritmo",
      "fr": "maintenir, suivre le rythme",
      "de": "mithalten, weitermachen"
    },
    "example": {
      "en": "Keep up the good work.",
      "es": "Sigue con el buen trabajo.",
      "fr": "Continue ton bon travail.",
      "de": "Mach weiter so."
    }
  },
  {
    "rank": 60,
    "en": "put down",
    "translations": {
      "es": "dejar, poner, anotar",
      "fr": "poser, noter",
      "de": "hinlegen, hinschreiben"
    },
    "example": {
      "en": "Put the box down.",
      "es": "Deja la caja en el suelo.",
      "fr": "Pose la boîte.",
      "de": "Stell die Kiste ab."
    }
  },
  {
    "rank": 61,
    "en": "reach out",
    "translations": {
      "es": "ponerse en contacto, extender la mano",
      "fr": "contacter, tendre la main",
      "de": "sich melden, die Hand ausstrecken"
    },
    "example": {
      "en": "Feel free to reach out to me.",
      "es": "No dudes en ponerte en contacto conmigo.",
      "fr": "N'hésite pas à me contacter.",
      "de": "Melde dich gern bei mir."
    }
  },
  {
    "rank": 62,
    "en": "go off",
    "translations": {
      "es": "sonar, explotar, irse",
      "fr": "sonner, exploser, partir",
      "de": "klingeln, explodieren, losgehen"
    },
    "example": {
      "en": "The alarm went off at six.",
      "es": "La alarma sonó a las seis.",
      "fr": "L'alarme a sonné à six heures.",
      "de": "Der Wecker klingelte um sechs."
    }
  },
  {
    "rank": 63,
    "en": "cut off",
    "translations": {
      "es": "cortar, aislar",
      "fr": "couper, isoler",
      "de": "abschneiden, abtrennen, unterbrechen"
    },
    "example": {
      "en": "The power was cut off.",
      "es": "Cortaron la luz.",
      "fr": "L'électricité a été coupée.",
      "de": "Der Strom wurde abgestellt."
    }
  },
  {
    "rank": 64,
    "en": "look forward to",
    "translations": {
      "es": "tener ganas de, esperar con ilusión",
      "fr": "avoir hâte de",
      "de": "sich freuen auf"
    },
    "example": {
      "en": "I look forward to seeing you.",
      "es": "Tengo ganas de verte.",
      "fr": "J'ai hâte de te voir.",
      "de": "Ich freue mich darauf, dich zu sehen."
    }
  },
  {
    "rank": 65,
    "en": "turn back",
    "translations": {
      "es": "volver atrás, dar marcha atrás",
      "fr": "rebrousser chemin, faire demi-tour",
      "de": "umkehren"
    },
    "example": {
      "en": "We had to turn back.",
      "es": "Tuvimos que dar la vuelta.",
      "fr": "Nous avons dû faire demi-tour.",
      "de": "Wir mussten umkehren."
    }
  },
  {
    "rank": 66,
    "en": "turn on",
    "translations": {
      "es": "encender, activar",
      "fr": "allumer, activer",
      "de": "einschalten, anmachen"
    },
    "example": {
      "en": "Turn on the light.",
      "es": "Enciende la luz.",
      "fr": "Allume la lumière.",
      "de": "Schalte das Licht ein."
    }
  },
  {
    "rank": 67,
    "en": "pull up",
    "translations": {
      "es": "detenerse, arrancar, subir",
      "fr": "s'arrêter, arracher",
      "de": "anhalten, hochziehen"
    },
    "example": {
      "en": "A taxi pulled up outside.",
      "es": "Un taxi se detuvo fuera.",
      "fr": "Un taxi s'est arrêté dehors.",
      "de": "Ein Taxi hielt draußen an."
    }
  },
  {
    "rank": 68,
    "en": "set out",
    "translations": {
      "es": "partir, emprender, exponer",
      "fr": "partir, se mettre en route",
      "de": "aufbrechen, sich vornehmen"
    },
    "example": {
      "en": "We set out at dawn.",
      "es": "Salimos al amanecer.",
      "fr": "Nous sommes partis à l'aube.",
      "de": "Wir sind im Morgengrauen aufgebrochen."
    }
  },
  {
    "rank": 69,
    "en": "clean up",
    "translations": {
      "es": "limpiar, ordenar",
      "fr": "nettoyer, ranger",
      "de": "aufräumen, sauber machen"
    },
    "example": {
      "en": "Clean up your room.",
      "es": "Ordena tu habitación.",
      "fr": "Range ta chambre.",
      "de": "Räum dein Zimmer auf."
    }
  },
  {
    "rank": 70,
    "en": "turn into",
    "translations": {
      "es": "convertirse en, transformarse",
      "fr": "se transformer en, devenir",
      "de": "sich verwandeln in, werden zu"
    },
    "example": {
      "en": "The caterpillar turned into a butterfly.",
      "es": "La oruga se convirtió en mariposa.",
      "fr": "La chenille s'est transformée en papillon.",
      "de": "Die Raupe hat sich in einen Schmetterling verwandelt."
    }
  },
  {
    "rank": 71,
    "en": "shut down",
    "translations": {
      "es": "cerrar, apagar",
      "fr": "fermer, éteindre",
      "de": "schließen, herunterfahren"
    },
    "example": {
      "en": "The factory shut down.",
      "es": "La fábrica cerró.",
      "fr": "L'usine a fermé.",
      "de": "Die Fabrik wurde geschlossen."
    }
  },
  {
    "rank": 72,
    "en": "turn over",
    "translations": {
      "es": "dar la vuelta, voltear",
      "fr": "retourner",
      "de": "umdrehen, wenden"
    },
    "example": {
      "en": "Turn over the page.",
      "es": "Pasa la página.",
      "fr": "Tourne la page.",
      "de": "Wende die Seite um."
    }
  },
  {
    "rank": 73,
    "en": "switch on",
    "translations": {
      "es": "encender",
      "fr": "allumer",
      "de": "einschalten"
    },
    "example": {
      "en": "Switch on the TV.",
      "es": "Enciende la tele.",
      "fr": "Allume la télé.",
      "de": "Schalte den Fernseher ein."
    }
  },
  {
    "rank": 74,
    "en": "slow down",
    "translations": {
      "es": "reducir la velocidad, ir más despacio",
      "fr": "ralentir",
      "de": "langsamer werden, verlangsamen"
    },
    "example": {
      "en": "Please slow down.",
      "es": "Por favor, ve más despacio.",
      "fr": "Ralentis, s'il te plaît.",
      "de": "Bitte fahr langsamer."
    }
  },
  {
    "rank": 75,
    "en": "wind up",
    "translations": {
      "es": "acabar, terminar (en)",
      "fr": "finir par, se retrouver",
      "de": "enden, landen"
    },
    "example": {
      "en": "He wound up in jail.",
      "es": "Acabó en la cárcel.",
      "fr": "Il a fini en prison.",
      "de": "Er ist im Gefängnis gelandet."
    }
  },
  {
    "rank": 76,
    "en": "turn up",
    "translations": {
      "es": "aparecer, subir (volumen)",
      "fr": "apparaître, monter (le son)",
      "de": "auftauchen, lauter stellen"
    },
    "example": {
      "en": "Turn up the volume.",
      "es": "Sube el volumen.",
      "fr": "Monte le volume.",
      "de": "Dreh die Lautstärke auf."
    }
  },
  {
    "rank": 77,
    "en": "line up",
    "translations": {
      "es": "hacer cola, alinear",
      "fr": "faire la queue, aligner",
      "de": "sich anstellen, aufreihen"
    },
    "example": {
      "en": "People lined up outside.",
      "es": "La gente hacía cola fuera.",
      "fr": "Les gens faisaient la queue dehors.",
      "de": "Die Leute standen draußen Schlange."
    }
  },
  {
    "rank": 78,
    "en": "take back",
    "translations": {
      "es": "devolver, retractarse",
      "fr": "rapporter, retirer",
      "de": "zurücknehmen, zurückbringen"
    },
    "example": {
      "en": "I take it back.",
      "es": "Retiro lo dicho.",
      "fr": "Je retire ce que j'ai dit.",
      "de": "Ich nehme es zurück."
    }
  },
  {
    "rank": 79,
    "en": "lay out",
    "translations": {
      "es": "disponer, presentar, diseñar",
      "fr": "disposer, présenter, concevoir",
      "de": "auslegen, gestalten, darlegen"
    },
    "example": {
      "en": "She laid out her plan.",
      "es": "Ella expuso su plan.",
      "fr": "Elle a exposé son plan.",
      "de": "Sie hat ihren Plan dargelegt."
    }
  },
  {
    "rank": 80,
    "en": "go over",
    "translations": {
      "es": "repasar, revisar",
      "fr": "revoir, examiner",
      "de": "durchgehen, überprüfen"
    },
    "example": {
      "en": "Let's go over the details.",
      "es": "Repasemos los detalles.",
      "fr": "Passons les détails en revue.",
      "de": "Gehen wir die Details durch."
    }
  },
  {
    "rank": 81,
    "en": "hang up",
    "translations": {
      "es": "colgar (teléfono, ropa)",
      "fr": "raccrocher, suspendre",
      "de": "auflegen, aufhängen"
    },
    "example": {
      "en": "She hung up the phone.",
      "es": "Ella colgó el teléfono.",
      "fr": "Elle a raccroché le téléphone.",
      "de": "Sie hat aufgelegt."
    }
  },
  {
    "rank": 82,
    "en": "go through",
    "translations": {
      "es": "pasar por, revisar, atravesar",
      "fr": "traverser, passer par, examiner",
      "de": "durchgehen, durchmachen"
    },
    "example": {
      "en": "He went through a hard time.",
      "es": "Él pasó por una época difícil.",
      "fr": "Il a traversé une période difficile.",
      "de": "Er hat eine schwere Zeit durchgemacht."
    }
  },
  {
    "rank": 83,
    "en": "hold on",
    "translations": {
      "es": "esperar, agarrarse",
      "fr": "attendre, tenir bon",
      "de": "warten, festhalten"
    },
    "example": {
      "en": "Hold on a second.",
      "es": "Espera un segundo.",
      "fr": "Attends une seconde.",
      "de": "Warte einen Moment."
    }
  },
  {
    "rank": 84,
    "en": "pay off",
    "translations": {
      "es": "dar fruto, saldar",
      "fr": "porter ses fruits, rembourser",
      "de": "sich auszahlen, abbezahlen"
    },
    "example": {
      "en": "Your hard work will pay off.",
      "es": "Tu esfuerzo dará frutos.",
      "fr": "Tes efforts porteront leurs fruits.",
      "de": "Deine harte Arbeit wird sich auszahlen."
    }
  },
  {
    "rank": 85,
    "en": "hold out",
    "translations": {
      "es": "resistir, ofrecer, extender",
      "fr": "résister, tendre",
      "de": "durchhalten, ausstrecken"
    },
    "example": {
      "en": "They held out for days.",
      "es": "Resistieron durante días.",
      "fr": "Ils ont tenu pendant des jours.",
      "de": "Sie hielten tagelang durch."
    }
  },
  {
    "rank": 86,
    "en": "break up",
    "translations": {
      "es": "romper (pareja), disolver",
      "fr": "rompre, se séparer",
      "de": "Schluss machen, sich trennen"
    },
    "example": {
      "en": "They broke up last year.",
      "es": "Rompieron el año pasado.",
      "fr": "Ils ont rompu l'année dernière.",
      "de": "Sie haben sich letztes Jahr getrennt."
    }
  },
  {
    "rank": 87,
    "en": "bring out",
    "translations": {
      "es": "sacar, lanzar, resaltar",
      "fr": "sortir, lancer, faire ressortir",
      "de": "herausbringen, hervorheben"
    },
    "example": {
      "en": "The company brought out a new phone.",
      "es": "La empresa sacó un nuevo teléfono.",
      "fr": "L'entreprise a sorti un nouveau teléfono.",
      "de": "Die Firma hat ein neues Handy herausgebracht."
    }
  },
  {
    "rank": 88,
    "en": "pull back",
    "translations": {
      "es": "retroceder, retirarse",
      "fr": "reculer, se retirer",
      "de": "zurückziehen, sich zurückziehen"
    },
    "example": {
      "en": "The army pulled back.",
      "es": "El ejército se retiró.",
      "fr": "L'armée s'est retirée.",
      "de": "Die Armee zog sich zurück."
    }
  },
  {
    "rank": 89,
    "en": "hang on",
    "translations": {
      "es": "esperar, agarrarse",
      "fr": "attendre, s'accrocher",
      "de": "warten, sich festhalten"
    },
    "example": {
      "en": "Hang on, I'm coming.",
      "es": "Espera, ya voy.",
      "fr": "Attends, j'arrive.",
      "de": "Moment, ich komme."
    }
  },
  {
    "rank": 90,
    "en": "build up",
    "translations": {
      "es": "acumular, desarrollar, fortalecer",
      "fr": "accumuler, développer",
      "de": "aufbauen, ansammeln"
    },
    "example": {
      "en": "Stress can build up over time.",
      "es": "El estrés puede acumularse con el tiempo.",
      "fr": "Le stress peut s'accumuler avec le temps.",
      "de": "Stress kann sich mit der Zeit aufbauen."
    }
  },
  {
    "rank": 91,
    "en": "throw out",
    "translations": {
      "es": "tirar, echar",
      "fr": "jeter, mettre dehors",
      "de": "wegwerfen, hinauswerfen"
    },
    "example": {
      "en": "I threw out old clothes.",
      "es": "Tiré ropa vieja.",
      "fr": "J'ai jeté de vieux vêtements.",
      "de": "Ich habe alte Kleider weggeworfen."
    }
  },
  {
    "rank": 92,
    "en": "hang out",
    "translations": {
      "es": "pasar el rato, salir con amigos",
      "fr": "traîner, sortir avec des amis",
      "de": "abhängen, Zeit verbringen"
    },
    "example": {
      "en": "We hang out on weekends.",
      "es": "Quedamos los fines de semana.",
      "fr": "On traîne ensemble le week-end.",
      "de": "Wir hängen am Wochenende zusammen ab."
    }
  },
  {
    "rank": 93,
    "en": "get away",
    "translations": {
      "es": "escapar, irse lejos",
      "fr": "s'échapper, s'éloigner",
      "de": "entkommen, wegkommen"
    },
    "example": {
      "en": "The thief got away.",
      "es": "El ladrón escapó.",
      "fr": "Le voleur s'est échappé.",
      "de": "Der Dieb ist entkommen."
    }
  },
  {
    "rank": 94,
    "en": "put on",
    "translations": {
      "es": "ponerse, encender, poner",
      "fr": "mettre, enfiler",
      "de": "anziehen, aufsetzen, auflegen"
    },
    "example": {
      "en": "Put on your coat.",
      "es": "Ponte el abrigo.",
      "fr": "Mets ton manteau.",
      "de": "Zieh deinen Mantel an."
    }
  },
  {
    "rank": 95,
    "en": "get down",
    "translations": {
      "es": "bajar, deprimir",
      "fr": "descendre, déprimer",
      "de": "herunterkommen, deprimieren"
    },
    "example": {
      "en": "Get down from there!",
      "es": "¡Baja de ahí!",
      "fr": "Descends de là !",
      "de": "Komm da runter!"
    }
  },
  {
    "rank": 96,
    "en": "come over",
    "translations": {
      "es": "venir, pasar por casa",
      "fr": "passer, venir chez",
      "de": "vorbeikommen"
    },
    "example": {
      "en": "Come over for dinner.",
      "es": "Ven a casa a cenar.",
      "fr": "Viens dîner à la maison.",
      "de": "Komm zum Abendessen vorbei."
    }
  },
  {
    "rank": 97,
    "en": "move in",
    "translations": {
      "es": "mudarse (a una casa)",
      "fr": "emménager",
      "de": "einziehen"
    },
    "example": {
      "en": "They moved in last week.",
      "es": "Se mudaron la semana pasada.",
      "fr": "Ils ont emménagé la semaine dernière.",
      "de": "Sie sind letzte Woche eingezogen."
    }
  },
  {
    "rank": 98,
    "en": "take care of",
    "translations": {
      "es": "cuidar, ocuparse de",
      "fr": "s'occuper de, prendre soin de",
      "de": "sich kümmern um"
    },
    "example": {
      "en": "I take care of my dog.",
      "es": "Cuido de mi perro.",
      "fr": "Je m'occupe de mon chien.",
      "de": "Ich kümmere mich um meinen Hund."
    }
  },
  {
    "rank": 99,
    "en": "start out",
    "translations": {
      "es": "empezar, comenzar",
      "fr": "débuter, commencer",
      "de": "anfangen, beginnen"
    },
    "example": {
      "en": "She started out as a waitress.",
      "es": "Ella empezó como camarera.",
      "fr": "Elle a débuté comme serveuse.",
      "de": "Sie hat als Kellnerin angefangen."
    }
  },
  {
    "rank": 100,
    "en": "call out",
    "translations": {
      "es": "gritar, llamar en voz alta",
      "fr": "appeler, crier",
      "de": "rufen, ausrufen"
    },
    "example": {
      "en": "He called out my name.",
      "es": "Gritó mi nombre.",
      "fr": "Il a crié mon nom.",
      "de": "Er rief meinen Namen."
    }
  },
  {
    "rank": 101,
    "en": "sit up",
    "translations": {
      "es": "incorporarse, sentarse derecho",
      "fr": "se redresser, s'asseoir",
      "de": "sich aufsetzen, aufrecht sitzen"
    },
    "example": {
      "en": "Sit up straight.",
      "es": "Siéntate derecho.",
      "fr": "Tiens-toi droit.",
      "de": "Sitz gerade."
    }
  },
  {
    "rank": 102,
    "en": "turn down",
    "translations": {
      "es": "rechazar, bajar (volumen)",
      "fr": "refuser, baisser",
      "de": "ablehnen, leiser stellen"
    },
    "example": {
      "en": "She turned down the offer.",
      "es": "Ella rechazó la oferta.",
      "fr": "Elle a refusé l'offre.",
      "de": "Sie lehnte das Angebot ab."
    }
  },
  {
    "rank": 103,
    "en": "back up",
    "translations": {
      "es": "respaldar, hacer copia de seguridad, dar marcha atrás",
      "fr": "soutenir, sauvegarder, reculer",
      "de": "unterstützen, sichern"
    },
    "example": {
      "en": "Back up your files.",
      "es": "Haz una copia de seguridad de tus archivos.",
      "fr": "Sauvegarde tes fichiers.",
      "de": "Sichere deine Dateien."
    }
  },
  {
    "rank": 104,
    "en": "put back",
    "translations": {
      "es": "devolver a su sitio, volver a poner",
      "fr": "remettre",
      "de": "zurücklegen, zurückstellen"
    },
    "example": {
      "en": "Put the book back.",
      "es": "Vuelve a poner el libro en su sitio.",
      "fr": "Remets le livre à sa place.",
      "de": "Stell das Buch zurück."
    }
  },
  {
    "rank": 105,
    "en": "send out",
    "translations": {
      "es": "enviar, mandar",
      "fr": "envoyer, expédier",
      "de": "verschicken, aussenden"
    },
    "example": {
      "en": "We sent out invitations.",
      "es": "Enviamos invitaciones.",
      "fr": "Nous avons envoyé des invitations.",
      "de": "Wir haben Einladungen verschickt."
    }
  },
  {
    "rank": 106,
    "en": "get in",
    "translations": {
      "es": "entrar, subir (a un coche), llegar",
      "fr": "entrer, monter, arriver",
      "de": "einsteigen, hineinkommen, ankommen"
    },
    "example": {
      "en": "Get in the car.",
      "es": "Sube al coche.",
      "fr": "Monte dans la voiture.",
      "de": "Steig ins Auto ein."
    }
  },
  {
    "rank": 107,
    "en": "blow up",
    "translations": {
      "es": "explotar, inflar",
      "fr": "exploser, gonfler",
      "de": "explodieren, aufblasen"
    },
    "example": {
      "en": "The bomb blew up.",
      "es": "La bomba explotó.",
      "fr": "La bombe a explosé.",
      "de": "Die Bombe ist explodiert."
    }
  },
  {
    "rank": 108,
    "en": "carry on",
    "translations": {
      "es": "continuar, seguir",
      "fr": "continuer",
      "de": "weitermachen"
    },
    "example": {
      "en": "Carry on working.",
      "es": "Sigue trabajando.",
      "fr": "Continue de travailler.",
      "de": "Arbeite weiter."
    }
  },
  {
    "rank": 109,
    "en": "set off",
    "translations": {
      "es": "partir, salir de viaje, activar",
      "fr": "partir, déclencher",
      "de": "aufbrechen, auslösen"
    },
    "example": {
      "en": "We set off early.",
      "es": "Salimos temprano.",
      "fr": "Nous sommes partis tôt.",
      "de": "Wir sind früh aufgebrochen."
    }
  },
  {
    "rank": 110,
    "en": "keep on",
    "translations": {
      "es": "seguir, continuar",
      "fr": "continuer, persister",
      "de": "weitermachen"
    },
    "example": {
      "en": "Keep on trying.",
      "es": "Sigue intentándolo.",
      "fr": "Continue d'essayer.",
      "de": "Versuch es weiter."
    }
  },
  {
    "rank": 111,
    "en": "run out",
    "translations": {
      "es": "agotarse, quedarse sin",
      "fr": "s'épuiser, manquer de",
      "de": "ausgehen, knapp werden"
    },
    "example": {
      "en": "We ran out of milk.",
      "es": "Nos quedamos sin leche.",
      "fr": "Nous n'avons plus de lait.",
      "de": "Uns ist die Milch ausgegangen."
    }
  },
  {
    "rank": 112,
    "en": "make out",
    "translations": {
      "es": "distinguir, entender",
      "fr": "distinguer, comprendre",
      "de": "erkennen, ausmachen"
    },
    "example": {
      "en": "I can't make out the words.",
      "es": "No consigo distinguir las palabras.",
      "fr": "Je n'arrive pas à distinguer les mots.",
      "de": "Ich kann die Worte nicht erkennen."
    }
  },
  {
    "rank": 113,
    "en": "shut up",
    "translations": {
      "es": "callarse",
      "fr": "se taire",
      "de": "still sein, den Mund halten"
    },
    "example": {
      "en": "He told them to shut up.",
      "es": "Les dijo que se callaran.",
      "fr": "Il leur a dit de se taire.",
      "de": "Er sagte ihnen, sie sollen still sein."
    }
  },
  {
    "rank": 114,
    "en": "turn off",
    "translations": {
      "es": "apagar, desconectar",
      "fr": "éteindre",
      "de": "ausschalten, ausmachen"
    },
    "example": {
      "en": "Turn off the TV.",
      "es": "Apaga la tele.",
      "fr": "Éteins la télé.",
      "de": "Schalte den Fernseher aus."
    }
  },
  {
    "rank": 115,
    "en": "bring about",
    "translations": {
      "es": "provocar, causar",
      "fr": "provoquer, entraîner",
      "de": "herbeiführen, bewirken"
    },
    "example": {
      "en": "The law brought about big changes.",
      "es": "La ley provocó grandes cambios.",
      "fr": "La loi a provoqué de grands changements.",
      "de": "Das Gesetz führte große Veränderungen herbei."
    }
  },
  {
    "rank": 116,
    "en": "step back",
    "translations": {
      "es": "dar un paso atrás, distanciarse",
      "fr": "prendre du recul, reculer",
      "de": "zurücktreten, Abstand nehmen"
    },
    "example": {
      "en": "Step back and think.",
      "es": "Date un paso atrás y piensa.",
      "fr": "Prends du recul et réfléchis.",
      "de": "Tritt einen Schritt zurück und denk nach."
    }
  },
  {
    "rank": 117,
    "en": "lay down",
    "translations": {
      "es": "dejar, tumbar, establecer",
      "fr": "poser, établir",
      "de": "hinlegen, festlegen"
    },
    "example": {
      "en": "They laid down new rules.",
      "es": "Establecieron nuevas normas.",
      "fr": "Ils ont établi de nouvelles règles.",
      "de": "Sie haben neue Regeln festgelegt."
    }
  },
  {
    "rank": 118,
    "en": "bring down",
    "translations": {
      "es": "derribar, reducir",
      "fr": "faire tomber, réduire",
      "de": "stürzen, senken"
    },
    "example": {
      "en": "They want to bring down prices.",
      "es": "Quieren reducir los precios.",
      "fr": "Ils veulent faire baisser les prix.",
      "de": "Sie wollen die Preise senken."
    }
  },
  {
    "rank": 119,
    "en": "stand out",
    "translations": {
      "es": "destacar, sobresalir",
      "fr": "se démarquer, ressortir",
      "de": "auffallen, herausragen"
    },
    "example": {
      "en": "She stands out in the crowd.",
      "es": "Ella destaca entre la multitud.",
      "fr": "Elle se démarque dans la foule.",
      "de": "Sie fällt in der Menge auf."
    }
  },
  {
    "rank": 120,
    "en": "come along",
    "translations": {
      "es": "acompañar, venir, avanzar",
      "fr": "venir, accompagner, avancer",
      "de": "mitkommen, vorankommen"
    },
    "example": {
      "en": "Do you want to come along?",
      "es": "¿Quieres venir con nosotros?",
      "fr": "Tu veux venir avec nous ?",
      "de": "Willst du mitkommen?"
    }
  },
  {
    "rank": 121,
    "en": "play out",
    "translations": {
      "es": "desarrollarse, desenlazarse",
      "fr": "se dérouler, se jouer",
      "de": "sich entwickeln, ablaufen"
    },
    "example": {
      "en": "Let's see how things play out.",
      "es": "Veamos cómo se desarrollan las cosas.",
      "fr": "Voyons comment les choses se déroulent.",
      "de": "Mal sehen, wie sich die Dinge entwickeln."
    }
  },
  {
    "rank": 122,
    "en": "break out",
    "translations": {
      "es": "estallar, escaparse",
      "fr": "éclater, s'évader",
      "de": "ausbrechen"
    },
    "example": {
      "en": "A fire broke out in the night.",
      "es": "Se declaró un incendio por la noche.",
      "fr": "Un incendie s'est déclaré pendant la nuit.",
      "de": "In der Nacht brach ein Feuer aus."
    }
  },
  {
    "rank": 123,
    "en": "go around",
    "translations": {
      "es": "circular, rodear, dar vueltas",
      "fr": "circuler, faire le tour",
      "de": "herumgehen, kursieren"
    },
    "example": {
      "en": "A rumor is going around.",
      "es": "Circula un rumor.",
      "fr": "Une rumeur circule.",
      "de": "Ein Gerücht geht um."
    }
  },
  {
    "rank": 124,
    "en": "walk out",
    "translations": {
      "es": "marcharse, abandonar",
      "fr": "partir, quitter",
      "de": "hinausgehen, weggehen"
    },
    "example": {
      "en": "He walked out of the meeting.",
      "es": "Se fue de la reunión.",
      "fr": "Il a quitté la réunion.",
      "de": "Er ist aus der Besprechung hinausgegangen."
    }
  },
  {
    "rank": 125,
    "en": "get through",
    "translations": {
      "es": "superar, conseguir comunicarse",
      "fr": "traverser, réussir à joindre",
      "de": "durchkommen, überstehen"
    },
    "example": {
      "en": "We will get through this together.",
      "es": "Superaremos esto juntos.",
      "fr": "Nous surmonterons cela ensemble.",
      "de": "Wir werden das gemeinsam durchstehen."
    }
  },
  {
    "rank": 126,
    "en": "hold back",
    "translations": {
      "es": "contener, frenar",
      "fr": "retenir, se retenir",
      "de": "zurückhalten"
    },
    "example": {
      "en": "She held back her tears.",
      "es": "Ella contuvo las lágrimas.",
      "fr": "Elle a retenu ses larmes.",
      "de": "Sie hielt ihre Tränen zurück."
    }
  },
  {
    "rank": 127,
    "en": "write down",
    "translations": {
      "es": "anotar, apuntar",
      "fr": "noter, écrire",
      "de": "aufschreiben, notieren"
    },
    "example": {
      "en": "Write down my number.",
      "es": "Apunta mi número.",
      "fr": "Note mon numéro.",
      "de": "Schreib meine Nummer auf."
    }
  },
  {
    "rank": 128,
    "en": "move back",
    "translations": {
      "es": "volver a mudarse, retroceder",
      "fr": "retourner vivre, reculer",
      "de": "zurückziehen, zurückgehen"
    },
    "example": {
      "en": "They moved back to Spain.",
      "es": "Volvieron a mudarse a España.",
      "fr": "Ils sont retournés vivre en Espagne.",
      "de": "Sie sind nach Spanien zurückgezogen."
    }
  },
  {
    "rank": 129,
    "en": "fill out",
    "translations": {
      "es": "rellenar",
      "fr": "remplir",
      "de": "ausfüllen"
    },
    "example": {
      "en": "Fill out this form.",
      "es": "Rellena este formulario.",
      "fr": "Remplis ce formulaire.",
      "de": "Füll dieses Formular aus."
    }
  },
  {
    "rank": 130,
    "en": "sit back",
    "translations": {
      "es": "recostarse, relajarse",
      "fr": "se détendre, se caler",
      "de": "sich zurücklehnen"
    },
    "example": {
      "en": "Sit back and relax.",
      "es": "Recuéstate y relájate.",
      "fr": "Détends-toi et profite.",
      "de": "Lehn dich zurück und entspann dich."
    }
  },
  {
    "rank": 131,
    "en": "rule out",
    "translations": {
      "es": "descartar",
      "fr": "exclure, écarter",
      "de": "ausschließen"
    },
    "example": {
      "en": "Doctors ruled out an infection.",
      "es": "Los médicos descartaron una infección.",
      "fr": "Les médecins ont écarté une infection.",
      "de": "Die Ärzte schlossen eine Infektion aus."
    }
  },
  {
    "rank": 132,
    "en": "move up",
    "translations": {
      "es": "ascender, subir de puesto, avanzar",
      "fr": "monter, avancer",
      "de": "aufsteigen, aufrücken"
    },
    "example": {
      "en": "He moved up in the company.",
      "es": "Él ascendió en la empresa.",
      "fr": "Il a gravi les échelons de l'entreprise.",
      "de": "Er ist in der Firma aufgestiegen."
    }
  },
  {
    "rank": 133,
    "en": "pick out",
    "translations": {
      "es": "elegir, escoger",
      "fr": "choisir, sélectionner",
      "de": "aussuchen, auswählen"
    },
    "example": {
      "en": "Pick out a nice gift.",
      "es": "Elige un buen regalo.",
      "fr": "Choisis un beau cadeau.",
      "de": "Such ein schönes Geschenk aus."
    }
  },
  {
    "rank": 134,
    "en": "take down",
    "translations": {
      "es": "anotar, desmontar, bajar",
      "fr": "noter, démonter, retirer",
      "de": "notieren, abbauen, abnehmen"
    },
    "example": {
      "en": "Take down the decorations.",
      "es": "Quita las decoraciones.",
      "fr": "Enlève les décorations.",
      "de": "Nimm die Dekoration ab."
    }
  },
  {
    "rank": 135,
    "en": "get on",
    "translations": {
      "es": "subirse, llevarse bien",
      "fr": "monter, s'entendre",
      "de": "einsteigen, sich verstehen"
    },
    "example": {
      "en": "We get on well.",
      "es": "Nos llevamos bien.",
      "fr": "Nous nous entendons bien.",
      "de": "Wir verstehen uns gut."
    }
  },
  {
    "rank": 136,
    "en": "give back",
    "translations": {
      "es": "devolver",
      "fr": "rendre",
      "de": "zurückgeben"
    },
    "example": {
      "en": "Give back my pen.",
      "es": "Devuélveme mi bolígrafo.",
      "fr": "Rends-moi mon stylo.",
      "de": "Gib mir meinen Stift zurück."
    }
  },
  {
    "rank": 137,
    "en": "hand over",
    "translations": {
      "es": "entregar, ceder",
      "fr": "remettre, céder",
      "de": "übergeben, aushändigen"
    },
    "example": {
      "en": "Hand over the keys.",
      "es": "Entrega las llaves.",
      "fr": "Remets les clés.",
      "de": "Gib die Schlüssel her."
    }
  },
  {
    "rank": 138,
    "en": "sum up",
    "translations": {
      "es": "resumir",
      "fr": "résumer",
      "de": "zusammenfassen"
    },
    "example": {
      "en": "Let me sum up.",
      "es": "Permíteme resumir.",
      "fr": "Laisse-moi résumer.",
      "de": "Lass mich zusammenfassen."
    }
  },
  {
    "rank": 139,
    "en": "move out",
    "translations": {
      "es": "mudarse (irse de casa)",
      "fr": "déménager",
      "de": "ausziehen"
    },
    "example": {
      "en": "She moved out last month.",
      "es": "Se mudó el mes pasado.",
      "fr": "Elle a déménagé le mois dernier.",
      "de": "Sie ist letzten Monat ausgezogen."
    }
  },
  {
    "rank": 140,
    "en": "come off",
    "translations": {
      "es": "desprenderse, salir bien",
      "fr": "se détacher, réussir",
      "de": "abgehen, sich lösen, klappen"
    },
    "example": {
      "en": "The button came off.",
      "es": "Se soltó el botón.",
      "fr": "Le bouton s'est détaché.",
      "de": "Der Knopf ist abgegangen."
    }
  },
  {
    "rank": 141,
    "en": "pass on",
    "translations": {
      "es": "transmitir, pasar, rechazar",
      "fr": "transmettre, passer",
      "de": "weitergeben"
    },
    "example": {
      "en": "Pass on my regards.",
      "es": "Transmite mis saludos.",
      "fr": "Transmets mes salutations.",
      "de": "Gib meine Grüße weiter."
    }
  },
  {
    "rank": 142,
    "en": "take in",
    "translations": {
      "es": "asimilar, engañar, acoger",
      "fr": "assimiler, accueillir",
      "de": "aufnehmen, begreifen"
    },
    "example": {
      "en": "It's hard to take it all in.",
      "es": "Es difícil asimilarlo todo.",
      "fr": "C'est difficile de tout assimiler.",
      "de": "Es ist schwer, alles aufzunehmen."
    }
  },
  {
    "rank": 143,
    "en": "set down",
    "translations": {
      "es": "dejar, apoyar, anotar",
      "fr": "poser, déposer",
      "de": "abstellen, hinlegen"
    },
    "example": {
      "en": "She set down her bag.",
      "es": "Ella dejó su bolso.",
      "fr": "Elle a posé son sac.",
      "de": "Sie stellte ihre Tasche ab."
    }
  },
  {
    "rank": 144,
    "en": "sort out",
    "translations": {
      "es": "resolver, ordenar, clasificar",
      "fr": "régler, trier, ranger",
      "de": "klären, sortieren"
    },
    "example": {
      "en": "We need to sort this out.",
      "es": "Tenemos que resolver esto.",
      "fr": "Nous devons régler cela.",
      "de": "Wir müssen das klären."
    }
  },
  {
    "rank": 145,
    "en": "follow up",
    "translations": {
      "es": "hacer seguimiento, dar seguimiento",
      "fr": "donner suite, relancer",
      "de": "nachverfolgen, nachfassen"
    },
    "example": {
      "en": "I will follow up by email.",
      "es": "Haré el seguimiento por correo.",
      "fr": "Je ferai un suivi par e-mail.",
      "de": "Ich fasse per E-Mail nach."
    }
  },
  {
    "rank": 146,
    "en": "come through",
    "translations": {
      "es": "cumplir, superar, llegar",
      "fr": "tenir parole, arriver, passer",
      "de": "durchkommen, sich bewähren"
    },
    "example": {
      "en": "The money finally came through.",
      "es": "El dinero por fin llegó.",
      "fr": "L'argent est enfin arrivé.",
      "de": "Das Geld ist endlich angekommen."
    }
  },
  {
    "rank": 147,
    "en": "settle down",
    "translations": {
      "es": "sentar la cabeza, calmarse, instalarse",
      "fr": "se calmer, se poser, s'installer",
      "de": "sich beruhigen, sesshaft werden"
    },
    "example": {
      "en": "They want to settle down.",
      "es": "Quieren sentar la cabeza.",
      "fr": "Ils veulent se poser.",
      "de": "Sie wollen sesshaft werden."
    }
  },
  {
    "rank": 148,
    "en": "come around",
    "translations": {
      "es": "pasar por casa, recobrar el sentido, cambiar de opinión",
      "fr": "passer, reprendre connaissance, changer d'avis",
      "de": "vorbeikommen, zu sich kommen, umdenken"
    },
    "example": {
      "en": "He finally came around to my idea.",
      "es": "Por fin se convenció de mi idea.",
      "fr": "Il s'est enfin rallié à mon idée.",
      "de": "Er hat sich schließlich meiner Idee angeschlossen."
    }
  },
  {
    "rank": 149,
    "en": "fill in",
    "translations": {
      "es": "rellenar, sustituir",
      "fr": "remplir, remplacer",
      "de": "ausfüllen, vertreten"
    },
    "example": {
      "en": "Fill in your name here.",
      "es": "Escribe tu nombre aquí.",
      "fr": "Écris ton nom ici.",
      "de": "Trag hier deinen Namen ein."
    }
  },
  {
    "rank": 150,
    "en": "give out",
    "translations": {
      "es": "repartir, agotarse",
      "fr": "distribuer, lâcher",
      "de": "verteilen, versagen"
    },
    "example": {
      "en": "She gave out the papers.",
      "es": "Ella repartió los papeles.",
      "fr": "Elle a distribué les feuilles.",
      "de": "Sie hat die Blätter verteilt."
    }
  },
  {
    "rank": 151,
    "en": "give in",
    "translations": {
      "es": "ceder, rendirse",
      "fr": "céder, abandonner",
      "de": "nachgeben, aufgeben"
    },
    "example": {
      "en": "He finally gave in.",
      "es": "Por fin cedió.",
      "fr": "Il a fini par céder.",
      "de": "Er hat schließlich nachgegeben."
    }
  },
  {
    "rank": 152,
    "en": "go along",
    "translations": {
      "es": "acompañar, seguir, estar de acuerdo",
      "fr": "accompagner, suivre, être d'accord",
      "de": "mitgehen, mitmachen"
    },
    "example": {
      "en": "I'll go along with your plan.",
      "es": "Estoy de acuerdo con tu plan.",
      "fr": "Je suis d'accord avec ton plan.",
      "de": "Ich gehe mit deinem Plan mit."
    }
  },
  {
    "rank": 153,
    "en": "break off",
    "translations": {
      "es": "romper, interrumpir",
      "fr": "rompre, interrompre",
      "de": "abbrechen, unterbrechen"
    },
    "example": {
      "en": "They broke off the talks.",
      "es": "Interrumpieron las conversaciones.",
      "fr": "Ils ont interrompu les négociations.",
      "de": "Sie haben die Gespräche abgebrochen."
    }
  },
  {
    "rank": 154,
    "en": "put off",
    "translations": {
      "es": "posponer, aplazar",
      "fr": "repousser, reporter",
      "de": "verschieben, aufschieben"
    },
    "example": {
      "en": "Don't put off the meeting.",
      "es": "No pospongas la reunión.",
      "fr": "Ne reporte pas la reunión.",
      "de": "Verschieb das Treffen nicht."
    }
  },
  {
    "rank": 155,
    "en": "come about",
    "translations": {
      "es": "ocurrir, suceder",
      "fr": "arriver, se produire",
      "de": "geschehen, zustande kommen"
    },
    "example": {
      "en": "How did this come about?",
      "es": "¿Cómo ocurrió esto?",
      "fr": "Comment cela est-il arrivé ?",
      "de": "Wie ist das zustande gekommen?"
    }
  },
  {
    "rank": 156,
    "en": "close down",
    "translations": {
      "es": "cerrar (definitivamente)",
      "fr": "fermer définitivement",
      "de": "schließen, stilllegen"
    },
    "example": {
      "en": "The shop closed down.",
      "es": "La tienda cerró.",
      "fr": "Le magasin a fermé.",
      "de": "Das Geschäft hat geschlossen."
    }
  },
  {
    "rank": 157,
    "en": "put in",
    "translations": {
      "es": "instalar, invertir (tiempo), presentar",
      "fr": "installer, investir, déposer",
      "de": "einbauen, investieren, einreichen"
    },
    "example": {
      "en": "She put in a lot of effort.",
      "es": "Ella le dedicó mucho esfuerzo.",
      "fr": "Elle y a mis beaucoup d'efforts.",
      "de": "Sie hat viel Mühe hineingesteckt."
    }
  },
  {
    "rank": 158,
    "en": "set about",
    "translations": {
      "es": "ponerse a, empezar a",
      "fr": "se mettre à, entreprendre",
      "de": "sich machen an, anpacken"
    },
    "example": {
      "en": "He set about fixing the roof.",
      "es": "Se puso a arreglar el tejado.",
      "fr": "Il s'est mis à réparer le toit.",
      "de": "Er machte sich daran, das Dach zu reparieren."
    }
  },
  {
    "rank": 159,
    "en": "get along",
    "translations": {
      "es": "llevarse bien, arreglárselas",
      "fr": "s'entendre, se débrouiller",
      "de": "sich vertragen, zurechtkommen"
    },
    "example": {
      "en": "I get along with my neighbors.",
      "es": "Me llevo bien con mis vecinos.",
      "fr": "Je m'entends bien avec mes voisins.",
      "de": "Ich verstehe mich gut mit meinen Nachbarn."
    }
  },
  {
    "rank": 160,
    "en": "get over",
    "translations": {
      "es": "superar, recuperarse de",
      "fr": "surmonter, se remettre de",
      "de": "überwinden, verkraften"
    },
    "example": {
      "en": "She got over the flu.",
      "es": "Ella se recuperó de la gripe.",
      "fr": "Elle s'est remise de la grippe.",
      "de": "Sie hat die Grippe überstanden."
    }
  },
  {
    "rank": 161,
    "en": "get together",
    "translations": {
      "es": "reunirse, quedar",
      "fr": "se réunir, se retrouver",
      "de": "sich treffen, zusammenkommen"
    },
    "example": {
      "en": "Let's get together on Sunday.",
      "es": "Quedemos el domingo.",
      "fr": "Retrouvons-nous dimanche.",
      "de": "Treffen wir uns am Sonntag."
    }
  },
  {
    "rank": 162,
    "en": "calm down",
    "translations": {
      "es": "calmarse, tranquilizarse",
      "fr": "se calmer",
      "de": "sich beruhigen"
    },
    "example": {
      "en": "Calm down, everything is fine.",
      "es": "Tranquilízate, todo está bien.",
      "fr": "Calme-toi, tout va bien.",
      "de": "Beruhige dich, alles ist gut."
    }
  },
  {
    "rank": 163,
    "en": "call back",
    "translations": {
      "es": "devolver la llamada, volver a llamar",
      "fr": "rappeler",
      "de": "zurückrufen"
    },
    "example": {
      "en": "I'll call you back later.",
      "es": "Te devuelvo la llamada luego.",
      "fr": "Je te rappellerai plus tard.",
      "de": "Ich rufe dich später zurück."
    }
  },
  {
    "rank": 164,
    "en": "drop off",
    "translations": {
      "es": "dejar (en un sitio), quedarse dormido",
      "fr": "déposer, s'endormir",
      "de": "absetzen, einschlafen"
    },
    "example": {
      "en": "I'll drop you off at school.",
      "es": "Te dejo en el colegio.",
      "fr": "Je te dépose à l'école.",
      "de": "Ich setze dich an der Schule ab."
    }
  },
  {
    "rank": 165,
    "en": "check in",
    "translations": {
      "es": "registrarse, facturar",
      "fr": "s'enregistrer",
      "de": "einchecken"
    },
    "example": {
      "en": "We check in at three.",
      "es": "Nos registramos a las tres.",
      "fr": "Nous nous enregistrons à quinze heures.",
      "de": "Wir checken um drei Uhr ein."
    }
  },
  {
    "rank": 166,
    "en": "sign up",
    "translations": {
      "es": "inscribirse, apuntarse",
      "fr": "s'inscrire",
      "de": "sich anmelden"
    },
    "example": {
      "en": "I signed up for a course.",
      "es": "Me apunté a un curso.",
      "fr": "Je me suis inscrit à un cours.",
      "de": "Ich habe mich für einen Kurs angemeldet."
    }
  },
  {
    "rank": 167,
    "en": "log in",
    "translations": {
      "es": "iniciar sesión",
      "fr": "se connecter",
      "de": "sich einloggen, sich anmelden"
    },
    "example": {
      "en": "Log in with your password.",
      "es": "Inicia sesión con tu contraseña.",
      "fr": "Connecte-toi avec ton mot de passe.",
      "de": "Melde dich mit deinem Passwort an."
    }
  },
  {
    "rank": 168,
    "en": "let down",
    "translations": {
      "es": "decepcionar, fallar",
      "fr": "décevoir, laisser tomber",
      "de": "enttäuschen, im Stich lassen"
    },
    "example": {
      "en": "I won't let you down.",
      "es": "No te fallaré.",
      "fr": "Je ne te décevrai pas.",
      "de": "Ich werde dich nicht enttäuschen."
    }
  },
  {
    "rank": 169,
    "en": "throw away",
    "translations": {
      "es": "tirar, desperdiciar",
      "fr": "jeter, gaspiller",
      "de": "wegwerfen, verschwenden"
    },
    "example": {
      "en": "Don't throw away your chance.",
      "es": "No desperdicies tu oportunidad.",
      "fr": "Ne gaspille pas ta chance.",
      "de": "Wirf deine Chance nicht weg."
    }
  },
  {
    "rank": 170,
    "en": "try on",
    "translations": {
      "es": "probarse",
      "fr": "essayer",
      "de": "anprobieren"
    },
    "example": {
      "en": "Can I try on this jacket?",
      "es": "¿Puedo probarme esta chaqueta?",
      "fr": "Puis-je essayer cette veste ?",
      "de": "Kann ich diese Jacke anprobieren?"
    }
  },
  {
    "rank": 171,
    "en": "hurry up",
    "translations": {
      "es": "darse prisa",
      "fr": "se dépêcher",
      "de": "sich beeilen"
    },
    "example": {
      "en": "Hurry up, we're late!",
      "es": "¡Date prisa, llegamos tarde!",
      "fr": "Dépêche-toi, nous sommes en retard !",
      "de": "Beeil dich, wir sind spät dran!"
    }
  },
  {
    "rank": 172,
    "en": "speak up",
    "translations": {
      "es": "hablar más alto, atreverse a hablar",
      "fr": "parler plus fort, s'exprimer",
      "de": "lauter sprechen, sich zu Wort melden"
    },
    "example": {
      "en": "Please speak up.",
      "es": "Habla más alto, por favor.",
      "fr": "Parle plus fort, s'il te plaît.",
      "de": "Sprich bitte lauter."
    }
  },
  {
    "rank": 173,
    "en": "hand in",
    "translations": {
      "es": "entregar",
      "fr": "rendre, remettre",
      "de": "abgeben, einreichen"
    },
    "example": {
      "en": "Hand in your homework.",
      "es": "Entrega tus deberes.",
      "fr": "Rends tes devoirs.",
      "de": "Gib deine Hausaufgaben ab."
    }
  },
  {
    "rank": 174,
    "en": "pay back",
    "translations": {
      "es": "devolver (dinero), pagar",
      "fr": "rembourser",
      "de": "zurückzahlen"
    },
    "example": {
      "en": "I'll pay you back tomorrow.",
      "es": "Te lo devolveré mañana.",
      "fr": "Je te rembourserai demain.",
      "de": "Ich zahle es dir morgen zurück."
    }
  },
  {
    "rank": 175,
    "en": "print out",
    "translations": {
      "es": "imprimir",
      "fr": "imprimer",
      "de": "ausdrucken"
    },
    "example": {
      "en": "Print out the tickets.",
      "es": "Imprime las entradas.",
      "fr": "Imprime les billets.",
      "de": "Druck die Tickets aus."
    }
  },
  {
    "rank": 176,
    "en": "fill up",
    "translations": {
      "es": "llenar",
      "fr": "remplir, faire le plein",
      "de": "auffüllen, volltanken"
    },
    "example": {
      "en": "Fill up the tank.",
      "es": "Llena el depósito.",
      "fr": "Fais le plein.",
      "de": "Füll den Tank auf."
    }
  },
  {
    "rank": 177,
    "en": "stay up",
    "translations": {
      "es": "quedarse despierto, trasnochar",
      "fr": "veiller, rester debout",
      "de": "aufbleiben"
    },
    "example": {
      "en": "I stayed up all night.",
      "es": "Me quedé despierto toda la noche.",
      "fr": "Je suis resté éveillé toute la nuit.",
      "de": "Ich bin die ganze Nacht aufgeblieben."
    }
  },
  {
    "rank": 178,
    "en": "watch out",
    "translations": {
      "es": "tener cuidado",
      "fr": "faire attention",
      "de": "aufpassen, sich vorsehen"
    },
    "example": {
      "en": "Watch out for the ice.",
      "es": "Cuidado con el hielo.",
      "fr": "Attention à la glace.",
      "de": "Pass auf das Eis auf."
    }
  },
  {
    "rank": 179,
    "en": "run away",
    "translations": {
      "es": "huir, escaparse",
      "fr": "s'enfuir",
      "de": "weglaufen, davonlaufen"
    },
    "example": {
      "en": "The dog ran away.",
      "es": "El perro se escapó.",
      "fr": "Le chien s'est enfui.",
      "de": "Der Hund ist weggelaufen."
    }
  },
  {
    "rank": 180,
    "en": "put away",
    "translations": {
      "es": "guardar, recoger",
      "fr": "ranger",
      "de": "wegräumen, aufräumen"
    },
    "example": {
      "en": "Put away your toys.",
      "es": "Guarda tus juguetes.",
      "fr": "Range tes jouets.",
      "de": "Räum deine Spielsachen weg."
    }
  },
  {
    "rank": 181,
    "en": "drop out",
    "translations": {
      "es": "abandonar (estudios), dejar",
      "fr": "abandonner, décrocher",
      "de": "abbrechen, aussteigen"
    },
    "example": {
      "en": "He dropped out of college.",
      "es": "Abandonó la universidad.",
      "fr": "Il a abandonné l'université.",
      "de": "Er hat das Studium abgebrochen."
    }
  },
  {
    "rank": 182,
    "en": "call off",
    "translations": {
      "es": "cancelar, suspender",
      "fr": "annuler",
      "de": "absagen"
    },
    "example": {
      "en": "They called off the match.",
      "es": "Cancelaron el partido.",
      "fr": "Ils ont annulé le match.",
      "de": "Sie haben das Spiel abgesagt."
    }
  },
  {
    "rank": 183,
    "en": "cut down",
    "translations": {
      "es": "reducir, talar",
      "fr": "réduire, abattre",
      "de": "reduzieren, fällen"
    },
    "example": {
      "en": "I'm cutting down on sugar.",
      "es": "Estoy reduciendo el azúcar.",
      "fr": "Je réduis le sucre.",
      "de": "Ich reduziere den Zucker."
    }
  },
  {
    "rank": 184,
    "en": "try out",
    "translations": {
      "es": "probar, poner a prueba",
      "fr": "essayer, tester",
      "de": "ausprobieren"
    },
    "example": {
      "en": "Try out the new app.",
      "es": "Prueba la nueva aplicación.",
      "fr": "Essaie la nouvelle application.",
      "de": "Probier die neue App aus."
    }
  },
  {
    "rank": 185,
    "en": "warm up",
    "translations": {
      "es": "calentar, entrar en calor",
      "fr": "chauffer, s'échauffer",
      "de": "aufwärmen, warm werden"
    },
    "example": {
      "en": "Warm up before running.",
      "es": "Calienta antes de correr.",
      "fr": "Échauffe-toi avant de courir.",
      "de": "Wärm dich vor dem Laufen auf."
    }
  },
  {
    "rank": 186,
    "en": "take away",
    "translations": {
      "es": "llevarse, quitar, para llevar",
      "fr": "emporter, enlever",
      "de": "wegnehmen, mitnehmen"
    },
    "example": {
      "en": "Nobody can take it away from you.",
      "es": "Nadie te lo puede quitar.",
      "fr": "Personne ne peut te l'enlever.",
      "de": "Niemand kann es dir wegnehmen."
    }
  },
  {
    "rank": 187,
    "en": "use up",
    "translations": {
      "es": "agotar, gastar",
      "fr": "épuiser, finir",
      "de": "aufbrauchen, verbrauchen"
    },
    "example": {
      "en": "We used up all the paper.",
      "es": "Gastamos todo el papel.",
      "fr": "Nous avons épuisé tout le papier.",
      "de": "Wir haben das ganze Papier aufgebraucht."
    }
  },
  {
    "rank": 188,
    "en": "wear out",
    "translations": {
      "es": "desgastar, agotar",
      "fr": "user, épuiser",
      "de": "abnutzen, erschöpfen"
    },
    "example": {
      "en": "My shoes are worn out.",
      "es": "Mis zapatos están gastados.",
      "fr": "Mes chaussures sont usées.",
      "de": "Meine Schuhe sind abgetragen."
    }
  },
  {
    "rank": 189,
    "en": "sleep in",
    "translations": {
      "es": "dormir hasta tarde",
      "fr": "faire la grasse matinée",
      "de": "ausschlafen"
    },
    "example": {
      "en": "I sleep in on Sundays.",
      "es": "Duermo hasta tarde los domingos.",
      "fr": "Je fais la grasse matinée le dimanche.",
      "de": "Sonntags schlafe ich aus."
    }
  },
  {
    "rank": 190,
    "en": "eat out",
    "translations": {
      "es": "comer fuera",
      "fr": "manger au restaurant",
      "de": "auswärts essen"
    },
    "example": {
      "en": "We eat out on Fridays.",
      "es": "Comemos fuera los viernes.",
      "fr": "Nous mangeons au restaurant le vendredi.",
      "de": "Freitags essen wir auswärts."
    }
  },
  {
    "rank": 191,
    "en": "dress up",
    "translations": {
      "es": "arreglarse, disfrazarse",
      "fr": "s'habiller, se déguiser",
      "de": "sich schick machen, verkleiden"
    },
    "example": {
      "en": "The kids dressed up as pirates.",
      "es": "Los niños se disfrazaron de piratas.",
      "fr": "Les enfants se sont déguisés en pirates.",
      "de": "Die Kinder haben sich als Piraten verkleidet."
    }
  },
  {
    "rank": 192,
    "en": "fall apart",
    "translations": {
      "es": "desmoronarse, romperse",
      "fr": "s'effondrer, tomber en morceaux",
      "de": "auseinanderfallen, zerbrechen"
    },
    "example": {
      "en": "The old chair fell apart.",
      "es": "La silla vieja se deshizo.",
      "fr": "La vieille chaise est tombée en morceaux.",
      "de": "Der alte Stuhl ist auseinandergefallen."
    }
  },
  {
    "rank": 193,
    "en": "lie down",
    "translations": {
      "es": "tumbarse, acostarse",
      "fr": "s'allonger",
      "de": "sich hinlegen"
    },
    "example": {
      "en": "I need to lie down.",
      "es": "Necesito tumbarme.",
      "fr": "J'ai besoin de m'allonger.",
      "de": "Ich muss mich hinlegen."
    }
  },
  {
    "rank": 194,
    "en": "pull over",
    "translations": {
      "es": "parar a un lado, arrimarse",
      "fr": "se garer sur le côté, s'arrêter",
      "de": "rechts ranfahren, anhalten"
    },
    "example": {
      "en": "Pull over here, please.",
      "es": "Para aquí, por favor.",
      "fr": "Arrête-toi ici, s'il te plaît.",
      "de": "Fahr hier bitte rechts ran."
    }
  },
  {
    "rank": 195,
    "en": "mix up",
    "translations": {
      "es": "confundir, mezclar",
      "fr": "confondre, mélanger",
      "de": "verwechseln, durcheinanderbringen"
    },
    "example": {
      "en": "I always mix up their names.",
      "es": "Siempre confundo sus nombres.",
      "fr": "Je confonds toujours leurs noms.",
      "de": "Ich verwechsle immer ihre Namen."
    }
  },
  {
    "rank": 196,
    "en": "look through",
    "translations": {
      "es": "revisar, hojear",
      "fr": "parcourir, feuilleter",
      "de": "durchsehen, durchblättern"
    },
    "example": {
      "en": "She looked through the photos.",
      "es": "Ella revisó las fotos.",
      "fr": "Elle a parcouru les photos.",
      "de": "Sie hat die Fotos durchgesehen."
    }
  },
  {
    "rank": 197,
    "en": "join in",
    "translations": {
      "es": "participar, unirse",
      "fr": "participer, se joindre",
      "de": "mitmachen"
    },
    "example": {
      "en": "Come and join in!",
      "es": "¡Ven y participa!",
      "fr": "Viens participer !",
      "de": "Komm und mach mit!"
    }
  },
  {
    "rank": 198,
    "en": "show off",
    "translations": {
      "es": "presumir, alardear",
      "fr": "frimer, se vanter",
      "de": "angeben, vorführen"
    },
    "example": {
      "en": "He likes to show off.",
      "es": "Le gusta presumir.",
      "fr": "Il aime frimer.",
      "de": "Er gibt gern an."
    }
  },
  {
    "rank": 199,
    "en": "turn away",
    "translations": {
      "es": "rechazar, apartar la vista",
      "fr": "renvoyer, détourner",
      "de": "abweisen, wegschauen"
    },
    "example": {
      "en": "She turned away from the screen.",
      "es": "Ella apartó la vista de la pantalla.",
      "fr": "Elle a détourné les yeux de l'écran.",
      "de": "Sie hat den Blick vom Bildschirm abgewandt."
    }
  },
  {
    "rank": 200,
    "en": "cheer up",
    "translations": {
      "es": "animarse, animar",
      "fr": "se remonter le moral, remonter le moral",
      "de": "aufmuntern, sich aufheitern"
    },
    "example": {
      "en": "Cheer up, it will be fine.",
      "es": "Anímate, todo irá bien.",
      "fr": "Courage, tout ira bien.",
      "de": "Kopf hoch, es wird gut."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = PHRASAL_VERBS_DATA;
}
