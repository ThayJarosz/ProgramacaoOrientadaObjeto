class Tarefa {
  constructor(descricao, dataVencimento) {
    this.descricao = descricao;
    this.dataVencimento = dataVencimento;
    this.concluida = false;
  }

  marcarComoConcluida() {
    this.concluida = true;
  }
}

class ListaTarefas {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  marcarTarefaComoConcluida(indice) {
    this.tarefas[indice].marcarComoConcluida();
  }
}

class Categoria {
  constructor(nome) {
    this.nome = nome;
    this.listasTarefas = [];
  }

  adicionarListaTarefas(lista) {
    this.listasTarefas.push(lista);
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.listasTarefas = [];
    this.categorias = [];
  }

  criarListaTarefas(nome) {
    const lista = new ListaTarefas(nome);
    this.listasTarefas.push(lista);
    return lista;
  }

  criarCategoria(nome) {
    const categoria = new Categoria(nome);
    this.categorias.push(categoria);
    return categoria;
  }
}

// Exemplo de Uso
const usuario1 = new Usuario("João");

const listaTrabalho = usuario1.criarListaTarefas("Trabalho");
const listaCasa = usuario1.criarListaTarefas("Casa");

const categoriaImportante = usuario1.criarCategoria("Importante");
const categoriaRotina = usuario1.criarCategoria("Rotina");

const tarefa1 = new Tarefa("Reunião com cliente", "2023-12-15");
const tarefa2 = new Tarefa("Comprar leite", "2023-12-20");

listaTrabalho.adicionarTarefa(tarefa1);
listaCasa.adicionarTarefa(tarefa2);

categoriaImportante.adicionarListaTarefas(listaTrabalho);
categoriaRotina.adicionarListaTarefas(listaCasa);

listaTrabalho.marcarTarefaComoConcluida(0);

console.log(usuario1);
