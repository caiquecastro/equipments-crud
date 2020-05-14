const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const equipmentsRouter = require('./routes/equipments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/equipments', equipmentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

module.exports = app;
