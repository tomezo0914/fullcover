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
    console.log(imageArray);
    console.log(imageSize);

    if (imageSize <= 0) {
      return null;
    }

    for (var i = 0; i < imageSize; i++) {
      var elem = $(imageArray[i]);
      elem.css('position', 'absolute');
      elem.css('top', '0');
      elem.css('left', '0');
      elem.css('z-index', '7');
      elem.css('width', '100%');
      elem.css('min-height', '100%');
      elem.css('background-size', 'cover');
      elem.css('visiblity', 'hidden');
    }

    setInterval(function() {
      if (currentIndex == 0) {
        nextIndex = 1;
      } else if (currentIndex == imageSize - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
      console.log('currentIndex: ' + currentIndex);
      console.log('nextIndex   : ' + nextIndex);

      //$(imageArray[currentIndex]).fadeOut('slow', function() {
      //  $(imageArray[nextIndex]).fadeIn('slow');
      //});

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
