const logger = require('morgan');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const notFoundMiddleware = require('./middlewares/notFound');

const equipmentsRouter = require('./routes/equipments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/equipments', equipmentsRouter);

// catch 404 and forward to error handler
app.use(notFoundMiddleware);

// error handler
app.use(errorHandler);

module.exports = app;
