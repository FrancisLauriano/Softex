// 5. Verifique se um número é primo
// Quantidades de números primos de 1 a 100.
function primos() {
    let numPrimo = 0;
    let contador = 2; //  2 é o primeiro número primo
        while (contador <= 100) {
            let ePrimo = true;
            let divisor = 2;
    
            while (divisor < contador) {
                if (contador % divisor === 0) {
                ePrimo = false;
                break;
                }
                divisor++;
            }
    
            if (ePrimo) {
                numPrimo++;
            }
            contador++;
        }
    
        
    console.log(`Entre 0 e 100 tem ${numPrimo} números primos`);
    }
primos();


    //EXPLICAÇÃO 
// let numPrimo é a variável q vai armazenar a qtd de números primos encontrados.
// let contador é a variável  que representa os números a serem testados, começando em 2 (já que 2 é o primeiro número primo).

// O  primeiro while vai continuar executando o valor de contador for menor ou igual a 100.
// O let ePrimo é uma variável booleana que indica se numero atual da contagem (contador) é primo ou não 
// e let divisor é a variável q representa os valores para verificar se o número atual da contagem é divisível por eles. Ai, atribuir 2 a ela 
// pq é o primeiro número primos entre 1 e 100,pois um número primo é apenas divisível por 1 e por ele mesmo.

// no segundo while eu uso para verificar se o número atual (contador) é primo e
// continua enquanto divisor for menor que contador.
// No primeiro if coloquei como condição: verificar se o contador é divisível por divisor (ou seja, se não é primo).
// Se for divisível, atualiza a variável ePrimo para false (não é primo) e quebra o loop por causa do break.
// Verificação e contagem dos números primos:

// No segundo if, verifico a variável ePrimo. Se ePrimo é true, isso significa que o número atual (contador) é primo, 
// e a variável numPrimo é incrementada em 1.
// O depois vem o incremendo do contador (contador++) q é incrementado em 1 para testar o próximo número no próximo ciclo do primeiro loop.
// Finalização e exibição dos resultados:

// No final, eu chamo function primos() usando  primos(). Dessa forma a função é chamada para executar todo o processo descrito acima.