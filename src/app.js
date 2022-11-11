import express from 'express';
import morgan from 'morgan';

import usuariosRoute from './routes/usuariosRoute'


const app = express();

app.set ("port", 4500);
app.use(morgan("dev"));
app.use(usuariosRoute);

export default app;