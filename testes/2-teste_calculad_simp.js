// Faça uma função calculadora de dois números com três parâmetros: 
// os dois primeiros serão os números da operação e o terceiro 
// será a entrada que definirá a operação a ser executada. Considera 
// a seguinte definição:
// 1. Soma
// 2. Subtração
// 3. Multiplicação
// 4. Divisão
// Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.


const readline = require('readline-sync');
console.log("=== Calculadora ===");
console.log("Informe 1º número: "); 
let num1 = readline.questionFloat(); 
console.log("Informe 1º número: "); 
let num2 = readline.questionFloat(); 
console.log("Digite o número referente a operação que deseja realizar:","\n1.Soma   2.Subtração   3.Multiplicação   4.Divisão "); 
let operacao = readline.questionInt(); 


function soma(num1, num2){
    return num1+num2
}
function sub(num1, num2){
    return num1-num2
}
function mult(num1, num2){
    return num1*num2
}
function div(num1, num2){
    return num1/num2
}
function inv(){
    return 0
}
 
 
 if(operacao===1) {
     console.log("Resultado:", soma(num1,num2));
 } else if(operacao===2) {
     console.log("Resultado:", sub(num1,num2));
 } else if(operacao===3) {
    console.log("Resultado:", mult(num1,num2));
 } else if(operacao===4) {
     console.log("Resultado:", div(num1,num2));
 } else {
     console.log(inv(), "\nOperação Inválida!");
 }
 


// if(operacao===1) {
//     console.log("Resultado:", (num1+num2));
// } else if(operacao===2) {
//     console.log("Resultado:", (num1-num2));
// } else if(operacao===3) {
//    console.log("Resultado:", (num1*num2));
// } else if(operacao===4) {
//     console.log("Resultado:", (num1/num2));
// } else {
//     console.log("0", "\nOperação Inválida!");
// }

