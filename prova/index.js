const express = require('express');
const app = express();

app.use(express.json());

const livros = require('./router/livros.js');
app.use(livros);

app.listen(3000, () => {
    console.log('APLICAÇÃO RODANDO');
})