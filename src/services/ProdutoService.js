import { produtos } from "../data/produtos";

async function buscarProdutos() {
  try {
    const categorias = [
      "smartphones",
      "laptops",
      "tablets",
      "mobile-accessories",
    ];

    const requisicoes = categorias.map((categoria) =>
      fetch(`https://dummyjson.com/products/category/${categoria}`)
    );

    const respostas = await Promise.all(requisicoes);

    const dados = await Promise.all(
      respostas.map((resposta) => resposta.json())
    );

    const produtosApi = dados.flatMap((item) => item.products);

    const produtosFormatados = produtosApi.slice(0, 16).map((produto) => ({
      id: produto.id,
      nome: produto.title,
      preco: produto.price,
      imagem: produto.thumbnail,
      descricao: produto.description,
      categoria: produto.category,
    }));

    return produtosFormatados;
  } catch (error) {
    console.error("Erro na API. Usando produtos locais:", error);
    return produtos;
  }
}

export default buscarProdutos;