/* */ 
var Request = require("./request");
var fetch;
if (typeof XMLHttpRequest !== 'undefined')
  fetch = require("./fetch-xhr");
else if (require("detect-node"))
  fetch = require("./fetch-node");
else
  fetch = function() {
    return Promise.reject(new Error('cannot fetch request in current environment'));
  };
module.exports = function() {
  var request = Object.create(Request.prototype);
  Request.apply(request, arguments);
  return fetch(request);
};
