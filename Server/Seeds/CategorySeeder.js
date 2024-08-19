import { Brand } from '../Models/Brand.js';      
import { Category } from '../Models/Category.js'

const seed = async () => {
  try {
    const brands = ['Adidas', 'Calenciaga', 'K-swiss', 'Nike', 'Puma'];
    await Promise.all(brands.map(brandName =>
      Brand.create({ nome: brandName })
    ));

    const categories = [
      { nome: 'Esporte e Lazer', usa_no_menu: true },
      { nome: 'Casual', usa_no_menu: true },
      { nome: 'Utilitário', usa_no_menu: false },
      { nome: 'Corrida', usa_no_menu: true },
      { nome: 'Camisetas', usa_no_menu: true },
      { nome: 'Calças', usa_no_menu: true },
      { nome: 'Bonés', usa_no_menu: false },
      { nome: 'Headphones', usa_no_menu: false },
      { nome: 'Tênis', usa_no_menu: true }
    ];
    await Promise.all(categories.map(category =>
      Category.create(category)
    ));

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao povoar o banco de dados:', error);
  }
};
seed(); 