//1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.

const prompt = require('prompt-sync')();

console.log("Exercicio 1");
console.log("Calcular média");

const nota1 = Number(prompt("Digite a nota 1: "));
const nota2 = Number(prompt("Digite a nota 2: "));
const nota3 = Number(prompt("Digite a nota 3: "));
const nota4 = Number(prompt("Digite a nota 4: "));

let media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`Sua média é: ${media.toFixed(2)}`);

let result = media >= 7 ? "Você foi aprovado" : "Você foi reprovado";
console.log(result);