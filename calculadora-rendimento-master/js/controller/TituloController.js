class TituloController {
  constructor() {
    // Busca dos valores na View
    const $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._inputTipo = $("#tipo");
    this._ordemAtual = "";

    // Instancia das outras classes
    this._listaTitulos = new ListaTitulo();
    this._titulosView = new TitulosView($("#titulosView"));
    this._simulacaoView = new SimulacaoView($("#dialog"));

    // Chamamos a view pela primeira vez, vazia.
    this._titulosView.update(this._listaTitulos);
    this._id = 0; // ID para o controle dos titulos
    this._tituloSimulado = {
      data: "",
      quantidade: 0,
      valor: 0,
      tipo: ""
    };
  }

  // Metodo para comprar um novo título.
  adiciona(event) {
    event.preventDefault();

    this._listaTitulos.adiciona(this._criaTitulo());
    this._id++;
    this._titulosView.update(this._listaTitulos); // Atualizamos a view quando um novo método é criado.
    this._limpaFormulario(); // Limpa o formulario apos criar um novo titulo.
  }

  _criaTitulo() {
    return new Titulo(
      DateHelper.textoParaData(this._inputData.value), // Utilizamos a classe Helper pra tratar a Data
      this._inputQuantidade.value,
      this._inputValor.value,
      this._inputTipo.value,
      this._id
    );
  }

  // Método de venda de um titulo.
  apaga(event) {
    event.preventDefault();

    // Pega a TR e o ID dela.
    const td = event.target.parentNode;
    const target = td.parentNode;
    const targetID = target.id.split("-");
    const id = targetID[1];

    target.classList.add("fadeOut");

    this._listaTitulos.vender(id);

    setTimeout(() => {
      this._titulosView.update(this._listaTitulos);
    }, 500);
  }

  // Metodo de venda de todos os titulos.
  apagaTudo() {
    this._listaTitulos.venderTudo();
    this._titulosView.update(this._listaTitulos);
  }

  _limpaFormulario() {
    const form = document.querySelector("form");
    form.reset();
    this._inputData.focus();
  }

  // TO-DO: Arrumar ordenação.
  ordena(coluna) {
    if (this._ordemAtual == coluna) {
      this._listaTitulos.inverteOrdem();
    } else {
      this._listaTitulos.ordena((a, b) => a[coluna] - b[coluna]);
    }

    this._ordemAtual = coluna;
    this._titulosView.update(this._listaTitulos);
  }

  simular(e) {
    e.preventDefault();

    const target = e.target.parentNode;
    const tdDataFinal = target.querySelector(".info-data-final");
    const dataFinal = tdDataFinal.value;

    const simulacao = document.querySelector(".simulacao");
    const resultado = simulacao.querySelector("p");

    if (resultado != null) resultado.remove();

    const rendimento = document.createElement("p");
    let resultadoAnalise = Analise.realizaCalculo(
      this._tituloSimulado.data,
      this._tituloSimulado.quantidade,
      this._tituloSimulado.valor,
      this._tituloSimulado.tipo,
      dataFinal
    );
    rendimento.innerHTML = resultadoAnalise;
    simulacao.appendChild(rendimento);
    
    const analizarTempo = new AnalizarTempo(dataFinal.split('-')[0], dataFinal.split('-')[1]);
    const grafico = new Grafico(parseInt(resultadoAnalise.split(': ')[1]), analizarTempo);
  }

  abrirSimulacao(e) {
    e.preventDefault();

    this._simulacaoView.update(this._listaTitulos);

    const td = e.target.parentNode;
    const target = td.parentNode;

    const tdTipo = target.querySelector(".info-tipo");
    const tdQuantidade = target.querySelector(".info-quantidade");
    const tdValor = target.querySelector(".info-valor");
    const tdData = target.querySelector(".info-data");

    this._tituloSimulado = {
      data: tdData.textContent,
      tipo: tdTipo.textContent,
      quantidade: Number(tdQuantidade.textContent),
      valor: Number(tdQuantidade.textContent)
    };
  }

  fecharSimulacao(e) {
    e.preventDefault();

    e.target.parentNode.remove();
  }
}
