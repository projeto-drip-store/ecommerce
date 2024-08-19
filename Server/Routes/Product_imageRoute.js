import express from 'express';
import {getAllProductImages, getImagesByProductId, getProductsByImageId, createProductImage, deleteProductImage,} from '../Controllers/Product_ImageController.js';

const router = express.Router();

router.get('/product-images', getAllProductImages);
router.get('/products/:productId/images', getImagesByProductId)
router.get('/images/:imageId/products', getProductsByImageId);
router.post('/product-images', createProductImage);
router.delete('/product-images', deleteProductImage);