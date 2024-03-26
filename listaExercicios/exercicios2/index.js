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
    const corpo = req.body;
    let array = [];

    corpo.forEach(produto => {
        array.push(produto)
    });

    let soma = 0;
    array.forEach(produto => {
        soma += produto.preco;
    })

    const media = soma / array.length;

    let maior = 0;
    array.forEach(produto => {
        if(produto.preco > maior){
            maior = produto.preco;
        }
    });

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maior
    }
    res.json(resultado);
});

//8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
//Código do Cargo -> Percentual:
//• 101 -> 5%
//• 102 -> 7,5%
//• 103 -> 10%

app.post('/ex08/', (req, res) => {
    const nome = req.body.nome;
    let salario = Number(req.body.salario);
    const cargo = Number(req.body.cargo);

    if (cargo == 101 || cargo == 102 || cargo == 103) {
        if (cargo == 101) {
            let reajuste = salario * 0.05;
            return res.send(`${nome}, seu salário atual é R$${salario}, seu novo salário será de: R$${salario + reajuste}. Valor aumentado: R$${reajuste}`);
        } else if (cargo == 102) {
            reajuste = salario * 0.075;
            return res.send(`${nome}, seu salário atual é R$${salario}, seu novo salário será de: R$${salario + reajuste}. Valor aumentado: R$${reajuste}`);
        }
        reajuste = salario * 0.10;
        return res.send(`${nome}, seu salário atual é R$${salario}, seu novo salário será de: R$${salario + reajuste}. Valor aumentado: R$${reajuste}`);
    }
    reajuste = salario * 0.15;
    return res.send(`${nome}, seu salário atual é R$${salario}, seu novo salário será de: R$${salario + reajuste}. Valor aumentado: R$${reajuste}`);
})


//9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:
/*
•  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
•  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
•  Para cada dependente acréscimo de 32 reais;
•  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
•  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
•  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
    IRRF | Salário Bruto
    Isento Inferior a 2.000
    10% De 2.000 a 5.000
    20% Superior a 5.000
• Salário líquido é igual ao salário bruto menos IRRF;
• A gratificação segue a próxima tabela:
      Salário Líquido | Gratificações
      Até 3.500 | 1.000 reais
      Superior a 3.500 | 500 reais
• Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/

app.post('/ex09/', (req, res) => {
    const nome = req.body.nome;
    // let salario = 1412;
    let salario = Number(req.body.salario);
    const numHorasTrabalhadas = Number(req.body.numHorasTrabalhadas);
    const numDepedentes = Number(req.body.numDepedentes);
    const horaExtra = Number(req.body.horaExtra);

    let valorHora = salario / numHorasTrabalhadas;
    const calcDependente = numDepedentes * 32;
    const calcHoraExtra = (valorHora += valorHora * 0.50) * horaExtra

    const salarioBruto = salario + calcDependente + calcHoraExtra;

    res.send(`${nome}, seu salário bruto: R$${salarioBruto.toFixed(2)}`);

    if(salarioBruto >= 2000 && salarioBruto <= 5000){
        let imposto = salarioBruto * 0.10;
        return res.send(`${nome}, você recebe: R$${salarioBruto}. 
        Irá pagar R$${imposto} de imposto.`);
    }else if(salarioBruto > 5000){
        imposto = salarioBruto * 0.50;
        return res.send(`${nome}, você recebe: R$${salarioBruto}. 
        Irá pagar R$${imposto} de imposto.`);
    }

    if(salarioBruto < 3500)
    let salarioLiquido = salarioBruto;
    return res.send(`${nome}, você recebe: R$${salarioBruto}, então está isento do imposto`);
    
})
app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`);
});