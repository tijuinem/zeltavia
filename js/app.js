const MAX_PALABRAS_TEXTO = 5000;
const MAX_PALABRAS_VISOR = 50;

const synth = window.speechSynthesis || null;
const SPEECH_SOPORTADA = !!synth;
const selectorVoces = document.getElementById('voz');
const displayTexto = document.getElementById('displayTexto');
const displayTraduccion = document.getElementById('displayTraduccion');
const txtArea = document.getElementById('texto');
const lblContador = document.getElementById('contadorPalabras');
const selectorTexto = document.getElementById('selectTexto');

let listaVoces = [];
let todasLasPalabras = [];
let listaFrases = [];
let cacheTraducciones = {};

// --- Soporte multi-idioma para la traducción ---
// Hoy solo se usa español, pero está preparado para añadir más idiomas sin
// tener que tocar la lógica: basta con añadir una <option> en el selector y,
// opcionalmente, una carpeta traducciones/<codigo>/ con los ficheros pre-generados.
let idiomaTraduccion = 'es';
let nombreArchivoActual = '';
let ultimoOrigenTraduccion = ''; // 'pregenerada' | 'google' | 'cache' — para poder comprobar qué se está usando
// Traducciones ya generadas de antemano para el texto y el idioma actuales
// (formato: { frases: {"frase en inglés": "traducción"}, palabras: {"palabra": "traducción"} }).
// Si existen, se usan directamente y no se llama a Google para nada.
let traduccionesPregeneradas = null;
const NOMBRES_IDIOMAS = { es: 'español', en: 'inglés', fr: 'francés', de: 'alemán', it: 'italiano', pt: 'portugués' };

// Textos de la interfaz del idioma actual (se cargan desde idiomas/<codigo>.json).
let textosInterfaz = null;

function nombreIdioma(codigo) {
    const propio = textosInterfaz && textosInterfaz['idioma_' + codigo];
    return propio || NOMBRES_IDIOMAS[codigo] || codigo;
}

// Devuelve el texto de la interfaz para una clave, en el idioma actual.
// Si no hay fichero de idioma cargado (p. ej. abierto en local sin servidor) o
// falta esa clave, usa el texto por defecto (español) que se pasa como 2º argumento.
// Admite marcadores {nombre} que se sustituyen por los valores de "params";
// {idioma} se rellena siempre con el nombre del idioma de traducción actual.
function t(clave, porDefecto, params = {}) {
    let txt = (textosInterfaz && textosInterfaz[clave] !== undefined) ? textosInterfaz[clave] : porDefecto;
    const valores = Object.assign({ idioma: nombreIdioma(idiomaTraduccion) }, params);
    Object.keys(valores).forEach(k => {
        txt = txt.split('{' + k + '}').join(valores[k]);
    });
    return txt;
}

// Deja un <select> con una única opción de aviso (sin usar innerHTML con texto traducido)
function fijarOpcionUnica(select, texto, valor = '') {
    select.innerHTML = '';
    const opcion = document.createElement('option');
    opcion.value = valor;
    opcion.textContent = texto;
    select.appendChild(opcion);
}

// Muestra de dónde viene la última traducción, para poder comprobar a simple
// vista si se está usando el .json pre-generado o si está llamando a Google.
function actualizarIndicadorOrigenTraduccion(origen) {
    const indicador = document.getElementById('indicadorOrigenTraduccion');
    if (!indicador) return;

    if (origen === 'pregenerada' || origen === 'cache') {
        indicador.textContent = t('origen_pregenerada', '📦 pre-generada');
        indicador.style.color = '#198754';
    } else if (origen === 'google') {
        indicador.textContent = t('origen_google', '🌐 en vivo (Google)');
        indicador.style.color = '#fd7e14';
    } else {
        indicador.textContent = '';
    }
}
// El endpoint gratuito de Google Translate bloquea temporalmente si se le manda
// una ráfaga de peticiones muy seguidas (justo lo que pasa al leer un texto largo,
// que pide traducir cada palabra). Estas variables sirven para espaciar las
// peticiones y hacer una pausa más larga si detectamos fallos seguidos.
let ultimaPeticionTraduccion = 0;
let fallosSeguidosTraduccion = 0;
const ESPACIADO_MIN_MS = 150;
let ultimaFraseTraducida = "";
let indiceUltimaVentana = -1;
let indicePalabraInicio = 0;
let colaLectura = [];
let lecturaDetenida = true;
// El pause()/resume() nativo del navegador es poco fiable (Firefox casi no lo
// soporta, y Chrome/Android a veces "pausa" cancelando y "reanuda" desde el
// principio). En vez de depender de eso, simulamos la pausa nosotros: guardamos
// el fragmento que se estaba leyendo y, al reanudar, seguimos la cola por ahí.
let fragmentoActual = null;
let pausaActiva = false;
const LIMITE_CARACTERES_FRAGMENTO = 180; // margen seguro por debajo del límite de los motores TTS móviles

