const readline = require('readline-sync');
const Adm = [];
const Aluno = [];
const Emprestimo = [];
const Instrumento = [];
const Manutencao = [];


// CRUD ADM
// Função para validar entrada de dados
function validarEntradaDeDados(dados, camposObrigatorios) {
	for (const campo of camposObrigatorios) {
			if (!dados[campo]) {
					console.log(`O campo '${campo}' é obrigatório.`);
					return false;
			}
	}
	return true;
}

// Função para criar um ADM com validação de entrada de dados
function criarAdm() {
	console.log('\n** Criar ADM **');
	const novoAdm = {
			nome: readline.question('Digite o nome do ADM: '),
			email: readline.question('Digite o email do ADM: '),
			senha: readline.question('Digite a senha do ADM: '),
	};

	if (validarEntradaDeDados(novoAdm, ['nome', 'email', 'senha'])) {
			try {
					Adm.push(novoAdm);
					console.log('ADM criado com sucesso:', novoAdm);
			} catch (error) {
					console.error('Erro ao criar ADM:', error);
			}
	}
}

// Função para listar ADMs
function listarAdms() {
	console.log('\n** Listar ADMs **');
	try {
			if (Adm.length > 0) {
					console.log('Lista de ADMs:');
					Adm.forEach((adm, index) => {
							console.log(`ID: ${index}, Nome: ${adm.nome}, Email: ${adm.email}`);
					});
			} else {
					console.log('Nenhum ADM encontrado.');
			}
	} catch (error) {
			console.error('Erro ao listar ADMs:', error);
	}
}

// Função para buscar ADM por Nome
function buscarAdmPorNome() {
	console.log('\n** Buscar ADM por Nome **');
	const nome = readline.question('Digite o nome do ADM que deseja buscar: ');

	try {
			const admsEncontrados = Adm.filter((adm) => adm.nome === nome);

			if (admsEncontrados.length > 0) {
					console.log('ADM(s) encontrado(s):');
					admsEncontrados.forEach((adm, index) => {
							console.log(`ID: ${index}, Nome: ${adm.nome}, Email: ${adm.email}`);
					});
			} else {
					console.log('Nenhum ADM encontrado com o nome fornecido.');
			}
	} catch (error) {
			console.error('Erro ao buscar ADM por nome:', error);
	}
}

// Função para atualizar ADM
function atualizarAdm() {
	console.log('\n** Atualizar ADM **');
	const id = readline.question('Digite o ID do ADM a ser atualizado: ');

	if (!Adm[id]) {
			console.log('ADM não encontrado para atualização.');
			return;
	}

	const admParaAtualizar = Adm[id];
	const novoNome = readline.question('Digite o novo nome (ou pressione Enter para manter o mesmo): ');
	const novoEmail = readline.question('Digite o novo email (ou pressione Enter para manter o mesmo): ');
	const novaSenha = readline.question('Digite a nova senha: ');

	const novosDados = {};

	if (novoNome) {
			novosDados.nome = novoNome;
	}
	if (novoEmail) {
			novosDados.email = novoEmail;
	}
	if (novaSenha) {
			novosDados.senha = novaSenha;
	}

	if (validarEntradaDeDados(novosDados, ['nome', 'email', 'senha'])) {
			try {
					Object.assign(admParaAtualizar, novosDados);
					console.log('ADM atualizado com sucesso:', admParaAtualizar);
			} catch (error) {
					console.error('Erro ao atualizar ADM:', error);
			}
	}
}

// Função para deletar ADM
function deletarAdm() {
	console.log('\n** Deletar ADM **');
	const id = readline.question('Digite o ID do ADM a ser deletado: ');

	if (!Adm[id]) {
			console.log('ADM não encontrado para exclusão.');
			return;
	}

	try {
			Adm.splice(id, 1);
			console.log('ADM removido com sucesso!');
	} catch (error) {
			console.error('Erro ao deletar ADM:', error);
	}
}



// CRUD ALUNO

// CRUD EMPRESTIMO

// CRUD INSTRUMENTO

// CRUD MANUTENÇÃO


// Função para o menu do Administrador
function menuAdministrador() {
	while (true) {
			console.log('\n********** MENU ADMINISTRADOR **********');
			console.log('1. Criar ADM');
			console.log('2. Listar ADMs');
			console.log('3. Buscar ADM por Nome');
			console.log('4. Atualizar ADM');
			console.log('5. Deletar ADM');
			console.log('0. Voltar');
			console.log('*******************************************');
			const opcaoAdm = readline.questionInt('Escolha uma opção: ');

			switch (opcaoAdm) {
					case 1:
							criarAdm();
							break;
					case 2:
							listarAdms();
							break;
					case 3:
							buscarAdmPorNome();
							break;
					case 4:
							atualizarAdm();
							break;
					case 5:
							deletarAdm();
							break;
					case 0:
							console.log('Voltando ao menu principal.');
							return; // Retorna ao menu principal
					default:
							console.log('Opção inválida.');
							break;
			}
	}
}

// Função para o menu principal
function menuPrincipal() {
	while (true) {
			console.log('\n********** YALU **********');
			console.log('\nOPÇÃO:');
			console.log('1. Administrador');
			console.log('2. Alunos');
			console.log('3. Instrumentos');
			console.log('4. Empréstimos');
			console.log('5. Manutenção');
			console.log('0. Sair');
			console.log('*******************************************');
			const opcaoPrincipal = readline.questionInt('Escolha uma opção: ');

			switch (opcaoPrincipal) {
					case 1:
							menuAdministrador(); // Chama o menu do Administrador
							break;
					case 2:
							// Implementar as opções para Alunos
							break;
					case 3:
							// Implementar as opções para Instrumentos
							break;
					case 4:
							// Implementar as opções para Empréstimos
							break;
					case 5:
							// Implementar as opções para Manutenção
							break;
					case 0:
							console.log('\nEncerrando o programa.');
							process.exit(0); // Encerra o programa
							break;
					default:
							console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
							break;
			}
	}
}

//  programa chamando o menu principal
menuPrincipal();
