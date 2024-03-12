//2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

console.log("Exercicio 2");

const eleitores = Number(prompt("Qual a quantidade de eleitores? "));
const brancos = Number(prompt("Número de votos brancos? "));
const nulos = Number(prompt("Número de votos nulos? "));
const validos = Number(prompt("Número de votos válidos? "));

if (brancos + nulos + validos > eleitores || brancos + nulos + validos < eleitores) {
    console.log("Número de votos não está correspondendo com a quantidade de eleitores!");
} else {
    const votosBrancos = eleitores * brancos / 100;
    const votosNulos = eleitores * nulos / 100;
    const votosValidos = eleitores * validos / 100;
    console.log(`A porcentagem de votos é de votos brancos é: ${votosBrancos}%`);
    console.log(`A porcentagem de votos é de votos nulos é: ${votosNulos}%`);
    console.log(`A porcentagem de votos é de votos validos é: ${votosValidos}%`);
}

