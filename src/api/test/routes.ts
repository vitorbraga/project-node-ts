import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../../utils/http-errors/HTTP400Error';

const checkSearchParams = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.query.q) {
        throw new HTTP400Error('Missing q parameter');
    } else {
        next();
    }
};

export default [
    {
        path: '/',
        method: 'get',
        handler:
            [
                checkSearchParams,
                (req: Request, res: Response) => {
                    res.json({ message: 'success '});
                }
            ]
    },
    {
        path: '/error',
        method: 'get',
        handler: (req: Request, res: Response) => {
            throw new HTTP400Error('Weird error');
        }
    }
];
