// const readline =  require('readline-sync');

//  function gerarSenha(tamanho) {
//     const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
//     let senha = '';
    
//     for (let i = 0; i < tamanho; i++) {
//       const randomIndex = Math.floor(Math.random() * caracteres.length);
//       senha += caracteres.charAt(randomIndex);
//     }
//     return senha;
// }
// const tamanhoDaSenha = readline.questionInt(console.log("Digite o tamanho da senha desejada:"));
// const senhaGerada = gerarSenha(tamanhoDaSenha);
// console.log("Senha gerada:", senhaGerada);
  

function gerarSenha(tamanho) {
    const colecaoCaracter = "abcdefghijlmnopqrstuvxzwy0123456789ABCDEFGHIJLMNOPQRSTUVXZWY@#$%&?!\/<>-()~[]}{+_^*";
    let senha = "";

    for(let i = 0; i < tamanho; i++){
        const random = Math.floor(Math.random() * colecaoCaracter.length);
        senha += colecaoCaracter.charAt(random);
    }
    return senha;
}
const readline = require('readline-sync');
const informarTamanho = readline.questionInt(console.log(`Informe a quantidade de caracter da senha:`));
const senhaConcluida = gerarSenha(informarTamanho);
console.log(`A sua senha é: ${senhaConcluida}`)



// Number.isInteger(5)
// typeof(x) === 'string'