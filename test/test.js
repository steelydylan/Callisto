var Test = (function() {
  var init = function() {
    window.expect = chai.expect;
    mocha.setup('bdd');
  };
  
  var run = function() {
      if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
      else { mocha.run() ;}
  };
  
  return {
    init: init,
    run : run
  };
})();