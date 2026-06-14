function ProdutoTabela({
  produtos,
  onEditar,
  onExcluir,
}) {
  return (
    <div>
      <h2>Lista de Produtos</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Estoque</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>

              <td>
                R$ {produto.preco}
              </td>

              <td>
                {produto.categoria}
              </td>

              <td>
                {produto.estoque}
              </td>

              <td>
                {produto.descricao}
              </td>

              <td>
                <button
                  onClick={() =>
                    onEditar(produto)
                  }
                >
                  Editar
                </button>

                <button
                  onClick={() =>
                    onExcluir(produto.id)
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoTabela;