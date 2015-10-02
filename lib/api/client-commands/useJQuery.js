var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

function Command() {
  this.strategy = 'jquery';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;