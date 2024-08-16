//IMPORTS
import express from "express";
// CONTROLLERS
import { getAllUsers, loginUser, registerUser } from "../Controllers/UserController.js";
import { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryById } from "../Controllers/CategoryController.js";


export const router = express.Router();

//Usuário rotas

router.get('/users', getAllUsers);

router.post('/register', registerUser);
router.post('/login', loginUser);

// Category rotas
router.post("/categories", createCategory); 

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", deleteCategory);

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

