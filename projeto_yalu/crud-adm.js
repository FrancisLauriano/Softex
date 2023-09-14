// CRUD - ADM
// Sync do sequelize com banco de dados
(async () => {
	const database = require('./db');
	const Adm = require('./adm');

	// tratamento de exceções
	try {
			const resultado = await database.sync();
			console.log(resultado);

			// 1- CREATE UM ADM
			const admCreate = await Adm.create({
				nome: 'Teste',
				email: 'teste@teste.com.br',
				senha: 123456,
		})
		console.log(admCreate);


		// 2- READ - LISTAR TODOS OS ADM
		const adms = await Adm.findAll();
		console.log(adms);


		// 3- READ - LISTAR UM ADM ESPECÍFICO POR NOME
		const admEspecifico = await Adm.findAll({
		  where: {
				// nome,
			 }
		});
		console.log(admEspecifico);


		// 4- READ - LISTAR UM ADM ESPECÍFICO POR idAdm (CHAVE PRIMARIA)
		const admPorId = await Adm.findByPk();
		console.log(admPorId);


		5- UPDATE
		const adm = await Adm.findByPk();
		// adm.nome; // alterar nome
		// adm.email; // alterar email
		// adm.senha; // alterar senha

		const admSave = await adm.save();
		console.log(admSave > 0 ? 'Atualizado com sucesso!' : 'Usuário não encontrado!',
		admSave);


		6- DELETE
		const admDestroy = await Adm.destroy({ where: {
			// nome: // deletar adm pesquisando por nome
			}
		});
		console.log(admDestroy > 0 ? 'Removido com sucesso!' : 'Usuário não encontrado!', admDestroy);

		// tratamento de exceções
	} catch (error) {
			console.log('ERRO\n',error);

		//ao finalizar o script, finaliza a conexão com o banco de dados
	} finally {
    await database.close();
	}
})();
