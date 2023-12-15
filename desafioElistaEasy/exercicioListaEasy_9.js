class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Estoque {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  encontrarProduto(nome) {
    return this.produtos.find((produto) => produto.nome === nome);
  }

  atualizarEstoque(produto, quantidade) {
    const produtoNoEstoque = this.encontrarProduto(produto.nome);
    if (produtoNoEstoque) {
      produtoNoEstoque.quantidade += quantidade;
    }
  }
}

class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
  }

  adicionarItem(produto, quantidade) {
    this.itens.push({ produto, quantidade });
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.carrinhoDeCompras = new CarrinhoDeCompras();
  }

  realizarCompra(estoque) {
    this.carrinhoDeCompras.itens.forEach((item) => {
      const produtoNoEstoque = estoque.encontrarProduto(item.produto.nome);
      if (produtoNoEstoque && produtoNoEstoque.quantidade >= item.quantidade) {
        estoque.atualizarEstoque(item.produto, -item.quantidade);
      } else {
        console.log(`Produto "${item.produto.nome}" fora de estoque ou quantidade insuficiente.`);
      }
    });
  }
}

// Exemplo de uso:

const produto1 = new Produto('Arroz', 10, 50);
const produto2 = new Produto('Feijão', 8, 30);

const estoque = new Estoque();
estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);

const cliente = new Cliente('João');
cliente.carrinhoDeCompras.adicionarItem(produto1, 3);
cliente.carrinhoDeCompras.adicionarItem(produto2, 2);

console.log(`Total da compra: R$${cliente.carrinhoDeCompras.calcularTotal().toFixed(2)}`);

cliente.realizarCompra(estoque);

console.log('Estoque após a compra:');
console.log(estoque);
