/* ============================================================
   Fullscreen-knop voor screenshots.
   Elke <img class="zoomable"> krijgt automatisch een knopje in de
   hoek; klikken (of op de foto zelf) opent 'm groot in een lightbox.
   Eén script, gedeeld door alle case-pages — geen duplicatie nodig.
   ============================================================ */
(function(){
  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  var EXPAND_ICON =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>' +
    '<path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';

  ready(function(){
    var imgs = document.querySelectorAll('img.zoomable');
    if(!imgs.length) return;

    // Eén lightbox-overlay voor de hele pagina, eenmalig aangemaakt.
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.hidden = true;
    lightbox.innerHTML =
      '<div class="lightbox__backdrop" data-lightbox-close></div>' +
      '<button class="lightbox__close" type="button" data-lightbox-close aria-label="Sluiten">✕</button>' +
      '<img class="lightbox__img" alt="">';
    document.body.appendChild(lightbox);
    var lightboxImg = lightbox.querySelector('.lightbox__img');
    var lastTrigger = null;

    function open(src, alt, trigger){
      lastTrigger = trigger || null;
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox__close').focus();
    }
    function close(){
      lightbox.hidden = true;
      document.body.style.overflow = '';
      lightboxImg.src = '';
      if(lastTrigger) lastTrigger.focus();
    }

    lightbox.addEventListener('click', function(e){
      if(e.target.hasAttribute('data-lightbox-close')) close();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && !lightbox.hidden) close();
    });

    imgs.forEach(function(img){
      // Wrap de afbeelding in een relatief geplaatste container voor de knop,
      // zonder de bestaande classes/marges van de <img> zelf aan te raken.
      var wrap = document.createElement('span');
      wrap.className = 'zoomable-wrap';
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'zoomable-btn';
      btn.setAttribute('aria-label', 'Volledig scherm bekijken');
      btn.innerHTML = EXPAND_ICON;
      wrap.appendChild(btn);

      function trigger(e){
        e.preventDefault();
        open(img.currentSrc || img.src, img.alt, btn);
      }
      btn.addEventListener('click', trigger);
    });
  });
})();
