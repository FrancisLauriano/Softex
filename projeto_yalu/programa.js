const readline = require('readline-sync');
const Sequelize = require('sequelize');
const database = require('./db');
const Adm = require('./models/adm');
const Aluno = require('./models/aluno');
const Emprestimo = require('./models/emprestimo');
const Instrumento = require('./models/instrumento');
const Manutencao = require('./models/manutencao');

// Funções CRUD para o modelo Adm
async function criarAdm() {
	console.log('\n** Criar ADM **');
	const nome = readline.question('Digite o nome do ADM: ');
	const email = readline.question('Digite o email do ADM: ');
	const senha = readline.question('Digite a senha do ADM: ');

    try {
        const novoAdm = await Adm.create({
            nome,
            email,
            senha,
        });
        console.log('ADM criado com sucesso:', novoAdm);
    } catch (error) {
        console.error('Erro ao criar ADM:', error);
    }
}

async function listarAdms() {
	console.log('\n** Listar ADMs **');

	try {
			const adms = await Adm.findAll();
			if (adms.length > 0) {
					console.log('Lista de ADMs:');
					adms.forEach((adm, index) => {
							console.log(`ID: ${adm.id}, Nome: ${adm.nome}, Email: ${adm.email}`);
					});
			} else {
					console.log('Nenhum ADM encontrado.');
			}
	} catch (error) {
			console.error('Erro ao listar ADMs:', error);
	}
}

async function buscarAdmPorNome() {
	console.log('\n** Buscar ADM por Nome **');
	const nome = readline.question('Digite o nome do ADM que deseja buscar: ');

	try {
			const adms = await Adm.findAll({
					where: {
							nome: nome
					}
			});

			if (adms.length > 0) {
					console.log('ADM(s) encontrado(s):');
					adms.forEach((adm, index) => {
							console.log(`ID: ${adm.id}, Nome: ${adm.nome}, Email: ${adm.email}`);
					});
			} else {
					console.log('Nenhum ADM encontrado com o nome fornecido.');
			}
	} catch (error) {
			console.error('Erro ao buscar ADM por nome:', error);
	}
}

async function atualizarAdm() {
	console.log('\n** Atualizar ADM **');
	const id = readline.question('Digite o ID do ADM a ser atualizado: ');

	try {
		const admParaAtualizar = await Adm.findByPk(id);
		if (admParaAtualizar) {
				// Solicitar ao usuário os novos dados para o ADM
				const novoNome = readline.question('Digite o novo nome (ou pressione Enter para manter o mesmo): ');
				const novoEmail = readline.question('Digite o novo email (ou pressione Enter para manter o mesmo): ');
        const novaSenha = readline.question('Digite a nova senha: ');

				 // Atualizar os campos se o usuário fornecer novos dados
				if (novoNome) {
					admParaAtualizar.nome = novoNome;
				}
				if (novoEmail) {
						admParaAtualizar.email = novoEmail;
				}
				if (novaSenha) {
					admParaAtualizar.senha = novaSenha;
			}

						// Salvar as mudanças no banco de dados
            const admAtualizado = await admParaAtualizar.save();
            console.log('ADM atualizado com sucesso:', admAtualizado);
        } else {
            console.log('ADM não encontrado para atualização.');
        }
    } catch (error) {
        console.error('Erro ao atualizar ADM:', error);
    }
}

async function deletarAdm() {
	console.log('\n** Deletar ADM **');
	const id = readline.question('Digite o ID do ADM a ser deletado: ');

    try {
        const admParaDeletar = await Adm.findByPk(id);
        if (admParaDeletar) {
            const resultado = await admParaDeletar.destroy();
            console.log(resultado ? 'ADM removido com sucesso!' : 'Falha ao remover o ADM.');
        } else {
            console.log('ADM não encontrado para exclusão.');
        }
    } catch (error) {
        console.error('Erro ao deletar ADM:', error);
    }
}


