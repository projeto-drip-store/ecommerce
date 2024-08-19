//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";

import { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryById } from "../Controllers/CategoryController.js";

import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../Controllers/ProductController.js';

import { getAllProductCategories,  getCategoriesByProductId, getProductsByCategoryId, createProductCategory, deleteProductCategory  } from '../Controllers/Product_CategoryController.js';

import {getAllProductImages,getImagesByProductId,getProductsByImageId,createProductImage,deleteProductImage,} from '../Controllers/Product_ImageController.js';

import {createSale, getAllSales, getSaleById, updateSaleById, deleteSaleById} from '../Controllers/SalesControllers.js';

import {createTelephone, getAllTelephones, getTelephoneById, updateTelephone, deleteTelephone} from '../Controllers/TelephoneController.js';

import { getAllAddress, registerAddress } from "../Controllers/AddressController.js";

import { getAllTelephone, registerTelephone } from "../Controllers/TelephoneController.js";

export const router = express.Router();

//Usuário rotas

router.get('/user', getAllUsers);
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

// Endereços rotas

router.get('/address', getAllAddress);
router.post('/address/register', registerAddress);

//Telefone Rotas

router.get('/telephone', getAllTelephone);
router.post('/telephone/register', registerTelephone);

router.post('/register', registerUser);
router.post('/login', loginUser);

// Category rotas

router.post("/categories", createCategory); 
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);

//Products rotas

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

//Sales rotas
router.post('/sales', createSale);              
router.get('/sales', getAllSales);              
router.get('/sales/:id', getSaleById);           
router.put('/sales/:id', updateSaleById);       
router.delete('/sales/:id', deleteSaleById);

//Telephone rotas
router.post('/telephones', createTelephone);
router.get('/telephones', getAllTelephones);
router.get('/telephones/:id', getTelephoneById);
router.put('/telephones/:id', updateTelephone);
router.delete('/telephones/:id', deleteTelephone);

// ProductCategory rotas
router.get('/product-categories', getAllProductCategories);
router.get('/products/:productId/categories', getCategoriesByProductId);
router.get('/categories/:categoryId/products', getProductsByCategoryId);
router.post('/product-categories', createProductCategory);
router.delete('/product-categories', deleteProductCategory);

//product_image rotas 
router.get('/product-images', getAllProductImages);
router.get('/products/:productId/images', getImagesByProductId)
router.get('/images/:imageId/products', getProductsByImageId);
router.post('/product-images', createProductImage);
router.delete('/product-images', deleteProductImage);
