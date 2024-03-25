const express = require('express');
const app = express()

// middlewares -> intermediário
app.use(express.json());

//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.

// BODY PARAMS
app.post('/ex01/', (req, res) => {
    const qtdMinima = Number(req.body.qtdMinima);
    const qtdMaxima = Number(req.body.qtdMaxima);

    const estoqueMedio = (qtdMinima + qtdMaxima) / 2;
    res.send(`Estoque médio: ${estoqueMedio}`);
})

//2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.

app.post('/ex02/', (req, res) => {
    const nome = req.query.nome;
    let salario = Number(req.query.salario);

    if (salario < 1000) {
        salario += salario * 0.30;
        return res.send(`${nome}, seu salário com reajuste ficou R$${salario}.`);
    }

    res.send(`${nome}, você não tem direito ao aumento.`);
})

//3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.

app.post('/ex03/', (req, res) => {
    const nome = req.body.nome;
    let salario = Number(req.body.salario);
    const totVendas = Number(req.body.totVendas);
    const porcent = Number(req.body.porcent);

    res.send(`${nome}, seu salário é: R$${salario}. Nesse mês você vendeu: ${totVendas} e a porcentagem que você ira ganhar é de: ${porcent}%.
    Então seu salário final ficou: ${salario += totVendas * porcent / 100}`);
})

//4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.

app.post('/ex04/', (req, res) => {
    const nome = req.body.nome;
    const distancia = Number(req.body.distancia);
    const tempo = Number(req.body.tempo);

    res.send(`A velocidade média do ${nome}, foi ${distancia / tempo} km/h.`)
});

//5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
//• Salários até 2.000, reajuste de 50%
//• Salários maiores que 2.000, reajuste de 30%

app.post('/ex05/', (req, res) => {
    const nome = req.body.nome;
    let salario = Number(req.body.salario);

    if (salario <= 2000) {
        let reajuste = salario * 0.50;
        return res.send(`${nome}, seu salário atual é: R$${salario}.
        Com o reajuste seu salário foi para: R$${salario + reajuste}`);
    }
    reajuste = salario * 0.30;
    res.send(`${nome}, seu salário atual é: R$${salario}.
    Com o reajuste seu salário foi para: R$${salario + reajuste}`)
});

//6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
//• peso ideal de homem = (72,7 x altura) – 58
//• peso ideal da mulher = (62,1 x altura) – 44,7

app.post('/ex06/', (req, res) => {
    const altura = Number(req.query.altura);
    const sexo = req.query.sexo;
    
    let imc = (72.7 * altura) - 58;
    if (sexo == 'Masculino') return res.send(`O peso ideal para homem com a altura informada é: ${imc.toFixed(2)} kilos`);
    
    imc = (62.1 * altura) - 44.7;
    if (sexo == 'Feminino') return res.send(`O peso ideal para mulher com a altura informada é: ${imc.toFixed(2)}`);
});

//7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//• O maior preço lido; e
//• A média aritmética dos preços dos produtos.

app.post('/ex07/', (req, res) => {
    const array = [req.body.n1, req.body.n2, req.body.n3, req.body.n4, req.body.n5, req.body.n6, req.body.n7, req.body.n8, req.body.n9, req.body.n10, req.body.n11, req.body.n12, req.body.n13, req.body.n14, req.body.n15];

    let maior = Math.max.apply(null, array); //Função para descobrir qual elemento do array é o maior

    const media = (req.body.n1 + req.body.n2 + req.body.n3 + req.body.n4 + req.body.n5 + req.body.n6 + req.body.n7 + req.body.n8 + req.body.n9 + req.body.n10 + req.body.n11 + req.body.n12 + req.body.n13 + req.body.n14 + req.body.n15)/15;
    
    res.send(`Dos números enviados o maior deles é: ${maior}.
    A média dos números enviados é: ${media}.`);
});



app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`);
});