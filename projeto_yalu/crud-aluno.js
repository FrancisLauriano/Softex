// CRUD - ALUNO
// Sync do sequelize com banco de dados
(async () => {
	const database = require('./db');
	const Aluno = require('./models/aluno');

	// tratamento de exceções
	try {
			const resultado = await database.sync({force: true});
			console.log(resultado);

			// 1- CREATE UM ALUNO
			const alunoCreate = await Aluno.create({
				nome: 'Aluno Teste',
				telefone: 999999999,
				email: 'aluno_teste@teste.com.br',
				turma: 1,

		})
		console.log(alunoCreate);


		// 2- READ - LISTAR TODOS OS ALUNOS


		// 3- READ - LISTAR UM ALUNO ESPECÍFICO POR NOME



		// 4- READ - LISTAR UM ALUNO ESPECÍFICO POR id (CHAVE PRIMARIA)


		// 5- UPDATE


		// 6- DELETE



		// tratamento de exceções
	} catch (error) {
			console.log('ERRO\n',error);

		//ao finalizar o script, finaliza a conexão com o banco de dados
	} finally {
    await database.close();
	}
})();
