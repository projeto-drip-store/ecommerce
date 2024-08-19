import { Telephone } from '../Models/Telephone.js';


export const createTelephone = async (req, res) => {
  try {
    const { telefone } = req.body;
    const newTelephone = await Telephone.create({ telefone });

    res.status(201).json(newTelephone);
  } catch (error) {
  
    res.status(400).json({ message: 'Erro ao criar o telefone.', error: error.message });
  }
};


export const getAllTelephones = async (req, res) => {
  try {
  
    const telephones = await Telephone.findAll();

 
    res.status(200).json(telephones);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao obter os telefones.', error: error.message });
  }
};

export const getTelephoneById = async (req, res) => {
  try {
    const { id } = req.params;
    const telephone = await Telephone.findByPk(id);

    if (!telephone) {
      return res.status(404).json({ message: 'Telefone não encontrado.' });
    }
    res.status(200).json(telephone);
  } catch (error) {

    res.status(400).json({ message: 'Erro ao obter o telefone.', error: error.message });
  }
};

export const updateTelephone = async (req, res) => {
  try {
    const { id } = req.params;
    const { telefone } = req.body;


    const telephone = await Telephone.findByPk(id);

    if (!telephone) {
      return res.status(404).json({ message: 'Telefone não encontrado.' });
    }

    telephone.telefone = telefone;
    await telephone.save();

    res.status(200).json(telephone);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar o telefone.', error: error.message });
  }
};

export const deleteTelephone = async (req, res) => {
  try {
    const { id } = req.params;
    const telephone = await Telephone.findByPk(id);
    if (!telephone) {
      return res.status(404).json({ message: 'Telefone não encontrado.' });
    }
    await telephone.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir o telefone.', error: error.message });
  }
};
