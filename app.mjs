import express, { Router } from 'express';
import cors from 'cors';
//Routes
import authRouter from './routes/auth.route.mjs';
import productRouter from './routes/product.route.mjs';
import supplieRouter from './routes/supplier.route.mjs';
//Jwt protection
import protect from './middleware/auth.mjs';

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes without jwt protection
app.use('/api/auth', authRouter);
//Routes with jwt
app.use('/api/product', protect, productRouter);
app.use('/api/supplier', protect, supplieRouter);



//Api not found
app.use('*', Router().all('', (req, res) => {
    res.status(404).json("Api no encontrada");
}));

export default app;