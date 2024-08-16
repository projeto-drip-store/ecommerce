//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";

import { getAllAddress, registerAddress } from "../Controllers/AddressController.js"

export const router = express.userRouter();

//Usuário rotas

router.get('/user', getAllUsers);
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

// Endereços rotas

router.get('/address', getAllAddress);
router.post('/address/register', registerAddress);

// http://localhost:3000/api/
