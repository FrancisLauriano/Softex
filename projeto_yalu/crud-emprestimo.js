// CRUD - EMPRESTIMO
// Sync do sequelize com banco de dados
(async () => {
	const database = require('./db');
	const Emprestimo = require('./models/emprestimo');
	const Aluno = require('./models/aluno');
	const Instrumento = require('./models/instrumento');

	// tratamento de exceções
	try {
			const resultado = await database.sync({force: true});
			console.log(resultado);

			const aluno = await Aluno.findOne({ where: { nome: 'Nome do Aluno' } }); // passando o objeto Aluno
			const instrumento = await Instrumento.findOne({ where: { nome: 'Nome do Instrumento' } }); // passando o objetos Instrumento

			// 1- CREATE UM EMPRESTIMO
			const emprestimoCreate = await Emprestimo.create({
				data: '14-09-2023',
				evento: 'evento teste',
				AlunoId: aluno.id, // objeto Aluno
				idInstrumento: instrumento.id, // objeto Instrumento
		})
		console.log(emprestimoCreate);


		// 2- READ - LISTAR TODOS OS EMPRESTIMOS


		// 3- READ - LISTAR UM EMPRESTIMO ESPECÍFICO POR NOME



		// 4- READ - LISTAR UM EMPRESTIMO ESPECÍFICO POR id (CHAVE PRIMARIA)


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
