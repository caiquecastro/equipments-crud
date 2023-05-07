import { Model } from 'objection';
import Database from '../services/Database.mjs';

Model.knex(Database);

class BaseModel extends Model {}

export default BaseModel;
