import { User } from "../Models/User.js";
import { UserAddress } from "../Models/User_Address.js";

import { doCompare, doHash } from "../Middlewares/Hash.js";

//GET

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST - RERGISTER

export const registerUser = async (req, res) => {
  try {

    const { nome, email, senha, cpf } = req.body;

    const hashedPassword = doHash(senha);
    const users = await User.create({nome, email, senha: hashedPassword, cpf});

    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST - LOGIN

export const loginUser = async (req, res) => {
  try {
    const { email, senha} = req.body;
    const user = await User.findOne({ where: { email } });

    if(doCompare(senha, user.senha)) {
      
      console.log('Login efetuado com sucesso!');
      res.status(200).json({message: 'Login efetuado com sucesso!'});
    } else {
      console.log('Credenciais inválidas!');
      
      res.status(401).json({ error: 'Credenciais inválidas!' });
    }

  } catch (error) {
    console.log(error);
  };
};
