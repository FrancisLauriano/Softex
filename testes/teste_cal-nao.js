const readline = require('readline-sync');

do {
console.log("MENU INICIAL")
let operacao = console.log("Digite o número referente a ação que deseja realizar:","\n1.Soma \n2.Subtração \n3.Multiplicação \n4.Divisão \n0.Sair "); 
operacao = readline.questionInt(); 
if(operacao===0){
    console.log("Saindo...")
    break;
}
if(!(operacao<=4 && operacao>=1)){
    console.log("Operação Inválida!");
}

let num1 = console.log("Informe 1º número: "); 
num1 = readline.questionFloat(); 
let num2 = console.log("Informe 1º número: "); 
num2 = readline.questionFloat(); 

}while(true) {

    if(operacao===1) {
        console.log("Resultado: ", num1+num2);    
    }else if(operacao===2) {
        console.log("Resultado: ", num1-num2);  
    }else if(operacao===3) {
        console.log("Resultado: ", num1*num2); 
    }else if(operacao===4) {
        console.log("Resultado: ", num1/num2); 
    }
}


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
    function sair(){
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


// switch (operacao) {
//     case 0:
//        console.log("Sistema finalizado!")
//        break;    
//     default:
//        console.log("Operação Inválida!");