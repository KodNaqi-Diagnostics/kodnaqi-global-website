
document.querySelector('.menu')?.addEventListener('click',()=>document.body.classList.toggle('mobile-open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('mobile-open')));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
