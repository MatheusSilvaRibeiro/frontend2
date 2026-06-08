import API_BASE_URL from "./api";

export async function criarPedido(pedido) {
  const resposta = await fetch(`${API_BASE_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao finalizar pedido");
  }

  return resposta.json();
}