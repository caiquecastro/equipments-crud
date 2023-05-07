#!/usr/bin/env node

/**
 * Module dependencies.
 */

import debug from 'debug';
import http from 'http';
import app from '../src/app.mjs';

const appDebug = debug('equipments-crud:server');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const rawPort = parseInt(val, 10);

  if (Number.isNaN(rawPort)) {
    // named pipe
    return val;
  }

  if (rawPort >= 0) {
    // port number
    return rawPort;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  appDebug(`Listening on ${bind}`);
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      appDebug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      appDebug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
