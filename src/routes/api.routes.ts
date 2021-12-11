import { Router } from 'express';
import * as sessionController from '../controllers/session.controller';

const apiRouter = Router();

/* ROTAS GERAIS */

apiRouter.get('/', (req, res) => {
    return res.json({
        message: 'Nossa primeira rota de API'
    });
});

/* ROTAS DE USUÁRIO */

apiRouter.post('/users/new', sessionController.create);

/* ROTAS DE FILME */

/* ROTAS DE LISTA */

export { apiRouter };