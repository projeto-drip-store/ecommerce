import { ProductCategory } from '../Models/Product_Category.js';
import { Product } from '../Models/Product.js';
import { Category } from '../Models/Category.js';


export const getAllProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
        {
          model: Category,
          as: 'categories',
        }
      ]
    });
    res.status(200).json(productCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getCategoriesByProductId = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Category,
          as: 'categories'
        }
      ]
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json(product.categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getProductsByCategoryId = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findByPk(categoryId, {
      include: [
        {
          model: Product,
          as: 'products'
        }
      ]
    });

    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    res.status(200).json(category.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createProductCategory = async (req, res) => {
  const { productId, categoryId } = req.body;

  try {
    const productCategory = await ProductCategory.create({
      produto_id: productId,
      categoria_id: categoryId,
    });

    res.status(201).json(productCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteProductCategory = async (req, res) => {
  const { productId, categoryId } = req.body;

  try {
    const productCategory = await ProductCategory.findOne({
      where: {
        produto_id: productId,
        categoria_id: categoryId,
      }
    });

    if (!productCategory) {
      return res.status(404).json({ error: 'Associação não encontrada' });
    }

    await productCategory.destroy();
    res.status(200).json({ message: 'Associação removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};