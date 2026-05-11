const express = require("express");
const cors = require("cors");

// Rutas
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");
const categoryRoutes = require("./routes/categories.routes");

// Middleware
const authMiddleware = require("./middleware/auth.middleware");

const app = express();

// =====================
// MIDDLEWARE GLOBAL
// =====================
app.use(cors());
app.use(express.json());

// =====================
// ROUTES
// =====================

// Auth
app.use("/api/auth", authRoutes);

// Products
app.use("/api/products", productRoutes);

// Categories
app.use("/api/categories", categoryRoutes);

// =====================
// TEST ROUTES
// =====================

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

// Ruta protegida (JWT)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Acceso permitido 🔓",
    user: req.user,
  });
});

module.exports = app;