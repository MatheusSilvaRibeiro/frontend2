import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>BlueWave Tech Store</h1>

        <p>
          Os melhores produtos gamers, acessórios tecnológicos e itens para setup.
        </p>

        <p>
          Explore nossos produtos, monte seu carrinho e tenha uma experiência moderna e rápida.
        </p>

        <Link to="/produtos" className="home-button">
          Ver Produtos
        </Link>
      </div>
    </div>
  );
}

export default Home;