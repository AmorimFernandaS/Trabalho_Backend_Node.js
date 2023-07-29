const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor irá rodar

// Endpoint que responde com um JSON
app.get('/', (req, res) => {
  const data = {
    message: 'Esse é o Meu trabalho de Node.js!! Fernanda Amorim',
    date: new Date()
  };
  res.json(data);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
