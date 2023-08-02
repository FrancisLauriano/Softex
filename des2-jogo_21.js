/*   === DESAFIO 2 ===
Agora vamos adicionar um adversário ao jogo “ O Banco”.
Implemente o código anterior mantendo as regras.
1. Crie mais 5 variáveis sendo 4 cartas do banco e 1 com a soma delas.
2. Crie uma nova lógica onde será testado se a soma das cartas do banco
 é maior que 21 OU de a soma das suas cartas é menor ou igual a 21 E 
 suas cartas tem soma maior que o banco.
3. Imprimir que o jogador venceu ou que o banco venceu, dependendo dos somatórios das cartas.
4. Testar o seu código no terminal através do comando C:\> node blackjack.js
*/

const readline = require('readline-sync');

console.log("***** É sua vez de jogar! *****");
console.log("Jogue uma carta: ");
let carta1 = readline.questionInt();
console.log("Jogue mais uma carta: ");
let carta2 = readline.questionInt();

let somaSua = carta1 + carta2;

console.log("***** Agora é a vez da banca jogar! *****")
console.log("1º Carta da banca: ");
let carta3 = readline.questionInt();
console.log("2º Carta da banca: ");
let carta4 = readline.questionInt();
console.log("3º Carta da banca: ");
let carta5 = readline.questionInt();
console.log("4º Carta da banca: ");
let carta6 = readline.questionInt();

let somaBan = carta3 + carta4 + carta5+ carta6;


if(somaSua>somaBan && somaSua<=21) {
    console.log("Você ganhou!","\nTotal de seus pontos: ", somaSua,"\nPontos da Banca: ", somaBan);
} else if(somaSua<somaBan && somaBan>21) {
    console.log("Você ganhou!","\nTotal de seus pontos: ", somaSua,"\nPontos da Banca: ", somaBan); 
} else {
    console.log("A banca venceu!", "\nTotal de pontos da banca: ", somaBan,"\nSeus pontos: ", somaSua);
}