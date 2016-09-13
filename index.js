'use strict';

var placehold = require('node-placehold');

module.exports = function(prefix) {
  var prefix = prefix || '/placehold';

  return function *(next) {
    var url = this.req.url;

    if (url.indexOf(prefix) !== 0) {
      yield next;
    } else {
      placehold({url: url.replace(prefix, '')}, this.res);
    }
  };

};
