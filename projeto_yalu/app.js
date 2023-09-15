(async () => {
    const database = require('./db');
		const Adm = require('./models/adm');
		const Aluno = require('./models/aluno');
		const Emprestimo = require('./models/emprestimo');
		const Instrumento = require('./models/instrumento');
		const Manutencao = require('./models/manutencao');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();
