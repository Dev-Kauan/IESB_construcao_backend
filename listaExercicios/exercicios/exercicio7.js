//Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();

const p1 = Number(prompt('Qual foi sua nota na p1? '));
const p2 = Number(prompt('Qual foi sua nota na p2? '));

const bimestre1 = p1 * 0.4; //Corresponde a 40% da nota total.
const bimestre2 = p2 * 0.6; //Corresponde a 60% da nota total.

const media = bimestre1 + bimestre2;

console.log(media >= 5 ? `Sua média foi: ${media}, APROVADO!`: `Sua média foi: ${media}, REPROVADO!`); 
