class Abbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    constructor(_id: number,_codprod: number,_collezione: string,_capo: string,_modello: number,_quantita: number,_colore: string,_prezzoivaesclusa: number,_prezzoivainclusa: number,_disponibile: string,_saldo: number) {
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

    getSaldoCapo(): number {
        return (this.prezzoivainclusa *this.saldo) / 100;
    }
    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}

class Capo extends Abbigliamento {
    constructor(_id: number,_codprod: number,_collezione: string,_capo: string,_modello: number,_quantita: number,_colore: string,_prezzoivaesclusa: number,_prezzoivainclusa: number,_disponibile: string,_saldo: number) {
        super(_id,_codprod,_collezione,_capo,_modello,_quantita,_colore,_prezzoivaesclusa,_prezzoivainclusa,_disponibile,_saldo);
    }
}


var array= [];

getData();

function getData() {
    fetch('http://localhost:3000/capi').then((response) => {
        return response.json();
    }).then((data) => {
        array = data;
        console.log(array);
        array.map(function(element: any) {
            let capo = new Capo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(capo);
            console.log('Totale capo: '+ capo.getAcquistoCapo(),'€');

        });
    });
}
