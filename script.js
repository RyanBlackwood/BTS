const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('leadForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const subject = encodeURIComponent(`BTS Service Request - ${service}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService Type: ${service}\n\nMessage:\n${message}`
  );

  note.textContent = 'Opening your email app with a prepared request...';
  window.location.href = `mailto:contact@blackwoodtechservices.com?subject=${subject}&body=${body}`;
});
