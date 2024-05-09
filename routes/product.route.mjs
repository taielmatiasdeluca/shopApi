import { Router } from "express";
import {
    deleteProduct,
    listAllProducts,
    listSuppliers,
    newProduct,
    getProduct,
    updateProduct,
} from "../controller/product.mjs";


//Main router
export const router = Router();

//Routes
router.post('/new', newProduct);
router.get('/list/:page/:amount', listAllProducts);
router.delete('/:id', deleteProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.get('/suppliers/:id', listSuppliers);


export default router;