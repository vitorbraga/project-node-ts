import { Request, Response } from 'express';

export default [
    {
        path: '/users',
        method: 'get',
        handler:
            [
                (req: Request, res: Response) => {
                    res.send('/users page');
                }
            ]
    }
];
