import express from 'express'
import { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryById} from "../Controllers/CategoryController.js";

import { router } from './index.js';

router.post("/categories", createCategory); 

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", deleteCategory);

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

// router.post("/categories/:categoryId/products/:productId", addProductToCategory);
