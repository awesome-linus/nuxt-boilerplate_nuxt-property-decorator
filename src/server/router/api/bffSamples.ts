import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get(
  '/bff_samples',
  (_req: Request, _res: Response, _next: NextFunction) => {
    return _res.status(200).json({ bff: 'ok' });
  }
);

router.get('/counts', (_req: Request, _res: Response, _next: NextFunction) => {
  return _res.status(200).json({ count: 2 });
});

export default router;
