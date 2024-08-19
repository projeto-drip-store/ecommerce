import express from 'express';
import { 
  getAllProductCategories, 
  getCategoriesByProductId, 
  getProductsByCategoryId, 
  createProductCategory, 
  deleteProductCategory 
} from '../Controllers/Product_CategoryController.js';

const router = express.Router();

// Rota para listar todas as associações entre produtos e categorias
router.get('/product-categories', getAllProductCategories);

// Rota para listar as categorias associadas a um produto específico
router.get('/products/:productId/categories', getCategoriesByProductId);

// Rota para listar os produtos associados a uma categoria específica
router.get('/categories/:categoryId/products', getProductsByCategoryId);

// Rota para associar um produto a uma categoria
router.post('/product-categories', createProductCategory);

// Rota para remover uma associação entre produto e categoria
router.delete('/product-categories', deleteProductCategory);

export default router;