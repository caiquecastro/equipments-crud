#!/usr/bin/env node

import Database from '../src/services/Database.mjs';

async function run() {
  return Database.migrate.latest()
    .finally(() => Database.destroy());
}

run();
