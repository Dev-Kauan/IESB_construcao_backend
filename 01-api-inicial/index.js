// Criando uma instância do modulo express
const express = require('express')
// Criando nossa aplicação
const app = express()

//Definindo os caminhos da aplicação
app.get('/', (req, res) => {
    res.send("Olá");
})

app.get('/hello', (req, res) => {
    res.send("Hello World");
})

app.get('/nome', (req, res) => {
    res.send("Kauan Souza");
})

// Path params
app.get('/aluno/:nome/:matricula/:curso', (req, res) => {
    const nome = req.params.nome;
    const matricula = Number(req.params.matricula);
    const curso = req.params.curso;
    res.send(`Nome: ${nome} <br> Matrícula: ${matricula} <br> Curso: ${curso}`);
})

// Query params
app.get('/pessoa', (req, res) => {
    console.log(req.query);
    res.send("OK!");
})

app.post('/teste', (req, res) => {
    res.send("Teste POST!");
})

app.get('/teste', (req, res) => {
    res.send("Teste GET!")
})

//1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
//Path Param
app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    const nota1 = Number((req.params.nota1));
    const nota2 = Number((req.params.nota2));
    const nota3 = Number((req.params.nota3));
    const nota4 = Number((req.params.nota4));

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    const resultado = media >= 7 ? "Você foi aprovado" : "Você foi reprovado";
    res.send(`Media: ${media}, Aluno ${resultado}`);
})

// executando a aplicação na porta definida
app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`);
})