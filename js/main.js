(function(){
  var root=document.documentElement,tb=document.getElementById('theme'),mt=document.querySelector('meta[name="theme-color"]');
  function paint(){var d=root.getAttribute('data-theme')==='dark';tb.textContent=d?'☀':'☾';tb.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode');if(mt)mt.setAttribute('content',d?'#0b1730':'#f6f1e9')}
  tb.addEventListener('click',function(){var n=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}paint()});
  paint();
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  document.getElementById('yr').textContent=new Date().getFullYear();
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.rv').forEach(function(e){e.classList.add('in')});return}
  var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(e){ro.observe(e)});
  var links=[].slice.call(m.querySelectorAll('a'));
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('main section[id]').forEach(function(s){so.observe(s)});
})();
