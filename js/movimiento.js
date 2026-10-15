/* Naoj · capa de movimiento (versión 2): contadores, profundidad, demostraciones y perfiles de la demo.
   Todo es opcional: si este archivo no carga, la página se ve y funciona igual. */
(function () {
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fino = matchMedia('(pointer: fine)').matches;
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const visto = (el, cb, opts) => {
    const io = new IntersectionObserver((es) => es.forEach((e) => cb(e.isIntersecting, e.target)), opts || { threshold: 0.35 });
    io.observe(el);
    return io;
  };

  // ── Contadores: suben desde cero la primera vez que se ven
  document.querySelectorAll('[data-count]').forEach((el) => {
    const fin = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0);
    const pinta = (v) => { el.textContent = v.toFixed(dec); };
    if (quieto || !fin) return pinta(fin);
    pinta(0);
    const io = visto(el, (si) => {
      if (!si) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1300;
      const paso = (t) => { const p = Math.min(1, (t - t0) / dur); pinta(fin * ease(p)); if (p < 1) requestAnimationFrame(paso); };
      requestAnimationFrame(paso);
    }, { threshold: 0.6 });
  });

  // ── Portada: profundidad que sigue al puntero (solo con ratón, en pantallas anchas)
  const hero = document.querySelector('.hero'), vis = document.querySelector('.hero-visual');
  if (hero && vis && fino && !quieto) {
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const mover = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      vis.style.setProperty('--px', x.toFixed(3)); vis.style.setProperty('--py', y.toFixed(3));
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.002 ? requestAnimationFrame(mover) : 0;
    };
    hero.addEventListener('pointermove', (e) => {
      if (innerWidth < 1000) return;
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2; ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(mover);
    });
    hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(mover); });
  }

  // ── Funciones: el celular y la demostración se desplazan un poco más que la captura (profundidad)
  const capas = [...document.querySelectorAll('.feat-img .phone, .feat-img .chip')].map((el) => ({ el, k: el.classList.contains('chip') ? 0.1 : 0.06 }));
  if (capas.length && !quieto) {
    let pend = false;
    const actualizar = () => {
      pend = false;
      const vh = innerHeight, activo = innerWidth >= 760;
      capas.forEach(({ el, k }) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const d = activo ? ((r.top + r.height / 2) - vh / 2) * -k : 0;
        el.style.setProperty('--dy', d.toFixed(1) + 'px');
        if (el.classList.contains('phone')) el.style.translate = `0 ${d.toFixed(1)}px`;
      });
    };
    addEventListener('scroll', () => { if (!pend) { pend = true; requestAnimationFrame(actualizar); } }, { passive: true });
    addEventListener('resize', actualizar);
    actualizar();
  }

  // ── Demostración de asistencia: el estado va cambiando como si el maestro marcara
  document.querySelectorAll('.chip-seg').forEach((seg) => {
    const ops = [...seg.children];
    let i = 0, t = 0;
    ops[0].classList.add('on');
    if (quieto) return;
    visto(seg, (si) => {
      clearInterval(t);
      if (si) t = setInterval(() => { ops[i].classList.remove('on'); i = (i + 1) % ops.length; ops[i].classList.add('on'); }, 1500);
    });
  });

  // ── Demostración del examen: el temporizador corre de verdad mientras se ve
  document.querySelectorAll('.chip-timer').forEach((el) => {
    let s = 29 * 60 + 58, t = 0;
    const pinta = () => { el.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
    pinta();
    if (quieto) return;
    visto(el, (si) => { clearInterval(t); if (si) t = setInterval(() => { s = s > 0 ? s - 1 : 30 * 60; pinta(); }, 1000); });
  });

  // ── Luz discreta que sigue al puntero en las tarjetas
  if (fino && !quieto) document.querySelectorAll('.ed, .step-grid li').forEach((c) => {
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // ── Demo: cuatro perfiles con vista previa; la demo real se abre con el perfil elegido
  const tabs = [...document.querySelectorAll('.role')];
  const marco = document.getElementById('demoView'), frame = document.getElementById('demoFrame'), abrir = document.getElementById('demoOpen');
  const poster = marco && marco.querySelector('.demo-poster');
  if (tabs.length && frame && poster) {
    window.NAOJ_rol = 'direccion';
    const lang = () => (document.documentElement.lang === 'en' ? '&lang=en' : '');
    const urlDe = (rol) => `demo/?como=${rol}${lang()}`;
    const shotDe = (prev) => (poster.getAttribute('src') || '').replace(/[^/]+\.jpg/, `${prev}.jpg`);
    frame.addEventListener('load', () => { setTimeout(() => marco.classList.add('cargado'), 1100); });
    const elegir = (tab, foco) => {
      tabs.forEach((t) => { const on = t === tab; t.classList.toggle('on', on); t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
      if (foco) tab.focus();
      const rol = tab.dataset.rol;
      if (rol === window.NAOJ_rol) return;
      window.NAOJ_rol = rol;
      marco.setAttribute('aria-labelledby', tab.id);
      poster.dataset.shot = tab.dataset.prev;
      const src = shotDe(tab.dataset.prev);
      if (src) poster.src = src;
      marco.classList.remove('cargado');
      marco.classList.remove('cambiando'); void marco.offsetWidth; marco.classList.add('cambiando');
      frame.dataset.src = urlDe(rol);
      if (frame.getAttribute('src')) frame.src = urlDe(rol);
      if (abrir) abrir.href = urlDe(rol);
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => elegir(t));
      t.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); elegir(tabs[(i + k + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); elegir(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); elegir(tabs[tabs.length - 1], true); }
      });
    });
  }
})();
