let prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?");

console.log(`Olá ${nome}, seja bem-vindo`);

let idade = Number.parseInt(prompt("Qual a sua idade?"));

// console.log(typeof idade);

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

let notaProva1 = Number.parseFloat(prompt("Nota prova A1?"));
let notaprova2 = Number.parseFloat(prompt("Nota prova A2?"));

let media = (notaProva1 + notaprova2) / 2;

if(media >= 6){
    console.log(`Parabéns ${nome}, você foi aprovado!`);
    console.log(`Sua média foi ${media}`);
} else{
    console.log(`${nome}, infezlimente você foi reprovado!`);
    console.log(`Sua média foi ${media}`)
}