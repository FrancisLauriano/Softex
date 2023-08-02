const readline = require('readline-sync');
const prompt = require('prompt-sync')();

function calculoIdade(){
    function entradaNome (){
        console.log("Infome seu nome completo: "); 
        let nome = prompt();
        return nome;
    }

    function entradaAnoNasc (){
        console.log("Infome o ano do seu nascimento (entre 1922 e 2021): "); 
        let anoNasc = readline.questionInt();

        while(true) {
            if (!isNaN(anoNasc) && anoNasc>=1922 && anoNasc<=2021) {
                return anoNasc;
            }else{
              console.log("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nTente novamente!") 
            }
        }
    }

    function idade (){
        const dataAtual=2022;
        let nome = entradaNome();
        let anoNasc = entradaAnoNasc();
        console.log (nome,", você tem ou completará ",(dataAtual-anoNasc)," anos em 2022. ");
    }
    idade();
}  
calculoIdade();  
    
    