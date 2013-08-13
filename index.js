/* jslint node: true */
'use strict';

var bliss = require('bliss');
var through = require('through');

bliss = new bliss();

function endsWith (str, suffix){
  return str.substr(str.length-suffix.length) === suffix;
}

module.exports = function (extension) {
  extension = extension || '.html';

  return function blissify (file) {
    if (!endsWith(file, extension)) {
      return through();
    }

    var src = '';
    var stream = through(write, end);
    return through(write, end);

    function write (buffer) {
      src += buffer;
    }

    function end() {
      var fn = function(){};

      try {
        fn = bliss.compile(src);
      } catch (e) {
        if (module.exports.verbose) {
          console.error('[blissify] error:', file);
          console.error(e);
          return;
        }

        stream.emit('error', e);
      }

      this.queue('module.exports=' + fn.toString());
      this.queue(null);
    }
  };
};
