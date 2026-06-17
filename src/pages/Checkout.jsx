import CarrinhoResumo from "../components/CarrinhoResumo";

function Checkout({
  carrinho,
  produtos,
  limparCarrinho,
  totalItens,
  totalCompra,
  finalizarCompra,
  pedidoFinalizado,
}) {
  return (
    <div className="container">
      {pedidoFinalizado ? (
        <div className="resumo">
          <h2>Pedido realizado com sucesso!</h2>
        </div>
      ) : (
        <CarrinhoResumo
          total={totalItens}
          carrinho={carrinho}
          produtos={produtos}
          limparCarrinho={limparCarrinho}
          totalCompra={totalCompra}
          finalizarCompra={finalizarCompra}
        />
      )}
    </div>
  );
}

export default Checkout;