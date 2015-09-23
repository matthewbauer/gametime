/* */ 
(function() {
  var JSZip, consoles, fetch, getROM, getURL, hasROM, path, url;

  url = require('url');

  path = require('path');

  fetch = require('hctef');

  JSZip = require('jszip');

  consoles = {
    '32X': 'Sega - 32X',
    '5200': 'Atari - 5200',
    '7800': 'Atari - 7800',
    'ColecoVision': 'Coleco - ColecoVision',
    'FDS': 'Nintendo - Famicom Disk System',
    'GB': 'Nintendo - Game Boy',
    'GBC': 'Nintendo - Game Boy Color',
    'GBA': 'Nintendo - Game Boy Advance',
    'GG': 'Sega - Game Gear',
    'Jaguar': 'Atari - Jaguar',
    'Lynx': 'Atari - Lynx',
    'MD': 'Sega - Mega Drive - Genesis',
    'N64': 'Nintendo - Nintendo 64',
    'NES': 'Nintendo - Nintendo Entertainment System',
    'NGP': 'SNK - Neo Geo Pocket',
    'NGPC': 'SNK - Neo Geo Pocket Color',
    'PCE': 'NEC - PCE Engine - TurboGrafx 16',
    'SG1000': 'Sega - SG 1000',
    'SMS': 'Sega - Master System - Mark III',
    'SNES': 'Nintendo - Super Nintendo Entertainment System',
    'SuperGrafx': 'NEC - Super Grafx',
    'VB': 'Nintendo - Virtual Boy',
    'Vectrex': 'GCE - Vectrex',
    'WonderSwan': 'Bandai - WonderSwan',
    'WonderSwan Color': 'Bandai - WonderSwan Color',
    'PCECD': 'NEC - PC Engine - TurboGrafx 16',
    'Odyssey2': 'Magnavox - Odyssey2'
  };

  getURL = function(game, date) {
    var collection, console;
    if (date == null) {
      date = '2015-03-03';
    }
    collection = "No-Intro-Collection_" + date;
    console = consoles[game.systemShortName];
    return 'http://crossorigin.me/' + url.format({
      protocol: 'http',
      hostname: 'ia800500.us.archive.org',
      pathname: "zipview.php",
      query: {
        zip: "/33/items/" + collection + "/" + console + ".zip",
        file: console + "/" + game.romExtensionlessFileName + ".zip"
      }
    });
  };

  getROM = function(game) {
    return fetch(getURL(game)).then(function(res) {
      return res.arrayBuffer();
    }).then(function(data) {
      var file, zip;
      zip = new JSZip(data);
      file = zip.file(game.romFileName);
      if (file === null) {
        throw new Error('Cannot find rom.');
      }
      return file.asArrayBuffer();
    });
  };

  hasROM = function(rom) {
    return new Promise(function(resolve, reject) {
      return resolve(true);
    });
  };

  module.exports = {
    getURL: getURL,
    getROM: getROM,
    hasROM: hasROM
  };

}).call(this);
