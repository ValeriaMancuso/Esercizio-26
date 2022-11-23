var array = [];
function getData() {
    fetch('http://localhost:3000/abbigliamento').then(function (response) {
        return response.json;
    }).then(function (data) {
        array = data;
        console.log(array);
    });
}
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Abbigliamento.prototype.getSaldoCapo = function () {
        return (this.prezzoivaesclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Abbigliamento;
}());
