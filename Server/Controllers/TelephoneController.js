import { Telephone } from "../Models/Telephone.js"

// GET 
export const getAllTelephone = async (req, res) => {
    try {
        const telephone = await Telephone.findAll();
        res.status(200).json(telephone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST

export const registerTelephone = async (req, res) => {
    try {
        const { telefone } = req.body;
        const telephone = await Telephone.create({ telefone });
        res.status(201).json(telephone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
