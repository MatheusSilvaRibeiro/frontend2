const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String,
  estoque: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("Product", ProductSchema);