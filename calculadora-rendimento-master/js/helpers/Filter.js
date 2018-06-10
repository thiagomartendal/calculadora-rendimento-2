class Filtro {
  constructor() {
    throw new Error("A classe filtro não deve ser instanciada.")
  }

  static filtrar() {
    const negociacoes = document.querySelectorAll('.info-tr');

    if (this.value.length > 0) {
      for (let negociacao of negociacoes) {
        const tdNegociacao = negociacao.querySelector('.info-tipo');
        const tipo = tdNegociacao.textContent;

        const expressao = new RegExp(this.value, 'i');

        if (!expressao.test(tipo)) {
          negociacao.classList.add('esconde-negociacao');
        } else {
          negociacao.classList.remove('esconde-negociacao');
        }

      }
    } else {
      for (let negociacao of negociacoes) {
        negociacao.classList.remove('esconde-negociacao');
      }
    }
  }
}