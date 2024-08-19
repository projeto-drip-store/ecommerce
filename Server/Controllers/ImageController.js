import { Image } from '../Models/Image.js';

export const createImage = async (req, res) => {
  try {
    const { ativo, path } = req.body;
    const newImage = await Image.create({ ativo, path });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a imagem', error });
  }
};

export const getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as imagens', error });
  }
};

export const getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByPk(id);
    if (!image) return res.status(404).json({ message: 'Imagem não encontrada' });
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a imagem', error });
  }
};

export const updateImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const { ativo, path } = req.body;
    const [updated] = await Image.update({ ativo, path }, { where: { id } });
    if (!updated) return res.status(404).json({ message: 'Imagem não encontrada' });
    const updatedImage = await Image.findByPk(id);
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a imagem', error });
  }
};

export const deleteImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Image.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Imagem não encontrada' });
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a imagem', error });
  }
};
