(function () {
  'use strict';

  /* ---------- plan ---------- */
  var START = '2026-10-22', EXAM = '2027-01-24', LAST = '2027-01-14';
  var SIMS = ['2026-11-13', '2026-12-11', '2027-01-08', '2027-01-15'];
  var SIM_SECTIONS = [
    { id: 'co', label: 'Compréhension orale', meta: '39 preguntas · 35 min' },
    { id: 'ce', label: 'Compréhension écrite', meta: '39 preguntas · 60 min' },
    { id: 'ee', label: 'Expression écrite', meta: '3 tareas · 60 min' },
    { id: 'eo', label: 'Expression orale', meta: '3 tareas · 12 min' }
  ];
  var ITEMS = [
    { id: 'co_b1', grp: 'comp', name: 'Oral B1', total: 190, done: 131, deadline: '2026-11-12' },
    { id: 'co_b2', grp: 'comp', name: 'Oral B2', total: 231, done: 62, deadline: '2027-01-07' },
    { id: 'co_c1', grp: 'comp', name: 'Oral C1', total: 146, done: 23, deadline: '2027-01-14', plan: 40 },
    { id: 'ce_a1', grp: 'comp', name: 'Escrita A1', total: 126, done: 38, deadline: '2027-01-14' },
    { id: 'ce_a2', grp: 'comp', name: 'Escrita A2', total: 151, done: 25, deadline: '2027-01-14' },
    { id: 'ce_b1', grp: 'comp', name: 'Escrita B1', total: 271, done: 48, deadline: '2026-12-10' },
    { id: 'ce_b2', grp: 'comp', name: 'Escrita B2', total: 276, done: 51, deadline: '2027-01-07' },
    { id: 'ce_c1', grp: 'comp', name: 'Escrita C1', total: 140, done: 17, deadline: '2027-01-14', plan: 40 },
    { id: 'ee_1', grp: 'ee', name: "Rédaction d'un message", total: 10, done: 1, deadline: LAST },
    { id: 'ee_2', grp: 'ee', name: "Article / lettre formelle", total: 10, done: 0, deadline: LAST },
    { id: 'ee_3', grp: 'ee', name: 'Essai argumentatif', total: 10, done: 0, deadline: LAST },
    { id: 'eo_1', grp: 'eo', name: 'Entretien dirigé', total: 10, done: 1, deadline: LAST },
    { id: 'eo_2', grp: 'eo', name: 'Interaction', total: 10, done: 0, deadline: LAST },
    { id: 'eo_3', grp: 'eo', name: 'Point de vue', total: 10, done: 0, deadline: LAST }
  ];
  var GROUPS = [
    { id: 'comp', label: 'Comprensión' },
    { id: 'ee', label: 'Expresión escrita' },
    { id: 'eo', label: 'Expresión oral' }
  ];
  var COMPLETE = [['Oral A1', 100], ['Oral A2', 138]];

  /* ---------- dates ---------- */
  var MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dk(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function pd(k) { var p = k.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2], 12); }
  function addD(k, n) { var d = pd(k); d.setDate(d.getDate() + n); return dk(d); }
  function wd(k) { return pd(k).getDay(); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function short(k) { var d = pd(k); return d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  function long(k) { var d = pd(k); return cap(DAYS[d.getDay()]) + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var ALL = [];
  for (var k = START; k <= EXAM; k = addD(k, 1)) ALL.push(k);
  function typeOf(k) {
    if (k === EXAM) return 'exam';
    if (SIMS.indexOf(k) >= 0) return 'sim';
    if (wd(k) === 0) return 'rest';
    if (k > LAST) return 'taper';
    return 'study';
  }
  var STUDY = ALL.filter(function (k) { return typeOf(k) === 'study'; });

  /* ---------- schedule: daily goal per item ---------- */
  var GOAL = {}, CUM = {};
  ITEMS.forEach(function (it) { GOAL[it.id] = {}; CUM[it.id] = {}; });
  ITEMS.filter(function (i) { return i.grp === 'comp'; }).forEach(function (it) {
    var rem = it.plan != null ? it.plan : it.total - it.done;
    var ds = STUDY.filter(function (k) { return k <= it.deadline; });
    var prev = 0;
    ds.forEach(function (k, i) {
      var t = Math.round(rem * (i + 1) / ds.length);
      GOAL[it.id][k] = t - prev;
      prev = t;
    });
  });
  [['ee', [2, 4, 6]], ['eo', [1, 3, 5]]].forEach(function (g) {
    var items = ITEMS.filter(function (i) { return i.grp === g[0]; });
    var left = {};
    items.forEach(function (i) { left[i.id] = i.total - i.done; });
    var c = 0;
    STUDY.forEach(function (k) {
      if (g[1].indexOf(wd(k)) < 0) return;
      for (var t = 0; t < items.length; t++) {
        var idx = (c + t) % items.length, it = items[idx];
        if (left[it.id] > 0) { GOAL[it.id][k] = 1; left[it.id]--; c = (idx + 1) % items.length; break; }
      }
    });
  });
  ITEMS.forEach(function (it) {
    var run = 0;
    ALL.forEach(function (k) { run += GOAL[it.id][k] || 0; CUM[it.id][k] = run; });
  });
  function goal(id, k) { return GOAL[id][k] || 0; }

  /* ---------- estado y sincronización en Hostinger ---------- */
  var state = { days: {} };
  var serverState = { days: {}, revision: -1 };
  var pending = [], saving = false, refreshing = false, timer = null;
  var inFlightIds = new Set();
  var syncMode = 'loading', denied = false, localAvailable = true;
  var TODAY = dk(new Date());
  function clamp(k) { return k < START ? START : (k > EXAM ? EXAM : k); }
  var view = clamp(TODAY), tab = 'hoy', othersOpen = false;
  var accessKey = '';
  var fragment = new URLSearchParams(location.hash.slice(1));
  var incoming = fragment.get('key');
  try { accessKey = localStorage.getItem('tcf-hostinger-key') || ''; } catch (e) { localAvailable = false; }
  if (incoming && /^[a-f0-9]{64}$/.test(incoming)) {
    accessKey = incoming;
    try { localStorage.setItem('tcf-hostinger-key', accessKey); } catch (e) { localAvailable = false; }
  }
  if (fragment.has('key')) history.replaceState(null, '', location.pathname + location.search);
  if (!/^[a-f0-9]{64}$/.test(accessKey)) accessKey = '';
  var cacheKey = 'tcf-hostinger-plan-20261022-' + accessKey.slice(0, 16);
  try { var t0 = localStorage.getItem('tcf-tab-v2'); if (t0 === 'hoy' || t0 === 'progreso') tab = t0; } catch (e) {}

  function blank() { return { c: {}, sim: {}, res: {}, note: '' }; }
  function norm(d) {
    var o = blank(); d = d || {};
    ITEMS.forEach(function (it) { var n = Number((d.c || {})[it.id]); if (Number.isFinite(n) && n > 0) o.c[it.id] = Math.floor(n); });
    SIM_SECTIONS.forEach(function (s) {
      o.sim[s.id] = !!(d.sim && d.sim[s.id]);
      o.res[s.id] = String((d.res && d.res[s.id]) || '');
    });
    o.note = String(d.note || ''); return o;
  }
  function day(k) { if (!state.days[k]) state.days[k] = norm(null); return state.days[k]; }
  function cnt(id, k) { var d = state.days[k]; return (d && d.c[id]) || 0; }
  function doneThrough(id, k) {
    var s = 0; Object.keys(state.days).forEach(function (dd) { if (dd <= k) s += state.days[dd].c[id] || 0; }); return s;
  }
  function doneAll(id) { return doneThrough(id, '9999-12-31'); }
  function item(id) { return ITEMS.filter(function (i) { return i.id === id; })[0]; }
  function faltan(it) { return Math.max(0, it.total - it.done - doneAll(it.id)); }
  function behind(it, k) {
    var prev = addD(k, -1); if (prev < START) return 0; if (prev > EXAM) prev = EXAM;
    return CUM[it.id][prev] - doneThrough(it.id, prev);
  }
  function setSync(s) {
    syncMode = s;
    var el = document.getElementById('sync'); if (!el) return;
    var txt = { loading: 'Conectando…', ok: 'Guardado en Hostinger', saving: 'Guardando…', offline: 'Sin conexión · pendiente', error: 'Pendiente · reintentando', access: 'Enlace privado requerido' }[s] || '';
    el.textContent = txt; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite');
    el.className = 'sync' + (s === 'error' || s === 'offline' ? ' err' : '');
  }
  function safeRender() {
    var a = document.activeElement;
    if (!(a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA'))) render();
    else setSync(syncMode);
  }
  function applyOperation(op) {
    var d = day(op.date);
    if (op.type === 'count') d.c[op.item] = Math.max(0, (d.c[op.item] || 0) + op.value);
    else if (op.type === 'sim') d.sim[op.item] = op.value;
    else if (op.type === 'res') d.res[op.item] = op.value;
    else if (op.type === 'note') d.note = op.value;
  }
  function rebuild() {
    state.days = {};
    Object.keys(serverState.days).forEach(function (k) { if (k >= START && k <= EXAM) state.days[k] = norm(serverState.days[k]); });
    pending.forEach(applyOperation);
  }
  function persist() {
    if (!accessKey) return;
    try { localStorage.setItem(cacheKey, JSON.stringify({ snapshot: serverState, pending: pending })); }
    catch (e) { localAvailable = false; document.getElementById('storage-warning').hidden = false; }
  }
  function loadCache() {
    try {
      var cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (cached && cached.snapshot && cached.snapshot.days) {
        serverState = cached.snapshot;
        pending = Array.isArray(cached.pending) ? cached.pending : [];
        rebuild();
      }
    } catch (e) { localAvailable = false; }
  }
  function acceptSnapshot(data) {
    if (!data || !data.days || !Number.isInteger(data.revision)) throw new Error('Respuesta inválida');
    var acknowledged = new Set(Array.isArray(data.appliedIds) ? data.appliedIds : []);
    pending = pending.filter(function (op) { return !acknowledged.has(op.id); });
    if (data.revision >= serverState.revision) serverState = { days: data.days, revision: data.revision };
    rebuild(); persist();
  }
  function mark(k, change) {
    change.date = k;
    change.id = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + '-' + Math.random().toString(36).slice(2) + '-' + Math.random().toString(36).slice(2);
    if (change.type !== 'count') pending = pending.filter(function (op) {
      return inFlightIds.has(op.id) || op.date !== k || op.type !== change.type || op.item !== change.item;
    });
    pending.push(change); persist(); setSync(navigator.onLine ? 'saving' : 'offline');
    clearTimeout(timer); timer = setTimeout(flush, 400);
  }
  function nextBatch() {
    var batch = [];
    for (var i = 0; i < pending.length && batch.length < 200; i++) {
      var candidate = batch.concat([pending[i]]);
      if (new Blob([JSON.stringify({ operations: candidate })]).size > 200000) break;
      batch = candidate;
    }
    return batch;
  }
  async function request(action, body, keepalive) {
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 15000);
    try {
      var r = await fetch('api.php?a=' + action, {
        method: body ? 'POST' : 'GET', cache: 'no-store', credentials: 'omit',
        headers: { 'X-TCF-Key': accessKey, 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal, keepalive: !!keepalive
      });
      if (r.status === 401 || r.status === 403) { denied = true; throw new Error('Acceso no válido'); }
      if (!r.ok) throw new Error('No se pudo sincronizar');
      return await r.json();
    } finally { clearTimeout(timeout); }
  }
  function retry() {
    clearTimeout(timer);
    if (!denied && accessKey) timer = setTimeout(function () { pending.length ? flush() : refresh(); }, 10000);
  }
  async function flush() {
    if (!accessKey || denied || saving || refreshing || !pending.length) return;
    if (!navigator.onLine) { setSync('offline'); retry(); return; }
    saving = true; setSync('saving');
    var batch = nextBatch(), ids = new Set(batch.map(function (o) { return o.id; }));
    inFlightIds = ids;
    try {
      var data = await request('save', { operations: batch });
      if (!data || !data.days || !Number.isInteger(data.revision) || !Array.isArray(data.appliedIds)) throw new Error('Respuesta inválida');
      acceptSnapshot(data); setSync(pending.length ? 'saving' : 'ok'); safeRender();
    } catch (e) {
      setSync(denied ? 'access' : (navigator.onLine ? 'error' : 'offline')); persist();
      if (denied) render(); else retry();
    } finally {
      saving = false; inFlightIds = new Set();
      if (pending.length && !denied && syncMode === 'saving') timer = setTimeout(flush, 100);
    }
  }
  async function refresh() {
    if (!accessKey || denied || saving || refreshing) return;
    if (!navigator.onLine) { setSync('offline'); retry(); return; }
    refreshing = true;
    try {
      acceptSnapshot(await request('state'));
      var now = dk(new Date());
      if (now !== TODAY) { if (view === clamp(TODAY)) view = clamp(now); TODAY = now; }
      setSync(pending.length ? 'saving' : 'ok'); safeRender();
    } catch (e) {
      setSync(denied ? 'access' : 'error'); if (denied) render(); else retry();
    } finally { refreshing = false; }
    if (pending.length && !denied) flush();
  }
  function init() {
    if (!accessKey) { setSync('access'); render(); return; }
    loadCache();
    document.getElementById('storage-warning').hidden = localAvailable;
    render(); refresh();
    setInterval(function () { if (!document.hidden) refresh(); }, 15000);
  }
  window.addEventListener('online', function () { refresh(); });
  window.addEventListener('offline', function () { setSync('offline'); });
  window.addEventListener('focus', function () { refresh(); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refresh(); else persist(); });
  window.addEventListener('pagehide', function () {
    persist();
    if (!accessKey || denied || !pending.length || !navigator.onLine) return;
    var batch = nextBatch(), body = JSON.stringify({ operations: batch });
    if (new Blob([body]).size < 60000) {
      // Mantener la cola hasta recibir confirmación normal; los IDs evitan duplicados al volver.
      fetch('api.php?a=save', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-TCF-Key': accessKey }, body: body, credentials: 'omit', keepalive: true }).catch(function () {});
    }
  });
  var share = document.getElementById('share-link'), linkPanel = document.getElementById('link-panel');
  share.addEventListener('click', function () {
    linkPanel.hidden = !linkPanel.hidden;
    document.getElementById('private-link').value = location.origin + '/avance/#key=' + accessKey;
  });
  document.getElementById('copy-link').addEventListener('click', async function () {
    var input = document.getElementById('private-link'), button = this;
    try { await navigator.clipboard.writeText(input.value); button.textContent = 'Enlace copiado'; }
    catch (e) { input.focus(); input.select(); button.textContent = 'Selecciona y copia el enlace'; }
  });

  /* ---------- views ---------- */
  function dayGoalTotals(k) {
    var G = 0, D = 0;
    ITEMS.forEach(function (it) { var g = goal(it.id, k); G += g; D += Math.min(cnt(it.id, k), g); });
    return { G: G, D: D };
  }
  function row(it, k) {
    var g = goal(it.id, k), n = cnt(it.id, k), b = behind(it, k);
    var chips = '';
    if (g > 0 && n >= g) chips += '<span class="chip ok">Meta cumplida' + (n > g ? ' · +' + (n - g) + ' extra' : '') + '</span>';
    if (b > 0 && k <= LAST) chips += '<span class="chip warn">' + b + ' de atraso</span>';
    var sub = g > 0 ? 'hoy ' + n + ' de ' + g : 'hoy ' + n;
    return '<div class="item' + (g > 0 && n >= g ? ' met' : '') + '">' +
      '<div style="min-width:0"><h3>' + esc(it.name) + '</h3><p>' + sub + ' · faltan ' + faltan(it) + ' en total</p>' +
      (chips ? '<div class="chips">' + chips + '</div>' : '') + '</div>' +
      '<div class="step">' +
      '<button type="button" class="minus" data-act="dec" data-id="' + it.id + '" aria-label="Restar uno a ' + esc(it.name) + '">−</button>' +
      '<input class="num" type="number" inputmode="numeric" min="0" max="10000" value="' + n + '" data-act="set" data-id="' + it.id + '" aria-label="Cantidad de hoy en ' + esc(it.name) + '">' +
      '<button type="button" class="plus" data-act="inc" data-id="' + it.id + '" aria-label="Sumar uno a ' + esc(it.name) + '">+</button>' +
      '</div></div>';
  }
  function dateBar(k) {
    var t = typeOf(k);
    var sub = k === TODAY ? 'hoy' : (k < TODAY ? 'pasado' : 'próximo');
    return '<div class="datebar">' +
      '<button type="button" data-act="prev" aria-label="Día anterior"' + (k <= START ? ' disabled' : '') + '>‹</button>' +
      '<button type="button" data-act="today" class="when" aria-label="Ir a hoy">' + long(k) + '<small>' + sub + '</small></button>' +
      '<button type="button" data-act="next" aria-label="Día siguiente"' + (k >= EXAM ? ' disabled' : '') + '>›</button></div>';
  }
  function dayChip(k) {
    var t = typeOf(k);
    if (t === 'sim') return '<span class="chip accent">Simulacro ' + (SIMS.indexOf(k) + 1) + ' de 4</span>';
    if (t === 'rest') return '<span class="chip">Descanso</span>';
    if (t === 'taper') return '<span class="chip">Repaso ligero</span>';
    if (t === 'exam') return '<span class="chip accent">Día del examen</span>';
    return '<span class="chip">Día de estudio</span>';
  }
  function viewHoy() {
    var k = view, t = typeOf(k), h = dateBar(k);
    if (TODAY < START) h += '<div class="note">Tu registro empieza el ' + long(START).toLowerCase() + '. Puedes revisar cómo queda cada día con las flechas.</div>';
    if (t === 'sim') return h + viewSim(k);
    var tot = dayGoalTotals(k), G = tot.G, D = tot.D;
    var pct = G ? Math.min(100, Math.round(D / G * 100)) : 0;
    var head;
    if (G > 0) head = '<div class="big"><b>' + D + '</b> de ' + G + ' · faltan ' + (G - D) + '</div>';
    else if (t === 'rest') head = '<div class="big"><span class="msg">Día de descanso</span>Si quieres, repasa los errores de la semana.</div>';
    else if (t === 'taper') head = '<div class="big"><span class="msg">Repaso ligero</span>Sin metas: revisa errores y practica la expresión oral.</div>';
    else if (t === 'exam') head = '<div class="big"><span class="msg">Examen</span>Descansa bien, revisa tus documentos y llega con tiempo.</div>';
    else head = '<div class="big"><span class="msg">Meta cumplida</span>Ya terminaste todo lo planeado para este día.</div>';
    var summary = '<div class="summary">' + head + (G ? '<div class="bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></div>' : '') +
      '<div class="chips">' + dayChip(k) + '<span class="sync' + (syncMode === 'error' ? ' err' : '') + '" id="sync"></span></div></div>';
    var out = h + summary, rest = [];
    GROUPS.forEach(function (g) {
      var its = ITEMS.filter(function (i) { return i.grp === g.id; });
      var main = its.filter(function (i) { return goal(i.id, k) > 0; });
      its.forEach(function (i) { if (goal(i.id, k) === 0) rest.push(i); });
      if (main.length) out += '<section class="group"><h2>' + g.label + '</h2>' + main.map(function (i) { return row(i, k); }).join('') + '</section>';
    });
    if (rest.length) {
      var anyCnt = rest.some(function (i) { return cnt(i.id, k) > 0; });
      out += '<details class="others" id="others"' + (othersOpen || anyCnt ? ' open' : '') + '><summary>' + (G > 0 ? 'Otras prácticas (sin meta hoy)' : 'Registrar práctica') + '</summary>' +
        '<div class="group">' + rest.map(function (i) { return row(i, k); }).join('') + '</div></details>';
    }
    return out;
  }
  function viewSim(k) {
    var d = day(k), n = SIMS.indexOf(k) + 1;
    var done = SIM_SECTIONS.filter(function (s) { return d.sim[s.id]; }).length;
    var secs = SIM_SECTIONS.map(function (s) {
      return '<div class="sec"><label><input type="checkbox" data-act="simchk" data-sec="' + s.id + '"' + (d.sim[s.id] ? ' checked' : '') + ' aria-label="' + s.label + ' terminada">' +
        '<span class="t">' + s.label + '<small>' + s.meta + '</small></span></label>' +
        '<input class="res" type="text" maxlength="2000" id="res-' + s.id + '" data-act="res" data-sec="' + s.id + '" placeholder="Resultado o nivel obtenido" value="' + esc(d.res[s.id]) + '" aria-label="Resultado de ' + s.label + '"></div>';
    }).join('');
    return '<div class="summary"><div class="big"><b>' + done + '</b> de 4 secciones</div>' +
      '<div class="bar"><i style="width:' + (done * 25) + '%"></i></div>' +
      '<div class="chips">' + dayChip(k) + '<span class="sync" id="sync"></span></div></div>' +
      '<div class="sim"><h2>Simulacro completo ' + n + '</h2>' +
      '<p class="lead">Hazlo seguido, con cronómetro y sin pausas largas. Hoy no hay metas de práctica: este día es solo para el simulacro.</p>' +
      secs +
      '<div class="lbl">Qué fallé y qué mejorar</div>' +
      '<textarea maxlength="20000" id="note" data-act="note" aria-label="Notas del simulacro">' + esc(d.note) + '</textarea></div>';
  }

  function dayStatus(k) {
    var t = typeOf(k);
    if (t === 'exam') return 'exam';
    if (t === 'sim') {
      var d = state.days[k];
      return d && SIM_SECTIONS.every(function (s) { return d.sim[s.id]; }) ? 'sim full' : 'sim';
    }
    if (t !== 'study') return 'off';
    var tot = dayGoalTotals(k);
    if (!tot.G) return 'off';
    if (k > TODAY) return '';
    if (tot.D >= tot.G) return 'full';
    if (tot.D > 0) return 'part';
    return k < TODAY ? 'miss' : '';
  }
  function viewProg() {
    var from = TODAY < START ? START : TODAY;
    var daysLeft = Math.max(0, Math.round((pd(EXAM) - pd(TODAY)) / 864e5));
    var studyLeft = STUDY.filter(function (k) { return k >= from; }).length;
    var qLeft = 0, tLeft = 0;
    ITEMS.forEach(function (i) { if (i.grp === 'comp') qLeft += faltan(i); else tLeft += faltan(i); });
    var simsDone = SIMS.filter(function (k) { var d = state.days[k]; return d && SIM_SECTIONS.every(function (s) { return d.sim[s.id]; }); }).length;

    var out = '<div class="summary"><div class="big"><span class="msg">Progreso</span>Examen el ' + long(EXAM).toLowerCase() + '</div>' +
      '<div class="chips"><span class="sync" id="sync" style="margin-left:0"></span></div></div>';

    out += '<section class="card"><h2>Cuenta regresiva</h2><div class="kpis">' +
      '<div class="kpi"><b>' + daysLeft + '</b><span>días al examen</span></div>' +
      '<div class="kpi"><b>' + studyLeft + '</b><span>días de estudio</span></div>' +
      '<div class="kpi"><b>' + simsDone + '/4</b><span>simulacros</span></div></div>' +
      '<div class="kpis"><div class="kpi"><b>' + qLeft + '</b><span>preguntas por hacer</span></div>' +
      '<div class="kpi"><b>' + tLeft + '</b><span>tareas de expresión</span></div></div></section>';

    // heatmap
    var first = START, off = (wd(first) + 6) % 7;
    var gridStart = addD(first, -off);
    var cells = '<div></div>' + ['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(function (x) { return '<div class="hd">' + x + '</div>'; }).join('');
    for (var w = gridStart; w <= EXAM; w = addD(w, 7)) {
      cells += '<div class="wk">' + short(w) + '</div>';
      for (var i = 0; i < 7; i++) {
        var kk = addD(w, i);
        if (kk < START || kk > EXAM) { cells += '<div class="cell blank"></div>'; continue; }
        var st = dayStatus(kk), lab = typeOf(kk) === 'sim' ? 'S' : (typeOf(kk) === 'exam' ? 'E' : pd(kk).getDate());
        cells += '<button type="button" class="cell ' + st + (kk === TODAY ? ' today' : '') + '" data-act="goto" data-k="' + kk + '" aria-label="' + long(kk) + '">' + lab + '</button>';
      }
    }
    out += '<section class="card"><h2>Calendario del plan</h2><div class="heat">' + cells + '</div>' +
      '<div class="legend"><span class="l-full">Meta cumplida</span><span class="l-part">Parcial</span><span class="l-miss">Sin registro</span><span class="l-sim">Simulacro (S)</span></div></section>';

    // simulacros
    out += '<section class="card"><h2>Simulacros (viernes)</h2>' + SIMS.map(function (k, i) {
      var d = state.days[k], n = d ? SIM_SECTIONS.filter(function (s) { return d.sim[s.id]; }).length : 0;
      var stt = n === 4 ? 'Hecho' : (k === TODAY ? 'Hoy' : (k < TODAY ? (n ? n + ' de 4 secciones' : 'Sin registrar') : 'Pendiente'));
      return '<button type="button" class="simrow" data-act="goto" data-k="' + k + '"><span><b>Simulacro ' + (i + 1) + '</b><small>' + long(k) + '</small></span><span class="chip' + (n === 4 ? ' ok' : '') + '">' + stt + '</span></button>';
    }).join('') + '</section>';

    // per item progress
    var prog = '';
    GROUPS.forEach(function (g) {
      prog += '<h2 style="margin-top:6px">' + g.label + '</h2>';
      ITEMS.filter(function (i) { return i.grp === g.id; }).forEach(function (it) {
        var dn = Math.min(it.total, it.done + doneAll(it.id)), p = Math.round(dn / it.total * 100);
        var b = behind(it, TODAY < START ? START : (TODAY > EXAM ? EXAM : TODAY));
        var chip = TODAY < START ? '' : (b > 0 ? '<span class="chip warn">' + b + ' de atraso</span>' : (b < 0 ? '<span class="chip ok">' + (-b) + ' adelante</span>' : '<span class="chip ok">Al día</span>'));
        prog += '<div class="prog"><div class="top"><b>' + esc(it.name) + '</b><span>' + dn + ' de ' + it.total + ' · ' + p + '%</span></div>' +
          '<div class="bar"><i style="width:' + p + '%"></i></div>' +
          '<div class="meta"><span>' + (it.plan != null ? 'Meta reducida: ' + it.plan + ' preguntas hasta el ' : 'Terminar antes del ') + short(it.deadline) + '</span>' + chip + '</div></div>';
      });
    });
    COMPLETE.forEach(function (c) {
      prog += '<div class="prog done"><div class="top"><b>' + c[0] + '</b><span>' + c[1] + ' de ' + c[1] + ' · 100%</span></div><div class="bar"><i style="width:100%"></i></div></div>';
    });
    out += '<section class="card"><h2>Avance por sección</h2>' + prog + '</section>';
    return out;
  }

  /* ---------- render + events ---------- */
  var app = document.getElementById('app');
  function render() {
    var authorized = !!accessKey && !denied;
    document.querySelector('.tabs').hidden = !authorized;
    document.getElementById('share-link').hidden = !authorized;
    if (!authorized) {
      document.getElementById('link-panel').hidden = true;
      app.innerHTML = '<section class="card"><h2>Mi avance · TCF Canada</h2><div class="big"><span class="msg">Tu registro personal</span></div><p class="access-note">' + (denied ? 'No pudimos verificar tu acceso. Abre otra vez tu enlace privado original.' : 'Abre tu enlace personal privado una vez en este navegador. Después podrás entrar desde el botón “Mi avance” sin contraseña.') + '</p><p class="access-note">Tu registro no se comparte con los demás visitantes del portal.</p></section>';
      return;
    }
    app.innerHTML = tab === 'hoy' ? viewHoy() : viewProg();
    document.getElementById('tab-hoy').setAttribute('aria-current', tab === 'hoy' ? 'page' : 'false');
    document.getElementById('tab-progreso').setAttribute('aria-current', tab === 'progreso' ? 'page' : 'false');
    setSync(syncMode);
  }
  function setCount(id, k, v) {
    v = Math.max(0, Math.min(10000, Math.floor(Number(v) || 0)));
    var d = day(k), previous = d.c[id] || 0;
    if (previous === v) { render(); return; }
    if (v) d.c[id] = v; else delete d.c[id];
    mark(k, { type: 'count', item: id, value: v - previous }); render();
  }
  function toTop() { window.scrollTo(0, 0); }

  document.addEventListener('click', function (e) {
    var tb = e.target.closest('[data-tab]');
    if (tb) { tab = tb.getAttribute('data-tab'); try { localStorage.setItem('tcf-tab-v2', tab); } catch (x) {} render(); toTop(); return; }
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act'), id = el.getAttribute('data-id');
    if (act === 'prev') { view = clamp(addD(view, -1)); render(); }
    else if (act === 'next') { view = clamp(addD(view, 1)); render(); }
    else if (act === 'today') { view = clamp(TODAY); render(); }
    else if (act === 'inc') setCount(id, view, cnt(id, view) + 1);
    else if (act === 'dec') setCount(id, view, cnt(id, view) - 1);
    else if (act === 'goto') { view = el.getAttribute('data-k'); tab = 'hoy'; try { localStorage.setItem('tcf-tab-v2', tab); } catch (x) {} render(); toTop(); }
  });
  document.addEventListener('change', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    if (act === 'set') setCount(el.getAttribute('data-id'), view, el.value);
    else if (act === 'simchk') { day(view).sim[el.getAttribute('data-sec')] = el.checked; mark(view, { type: 'sim', item: el.getAttribute('data-sec'), value: el.checked }); render(); }
  });
  document.addEventListener('input', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    if (act === 'res') { day(view).res[el.getAttribute('data-sec')] = el.value; mark(view, { type: 'res', item: el.getAttribute('data-sec'), value: el.value }); }
    else if (act === 'note') { day(view).note = el.value; mark(view, { type: 'note', value: el.value }); }
  });
  document.addEventListener('toggle', function (e) {
    if (e.target && e.target.id === 'others') othersOpen = e.target.open;
  }, true);

  render();
  init();
})();
