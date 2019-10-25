import { Router } from 'express';
import * as cors from 'cors';
import * as parser from 'body-parser';
import * as compression from 'compression';

const handleCors = (router: Router) => {
    return router.use(cors({ credentials: true, origin: true }));
};

const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
};

const handleCompression = (router: Router) => {
    router.use(compression());
};

export default [handleCors, handleBodyRequestParsing, handleCompression];
