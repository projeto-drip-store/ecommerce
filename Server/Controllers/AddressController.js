import { Address } from "../Models/Address.js"

// GET 
export const getAllAddress = async (req, res) => {
    try {
        const address = await Address.findAll();
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST

export const registerAddress = async (req, res) => {
    try {
        const { endereco, bairro, cidade, cep, complemento } = req.body;
        const address = await Address.create({ endereco, bairro, cidade, cep, complemento });
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
