var array: any = [];

function getData(): void {
    fetch('http://localhost:3000/abbigliamento').then((response) => {
        return response.json;
    }).then((data) => {
        array = data;
        console.log(array);
        
    });
}

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
        return (this.prezzoivaesclusa *this.saldo) / 100;
    }
    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
