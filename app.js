const logger = require('morgan');
const express = require('express');
const createError = require('http-errors');

const equipmentsRouter = require('./routes/equipments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/equipments', equipmentsRouter);

// catch 404 and forward to error handler
app.use(function notFound(_, _, next) {
  next(createError(404));
});

// error handler
app.use(function errorHandler(err, _, res, _) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

module.exports = app;
