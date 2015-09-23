/* */ 
var fs = require("fs");
var sqljs = require("sql.js");
var fetch = require("hctef");
var JSZip = require("jszip");
var denodeify = require("denodeify");
var pkg = require("./package.json!systemjs-json");
fetch('https://github.com/OpenVGDB/OpenVGDB/releases/download/v' + pkg.openvgdbVersion + '/openvgdb.zip').then(function(response) {
  return response.arrayBuffer();
}).then(function(buffer) {
  return new JSZip(buffer).file('openvgdb.sqlite').asUint8Array();
}).then(function(buffer) {
  return new sqljs.Database(buffer);
}).then(function(db) {
  var stmt = db.prepare('select * from releases, roms, regions, systems where releases.romID = roms.romID and regions.regionID = roms.regionID and systems.systemID = roms.systemID');
  var releases = [];
  while (stmt.step()) {
    var release = stmt.getAsObject();
    for (var key in release) {
      if (!release.hasOwnProperty(key) || !release[key] || key.endsWith('ID') || key.startsWith('TEMP'))
        delete release[key];
    }
    releases.push(release);
  }
  stmt.free();
  return releases;
}).then(function(releases) {
  return denodeify(fs.writeFile)('db.json', JSON.stringify(releases));
});
