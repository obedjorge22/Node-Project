# Node Project - CRUD com Express + Sequelize

Este projeto é uma API RESTful simples desenvolvida com **Node.js**, **Express** e **Sequelize**, que realiza operações de CRUD (Create, Read, Update, Delete) para gerenciamento de usuários.

---

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Nodemon
- Git

---
## Estrutura do Projeto

```bash
Crud-with-node/
│
├── database/
│   └── database.js
│
├── models/
│   └── User.js
│
├── index.js
├── package.json
└── package-lock.json 
```


---

## Configuração do Projeto

### Clonar o repositório

```bash
git clone https://github.com/obedjorge22/Node-Project.git
cd Crud-with-node 
```

### Instalar dependências
```npm install
```

### Configurar banco de dados

No arquivo:

database/database.js

### Rodar o servidor

```node index.js
```
ou com nodemon:

```npx nodemon index.js
```
Servidor rodando em:

    http://localhost:3000

## Funcionalidades (CRUD)

### Criar usuário

POST /users

```{
  "email": "carlos@email.com",
  "firstName": "Carlos",
  "lastName": "Silva"
}

```

### Listar todos usuários

GET /users

### Buscar usuário por ID

GET /users/:id

```GET http://localhost:3000/users/1
```

### Atualizar usuário

PUT /users/:id

```json
{
    "email": "novo@email.com",
  "firstName": "Nome Atualizado",
  "lastName": "Sobrenome Atualizado"
}
```

### Deletar usuário

DELETE /users/:id

```DELETE http://localhost:3000/users/1
```

##  Modelo de Dados

| Campo      | Tipo    | Descrição                  |
|------------|---------|----------------------------|
| id         | INTEGER | Auto incremento (PK)       |
| email      | STRING  | Obrigatório e único        |
| firstName  | STRING  | Obrigatório                |
| lastName   | STRING  | Opcional                   |
| createdAt  | DATE    | Criado automaticamente     |
| updatedAt  | DATE    | Atualizado automaticamente |
