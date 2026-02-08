document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click',()=>{
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.5rem';
  });

  // Update year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const t = document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
