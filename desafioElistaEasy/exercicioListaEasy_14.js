class Categoria {
  constructor(nome) {
    this.nome = nome;
  }
}

class Transacao {
  constructor(valor, data, categoria) {
    this.valor = valor;
    this.data = data;
    this.categoria = categoria;
  }
}

class Despesa extends Transacao {
  constructor(valor, data, categoria) {
    super(valor, data, categoria);
  }
}

class Receita extends Transacao {
  constructor(valor, data, categoria) {
    super(valor, data, categoria);
  }
}

class Orcamento {
  constructor() {
    this.despesas = [];
    this.receitas = [];
  }

  registrarDespesa(despesa) {
    this.despesas.push(despesa);
  }

  registrarReceita(receita) {
    this.receitas.push(receita);
  }

  calcularSaldo() {
    const totalDespesas = this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
    const totalReceitas = this.receitas.reduce((total, receita) => total + receita.valor, 0);

    return totalReceitas - totalDespesas;
  }

  gerarRelatorio() {
    console.log("----- Relatório Financeiro -----");
    console.log("Despesas:");
    this.despesas.forEach(despesa => {
      console.log(`- Valor: ${despesa.valor} | Data: ${despesa.data} | Categoria: ${despesa.categoria.nome}`);
    });

    console.log("\nReceitas:");
    this.receitas.forEach(receita => {
      console.log(`+ Valor: ${receita.valor} | Data: ${receita.data} | Categoria: ${receita.categoria.nome}`);
    });

    console.log("\nSaldo Total: ", this.calcularSaldo());
  }
}

// Exemplo de uso
const categoriaAlimentacao = new Categoria("Alimentação");
const categoriaSalario = new Categoria("Salário");

const despesaMercado = new Despesa(200, "2023-12-01", categoriaAlimentacao);
const receitaSalario = new Receita(1500, "2023-12-05", categoriaSalario);

const orcamentoUsuario = new Orcamento();
orcamentoUsuario.registrarDespesa(despesaMercado);
orcamentoUsuario.registrarReceita(receitaSalario);

orcamentoUsuario.gerarRelatorio();
