// const readline3 = require('readline-sync');
// let valor = readline3.question(console.log(`Informe o valor do produto:`));
// if (valor.maxlength === 2){

// }
// console.log(`O valor final do seu produto acrescido de impostos é: ${valor}`);

// let somaPares2 = 0;
// let paresEncontrados2 = 0;
// for(let num2 = 10; paresEncontrados2 < 50; num2++){
//     if(num2 % 2 === 0){
//         paresEncontrados2++;
//         somaPares2 += num2;
//     } 
// }
// console.log(somaPares2);


// let somaPares1 = 0;
// let paresEncontrados1 = 0;
// for(let num1 = 10; paresEncontrados1 < 50; num1++){
//     if(num1 % 2 === 0){
//         paresEncontrados1++;
//         somaPares1 += num1;
//     } 
// }
// console.log(somaPares1);


// const readline4 = require('readline-sync');
// numeroRecebido = readline4.questionInt(console.log(`Digite um número:`));
// let qtdNumerosImpares = 0;


// for(numeroRecebido; qtdNumerosImpares <= 10; numeroRecebido++){
//     if(numeroRecebido % 2 !== 0){
//         qtdNumerosImpares++;
//     console.log(numeroRecebido);

//     }
// }

// const readline6= require('readline-sync');
// let segTotal;
// let minTotal;
// let horaTotal;
// let segCalculado;
// let minCalculado;
// console.log(`Informe o horário de inicio do experimento (incluindo horas, minutos e segundos):`);
// let horaInicial = readline6.questionInt(console.log(`horas: `));
// let minInicial = readline6.questionInt(console.log(`minutos: `));
// let segInicial = readline6.questionInt(console.log(`segundos: `));
// let segDuracao = readline6.questionInt(console.log(`Informe a duração em segundos do experimento: `));


// if(segDuracao+segInicial<=59){
//     segTotal = segDuracao + segInicial;
//     segCalculado = segTotal;
//     console.log(`O horário do termino do experimento foi:  ${horaInicial}h : ${minInicial}min : ${segCalculado}seg`);
// }else if(segDuracao+segInicial>59){
//     minTotal = ((segDuracao+segInicial)/60)+minInicial;
//     if(minTotal<=59){
//         minCalculado = minTotal;
//         segCalculado = (segDuracao+segInicial)%60;
//         console.log(`O horário do termico do experimento foi:  ${horaInicial}h : ${Math.trunc(minCalculado)}min : ${segCalculado}seg`)
//     }else if(minTotal>59){
//         horaTotal = horaInicial + (minTotal/60);
//         minCalculado = minTotal%60;
//         segCalculado = (segDuracao+segInicial)%60;
//         console.log(`O horário do termico do experimento foi:  ${horaTotal}h : ${Math.trunc(minCalculado)}min : ${segCalculado}seg`)
//     }
// }


// function duracaoJogo(inicioJogo, fimJogo) {
//     const readline11 = require('readline-sync');

//     inicioJogo = {
//         hora: undefined,
//         minuto: undefined,
//     };

//     fimJogo = {
//         hora: undefined,
//         minuto: undefined,
//     };

//     console.log(`##### Informe o horário de inicio do jogo #####`);
//     inicioJogo.hora = readline11.questionInt(console.log(`Digite a hora de inicio:`));
//     inicioJogo.minuto = readline11.questionInt(console.log(`Digite o minuto de inicio:`));
//     console.log(`##### Informe o horário do fim do jogo #####`);
//     fimJogo.hora = readline11.questionInt(console.log(`Digite a hora do fim:`));
//     fimJogo.minuto = readline11.questionInt(console.log(`Digite minuto do fim:`));
//     let minutoTotal;
//     let horasParaMinutos;
//     let minutoCalculado;


//     //termina no outro dia
//     if((inicioJogo.hora > fimJogo.hora) || (inicioJogo.hora === fimJogo.hora & inicioJogo.minuto >= fimJogo.minuto)){
//         if(inicioJogo.minuto <= fimJogo.minuto){
//             minutoTotal = fimJogo.minuto - inicioJogo.minuto;
//             horasParaMinutos = ((24 - inicioJogo.hora) + fimJogo.hora)*60;
//             minutoCalculado = minutoTotal + horasParaMinutos;   
//             console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
//         }else {
//             minutoTotal = (60 - inicioJogo.minuto) + fimJogo.minuto;
//             horasParaMinutos = (((24 - inicioJogo.hora) + fimJogo.hora) - 1)*60;
//             minutoCalculado = minutoTotal + horasParaMinutos;
//             console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
//         }

//     //termina no mesmo dia    
//     }else if((inicioJogo.hora < fimJogo.hora) || (inicioJogo.hora === fimJogo.hora &  inicioJogo.minuto < fimJogo.minuto)){
//        if(inicioJogo.minuto <= fimJogo.minuto){
//         minutoTotal = fimJogo.minuto - inicioJogo.minuto;
//         horasParaMinutos = (fimJogo.hora - inicioJogo.hora)*60;
//         minutoCalculado = minutoTotal + horasParaMinutos;
//         console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
//        }else {
//         minutoTotal = (60 - inicioJogo.minuto) + fimJogo.minuto;
//         horasParaMinutos = ((fimJogo.hora - inicioJogo.hora) - 1)*60;
//         minutoCalculado = minutoTotal + horasParaMinutos;
//         console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
//        }  
//     }
// }
// duracaoJogo();


function fibonacci (numFibonacci) {
    
    if(numFibonacci === 0){
        return 0;
    }else if(numFibonacci === 1){
        return 1;
    }else{
        return fibonacci(numFibonacci-1) + fibonacci(numFibonacci-2);  
    }     
}
const readline12 = require('readline-sync');
let numeroFibonacci = readline12.questionInt(console.log(`Informe o número:`));

console.log(`O ${numeroFibonacci}-ésimo termo da série de Fibonacci é: ${fibonacci(numeroFibonacci)}`);