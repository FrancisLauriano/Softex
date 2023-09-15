// criar cadastro de pessoas com dados de nome, salário, idade e se tem diploma;

function cadastro(){
    const readline = require('readline-sync');
   
    // Array para armazenar as pessoas cadastradas
    const cadastroPessoas = [];

    // Função para adicionar uma pessoa ao cadastro
    function adicionarPessoa(nome, salario, idade, diploma) {
        nome = readline.question(console.log(`Informe seu nome:`)); 
        salario = readline.questionFloat(console.log(`Informe seu salário:`)); 
        idade = readline.questionInt(console.log(`Informe sua idade:`));
        diploma = readline.questionInt(console.log(`Possui diploma de Nível Superior (Digite 1 para SIM ou 0 para NÃO):\n1.SIM\t\t0.NÃO`)) === 1 ? true : false; 
        
        
        if (typeof nome === "string" && !isNaN(salario) && !isNaN(idade) && (diploma === true || diploma === false)){
            const pessoa = {
                    nome: nome,
                    salario: salario,
                    idade: idade,
                    diploma: diploma,
                }
            cadastroPessoas.push(pessoa);
            console.log("Pessoa cadastrada com sucesso!");
        }else{
            console.log(`Dados inválidos. Verifique os valores inseridos!`);
        }
        
}

    // Função para exibir o cadastro de pessoas
    function exibirCadastro() {
        for (let i = 0; i < cadastroPessoas.length; i++) {
            const pessoa = cadastroPessoas[i];
            
            console.log(`\nDados da pessoa ${i + 1}:`);
            console.log(`Nome: ${pessoa.nome}`);
            console.log(`Salário: R$${pessoa.salario.toFixed(2)}`);
            console.log(`Idade: ${pessoa.idade} anos`);
            console.log(`Possui diploma: ${pessoa.diploma ? "Sim" : "Não"}`);
        }
    }

    // Loop principal do programa


    
    while (true) {
        console.log("\nOpções:");
        console.log("1. Adicionar pessoa ao cadastro");
        console.log("2. Exibir cadastro de pessoas");
        console.log("3. Sair");
        
        const opcao = readline.question(console.log("Escolha uma opção:"));
        
        if (opcao === "1") {
            adicionarPessoa();
        } else if (opcao === "2") {
            exibirCadastro();
        } else if (opcao === "3") {
            console.log("Encerrando o programa.");
            break;
        } else {
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }

}
cadastro();


