import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const apiRouter = Router();

/* ROTAS GERAIS */

apiRouter.get('/', (req, res) => {
    return res.json({
        message: 'Nossa primeira rota de API'
    });
});

/* ROTAS DE USUÁRIO */

apiRouter.post('/users/new', userController.create);

/* ROTAS DE FILME */

/* ROTAS DE LISTA */

export { apiRouter };