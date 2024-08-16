//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";

export const router = express.Router();

//Usuário rotas

router.get('/users', getAllUsers);

router.post('/register', registerUser);
router.post('/login', loginUser);
