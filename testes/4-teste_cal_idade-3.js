const readline = require('readline-sync');
const prompt = require('prompt-sync')();


function calculoIdade(){

    console.log("Infome seu nome completo: "); 
    let nome = prompt();

    console.log("Infome o ano do seu nascimento (entre 1922 e 2021): "); 
    let anoNasc = readline.questionInt();


            if (!isNaN(anoNasc) && anoNasc>=1922 && anoNasc<=2021) {
                console.log (nome,", você tem ou completará ",(2022-anoNasc)," anos em 2022. ");
            }else{
              console.log("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nTente novamente!");
            }
        
    }
    
calculoIdade();