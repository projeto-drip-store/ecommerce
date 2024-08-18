import { Product } from "../Models/Product.js"

// GET 

export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST

export const registerProduct = async (req, res) => {
    try {

        const { nome, usado_no_menu, estoque, descricao, preco, preco_desconto } = req.body;

        const product = await Product.create({ nome, usado_no_menu, estoque, descricao, preco, preco_desconto }); 

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
