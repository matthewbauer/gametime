/* */ 
(function(process) {
  module.exports = false;
  try {
    module.exports = Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {}
})(require("process"));
