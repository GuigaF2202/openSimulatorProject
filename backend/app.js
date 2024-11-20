const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.send('Backend do OpenSimulator está funcionando.');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
