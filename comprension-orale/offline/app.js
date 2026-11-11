/* Estilo: Carnet de l'écoute — interacción pequeña y explícita; el contenido proviene íntegramente de QUESTIONS. */
(function () {
  const app = document.getElementById("app");
  let index = 0;
  let selected = null;
  let showAnswer = false;
  let showPrompt = false;
  let copied = false;
  const requestedSection = new URLSearchParams(window.location.search).get("nivel");
  let section = requestedSection === "A1" || requestedSection === "A2" || requestedSection === "B2" ? requestedSection : "B1";
  let searchTerm = "";

  function activeQuestions() { return section === "A1" ? TCF_A1_QUESTIONS : section === "A2" ? TCF_A2_QUESTIONS : section === "B2" ? B2_QUESTIONS : QUESTIONS; }
  function normalizeForSearch(value) { return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
  function searchableText(question) { return [question.titre || "", question.transcription, question.question, question.options.A, question.options.B, question.options.C, question.options.D, question.reponseTexte, question.explication, question.indice.join(" ")].join(" "); }
  function makePreview(question) { const source = question.transcription || question.question || question.options.A; return source.length > 180 ? `${source.slice(0, 180).trimEnd()}…` : source; }
  function findResults() {
    const terms = normalizeForSearch(searchTerm).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return [{ section:"A1", items:TCF_A1_QUESTIONS }, { section:"A2", items:TCF_A2_QUESTIONS }, { section:"B1", items:QUESTIONS }, { section:"B2", items:B2_QUESTIONS }]
      .flatMap((entry) => entry.items.map((question, index) => ({ ...entry, question, index })))
      .filter((result) => terms.every((term) => normalizeForSearch(searchableText(result.question)).includes(term)));
  }

  const PROMPT_TEMPLATE = `Actúa como un profesor experto y preparador especializado en la prueba de comprensión oral del examen TCF (Test de Connaissance du Français). Tu alumno es hablante nativo de español con nivel intermedio de inglés, así que puedes usar el inglés de forma puntual y sencilla para aclarar falsos amigos o conexiones útiles de vocabulario, sin complicar la explicación.

A continuación te doy los datos de la pregunta.

=== DATOS DE LA PREGUNTA ===
Pregunta {{numero}} de {{total}} — Nivel {{niveau}}

Transcripción del audio:
{{transcription}}

Enunciado:
{{question}}

Opciones:
{{options}}

Respuesta oficial: {{reponse_lettre}}. {{reponse_texte}}
Explicación oficial: {{explication}}
Indice pédagogique: {{indice}}
=== FIN DE LOS DATOS ===

Genera un análisis estructurado usando EXACTAMENTE la siguiente plantilla:

---
### Análisis de la pregunta {{numero}} ({{niveau}})

1. **Respuesta correcta:**
   * Indica la letra y el texto de la opción correcta.

2. **Explicación pedagógica (en español):**
   * Explica de forma directa y clara por qué esa opción es la correcta, apoyándote en el fragmento exacto de la transcripción que lo demuestra. Cita ese fragmento en francés.

3. **Análisis de confusión ("¿por qué me pude haber equivocado?"):**
   * Analiza los distractores de la pregunta.
   * Explica la trampa específica del examen: sinónimos falsos, homófonos, negaciones sutiles, paráfrasis, velocidad del habla, información mencionada pero no pertinente, etc.

4. **Vocabulario clave y falsos amigos (FR / ES / EN intermedio):**
   * **Palabras clave:** términos esenciales para entender el ejercicio, con su traducción al español.
   * **Falsos amigos y confusiones:**
     - *Trampa con el español:* palabras que se parecen al español pero significan otra cosa en francés.
     - *Alerta con el inglés:* señálalo solo si hay un falso amigo frecuente con el inglés intermedio (p. ej. FR *actuellement* ≠ EN *actually*) o si una palabra inglesa sencilla ayuda a recordar la francesa.

5. **Estrategia y regla de oro (trucos del examen TCF):**
   * ¿Qué patrón o trampa habitual del TCF aparece en esta pregunta?
   * ¿Cómo identificar ese patrón rápidamente el día del examen?

6. **Anclaje visual / mnemotecnia:**
   * Crea una imagen mental asociativa o un truco mnemotécnico sencillo para fijar la palabra o estructura más difícil.
---

Criterios de tono y estilo:
* Tono alentador, analítico y práctico.
* Toda la explicación principal en español claro. Las referencias al inglés, breves y simples, pensadas para un nivel intermedio.
* No inventes contenido que no esté en la transcripción.`;

  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (character) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#039;" })[character]); }
  function promptFor(question, total) {
    const options = ["A", "B", "C", "D"].map((letter) => `${letter}. ${question.options[letter]}`).join("\n");
    const values = { numero:question.id, total, niveau:question.niveau, transcription:question.transcription, question:question.question, options, reponse_lettre:question.reponse, reponse_texte:question.reponseTexte, explication:question.explication, indice:question.indice.join(", ") };
    return Object.keys(values).reduce((text, key) => text.split(`{{${key}}}`).join(String(values[key])), PROMPT_TEMPLATE);
  }
  function setTheme(next) { document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("tcf-theme", next ? "dark" : "light"); }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) { const helper = document.createElement("textarea"); helper.value = text; helper.style.position = "fixed"; helper.style.opacity = "0"; document.body.appendChild(helper); helper.select(); const ok = document.execCommand("copy"); helper.remove(); return ok; }
  function render() {
    const bank = activeQuestions(); const q = bank[index]; const progress = ((index + 1) / bank.length) * 100; const isVisible = showAnswer;
    const results = findResults();
    const searchPanel = `<section class="search-panel"><div class="search-head"><div><p class="eyebrow">Banco completo</p><h2>Buscar en A1, A2, B1 y B2</h2><p>Ignora mayúsculas, minúsculas y acentos.</p></div>${searchTerm ? `<strong>${results.length} ${results.length === 1 ? "resultado" : "resultados"}</strong>` : ""}</div><div class="search-box"><span aria-hidden="true">⌕</span><input id="global-search" type="search" value="${escapeHtml(searchTerm)}" placeholder="Ej.: Je peux passer te chercher vers 8h30" aria-label="Buscar en todas las preguntas">${searchTerm ? `<button id="clear-search" aria-label="Borrar búsqueda">×</button>` : ""}</div>${searchTerm ? `<div class="search-results">${results.length ? results.map((result) => `<button class="search-result" data-result-section="${result.section}" data-result-index="${result.index}"><div><span class="badge">${result.section}</span><strong>Pregunta ${result.question.id}</strong>${result.question.titre ? `<em>${escapeHtml(result.question.titre)}</em>` : ""}</div><p>${escapeHtml(makePreview(result.question))}</p><small>Abrir pregunta →</small></button>`).join("") : `<p class="search-empty">No se encontraron coincidencias. Prueba con menos palabras, una palabra clave o una variante sin artículos.</p>`}</div>` : ""}</section>`;
    const options = ["A", "B", "C", "D"].map((letter) => { const state = isVisible && letter === q.reponse ? "correct" : isVisible && letter === selected ? "wrong" : ""; return `<button class="option ${state}" data-answer="${letter}"><span class="letter">${letter}</span><span>${escapeHtml(q.options[letter])}</span></button>`; }).join("");
    const answer = isVisible ? `<section class="answer"><h3>Réponse correcte : <span>${q.reponse}. ${escapeHtml(q.reponseTexte)}</span></h3><p>${escapeHtml(q.explication).replace(/\n/g,"<br>")}</p>${q.indice.length ? `<p class="label">Indice pédagogique</p><div class="tags">${q.indice.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>` : ""}<button class="prompt-button" id="show-prompt">Générer le prompt d'analyse IA</button>${showPrompt ? `<div class="prompt"><div class="prompt-head"><h3>Prompt de análisis listo</h3><button class="button" id="copy">${copied ? "¡Copiado!" : "Copiar al portapapeles"}</button></div><textarea readonly id="prompt-text">${escapeHtml(promptFor(q, bank.length))}</textarea></div>` : ""}</section>` : "";
    app.innerHTML = `<main class="shell"><header class="top"><div class="title-row"><div><p class="eyebrow">Carnet de l'écoute</p><h1 class="title">Compréhension orale — TCF</h1><div class="section-switch"><button id="section-a1" class="${section === "A1" ? "active" : ""}">A1 · ${TCF_A1_QUESTIONS.length}</button><button id="section-a2" class="${section === "A2" ? "active" : ""}">A2 · ${TCF_A2_QUESTIONS.length}</button><button id="section-b1" class="${section === "B1" ? "active" : ""}">B1 · ${QUESTIONS.length}</button><button id="section-b2" class="${section === "B2" ? "active" : ""}">B2 · ${B2_QUESTIONS.length}</button></div></div><div class="counter"><small>Question</small><br>${q.id} <small>/ ${bank.length}</small></div><button class="theme" id="theme">Modo ${document.documentElement.dataset.theme === "dark" ? "claro" : "oscuro"}</button></div><div class="progress"><div style="width:${progress}%"></div></div></header>${searchPanel}<div class="layout"><aside class="note"><p class="eyebrow">Sesión de práctica · ${section}</p><h2>Escucha la intención, no solo las palabras.</h2><p>Responde antes de consultar la explicación. Cada ejercicio suma una decisión más segura.</p><hr class="divider"><p>Avance: <strong>${index + 1} / ${bank.length}</strong></p></aside><section class="card"><div class="card-header"><span class="badge">${escapeHtml(q.niveau)}</span>${q.titre ? `<p><em>${escapeHtml(q.titre)}</em></p>` : ""}${q.transcription ? `<div class="transcript"><p class="label">Transcription</p>${escapeHtml(q.transcription).replace(/\n/g,"<br>")}</div>` : `<p class="absent">La transcripción no está disponible en el material recibido.</p>`}</div><div class="content">${q.question ? `<h2 class="question">${escapeHtml(q.question)}</h2>` : `<p class="absent">El material fuente no contiene un enunciado escrito para esta entrada. La transcripción y las opciones se conservan literalmente.</p>`}<div class="options">${options}</div><div class="actions"><button class="button" id="answer">${isVisible ? "Masquer la réponse" : "Voir la réponse"}</button>${selected ? `<strong style="color:${selected === q.reponse ? "var(--green)" : "var(--bad)"}">${selected === q.reponse ? "Bonne réponse." : "Révise l’indice, puis réessaie."}</strong>` : ""}</div>${answer}</div></section></div><nav class="navigation"><div class="nav-group"><button class="nav-btn" id="previous" ${index === 0 ? "disabled" : ""}>← Précédente</button><button class="nav-btn primary" id="next" ${index === bank.length - 1 ? "disabled" : ""}>Suivante →</button></div><form class="jump" id="jump"><label for="jump-input">Aller à</label><input id="jump-input" type="number" min="1" max="${bank.length}" value="${q.id}"><span>/ ${bank.length}</span><button class="nav-btn" type="submit">Ir</button></form></nav></main>`;
    document.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => { selected = button.dataset.answer; showAnswer = true; render(); }));
    document.getElementById("answer").addEventListener("click", () => { showAnswer = !showAnswer; render(); });
    document.getElementById("previous").addEventListener("click", () => { index -= 1; selected = null; showAnswer = false; showPrompt = false; render(); });
    document.getElementById("next").addEventListener("click", () => { index += 1; selected = null; showAnswer = false; showPrompt = false; render(); });
    document.getElementById("jump").addEventListener("submit", (event) => { event.preventDefault(); const target = Number(document.getElementById("jump-input").value); const found = bank.findIndex((item) => item.id === target); if (found >= 0) { index = found; selected = null; showAnswer = false; showPrompt = false; render(); } });
    const searchInput = document.getElementById("global-search");
    searchInput.addEventListener("input", (event) => { searchTerm = event.target.value; render(); const field = document.getElementById("global-search"); field.focus(); field.setSelectionRange(searchTerm.length, searchTerm.length); });
    const clearSearch = document.getElementById("clear-search"); if (clearSearch) clearSearch.addEventListener("click", () => { searchTerm = ""; render(); });
    document.querySelectorAll("[data-result-section]").forEach((button) => button.addEventListener("click", () => { section = button.dataset.resultSection; index = Number(button.dataset.resultIndex); selected = null; showAnswer = false; showPrompt = false; searchTerm = ""; history.replaceState(null, "", section === "B1" ? location.pathname : `${location.pathname}?nivel=${section}`); render(); }));
    document.getElementById("section-a1").addEventListener("click", () => { section = "A1"; index = 0; selected = null; showAnswer = false; showPrompt = false; history.replaceState(null, "", `${location.pathname}?nivel=A1`); render(); });
    document.getElementById("section-a2").addEventListener("click", () => { section = "A2"; index = 0; selected = null; showAnswer = false; showPrompt = false; history.replaceState(null, "", `${location.pathname}?nivel=A2`); render(); });
    document.getElementById("section-b1").addEventListener("click", () => { section = "B1"; index = 0; selected = null; showAnswer = false; showPrompt = false; history.replaceState(null, "", location.pathname); render(); });
    document.getElementById("section-b2").addEventListener("click", () => { section = "B2"; index = 0; selected = null; showAnswer = false; showPrompt = false; history.replaceState(null, "", `${location.pathname}?nivel=B2`); render(); });
    document.getElementById("theme").addEventListener("click", () => { setTheme(document.documentElement.dataset.theme !== "dark"); render(); });
    const showPromptButton = document.getElementById("show-prompt"); if (showPromptButton) showPromptButton.addEventListener("click", () => { showPrompt = !showPrompt; render(); });
    const copyButton = document.getElementById("copy"); if (copyButton) copyButton.addEventListener("click", () => copyText(promptFor(q, bank.length)).then((ok) => { if (ok) { copied = true; render(); setTimeout(() => { copied = false; render(); }, 2000); } }));
  }
  const stored = localStorage.getItem("tcf-theme"); setTheme(stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches); render();
})();
