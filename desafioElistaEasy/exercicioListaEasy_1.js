class Hospede {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

class Quarto {
  constructor(numero, tipo) {
    this.numero = numero;
    this.tipo = tipo;
    this.disponivel = true;
  }

  reservar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log(`Quarto ${this.numero} reservado.`);
    } else {
      console.log(`Quarto ${this.numero} não está disponível.`);
    }
  }

  liberar() {
    this.disponivel = true;
    console.log(`Quarto ${this.numero} liberado.`);
  }
}

class Reserva {
  constructor(hospede, quarto, dataInicio, dataFim) {
    this.hospede = hospede;
    this.quarto = quarto;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }

  exibirDetalhes() {
    console.log(`Reserva para ${this.hospede.nome} no quarto ${this.quarto.numero}`);
    console.log(`Período: ${this.dataInicio} a ${this.dataFim}`);
  }
}

class Hotel {
  constructor(nome) {
    this.nome = nome;
    this.quartos = [];
  }

  adicionarQuarto(quarto) {
    this.quartos.push(quarto);
  }

  consultarDisponibilidade(dataInicio, dataFim) {
    console.log(`Consulta de disponibilidade para o período de ${dataInicio} a ${dataFim}`);
    for (const quarto of this.quartos) {
      if (quarto.disponivel) {
        console.log(`Quarto ${quarto.numero} (${quarto.tipo}) está disponível.`);
      } else {
        console.log(`Quarto ${quarto.numero} (${quarto.tipo}) não está disponível.`);
      }
    }
  }
}

// Exemplo de uso do sistema
const hotel = new Hotel("Hotel ABC");

const quarto1 = new Quarto(101, "simples");
const quarto2 = new Quarto(201, "duplo");
const quarto3 = new Quarto(301, "suíte");

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(quarto3);

const hospede1 = new Hospede("João", "joao@email.com", "123456789");
const hospede2 = new Hospede("Maria", "maria@email.com", "987654321");

const reserva1 = new Reserva(hospede1, quarto1, "2023-01-01", "2023-01-05");
const reserva2 = new Reserva(hospede2, quarto2, "2023-02-01", "2023-02-10");

reserva1.exibirDetalhes();
quarto1.reservar();

reserva2.exibirDetalhes();
quarto2.reservar();

hotel.consultarDisponibilidade("2023-03-01", "2023-03-10");
