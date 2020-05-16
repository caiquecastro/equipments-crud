const createError = require('http-errors');

module.exports = function notFound(_, __, next) {
  next(createError(404));
};
