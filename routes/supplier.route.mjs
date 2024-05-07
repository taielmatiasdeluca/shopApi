import { Router } from "express";

//Main router
export const router = Router();

//Routes
router.get('/', (req, res) => { res.status(200) })

export default router;