import * as http from 'http';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { applyMiddleware, applyRoutes } from './utils';
import commonMiddlewares from './middleware/common';
import errorHandlers from './middleware/errorHandlers';
import routes from './apis';

dotenv.config();

process.on('uncaughtException', (e) => {
    console.log('uncaughtException', e);
    process.exit(1);
});

process.on('unhandledRejection', (e) => {
    console.log('unhandledRejection', e);
    process.exit(1);
});

const router = express();
applyMiddleware(commonMiddlewares, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`)
);
