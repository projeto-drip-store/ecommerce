import { Sales } from '../Models/Sales.js'; 


export const createSale = async (req, res) => {
  try {
    const { valor_total } = req.body;

   
    if (valor_total < 0) {
      return res.status(400).json({ message: 'O valor total não pode ser negativo.' });
    }

    const newSale = await Sales.create({ valor_total });
    return res.status(201).json(newSale);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar a venda.', error });
  }
};


export const getAllSales = async (req, res) => {
  try {
    const sales = await Sales.findAll();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar vendas.', error });
  }
};


export const getSaleById = async (req, res) => {
  const { id } = req.params;

  try {
    const sale = await Sales.findByPk(id);

    if (!sale) {
      return res.status(404).json({ message: 'Venda não encontrada.' });
    }

    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar a venda.', error });
  }
};

export const updateSaleById = async (req, res) => {
  const { id } = req.params;
  const { valor_total } = req.body;

  try {
    const sale = await Sales.findByPk(id);

    if (!sale) {
      return res.status(404).json({ message: 'Venda não encontrada.' });
    }

    if (valor_total < 0) {
      return res.status(400).json({ message: 'O valor total não pode ser negativo.' });
    }

    sale.valor_total = valor_total;
    await sale.save();

    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar a venda.', error });
  }
};


export const deleteSaleById = async (req, res) => {
  const { id } = req.params;

  try {
    const sale = await Sales.findByPk(id);

    if (!sale) {
      return res.status(404).json({ message: 'Venda não encontrada.' });
    }

    await sale.destroy();
    return res.status(204).send(); 
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar a venda.', error });
  }
};