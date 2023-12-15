// Definição da classe Produto
class Produto {
    #nome;// declara as propriedades modo privado
    #preco;
    #estoque;
  
    constructor(nome, preco, estoque) {// atribui valor as propriedades
      this.#nome = nome;
      this.#preco = preco;
      this.#estoque = estoque;
    }
  
    getNome() {// usa metedo get para retornar os valores privados 
      return this.#nome;
    }
  
    getPreco() {
      return this.#preco;
    }
  
    getEstoque() {
      return this.#estoque;
    }
  
    reduzEstoque(quantidade) {
      if (quantidade <= this.#estoque) {//quantidade menor ou igual ao estoque do produto
        this.#estoque -= quantidade;//diinui a quantidade do estoque do produto
        return true;// retorna verdadeiro 
      } else {
        console.log(`Estoque insuficiente para ${this.#nome}.`);// se estoque for insuficiente
        return false;// retorna falso
      }
    }
    reporEstoque(quantidade) {
      this.#estoque += quantidade;//retorna a quantidade para o estoque 
      console.log(`${quantidade} ${this.#nome} reposto no estoque. Novo estoque: ${this.#estoque}`);
    }
  }
  
  // Definição da classe ProdutoEletronico, que herda de Produto (filho)
  class ProdutoEletronico extends Produto {// adiciona garantia
    #garantia;
  
    constructor(nome, preco, estoque, garantia) {
      super(nome, preco, estoque);//executa construtor do pai
      this.#garantia = garantia;// adiciona valor a garantia
    }
  
    getGarantia() {// usa get para retornar valor da garatia 
      return this.#garantia;
    }
  }
  
  // Definição da classe ProdutoAlimenticio, que herda de Produto (filho)
  class ProdutoAlimenticio extends Produto {// adiciona a validade
    #validade;
  
    constructor(nome, preco, estoque, validade) {
      super(nome, preco, estoque);//executa construtor do pai
      this.#validade = validade;//adiciona valor a validade
    }
  
    getValidade() {// usa get para retornar valor da validade
      return this.#validade;
    }
  }
  
  // Definição da classe Carrinho
  class Carrinho {
    #produtos;
  
    constructor() {
      this.#produtos = [];// produtos é um array vazio
    }
  
    adicionarProduto(produto, quantidade) {
      if (produto.reduzEstoque(quantidade)) {//reduz o estoque do produto 
        this.#produtos.push({ produto, quantidade });//adiciona no carrinho o produto e a quantidade
        console.log(`${quantidade} ${produto.getNome()} adicionado ao carrinho.`);//informa ao usuario 
      } else {
        console.log(`Falha ao adicionar ${quantidade} ${produto.getNome()} ao carrinho.`);// se for falso avisa erro
      }
    }
  
    removerProduto(produto, quantidade) {
      const index = this.#produtos.findIndex(item => item.produto === produto);//encontra indice do produto que foi passado no paramentro
      if (index !== -1) {//verifica se o indice não é igual -1
        produto.reporEstoque(quantidade);//vai repor a quantidade pro estoque
        this.#produtos.splice(index, 1);//remove da lista 
        console.log(`${quantidade} ${produto.getNome()} removido do carrinho.`);//informa remoção
      } else {
        console.log(`Produto ${produto.getNome()} não encontrado no carrinho.`);//informa se não encontrado
      }
    }
  
    calcularPrecoTotal() {
      let total = 0;
      this.#produtos.forEach(item => {//para cada produto vai realizar a soma
        total += item.produto.getPreco() * item.quantidade;//pega a quantidade e faz x o preço 
      });
      return total;// retorna total do resultado 
    }
  }
  
  // Definição da classe Cliente
  class Cliente {
    #nome;
    #carrinho;
  
    constructor(nome) {
      this.#nome = nome;//vai gravar o nome que esta no objeto cliente
      this.#carrinho = new Carrinho();//cria um objeto carrinho para receber os produtos
    }
  
    adicionarAoCarrinho(produto, quantidade) {
      this.#carrinho.adicionarProduto(produto, quantidade);//chama adicionar
    }
  
    removerDoCarrinho(produto, quantidade) {
      this.#carrinho.removerProduto(produto, quantidade);//chama remover
    }
  
    realizarCompra() {
      const total = this.#carrinho.calcularPrecoTotal();
      console.log(`Total da compra para ${this.#nome}: R$${total.toFixed(2)}`);//informar valor total da compra do cliente 
    }
  }
  
  // Exemplo de uso
  const celular = new ProdutoEletronico('Celular', 1000, 10, '1 ano');
  const banana = new ProdutoAlimenticio('Banana', 2, 50, '2 dias');
  
  const cliente1 = new Cliente('João');
  cliente1.adicionarAoCarrinho(celular, 2);
  cliente1.adicionarAoCarrinho(banana, 5);
  cliente1.removerDoCarrinho(celular,2);
  cliente1.realizarCompra();