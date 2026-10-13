const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile menu
const burger = document.querySelector<HTMLButtonElement>('.burger');
const menu = document.getElementById('menu');
const setMenu = (open: boolean) => { burger?.setAttribute('aria-expanded', String(open)); menu?.classList.toggle('open', open); };
burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Scroll reveal (content stays visible if IntersectionObserver is missing)
const items = document.querySelectorAll<HTMLElement>('.rv');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else items.forEach((el) => el.classList.add('in'));

// Rotating hero keyword
const kw = document.querySelector<HTMLElement>('.kw');
if (kw && !reduce) {
  const words = (kw.dataset.words ?? '').split(',');
  let i = 0;
  setInterval(() => { i = (i + 1) % words.length; kw.textContent = words[i] + '.'; kw.classList.remove('swap'); void kw.offsetWidth; kw.classList.add('swap'); }, 2600);
}

// Testimonial slider
const slides = document.querySelectorAll<HTMLElement>('.slide');
let cur = 0;
document.querySelectorAll<HTMLButtonElement>('[data-dir]').forEach((b) => b.addEventListener('click', () => {
  slides[cur].hidden = true;
  cur = (cur + Number(b.dataset.dir) + slides.length) % slides.length;
  slides[cur].hidden = false;
}));
