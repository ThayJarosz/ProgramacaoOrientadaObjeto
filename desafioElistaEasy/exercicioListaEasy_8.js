class Colaborador {
  constructor(nome, habilidades) {
    this.nome = nome;
    this.habilidades = habilidades;
  }
}

class Tarefa {
  constructor(nome, descricao, colaborador = null) {
    this.nome = nome;
    this.descricao = descricao;
    this.colaborador = colaborador;
    this.concluida = false;
  }

  atribuirColaborador(colaborador) {
    this.colaborador = colaborador;
  }

  concluirTarefa() {
    this.concluida = true;
  }
}

class Projeto {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  exibirDetalhes() {
    console.log(`Projeto: ${this.nome}`);
    console.log('Tarefas:');
    this.tarefas.forEach((tarefa, index) => {
      console.log(`  ${index + 1}. ${tarefa.nome}`);
      console.log(`     Descrição: ${tarefa.descricao}`);
      console.log(`     Colaborador: ${tarefa.colaborador ? tarefa.colaborador.nome : 'Não atribuído'}`);
      console.log(`     Concluída: ${tarefa.concluida ? 'Sim' : 'Não'}`);
    });
  }
}

class Equipe {
  constructor() {
    this.colaboradores = [];
  }

  adicionarColaborador(colaborador) {
    this.colaboradores.push(colaborador);
  }

  exibirDetalhes() {
    console.log('Equipe:');
    this.colaboradores.forEach((colaborador, index) => {
      console.log(`  ${index + 1}. ${colaborador.nome}`);
      console.log(`     Habilidades: ${colaborador.habilidades.join(', ')}`);
    });
  }
}

// Exemplo de uso
const equipe = new Equipe();

const desenvolvedor1 = new Colaborador('João', ['JavaScript', 'HTML', 'CSS']);
const desenvolvedor2 = new Colaborador('Maria', ['Python', 'Django']);

equipe.adicionarColaborador(desenvolvedor1);
equipe.adicionarColaborador(desenvolvedor2);

const projeto = new Projeto('Sistema de Gerenciamento');

const tarefa1 = new Tarefa('Implementar backend', 'Desenvolver a lógica do servidor', desenvolvedor1);
const tarefa2 = new Tarefa('Criar interface', 'Desenvolver a interface do usuário', desenvolvedor2);

projeto.adicionarTarefa(tarefa1);
projeto.adicionarTarefa(tarefa2);

// Atribuir mais uma tarefa ao desenvolvedor1
const tarefa3 = new Tarefa('Testar sistema', 'Realizar testes de qualidade');
tarefa3.atribuirColaborador(desenvolvedor1);

projeto.adicionarTarefa(tarefa3);

// Exibir informações detalhadas
projeto.exibirDetalhes();
console.log('\n');
equipe.exibirDetalhes();
