# BlueWave Tech Store

Sistema web full stack de loja virtual para produtos tecnológicos, desenvolvido como projeto integrado das disciplinas de Front-end II e Back-endII.

---

# Objetivo do Projeto

Desenvolver uma aplicação web completa para gerenciamento de produtos e pedidos de uma loja virtual, integrando front-end React com uma API RESTful em Node.js + Express e persistência em banco de dados NoSQL.

---

# Evolução das Sprints

## Sprint 1

* criação da aplicação React com Vite
* componentes, estados e eventos

## Sprint 2

* múltiplas páginas com React Router
* listagem dinâmica de produtos
* carrinho de compras
* checkout
* persistência com localStorage
* consumo de API externa

## Sprint 3

* integração Front-end + Back-end
* API RESTful própria
* CRUD completo de produtos
* gerenciamento de pedidos
* controle de estoque
* MongoDB
* testes unitários com Jest
* ESLint

---

# Funcionalidades

## Cliente

* visualizar produtos
* pesquisar e filtrar produtos
* visualizar detalhes do produto
* adicionar produtos ao carrinho
* alterar quantidade de itens
* remover itens do carrinho
* finalizar pedido
* validação de estoque

## Administrador

* cadastrar produtos
* listar produtos
* editar produtos
* remover produtos
* visualizar estoque
* listar pedidos
* visualizar detalhes dos pedidos

---

# Tecnologias Utilizadas

## Front-end

* React
* Vite
* React Router
* JavaScript
* CSS

## Back-end

* Node.js
* Express
* MongoDB
* Mongoose
* Jest
* ESLint

---

# Estrutura do Projeto

```txt
bluewave/
├── frontend/
│   └── aplicação React
│
├── backend/
│   └── API RESTful Node.js + Express
│
├── docs/
│   ├── sprint1/
│   ├── sprint2/
│   └── sprint3/
│
└── README.md
```

---

# Como Executar o Projeto

## Front-end

```bash
cd frontend
npm install
npm run dev
```

## Back-end

```bash
cd backend
npm install
npm run dev
```

---

# Fluxo Git do Projeto

## Branches principais

* `main` → versão estável
* `develop` → integração da Sprint 3

## Branches individuais

Cada integrante trabalha em sua própria branch:

```bash
git checkout develop
git pull
git checkout -b feature/nome-da-tarefa
```

Após finalizar:

```bash
git add .
git commit -m "mensagem clara"
git push -u origin feature/nome-da-tarefa
```

Depois:

* abrir Pull Request para `develop`
* revisão do grupo
* merge da funcionalidade

---

# Requisitos Técnicos Atendidos

## Front-end II

* React com Vite
* componentização
* React Router
* formulários controlados
* gerenciamento de estado
* integração com API RESTful

## Back-endII

* API RESTful
* CRUD completo
* MongoDB
* tratamento de exceções
* ESLint
* testes unitários com Jest
* cobertura de testes

---

# Integrantes

* Matheus Silva Ribeiro
* Tauane Carolina da Silva
* Igor da Rosa Mafalda
* Luan
