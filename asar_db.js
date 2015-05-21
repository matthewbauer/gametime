(function() {
  var path, sqlite3;

  path = require('path');

  sqlite3 = require('sqlite3');

  module.exports = new sqlite3.Database(path.join(process.resourcesPath, 'app.asar.unpacked', 'node_modules', 'gametime-db', 'gametime.db'));

}).call(this);
