class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class CarrinhoDeCompras {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  calcularTotal() {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
  }

  fazerPedido(carrinho) {
    const pedido = new Pedido(this, carrinho.produtos);
    return pedido;
  }
}

class Pedido {
  constructor(cliente, produtos) {
    this.cliente = cliente;
    this.produtos = produtos;
    this.status = 'pendente'; // Pode ser 'pendente', 'em andamento' ou 'entregue'
  }

  atualizarStatus(status) {
    this.status = status;
  }
}

// Exemplo de Uso:
const produto1 = new Produto('Camiseta', 29.99);
const produto2 = new Produto('Calça Jeans', 49.99);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

const cliente = new Cliente('João');
const pedido = cliente.fazerPedido(carrinho);

console.log(`Total do Pedido: R$${carrinho.calcularTotal().toFixed(2)}`);
console.log(`Status do Pedido: ${pedido.status}`);

// Simulando a entrega
pedido.atualizarStatus('em andamento');
console.log(`Status do Pedido: ${pedido.status}`);

// Simulando a entrega concluída
pedido.atualizarStatus('entregue');
console.log(`Status do Pedido: ${pedido.status}`);
