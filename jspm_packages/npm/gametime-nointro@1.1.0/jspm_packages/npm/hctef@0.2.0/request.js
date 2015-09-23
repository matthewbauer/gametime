/* */ 
var Body = require("./body");
var Headers = require("./headers");
var url = require("url");
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return (methods.indexOf(upcased) > -1) ? upcased : method;
}
module.exports = function Request(input, options) {
  options = options || {};
  var body = options.body;
  if (Request.prototype.isPrototypeOf(input)) {
    if (input.bodyUsed)
      throw new TypeError('Already read');
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers)
      this.headers = new Headers(input.headers);
    this.method = input.method;
    this.mode = input.mode;
    if (!body) {
      body = input.body;
      input.bodyUsed = true;
    }
  } else
    this.url = input;
  if (this.baseURL && this.url)
    this.url = url.resolve(this.baseURL, this.url);
  this.credentials = options.credentials || this.credentials || 'omit';
  if (options.headers || !this.headers)
    this.headers = new Headers(options.headers);
  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.referrer = null;
  if ((this.method === 'GET' || this.method === 'HEAD') && body)
    throw new TypeError('Body not allowed for GET or HEAD requests');
  if (body)
    Body.call(this, body);
};