document.addEventListener('DOMContentLoaded', () => {
    if (!SPEECH_SOPORTADA) {
        mostrarAvisoSinVoz();
    }

    poblarSelectorIdiomas();
    aplicarIdiomaInterfaz(idiomaTraduccion);
    listarArchivosCarpetaTextos();
    obtenerVocesIngles();
    // Chrome en móvil a veces devuelve la lista de voces vacía en la primera llamada
    // y no siempre dispara 'onvoiceschanged'; reintentamos una vez tras un breve margen.
    setTimeout(obtenerVocesIngles, 500);
    
    txtArea.addEventListener('input', validarYProcesarTexto);
    txtArea.addEventListener('click', actualizarPuntoInicioDesdeCursor);
    txtArea.addEventListener('keyup', (e) => {
        // Solo re-sincronizamos el marcador de inicio cuando el usuario navega
        // con el teclado (flechas, inicio/fin, etc.), NUNCA al escribir texto normal,
        // porque seleccionar la palabra en cada tecla sobrescribía lo que se escribía.
        const teclasNavegacion = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];
        if (teclasNavegacion.includes(e.key)) {
            actualizarPuntoInicioDesdeCursor();
        }
    });
    txtArea.addEventListener('mouseup', actualizarPuntoInicioDesdeCursor);
});

if (SPEECH_SOPORTADA && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = obtenerVocesIngles;
}

// Avisa al usuario si su navegador no soporta la síntesis de voz (ej. Firefox para Android)
function mostrarAvisoSinVoz() {
    const aviso = document.createElement('div');
    aviso.style.cssText = 'margin-top:10px;padding:12px;background:#f8d7da;color:#842029;border:1px solid #f5c2c7;border-radius:6px;font-size:14px;';
    aviso.id = 'avisoSinVoz';
    aviso.innerText = t('aviso_sin_voz', '⚠️ Este navegador no soporta la síntesis de voz necesaria para leer los textos en voz alta (esto ocurre en Firefox para Android). Prueba a abrir esta página con Google Chrome, Safari o Microsoft Edge.');
    document.querySelector('.controls').insertAdjacentElement('afterend', aviso);
}

// Sincroniza la selección de texto dentro del textarea superior, SIN darle el foco:
// enfocar el textarea hacía aparecer el teclado virtual en Android y provocaba saltos
// de scroll en Firefox. setSelectionRange ya pinta la selección aunque no tenga el foco.
function sincronizarTextArea(idxPalabra) {
    const palabra = todasLasPalabras[idxPalabra];
    if (palabra && txtArea) {
        txtArea.setSelectionRange(palabra.startChar, palabra.endChar);
    }
}

// Cargar lista de archivos: primero intentamos el PHP del servidor (modo online,
// para que los visitantes de la web vean los textos automáticamente, como hasta ahora).
// Si no está disponible (abierto como archivo local, sin servidor, o el PHP falla)
// no forzamos nada: dejamos el selector vacío e invitamos a usar el botón
// "Elegir carpeta de textos", que lee los .txt directamente del disco con JavaScript,
// sin depender de tener un fichero generado de antemano.
let modoOffline = false;
let textosLocales = {};

async function listarArchivosCarpetaTextos() {
    // Si se abre como archivo local (doble clic), el PHP nunca va a responder:
    // no perdemos tiempo intentando el fetch, vamos directos a pedir la carpeta.
    if (window.location.protocol === 'file:') {
        mostrarAvisoModoLocal();
        return;
    }

    try {
        const response = await fetch('get_texts.php');
        if (!response.ok) throw new Error("No se pudo acceder a get_texts.php");

        const data = await response.json();

        if (data.error) throw new Error(data.error);
        if (!data || data.length === 0) throw new Error("No se encontraron archivos .txt");

        modoOffline = false;
        fijarOpcionUnica(selectorTexto, t('opt_selecciona_texto', '-- Selecciona un texto --'));
        data.forEach(nombreArchivo => {
            const option = document.createElement('option');
            option.value = nombreArchivo;
            option.textContent = `📄 ${nombreArchivo}`;
            selectorTexto.appendChild(option);
        });

        selectorTexto.value = data[0];
        cargarTextoDesdeServidor();

    } catch (error) {
        // El PHP no responde: no hay problema, simplemente ofrecemos el botón
        // de "Elegir carpeta de textos" para seguir funcionando sin servidor.
        console.warn("PHP not available:", error.message);
        mostrarAvisoModoLocal();
    }
}

function mostrarAvisoModoLocal() {
    fijarOpcionUnica(selectorTexto, t('opt_usa_boton', '-- Usa el botón "Elegir carpeta de textos" de abajo --'));
}

