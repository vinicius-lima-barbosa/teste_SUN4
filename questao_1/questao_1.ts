function q1RemoverDuplicados(nums) {
  /**
   * Retorna uma lista com apenas um registro de cada elemento
   *
   * Saída esperada: [1, 2, 3, 4, 5]
   */

  // Loop para percorrer a lista com o index i
  for (let i = 0; i < nums.length; i++) {
    // Loop para verificar o elemento posterior ao atual na lista
    for (let j = i + 1; j < nums.length; j++) {
      // Se o elemento atual for igual ao próximo, remove o próximo e decrementa j
      // para evitar pular o próximo elemento
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }

  return nums;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
