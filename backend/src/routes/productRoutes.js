const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// CREATE - criar produto
router.post("/", async (req, res) => {
  try {
    const produto = await Product.create(req.body);
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// READ - listar produtos
router.get("/", async (req, res) => {
  try {
    const produtos = await Product.find();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const produtoAtualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // retorna o produto atualizado
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json(produtoAtualizado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const produtoDeletado = await Product.findByIdAndDelete(req.params.id);

    if (!produtoDeletado) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json({
      mensagem: "Produto removido com sucesso",
      produto: produtoDeletado
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
module.exports = router;