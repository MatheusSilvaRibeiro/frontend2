import { useState, useEffect } from "react";

function ProdutoForm({
  onSalvar,
  produtoEditando,
}) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] =
    useState("");
  const [categoria, setCategoria] = useState("");
  const [estoque, setEstoque] = useState("");

  useEffect(() => {
    if (produtoEditando) {
      setNome(produtoEditando.nome);
      setPreco(produtoEditando.preco);
      setDescricao(
        produtoEditando.descricao
      );
      setCategoria(produtoEditando.categoria || "");
      setEstoque(produtoEditando.estoque || "");
    }
  }, [produtoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSalvar({
      id: produtoEditando?.id || Date.now(),
      nome,
      preco,
      descricao,
      categoria,
      estoque,
  });

    setNome("");
    setPreco("");
    setDescricao("");
    setCategoria("");
    setEstoque("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produto</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
        required
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) =>
          setPreco(e.target.value)
        }
        required
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) =>
          setDescricao(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value)
       }
       required
    />

      <input
        type="number"
        placeholder="Estoque"
        value={estoque}
        onChange={(e) =>
          setEstoque(e.target.value)
     }
        required
    />

      <button type="submit">
        {produtoEditando
          ? "Atualizar Produto"
          : "Cadastrar Produto"}
      </button>
    </form>
  );
}

export default ProdutoForm;