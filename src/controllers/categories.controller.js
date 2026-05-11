const prisma = require("../lib/prisma");

// CREATE CATEGORY
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: { name },
    });

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: "Error creando categoría" });
  }
};

// GET ALL
const getCategories = async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};