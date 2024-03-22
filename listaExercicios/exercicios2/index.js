const express = require('express');
const app = express()

// middlewares -> intermediário
app.use(express.json());

//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.

// PATH PARAMS
app.get('/ex01/:qtdMinima/:qtdMaxima', (req, res) => {
    const qtdMinima = Number(req.params.qtdMinima);
    const qtdMaxima = Number(req.params.qtdMaxima);

    const estoqueMedio = (qtdMinima + qtdMaxima) / 2;
    res.send(`Estoque médio: ${estoqueMedio}`);
})

// QUERY PARAMS
app.get('/ex01/', (req, res) => {
    const qtdMinima = Number(req.query.qtdMinima);
    const qtdMaxima = Number(req.query.qtdMaxima);

    const estoqueMedio = (qtdMinima + qtdMaxima) / 2;
    res.send(`Estoque médio: ${estoqueMedio}`);
})

// BODY PARAMS
app.post('/ex01/', (req, res) => {
    const qtdMinima = Number(req.body.qtdMinima);
    const qtdMaxima = Number(req.body.qtdMaxima);

    const estoqueMedio = (qtdMinima + qtdMaxima) / 2;
    res.send(`Estoque médio: ${estoqueMedio}`);
})

app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`);
});