// Funções CRUD para o modelo Aluno
async function criarAluno() {
	console.log('\n** Criar Aluno **');
	const nome = readline.question('Digite o nome do aluno: ');
	const telefone = readline.question('Digite o telefone do aluno: ');
	const email = readline.question('Digite o email do aluno: ');
	const turma = readline.question('Digite a turma do aluno: ');

	try {
			const novoAluno = await Aluno.create({
					nome,
					telefone,
					email,
					turma,
			});
			console.log('Aluno criado com sucesso:', novoAluno);
	} catch (error) {
			console.error('Erro ao criar aluno:', error);
	}
}

async function listarAlunos() {
	console.log('\n** Listar Alunos **');
	try {
			const alunos = await Aluno.findAll();
			console.log('Lista de alunos:', alunos);
	} catch (error) {
			console.error('Erro ao listar alunos:', error);
	}
}

// Função para atualizar um aluno
async function atualizarAluno() {
console.log('\n** Atualizar Aluno **');
const id = readline.question('Digite o ID do aluno a ser atualizado: ');

try {
		const alunoParaAtualizar = await Aluno.findByPk(id);
		if (alunoParaAtualizar) {
				// Solicitar ao usuário os novos dados para o aluno
				const novoNome = readline.question('Digite o novo nome: ');
				const novoTelefone = readline.question('Digite o novo telefone: ');
				const novoEmail = readline.question('Digite o novo email: ');
				const novaTurma = readline.question('Digite a nova turma: ');

				// Atualizar os campos se o usuário fornecer novos dados
				if (novoNome) {
					alunoParaAtualizar.nome = novoNome;
				}
				if (novoTelefone) {
						alunoParaAtualizar.telefone = novoTelefone;
				}
				if (novoEmail) {
						alunoParaAtualizar.email = novoEmail;
				}
				if (novaTurma) {
						alunoParaAtualizar.turma = novaTurma;
				}

				// Salvar as mudanças no banco de dados
				const alunoAtualizado = await alunoParaAtualizar.save();
				console.log('Aluno atualizado com sucesso:', alunoAtualizado);
		} else {
				console.log('Aluno não encontrado para atualização.');
		}
} catch (error) {
		console.error('Erro ao atualizar aluno:', error);
}
}

// Função para deletar um aluno
async function deletarAluno() {
console.log('\n** Deletar Aluno **');
const id = readline.question('Digite o ID do aluno a ser deletado: ');

try {
		const alunoParaDeletar = await Aluno.findByPk(id);
		if (alunoParaDeletar) {
				const resultado = await alunoParaDeletar.destroy();
				console.log(resultado ? 'Aluno removido com sucesso!' : 'Falha ao remover o aluno.');
		} else {
				console.log('Aluno não encontrado para exclusão.');
		}
} catch (error) {
		console.error('Erro ao deletar aluno:', error);
}
}



// Funções CRUD para o modelo Instrumento
async function criarInstrumento() {
	console.log('\n** Criar Instrumento **');
	const tipoInstrumento = readline.question('Digite o tipo do instrumento: ');
	const descricao = readline.question('Digite a descrição do instrumento: ');
	const dataAquisicao = readline.question('Digite a data de aquisição do instrumento (AAAA-MM-DD): ');
	const disponibilidadeUso = readline.question('Digite a disponibilidade de uso do instrumento: ');
	const localizacao = readline.question('Digite a localização do instrumento: ');

	try {
			const novoInstrumento = await Instrumento.create({
					tipoInstrumento,
					descricao,
					dataAquisicao,
					disponibilidadeUso,
					localizacao,
			});
			console.log('Instrumento criado com sucesso:', novoInstrumento);
	} catch (error) {
			console.error('Erro ao criar instrumento:', error);
	}
}

async function listarInstrumentos() {
	console.log('\n** Listar Instrumentos **');
	try {
			const instrumentos = await Instrumento.findAll();
			console.log('Lista de instrumentos:', instrumentos);
	} catch (error) {
			console.error('Erro ao listar instrumentos:', error);
	}
}

