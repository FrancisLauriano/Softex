const readline = require('readline-sync');
const prompt = require('prompt-sync')();

while(true) {
    let nome = console.log("Infome seu nome completo: "); 
    nome = prompt();
    let anoNasc = console.log("Infome o ano do seu nascimento: "); 
    anoNasc = readline.questionInt();
    if (!isNaN(anoNasc)) {
        console.log(nome,", você tem ou completará ",(2022-anoNasc)," anos em 2022. ");
        break;
    }else{
        throw new Error("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nPor favor, inserir dado válido!") 
    }
}





// function soma(num1, num2){
//     return num1+num2
//     }
// function sub(num1, num2){
//     return num1-num2
//     }
// function mult(num1, num2){
//     return num1*num2
//     }
// function div(num1, num2){
//     return num1/num2
//     }
