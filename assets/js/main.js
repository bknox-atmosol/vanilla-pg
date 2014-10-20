(function() {
  var body = document.querySelector('body');
  var addClass = function(el, klass){
    if(el.classList) el.classList.add(klass);
      else el.classList += ' ' + klass;
    return el;
  };

  var closeBox = function(e){
    var overlay = body.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);
    var box = body.querySelector('.box');
    box.parentNode.removeChild(box);
  };

  var pgClick = function(e) {
    var el = e.target || e.srcElement;
    if(body.querySelector('.overlay') === null) {
      var overlay = document.createElement('div');
      body.appendChild(addClass(overlay,'overlay'));
      addClick(overlay, closeBox);
    }
    var box = addClass(document.createElement('div'), 'box');
    var button  = document.createElement('button');
    button.innerHTML = '&times;';
    addClick(button, closeBox);
    box.innerHTML = '<p>'+el.innerHTML+'</p>';
    box.appendChild(addClass(button, 'close'));
    body.appendChild(box);
  };

  var addClick = function(el, callback) {
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
