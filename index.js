/* jslint node: true */
'use strict';

var bliss = require('bliss');
var through = require('through');

bliss = new bliss();

var extension = '.html';

function endsWith (str, suffix){
  return str.substr(str.length-suffix.length) === suffix;
}

function blissify (file) {
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
      if (blissify.verbose) {
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

blissify.configure = function(ext) {
  if(ext) extension = ext;

  return blissify;
};

module.exports = blissify;
