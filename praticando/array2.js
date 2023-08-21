// 3- Crie um programa que recebe do teclado um objeto e tente acessar 
// uma propriedade inexistente desse objeto dentro de um bloco try...catch. 
// Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.

function verificarObjeto(){
    const readline = require('readline-sync');
    let objeto2 = new Object();
    objeto2.nome = null;
    objeto2.idade = undefined;

    let acessar = readline.question(console.log("Digite a propriedade que deseja acessar:"));
    let verificar = objeto2.hasOwnProperty(acessar);

        try {
            if(verificar === false){
                throw "Propriedade não existe"
            }   
        } catch (error) {
            console.log(`[Erro] Propriedade não encontrada\n${error.messsage}`);
        }

        if(verificar === true){
            console.log(`Propriedade encontrada`);
        }

}
verificarObjeto();