const readline = require('readline-sync');

console.log("MENU INICIAL")
let operacao = console.log("Digite o número referente a ação que deseja realizar:","\n1.Soma \n2.Subtração \n3.Multiplicação \n4.Divisão \n0.Sair "); 
operacao = readline.questionInt()

function calculadora(num1, num2, operacao){
    switch(operacao) {
    case 1:
        return num1+num2;
    case 2:
        return num1-num2;
    case 3:
        return num1*num2;
    case 4: 
        return num1/num2;
    case 0:
        return calculo=false;
    }
}

while(calculo) {
console.log("MENU INICIAL")
let operacao = console.log("Digite o número referente a ação que deseja realizar:","\n1.Soma \n2.Subtração \n3.Multiplicação \n4.Divisão \n0.Sair "); 
operacao = readline.questionInt()
    
    if(operacao===0) {
        console.log("Encerrado...Até mais!");
        break;
    } else if (operacao===1) {
        console.log("Informe 1º número: "); 
        let num1 = readline.questionFloat(); 
        console.log("Informe 1º número: "); 
        let num2 = readline.questionFloat();
        console.log("Resultado:", soma(num1,num2));
        break;
    } else if(operacao===2) {
        console.log("Informe 1º número: "); 
        let num1 = readline.questionFloat(); 
        console.log("Informe 1º número: "); 
        let num2 = readline.questionFloat();
        console.log("Resultado:", sub(num1,num2));
        break;
    } else if(operacao===3) {
        console.log("Informe 1º número: "); 
        let num1 = readline.questionFloat(); 
        console.log("Informe 1º número: "); 
        let num2 = readline.questionFloat();
        console.log("Resultado:", mult(num1,num2));
        break;
    } else if(operacao===4) {
        console.log("Informe 1º número: "); 
        let num1 = readline.questionFloat(); 
        console.log("Informe 1º número: "); 
        let num2 = readline.questionFloat();
        console.log("Resultado:", div(num1,num2));
        break;
    } else if(!(operacao<=4 && operacao>=1)) {
        console.log("Essa opção não existe!", "\nInforme uma operação válida");
        continue;
    } 
}



// if(operacao===0){
//     console.log("Saindo...")
//     break;
// }else if(operacao<=4 && operacao>=1) {
//     let num1 = console.log("Informe 1º número: "); 
//     num1 = readline.questionFloat(); 
//     let num2 = console.log("Informe 1º número: "); 
//     num2 = readline.questionFloat(); 
// }else if(!(operacao<=4 && operacao>=1)){
//     console.log("Operação Inválida!");
//     continue;
// }



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

// if(operacao===0) {
//     console.log("Resultado:", (num1+num2));
//     break;
// } else if(operacao===1) {
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




