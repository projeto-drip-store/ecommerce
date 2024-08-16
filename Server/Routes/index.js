//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";

export const router = express.Router();

//Usuário rotas

router.get('/users', getAllUsers);

router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

