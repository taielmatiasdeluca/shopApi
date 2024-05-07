import { Router } from "express";

import { login, register } from '../controller/auth.mjs';

//Main router
export const router = Router();

//Routes
router.post('/register', register);
router.post('/login', login);


export default router;