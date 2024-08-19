// src/controllers/Product_ImageController.js
import { ProductImage } from '../Models/Product_Image.js';
import { Product } from '../Models/Product.js';
import { Image } from '../Models/Image.js';

export const createProductImage = async (req, res) => {
  try {
    const { productId, imageId } = req.body;

    const product = await Product.findByPk(productId);
    const image = await Image.findByPk(imageId);

    if (!product || !image) {
      return res.status(404).json({ message: 'Produto ou imagem não encontrados' });
    }

    await ProductImage.create({ productId, imageId });

    res.status(201).json({ message: 'Associação criada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a associação', error });
  }
};

export const getAllProductImages = async (req, res) => {
  try {
    const productImages = await ProductImage.findAll();
    res.status(200).json(productImages);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar associações de produto e imagem', error });
  }
};

// Obtenção de imagens por ID do produto
export const getImagesByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId, { include: Image });

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(product.Images); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar imagens do produto', error });
  }
};

export const getProductsByImageId = async (req, res) => {
  try {
    const { imageId } = req.params;
    const image = await Image.findByPk(imageId, { include: Product });

    if (!image) {
      return res.status(404).json({ message: 'Imagem não encontrada' });
    }

    res.status(200).json(image.Products); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos da imagem', error });
  }
};

export const deleteProductImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ProductImage.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Associação não encontrada' });
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a associação', error });
  }
};