// Lee todos los .txt de la carpeta que el usuario elija, directamente del disco,
// sin ningún servidor de por medio. Funciona tanto si la página está online como
// si se ha abierto localmente (file://).
async function elegirCarpetaLocal(inputElement) {
    // webkitRelativePath viene como "CarpetaElegida/archivo.txt" para los archivos
    // directos, o "CarpetaElegida/subcarpeta/archivo.txt" (o más niveles) para los
    // que están dentro de subcarpetas. Solo nos quedamos con los del primer nivel,
    // para no tragarnos de golpe miles de archivos de subcarpetas anidadas.
    const archivos = Array.from(inputElement.files).filter(f => {
        if (!f.name.toLowerCase().endsWith('.txt')) return false;
        const partes = (f.webkitRelativePath || f.name).split('/');
        return partes.length === 2; // ["CarpetaElegida", "archivo.txt"]
    });

    if (archivos.length === 0) {
        alert(t('alert_sin_txt', 'La carpeta elegida no contiene archivos .txt directamente dentro de ella (no se cuentan los de subcarpetas).'));
        return;
    }

    textosLocales = {};

    for (const archivo of archivos) {
        const buffer = await archivo.arrayBuffer();
        let contenido = "";
        try {
            const decoderUTF8 = new TextDecoder('utf-8', { fatal: true });
            contenido = decoderUTF8.decode(buffer);
        } catch (e) {
            const decoderANSI = new TextDecoder('windows-1252');
            contenido = decoderANSI.decode(buffer);
        }
        textosLocales[archivo.name] = contenido;
    }

    modoOffline = true;
    const nombres = Object.keys(textosLocales).sort();

    fijarOpcionUnica(selectorTexto, t('opt_selecciona_texto_local', '-- Selecciona un texto (carpeta local) --'));
    nombres.forEach(nombreArchivo => {
        const option = document.createElement('option');
        option.value = nombreArchivo;
        option.textContent = `📄 ${nombreArchivo}`;
        selectorTexto.appendChild(option);
    });

    selectorTexto.value = nombres[0];
    cargarTextoDesdeServidor();
}

async function cargarTextoDesdeServidor() {
    const nombreArchivo = selectorTexto.value;
    if (!nombreArchivo) return;

    nombreArchivoActual = nombreArchivo;

    // Modo local: el contenido ya está en memoria (leído por elegirCarpetaLocal),
    // no hace falta ningún fetch.
    if (modoOffline) {
        const contenido = textosLocales[nombreArchivo];
        if (contenido === undefined) {
            alert(t('alert_no_se_pudo_cargar', 'No se pudo cargar el archivo: {archivo}', { archivo: nombreArchivo }));
            return;
        }
        txtArea.value = contenido;
        validarYProcesarTexto();
        traduccionesPregeneradas = null; // en local no hay carpeta de traducciones que consultar
        return;
    }

    try {
        const response = await fetch(`textos/${encodeURIComponent(nombreArchivo)}`);
        if (!response.ok) throw new Error("Error al descargar el archivo");
        
        // 1. Leemos el archivo como datos binarios en bruto
        const buffer = await response.arrayBuffer();
        let contenido = "";
        
        try {
            // 2. Intentamos leerlo como UTF-8 (Formato web estándar)
            const decoderUTF8 = new TextDecoder('utf-8', { fatal: true });
            contenido = decoderUTF8.decode(buffer);
        } catch (e) {
            // 3. Si falla (porque tiene guiones largos o comillas de Windows/ANSI),
            // aplicamos el decodificador de Windows-1252 para rescatar los caracteres.
            const decoderANSI = new TextDecoder('windows-1252');
            contenido = decoderANSI.decode(buffer);
        }

        txtArea.value = contenido;
        validarYProcesarTexto();
        await cargarTraduccionesPregeneradas();
    } catch (error) {
        console.error(error);
        alert(t('alert_no_se_pudo_cargar', 'No se pudo cargar el archivo: {archivo}', { archivo: nombreArchivo }));
    }
}

// Busca en el servidor traducciones/<idioma>/<nombre-base>.json para el texto e
// idioma actuales. Si existe, se usa directamente (sin llamar a Google para nada).
// Si no existe (texto o idioma aún no "compilados"), no pasa nada: traducirTexto()
// caerá automáticamente al servicio en vivo cuando haga falta.
async function cargarTraduccionesPregeneradas() {
    traduccionesPregeneradas = null;

    if (modoOffline || !nombreArchivoActual) return;

    const nombreBase = nombreArchivoActual.replace(/\.txt$/i, '');
    try {
        const res = await fetch(`traducciones/${idiomaTraduccion}/${encodeURIComponent(nombreBase)}.json`);
        if (!res.ok) return; // no existe: seguimos con Google en vivo, sin avisar de nada
        traduccionesPregeneradas = await res.json();
    } catch (e) {
        traduccionesPregeneradas = null;
    }
}

