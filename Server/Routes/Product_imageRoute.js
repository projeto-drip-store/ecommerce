import express from 'express';
import {createProductImage, getAllProductImages, getImagesByProductId, getProductsByImageId, } from '../Controllers/Product_ImageController.js';

const router = express.Router();

router.get('/product-images', getAllProductImages);
router.get('/products/:productId/images', getImagesByProductId)
router.get('/images/:imageId/products', getProductsByImageId);
router.post('/product-images', createProductImage);
