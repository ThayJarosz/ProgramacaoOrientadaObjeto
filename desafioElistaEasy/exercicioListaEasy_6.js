class Espetaculo {
  constructor(titulo, data, horario, assentosDisponiveis) {
    this.titulo = titulo;
    this.data = data;
    this.horario = horario;
    this.assentosDisponiveis = assentosDisponiveis;
    this.reservas = [];
  }

  exibirDetalhes() {
    console.log(`Espetáculo: ${this.titulo}`);
    console.log(`Data e Horário: ${this.data} às ${this.horario}`);
    console.log(`Assentos Disponíveis: ${this.assentosDisponiveis}`);
    console.log("Reservas:");
    this.reservas.forEach((reserva) => {
      reserva.exibirDetalhes();
    });
    console.log("\n");
  }

  verificarDisponibilidade(qtdAssentos) {
    return this.assentosDisponiveis >= qtdAssentos;
  }

  fazerReserva(cliente, qtdAssentos) {
    if (this.verificarDisponibilidade(qtdAssentos)) {
      const reserva = new Reserva(cliente, this, qtdAssentos);
      this.reservas.push(reserva);
      this.assentosDisponiveis -= qtdAssentos;
      console.log(`Reserva realizada para ${cliente.nome}`);
    } else {
      console.log("Assentos insuficientes para realizar a reserva");
    }
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
  }
}

class Reserva {
  constructor(cliente, espetaculo, qtdAssentos) {
    this.cliente = cliente;
    this.espetaculo = espetaculo;
    this.qtdAssentos = qtdAssentos;
  }

  exibirDetalhes() {
    console.log(
      `Reserva para ${this.cliente.nome} - ${this.qtdAssentos} assentos`
    );
  }
}

class Teatro {
  constructor() {
    this.espetaculos = [];
  }

  agendarEspetaculo(espetaculo) {
    this.espetaculos.push(espetaculo);
  }

  exibirAgenda() {
    console.log("Agenda do Teatro:\n");
    this.espetaculos.forEach((espetaculo) => {
      espetaculo.exibirDetalhes();
    });
  }
}

// Exemplo de uso:

const teatro = new Teatro();

const espetaculo1 = new Espetaculo("Show de Magia", "2023-12-20", "19:30", 50);
const espetaculo2 = new Espetaculo("Comédia Stand-up", "2023-12-22", "20:00", 30);

teatro.agendarEspetaculo(espetaculo1);
teatro.agendarEspetaculo(espetaculo2);

const cliente1 = new Cliente("João");
const cliente2 = new Cliente("Maria");

espetaculo1.fazerReserva(cliente1, 3);
espetaculo1.fazerReserva(cliente2, 5);

espetaculo2.fazerReserva(cliente1, 2);

teatro.exibirAgenda();
