/* */ 
var Headers = require("./headers");
var Body = require("./body");
module.exports = function(bodyInit, options) {
  options = options || {};
  Body.call(this, bodyInit);
  this.type = 'default';
  this.url = options.url || '';
  this.status = options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = options.statusText;
  this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
};
