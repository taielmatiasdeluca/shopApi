import { Router } from "express";
import { getSupplier, listProducts } from "../controller/supplier.mjs";

//Main router
export const router = Router();

//Routes
router.get('/listProducts/:id', listProducts);
router.get('/:id', getSupplier);

export default router;