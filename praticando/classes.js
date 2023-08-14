/* Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.
*/
// classe = São modelos ou moldes de objetos;

class Pessoa 
{
    // atributos = variaveis ou caracteristicas do objeto
    // por proteção /segurança aos dados, designei os atributos como privado
    _nome; // tipo String 
    _idade; // tipo Integer
    _filho; // tipo Float ou Real
    static totalPessoas = 0; // atributo estático ou da class

    // metodo = funções ou comportamentos
    // metodo construtor
    constructor (nome, idade, filho){
        this._nome = nome;
        this._idade = idade;
        this._filho = filho;
        Pessoa.totalPessoas += 1; // contador com incremento

    }

    // get = pegar (retorna o dado)
    get nome () {
        return this._nome;
    }

    get idade () {
        return this._idade;
    }

    get filho () {
        return this._filho;
    }

    get totalPessoas () {
        return this.totalPessoas;
    }


    // set = configuração, editar (alteração de dados)
    set nome(editarNome){
        this._nome = editarNome;
    }

    set idade(editarIdade){
        this._nome = editarIdade;
    }

    set filho(editarFilho){
        this._nome = editarFilho;
    }


}

// criar novo obejeto a partir da class (instanciar novo objeto)
let pessoa1 = new Pessoa("Francis", 30, 0)
let pessoa2 = new Pessoa();


// atribuir valores para os atributos de um objeto
// pessoa1._nome = "";
// pessoa1._idade = "";
// pessoa1._filho = "";

// pessoa2._nome = "";
// pessoa2._idade = "";
// pessoa2._filho = "";

// imprimir em tela
console.log(`Total de pesssoas: ${Pessoa.totalPessoas}`);
console.log("Nome:" + pessoa1.nome); 
pessoa1.nome = "Lauriano"
console.log("Nome:" + pessoa1.nome);               // console.log(pessoa1); 
                // console.log(pessoa2);