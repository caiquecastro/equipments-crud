import knex from 'knex';
import Config from './Config.mjs';

export default knex(Config.get('database'));
