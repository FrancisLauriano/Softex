const readline = require('readline-sync');
const prompt = require('prompt-sync')();

function eleicao() {
    function entradaDados(){
        console.log("Informe o número do candidato que deseja votar: ");
        console.log("candidato_X => 889\ncandidato_Y => 847\ncandidato_Z => 515\nbranco => 0 ");
        let nVoto = readline.questionInt();
        console.log("Deseja finalizar a votação:\n1- SIM   2- NÃO");
        let finaliza = readline.questionInt();

            while(true) {
                if(finaliza===1){
                    return nVoto;
                }else if(finaliza===2){
                    console.log("Tente novamente!")
                    continue;
                }else if(isNaN(nVoto) && isNaN(finaliza)){
                    console.log("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nTente novamente!");
                    continue;
                }  
            }
    }
    

    function candidatos(totalX, totalY, totalZ, totalB, totalN, nVoto){
        switch (nVoto) {
            case 889:
                totalX +=nVoto;
            case 847:
                totalY +=nVoto;
            case 515:
                totalZ +=nVoto;;
            case 0:
                totalB +=nVoto;
            default:
                totalN +=nVoto;
        }
    } 
        

    function resultado(){
          
        if( totalX>totalY && totalX>totalZ) {
            console.log("RESULTADO\nVencedor da eleição:\n Candidato_X -", totalX, "votos válidos","\nDemais candidatos:","\nCandidato_Y -", totalY, "votos válidos","\nCandidato_Z -", totalZ, "votos válidos","\nVotos Brancos ou Nulos -", (totalB+totalN), "votos")
        }else if(totalY>totalX && totalY>totalZ){
            console.log("RESULTADO\nVencedor da eleição:\n Candidato_Y -", totalY, "votos válidos","\nDemais candidatos:","\nCandidato_X -", totalX, "votos válidos","\nCandidato_Z -", totalZ, "votos válidos","\nVotos Brancos ou Nulos -", (totalB+totalN), "votos")
        }else if(totalZ>totalX && totalZ>totalY){
            console.log("RESULTADO\nVencedor da eleição:\n Candidato_Z -", totalZ, "votos válidos","\nDemais candidatos:","\nCandidato_X -", totalX, "votos válidos","\nCandidato_Y -", totalY, "votos válidos","\nVotos Brancos ou Nulos -", (totalB+totalN), "votos")
        }     
    }

let nVoto = entradaDados (); 
let totalX, totalY, totalZ, totalB, totalN = candidatos();
let apuracao = resultado();
console.log(apuracao);

}

eleicao();
    



