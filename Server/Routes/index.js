//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";

import { getAllAddress, registerAddress } from "../Controllers/AddressController.js";

import { getAllTelephone, registerTelephone } from "../Controllers/TelephoneController.js";

import { getAllProduct, registerProduct } from "../Controllers/ProductController.js";

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


// Produto Rotas

router.get('/product', getAllProduct);
router.post('/product/register', registerProduct);