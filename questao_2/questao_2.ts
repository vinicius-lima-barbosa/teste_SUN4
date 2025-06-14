// Coloquei a Tipagem só porque sim.
function q2ContarFrequenciaPalavra(text: string) {
  /**
   * Realiza uma contagem de quantas vezes uma determinada palavra ocorre.
   * Ao final, preferencialmente, ordenar o objeto pelo volume de ocorrência.
   *
   * Saída esperada: { 'hello': 2, 'world': 1 }
   */

  // A variável `textList` serve para armazenar a lista de palavras do texto,
  // convertendo as letras do texto para minúsculas e dividindo a string em palavras.
  const textList = text.toLowerCase().split(/\s+/);

  // O objeto `frequency` é inicializado e serve para armazenar a frequência de cada palavra.
  const frequency = {};

  // Loop para percorrrer cada palavra (word) na lista de palavras (textList).
  textList.forEach((word: string) => {
    // Se a palavra já existe no objeto `frequency`, incrementa o contador.
    // Caso contrário, inicializa o contador com 1.
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  });

  return frequency;
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));
