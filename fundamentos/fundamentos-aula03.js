// let pode ser alterada mas não pode ser redeclarada que nem o var
let idade = 18;
// console.log(idade);

// Const não pode ser alterado porque é uma constante
const nome = 'Kauan';

// Tipos de dados
// string 
let nomeCompleto = "Kauan Souza Lima";

let textoOla = `Olá, ${nomeCompleto}`; //Template string

// console.log(textoOla);

let nomeUsuario = "Kauan Souza";
let idadeUsuario = 18;
let cursoUsuario = 'Análise e Desevolvimento de Sistemas';

let pessoaComTemplateString = `Olá, ${nomeUsuario}, sua idade é: ${idadeUsuario} e você está cursando ${cursoUsuario}`; //Template string

// console.log(pessoaComTemplateString);

// Verificando o tipo da variável
// console.log(typeof pessoaComTemplateString);

// number
let numeroInteiro = 2000;
let numeroNegativo = -60;
let numeroFlutuante = 25.90

// array
let lista = [];
let listaCheia = ["Wolkswagem", "Fiat", "Honda"];

lista.push("PrimeiroItem");
// console.log(lista);

lista.pop();
// console.log(lista);

// boolean
true
false

// Tipo object (Tipo objeto)

let objetoPessoa = {
    nome: "Kauan",
    idade: 18,
    curso: "ADS",
    semestre: "1/2024"
}

// console.log(`Olá ${objetoPessoa.nome}`);

// null
let telefone = null; // ausência de valor

// underfined e NaN
let teste = 10/'olá';
// console.log(teste);

//Substituir texto
let texto = "Kauan";
texto = texto.replace("K", "P");
console.log(texto);