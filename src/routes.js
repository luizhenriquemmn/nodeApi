import { Router } from "express";

import authMiddleware from './app/middlewares/auth'


import UserControler from "./app/controllers/UserControler";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post('/users',UserControler.store);
routes.post('/sessions',SessionController.store);

routes.use(authMiddleware)
routes.put('/users', UserControler.update);



export default routes;
