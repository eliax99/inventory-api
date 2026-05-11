const express = require("express");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// públicos o protegidos (aquí los protegemos todos)
router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getProductById);
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;