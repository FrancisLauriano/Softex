// CRUD - MANUTENCAO
// Sync do sequelize com banco de dados
(async () => {
	const database = require('../projeto_yalu/db');
	const Manutencao = require('../projeto_yalu/models/manutencao');
	const Instrumento = require('../projeto_yalu/models/instrumento');

	// tratamento de exceções
	try {
			const resultado = await database.sync({force: true});
			console.log(resultado);

			const instrumento = await Instrumento.findOne({ where: { id: 'Id do Instrumento' } }); // passando o objeto Manutencao

			// 1- CREATE UMA MANUTENCAO
			const manutencaoCreate = await Manutencao.create({
				data: '14-09-2023',
				descricao: 'teste descricao',
				idInstrumento: instrumento.id,  // objeto Instrumento
		})
		console.log(manutencaoCreate);


		// 2- READ - LISTAR TODOS AS MANUTENCOES


		// 3- READ - LISTAR UMA MANUTENCAO ESPECÍFICO POR NOME



		// 4- READ - LISTAR UMA MANUTENCAO ESPECÍFICO POR id (CHAVE PRIMARIA)


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
