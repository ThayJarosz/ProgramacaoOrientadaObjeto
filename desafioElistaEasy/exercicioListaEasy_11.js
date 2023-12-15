class SalaConferencia {
  constructor(nome, capacidade) {
    this.nome = nome;
    this.capacidade = capacidade;
    this.reservas = [];
  }

  verificarDisponibilidade(inicio, fim) {
    for (const reserva of this.reservas) {
      if (
        (inicio >= reserva.inicio && inicio < reserva.fim) ||
        (fim > reserva.inicio && fim <= reserva.fim) ||
        (inicio <= reserva.inicio && fim >= reserva.fim)
      ) {
        return false; // Conflito de horário
      }
    }
    return true; // Sala disponível
  }

  realizarReserva(usuario, inicio, fim) {
    if (this.verificarDisponibilidade(inicio, fim)) {
      const reserva = new Reserva(usuario, inicio, fim);
      this.reservas.push(reserva);
      return reserva;
    } else {
      return null; // Conflito de horário, reserva não realizada
    }
  }

  cancelarReserva(reserva) {
    const index = this.reservas.indexOf(reserva);
    if (index !== -1) {
      this.reservas.splice(index, 1);
      return true; // Reserva cancelada com sucesso
    }
    return false; // Reserva não encontrada
  }
}

class Reserva {
  constructor(usuario, inicio, fim) {
    this.usuario = usuario;
    this.inicio = inicio;
    this.fim = fim;
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

class Calendario {
  constructor() {
    this.salas = [];
  }

  adicionarSala(sala) {
    this.salas.push(sala);
  }

  consultarDisponibilidade(sala, inicio, fim) {
    const salaEncontrada = this.salas.find((s) => s.nome === sala);
    if (salaEncontrada) {
      return salaEncontrada.verificarDisponibilidade(inicio, fim);
    }
    return false; // Sala não encontrada
  }
}

// Exemplo de uso
const calendario = new Calendario();

const salaA = new SalaConferencia("Sala A", 10);
const salaB = new SalaConferencia("Sala B", 15);

calendario.adicionarSala(salaA);
calendario.adicionarSala(salaB);

const usuario1 = new Usuario("João");
const usuario2 = new Usuario("Maria");

const reserva1 = salaA.realizarReserva(usuario1, new Date(2023, 0, 1, 10), new Date(2023, 0, 1, 12));
console.log(reserva1); // Reserva realizada com sucesso

const reserva2 = salaA.realizarReserva(usuario2, new Date(2023, 0, 1, 11), new Date(2023, 0, 1, 13));
console.log(reserva2); // Conflito de horário, reserva não realizada

const disponibilidade = calendario.consultarDisponibilidade("Sala A", new Date(2023, 0, 1, 14), new Date(2023, 0, 1, 16));
console.log(disponibilidade); // Sala A disponível para reserva nesse horário

salaA.cancelarReserva(reserva1);
console.log(salaA.reservas); // [] - Reserva cancelada com sucesso
