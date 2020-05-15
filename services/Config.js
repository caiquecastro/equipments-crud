const get = require('lodash.get');
const config = require('../config');

class Config {
  static get(key) {
    return get(config, key);
  }
}

module.exports = Config;
