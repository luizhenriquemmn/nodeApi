import { Router } from "express";

import authMiddleware from './app/middlewares/auth'


import UserControler from "./app/controllers/UserControler";
import SessionController from "./app/controllers/SessionController";
import TaskController from "./app/controllers/TaskController";


const routes = new Router();

routes.post('/users',UserControler.store);
routes.post('/sessions',SessionController.store);


//todas as rotas abaixo deste middleware precisam ser autenticadas


routes.use(authMiddleware)
routes.put('/users', UserControler.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);

routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);







export default routes;
