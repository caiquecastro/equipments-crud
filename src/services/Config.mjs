import get from 'lodash.get';
import config from '../config/index.mjs';

class Config {
  static get(key) {
    return get(config, key);
  }
}

export default Config;
