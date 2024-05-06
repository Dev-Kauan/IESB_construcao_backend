const express = require('express');
const app = express();

// Configurando para receber requisições no corpo
app.use(express.json());

// Exportando o meu router pessoas
const pessoas = require('./router/pessoas');
app.use(pessoas);

// Configurando a porta do localhost
app.listen(3000 ,() => {
    console.log("Aplicação rodando");
});