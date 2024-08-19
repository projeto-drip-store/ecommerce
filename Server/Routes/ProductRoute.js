import express from 'express';
import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../Controllers/ProductController.js'; // Verifique se o caminho está correto

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;