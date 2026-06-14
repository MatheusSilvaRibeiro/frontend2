import { useState, useEffect } from "react";

import ProdutoForm from "../components/ProdutoForm";

import ProdutoTabela from "../components/ProdutoTabela";

import {
  listarProdutos,
  salvarProdutos,
} from "../services/adminProdutoService";

function AdminProdutos() {
  const [produtos, setProdutos] = useState([]);

  const [produtoEditando, setProdutoEditando] =
    useState(null);

  useEffect(() => {
    setProdutos(listarProdutos());
  }, []);

  const salvar = (produto) => {
    let novosProdutos;

    if (produtoEditando) {
      novosProdutos = produtos.map((p) =>
        p.id === produto.id
          ? produto
          : p
      );
    } else {
      novosProdutos = [
        ...produtos,
        produto,
      ];
    }

    setProdutos(novosProdutos);

    salvarProdutos(novosProdutos);

    setProdutoEditando(null);
  };

  const excluir = (id) => {
    const confirmar =
      window.confirm(
        "Deseja excluir este produto?"
      );

    if (!confirmar) return;

    const novosProdutos =
      produtos.filter(
        (produto) =>
          produto.id !== id
      );

    setProdutos(novosProdutos);

    salvarProdutos(novosProdutos);
  };

  return (
    <div className="container">
      <h1>
        Painel Administrativo
      </h1>

      <ProdutoForm
        onSalvar={salvar}
        produtoEditando={
          produtoEditando
        }
      />

      <ProdutoTabela
        produtos={produtos}
        onEditar={
          setProdutoEditando
        }
        onExcluir={excluir}
      />
    </div>
  );
}

export default AdminProdutos;