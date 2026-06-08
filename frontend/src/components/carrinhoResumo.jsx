import { useState } from "react";
import { criarPedido } from "../services/PedidoService";

function CarrinhoResumo({
  total,
  carrinho,
  produtos,
  limparCarrinho,
  totalCompra,
  finalizarCompra,
}) {
  const carrinhoVazio = total === 0;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  async function enviarCheckout(evento) {
    evento.preventDefault();

    if (nome.trim() === "" || email.trim() === "" || endereco.trim() === "") {
      setMensagem("Preencha todos os campos antes de finalizar a compra.");
      setTipoMensagem("erro");
      return;
    }

    const itens = Object.entries(carrinho).map(([produtoId, quantidade]) => {
      const produto = produtos.find(
        (item) => String(item.id) === String(produtoId)
      );

      return {
        produtoId,
        nome: produto?.nome || "Produto não encontrado",
        quantidade,
        preco: produto?.preco || 0,
      };
    });

            const pedido = {
          cliente: {
            nome,
            email,
            endereco,
          },
          itens,
          total: totalCompra,
        };

console.log("Pedido enviado:", pedido);
    try {
      await criarPedido(pedido);

      setMensagem("Pedido finalizado com sucesso!");
      setTipoMensagem("sucesso");

      finalizarCompra();

      setNome("");
      setEmail("");
      setEndereco("");
    } catch (error) {
      setMensagem("Não foi possível finalizar o pedido. Tente novamente.");
      setTipoMensagem("erro");
    }
  }

  return (
    <div className="resumo">
      <h2>Carrinho</h2>

      <p>Total de itens: {total}</p>

      {carrinhoVazio ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
                <div className="lista-carrinho">
        {Object.entries(carrinho).map(([produtoId, quantidade]) => {
          if (quantidade <= 0) return null;

          const produtoEncontrado = produtos.find(
            (produto) => String(produto.id) === String(produtoId)
          );

          const nomeProduto = produtoEncontrado
            ? produtoEncontrado.nome
            : "Produto não encontrado";

          const preco = produtoEncontrado ? produtoEncontrado.preco : 0;

          return (
            <p key={produtoId}>
              {nomeProduto}: {quantidade} — R$ {(preco * quantidade).toFixed(2)}
            </p>
          );
        })}
      </div>

          <h3>Total da compra: R$ {totalCompra.toFixed(2)}</h3>

          <form className="checkout" onSubmit={enviarCheckout}>
            <h2>Informações de entrega</h2>

            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />

            <input
              type="text"
              placeholder="Endereço de entrega"
              value={endereco}
              onChange={(evento) => setEndereco(evento.target.value)}
            />

            <button className="finalizar-btn" type="submit">
              Finalizar pedido
            </button>

            {mensagem && (
              <p className={`mensagem-checkout ${tipoMensagem}`}>
                {mensagem}
              </p>
            )}
          </form>

          <button className="limpar-btn" onClick={limparCarrinho}>
            Limpar carrinho
          </button>
        </>
      )}
    </div>
  );
}

export default CarrinhoResumo;