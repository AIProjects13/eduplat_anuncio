/* Naoj · página-anuncio: idioma ES/EN, capturas, WhatsApp, animaciones, galería y demo. */
(function () {
  document.documentElement.classList.add('js');
  const WA = '50258253416';
  // Idiomas con juego de capturas propio; los demás usan las capturas en español.
  const SHOT_LANGS = ['es'];
  const SHOTS_V = '202610152';   // súbelo al regenerar las capturas

  // ── Textos en inglés (el español está escrito en el HTML)
  const EN = {
    'meta.desc': 'Naoj is the platform for schools: weighted grades that calculate themselves, attendance, notices with read confirmation, messages, calendar, readings and online exams, on desktop and mobile.',
    'skip': 'Skip to content', 'nav.aria': 'Main',
    'nav.features': 'Features', 'nav.gallery': 'Gallery', 'nav.demo': 'Demo', 'nav.editions': 'Editions', 'nav.faq': 'FAQ',
    'cta.demo': 'Get a demo', 'cta.try': 'Try it now', 'cta.whatsapp': 'Get a quote on WhatsApp', 'cta.whatsapp2': 'Message us on WhatsApp',
    'hero.eyebrow': 'New · Platform for schools',
    'hero.title': 'The whole school up to date, and every family too.',
    'hero.sub': 'Naoj brings together what today lives in notebooks, loose files and chat groups: weighted grades that calculate themselves, attendance in a minute, notices families confirm, messages, calendar, readings and online exams. On computers and phones.',
    'hero.maya': 'means “wisdom” in the Mayan language.',
    'specs.title': 'Spec sheet', 'specs.roles': 'profiles: administration, teachers, students and families', 'specs.questions': 'question types in online exams',
    'specs.views': 'calendar views: month, week, day and list', 'specs.att': 'attendance states: present, late, absent and excused',
    'specs.formulas': 'formulas to write: weighted averages calculate themselves', 'specs.history': 'history per grade: who changed it, when and why',
    'specs.session': 'and the session closes itself when idle', 'specs.mobile': 'fully functional on mobile',
    'feat.kicker': 'Standard equipment', 'feat.title': 'Everything a school needs to stay up to date.',
    'f1.tag': 'Grades', 'f1.title': 'Weighted grades, no formulas.',
    'f1.text': 'Each teacher sets up units and assessments with their weight. Type the grade and Naoj calculates the unit average, the final grade and whether the student passes. If the work came in late, it applies the deduction the teacher defined.',
    'f1.b1': 'Units and assessments with their percentage', 'f1.b2': 'Late-submission deduction, chosen by the teacher', 'f1.b3': 'Every correction asks for a reason and is logged',
    'f2.tag': 'Attendance', 'f2.title': 'Today’s attendance, in a minute.',
    'f2.text': 'Mark everyone present in one tap and change only who was late or absent. From the computer or from a phone, in the classroom. Percentages per student, course and grade update themselves.',
    'f2.b1': 'Present, late, absent or excused', 'f2.b2': 'Everyone present in one tap', 'f2.b3': 'Attendance per student, course and grade',
    'f3.tag': 'Communication', 'f3.title': 'Every notice arrives. And you know who read it.',
    'f3.text': 'Post news for the whole school, a grade or a course. Mark the important ones as mandatory and see which families have confirmed. Teachers, students and families write to each other privately, and the administration can see everything.',
    'f3.b1': 'Mandatory notices with read confirmation', 'f3.b2': 'Private messages between teachers, students and families', 'f3.b3': 'Teachers can mute a conversation, stating the reason',
    'f4.tag': 'Calendar & meetings', 'f4.title': 'The whole school calendar, in one place.',
    'f4.text': 'School activities, tutoring for specific students, parent meetings and the due date of every assignment, in month, week, day and list views. Families confirm the meeting from their phone.',
    'f4.b1': 'Events for the school, a grade or specific students', 'f4.b2': 'Parent meetings, with their confirmation', 'f4.b3': 'Assignment and exam due dates, automatically',
    'f5.tag': 'Online exams', 'f5.title': 'Exams that grade themselves.',
    'f5.text': 'Teachers build the exam and decide everything: schedule, time limit, attempts, random order and which grade counts. On submitting, students see their result and the correct answers, unless there are open-ended questions the teacher reviews by hand.',
    'f5.b1': 'Single choice, multiple choice, true or false, short answer and open-ended', 'f5.b2': 'Timer and attempts chosen by the teacher', 'f5.b3': 'The grade goes straight into the gradebook',
    'f6.tag': 'Families & security', 'f6.title': 'Families up to date, without having to ask.',
    'f6.text': 'Each parent sees their children’s grades, attendance, pending work and notices, even with several children at the school. Everyone signs in with their own user, sees only what concerns them, and the session closes itself when idle.',
    'f6.b1': 'One login for all their children', 'f6.b2': 'What each child has pending, in view on sign-in', 'f6.b3': 'Sign in with their own username and password',
    'alt.grades': 'Gradebook with weighted grades', 'alt.att': 'Taking today’s attendance', 'alt.attPhone': 'Attendance on a phone', 'alt.wall': 'News wall with mandatory notices',
    'alt.msgPhone': 'Messages between a parent and a teacher', 'alt.cal': 'Monthly school calendar', 'alt.exam': 'Result of an online exam', 'alt.examPhone': 'Online exam with a timer on a phone',
    'alt.family': 'A student’s academic progress, as seen by her father', 'alt.familyPhone': 'A parent’s home screen on a phone',
    'gal.kicker': 'Gallery', 'gal.title': 'Take a look inside.', 'gal.prev': 'Previous', 'gal.next': 'Next', 'gal.aria': 'Naoj screenshots', 'gal.hint': 'Swipe the images or use the arrows below.',
    'gal.c1': 'Administration overview', 'gal.c2': 'Every grade at a glance', 'gal.c3': 'The student, on her phone', 'gal.c4': 'Teacher overview, with students at risk',
    'gal.c5': 'Messages with families', 'gal.c6': 'Attendance from the classroom', 'gal.c7': 'Results of an online exam', 'gal.c8': 'Weekly calendar', 'gal.c9': 'Student home screen',
    'demo.kicker': 'Test drive', 'demo.title': 'Try it now. No sign-up.',
    'demo.sub': 'A sample school with 48 students, 4 teachers and their families. Switch between Administration, Teacher, Student and Parent from the bar at the top: enter grades, take attendance, answer the online exam. Nothing you do is saved. The demo is in Spanish.',
    'demo.iframe': 'Naoj interactive demo', 'demo.open': 'Open the demo full screen',
    'ed.kicker': 'Editions', 'ed.title': 'Choose the edition that fits your school.', 'ed.quote': 'Get a quote', 'ed.popular': 'Recommended',
    'ed.e1': 'Essential', 'ed.e1for': 'To organize academics from day one.', 'ed.e1b1': 'Gradebook with weighted grades', 'ed.e1b2': 'Attendance by course and day',
    'ed.e1b3': 'School news wall', 'ed.e1b4': 'Messages between teachers and families',
    'ed.e2': 'Professional', 'ed.e2for': 'For schools that want everything in one place.', 'ed.e2b1': 'Everything in Essential', 'ed.e2b2': 'School calendar and parent meetings',
    'ed.e2b3': 'Support material and readings with page-by-page progress', 'ed.e2b4': 'Online exams that grade themselves', 'ed.e2b5': 'Grade-level view for the administration',
    'ed.e3': 'Tailored', 'ed.e3for': 'For schools with several campuses or their own rules.', 'ed.e3b1': 'Everything in Professional', 'ed.e3b2': 'Several campuses',
    'ed.e3b3': 'Adjustments to your own rules', 'ed.e3b4': 'Migration of your current data', 'ed.e3b5': 'Training for your staff',
    'ed.note': 'No one-size-fits-all packages: the price depends on the scope, and you get it in writing before we start.',
    'ind.kicker': 'Built for schools', 'ind.title': 'From loose files to a school that knows everything.',
    'ind.text': 'A tutoring center kept grades, attendance and notices to families in loose files and messages. Today every teacher enters grades in Naoj, the administration sees every grade level at a glance and every family knows how their child is doing without having to ask.',
    'ind.c1': 'Private schools', 'ind.c2': 'Bilingual schools', 'ind.c3': 'Institutes', 'ind.c4': 'Tutoring centers', 'ind.c5': 'Academies', 'ind.c6': 'College prep',
    'ind.b': 'Before', 'ind.b1': 'Grades in loose files, notices nobody confirmed and parents who found out at the end of the unit.',
    'ind.a': 'With Naoj', 'ind.a1': 'Grades, attendance and notices in one place, and every family up to date from their phone.',
    'st.kicker': 'How to start', 'st.title': 'Three steps, with someone by your side.',
    'st.s1': 'Message us', 'st.s1t': 'Tell us how your school works today in a WhatsApp message. The first conversation is free.',
    'st.s2': 'We set it up', 'st.s2t': 'We load your grade levels, courses, teachers and students. You get scope, price and timeline in writing.',
    'st.s3': 'Your school uses it', 'st.s3t': 'We train the administration and teachers, and support the launch with families.',
    'faq.kicker': 'FAQ', 'faq.title': 'What everyone asks.',
    'q1': 'Do we need to install anything?', 'a1': 'No. Naoj runs in the browser on computers and phones. Everyone signs in with their own username and password.',
    'q2': 'Is student data safe?', 'a2': 'Everyone signs in with their own user and sees only what concerns them: teachers, their courses; families, their children. The session closes itself after 30 idle minutes and every grade change is logged with its author, time and reason.',
    'q3': 'Does it work on phones?', 'a3': 'Yes, fully: teachers take attendance in the classroom, students answer exams and families check grades and notices from their phone.',
    'q4': 'Do parents need anything special?', 'a4': 'Just an email address. The school creates their access and, with a single user, they see all their children.',
    'q5': 'Does it fit the way we grade?', 'a5': 'Yes. Each course is split into units with their percentage, each assessment has its weight and teachers decide whether to deduct for late work.',
    'q6': 'Can we bring the data we already have?', 'a6': 'Yes. In the Tailored edition we move your current students, courses and grades into Naoj.',
    'q7': 'How much does it cost?', 'a7': 'It depends on the edition and what needs adapting. Message us and in the first conversation we give you a price range, free of charge.',
    'final.title': 'Keep the whole school up to date.', 'final.text': 'Tell us how your school works today and we’ll show you Naoj with your own grade levels and courses.',
    'ftr.by': 'A product of', 'ftr.rights': 'All rights reserved.',
  };
  const TITLE = { es: 'Naoj · El colegio al día, y cada familia también', en: 'Naoj · The whole school up to date, and every family too' };
  const MSG = {
    es: { def: '¡Hola! Vi Naoj y me gustaría saber más para nuestro colegio.', esencial: '¡Hola! Me interesa la versión Esencial de Naoj para nuestro colegio.',
      profesional: '¡Hola! Me interesa la versión Profesional de Naoj para nuestro colegio.', medida: '¡Hola! Me interesa Naoj a la medida de nuestro colegio.' },
    en: { def: 'Hi! I saw Naoj and would like to know more for our school.', esencial: 'Hi! I am interested in the Naoj Essential edition for our school.',
      profesional: 'Hi! I am interested in the Naoj Professional edition for our school.', medida: 'Hi! I am interested in a tailored Naoj for our school.' },
  };

  // Guardar el español original para poder volver a él sin recargar
  const ES = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { ES[el.dataset.i18n] = el.innerHTML; });
  const esAttr = (el, attr, key) => { if (!(key in ES)) ES[key] = el.getAttribute(attr); };
  document.querySelectorAll('[data-i18n-alt]').forEach(el => esAttr(el, 'alt', el.dataset.i18nAlt));
  document.querySelectorAll('[data-i18n-aria]').forEach(el => esAttr(el, 'aria-label', el.dataset.i18nAria));
  document.querySelectorAll('[data-i18n-title]').forEach(el => esAttr(el, 'title', el.dataset.i18nTitle));
  document.querySelectorAll('[data-i18n-content]').forEach(el => esAttr(el, 'content', el.dataset.i18nContent));

  function setLang(lang, save) {
    lang = lang === 'en' ? 'en' : 'es';
    const T = k => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k];
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = T(el.dataset.i18n); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => el.setAttribute('alt', T(el.dataset.i18nAlt)));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', T(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-title]').forEach(el => el.setAttribute('title', T(el.dataset.i18nTitle)));
    document.querySelectorAll('[data-i18n-content]').forEach(el => el.setAttribute('content', T(el.dataset.i18nContent)));
    // Capturas en el idioma elegido (si existe ese juego)
    const shots = SHOT_LANGS.includes(lang) ? lang : 'es';
    document.querySelectorAll('img[data-shot]').forEach(img => { img.src = `img/shots/${shots}/${img.dataset.shot}.jpg?v=${SHOTS_V}`; });
    // WhatsApp con el mensaje ya escrito
    document.querySelectorAll('[data-wa]').forEach(a => {
      const m = MSG[lang][a.dataset.wa] || MSG[lang].def;
      a.href = `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
    });
    // Demo en el mismo idioma
    const f = document.getElementById('demoFrame'), o = document.getElementById('demoOpen');
    const demoUrl = lang === 'en' ? 'demo/?lang=en' : 'demo/';
    if (o) o.href = demoUrl;
    if (f) { f.dataset.src = demoUrl; if (f.src) f.src = demoUrl; }
    document.querySelectorAll('[data-lang]').forEach(b => { b.classList.toggle('on', b.dataset.lang === lang); b.setAttribute('aria-pressed', b.dataset.lang === lang); });
    if (save) try { localStorage.setItem('naoj-lang', lang); } catch (e) {}
    const u = new URL(location.href);
    if (lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
    history.replaceState(null, '', u.toString());
    if (window.NAOJ_galMark) window.NAOJ_galMark();
  }

  let lang = new URLSearchParams(location.search).get('lang');
  if (!lang) try { lang = localStorage.getItem('naoj-lang'); } catch (e) {}
  if (!lang) lang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLang(lang, false);
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  // ── Aparición al hacer scroll
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  // ── Cabecera con borde al bajar
  const hdr = document.querySelector('.hdr');
  addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });

  // ── Galería: la imagen del centro es la activa; flechas, puntos y contador la siguen
  const track = document.getElementById('galTrack');
  const figs = [...track.querySelectorAll('figure')];
  const dots = document.getElementById('galDots');
  let cur = 0;
  figs.forEach((f, i) => {
    const d = document.createElement('button'); d.type = 'button'; d.className = 'dot';
    d.addEventListener('click', () => go(i)); dots.appendChild(d);
    f.addEventListener('click', () => { if (i !== cur) go(i); });
  });
  document.getElementById('galTot').textContent = figs.length;
  function go(i) {
    i = Math.max(0, Math.min(figs.length - 1, i));
    const f = figs[i];
    track.scrollTo({ left: f.offsetLeft - (track.clientWidth - f.offsetWidth) / 2, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function mark() {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    figs.forEach((f, i) => { const d = Math.abs(f.offsetLeft + f.offsetWidth / 2 - mid); if (d < dist) { dist = d; best = i; } });
    cur = best;
    figs.forEach((f, i) => f.classList.toggle('on', i === cur));
    [...dots.children].forEach((d, i) => { d.classList.toggle('on', i === cur); d.setAttribute('aria-current', i === cur ? 'true' : 'false'); d.setAttribute('aria-label', (document.documentElement.lang === 'en' ? 'Go to image ' : 'Ir a la imagen ') + (i + 1)); });
    document.getElementById('galNum').textContent = cur + 1;
    document.querySelector('[data-gal="-1"]').disabled = cur === 0;
    document.querySelector('[data-gal="1"]').disabled = cur === figs.length - 1;
  }
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(mark); }, { passive: true });
  addEventListener('resize', mark);
  document.querySelectorAll('[data-gal]').forEach(b => b.addEventListener('click', () => go(cur + Number(b.dataset.gal))));
  track.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(cur + (e.key === 'ArrowRight' ? 1 : -1)); } });
  window.NAOJ_galMark = mark;
  mark();

  // ── La demo solo se carga cuando llega a la pantalla (la página abre rápido)
  const frame = document.getElementById('demoFrame');
  if (frame) new IntersectionObserver((es, ob) => es.forEach(e => { if (e.isIntersecting) { frame.src = frame.dataset.src; ob.disconnect(); } }), { rootMargin: '400px' }).observe(frame);

  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
