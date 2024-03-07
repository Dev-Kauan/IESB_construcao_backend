//function
function executa() {
    console.log("Executando função executa");
}

// Invocar uma função
executa();

// Função com paramêtros e sem retorno
function soma(numA, numB) {
    console.log(numA + numB);
}

soma(2, 2);
soma(6, 8);

// console.log("CHAMANDO A FUNÇÃO soma2 antes de declarar");
// soma2()
// //Não funciona

// função na variável
const soma2 = (numA, numB) => {
    return numA + numB;
}

soma2(10, 9);
soma2(6, 8);

const resultado = soma2(2, 2);
console.log("Resultado: ", resultado)

const multiplicar = (numA, numB) => numA * numB;

console.log(multiplicar(10, 1000));