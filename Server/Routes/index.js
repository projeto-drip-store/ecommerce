//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, createUser } from "../Controllers/UserController.js";

export const router = express.Router();

router.get('/users', getAllUsers);

router.post('/users', createUser);
