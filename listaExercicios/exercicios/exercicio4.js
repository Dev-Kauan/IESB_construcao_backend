//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();

const custoFabrica = Number(prompt("Qual o custo de fábrica? "));
const porcenConcessionaria = 28;
const porcenImposto = 45;

const calculoImposto = custoFabrica * porcenImposto / 100;
const calculoConcessionaria = custoFabrica * porcenConcessionaria / 100

console.log(`Custo de fábrica do carro: ${custoFabrica}`);
console.log(`Custo com os impostos e porcentagem aplicada ${custoFabrica + calculoImposto + calculoConcessionaria}`);