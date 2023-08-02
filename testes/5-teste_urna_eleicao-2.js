const readline = require('readline-sync');
const prompt = require('prompt-sync')();

function eleicao() {
    function entradaDados(){
        let nVoto;
        console.log("Informe o número do candidato que deseja votar: ");
        console.log("candidato_X => 889\ncandidato_Y => 847\ncandidato_Z => 515\nbranco => 0 ");
        return nVoto = readline.questionInt();
        // return nVoto;      
    }
    
    function candidatos(){
        let nVoto = entradaDados();
        let totalX = 0;
        let totalY = 0;
        let totalZ = 0;
        let totalB = 0;
        let totalN = 0;
            
            while (true){
                if (nVoto===889){
                    totalX ++;
                }else if(nVoto===847){
                    totalY ++;
                }else if(nVoto===515){  
                    totalZ ++;
                }else if(nVoto===0){  
                    totalB ++;
                }else{
                    totalN ++;
                }

                console.log("Deseja finalizar a votação:\n1- SIM   2- NÃO");
                let finaliza = readline.questionInt();
                    if(finaliza===1){
                        break;
                    }else if(finaliza===2){
                        console.log("Tente novamente!")
                        // continue;
                    }else if(isNaN(nVoto) && isNaN(finaliza)){
                        console.log("VOCÊ INSERIU UM DADO INVÁLIDO!!!\nTente novamente!");
                        // continue;
                    }
            }
    return {totalX, totalY, totalZ, totalB, totalN};   
    } 
        
    function resultado(){
        let {totalX, totalY, totalZ, totalB, totalN} = candidatos();
          
        if(totalX>totalY && totalX>totalZ) {
            console.log("=============== RESULTADO ===============");
            console.log("# Vencedor da eleição:");
            console.log("\tCandidato_X -", totalX, "votos válidos");
            console.log("# Demais candidatos:\n","\tCandidato_Y -", totalY, "votos válidos");
            console.log("\tCandidato_Z -", totalZ, "votos válidos",);
            console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
            console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
            console.log("=========================================");
        }else if(totalY>totalX && totalY>totalZ){
            console.log("=============== RESULTADO ===============");
            console.log("# Vencedor da eleição:");
            console.log("\tCandidato_Y -", totalY, "votos válidos");
            console.log("# Demais candidatos:\n","\tCandidato_X -", totalX, "votos válidos");
            console.log("\tCandidato_Z -", totalZ, "votos válidos");
            console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
            console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
            console.log("=========================================");
        }else if(totalZ>totalX && totalZ>totalY){
            console.log("=============== RESULTADO ===============");
            console.log("# Vencedor da eleição:");
            console.log("\tCandidato_Z -", totalZ, "votos válidos");
            console.log("# Demais candidatos:\n","\tCandidato_X -", totalX, "votos válidos");
            console.log("\tCandidato_Y -", totalY, "votos válidos");
            console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
            console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
            console.log("=========================================");
        }else{
        console.log("=============== RESULTADO ===============");
        console.log("Houve empate ou todos os votos foram inválidos.");
        console.log("\tCandidato_Y -", totalY, "votos válidos");
        console.log("\tCandidato_X -", totalX, "votos válidos");
        console.log("\tCandidato_Z -", totalZ, "votos válidos");
        console.log("\tVotos Brancos ou Nulos -", (totalB+totalN), "votos");
        console.log("TOTAL DE VOTOS -", (totalX+totalY+totalZ+totalB+totalN), "votos");
        console.log("=========================================");
        }     
    }
resultado();
}

eleicao();
    



