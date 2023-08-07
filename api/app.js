const express = require('express');
const app = express();
const port = 8080; // Porta em que o servidor irá rodar
const rateLimit = require('express-rate-limit');

//Limitar quantidade de requisiçoes 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, 
  message: 'Muitas requisições, Tente mais tarde!'
});

app.use(limiter);

// Endpoint que responde com um JSON
app.get('/', (req, res) => {
  const data = {
  Nome: 'Fernanda Amorim',
  Projeto: 'Trabalho Node.Js- Campinho/2023',
  date: new Date(),
  }
  res.json(data);
});

// Middleware de tratamento de erros
app.use((req, res) => {
  res.status(404).json({ error:'404:Ocorreu um erro!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
