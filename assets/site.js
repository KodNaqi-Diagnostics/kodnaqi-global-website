document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.links');
  if (menu && nav) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      const open = document.body.classList.toggle('mobile-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      document.body.classList.remove('mobile-open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.links a').forEach(link => {
    if ((link.getAttribute('href') || '').split('/').pop().toLowerCase() === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
});
