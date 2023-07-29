function calcularSomaCartas(cartas) {
    return cartas.reduce((total, carta) => total + carta, 0);
  }
  
  function verificarVencedor(jogador, banca) {
    const somaJogador = calcularSomaCartas(jogador);
    const somaBanca = calcularSomaCartas(banca);
  
    if ((somaBanca > 21) || (somaJogador <= 21 && somaJogador > somaBanca)) {
      console.log("Jogador venceu!");
    } else {
      console.log("Banca venceu!");
    }
  }
  
  // Solicitar cartas do jogador e da banca (supondo que as cartas são números)
  const readline = require('readline-sync');

  const jogadorCartas = [];
  const bancaCartas = [];
  
  for (let i = 0; i < 2; i++) {
    console.log("Jogador, digite o valor da carta " + (i + 1) + ":");
    jogadorCartas = readline.questionInt(); 
    console.log("Banca, digite o valor da carta " + (i + 1) + ":");
    jbancaCartas = readline.questionInt(); 
  }

  verificarVencedor(jogadorCartas, bancaCartas);