// bootstrap script

require('coffee-script').register();

var $ = require('jquery');
$(function() {
  require('../src/keys');
  var Game = require('../src/game');
  var PlayerView = require('../src/player-view');
  new Game(require('querystring').parse(location.search)).findROM()
  .then(function(rom) {
    Game.loadROM(rom).then(function(data) {
      var player = new PlayerView(data[0], data[1], data[2], rom);
      window.onbeforeunload = function() {
        player.stop();
      };
    });
  });
});
