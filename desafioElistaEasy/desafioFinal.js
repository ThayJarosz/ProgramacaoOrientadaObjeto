// Definição da classe Tarefa
class Tarefa {
    constructor(descricao, prioridade, status) {
      this.descricao = descricao;
      this.prioridade = prioridade;
      this.status = status;
    }
  }
  
  // Definição da classe ListaTarefas
  class ListaTarefas {
    constructor(nome) {
      this.nome = nome;
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    removerTarefa(tarefa) {
      this.tarefas = this.tarefas.filter((t) => t !== tarefa);
    }
  
    marcarConcluida(tarefa) {
      const tarefaIndex = this.tarefas.findIndex((t) => t === tarefa);
      if (tarefaIndex !== -1) {
        this.tarefas[tarefaIndex].status = "concluída";
      }
    }
  
    exibirLista() {
      console.log(`Lista de Tarefas (${this.nome}):`);
      this.tarefas.forEach((tarefa) => {
        console.log(`${tarefa.descricao} - Prioridade: ${tarefa.prioridade}, Status: ${tarefa.status}`);
      });
    }
  
    calcularEstatisticas() {
      const totalTarefas = this.tarefas.length;
      const tarefasConcluidas = this.tarefas.filter((t) => t.status === "concluída").length;
      const tarefasPendentes = totalTarefas - tarefasConcluidas;
  
      return `Estatísticas: Total de Tarefas: ${totalTarefas}, Concluídas: ${tarefasConcluidas}, Pendentes: ${tarefasPendentes}`;
    }
  }
  
  // Definição da classe AplicativoToDoList
  class AplicativoToDoList {
    constructor() {
      this.listasTarefas = [];
      this.listaAtual = null;
    }

    adicionarTarefa(tarefa) {
        this.listaAtual.adicionarTarefa(tarefa);
    }

    removerTarefa(tarefa) {
        this.listaAtual.removerTarefa(tarefa);
    }
  
    criarLista(nome) {
      const novaLista = new ListaTarefas(nome);
      this.listasTarefas.push(novaLista);
    }
  
    selecionarLista(nome) {
      this.listaAtual = this.listasTarefas.find((lista) => lista.nome === nome);
    }
  
    exibirListasDisponiveis() {
      return this.listasTarefas.map((lista) => lista.nome);
    }
  }
  
  // Exemplo de Uso:
  const tarefa1 = new Tarefa("Estudar JavaScript", "alta", "pendente");
  const tarefa2 = new Tarefa("Fazer exercícios de POO", "média", "pendente");
  
  const lista1 = new ListaTarefas("Trabalho");
  lista1.adicionarTarefa(tarefa1);
  lista1.adicionarTarefa(tarefa2);
  
  const tarefa3 = new Tarefa("Comprar mantimentos", "baixa", "pendente");
  const tarefa4 = new Tarefa("Correr no parque", "média", "pendente");
  
  const lista2 = new ListaTarefas("Pessoal");
  lista2.adicionarTarefa(tarefa3);
  lista2.adicionarTarefa(tarefa4);

  // As listas a cima não vão aparecer pois não estão dentro do appToDoList

  const appToDoList = new AplicativoToDoList();
  appToDoList.criarLista("Estudos");
  appToDoList.selecionarLista("Estudos");
  appToDoList.adicionarTarefa(new Tarefa("Ler livro", "média", "pendente"));
  
  console.log(appToDoList.exibirListasDisponiveis());
  appToDoList.listaAtual.exibirLista();
  appToDoList.listaAtual.marcarConcluida(tarefa1);
  console.log(appToDoList.listaAtual.calcularEstatisticas());
  