class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Fornecedor {
  constructor(nome) {
    this.nome = nome;
    this.catalogo = []; // Array para armazenar produtos fornecidos pelo fornecedor.
  }

  adicionarProdutoAoCatalogo(produto) {
    if (!produto || !produto.nome || !produto.preco || !produto.quantidade) {
      console.error('Produto inválido. Certifique-se de fornecer todas as informações necessárias.');
      return;
    }

    this.catalogo.push(produto);
    console.log(`Produto ${produto.nome} adicionado ao catálogo do fornecedor ${this.nome}.`);
  }
}


class Pedido {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }
}

class Estoque {
  constructor() {
    this.produtos = [];
    this.pedidos = [];
  }

  adicionarProduto(produto) {
    if (!produto || !produto.nome || !produto.preco || !produto.quantidade) {
      console.error('Produto inválido. Certifique-se de fornecer todas as informações necessárias.');
      return;
    }
    this.produtos.push(produto);
    console.log(`Produto ${produto.nome} adicionado ao estoque.`);
  }

  fazerPedido(produto, quantidadeMinima) {
    if (!produto || !produto.nome || !produto.quantidade) {
      console.error('Produto inválido. Certifique-se de fornecer todas as informações necessárias.');
      return;
    }

    const produtoExistente = this.produtos.find(p => p.nome === produto.nome);

    if (!produtoExistente) {
      console.error(`Produto ${produto.nome} não encontrado no estoque.`);
      return;
    }

    if (produtoExistente.quantidade < quantidadeMinima) {
      const pedido = new Pedido(produtoExistente, quantidadeMinima - produtoExistente.quantidade);
      this.pedidos.push(pedido);
      console.log(`Pedido de reposição feito para ${produtoExistente.nome}.`);
    } else {
      console.log(`${produtoExistente.nome} tem quantidade suficiente em estoque.`);
    }
  }

  registrarChegada(pedido) {
    if (!pedido || !pedido.produto || !pedido.quantidade) {
      console.error('Pedido inválido. Certifique-se de fornecer todas as informações necessárias.');
      return;
    }

    const produtoExistente = this.produtos.find(p => p.nome === pedido.produto.nome);

    if (!produtoExistente) {
      console.error(`Produto ${pedido.produto.nome} não encontrado no estoque.`);
      return;
    }

    produtoExistente.quantidade += pedido.quantidade;
    console.log(`Produto ${pedido.produto.nome} adicionado ao estoque.`);
  }
}

// Exemplo de uso:
const produto1 = new Produto('Produto A', 10.0, 5);
const produto2 = new Produto('Produto B', 15.0, 8);

const fornecedor = new Fornecedor('Fornecedor X');

const produto3 = new Produto('Produto C', 20.0, 12);
fornecedor.adicionarProdutoAoCatalogo(produto3);

const estoque = new Estoque();
estoque.adicionarProduto(produto1);
estoque.adicionarProduto(produto2);

estoque.fazerPedido(produto1, 10); // Pedido de reposição feito para Produto A.
estoque.fazerPedido(produto2, 12); // Pedido de reposição feito para Produto B.

const pedidoReposicao = new Pedido(produto1, 10);
estoque.registrarChegada(pedidoReposicao); // Produto Produto A adicionado ao estoque.
