import { User } from "../Models/User.js";


//GET

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST

export const createUser = async (req, res) => {
  try {
    const { nome, email, password, user, cpf } = req.body
    const users = await User.create({nome, email, password, user, cpf});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
