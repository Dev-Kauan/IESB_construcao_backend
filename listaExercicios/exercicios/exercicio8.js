//Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos. OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();

const raio = Number(prompt("Qual é o raio da caixa d'água? "));
const altura = Number(prompt("Qual é a altura da caixa d'água? "));

const volume = 3.14 * raio ** 2 * altura;

console.log(`Conforme as informações inseridas o volume dessa caixa d'água é: ${volume}`);