// Função para atualizar um instrumento
async function atualizarInstrumento() {
console.log('\n** Atualizar Instrumento **');
const id = readline.question('Digite o ID do instrumento a ser atualizado: ');

try {
		const instrumentoParaAtualizar = await Instrumento.findByPk(id);
		if (instrumentoParaAtualizar) {
				// Solicitar ao usuário os novos dados para o instrumento
				const novoTipoInstrumento = readline.question('Digite o novo tipo de instrumento: ');
				const novaDescricao = readline.question('Digite a nova descrição: ');
				const novaDataAquisicao = readline.question('Digite a nova data de aquisição (AAAA-MM-DD): ');
				const novaDisponibilidadeUso = readline.question('Digite a nova disponibilidade de uso: ');
				const novaLocalizacao = readline.question('Digite a nova localização: ');

				// Atualizar os campos se o usuário fornecer novos dados
				if (novoTipoInstrumento) {
					instrumentoParaAtualizar.tipoInstrumento = novoTipoInstrumento;
				}
				if (novaDescricao) {
						instrumentoParaAtualizar.descricao = novaDescricao;
				}
				if (novaDataAquisicao) {
						instrumentoParaAtualizar.dataAquisicao = novaDataAquisicao;
				}
				if (novaDisponibilidadeUso) {
						instrumentoParaAtualizar.disponibilidadeUso = novaDisponibilidadeUso;
				}
				if (novaLocalizacao) {
						instrumentoParaAtualizar.localizacao = novaLocalizacao;
				}

				// Salvar as mudanças no banco de dados
				const instrumentoAtualizado = await instrumentoParaAtualizar.save();
				console.log('Instrumento atualizado com sucesso:', instrumentoAtualizado);
		} else {
				console.log('Instrumento não encontrado para atualização.');
		}
} catch (error) {
		console.error('Erro ao atualizar instrumento:', error);
}
}

// Função para deletar um instrumento
async function deletarInstrumento() {
console.log('\n** Deletar Instrumento **');
const id = readline.question('Digite o ID do instrumento a ser deletado: ');

try {
		const instrumentoParaDeletar = await Instrumento.findByPk(id);
		if (instrumentoParaDeletar) {
				const resultado = await instrumentoParaDeletar.destroy();
				console.log(resultado ? 'Instrumento removido com sucesso!' : 'Falha ao remover o instrumento.');
		} else {
				console.log('Instrumento não encontrado para exclusão.');
		}
} catch (error) {
		console.error('Erro ao deletar instrumento:', error);
}
}


// MENU INICIAL
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
									break;
							default:
									console.log('Opção inválida.');
									break;
					}
					break;
			case 2:
					console.log('\n********** MENU ALUNOS **********');
					console.log('1. Criar Aluno');
					console.log('2. Listar Alunos');
					console.log('3. Atualizar Aluno');
					console.log('4. Deletar Aluno');
					console.log('0. Voltar');
					console.log('*******************************************');
					const opcaoAlunos = readline.questionInt('Escolha uma opção: ');

					switch (opcaoAlunos) {
							case 1:
									criarAluno();
									break;
							case 2:
									listarAlunos();
									break;
							case 3:
									atualizarAluno();
									break;
							case 4:
									deletarAluno();
									break;
							case 0:
									console.log('Voltando ao menu principal.');
									break;
							default:
									console.log('Opção inválida.');
									break;
					}
					break;
			case 3:
					console.log('\n********** MENU INSTRUMENTOS **********');
					console.log('1. Criar Instrumento');
					console.log('2. Listar Instrumentos');
					console.log('3. Atualizar Instrumento');
					console.log('4. Deletar Instrumento');
					console.log('0. Voltar');
					console.log('*******************************************');
					const opcaoInstrumentos = readline.questionInt('Escolha uma opção: ');

					switch (opcaoInstrumentos) {
							case 1:
									criarInstrumento();
									break;
							case 2:
									listarInstrumentos();
									break;
							case 3:
									atualizarInstrumento();
									break;
							case 4:
									deletarInstrumento();
									break;
							case 0:
									console.log('Voltando ao menu principal.');
									break;
							default:
									console.log('Opção inválida.');
									break;
					}
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
