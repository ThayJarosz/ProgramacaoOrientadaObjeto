class Carro {
  constructor(modelo, placa) {
    this.modelo = modelo;
    this.placa = placa;
    this.disponivel = true;
  }

  verificarDisponibilidade() {
    return this.disponivel;
  }

  alugar() {
    if (this.disponivel) {
      this.disponivel = false;
      return true;
    } else {
      return false;
    }
  }

  devolver() {
    this.disponivel = true;
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
  }
}

class Locacao {
  constructor(cliente, carro, periodo) {
    this.cliente = cliente;
    this.carro = carro;
    this.periodo = periodo;
  }

  calcularValor() {
    const valorDiaria = 50;
    return valorDiaria * this.periodo;
  }
}

class AgenciaLocadora {
  constructor() {
    this.carrosDisponiveis = [];
  }

  adicionarCarro(carro) {
    this.carrosDisponiveis.push(carro);
  }

  verificarDisponibilidade(modelo) {
    const carroDisponivel = this.carrosDisponiveis.find(carro => carro.modelo === modelo && carro.verificarDisponibilidade());

    return carroDisponivel ? true : false;
  }

  alugarCarro(cliente, modelo, periodo) {
    const carroDisponivel = this.carrosDisponiveis.find(carro => carro.modelo === modelo && carro.verificarDisponibilidade());

    if (carroDisponivel) {
      const locacao = new Locacao(cliente, carroDisponivel, periodo);
      carroDisponivel.alugar();
      return locacao;
    } else {
      return null;
    }
  }

  devolverCarro(locacao) {
    locacao.carro.devolver();
  }
}

// Exemplo de uso do sistema
const agencia = new AgenciaLocadora();

const carro1 = new Carro("Sedan", "ABC123");
const carro2 = new Carro("SUV", "XYZ789");

agencia.adicionarCarro(carro1);
agencia.adicionarCarro(carro2);

const cliente = new Cliente("João");

console.log(agencia.verificarDisponibilidade("Sedan")); // true
console.log(agencia.verificarDisponibilidade("SUV")); // true

const locacao = agencia.alugarCarro(cliente, "Sedan", 3);
console.log(locacao.calcularValor()); // Exemplo simples de cálculo de valor

console.log(agencia.verificarDisponibilidade("Sedan")); // false

agencia.devolverCarro(locacao);

console.log(agencia.verificarDisponibilidade("Sedan")); // true
