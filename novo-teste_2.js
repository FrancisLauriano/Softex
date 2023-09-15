const readline = require('readline-sync');

// administradosres autorizados a acessar o sistema - TESTE
const administradoresAutorizados = [
  { nome: 'admin1', senha: 'senha1' },
  { nome: 'admin2', senha: 'senha2' },
];

const Adm = [];
const Aluno = [];
const Emprestimo = [];
const Instrumento = [];
const Manutencao = [];

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

// CRUD ADM
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
  const nomeOuEmail = readline.question('Digite o nome ou email do ADM que deseja atualizar: ');

  try {
    // Procurar o ADM com base no nome ou email fornecido
    const admParaAtualizar = Adm.find((adm) => adm.nome === nomeOuEmail || adm.email === nomeOuEmail);

    if (!admParaAtualizar) {
      console.log('ADM não encontrado para atualização.');
      return;
    }

    // Mostrar os dados atuais do ADM
    console.log('Dados atuais do ADM:');
    console.log(`Nome: ${admParaAtualizar.nome}`);
    console.log(`Email: ${admParaAtualizar.email}`);
    console.log(`Senha: ${admParaAtualizar.senha}`);

    console.log('\nO que deseja atualizar?');
    console.log('1. Nome');
    console.log('2. Email');
    console.log('3. Senha');
    console.log('0. Cancelar');
    const opcao = readline.questionInt('Escolha uma opção: ');

    switch (opcao) {
      case 1:
        const novoNome = readline.question('Digite o novo nome (ou pressione Enter para manter o mesmo): ');
        if (novoNome) {
          admParaAtualizar.nome = novoNome;
          console.log('Nome atualizado com sucesso.');
        } else {
          console.log('Nome não atualizado.');
        }
        break;
      case 2:
        const novoEmail = readline.question('Digite o novo email (ou pressione Enter para manter o mesmo): ');
        if (novoEmail) {
          admParaAtualizar.email = novoEmail;
          console.log('Email atualizado com sucesso.');
        } else {
          console.log('Email não atualizado.');
        }
        break;
      case 3:
        const novaSenha = readline.question('Digite a nova senha (ou pressione Enter para manter a mesma): ');
        if (novaSenha) {
          admParaAtualizar.senha = novaSenha;
          console.log('Senha atualizada com sucesso.');
        } else {
          console.log('Senha não atualizada.');
        }
        break;
      case 0:
        console.log('Operação de atualização cancelada.');
        break;
      default:
        console.log('Opção inválida.');
        break;
    }
  } catch (error) {
    console.error('Erro ao atualizar ADM:', error);
  }
}

// Função para deletar ADM
function deletarAdm() {
  console.log('\n** Deletar ADM **');
  const nomeOuEmail = readline.question('Digite o nome ou email do ADM que deseja deletar: ');

  try {
    // Procurar o ADM com base no nome ou email
    const admParaDeletar = Adm.find((adm) => adm.nome === nomeOuEmail || adm.email === nomeOuEmail);

    if (!admParaDeletar) {
      console.log('ADM não encontrado para exclusão.');
      return;
    }

    // Mostrar os dados do ADM antes da exclusão
    console.log('Dados do ADM a ser deletado:');
    console.log(`Nome: ${admParaDeletar.nome}`);
    console.log(`Email: ${admParaDeletar.email}`);
    console.log(`Senha: ${admParaDeletar.senha}`);

    console.log('\nDeseja realmente excluir este ADM?');
    console.log('1. Sim');
    console.log('2. Não');
    const confirmaDelecao = readline.questionInt('Escolha uma opção: ');

    if (confirmaDelecao === 1) {
      const index = Adm.indexOf(admParaDeletar);
      if (index !== -1) {
        Adm.splice(index, 1);
        console.log('ADM removido com sucesso!');
      } else {
        console.log('Erro ao remover ADM.');
      }
    } else if (confirmaDelecao === 2) {
      console.log('Operação de exclusão cancelada.');
    } else {
      console.log('Opção inválida. Nenhum dado foi removido.');
    }
  } catch (error) {
    console.error('Erro ao deletar ADM:', error);
  }
}

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
        return; // retornar ao menu principal
      default:
        console.log('Opção inválida.');
        break;
    }
  }
}

// Função para o menu principal
function menuPrincipal() {
  if (!autenticarAdmin()) {
    console.log('Encerrando o programa.');
    process.exit(0); // encerrar o programa se a autenticação de adm falhar
  }

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
        menuAdministrador(); // chamar o menu do ADM
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

// Programa chamando o menu principal
menuPrincipal();


// Função para autenticar um ADM
function autenticarAdmin() {
  console.log('\n** Autenticação do Administrador **');
  const nomeUsuario = readline.question('Digite o nome de usuário: ');
  const senha = readline.question('Digite a senha: ');

  // Verificando se as credenciais correspondem a um admin autorizado
  const adminAutorizado = administradoresAutorizados.find(admin => admin.nome === nomeUsuario && admin.senha === senha);

  if (adminAutorizado) {
    console.log('Autenticação bem-sucedida. Acesso permitido.');
    return true;
  } else {
    console.log('Credenciais inválidas. Acesso negado.');
    return false;
  }
}
