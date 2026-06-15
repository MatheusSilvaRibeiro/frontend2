import { useState, useEffect } from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

import buscarProdutos from "./services/ProdutoService";

function App() {
  const [carrinho, setCarrinho] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagemProdutos, setMensagemProdutos] = useState("");

  const [pedidos, setPedidos] = useState([]);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) setCarrinho(JSON.parse(carrinhoSalvo));
  }, []);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setCarregando(true);
        const dados = await buscarProdutos();
        setProdutos(dados);
        setMensagemProdutos("Produtos carregados com sucesso.");
      } catch (error) {
        setMensagemProdutos("Não foi possível carregar os produtos.");
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionar = (nome) => {
    setCarrinho((prev) => ({
      ...prev,
      [nome]: (prev[nome] || 0) + 1,
    }));
  };

  const remover = (nome) => {
    setCarrinho((prev) => {
      const quantidadeAtual = prev[nome] || 0;

      if (quantidadeAtual <= 1) {
        const novo = { ...prev };
        delete novo[nome];
        return novo;
      }

      return {
        ...prev,
        [nome]: quantidadeAtual - 1,
      };
    });
  };

  const limparCarrinho = () => {
    setCarrinho({});
    localStorage.removeItem("carrinho");
  };

  const finalizarCompra = () => {
    setPedidos((prev) => [
      ...prev,
      { id: Date.now(), itens: carrinho },
    ]);

    setPedidoFinalizado(true);
    setCarrinho({});
    localStorage.removeItem("carrinho");
  };

  const totalItens = Object.values(carrinho).reduce(
    (acc, item) => acc + item,
    0
  );

  const totalCompra = produtos.reduce((acc, produto) => {
    const quantidade = carrinho[produto.nome] || 0;
    return acc + quantidade * produto.preco;
  }, 0);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/produtos"
          element={
            <Produtos
              produtos={produtos}
              carrinho={carrinho}
              adicionar={adicionar}
              remover={remover}
              carregando={carregando}
              mensagemProdutos={mensagemProdutos}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              carrinho={carrinho}
              produtos={produtos}
              limparCarrinho={limparCarrinho}
              totalItens={totalItens}
              totalCompra={totalCompra}
              finalizarCompra={finalizarCompra}
              pedidoFinalizado={pedidoFinalizado}
            />
          }
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;