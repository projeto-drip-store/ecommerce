// import { Brand, Category } from '../Models'; // Importar os modelos Brand e Category

// const seed = async () => {
//   try {
//     // Criação de marcas
//     const brands = ['Adidas', 'Calenciaga', 'K-swiss', 'Nike', 'Puma'];
//     await Promise.all(brands.map(brandName => Brand.create({ name: brandName })));

//     // Criação de categorias
//     const categories = ['Esporte e Lazer', 'Casual', 'Utilitário', 'Corrida'];
//     await Promise.all(categories.map(categoryName => Category.create({ name: categoryName })));

//     console.log('Dados inseridos com sucesso!');
//   } catch (error) {
//     console.error('Erro ao povoar o banco de dados:', error);
//   }
// };

// seed(); // Executar a função de seeding