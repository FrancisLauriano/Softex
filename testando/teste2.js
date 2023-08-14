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

console.log("Entre 0 e 100 tem", numPrimo, "números primos");
}
primos()

   

  