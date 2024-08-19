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
  const { produto_id, categoria_id } = req.body;
  
  if (!produto_id || !categoria_id) {
    return res.status(400).json({ error: "Produto ID e Categoria ID são obrigatórios." });
  }

  try {
    const product = await Product.findByPk(produto_id);
    const category = await Category.findByPk(categoria_id);

    if (!product || !category) {
      return res.status(404).json({ error: "Produto ou Categoria não encontrados." });
    }
    await ProductCategory.create({ produto_id, categoria_id });

    return res.status(201).json({
      success: true,
      message: "Associação criada com sucesso.",
      data: { produto_id, categoria_id }
    });
  } catch (error) {
    console.error('Erro ao criar a associação:', error);
    return res.status(500).json({ error: "Erro interno do servidor." });
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