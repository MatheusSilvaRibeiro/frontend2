function ProdutoCard({ produto, quantidade, adicionar, remover }) {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />

      <div className="card-content">
        <h3>{produto.nome}</h3>

        <p className="preco">R$ {produto.preco?.toFixed(2)}</p>

        <p>Estoque: {produto.estoque}</p>

        <div className="controls">
          <button onClick={() => remover(produto.id)}>-</button>

          <span>{quantidade}</span>

          <button onClick={() => adicionar(produto.id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCard;