/* MobilizaPRO - guarda leve para GitHub Pages.
   GitHub Pages é estático: não executa PHP nem conecta MySQL. Este arquivo só melhora a prévia visual. */
(function(){
  'use strict';
  document.documentElement.classList.add('dark');
  document.body && document.body.classList.add('mpro-github-pages-preview');
  function fixLogo(){
    document.querySelectorAll('img[alt="Logo"]').forEach(function(img){
      var src = img.getAttribute('src') || '';
      if(src.indexOf('googleusercontent.com') !== -1 || !src){
        img.setAttribute('src','assets/img/mobilizapro-logo-hq.png');
      }
      img.onerror = function(){
        this.onerror = null;
        this.setAttribute('src','assets/img/mobilizapro-logo-hq.png');
      };
    });
  }
  function markPreview(){
    if(location.hostname.indexOf('github.io') === -1) return;
    var status = document.querySelector('#sidebar .p-4.border-t, .sidebar .p-4.border-t');
    if(status && !status.dataset.githubPreview){
      status.dataset.githubPreview = '1';
      status.innerHTML = '<div class="flex items-center gap-2 mb-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span><span class="font-medium">Prévia GitHub ativa</span></div><p>Ambiente visual sem PHP/MySQL</p>';
    }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){fixLogo(); markPreview();});
  }else{
    fixLogo(); markPreview();
  }
})();
