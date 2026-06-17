import { useState } from "react";

function Admin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);
  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState(null);
  const [produtos, setProdutos] = useState([]);

  function fazerLogin(e) {
    
    e.preventDefault();

    if (usuario === "admin" && senha === "1234") {
      setLogado(true);
      setErro("");
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  }
function fazerLogin(e) {
  e.preventDefault();

  if (usuario === "admin" && senha === "1234") {
    setLogado(true);
    setErro("");
  } else {
    setErro("Usuário ou senha inválidos.");
  }
}

// ADICIONE AQUI 👇
function cadastrarProduto(e) {
  e.preventDefault();

  const novoProduto = {
    id: Date.now(),
    nome,
    preco,
    imagem: imagem ? imagem.name : "Sem imagem",
  };

  setProdutos([...produtos, novoProduto]);

  setNome("");
  setPreco("");
  setImagem(null);
}
  if (!logado) {
    return (
      <div className="admin-container">
        <h1>Login Administrativo</h1>

        <form className="admin-form" onSubmit={fazerLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>

          {erro && <p>{erro}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1>Painel Administrativo</h1>

      <form className="admin-form" onSubmit={cadastrarProduto}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagem(e.target.files[0])}
        />

        <button type="submit">
          Cadastrar Produto
        </button>
      </form>

      <div className="admin-lista">
  <h2>Produtos cadastrados</h2>

  {produtos.length === 0 ? (
    <p>Nenhum produto cadastrado.</p>
  ) : (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco}

          <button
            type="button"
            onClick={() =>
              setProdutos(
                produtos.filter(
                  (p) => p.id !== produto.id
                )
              )
            }
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
}

export default Admin;