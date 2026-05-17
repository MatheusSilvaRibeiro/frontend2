# BlueWave Tech Store

Mini e-commerce desenvolvido em React.js para a disciplina de Frontend.

O sistema simula uma loja virtual de produtos tecnológicos, permitindo navegação entre páginas, listagem dinâmica de produtos, carrinho de compras e checkout com persistência local.

---

# Objetivo do Projeto

Desenvolver uma aplicação React utilizando os conceitos trabalhados em aula:

- Componentização
- Estados com `useState`
- Hooks com `useEffect`
- Navegação com React Router
- Consumo de API externa
- Persistência com `localStorage`
- Organização de projeto frontend

---

# Tecnologias Utilizadas

- React.js
- Vite
- JavaScript
- React Router DOM
- CSS
- DummyJSON API

---

# Funcionalidades

- Navegação entre páginas
- Listagem dinâmica de produtos
- Consumo de API externa
- Carrinho de compras
- Persistência com `localStorage`
- Checkout com validação de formulário
- Estrutura organizada em componentes e páginas
- Fallback local para produtos em caso de erro da API

---

# Estrutura do Projeto

```txt
src/
├── assets/
├── components/
│   ├── Header.jsx
│   ├── ProdutoCard.jsx
│   └── CarrinhoResumo.jsx
│
├── data/
│   └── produtos.js
│
├── pages/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   └── Checkout.jsx
│
├── services/
│   └── produtoService.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

# Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/MatheusSilvaRibeiro/frontend2
```

## 2. Instalar as dependências

```bash
npm install
```

## 3. Executar o projeto

```bash
npm run dev
```

---

# Funcionalidades da Sprint 2

- Múltiplas páginas com React Router
- Formulário controlado com `useState`
- Persistência de dados com `localStorage`
- Listagem dinâmica de produtos
- Componentização em arquivos separados
- Integração com API externa
- Estrutura organizada do frontend

---

# Integrantes

- Matheus Silva Ribeiro
- Tauane Carolina
- Igor Mafalda
- Luan

---

# Observações

O sistema utiliza uma API pública para carregamento de produtos. Caso a API esteja indisponível, o projeto utiliza produtos locais como fallback para garantir o funcionamento da aplicação.