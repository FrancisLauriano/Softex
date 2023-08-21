// let varDiploma = readline.questionInt(console.log(`Possui diploma de Nível Superior (Digite 1 para SIM ou 0 para NÃO):\n1.SIM\t\t0.NÃO`))? true : false; // retorna um valor number inteiro.
const readline = require('readline-sync');
let varDiploma = readline.questionInt(console.log(`Possui diploma de Nível Superior (Digite 1 para SIM ou 0 para NÃO):\n1.SIM\t\t0.NÃO`)) === 1? true : false; // retorna um valor number inteiro.

if (varDiploma === true || varDiploma === false){
    console.log(`É um Boleano`);
}else{
    console.log(`não boleano`);
}