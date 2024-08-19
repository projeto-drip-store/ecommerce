
import express from 'express';
import {createSale, getAllSales, getSaleById, updateSaleById, deleteSaleById} from '../Controllers/SalesControllers.js';

const router = express.Router();

router.post('/sales', createSale);              
router.get('/sales', getAllSales);              
router.get('/sales/:id', getSaleById);           
router.put('/sales/:id', updateSaleById);       
router.delete('/sales/:id', deleteSaleById);    

export default router;
