class Analise {
  constructor() {
    throw new Error('A classe analise não deve ser instanciada');
  }

  static realizaCalculo(dataInicial, quantidade, valor, tipo, dataFinal) {
    const dataInicialSeparada = dataInicial.split('/'); // Ano - Mes - Dia
    const dataFinalSeparada = dataFinal.split('-'); // Dia - Mes - Ano

    const diferencaMeses = dataFinalSeparada[1] - dataInicialSeparada[1];
    const diferencaAnos = dataFinalSeparada[0] - dataInicialSeparada[2];

    let rendimentoAnual;
    let rendimentoMensal;

    if (diferencaAnos > 0) {
      rendimentoMensal = valor + (valor * 10) * ((diferencaMeses) + 12);
      rendimentoAnual = rendimentoMensal * diferencaAnos;
    } else if (diferencaAnos === 0) {
      if (diferencaMeses > 0) {
        rendimentoMensal = valor + (valor * 0.10) * diferencaMeses;
        rendimentoAnual = rendimentoMensal;
      } else {
        return `Data inválida`;
      }
    } else {
      return `Data inválida`;
    }
    if (tipo === 'IPCA') {
      rendimentoAnual = rendimentoAnual + (rendimentoAnual * 0.05);
    } else if (tipo === 'Selic') {
      rendimentoAnual = rendimentoAnual + (rendimentoAnual * 0.10);
    } else if (tipo === 'Pré-fixado') {
      rendimentoAnual = rendimentoAnual + (rendimentoAnual * 0.15);
    }

    const rendimentoTotal = Math.round(rendimentoAnual * quantidade);

    return `Rendimento até ${dataFinalSeparada[2]}/${dataFinalSeparada[1]}/${dataFinalSeparada[0]} é de R$: ${rendimentoTotal}`;
  }
}
