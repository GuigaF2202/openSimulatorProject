
# **OpenSimulator Project**

Bem-vindo ao projeto OpenSimulator! Este é um sistema modularizado composto por um backend em **Node.js** e um frontend em **React.js**, com suporte a internacionalização (i18n), autenticação JWT e um pipeline CI/CD configurado para deploy automatizado.

---

## **Sumário**
- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Configuração do Projeto](#configuração-do-projeto)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## **Visão Geral**

Este projeto tem como objetivo fornecer um exemplo prático de um sistema completo, com:
- Backend configurado com Express, JWT para autenticação e MySQL para armazenamento de dados.
- Frontend com React.js, React Router e suporte a internacionalização (i18next).
- Um pipeline CI/CD configurado para facilitar o deploy (ajustável conforme necessário).

---

## **Pré-requisitos**

Certifique-se de que você tem os seguintes itens instalados:
- **Node.js** (versão 18 ou superior)
- **MySQL** (local ou em um servidor)
- **Git** (para gerenciar o repositório)

---

## **Tecnologias Utilizadas**

### **Backend**
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs RESTful.
- **MySQL**: Banco de dados relacional para armazenar informações.
- **jsonwebtoken (JWT)**: Autenticação baseada em tokens.
- **bcrypt**: Para hashing seguro de senhas.

### **Frontend**
- **React.js**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM**: Gerenciamento de rotas no frontend.
- **i18next**: Suporte a internacionalização (i18n) e tradução.

### **Infraestrutura e Ferramentas**
- **CI/CD (GitHub Actions)**: Pipeline automatizado para build, testes e deploy.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Framer Motion**: Animações no frontend.

---

## **Funcionalidades Principais**
- **Autenticação JWT**: Login seguro com proteção de rotas.
- **Internacionalização**: Suporte a múltiplos idiomas (inglês, português e espanhol).
- **Dashboard Interativo**: Interface para gerenciar dados do usuário.
- **Pipeline CI/CD**: Deploy contínuo com testes automatizados.
- **Scripts Utilitários**: Gerenciamento de portas e configuração local.

---

## **Configuração do Projeto**

### **1. Backend**

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```

2. Crie o arquivo `.env` com base no exemplo:
   ```bash
   cp .env.example .env
   ```

   **Exemplo de configuração `.env`:**
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=opensimulator
   JWT_SECRET=seu_token_secreto
   PORT=5000
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

   O backend estará disponível em: `http://localhost:5000`.

---

### **2. Frontend**

1. Navegue até a pasta `frontend`:
   ```bash
   cd frontend
   ```

2. Crie o arquivo `.env` com base no exemplo:
   ```bash
   cp .env.example .env
   ```

   **Exemplo de configuração `.env`:**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

   O frontend estará disponível em: `http://localhost:3000`.

---

## **Scripts Disponíveis**

### **Backend**
- `npm start`: Inicia o servidor Node.js.

### **Frontend**
- `npm start`: Inicia o servidor de desenvolvimento React.
- `npm run build`: Gera a versão otimizada do frontend para produção.

### **Scripts de Gerenciamento**
- `scripts/portas.sh`: Script para verificar e liberar portas no sistema.

---

## **Estrutura do Projeto**

Abaixo está a estrutura principal do projeto:

```
.github/               # Configurações de CI/CD
.vscode/               # Configurações do VS Code
backend/               # Código do backend
  config/              # Configurações do banco de dados
  controllers/         # Controladores de rotas
  middleware/          # Middlewares (e.g., autenticação JWT)
  routes/              # Rotas da API
frontend/              # Código do frontend
  src/
    components/        # Componentes React
    locales/           # Arquivos de tradução (i18next)
scripts/               # Scripts utilitários
.env                   # Configurações gerais do projeto
.gitignore             # Ignorar Arquivos Sensíveis
README.md              # Documentação do projeto
```

---

## **Contribuindo**

Contribuições são bem-vindas! Para começar:
1. Faça um fork deste repositório.
2. Crie uma branch com sua funcionalidade/ajuste:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie seu código para revisão:
   ```bash
   git push origin minha-feature
   ```

---

## **Licença**

Este projeto está licenciado sob a licença **MIT**. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.
