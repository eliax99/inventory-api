const prisma = require("../lib/prisma"); //Base de datos
const bcrypt = require("bcryptjs"); //Encriptar password
const jwt = require("jsonwebtoken"); //Mantener sesión

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(400).json({ error: "Usuario ya existe" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashed },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error en register" });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Usuario no existe" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Password incorrecta" });

    const token = jwt.sign( //Si todo es correcto, creamos el token
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Error en login" });
  }
};

module.exports = { register, login };