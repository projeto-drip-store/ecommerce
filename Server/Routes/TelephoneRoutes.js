import express from 'express';
import {createTelephone, getAllTelephones, getTelephoneById, updateTelephone, deleteTelephone
} from '../Controllers/TelephoneController.js';

const router = express.Router();

router.post('/telephones', createTelephone);
router.get('/telephones', getAllTelephones);
router.get('/telephones/:id', getTelephoneById);
router.put('/telephones/:id', updateTelephone);
router.delete('/telephones/:id', deleteTelephone);

export default router;