import { produtos } from "../data/produtos";

const PRODUTOS_KEY = "bluewave_produtos";

function salvarProdutos(listaProdutos) {
  localStorage.setItem(PRODUTOS_KEY, JSON.stringify(listaProdutos));
}

function carregarProdutosLocais() {
  const produtosSalvos = JSON.parse(localStorage.getItem(PRODUTOS_KEY));

  if (produtosSalvos && produtosSalvos.length > 0) {
    return produtosSalvos;
  }

  salvarProdutos(produtos);
  return produtos;
}

export async function buscarProdutos() {
  return carregarProdutosLocais();
}

export function atualizarEstoqueAposPedido(itensPedido) {
  const produtosAtuais = carregarProdutosLocais();

  const produtosAtualizados = produtosAtuais.map((produto) => {
    const itemPedido = itensPedido.find(
      (item) => String(item.produtoId) === String(produto.id)
    );

    if (!itemPedido) return produto;

    return {
      ...produto,
      estoque: Math.max((produto.estoque || 0) - itemPedido.quantidade, 0),
    };
  });

  salvarProdutos(produtosAtualizados);
  return produtosAtualizados;
}

export default buscarProdutos;