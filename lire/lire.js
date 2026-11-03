
(function(){
  var r=document.documentElement;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  var t=get('lire-theme'); if(t) r.setAttribute('data-theme',t);
  var z=parseFloat(get('lire-taille')); if(z) r.style.setProperty('--taille',z+'rem');
  window.lire={
    taille:function(d){var c=parseFloat(getComputedStyle(r).getPropertyValue('--taille'))||1.2;c=Math.min(1.7,Math.max(1,c+d*0.1));c=Math.round(c*10)/10;r.style.setProperty('--taille',c+'rem');set('lire-taille',c)},
    theme:function(){var sombre=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);var n=sombre?'light':'dark';r.setAttribute('data-theme',n);set('lire-theme',n)},
    noter:function(tome,page,titre){set('lire-t'+tome,JSON.stringify({page:page,titre:titre}))},
    reprendre:function(tome,base){var v=get('lire-t'+tome);if(!v)return;try{v=JSON.parse(v)}catch(e){return}var b=document.getElementById('reprendre');if(!b||!v.page)return;b.innerHTML='Vous en étiez à <a href="'+base+v.page+'">'+v.titre+'</a>.';b.className='reprendre vu'}
  };
})();
