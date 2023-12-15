class ItemMenu {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Restaurante {
  constructor(nome) {
    this.nome = nome;
    this.menu = [];
  }

  adicionarItemAoMenu(item) {
    this.menu.push(item);
  }
}

class Pedido {
  constructor(cliente, restaurante) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.itens = [];
    this.status = 'pendente';
  }

  adicionarItem(item, quantidade) {
    this.itens.push({ item, quantidade });
  }

  calcularTotal() {
    let total = 0;
    for (const { item, quantidade } of this.itens) {
      total += item.preco * quantidade;
    }
    return total;
  }

  atualizarStatus(status) {
    this.status = status;
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
  }

  fazerPedido(restaurante) {
    return new Pedido(this, restaurante);
  }
}

// Exemplo de uso:

// Criando itens do menu
const item1 = new ItemMenu('Hamburguer', 10.99);
const item2 = new ItemMenu('Pizza', 15.99);

// Criando restaurante e adicionando itens ao menu
const restaurante = new Restaurante('Fast Food Place');
restaurante.adicionarItemAoMenu(item1);
restaurante.adicionarItemAoMenu(item2);

// Criando cliente
const cliente = new Cliente('João');

// Cliente faz um pedido
const pedidoCliente = cliente.fazerPedido(restaurante);

// Adicionando itens ao pedido
pedidoCliente.adicionarItem(item1, 2);
pedidoCliente.adicionarItem(item2, 1);

// Calculando o total do pedido
const totalPedido = pedidoCliente.calcularTotal();

console.log(`Cliente: ${cliente.nome}`);
console.log(`Restaurante: ${restaurante.nome}`);
console.log('Itens do Pedido:');
for (const { item, quantidade } of pedidoCliente.itens) {
  console.log(`${quantidade}x ${item.nome} - ${item.preco.toFixed(2)} cada`);
}
console.log(`Total do Pedido: ${totalPedido.toFixed(2)}`);
console.log(`Status do Pedido: ${pedidoCliente.status}`);
