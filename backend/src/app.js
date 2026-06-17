const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API BlueWave funcionando! 🚀"
  });
});

module.exports = app;