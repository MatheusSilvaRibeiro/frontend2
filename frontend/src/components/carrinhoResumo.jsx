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
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const itensCarrinho = Object.entries(carrinho)
    .map(([produtoId, quantidade]) => {
      const produto = produtos.find(
        (item) => String(item.id) === String(produtoId)
      );

      if (!produto || quantidade <= 0) return null;

      return {
        produtoId,
        nome: produto.nome,
        quantidade,
        preco: produto.preco,
        subtotal: produto.preco * quantidade,
      };
    })
    .filter(Boolean);

  async function enviarCheckout(evento) {
    evento.preventDefault();

    if (
      nome.trim() === "" ||
      email.trim() === "" ||
      telefone.trim() === "" ||
      endereco.trim() === ""
    ) {
      setMensagem("Preencha todos os dados para finalizar o pedido.");
      setTipoMensagem("erro");
      return;
    }

    const pedido = {
      cliente: {
        nome,
        email,
        telefone,
        endereco,
      },
      itens: itensCarrinho.map((item) => ({
        produtoId: item.produtoId,
        nome: item.nome,
        quantidade: item.quantidade,
        preco: item.preco,
      })),
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
      setTelefone("");
      setEndereco("");
    } catch (error) {
      setMensagem(
        "Não foi possível finalizar o pedido. Verifique a conexão com a API."
      );
      setTipoMensagem("erro");
    }
  }

  return (
    <div className="resumo checkout-container">
      <h2>Finalização do pedido</h2>

      {carrinhoVazio ? (
        <div className="carrinho-vazio">
          <p>Seu carrinho está vazio.</p>
          <p>Adicione produtos para continuar a compra.</p>
        </div>
      ) : (
        <>
          <section className="checkout-section">
            <h3>Itens do carrinho</h3>

            <div className="lista-carrinho">
              {itensCarrinho.map((item) => (
                <div className="item-carrinho" key={item.produtoId}>
                  <div>
                    <strong>{item.nome}</strong>
                    <p>Quantidade: {item.quantidade}</p>
                  </div>

                  <div>
                    <p>Unitário: R$ {item.preco.toFixed(2)}</p>
                    <strong>Subtotal: R$ {item.subtotal.toFixed(2)}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="checkout-section resumo-pedido">
            <h3>Resumo do pedido</h3>

            <p>Total de itens: {total}</p>
            <p>Subtotal: R$ {totalCompra.toFixed(2)}</p>

            <h3>Total: R$ {totalCompra.toFixed(2)}</h3>

            <button className="limpar-btn" onClick={limparCarrinho}>
              Limpar carrinho
            </button>
          </section>

          <section className="checkout-section">
            <form className="checkout" onSubmit={enviarCheckout}>
              <h3>Dados para finalização</h3>

              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
              />

              <input
                type="email"
                placeholder="E-mail para contato"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />

              <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(evento) => setTelefone(evento.target.value)}
              />

              <input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(evento) => setEndereco(evento.target.value)}
              />

              <button
                className="finalizar-btn"
                type="submit"
                disabled={carrinhoVazio}
              >
                Confirmar pedido
              </button>

              {mensagem && (
                <p className={`mensagem-checkout ${tipoMensagem}`}>
                  {mensagem}
                </p>
              )}
            </form>
          </section>
        </>
      )}
    </div>
  );
}

export default CarrinhoResumo;