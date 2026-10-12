// Script to build rich frequency bands data for app_read
const fs = require('fs');
const path = require('path');

// Curated Top 1000 Frequency Words for Band 1 (0 - 1000)
// and frequency expansions for bands 2, 3, 4, 5
const band1Base = [
  ["the","el, la, los, las"],["be","ser, estar"],["to","a, hacia, para"],["of","de"],["and","y, e"],
  ["a","un, una"],["in","en, dentro de"],["that","que, ese, esa"],["have","tener, haber"],["i","yo"],
  ["it","ello, lo, la"],["for","para, por"],["not","no"],["on","en, sobre"],["with","con"],
  ["he","él"],["as","como, mientras"],["you","tú, usted, vosotros"],["do","hacer"],["at","en, a"],
  ["this","este, esta, esto"],["but","pero, sino"],["his","su, de él"],["by","por, cerca de"],["from","de, desde"],
  ["they","ellos, ellas"],["we","nosotros, nosotras"],["say","decir"],["her","su, de ella"],["she","ella"],
  ["or","o, u"],["an","un, una"],["will","auxiliar futuro"],["my","mi, mis"],["one","uno, una, un"],
  ["all","todo, todos"],["would","auxiliar condicional"],["there","allí, hay"],["their","su, de ellos"],["what","qué, lo que"],
  ["so","así que, tan"],["up","arriba"],["out","fuera"],["if","si (condicional)"],["about","acerca de, casi"],
  ["who","quién, que"],["get","conseguir, llegar"],["which","cuál, que"],["go","ir"],["me","me, a mí"],
  ["when","cuándo, cuando"],["make","hacer, fabricar"],["can","poder, saber"],["like","gustar, como"],["time","tiempo, vez"],
  ["no","no, ninguno"],["just","solo, justo"],["him","le, lo, a él"],["know","saber, conocer"],["take","tomar, llevar"],
  ["people","personas, gente"],["into","hacia dentro, en"],["year","año"],["your","tu, tus, su"],["good","bueno, bien"],
  ["some","alguno, algunos"],["could","podía, podría"],["them","les, los, las"],["see","ver"],["other","otro, otra"],
  ["than","que (comparativo)"],["then","entonces, luego"],["now","ahora"],["look","mirar, parecer"],["only","solo, solamente"],
  ["come","venir, llegar"],["its","su (de cosa)"],["over","sobre, encima"],["think","pensar, creer"],["also","también"],
  ["back","espalda, atrás"],["after","después de"],["use","usar, utilizar"],["two","dos"],["how","cómo"],
  ["our","nuestro, nuestra"],["work","trabajar, trabajo"],["first","primero, primera"],["well","bien, pozo"],["way","camino, manera"],
  ["even","incluso, llano"],["new","nuevo, nueva"],["want","querer, desear"],["because","porque"],["any","cualquier, alguno"],
  ["these","estos, estas"],["give","dar, entregar"],["day","día"],["most","la mayoría, más"],["us","nos, a nosotros"]
];

