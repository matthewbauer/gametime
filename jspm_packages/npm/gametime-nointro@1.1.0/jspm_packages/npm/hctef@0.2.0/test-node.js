/* */ 
(function(process) {
  (function(process) {
    var denodeify = require("denodeify");
    var test = require("ava");
    var Request = require("./request");
    var server = require("./test-server");
    var port = process.env.PORT || 8080;
    Request.prototype.baseURL = 'http://localhost:' + port;
    test.before('creating server...', function() {
      return denodeify(server.listen.bind(server))(port);
    });
    test.after('closing server', function() {
      return denodeify(server.close.bind(server))();
    });
    require("./test");
  })(require("process"));
})(require("process"));
