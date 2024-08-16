import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const User = DBconfig.define("usuario", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: true, 
  },
  email: {
    type: Sequelize.STRING(100), 
    allowNull: false, 
    unique: true, 
    validate: {
      isEmail: true, 
    }
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false, 
  },
  user: {
    type: Sequelize.STRING(30), 
    allowNull: false, 
    unique: true, 
  },
  cpf: {
    type: Sequelize.STRING(11), 
    allowNull: false, 
    unique: true,
    validate: {
      len: [11, 11], 
    }
  }
});
