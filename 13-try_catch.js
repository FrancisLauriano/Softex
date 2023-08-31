// EXERCICIO
// 1- Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco 
//  try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console

const readline1 = require('readline-sync');
  let numDivisor = readline1.questionInt(console.log("Digite um número:"));
  let dividendo = 100;
  let resultadoDiv = dividendo / numDivisor;

try {
  
  if(numDivisor === 0){
    throw "Valor negado"
  }
  
} catch (error) {
  console.log(error.message, "\nErro: Divisão por zero");
} 
    if(numDivisor !==0) {
        console.log(`Resultado da divisão: ${resultadoDiv}`);
    }




// 2- Crie um programa que recebe do teclado uma string não numérica em um número utilizando parseInt dentro 
// de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.

function converteNum (minhaString) {
   
        try {
            const num = parseInt(minhaString);
                if (isNaN(num)) {
                    throw "Falha na conversão"
                }
                return num;
            } catch (error) {
            console.log(`Erro: Conversão inválida \n${erro.message}`);
        }
}
const readline = require('readline-sync');
let digitado = readline.questionInt(console.log(`Digite um número`));
let resultado = converteNum(digitado);
console.log(resultado); 



// 3- Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente desse 
//  dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.
const readline = require('readline-sync');
let objeto2 = readline.question(console.log(`Digite a propriedadc que deseja ter acesso:`));
let propriedade2 = (objeto2.hasOwnProperty("name") || objeto2.hasOwnProperty("idade"))? true : false;

try {

  if(propriedade2 === false){
    throw "Propriedade não existe"
  }
  
} catch (error) {
  console.log(`[Erro]\nPropriedade não existe`);
  console.log(error.message);
  
}

if(propriedade2 === true){
  console.log(`Propriedade encontrada`);
}
