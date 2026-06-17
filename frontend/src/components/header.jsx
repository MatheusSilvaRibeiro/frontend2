import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">BlueWave</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/checkout">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;