// Carga idiomas/<codigo>.json y aplica cada texto a los elementos marcados con
// data-i18n (o data-i18n-placeholder para placeholders de inputs/textarea).
// Los textos que genera el propio app.js (alertas, "Cargando...", contador...) usan
// t() y se leen de este mismo fichero. Si no existe el fichero, no pasa nada: la
// interfaz se queda con el español que lleva el HTML y el código por defecto.
async function aplicarIdiomaInterfaz(idioma) {
    try {
        const res = await fetch(`idiomas/${idioma}.json`);
        if (!res.ok) return;
        textosInterfaz = await res.json();
    } catch (e) {
        return; // sin conexión o sin ese fichero: seguimos con el texto por defecto
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const clave = el.getAttribute('data-i18n');
        if (textosInterfaz[clave] !== undefined) {
            const texto = t(clave, textosInterfaz[clave]);
            if (el.tagName === 'TITLE') {
                document.title = texto;
            } else {
                el.textContent = texto;
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const clave = el.getAttribute('data-i18n-placeholder');
        if (textosInterfaz[clave] !== undefined) {
            el.placeholder = t(clave, textosInterfaz[clave]);
        }
    });

    refrescarTextosDinamicos();
}

// Vuelve a pintar los textos que genera app.js, para que cambien al cambiar de idioma
function refrescarTextosDinamicos() {
    const etiqueta = document.getElementById('lblIdiomaTraduccion');
    if (etiqueta) etiqueta.textContent = t('label_traduccion_a', 'Traducción al {idioma} (frase/línea actual):');

    actualizarContadorPalabras();

    if (todasLasPalabras.length === 0) displayTexto.innerText = textoPlaceholderLectura();
    if (!document.getElementById('chkTraduccion').checked) displayTraduccion.innerText = textoPlaceholderTraduccion();

    const aviso = document.getElementById('avisoSinVoz');
    if (aviso) aviso.innerText = t('aviso_sin_voz', aviso.innerText);

    obtenerVocesIngles();
}

// Rellena el desplegable de idioma leyendo idiomas/disponibles.json, en vez de
// depender de las <option> escritas a mano en el HTML. Añadir un idioma nuevo
// (p. ej. portugués) es entonces solo una línea más en ese JSON, sin tocar nada
// más. Si ese fichero no existe (o no hay servidor, p. ej. en local), dejamos las
// opciones que ya trae el HTML tal cual, así el selector sigue funcionando igual.
async function poblarSelectorIdiomas() {
    const selector = document.getElementById('selectorIdiomaTraduccion');
    if (!selector) return;

    try {
        const res = await fetch('idiomas/disponibles.json');
        if (!res.ok) return;
        const lista = await res.json();
        if (!Array.isArray(lista) || lista.length === 0) return;

        const seleccionActual = selector.value || idiomaTraduccion;
        selector.innerHTML = '';
        lista.forEach(({ codigo, nombre }) => {
            const opcion = document.createElement('option');
            opcion.value = codigo;
            opcion.textContent = nombre || codigo;
            selector.appendChild(opcion);
        });

        if ([...selector.options].some(o => o.value === seleccionActual)) {
            selector.value = seleccionActual;
        }
    } catch (e) {
        // Sin conexión o sin manifiesto: seguimos con las opciones fijas del HTML
    }
}

// Llamado al cambiar el selector de idioma de traducción
async function cambiarIdiomaTraduccion(nuevoIdioma) {
    idiomaTraduccion = nuevoIdioma;

    await aplicarIdiomaInterfaz(idiomaTraduccion);
    refrescarTextosDinamicos(); // por si no existe el fichero de ese idioma: al menos el nombre del idioma se actualiza

    await cargarTraduccionesPregeneradas();

    // Si ya hay una traducción visible, la refrescamos en el nuevo idioma
    if (document.getElementById('chkTraduccion').checked) {
        actualizarTraduccionConResalte(indicePalabraInicio);
    }
}

function obtenerVocesIngles() {
    const vozPrevia = selectorVoces.value; // para no perder la voz elegida al repoblar la lista
    if (!SPEECH_SOPORTADA) {
        fijarOpcionUnica(selectorVoces, t('opt_voz_no_disponible', 'Síntesis de voz no disponible en este navegador'));
        return;
    }

    listaVoces = synth.getVoices().filter(v => v.lang.startsWith('en'));
    selectorVoces.innerHTML = '';

    if (listaVoces.length === 0) {
        fijarOpcionUnica(selectorVoces, t('opt_sin_voces', 'No se encontraron voces en inglés'));
        return;
    }

    listaVoces.forEach((voz, index) => {
        const option = document.createElement('option');
        option.value = index;
        const esNatural = voz.name.includes('Natural') || voz.name.includes('Google') ? t('etiqueta_alta_calidad', ' (Alta Calidad)') : '';
        option.textContent = `${voz.name} [${voz.lang}]${esNatural}`;
        selectorVoces.appendChild(option);
    });

    if (vozPrevia !== '' && listaVoces[vozPrevia]) selectorVoces.value = vozPrevia;
}

function actualizarPuntoInicioDesdeCursor() {
    if (todasLasPalabras.length === 0) return;

    const posStart = txtArea.selectionStart;
    const isRangeSelection = txtArea.selectionStart !== txtArea.selectionEnd;

    // Buscamos la palabra exacta donde está el cursor
    let idxEncontrado = todasLasPalabras.findIndex(p => posStart >= p.startChar && posStart <= p.endChar);

    // Si hizo clic en un espacio en blanco, buscamos la palabra inmediatamente siguiente
    if (idxEncontrado === -1) {
        idxEncontrado = todasLasPalabras.findIndex(p => p.startChar >= posStart);
        if (idxEncontrado === -1) {
            idxEncontrado = todasLasPalabras.length - 1; // Si está al final del texto
        }
    }

    if (idxEncontrado !== -1) {
        // Comprobamos si la palabra actual existe visualmente en la caja de abajo
        const spanSeleccionado = document.getElementById(`word-span-${idxEncontrado}`);
        
        // Si no existe (está fuera de las 200 palabras mostradas), forzamos a reordenar el visor
        const necesitaReordenarVisor = !spanSeleccionado; 
        
        fijarPuntoInicio(idxEncontrado, necesitaReordenarVisor, true);

        // Si fue un simple clic (no arrastrar), marcamos/seleccionamos la palabra completa en el textarea
        if (!isRangeSelection) {
            sincronizarTextArea(idxEncontrado);
        }
    }
}

let ultimoConteoPalabras = 0;

function actualizarContadorPalabras(n = ultimoConteoPalabras) {
    ultimoConteoPalabras = n;
    lblContador.innerText = t('contador_palabras', '{n} / {max} palabras', { n: n, max: MAX_PALABRAS_TEXTO });
}

// Textos de relleno de las cajas de lectura y traducción (cuando no hay nada que mostrar)
function textoPlaceholderLectura() {
    return t('texto_placeholder_lectura', 'El texto listo para leer aparecerá aquí...');
}
function textoPlaceholderTraduccion() {
    return t('texto_placeholder_traduccion', 'Activa la casilla "Traducción en tiempo real" para ver la traducción al {idioma} mientras se lee.');
}

function validarYProcesarTexto() {
    let texto = txtArea.value;
    let palabras = texto.trim().split(/\s+/).filter(p => p.length > 0);

    if (palabras.length > MAX_PALABRAS_TEXTO) {
        alert(t('alert_texto_excede', 'El texto excede el límite máximo de {max} palabras. Se ha recortado automáticamente.', { max: MAX_PALABRAS_TEXTO }));
        txtArea.value = palabras.slice(0, MAX_PALABRAS_TEXTO).join(' ');
        palabras = palabras.slice(0, MAX_PALABRAS_TEXTO);
    }

    actualizarContadorPalabras(palabras.length);
    indicePalabraInicio = 0;
    prepararTextoDisplay();
}

function prepararTextoDisplay() {
    const texto = txtArea.value.trim();
    todasLasPalabras = [];
    listaFrases = [];
    indiceUltimaVentana = -1;

    if (!texto) {
        displayTexto.innerText = textoPlaceholderLectura();
        if (!document.getElementById('chkTraduccion').checked) {
            displayTraduccion.innerText = textoPlaceholderTraduccion();
        }
        return;
    }

    let charIndex = 0;
    // Además de espacios, separamos también por rayas (— / –) usadas sin espacios
    // alrededor (p. ej. "ancestor—covered"), porque si no se tratan como una sola
    // palabra rarísima que al traducirla devuelve una frase entera y rompe el resaltado.
    const tokens = texto.split(/(\s+|—|–)/);

    tokens.forEach(token => {
        const esSoloRaya = /^[—–]+$/.test(token);
        if (token.trim().length > 0 && !esSoloRaya) {
            todasLasPalabras.push({
                texto: token,
                startChar: charIndex,
                endChar: charIndex + token.length
            });
        }
        charIndex += token.length;
    });

    // Procesa oraciones o líneas (puntos, signos y saltos de línea \n)
    const regexFrases = /[^.!?\r\n]+[.!?\r\n]*/g;
    let match;
    while ((match = regexFrases.exec(texto)) !== null) {
        const fraseStr = match[0].trim();
        if (fraseStr.length > 0) {
            listaFrases.push({
                texto: fraseStr,
                inicio: match.index,
                fin: match.index + match[0].length
            });
        }
    }

    renderizarVentanaVisor(indicePalabraInicio);
}

function fijarPuntoInicio(indicePalabra, reordenarVisor = false, desdeTextArea = false) {
    if (SPEECH_SOPORTADA && synth.speaking) {
        lecturaDetenida = true;
        colaLectura = [];
        synth.cancel();
    }
    pausaActiva = false;
    fragmentoActual = null;

    indicePalabraInicio = Math.max(0, Math.min(todasLasPalabras.length - 1, indicePalabra));

    if (reordenarVisor) {
        renderizarVentanaVisor(indicePalabraInicio);
    } else {
        document.querySelectorAll('#displayTexto span').forEach(s => s.classList.remove('start-marker'));
        const spanSeleccionado = document.getElementById(`word-span-${indicePalabraInicio}`);
        if (spanSeleccionado) {
            spanSeleccionado.classList.add('start-marker');
        }
    }

    actualizarTraduccionConResalte(indicePalabraInicio);

    // Sincronizar visualmente en el textarea superior si el clic vino de abajo
    if (!desdeTextArea) {
        sincronizarTextArea(indicePalabraInicio);
    }
}

async function actualizarTraduccionConResalte(idxPalabra) {
    if (!document.getElementById('chkTraduccion').checked) return;
    if (!todasLasPalabras[idxPalabra]) return;

    const itemPalabra = todasLasPalabras[idxPalabra];
    const charPos = itemPalabra.startChar;
    const fraseActual = listaFrases.find(f => charPos >= f.inicio && charPos < f.fin);

    if (!fraseActual) return;

    displayTraduccion.innerText = t('traduciendo', 'Traduciendo...');

    const traduccionFrase = await traducirTexto(fraseActual.texto);
    const origenFrase = ultimoOrigenTraduccion; // guardamos el origen de la traducción principal (la frase)
    actualizarIndicadorOrigenTraduccion(origenFrase);

    const palabraLimpia = itemPalabra.texto.replace(/^[^\w]+|[^\w]+$/g, '');

    let palabraTraducida = "";
    if (palabraLimpia) {
        const resTrad = await traducirTexto(palabraLimpia);
        palabraTraducida = resTrad.trim().toLowerCase().replace(/^[^\wáéíóúñ]+|[^\wáéíóúñ]+$/gi, '');
    }

    displayTraduccion.innerHTML = '';

    const tokens = traduccionFrase.split(/(\s+)/);
    const spans = [];
    let seEncontroCoincidencia = false;

    tokens.forEach(token => {
        const tokenLimpio = token.trim().toLowerCase().replace(/^[^\wáéíóúñ]+|[^\wáéíóúñ]+$/gi, '');
        const span = document.createElement('span');
        span.textContent = token;

        // Solo permitimos una coincidencia "parcial" (includes) si ambas palabras tienen
        // al menos 3 letras; si no, palabras cortas como "a", "la", "el" o "de" acaban
        // coincidiendo por accidente con cualquier palabra traducida que las contenga
        // como subcadena (p. ej. "nasa".includes("a")) y se marcan varias palabras a la vez.
        const esCoincidenciaExacta = tokenLimpio === palabraTraducida;
        const esCoincidenciaParcial = tokenLimpio.length >= 3 && palabraTraducida.length >= 3 &&
            (palabraTraducida.includes(tokenLimpio) || tokenLimpio.includes(palabraTraducida));

        if (palabraTraducida && tokenLimpio && (esCoincidenciaExacta || esCoincidenciaParcial)) {
            span.className = 'start-marker';
            seEncontroCoincidencia = true;
        }

        spans.push({ span, esPalabra: token.trim().length > 0 });
    });

    // Si al traducir la palabra suelta (sin contexto) el resultado no coincide con
    // ninguna palabra de la traducción de la frase completa (ambigüedad del traductor,
    // p. ej. "looks" traducido aislado da "parece" pero en la frase aparece como "mira"),
    // marcamos como alternativa la palabra que le corresponde por posición aproximada
    // dentro de la frase, en vez de dejar la traducción sin ninguna marca.
    if (!seEncontroCoincidencia) {
        const palabrasFrase = todasLasPalabras.filter(p => p.startChar >= fraseActual.inicio && p.startChar < fraseActual.fin);
        const posEnFrase = palabrasFrase.findIndex(p => p.startChar === itemPalabra.startChar);
        const spansPalabra = spans.filter(s => s.esPalabra);

        if (posEnFrase !== -1 && palabrasFrase.length > 0 && spansPalabra.length > 0) {
            const proporcion = posEnFrase / palabrasFrase.length;
            const idxAprox = Math.min(spansPalabra.length - 1, Math.floor(proporcion * spansPalabra.length));
            spansPalabra[idxAprox].span.classList.add('start-marker');
        }
    }

    spans.forEach(s => displayTraduccion.appendChild(s.span));
}

function pronunciarPalabraIndividual(palabra) {
    if (!SPEECH_SOPORTADA) return;
    if (synth.speaking) synth.cancel();

    const palabraLimpia = palabra.replace(/^[^\w]+|[^\w]+$/g, '');
    if (!palabraLimpia) return;

    const utterance = new SpeechSynthesisUtterance(palabraLimpia);
    const vozSeleccionada = listaVoces[selectorVoces.value];
    if (vozSeleccionada) utterance.voice = vozSeleccionada;
    utterance.lang = vozSeleccionada ? vozSeleccionada.lang : 'en-US';
    utterance.rate = parseFloat(document.getElementById('velocidad').value);

    synth.speak(utterance);
}

function renderizarVentanaVisor(indicePalabraActiva) {
    displayTexto.innerHTML = '';

    if (todasLasPalabras.length === 0) return;

    // Calculamos el inicio dejando un margen de 5 palabras antes de la palabra activa
    let inicio = Math.max(0, indicePalabraActiva - 5);
    let fin = Math.min(todasLasPalabras.length, inicio + MAX_PALABRAS_VISOR);

    if (fin - inicio < MAX_PALABRAS_VISOR && inicio > 0) {
        inicio = Math.max(0, fin - MAX_PALABRAS_VISOR);
    }

    indiceUltimaVentana = inicio;

    for (let i = inicio; i < fin; i++) {
        const item = todasLasPalabras[i];
        const span = document.createElement('span');
        span.textContent = item.texto + ' ';
        span.id = `word-span-${i}`;
        span.className = 'word-clickable';

        if (i === indicePalabraInicio) {
            span.classList.add('start-marker');
        }

        if (i === indicePalabraActiva && SPEECH_SOPORTADA && synth.speaking) {
            span.classList.add('highlight');
        }

        span.onclick = () => fijarPuntoInicio(i, false, false);

        span.ondblclick = (e) => {
            e.stopPropagation();
            pronunciarPalabraIndividual(item.texto);
        };

        displayTexto.appendChild(span);
    }
}

async function traducirTexto(textoIngles, idioma = idiomaTraduccion) {
    if (!textoIngles) return "";

    const claveCache = idioma + '::' + textoIngles;
    if (cacheTraducciones[claveCache]) {
        ultimoOrigenTraduccion = 'cache';
        return cacheTraducciones[claveCache];
    }

    // 1) Si hay traducciones pre-generadas cargadas para este texto/idioma, las usamos
    // directamente: sin red, sin límites de Google, funciona offline si están en local.
    if (traduccionesPregeneradas) {
        const porFrase = traduccionesPregeneradas.frases && traduccionesPregeneradas.frases[textoIngles];
        const porPalabra = traduccionesPregeneradas.palabras && traduccionesPregeneradas.palabras[textoIngles.toLowerCase()];
        const pregenerada = porFrase || porPalabra;
        if (pregenerada) {
            cacheTraducciones[claveCache] = pregenerada;
            ultimoOrigenTraduccion = 'pregenerada';
            console.log(`📦 PRE-GENERATED translation used for: "${textoIngles}"`);
            return pregenerada;
        }
    }

    // 2) No estaba pre-generada: caemos al servicio en vivo, con el mismo limitador
    // de siempre para no saturar a Google.
    ultimoOrigenTraduccion = 'google';
    console.log(`🌐 LIVE translation (Google) for: "${textoIngles}"`);

    const esperaExtra = fallosSeguidosTraduccion > 0 ? Math.min(5000, 1000 * fallosSeguidosTraduccion) : 0;
    const esperaNecesaria = Math.max(0, (ultimaPeticionTraduccion + ESPACIADO_MIN_MS + esperaExtra) - Date.now());
    if (esperaNecesaria > 0) {
        await new Promise(resolve => setTimeout(resolve, esperaNecesaria));
    }
    ultimaPeticionTraduccion = Date.now();

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${idioma}&dt=t&q=${encodeURIComponent(textoIngles)}`;
        const res = await fetch(url);

        if (!res.ok) {
            // Probablemente estamos siendo limitados (429) o bloqueados temporalmente
            fallosSeguidosTraduccion++;
            return t('trad_no_disponible', 'Traducción no disponible por ahora.');
        }

        const data = await res.json();
        const resultado = data[0].map(item => item[0]).join('');
        cacheTraducciones[claveCache] = resultado;
        fallosSeguidosTraduccion = 0;
        return resultado;
    } catch (e) {
        fallosSeguidosTraduccion++;
        return t('trad_error', 'Error al traducir la frase actual.');
    }
}

function toggleTraduccion() {
    const activo = document.getElementById('chkTraduccion').checked;
    if (!activo) {
        displayTraduccion.innerText = textoPlaceholderTraduccion();
        actualizarIndicadorOrigenTraduccion(''); // limpia el indicador 📦/🌐: ya no hay traducción visible
    } else if (todasLasPalabras[indicePalabraInicio]) {
        actualizarTraduccionConResalte(indicePalabraInicio);
    }
}

// Divide un fragmento de texto largo en trozos más pequeños (respetando palabras completas)
// para no superar el límite de caracteres que los motores de voz móviles aceptan por fragmento.
function trocearEnFragmentos(texto, inicioGlobal) {
    const fragmentos = [];
    let restante = texto;
    let offset = 0;

    while (restante.length > 0) {
        if (restante.length <= LIMITE_CARACTERES_FRAGMENTO) {
            fragmentos.push({ texto: restante, inicio: inicioGlobal + offset });
            break;
        }
        // Buscamos el último espacio dentro del límite para no cortar una palabra por la mitad
        let corte = restante.lastIndexOf(' ', LIMITE_CARACTERES_FRAGMENTO);
        if (corte <= 0) corte = LIMITE_CARACTERES_FRAGMENTO; // palabra rarísima más larga que el límite

        const trozo = restante.substring(0, corte);
        fragmentos.push({ texto: trozo, inicio: inicioGlobal + offset });

        offset += corte + 1; // +1 para saltar el espacio
        restante = restante.substring(corte + 1);
    }

    return fragmentos;
}

function reproducir() {
    if (!SPEECH_SOPORTADA) {
        alert(t('alert_sin_voz', 'Tu navegador no soporta la lectura en voz alta. Prueba con Google Chrome, Safari o Edge.'));
        return;
    }

    if (pausaActiva) {
        // Reanudamos justo donde nos quedamos: la cola (colaLectura) ya tiene
        // el fragmento pausado al principio, esperando a ser leído de nuevo.
        pausaActiva = false;
        lecturaDetenida = false;
        hablarSiguienteFragmento();
        return;
    }

    const textoCompleto = txtArea.value.trim();
    if (!textoCompleto) {
        alert(t('alert_falta_texto', 'Ingresa o selecciona un texto primero.'));
        return;
    }

    synth.cancel();
    ultimaFraseTraducida = "";

    const palabraInicial = todasLasPalabras[indicePalabraInicio];
    const offsetChar = palabraInicial ? palabraInicial.startChar : 0;

    // Construimos la cola de fragmentos a leer, a partir del punto de inicio marcado.
    // Usamos las frases ya detectadas (listaFrases) como base, y las troceamos si son muy largas.
    const fraseInicio = listaFrases.find(f => f.fin > offsetChar) || null;
    let frasesPendientes = listaFrases.filter(f => f.fin > offsetChar);

    if (frasesPendientes.length === 0) {
        // Texto sin puntuación detectable: lo tratamos como una única "frase"
        frasesPendientes = [{ texto: textoCompleto.substring(offsetChar), inicio: offsetChar, fin: textoCompleto.length }];
    }

    colaLectura = [];
    frasesPendientes.forEach(frase => {
        const inicioFragmento = Math.max(frase.inicio, offsetChar);
        const textoFragmento = textoCompleto.substring(inicioFragmento, frase.fin);
        colaLectura.push(...trocearEnFragmentos(textoFragmento, inicioFragmento));
    });

    lecturaDetenida = false;
    hablarSiguienteFragmento();
}

function hablarSiguienteFragmento() {
    if (lecturaDetenida || colaLectura.length === 0) {
        fragmentoActual = null;
        limpiarResaltado();
        return;
    }

    const fragmento = colaLectura.shift();
    fragmentoActual = fragmento;
    const utterance = new SpeechSynthesisUtterance(fragmento.texto);
    const vozSeleccionada = listaVoces[selectorVoces.value];

    if (vozSeleccionada) {
        utterance.voice = vozSeleccionada;
    }

    // Forzamos siempre el idioma inglés explícitamente: si no lo hacemos, Chrome puede
    // caer al idioma del documento (<html lang="es">) o del sistema cuando la voz aún
    // no se ha asignado a tiempo (frecuente en Android), y lee el texto en español.
    utterance.lang = vozSeleccionada ? vozSeleccionada.lang : 'en-US';

    utterance.rate = parseFloat(document.getElementById('velocidad').value);

    utterance.onboundary = (event) => {
        const resaltarActivo = document.getElementById('chkResaltar').checked;
        const traduccionActiva = document.getElementById('chkTraduccion').checked;

        if (event.name === 'word') {
            const charPosGlobal = fragmento.inicio + event.charIndex;
            const idxPalabra = todasLasPalabras.findIndex(p => charPosGlobal >= p.startChar && charPosGlobal < p.endChar);

            if (idxPalabra !== -1) {
                if (resaltarActivo) {
                    if (idxPalabra < indiceUltimaVentana || idxPalabra >= (indiceUltimaVentana + MAX_PALABRAS_VISOR - 5)) {
                        renderizarVentanaVisor(idxPalabra);
                    } else {
                        document.querySelectorAll('#displayTexto span').forEach(s => s.classList.remove('highlight'));
                        const spanActivo = document.getElementById(`word-span-${idxPalabra}`);
                        if (spanActivo) spanActivo.classList.add('highlight');
                    }

                    sincronizarTextArea(idxPalabra);
                }

                if (traduccionActiva) {
                    actualizarTraduccionConResalte(idxPalabra);
                }
            }
        }
    };

    // Android/algunos móviles no disparan 'boundary' de forma fiable, pero sí 'end'.
    // Al terminar (o si un fragmento da error) pasamos automáticamente al siguiente.
    utterance.onend = () => {
        if (!lecturaDetenida) hablarSiguienteFragmento();
        else limpiarResaltado();
    };

    utterance.onerror = () => {
        if (!lecturaDetenida) hablarSiguienteFragmento();
    };

    synth.speak(utterance);
}

function pausar() {
    if (!SPEECH_SOPORTADA) return;
    if (!synth.speaking && !pausaActiva) return; // no hay nada reproduciéndose

    pausaActiva = true;
    lecturaDetenida = true; // evita que onend/onerror del cancel() avance la cola

    // Volvemos a meter en la cola el fragmento que se estaba leyendo, para que
    // "Reproducir" continúe justo desde ahí (no desde el principio del texto).
    if (fragmentoActual) {
        colaLectura.unshift(fragmentoActual);
        fragmentoActual = null;
    }

    synth.cancel();
}

function detener() {
    if (!SPEECH_SOPORTADA) return;
    lecturaDetenida = true;
    pausaActiva = false;
    colaLectura = [];
    fragmentoActual = null;
    synth.cancel();
    limpiarResaltado();
}

function limpiarResaltado() {
    document.querySelectorAll('#displayTexto span').forEach(s => s.classList.remove('highlight'));
}