const express = require('express');
const app = express();
const port = 8080; // Porta em que o servidor irá rodar

// Endpoint que responde com um JSON
app.get('/', (req, res) => {
  res.send('Esse é o Meu trabalho de Node.js!! Fernanda Amorim')
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
