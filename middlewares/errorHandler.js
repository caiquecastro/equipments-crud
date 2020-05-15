module.exports = function errorHandler(err, _, res, next) {
  if (res.headerSent) {
    next(err);
  }

  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
};
