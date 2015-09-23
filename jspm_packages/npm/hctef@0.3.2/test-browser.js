/* */ 
(function(process) {
  var server = require("./test-server");
  var opn = require("opn");
  var port = process.env.PORT || 8080;
  server.listen(port);
  opn('http://localhost:' + port + '/test.html');
})(require("process"));
