// 5 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
const prompt = require('prompt-sync')();

const custoFabrica = Number(prompt("Qual o custo de fábrica? "));
const porcenConcessionaria = Number(prompt("Qual é a porcentagem da concessionária? "));
const porcenImposto = Number(prompt("Qual a porcentagem do imposto? "));

const calculoImposto = custoFabrica * porcenImposto / 100;
const calculoConcessionaria = custoFabrica * porcenConcessionaria / 100

console.log(`Custo de fábrica do carro: ${custoFabrica}`);
console.log(`Custo com os impostos e porcentagem aplicada ${custoFabrica + calculoImposto + calculoConcessionaria}`);