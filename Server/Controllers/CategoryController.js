
import { Category } from "../Models/Category.js";

//POST
export const createCategory = async (req, res) => {
  
  try {
    console.log('Requisição POST recebida:', req.body);
    const { nome, usa_no_menu } = req.body
    const newCategory = await Category.create({nome, usa_no_menu});

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar categoria" });
  }
};

//PUT BY ID
export const updateCategory = async (req, res) =>{
  try {
    const category = await Category.findByPk(req.params.id);
    if(category){
        await category.update(req.body)

    res.status(200).json(category);
    } else {
        res.status(404).json({error: 'Categoria não encontrada'})
    }
  } catch (error) {
    res.status(500).json({error: 'Erro ao atualizar categoria'})  
  }
};

//DELETE BY ID
export const deleteCategory = async (req, res) =>{

  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
        await category.destroy()
res.status(200).json({message: 'Categoria excluida com sucesso'})
    } else {
res.status(404).json({error: 'Categoria não criada'});
        } 
    }catch (error) {
        res.status(500).json({ error: "Erro ao excluir categoria" })
      }
    }

//GET ALL
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()

    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' })
  }
};

//GET ID
export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar a categoria', error });
    }
};

