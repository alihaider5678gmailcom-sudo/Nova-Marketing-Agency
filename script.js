const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.classList.toggle('active',open);menu.textContent=open?'×':'☰';menu.setAttribute('aria-expanded',String(open));});document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.classList.remove('active');menu.textContent='☰';menu.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.animationDelay=`${Math.min(i*45,260)}ms`;observer.observe(el);});
