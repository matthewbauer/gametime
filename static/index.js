// bootstrap script

require('coffee-script').register();

var $ = require('jquery');
$(function() {
  require('../src/keys');
  var Games = require('../src/games');
  var GamesView = require('../src/games-view');
  $('body').append(new GamesView(new Games()));
});
