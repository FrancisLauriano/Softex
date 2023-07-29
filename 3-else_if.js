// EXERCICIOS - ESTRUTURA CONDICIONAL (DE DECISÃO) - ELSE IF

/* Sintaxe IF-ELSE:
if (condicao) {
  bloco de código 1 <-- se a condição for verdade, irá rodar instrução desse bloco de código 1.
} else {
   bloco de código 2 <--- se não, irá rodar instrução desse bloco de código 2.
}
--> Exemplo:
 if (CONDICAO) {
    console.log("xxxx"); 
 } else {
    console.log("yyyy"); 
}
 */

/* Sintaxe IF/ELSE-IF/ELSE:
if (condicao 1) {
  bloco de código 1 <-- se a condição 1 for verdade, irá rodar instrução desse bloco de código 1.
} else if (condicao 2) {
   bloco de código 2 <--- se condição 2 for verdade, irá rodar instrução desse bloco de código 2.
} else {
   bloco de código 3 <--- se condição 1 e 2 não for verdade, 
   irá rodar instrução desse bloco de código 3.
}
--> Exemplo:
if(CONDICAO1) {
    console.log("xxxx");
} else if(CONDICAO2) {
    console.log("yyyy");
} else {
    console.log("zzzz");
}
 */
 

// 1. Classifique um número em três categorias: negativo, zero ou positivo.
let num5 = 4;
if(num5>0) {
    console.log("É um número positivo!");
} else if(num5<0) {
    console.log("É um número negativo!");
} else {
    console.log("É nulo!");
}

// 2. Verifique se um número é par. Caso contrário, exiba uma mensagem indicando que é ímpar.
let num6 = 4;
if(num6%2 === 0) {
    console.log("É um número par!");
} else {
    console.log("É ímpar!");
}

// 3. Verifique se uma string é vazia. Caso não seja, exiba seu conteúdo.
let nome1 = "Fran";
if(nome1 === "") {
    console.log("Nome está vazio!");
} else {
    console.log("Imprimir nome:", nome1);
}

// 4. Verifique se um número é maior que 10. Caso não seja, multiplique-o por 2.
let num7 = 11;
if(num7>10) {
    console.log(num7*2);
} else {
    console.log("Não é maior que 10!");
}

// 5. Verifique se uma variável é do tipo booleano. Caso não seja, atribua um valor booleano a ela.
let num8 = 10;
if(typeof num8 === "boolean") {
    console.log("É valor booleano!");   
} else {
    console.log("Atribuir:", num8="true" );
}

// Autorização para dirigir
let idade = 15;
if(idade >= 16 && idade < 18) {
    console.log("Autorização habilitação especial para dirigir!");
} else if(idade >= 18) {
    console.log("Pode solicitar habilitação");
} else {
    console.log("Não poderá solicitar habilitação");
}

