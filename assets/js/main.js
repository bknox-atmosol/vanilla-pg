(function() {
  var body = document.querySelector('body');
  var addClass = function(el, klass){
    if(el.classList) el.classList.add(klass);
      else el.classList += ' ' + klass;
    return el;
  };

  var pgClick = function(e) {
    if(body.querySelector('.overlay') === null) {
      var overlay = document.createElement('div');
      body.appendChild(addClass(overlay,'overlay'));
    }
  };

  var addCkick = function(el, callback) {
    if(el.addEventListener) {
      el.addEventListener("click", callback,false);
     } else {
      el.attachEvent("onclick", callback);
    }
  };
  
  
  var pgs = Array.prototype.slice.call(document.querySelectorAll('.pg'),0);
  var pg;
  
  for(i in pgs) {
    addClick(pgs[i], pgClick);
  }
})();
