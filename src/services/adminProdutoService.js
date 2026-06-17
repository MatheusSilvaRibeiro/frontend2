const STORAGE_KEY = "produtos_admin";

export function listarProdutos() {
  const produtos = localStorage.getItem(STORAGE_KEY);

  return produtos ? JSON.parse(produtos) : [];
}

export function salvarProdutos(produtos) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(produtos)
  );
}