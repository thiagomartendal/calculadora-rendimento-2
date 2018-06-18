class AnalizarTempo {
    constructor(anoSelecionado, mesSelecionado) {
        this._anoSelecionado = anoSelecionado;
        this._mesSelecionado = mesSelecionado;
        let dataAtual = new Date();
        this._mes = dataAtual.getMonth()+1;
        this._ano = dataAtual.getFullYear();
        this._contador = 0;
        this._meses = [];
        this._analiseDeTempo();
    }

    _analiseDeTempo() {
        if (parseInt(this._anoSelecionado) > this._ano) {
            for (let i = this._ano; i <= parseInt(this._anoSelecionado); i++) {
                if (i === this._ano) {
                    for (let j = this._mes; j <= 12; j++) {
                        this._meses.push(j+'/'+i);
                        this._contador++;
                    }
                } else {
                    if (i === parseInt(this._anoSelecionado)) {
                        for (let j = 1; j <= parseInt(this._mesSelecionado); j++) {
                            this._meses.push(j+'/'+i);
                            this._contador++;
                        }
                    } else {
                        for (let j = 1; j <= 12; j++) {
                            this._meses.push(j+'/'+i);
                            this._contador++;
                        }
                    }
                }
            }
        } else {
            for (let j = this._mes; j <= parseInt(this._mesSelecionado); j++) {
                this._meses.push(j+'/'+this._anoSelecionado);
                this._contador++;
            }
        }
    }

    getTotalMeses() {
        return this._contador;
    }

    getMeses() {
        return this._meses;
    }
}
