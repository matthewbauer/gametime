/* */ 
var url = require("url");
var https = require("https");
var http = require("http");
var fs = require("fs");
var Request = require("./request");
var Response = require("./response");
var Headers = require("./headers");
function fetchFile(request) {
  return new Promise(function(resolve, reject) {
    fs.readFile(request.url.substr(6), function(err, data) {
      if (err)
        reject(err);
      resolve(data);
    });
  }).then(function(data) {
    return new Response(data, {
      status: 200,
      statusText: 'OK',
      headers: new Headers(),
      url: request.url
    });
  });
}
function fetchHTTP(input) {
  var options = url.parse(input.url);
  options.protocol = options.protocol || 'http:';
  options.method = input.method;
  options.headers = {};
  input.headers.forEach(function(value, name) {
    options.headers[value] = name;
  });
  return new Promise(function(resolve, reject) {
    var send;
    if (options.protocol === 'https:')
      send = https.request;
    else if (options.protocol === 'http:')
      send = http.request;
    var request = send(options);
    request.on('response', resolve);
    request.on('error', reject);
    if (input.arrayBuffer)
      input.arrayBuffer().then(function(buffer) {
        request.write(buffer);
        request.end();
      });
    else
      request.end();
  }).then(function(message) {
    if (message.statusCode >= 300 && message.statusCode < 400) {
      var request = new Request(input);
      request.url = url.resolve(input.url, message.headers.location);
      return fetchHTTP(request);
    }
    return new Response(message, {
      status: message.statusCode,
      statusText: message.statusMessage,
      headers: new Headers(message.headers),
      url: input.url
    });
  });
}
module.exports = function(request) {
  if (request.url.substr(0, 5) === 'file:')
    return fetchFile(request);
  else
    return fetchHTTP(request);
};
