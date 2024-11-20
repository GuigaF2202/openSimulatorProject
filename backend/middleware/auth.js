const jwt = require('jsonwebtoken');

/**
 * Middleware para verificar autenticação usando JWT.
 */
const authenticateToken = (req, res, next) => {
  // Obtém o token do cabeçalho de autorização
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  // Remove o prefixo "Bearer" (se presente) e verifica o token
  const tokenValue = token.split(' ')[1];
  jwt.verify(tokenValue, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido.' });
    }
    req.user = user; // Adiciona os dados do usuário ao request
    next(); // Continua para a próxima função na rota
  });
};

module.exports = authenticateToken;
