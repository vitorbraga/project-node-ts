import { Request, Response } from 'express';
import { HTTP401Error } from '../../utils/http-errors/HTTP401Error';

export default [
  {
    path: '/',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.json({ message: 'success '});
    }
  },
  {
    path: '/error',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const err = new HTTP401Error();
      console.log('err', err.name);
      throw err;
    }
  }
];