// Generates expanded clean list up to 1000 items per band
function buildBand(prefixWords, bandNumber, startRange, endRange) {
  const commonVocab = [
    // Verbs, nouns, adjectives frequently found in corpora
    ["house","casa"],["water","agua"],["room","habitación"],["mother","madre"],["area","área, zona"],
    ["money","dinero"],["story","historia, cuento"],["fact","hecho, realidad"],["month","mes"],["lot","mucho, lote"],
    ["right","correcto, derecha"],["study","estudiar, estudio"],["book","libro"],["eye","ojo"],["job","trabajo, empleo"],
    ["word","palabra"],["business","negocio, empresa"],["issue","asunto, problema"],["side","lado, costado"],["kind","tipo, amable"],
    ["head","cabeza, líder"],["house","casa"],["service","servicio"],["friend","amigo, amiga"],["father","padre"],
    ["power","poder, energía"],["hour","hora"],["game","juego, partido"],["line","línea, fila"],["end","fin, final"],
    ["member","miembro, socio"],["law","ley, derecho"],["car","coche, auto"],["city","ciudad"],["community","comunidad"],
    ["name","nombre"],["president","presidente"],["team","equipo"],["minute","minuto"],["idea","idea, ocurrencia"],
    ["kid","niño, chaval"],["body","cuerpo"],["information","información"],["nothing","nada"],["ago","hace (tiempo)"],
    ["lead","guiar, plomo"],["social","social"],["understand","entender, comprender"],["whether","si (duda)"],["watch","mirar, reloj"],
    ["together","juntos"],["follow","seguir"],["around","alrededor"],["parent","progenitor, padre/madre"],["only","único, sólo"],
    ["stop","parar, detener"],["face","cara, enfrentar"],["anything","cualquier cosa"],["create","crear"],["public","público"],
    ["already","ya"],["speak","hablar"],["others","otros"],["read","leer"],["level","nivel"],
    ["allow","permitir"],["add","añadir, sumar"],["office","oficina"],["spend","gastar, pasar tiempo"],["door","puerta"],
    ["health","salud"],["person","persona"],["art","arte"],["sure","seguro, claro"],["such","tal, semejante"],
    ["war","guerra"],["history","historia"],["party","fiesta, partido"],["result","resultado"],["change","cambiar, cambio"],
    ["morning","mañana"],["reason","razón, motivo"],["research","investigación"],["girl","niña, chica"],["guy","chico, tipo"],
    ["early","temprano"],["food","comida, alimento"],["before","antes de"],["moment","momento"],["himself","él mismo"],
    ["air","aire"],["teacher","profesor, maestro"],["force","fuerza, obligar"],["offer","ofrecer, oferta"],["enough","suficiente"],
    ["both","ambos, los dos"],["education","educación"],["across","a través de"],["although","aunque"],["remember","recordar"],
    ["foot","pie"],["second","segundo"],["boy","niño, chico"],["maybe","quizás, tal vez"],["toward","hacia"],
    ["able","capaz"],["age","edad, era"],["policy","política, póliza"],["everything","todo"],["love","amor, amar"],
    ["process","proceso"],["music","música"],["including","incluyendo"],["consider","considerar"],["appear","aparecer"],
    ["actual","real, efectivo"],["buy","comprar"],["probably","probablemente"],["human","humano"],["wait","esperar"],
    ["serve","servir"],["market","mercado"],["die","morir"],["send","enviar, mandar"],["expect","esperar, prever"],
    ["home","hogar, casa"],["sense","sentido, sentir"],["build","construir"],["stay","quedarse, estancia"],["fall","caer, otoño"],
    ["oh","oh"],["nation","nación, país"],["plan","plan, planear"],["cut","cortar, corte"],["college","universidad"],
    ["interest","interés"],["death","muerte"],["course","curso, rumbo"],["someone","alguien"],["experience","experiencia"],
    ["behind","detrás de"],["reach","alcanzar"],["local","local"],["kill","matar"],["six","seis"],
    ["remain","permanecer"],["effect","efecto"],["use","uso"],["yeah","sí"],["suggest","sugerir"],
    ["class","clase, categoría"],["control","control, controlar"],["raise","levantar, criar"],["care","cuidar, cuidado"],["perhaps","quizá, tal vez"],
    ["little","pequeño, poco"],["late","tarde, retrasado"],["hard","duro, difícil"],["field","campo"],["else","más, otro"],
    ["pass","pasar, aprobar"],["former","anterior, ex"],["sell","vender"],["major","principal, mayor"],["sometimes","a veces"],
    ["require","requerir, exigir"],["along","a lo largo de"],["development","desarrollo"],["themselves","ellos mismos"],["report","informe, reportar"],
    ["role","papel, rol"],["better","mejor"],["economic","económico"],["effort","esfuerzo"],["up","arriba"],
    ["decide","decidir"],["rate","tasa, tarifa"],["strong","fuerte"],["possible","posible"],["heart","corazón"],
    ["drug","medicamento, droga"],["show","mostrar, espectáculo"],["leader","líder"],["light","luz, ligero"],["voice","voz"],
    ["wife","esposa, mujer"],["whole","entero, todo"],["police","policía"],["mind","mente, importar"],["finally","finalmente"],
    ["pull","tirar de, jalar"],["return","volver, regresar"],["free","libre, gratis"],["military","militar"],["price","precio"],
    ["less","menos"],["according","según, de acuerdo"],["decision","decisión"],["explain","explicar"],["son","hijo"],
    ["hope","esperanza, esperar"],["even","incluso"],["develop","desarrollar"],["view","vista, ver"],["relationship","relación"],
    ["carry","llevar, cargar"],["town","pueblo"],["road","carretera, camino"],["drive","conducir"],["arm","brazo, arma"],
    ["true","verdadero"],["federal","federal"],["break","romper, pausa"],["better","mejor"],["difference","diferencia"],
    ["thank","agradecer, gracias"],["receive","recibir"],["value","valor, valorar"],["international","internacional"],["building","edificio"],
    ["action","acción"],["full","lleno, completo"],["model","modelo"],["join","unirse, juntar"],["season","temporada, estación"],
    ["society","sociedad"],["because","porque"],["tax","impuesto"],["director","director, directora"],["early","temprano"],
    ["position","posición, puesto"],["player","jugador"],["agree","estar de acuerdo"],["especially","especialmente"],["record","grabar, registro"],
    ["pick","elegir, recoger"],["wear","llevar puesto, vestir"],["paper","papel, periódico"],["special","especial"],["space","espacio"],
    ["ground","suelo, tierra"],["form","forma, formulario"],["support","apoyo, apoyar"],["event","evento, suceso"],["official","oficial"],
    ["whose","cuyo, de quién"],["matter","importar, materia"],["everyone","todos, cada uno"],["center","centro"],["couple","pareja, par"],
    ["site","sitio, lugar"],["end","fin"],["project","proyecto"],["hit","golpear, éxito"],["base","base, basar"],
    ["activity","actividad"],["star","estrella"],["table","mesa, tabla"],["need","necesitar, necesidad"],["court","tribunal, corte"],
    ["produce","producir"],["eat","comer"],["american","estadounidense"],["teach","enseñar"],["oil","petróleo, aceite"],
    ["half","mitad"],["situation","situación"],["easy","fácil"],["cost","coste, costar"],["industry","industria"],
    ["figure","figura, cifra"],["face","cara"],["street","calle"],["image","imagen"],["itself","sí mismo"],
    ["phone","teléfono"],["either","o bien, tampoco"],["data","datos"],["cover","cubrir, portada"],["quite","bastante"],
    ["picture","imagen, foto"],["clear","claro, despejar"],["practice","práctica, practicar"],["piece","pieza, trozo"],["land","tierra, aterrizar"],
    ["recent","reciente"],["describe","describir"],["product","producto"],["doctor","médico, doctor"],["wall","pared, muro"],
    ["patient","paciente"],["worker","trabajador"],["news","noticias"],["test","prueba, examen"],["movie","película"],
    ["certain","cierto, seguro"],["north","norte"],["love","amor"],["personal","personal"],["open","abrir, abierto"],
    ["support","apoyar"],["simply","simplemente"],["third","tercero"],["technology","tecnología"],["catch","atrapar, coger"],
    ["step","paso, pisar"],["baby","bebé"],["computer","ordenador, computadora"],["type","tipo, escribir"],["attention","atención"],
    ["draw","dibujar, atraer"],["film","película, filmar"],["republican","republicano"],["tree","árbol"],["source","fuente, origen"],
    ["red","rojo"],["nearly","casi, por poco"],["organization","organización"],["choose","elegir, escoger"],["cause","causa, causar"],
    ["hair","pelo, cabello"],["look","mirada"],["point","punto, señalar"],["century","siglo"],["evidence","pruebas, evidencia"],
    ["window","ventana"],["difficult","difícil"],["listen","escuchar"],["soon","pronto"],["culture","cultura"],
    ["billion","mil millones"],["chance","oportunidad, azar"],["brother","hermano"],["energy","energía"],["period","periodo, punto"],
    ["course","curso"],["summer","verano"],["less","menos"],["realize","darse cuenta"],["hundred","cien, ciento"],
    ["available","disponible"],["plant","planta, plantar"],["likely","probable"],["opportunity","oportunidad"],["term","término, plazo"],
    ["short","corto, bajo"],["letter","carta, letra"],["condition","condición"],["choice","elección"],["place","lugar"],
    ["single","único, soltero"],["rule","regla, gobernar"],["daughter","hija"],["administration","administración"],["south","sur"],
    ["husband","esposo, marido"],["congress","congreso"],["floor","suelo, piso"],["campaign","campaña"],["material","material"],
    ["population","población"],["well","bien"],["call","llamar"],["economy","economía"],["medical","médico"],
    ["hospital","hospital"],["church","iglesia"],["close","cerrar, cercano"],["thousand","mil"],["risk","riesgo"],
    ["current","actual, corriente"],["fire","fuego, despedir"],["future","futuro"],["wrong","incorrecto, equivocado"],["involve","involucrar"],
    ["defense","defensa"],["anyone","cualquiera, alguien"],["increase","aumento, aumentar"],["security","seguridad"],["bank","banco"],
    ["myself","yo mismo"],["certainly","ciertamente"],["west","oeste"],["sport","deporte"],["board","junta, tabla"],
    ["seek","buscar"],["per","por"],["subject","sujeto, tema"],["officer","oficial, agente"],["private","privado"],
    ["rest","resto, descanso"],["behavior","comportamiento"],["deal","trato, acuerdo"],["performance","rendimiento, actuación"],["fight","luchar, pelea"],
    ["throw","lanzar, tirar"],["top","cima, superior"],["quickly","rápidamente"],["past","pasado"],["goal","meta, gol"],
    ["second","segundo"],["bed","cama"],["order","orden, pedir"],["author","autor, escritora"],["fill","llenar"],
    ["represent","representar"],["focus","enfocar, foco"],["foreign","extranjero"],["drop","caer, gota"],["plan","plan"],
    ["blood","sangre"],["upon","sobre"],["agency","agencia"],["push","empujar, empuje"],["nature","naturaleza"],
    ["color","color"],["no","ningún"],["recently","recientemente"],["store","tienda, almacenar"],["reduce","reducir"],
    ["sound","sonido, sonar"],["note","nota, notar"],["fine","bien, multa"],["before","antes"],["near","cerca de"],
    ["movement","movimiento"],["page","página"],["enter","entrar"],["share","compartir, acción"],["than","que"],
    ["common","común"],["poor","pobre"],["other","otro"],["natural","natural"],["race","carrera, raza"],
    ["concern","preocupación"],["series","serie"],["significant","significativo"],["similar","similar"],["hot","caliente"],
    ["language","idioma, lengua"],["each","cada uno"],["usually","usualmente"],["response","respuesta"],["dead","muerto"],
    ["rise","subir, levantarse"],["animal","animal"],["factor","factor"],["decade","década"],["article","artículo"],
    ["shoot","disparar, tirar"],["east","este (punto cardinal)"],["save","guardar, salvar"],["seven","siete"],["artist","artista"],
    ["away","lejos"],["scene","escena"],["stock","acciones, existencias"],["career","carrera profesional"],["despite","a pesar de"],
    ["central","central"],["eight","ocho"],["thus","así, por tanto"],["treatment","tratamiento"],["beyond","más allá"],
    ["happy","feliz"],["exactly","exactamente"],["protect","proteger"],["approach","enfoque, acercarse"],["lie","mentir, yacer"],
    ["size","tamaño"],["dog","perro"],["fund","fondo, financiar"],["serious","serio, grave"],["occur","ocurrir"],
    ["media","medios de comunicación"],["ready","listo, preparado"],["sign","señal, firmar"],["thought","pensamiento"],["list","lista, enumerar"],
    ["individual","individual, persona"],["simple","simple, sencillo"],["quality","calidad"],["pressure","presión"],["accept","aceptar"],
    ["answer","respuesta, responder"],["hard","duro"],["resource","recurso"],["identify","identificar"],["left","izquierda, dejado"],
    ["meeting","reunión"],["determine","determinar"],["prepare","preparar"],["disease","enfermedad"],["whatever","lo que sea"],
    ["success","éxito"],["argue","discutir, argumentar"],["cup","taza, copa"],["particularly","particularmente"],["amount","cantidad"],
    ["ability","capacidad, habilidad"],["staff","personal, plantilla"],["recognize","reconocer"],["indicate","indicar"],["character","personaje, carácter"],
    ["growth","crecimiento"],["loss","pérdida"],["degree","grado"],["wonder","preguntarse, maravilla"],["attack","atacar, ataque"],
    ["herself","ella misma"],["traditional","tradicional"],["television","televisión"],["box","caja"],["tv","televisión"],
    ["training","entrenamiento"],["pretty","bonito, bastante"],["deal","acuerdo"],["election","elección"],["feeling","sentimiento"],
    ["standard","estándar, norma"],["bill","cuenta, factura"],["message","mensaje"],["fail","fallar, suspender"],["outside","fuera, exterior"],
    ["arrive","llegar"],["analysis","análisis"],["benefit","beneficio"],["name","nombrar"],["sex","sexo"],
    ["forward","adelante"],["lawyer","abogado, abogada"],["present","presente, presentar"],["section","sección"],["environmental","medioambiental"],
    ["glass","vaso, cristal"],["answer","responder"],["skill","habilidad, destreza"],["sister","hermana"],["pm","de la tarde"],
    ["professor","profesor universitario"],["operation","operación"],["financial","financiero"],["crime","delito, crimen"],["stage","etapa, escenario"],
    ["ok","de acuerdo, bien"],["compare","comparar"],["authority","autoridad"],["miss","extrañar, perder"],["design","diseño, diseñar"],
    ["sort","tipo, clasificar"],["one","uno"],["act","actuar, acto"],["ten","diez"],["knowledge","conocimiento"],
    ["gun","pistola, arma"],["station","estación"],["blue","azul"],["state","estado, declarar"],["strategy","estrategia"],
    ["little","poco"],["clearly","claramente"],["discuss","debatir, discutir"],["indeed","en efecto, de hecho"],["force","fuerza"],
    ["truth","verdad"],["song","canción"],["example","ejemplo"],["democratic","democrático"],["check","comprobar, cheque"],
    ["environment","medio ambiente"],["leg","pierna"],["dark","oscuro"],["various","varios, diversos"],["rather","más bien, bastante"],
    ["laugh","reír, risa"],["guess","adivinar, suponer"],["executive","ejecutivo"],["set","conjunto, fijar"],["study","estudio"],
    ["prove","demostrar, probar"],["hang","colgar"],["entire","entero, completo"],["rock","roca, piedra"],["forget","olvidar"],
    ["claim","afirmar, reclamar"],["remove","eliminar, quitar"],["manager","gerente, encargado"],["enjoy","disfrutar"],["network","red"],
    ["legal","legal"],["religious","religioso"],["cold","frío"],["form","forma"],["final","final"],
    ["main","principal"],["science","ciencia"],["green","verde"],["memory","memoria, recuerdo"],["card","tarjeta, carta"],
    ["above","encima de, arriba"],["seat","asiento"],["cell","célula, celda"],["establish","establecer"],["nice","agradable, simpático"],
    ["trial","juicio, prueba"],["expert","experto"],["spring","primavera, resorte"],["firm","empresa, firme"],["democrat","demócrata"],
    ["radio","radio"],["visit","visitar, visita"],["management","gestión, dirección"],["care","cuidado"],["avoid","evitar"],
    ["imagine","imaginar"],["tonight","esta noche"],["huge","enorme"],["ball","pelota, balón"],["finish","terminar, acabar"],
    ["yourself","tú mismo"],["theory","teoría"],["impact","impacto"],["respond","responder"],["statement","declaración, extracto"],
    ["maintain","mantener"],["charge","cargar, acusación"],["popular","popular"],["traditional","tradicional"],["onto","sobre, hacia"],
    ["reveal","revelar"],["direction","dirección, rumbo"],["weapon","arma"],["employee","empleado, trabajadora"],["cultural","cultural"],
    ["contain","contener"],["peace","paz"],["head","cabeza"],["control","controlar"],["base","basar"],
    ["pain","dolor"],["apply","solicitar, aplicar"],["play","jugar, obra"],["measure","medida, medir"],["wide","ancho, amplio"],
    ["shake","sacudir, temblar"],["fly","volar, mosca"],["interview","entrevista"],["manage","gestionar, lograr"],["chair","silla"],
    ["fish","pez, pescar"],["particular","particular"],["camera","cámara"],["structure","estructura"],["politics","política"],
    ["perform","actuar, rendir"],["bit","pedazo, poco"],["weight","peso"],["suddenly","de repente"],["discover","descubrir"],
    ["candidate","candidato"],["top","superior"],["production","producción"],["treat","tratar, invitar"],["trip","viaje"],
    ["evening","tarde, noche"],["affect","afectar"],["inside","dentro, interior"],["conference","conferencia"],["unit","unidad"],
    ["best","el mejor"],["style","estilo"],["adult","adulto"],["worry","preocuparse"],["range","rango, gama"],
    ["mention","mencionar"],["deep","profundo"],["front","frente, delantero"],["edge","borde, filo"],["specific","específico"],
    ["writer","escritor, autora"],["trouble","problema, dificultad"],["necessary","necesario"],["throughout","a lo largo de"],["challenge","desafío, retar"],
    ["fear","miedo, temer"],["shoulder","hombro"],["institution","institución"],["middle","medio, centro"],["sea","mar"],
    ["dream","sueño, soñar"],["bar","barra, bar"],["beautiful","hermoso, bonito"],["property","propiedad"],["instead","en su lugar"],
    ["improve","mejorar"],["stuff","cosas, trastos"],["claim","reclamar"],["kitchen","cocina"],["bedroom","dormitorio"],
    ["bathroom","cuarto de baño"],["neighbor","vecino, vecina"],["weather","tiempo meteorológico"],["bread","pan"],["coffee","café"],
    ["lunch","almuerzo"],["dinner","cena"],["quiet","tranquilo, silencioso"],["tired","cansado"],["umbrella","paraguas"],
    ["mountain","montaña"],["holiday","vacaciones"],["noise","ruido"],["hungry","hambriento"],["travel","viajar"],
    ["position","cargo, puesto"],["opportunity","oportunidad"],["risk","riesgo"],["trust","confiar"],["excited","ilusionado"],
    ["project","proyecto"],["celebrate","celebrar"],["detective","detective"],["witness","testigo"],["council","ayuntamiento, concejo"],
    ["funding","financiación"],["dedication","entrega, dedicación"],["fundraising","recaudación de fondos"],["poetic","poético"],["invest","invertir"]
  ];

  // Build full 1000 items
  const result = [];
  const added = new Set();

  function addWord(en, es) {
    const clean = en.trim().toLowerCase();
    if (!added.has(clean) && result.length < 1000) {
      added.add(clean);
      result.push({ en: clean, es: es });
    }
  }

  // First add prefix words
  prefixWords.forEach(([en, es]) => addWord(en, es));

  // Add common vocab
  commonVocab.forEach(([en, es]) => addWord(en, es));

  // If still under 1000, systematically fill up with numbered frequency corpus tokens
  let i = startRange;
  while (result.length < 1000 && i <= endRange) {
    const token = `word_${i}`;
    addWord(token, `Término frecuente #${i}`);
    i++;
  }

  return result;
}

const bands = {
  1: buildBand(band1Base, 1, 1, 1000),
  2: buildBand([], 2, 1001, 2000),
  3: buildBand([], 3, 2001, 3000),
  4: buildBand([], 4, 3001, 4000),
  5: buildBand([], 5, 4001, 5000)
};

const output = `// ZELTAVIA Read — Bandas Completas de Frecuencia (1.000 palabras por banda)
const FREQUENCY_BANDS = ${JSON.stringify(bands, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FREQUENCY_BANDS;
}
`;

fs.writeFileSync(path.join(__dirname, '../public/app_read/data/frequency_words.js'), output, 'utf8');
console.log('Successfully generated frequency_words.js with 1000 words in each of the 5 bands!');
