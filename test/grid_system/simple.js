
var WIDTH_LENGTH   = 12;
var WIDTH_FUNCTION = function(x) { return 100 * x / WIDTH_LENGTH; };
var WIDTH_TABLE    = [];

// 有効桁数 x
// (小数点以下 x 桁になるように 小数点以下 x + 1 桁を四捨五入)
var ACCURACY = 0;

function makeWidthTable() {
  for (var i = 0; i < WIDTH_LENGTH; ++i) {
    WIDTH_TABLE[i] = WIDTH_FUNCTION(i + 1);
  }
}

function roundWidth(width) {
  return Math.round(width * Math.pow(10, ACCURACY));
}

function equalsWidth(lhs_val, rhs_val) {
  var lhs = roundWidth(lhs_val);
  var rhs = roundWidth(rhs_val);
  return lhs == rhs;
}

Test.init();
makeWidthTable();

$(function() {
  describe('Simple Grid System', function() {
    _.each($('[class^="cs-col-"]'), function(elem_) {
      var elem      = $(elem_);
      var className = elem.prop('className');
      var matches   = className.match(/cs\-col\-[a-z]+\-(\d+)/);
      
      if (matches) {
        var size            = parseInt(matches[1], 10);
        var validWidth      = WIDTH_TABLE[size - 1];
        var elemWidth       = elem.prop('offsetWidth');
        var elemParentWidth = elem.parent().prop('offsetWidth');
        var percentage      = elemWidth / elemParentWidth * 100;
        
        it(className + ' width is ' + (Math.floor(validWidth * 10) / 10) + '%', function() {
          expect(equalsWidth(size, percentage)).to.be.true;
        });
      }
    });
  });
  
  Test.run();
});
