// Definindo a classe Funcionario
class Funcionario {
  #nome; // declara atributos no modo privado
  #salarioBase; 

  constructor(nome, salarioBase) {
      this.#nome = nome; // inicializando o nome ao criar uma instância
      this.#salarioBase = salarioBase; // inicializando o salário base ao criar uma instância
  }

  // Método para calcular o salário (será sobrescrito nas classes filhas)
  calcularSalario() {
      return this.#salarioBase; // retorna o salário base
  }

  // Métodos para encapsulamento usando get
  getNome() {
      return this.#nome; // retorna  nome
  }

  setNome(nome) {
      this.#nome = nome; // define um novo valor para o nome
  }

  getSalarioBase() {
      return this.#salarioBase; // retorna o salário base
  }

  setSalarioBase(salarioBase) {
      this.#salarioBase = salarioBase; // define um novo valor para o salário base
  }
}

// Classe Gerente herda de Funcionario
class Gerente extends Funcionario {
  #bonus; // adiciona bonus como atributo privado
  constructor(nome, salarioBase, bonus) {
      super(nome, salarioBase); // chama o construtor da classe pai para inicializar nome e salário base
      this.#bonus = bonus; // inicializa o bônus
  }

  // Sobrescrevendo o método para calcular o salário
  calcularSalario() {
      return super.calcularSalario() + this.#bonus; // calcula o salário somando o salario com bônus
  }

  // Métodos para encapsulamento usando get
  getBonus() {
      return this.#bonus; // retorna o bônus
  }

  setBonus(bonus) {
      this.#bonus = bonus; // define um novo valor para o bônus
  }
}

// Classe Departamento
class Departamento {
  #nome; // declara atributos no modo privado 
  #gerente; 
  #funcionarios; 

  constructor(nome, gerente, funcionarios) {
      this.#nome = nome; // inicializa o nome do departamento
      this.#gerente = gerente; // inicializa o gerente do departamento
      this.#funcionarios = funcionarios; // inicializa a lista de funcionários do departamento
  }

  // Método para adicionar funcionários ao departamento
  adicionarFuncionario(funcionario) {
      this.#funcionarios.push(funcionario); // adiciona um funcionário à lista de funcionários
  }

  // Métodos para encapsulamento usando get
  getNome() {
      return this.#nome; // retorna o nome do departamento
  }

  setNome(nome) {
      this.#nome = nome; // define um novo valor para o nome do departamento
  }

  getGerente() {
      return this.#gerente; // retorna o gerente do departamento
  }

  setGerente(gerente) {
      this.#gerente = gerente; // define um novo valor para o gerente do departamento
  }

  getFuncionarios() {
      return this.#funcionarios; // retorna a lista de funcionários do departamento
  }

  setFuncionarios(funcionarios) {
      this.#funcionarios = funcionarios; // define uma nova lista de funcionários para o departamento
  }
}

// Exemplo de uso
const gerenteJoao = new Gerente("João", 5000, 2000);
const analistaMaria = new Funcionario("Maria", 3000);
const departamentoTI = new Departamento("TI", gerenteJoao, [analistaMaria]);

console.log(`Salário de ${gerenteJoao.getNome()}: ${gerenteJoao.calcularSalario()}`);
console.log(`Salário de ${analistaMaria.getNome()}: ${analistaMaria.calcularSalario()}`);
console.log(`Departamento: ${departamentoTI.getNome()}, Gerente: ${departamentoTI.getGerente().getNome()}`);
