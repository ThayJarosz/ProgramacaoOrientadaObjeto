// Classe Aluno
class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }

  obterBoletim() {
    const boletim = new Boletim(this.nome);
    this.disciplinas.forEach(disciplina => {
      const media = disciplina.calcularMedia();
      boletim.adicionarNota(disciplina.nome, media);
    });
    return boletim;
  }
}

// Classe Disciplina
class Disciplina {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota) {
    this.notas.push(nota);
  }

  calcularMedia() {
    if (this.notas.length === 0) return 0; // Correção aqui
    const soma = this.notas.reduce((total, nota) => total + nota.valor, 0);
    return soma / this.notas.length;
  }
}

// Classe Nota
class Nota {
  constructor(valor) {
    this.valor = valor;
  }
}

// Classe Boletim
class Boletim {
  constructor(nomeAluno) {
    this.nomeAluno = nomeAluno;
    this.notas = {};
  }

  adicionarNota(nomeDisciplina, media) {
    this.notas[nomeDisciplina] = media;
  }

  consultarDesempenho() {
    console.log(`Desempenho do aluno ${this.nomeAluno}:`);
    for (const disciplina in this.notas) {
      console.log(`${disciplina}: ${this.notas[disciplina]}`);
    }
  }
}

// Exemplo de uso
const aluno1 = new Aluno("João", 15);

const matematica = new Disciplina("Matemática");
matematica.adicionarNota(new Nota(8));
matematica.adicionarNota(new Nota(7));

const historia = new Disciplina("História");
historia.adicionarNota(new Nota(9));
historia.adicionarNota(new Nota(8));

aluno1.adicionarDisciplina(matematica);
aluno1.adicionarDisciplina(historia);

const boletimAluno1 = aluno1.obterBoletim();
boletimAluno1.consultarDesempenho();
