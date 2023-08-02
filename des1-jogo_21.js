/*   === DESAFIO 1 ===
No Blackjack, o objetivo do jogo é ganhar o banco. 
Você vence se tiver uma pontuação maior do que o banco, mas menor que ou igual a 21.
1. Use o ambiente Codespace para resolver o desafio. nome do arquivo: blackjack.js
2. Você deverá criar 3 variáveis: duas cartas e a soma delas.
3. O seu código deve testar se a soma das suas duas cartas é maior que 21, caso true, 
 informar ao jogador que ele perdeu.
4. Ao final do código, informar a soma dos pontos do jogador.
5. Testar o seu código no terminal através do comando C:\> node blackjack.js
*/

const readline = require('readline-sync');

console.log("Escolha uma carta: ");
let carta1 = readline.questionInt();
console.log("Escolha mais uma carta: ");
let carta2 = readline.questionInt();

let somaSua = carta1 + carta2;

if(somaSua>21) {
    console.log("Você perdeu!", "\nTotal de seus pontos: ", somaSua);
} else {
    console.log("Você ganhou!", "\nTotal de seus pontos: ", somaSua);
}