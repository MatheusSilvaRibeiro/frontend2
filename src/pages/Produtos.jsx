import ProdutoCard from "../components/ProdutoCard";

function Produtos({ produtos, carrinho, adicionar, remover }) {
  return (
    <div className="container">
      <div className="grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
            quantidade={carrinho[produto.nome] || 0}
            adicionar={adicionar}
            remover={remover}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;