//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();

const salario = Number(prompt("Salário bruto: "));
const reajuste = Number(prompt("Qual a porcentagem do reajuste: "));
const salarioReajuste = salario * reajuste / 100

console.log(`Salário atual ${salario}`);
console.log(`Salário com reajuste de ${reajuste}%: R$${salario + salarioReajuste}`);