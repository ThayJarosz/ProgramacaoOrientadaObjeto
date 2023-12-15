// Classe Conta
class Conta {
    constructor(saldo = 0) { //se não for informado vai ser 0
        this._saldo = saldo; // grava o saldo 
    }

    deposito(valor) { 
        if (valor > 0) {// pega o valor e verifica se o deposito é > 0 
            this._saldo += valor; // acrescenta o valor ao saldo
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this._saldo}`);// mostra valor deposito e novo saldo
        } else {
            console.log('Valor inválido para depósito.');// se for valor invalido 
        }
    }

    saque(valor) {
        if (valor > 0 && this._saldo >= valor) { //pega valor e verifica se é maior que 0 e se valor é maior ou igual ao saldo
            this._saldo -= valor;// diminui o valor do saldo
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this._saldo}`);// mostra valor do saque realizado
        } else {
            console.log('Saldo insuficiente ou valor inválido para saque.');// se o valor for invalido ou insuficiente
        }
    }

    consultaSaldo() {
        console.log(`Saldo atual: R$${this._saldo}`); // mostra saldo atual
    }
}

// Classe ContaCorrente (herda de Conta)
class ContaCorrente extends Conta {
    constructor(saldo = 0, limite = 500) { //passa limite como parâmetro, se não for informado por padrão é 500
        super(saldo); // chama o construtor do pai
        this._limite = limite; 
    }

    saque(valor) { //subtitui a forma de saque da classe pai 
        if (valor > 0 && (this._saldo + this._limite) >= valor) { // verifica se o valor é maior que 0 e se o saldo mais o  limite é maior ou igual a 0
            this._saldo -= valor; // diminui o valor do saldo 
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this._saldo}`);// informa valor do saque o o saldo atual
        } else {
            console.log('Saldo insuficiente ou valor inválido para saque.');// se valor for invalido ou insuficiente
        }
    }
}

// Classe ContaPoupanca (herda de Conta)
class ContaPoupanca extends Conta {
    rendimentoMensal(taxa) {
        if (taxa > 0 && taxa <= 1) { // taxa maior que 0 e menor ou igual a 1
            const rendimento = this._saldo * taxa; // calcula o rendimento
            this._saldo += rendimento;//faz saldo + o rendimento
            console.log(`Rendimento mensal de R$${rendimento}. Novo saldo: R$${this._saldo}`);// mostra rendimento mensal e saldo atual
        } else {
            console.log('Taxa de rendimento inválida.');// se for inválida
        }
    }
}

// Exemplo de uso
//cria os objetos a partir das classes
const conta = new Conta(1000);
const contaCorrente = new ContaCorrente(1000, 500);
const contaPoupanca = new ContaPoupanca(2000);

conta.deposito(500);
conta.saque(1200);

contaCorrente.deposito(500);
contaCorrente.saque(1200);

contaPoupanca.deposito(1000);
contaPoupanca.rendimentoMensal(0.02);
