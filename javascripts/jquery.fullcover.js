(function($) {
  var VERSION = '0.0.1';
  var DEFAULT_INTARVAL = 5000;

  var opts = null;
  var interval = null;
  var imageArray = null;
  var imageSize = 0;
  var currentIndex = 0;
  var nextIndex = 0;

  // public

  $.fn.version = function() {
    return VERSION;
  };

  $.fn.fullcover = function(options) {
    opts = $.extend({}, $.fn.fullcover.defaults, options);
    interval = opts.interval;

    imageArray = $('#fullcover div');
    imageSize = imageArray.length;

    if (imageSize <= 0) {
      return null;
    }

    for (var i = 0; i < imageSize; i++) {
      var _opacity = '0';
      if (i == 0) {
        _opacity = '1';
      }
      $(imageArray[i]).css({
        position: 'absolute',
        opacity: _opacity,
        top: '0',
        left: '0',
        zIndex: '99',
        width: '100%',
        minHeight: '100%',
        backgroundSize: 'cover',
        visiblity: 'hidden'
      });
    }

    setInterval(function() {
      if (currentIndex == 0) {
        nextIndex = 1;
      } else if (currentIndex == imageSize - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }

      $(imageArray[currentIndex]).css({ zIndex: '99'}).stop().animate({ opacity: '0'}, 3000);
      $(imageArray[nextIndex]).css({ zIndex: '100'}).stop().animate({ opacity: '1'}, 3500);

      currentIndex = nextIndex;
    }, interval);

  };

  $.fn.fullcover.defaults = {
    interval: DEFAULT_INTARVAL
  };

  // private

}) (jQuery);
