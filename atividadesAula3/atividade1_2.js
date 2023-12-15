class ConversorDeMoeda {
    constructor(taxaCambio) {
      this.taxaCambio = taxaCambio; // pegou o valor e guardou 
    }
  
    converter(valor, moedaOrigem, moedaDestino) {
     return valor * this.taxaCambio; // retorna o valor convertido 
    }
  }
  
  // Exemplo de uso
  const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0
  const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
  console.log(`Valor convertido: ${valorConvertido} BRL`);
  // Saída esperada: Valor convertido: 500.0 BRL
  