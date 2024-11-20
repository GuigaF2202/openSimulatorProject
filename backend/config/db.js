const mysql = require('mysql2');
require('dotenv').config();

// Configuração do MySQL
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Função para criar conexão
const db = mysql.createConnection(dbConfig);

// Conexão inicial
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    setTimeout(() => handleDisconnect(), 2000); // Tenta reconectar após 2 segundos
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

// Reconnect automático em caso de desconexão
const handleDisconnect = () => {
  db.destroy(); // Destroi a conexão antiga
  const newDb = mysql.createConnection(dbConfig);

  newDb.connect((err) => {
    if (err) {
      console.error('Erro ao reconectar ao banco de dados:', err.message);
      setTimeout(() => handleDisconnect(), 2000); // Re-tenta após 2 segundos
    } else {
      console.log('Reconectado ao banco de dados MySQL');
      db = newDb; // Atualiza a referência para a nova conexão
    }
  });
};

// Gerenciamento de erros durante a execução
db.on('error', (err) => {
  console.error('Erro no banco de dados:', err.code);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    handleDisconnect(); // Reconecta automaticamente se a conexão for perdida
  } else {
    throw err; // Outros erros são lançados
  }
});

module.exports = db;
