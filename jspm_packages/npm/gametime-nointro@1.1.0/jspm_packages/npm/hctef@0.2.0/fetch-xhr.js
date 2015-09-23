/* */ 
var Response = require("./response");
function headers(xhr) {
  var head = new Headers();
  var pairs = xhr.getAllResponseHeaders().trim().split('\n');
  pairs.forEach(function(header) {
    var split = header.trim().split(':');
    var key = split.shift().trim();
    var value = split.join(':').trim();
    head.append(key, value);
  });
  return head;
}
module.exports = function(request) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    function responseURL() {
      if ('responseURL' in xhr)
        return xhr.responseURL;
      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders()))
        return xhr.getResponseHeader('X-Request-URL');
    }
    xhr.onload = function() {
      var status = (xhr.status === 1223) ? 204 : xhr.status;
      if (status < 100 || status > 599) {
        reject(new TypeError('Network request failed'));
        return;
      }
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, {
        status: status,
        statusText: xhr.statusText,
        headers: headers(xhr),
        url: responseURL()
      }));
    };
    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    };
    xhr.open(request.method, request.url, true);
    if (request.credentials === 'include')
      xhr.withCredentials = true;
    if ('responseType' in xhr)
      xhr.responseType = 'blob';
    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value);
    });
    xhr.send(typeof request.body === 'undefined' ? null : request.body);
  });
};
