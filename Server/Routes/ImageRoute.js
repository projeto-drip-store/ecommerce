
import {
  createImage,
  getAllImages,
  getImageById,
  updateImageById,
  deleteImageById
} from '../Controllers/ImageController.js';

// Rotas para as imagens
router.post('/', createImage); 
router.get('/', getAllImages); 
router.get('/:id', getImageById); 
router.put('/:id', updateImageById); 
router.delete('/:id', deleteImageById); 

export default router;