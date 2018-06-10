class Grafico {
    constructor(resultadoAnalise, analizarTempo) {
        this._anlTempo = analizarTempo;
        this._resultadoAnalise = resultadoAnalise;
        this._grafico = document.getElementById('grafico');
        this._grafico.innerHTML = '';
        this._meses();
        this._crescimento();
    }

    _meses() {
        for (let i = 0; i < this._anlTempo.getMeses().length; i++) {
            let left = (i*60)+15;
            let exbirMeses = '<div class="mes" style="left:'+left+'px;">'+this._anlTempo.getMeses()[i]+'</div>';
            this._grafico.innerHTML += exbirMeses;
        }
    }

    _crescimento() {
        let totalMeses = this._anlTempo.getTotalMeses();
        for (let i = 0; i < this._anlTempo.getTotalMeses(); i++) {
            totalMeses--;
            let left = (i*60)+15;
            let tam = i*10;
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let str = '<div class="dado" style="background-color:'+hex+';left:'+left+'px;height:'+tam+'px;"></div>';
            let exibirCrescimento = '<div class="valor" style="top:'+(tam+25)+'px;left:'+left+'px;">'+(Math.round(this._resultadoAnalise/(totalMeses+1)))+'</div>';
            this._grafico.innerHTML += str;
            this._grafico.innerHTML += exibirCrescimento;
        }
    }
}
