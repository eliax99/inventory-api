const prisma = require("../lib/prisma");

// GET ALL
const getProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  res.json(products);
};

// GET BY ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
};

// CREATE
const createProduct = async (req, res) => {
  try {
    const { name, sku, price, stock, categoryId } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        sku,
        price,
        stock,
        categoryId,
      },
    });

    res.json(product);
  } catch (err) {
  console.log(err);
  res.status(500).json({ error: err.message });
}
};

// UPDATE
const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: req.body,
  });

  res.json(product);
};

// DELETE
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await prisma.product.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Producto eliminado" });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};