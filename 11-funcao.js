const readline = require('readline-sync');
const prompt = require('prompt-sync')();

//==> saudação
// function exibirSaudacao(nome){
//     console.log("Helo,", nome);
    
// }
// exibirSaudacao("Francis");


//==> data 
// function exibirSaudacao(nome, dia, mes, ano){
//     let mensagem = `Hello, ${nome}!\nHoje é ${dia} de ${mes} de ${ano}`
//     console.log(mensagem);
    
// }
// exibirSaudacao("Francis", 8, "agosto", 2023);

// EXERCICIO

// 1-Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" 
//no console quando for chamada.

// function exibirSaudacao(nome, dia, mes, ano){
//     let mensagem = `Hello, ${nome}!\nHoje é ${dia} de ${mes} de ${ano}`
//     console.log(mensagem);
    
// }
// exibirSaudacao("Francis", 8, "agosto", 2023);

//2-Escreva uma função chamada dobro que aceite 
//um parâmetro num e exiba o dobro desse número no console.

// function dobro(num){
//     let dobro= num*2;
//     console.log(dobro);
// }
// dobro(2);

//3- Crie uma função chamada mostrarNumeros que receba dois parâmetros, 
//inicio e fim. Essa função deve exibir todos os números inteiros no intervalo 
//de inicio a fim (inclusive) no console.

function mostrarInteiro(){
    let contador=0;
    let num1;
    let num2;

    console.log(`Digite 1º numero:`, num1);
    readline.questionInt();
    console.log(`Digite 2º numero:`, num2);
    readline.questionInt();

    while(contador<=fim){
        if(true){
        num1 & num2 === Number.isInteger
        }
        contador++
        }
console.log(`Entre ${num1} e ${num2} tem ${contador} números inteiros`);  
}
mostrarInteiro();


//4-Escreva uma função chamada verificarPar que aceite
// um número como entrada e exiba no console se o número é par ou não.

console.log(`Digite 1º numero:`, num1);
readline.questionInt();
console.log(`Digite 2º numero:`, num2);
readline.questionInt();

let contagem2=1;
let qtdPares=0;
while(contagem2<=50){
  if (contagem2%2===0) {
    qtdPares++;
  }
contagem2++;
}
console.log(qtdPares)
