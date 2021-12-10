import express from "express";
import mongoose from "mongoose";
import config from './config';
import { Movie } from './models/movie.models';
import { apiRouter } from './routes/api.routes';

/*
Model - Modelo/Schema/Domínio
View - Vista/Apresentacao de dados = API - Rotas JSON
Controller - Controla as Requisições e Respostas
*/

const app = express();
app.use(express.json());
app.use(apiRouter);

app.listen(config.PORT, async () => {
    console.log('Server funcionando na porta', config.PORT);
    mongoose.connect(config.MONGO_URI);      
});