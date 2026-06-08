function ProdutoCard({ produto, quantidade, adicionar, remover }) {
  const estoque = produto.estoque ?? 0;
  const estoqueEsgotado = quantidade >= estoque;

  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />

      <div className="card-content">
        <h3>{produto.nome}</h3>

        <p className="preco">R$ {produto.preco?.toFixed(2)}</p>

        <p>Estoque: {estoque}</p>

        <div className="controls">
          <button onClick={() => remover(produto.id)}>-</button>

          <span>{quantidade}</span>

          <button
            onClick={() => adicionar(produto.id)}
            disabled={estoqueEsgotado}
          >
            +
          </button>
        </div>

        {estoqueEsgotado && (
          <p className="estoque-msg">Estoque máximo atingido</p>
        )}
      </div>
    </div>
  );
}

export default ProdutoCard;