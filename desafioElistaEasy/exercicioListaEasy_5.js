class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.disciplinasMatriculadas = [];
  }

  matricularEmDisciplina(disciplina) {
    this.disciplinasMatriculadas.push(disciplina);
    console.log(`${this.nome} matriculado na disciplina ${disciplina.nome}`);
  }
}

class Professor {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  atribuirNota(aluno, disciplina, nota) {
    if (aluno.disciplinasMatriculadas.includes(disciplina)) {
      disciplina.atribuirNota(aluno, nota);
    } else {
      console.log(`${aluno.nome} não está matriculado na disciplina ${disciplina.nome}`);
    }
  }
}

class Disciplina {
  constructor(nome) {
    this.nome = nome;
    this.alunosMatriculados = [];
    this.notas = {};
  }

  matricularAluno(aluno) {
    this.alunosMatriculados.push(aluno);
    console.log(`${aluno.nome} matriculado na disciplina ${this.nome}`);
  }

  atribuirNota(aluno, nota) {
    if (this.alunosMatriculados.includes(aluno)) {
      this.notas[aluno.nome] = nota;
      console.log(`Nota ${nota} atribuída a ${aluno.nome} na disciplina ${this.nome}`);
    } else {
      console.log(`${aluno.nome} não está matriculado na disciplina ${this.nome}`);
    }
  }

  calcularMedia(aluno) {
    if (this.alunosMatriculados.includes(aluno) && this.notas[aluno.nome] !== undefined) {
      const notas = Object.values(this.notas);
      const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
      const media = somaNotas / notas.length;
      console.log(`Média de ${aluno.nome} na disciplina ${this.nome}: ${media}`);
      return media;
    } else {
      console.log(`${aluno.nome} não tem nota na disciplina ${this.nome}`);
      return undefined;
    }
  }

  verificarStatusAprovacao(aluno) {
    const media = this.calcularMedia(aluno);
    if (media !== undefined && media >= 6) {
      console.log(`${aluno.nome} está aprovado na disciplina ${this.nome}`);
    } else {
      console.log(`${aluno.nome} está reprovado na disciplina ${this.nome}`);
    }
  }
}

class Turma {
  constructor() {
    this.disciplinas = [];
    this.alunos = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
    console.log(`Disciplina ${disciplina.nome} adicionada à turma`);
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
    console.log(`${aluno.nome} adicionado à turma`);
  }
}

// Exemplo de uso:

const turmaA = new Turma();

const aluno1 = new Aluno("João", 18);
const aluno2 = new Aluno("Maria", 19);

const professor1 = new Professor("Dr. Silva", 40);

const disciplina1 = new Disciplina("Matemática");
const disciplina2 = new Disciplina("História");

turmaA.adicionarDisciplina(disciplina1);
turmaA.adicionarDisciplina(disciplina2);
turmaA.adicionarAluno(aluno1);
turmaA.adicionarAluno(aluno2);

disciplina1.matricularAluno(aluno1);
disciplina1.matricularAluno(aluno2);

professor1.atribuirNota(aluno1, disciplina1, 8);
professor1.atribuirNota(aluno2, disciplina1, 7);

disciplina1.verificarStatusAprovacao(aluno1);
disciplina1.verificarStatusAprovacao(aluno2);
