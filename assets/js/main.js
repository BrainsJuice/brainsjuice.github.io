/* BrainJuice: date automatiche dell'evento e pulsanti "Copia l'indirizzo". */
(function(){
  var now = new Date();
  var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  var past = false;
  document.querySelectorAll('[data-deadline]').forEach(function(el){
    var p = el.getAttribute('data-deadline').split('-').map(Number);
    var days = Math.round((Date.UTC(p[0], p[1]-1, p[2]) - today) / 86400000);
    if (days < 0){ past = true; el.hidden = true; return; }
    var out = el.querySelector('[data-days]');
    if (out) out.textContent = days === 0 ? 'scade oggi' : days === 1 ? 'manca 1 giorno' : 'mancano ' + days + ' giorni';
  });
  if (past){
    document.querySelectorAll('[data-after-deadline]').forEach(function(el){ el.hidden = false; });
  }
  document.querySelectorAll('[data-until]').forEach(function(el){
    var p = el.getAttribute('data-until').split('-').map(Number);
    if (Date.UTC(p[0], p[1]-1, p[2]) < today) el.hidden = true;
  });
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    var label = btn.textContent;
    btn.addEventListener('click', function(){
      var text = btn.getAttribute('data-copy');
      var done = function(){ btn.textContent = 'Indirizzo copiato'; setTimeout(function(){ btn.textContent = label; }, 2000); };
      var select = function(){
        var scope = btn.closest('[data-copy-scope]');
        var em = scope && scope.querySelector('.email');
        if (!em) return;
        var r = document.createRange(); r.selectNodeContents(em);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, select);
        else select();
      } catch (e) { select(); }
    });
  });
})();
