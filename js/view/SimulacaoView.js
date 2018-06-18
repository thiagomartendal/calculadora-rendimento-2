class SimulacaoView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <div class="simulacao">
      <h1>Simular Valorização</h1>
      <input type="date" class="form-control info-data-final" id="data" required autofocus>
      <button class="btn btn-primary" onclick="tituloController.simular(event)">Calcular</button>
      <button class="btn btn-danger" onclick="tituloController.fecharSimulacao(event)">Fechar</button>
      <div id="grafico"></div>
    </div>
    `;
  }
}
