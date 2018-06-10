class TitulosView extends View {
  constructor(elemento) {
    super(elemento);
  }

template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th onclick="tituloController.ordena()">DATA</th>
            <th onclick="tituloController.ordena()">QUANTIDADE</th>
            <th onclick="tituloController.ordena()">VALOR</th>
            <th>VOLUME</th>
            <th>TIPO</th>
            <th>VALORIZAÇÃO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>

        <tbody>
          ${model.titulos.map(titulo => 
            `
              <tr id="item-${titulo.id}" class="info-tr">
                <td class="info-data">${DateHelper.dataparaTexto(titulo.data)}</td>  
                <td class="info-quantidade">${titulo.quantidade}</td>  
                <td class="info-valor">${titulo.valor}</td>  
                <td class="info-volume">${titulo.volume}</td>
                <td class="info-tipo">${titulo.tipo}</td>
                <td>
                  <button class="btn btn-primary" type="button" onclick="tituloController.abrirSimulacao(event)">Simular </button>
                </td>
                <td>
                  <button class="btn btn-danger" type="button" onclick="tituloController.apaga(event)">Vender</button>
                </td>
              </tr>`
          ).join('')}
        </tbody>

        <tfoot>
          <td colspan="6"></td>
          <td class="total">${model.titulos.reduce((total, t) => total + t.volume, 0.0)}
          </td>
        </tfoot>
      </table>
    `;
  }
}