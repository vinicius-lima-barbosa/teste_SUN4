function q3TratarDatas(data: string) {
  /**
   * Tratar e converter datas para o formato americano AAAA-MM-DD.
   *
   * Saída esperada: 2022-11-30
   */

  // Converte a string para minúsculas para facilitar a comparação
  data = data.toLowerCase();

  // Mapeia os meses do ano para seus respectivos números
  // (janeiro = 01, fevereiro = 02, etc.)
  const months = {
    janeiro: "01",
    fevereiro: "02",
    marco: "03",
    abril: "04",
    maio: "05",
    junho: "06",
    julho: "07",
    agosto: "08",
    setembro: "09",
    outubro: "10",
    novembro: "11",
    dezembro: "12",
    jan: "01",
    fev: "02",
    mar: "03",
    abr: "04",
    mai: "05",
    jun: "06",
    jul: "07",
    ago: "08",
    set: "09",
    out: "10",
    nov: "11",
    dez: "12",
  };

  // Regex para verificar se a data está no formato (DD/MM/AAAA)
  const regex1 = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  // Verifica se a string corresponde ao formato DD/MM/AAAA
  const match1 = data.match(regex1);

  /**
   * O retorno do match1 será uma lista, onde:
   * - match1[0] é a string completa que corresponde ao regex (ex. "30/11/2022")
   * - match1[1] é o dia (DD) (ex. "30")
   * - match1[2] é o mês (MM) (ex. "11")
   * - match1[3] é o ano (AAAA) (ex. "2022")
   * Portanto, para formatar a data no formato AAAA-MM-DD, usamos:
   * `${match1[3]}-${match1[2]}-${match1[1]}`
   * Exemplo: "30/11/2022" se tornará "2022-11-30"
   */

  // Se a data corresponder ao formato DD/MM/AAAA, converte para AAAA-MM-DD
  if (match1) {
    return `${match1[3]}-${match1[2]}-${match1[1]}`;
  }

  // Regex para verificar se a data está no formato (DD MMM AAAA)
  const regex2 = /^(\d{2})\s+([a-z]+)\s+(\d{4})$/;
  const match2 = data.match(regex2);
  if (match2) {
    // Aqui existe a verificação do mês abreviado (MMM)
    // e a conversão para o número do mês correspondente
    // Exemplo: "01 dez 2022" se tornará "2022-12-01"
    const month = months[match2[2]];
    return `${match2[3]}-${month}-${match2[1]}`;
  }

  // Regex para verificar se a data está no formato (DD de mês de AAAA)
  const regex3 = /^(\d{2})\s+de\s+([a-z]+)\s+de\s+(\d{4})$/;
  const match3 = data.match(regex3);
  if (match3) {
    const month = months[match3[2]];
    return `${match3[3]}-${month}-${match3[1]}`;
  }

  return data;
}

const datasParaTratar = [
  "30/11/2022",
  "01 dez 2022",
  "25/12/2022",
  "31 de dezembro de 2022",
];

datasParaTratar.forEach((data) => {
  console.log(q3TratarDatas(data));
});
