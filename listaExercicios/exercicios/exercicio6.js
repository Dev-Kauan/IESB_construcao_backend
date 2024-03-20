//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const prompt = require('prompt-sync')();

const carrosVendidos = Number(prompt('Qual o número de carros que você vendeu este mês? '));
const valorTotalVendido = Number(prompt('Qual valor total das vendas? '));

const salarioFixo = 1200;
const comissao = 500 * carrosVendidos; //Vai ser 500 reais por carro vendido
const partLucros = valorTotalVendido * 0.05;

const salarioFinal = salarioFixo + comissao + partLucros;

console.log(`Você vendeu ${carrosVendidos} carros, então a comissão ganhadas por esses carros foi de R$${comissao}, no mês você vendeu R$${valorTotalVendido} e com ganho de 5% no valor total, seu salário final ficou: R$${salarioFinal}`);
