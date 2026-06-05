import CarrinhoResumo from "../components/CarrinhoResumo";

function Checkout({
  carrinho,
  produtos,
  limparCarrinho,
  totalItens,
  totalCompra,
  finalizarCompra,
}) {
  return (
    <div className="container">
      <CarrinhoResumo
        total={totalItens}
        carrinho={carrinho}
        produtos={produtos}
        limparCarrinho={limparCarrinho}
        totalCompra={totalCompra}
        finalizarCompra={finalizarCompra}
      />
    </div>
  );
}

export default Checkout;