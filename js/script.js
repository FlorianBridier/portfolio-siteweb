const toggle=document.querySelector('.nav-toggle');const menu=document.querySelector('.nav-menu');const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
const els=document.querySelectorAll('.reveal');const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}})},{threshold:.14});els.forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i*45,180)}ms`;io.observe(el);});

function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      const response = await fetch(file);
      const text = await response.text();
      el.innerHTML = text;
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);