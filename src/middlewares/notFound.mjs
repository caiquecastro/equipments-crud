import createError from 'http-errors';

export default function notFound(_, __, next) {
  next(createError(404));
}
