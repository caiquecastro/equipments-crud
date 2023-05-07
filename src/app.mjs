import logger from 'morgan';
import express from 'express';
import errorHandler from './middlewares/errorHandler.mjs';
import notFoundMiddleware from './middlewares/notFound.mjs';
import equipmentsRouter from './routes/equipments.mjs';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/equipments', equipmentsRouter);

// catch 404 and forward to error handler
app.use(notFoundMiddleware);

// error handler
app.use(errorHandler);

export default app;
