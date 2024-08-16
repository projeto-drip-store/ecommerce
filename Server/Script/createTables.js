import chalk from "chalk";
import { DBconfig } from "../Config/db.js";
//Tabelas
import { Address } from '../Models/Address.js';
import { Brand } from '../Models/Brand.js';
import { Category } from '../Models/Category.js';
import { Image } from '../Models/Image.js';
import { Product } from '../Models/Product.js';
import { ProductCategory } from '../Models/Product_Category.js';
import { ProductImage } from '../Models/Product_Image.js';
import { Requests } from '../Models/Requests.js';
import { Sales } from '../Models/Sales.js';
import { Telephone } from '../Models/Telephone.js';
import { User } from '../Models/User.js';
import { UserAddress } from '../Models/User_Address.js';
import { UserTelephone } from '../Models/User_Telephone.js';




export const createTables = async () => {
    try {
        await DBconfig.authenticate();
        console.log(chalk.bgGreen.bold('\nConexão com o banco de dados estabelecida com sucesso.\n'));

        await DBconfig.sync();
        console.log(chalk.bgGreen.bold('\nTabelas sincronizadas/criadas com sucesso.\n'));

    } catch (error) {
        console.error(chalk.bgRed.bold('\nErro ao sincronizar as tabelas:\n', error));
    };
};

