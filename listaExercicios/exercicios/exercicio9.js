//Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

const n1 = Number(prompt('Qual o primeiro número? '));
const n2 = Number(prompt('Qual o segundo número? '));

const resultado = (n1 + n2) * n1;

console.log(`O seu primeiro número é: ${n1}. O seu segundo número é: ${n2}.
A soma deles é: ${n1 + n2}. E a multiplição do resultado pelo o primeiro número é: ${resultado}`);