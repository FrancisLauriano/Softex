// // throw 'minha Exececao';
// // throw true;
// // throw 42;


// 1- EXEMPLO:
// try {
//     criticalCode()
    
//   } catch (error) {
//     console.log(`[Erro]`);
//     console.log(error.message);
    
//   } finally {
  
//   }
  
// 2- EXEMPLO:
//   try {
//     criticalCode()
    
//   } catch (e) {
//     console.log(`[Erro]`);
//     console.log(e.message);
    
//   } finally {
//     console.log(`Aqui sempre será executado ...`);
  
//   }

// 3- EXEMPLO:
// try {
//     criticalCode()
    
//   } catch (error) {
//     console.log(`[Erro]`);
//     console.log(error.message);
    
//   } finally {
  
//   }
  
// 4- EXEMPLO:
//   try {
//     criticalCode()
    
//   } catch (e) {
//     console.log(`[Erro]`);
//     console.log(e.message); // ou  console.log(e.name)
    
//   } finally {
//     console.log(`Aqui sempre será executado ...`);
  
//   }


 // EXERCICIO
 // 1- Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco 
//  try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console


// try {
//   const readline = require('readline-sync');
//   let numDivisor = readline.questionInt(console.log("Digite um número:"));
//   let dividendo=100;
//   let resultado = dividendo / numDivisor;

//   if(numDivisor === 0){
//     throw "Valor negado"
//   }
  
// } catch (error) {
//   console.log(error.message, "\nErro: Divisão por zero");
// } 


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







