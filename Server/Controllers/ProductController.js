
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getProductById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createProduct = async (req, res) => {
  const { ativo, slug, usado_no_menu, estoque, descricao, preco, preco_desconto } = req.body;

  try {
    const product = await Product.create({
      ativo,
      slug,
      usado_no_menu,
      estoque,
      descricao,
      preco,
      preco_desconto
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { ativo, slug, usado_no_menu, estoque, descricao, preco, preco_desconto } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.update({
      ativo,
      slug,
      usado_no_menu,
      estoque,
      descricao,
      preco,
      preco_desconto
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

