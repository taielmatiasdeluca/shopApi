import { Router } from "express";

import { hi, init } from '../controller/auth.mjs';

//Main router
export const router = Router();

//Routes
router.get('/me', hi);
router.get('/', init);

export default router;