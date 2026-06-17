import { atualizarEstoqueAposPedido } from "./ProdutoService";

const PEDIDOS_KEY = "bluewave_pedidos";

export async function criarPedido(pedido) {
  const pedidoFinal = {
    id: Date.now(),
    data: new Date().toLocaleString("pt-BR"),
    status: "Finalizado",
    ...pedido,
  };

  atualizarEstoqueAposPedido(pedidoFinal.itens);

  const pedidos = JSON.parse(localStorage.getItem(PEDIDOS_KEY)) || [];
  pedidos.push(pedidoFinal);

  localStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));

  return pedidoFinal;
}

export function listarPedidos() {
  return JSON.parse(localStorage.getItem(PEDIDOS_KEY)) || [];
}