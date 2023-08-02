import express, { Request, Response, Router } from 'express';
import homeRouter from '../views/home';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('home'); // Assuming 'home' is the name of the view/template to be rendered
});

export default router;
