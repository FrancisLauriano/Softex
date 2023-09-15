// CRUD - INSTRUMENTO
// Sync do sequelize com banco de dados
(async () => {
	const database = require('../db');
	const Instrumento = require('../models/instrumento');
	const Manutencao = require('../models/manutencao');

	// tratamento de exceções
	try {
			const resultado = await database.sync({force: true});
			console.log(resultado);

			const manutencao = await Manutencao.findOne({ where: { id: 'Id do Instrumento' } }); // passando o objeto Manutencao

			// 1- CREATE UM INSTRUMENTO
			const instrumentoCreate = await Instrumento.create({
				tipoInstrumento: 'tipo teste',
				descricao: 'descricao teste',
				dataAquisicao: '14-09-2023',
				disponibilidadeUso: 'teste disponibilidade',
				localizacao: 'teste localizacao',
				idManutencao: manutencao.id,  // objeto Manutencao
		})
		console.log(instrumentoCreate);


		// 2- READ - LISTAR TODOS OS INSTRUMENTO


		// 3- READ - LISTAR UM INSTRUMENTO ESPECÍFICO POR NOME



		// 4- READ - LISTAR UM INSTRUMENTO ESPECÍFICO POR id (CHAVE PRIMARIA)


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
