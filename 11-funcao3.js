// 1- Crie uma função recursiva chamada somaRecursiva que receba um número inteiro positivo n 
// como argumento e calcule a soma de todos os números inteiros de 1 até n

// function somaRecursiva (n){
//     if (n <= 0){
//       return 0;
//     }else{
//       return n + somaRecursiva (n-1);
//     }
//   }
//   let numero = 10;
//    const readline = require('readline-sync');
//    let numero = readline.questionInt(console.log('Digite um número:'));
//   console.log(somaRecursiva(numero));


//  2- Escreva uma função chamada fibonacci que receba um número n como parâmetro e 
//  retorne o n-ésimo termo da sequência de Fibonacci. Lembre-se de implementar 
//  essa função de forma recursiva.

function fibonacci (n){
    if (n<=0){
      return 0;
    }else if(n===1){
      return 1;
    }else{
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  
  // let numero = 10;
  const readline = require('readline-sync');
  let numero = readline.questionInt(console.log(`Digite um número:`));
  console.log(`O ${numero}-ésimo da sequencia Fibonacci é ${fibonacci(numero)}`);

