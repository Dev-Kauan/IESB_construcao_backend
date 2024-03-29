//configuração
const express = require('express');
const app = express();

const tutorial = require('./routes/tutorial');
const subrota = require('./routes/subrota');
const contatos = require('./routes/contatos')

// middlewares
// middlewares que transforma o corpo da requisição em objeto json dentro de uma aplicação
app.use(express.json());

// trazendo as rotas do modulo tutorial pra dentro da minha aplicação
app.use(tutorial);
// trazendo as rotas do modulo subrota
app.use('/rota', subrota);
// trazendo as rotas do modulo contatos
app.use(contatos);

// contrato -> configuração das rotas e da lógica
app.get("/", (req, res) => {
    res.send("Aplicação rodando!!!");
})

app.listen(3000, () => {
    console.log("API iniciada com sucesso!");
})