if (process.type === 'browser') {
  require('coffee-script/register');
  require('app').on('ready', function() {
    new require('./src/browser/application')(require('./package.json'));
  });
} else {
  var electron = require('electron-prebuilt');
  var child = require('child_process').spawn(electron, [__dirname]);
}
