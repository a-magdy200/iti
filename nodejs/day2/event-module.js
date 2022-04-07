const util = require('util');
const Emitter = require('events');
function myLogger() {
  Emitter.call(this);
}
util.inherits(myLogger, Emitter);
module.exports = {
  myLogger
}
