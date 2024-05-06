import express, { Router } from 'express';
import cors from 'cors';

//Routes
import authRouter from './routes/auth.route.mjs';


const app = express();
//Enable cors
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

app.use('/api/auth', authRouter);

//Api not found
app.use('*', Router().get('', (req, res) => {
    res.status(404).json("Api no encontrada");
}));

export default app;