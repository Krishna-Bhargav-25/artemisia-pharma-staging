(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-triggered reveal
  if ('IntersectionObserver' in window && !reduce){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); observer.unobserve(e.target); } });
    },{ threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
  }

  // Button micro-interactions (press ripple)
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if (!btn) return;
    btn.classList.add('press');
    window.setTimeout(()=>btn.classList.remove('press'), 300);
  });

  // Page fade-out on internal navigation
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    // ignore external, hash, new tab, downloads, and JS void
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const url = new URL(a.href, window.location.origin);
    if (url.origin !== window.location.origin) return;
    e.preventDefault();
    document.body.classList.add('page-fade-out');
    setTimeout(()=>{ window.location.href = a.href; }, 350);
  });
})();
