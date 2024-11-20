const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/auth'); // Middleware de autenticação

// Dados fictícios (substitua pelo banco de dados)
const users = [
  { id: 1, email: 'user1@example.com', password: '$2b$10$1234567890abcdef12345' }, // bcrypt hash
];

// Rota para registro
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Verifica se o usuário já existe
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Usuário já registrado.' });
  }

  // Cria um novo usuário
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'Usuário registrado com sucesso.', user: { id: newUser.id, email: newUser.email } });
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Busca o usuário
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ error: 'Usuário não encontrado.' });
  }

  // Verifica a senha
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  // Gera o token JWT
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login bem-sucedido.', token });
});

// Rota protegida (exemplo)
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Perfil do usuário', user: req.user });
});

module.exports = router;
