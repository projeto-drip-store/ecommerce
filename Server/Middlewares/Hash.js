import bcrypt from "bcrypt";
import chalk from "chalk";

export const doHash = (password) => {
  const saltRounds = 10;
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(chalk.bgGreen.bold(`\n Senha hasheada com sucesso!!\n`))
    return hash;
  } catch (error) {
    console.error(chalk.bgRed.bold(`\nErro ao dar hash \n`), error);
  }
};  

export const doCompare = (password, hash) => {
  try {
    const result = bcrypt.compareSync(password, hash);
    console.log(chalk.bgGreen.bold(`\n Senha verificada com sucesso!!\n`));
    return result;
  } catch (error) {
    console.error(`\nErro ao comparar senhas\n`, error);
    return false;
  }
}
