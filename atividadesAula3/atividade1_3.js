class ContadorDePalavras {
    constructor(texto) {
      this.texto = texto; // pega e grava dentro da variável dentro do obejto 
    }
  
    contarPalavras() {
      const textoSemEspacos = this.texto.trim();// remove espaços extras no início e no final da string
  
      if (textoSemEspacos === "") { // verifica se a string está vazia
        return 0;
      }
  
      const palavras = textoSemEspacos.split(" "); // divide a string em palavras usando espaços 
  
      return palavras.length; // retorna o número de palavras na string
    }
  }
  
  // Exemplo de uso
  const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');
  const contagem = contadorPalavras.contarPalavras();
  console.log(`Número de palavras: ${contagem}`);
  // Saída esperada: Número de palavras: 5
  