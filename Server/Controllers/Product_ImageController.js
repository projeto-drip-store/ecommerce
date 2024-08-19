import { ProductImage } from '../Models/Product_Image.js';
import { Product } from '../Models/Product.js';
import { Image } from '../Models/Image.js';

// Listar todas as associações entre produtos e imagens
export const getAllProductImages = async (req, res) => {
  try {
    const productImages = await ProductImage.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
        {
          model: Image,
          as: 'images',
        }
      ]
    });
    res.status(200).json(productImages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar as imagens associadas a um produto específico
export const getImagesByProductId = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Image,
          as: 'images'
        }
      ]
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json(product.images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar os produtos associados a uma imagem específica
export const getProductsByImageId = async (req, res) => {
  const { imageId } = req.params;

  try {
    const image = await Image.findByPk(imageId, {
      include: [
        {
          model: Product,
          as: 'products'
        }
      ]
    });

    if (!image) {
      return res.status(404).json({ error: 'Imagem não encontrada' });
    }

    res.status(200).json(image.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Associar um produto a uma imagem
export const createProductImage = async (req, res) => {
  const { productId, imageId } = req.body;

  try {
    const productImage = await ProductImage.create({
      produto_id: productId,
      imagem_id: imageId,
    });

    res.status(201).json(productImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remover uma associação entre produto e imagem
export const deleteProductImage = async (req, res) => {
  const { productId, imageId } = req.body;

  try {
    const productImage = await ProductImage.findOne({
      where: {
        produto_id: productId,
        imagem_id: imageId,
      }
    });

    if (!productImage) {
      return res.status(404).json({ error: 'Associação não encontrada' });
    }

    await productImage.destroy();
    res.status(200).json({ message: 'Associação removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};