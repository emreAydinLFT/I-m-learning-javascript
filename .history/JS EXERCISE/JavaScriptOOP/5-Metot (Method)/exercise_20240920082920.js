class Hesap {
    constructor(bakiye) {
        this.bakiye = bakiye;
    }
    get bakiye() {
        return this._bakiye;
    }
    paraCek(miktar) {
        if (this._bakiye < miktar) {
            console.log("yetersiz bakiye.")
        }else {
            this._bakiye -= miktar;
            console.log(`${miktar} TL çekildi. Yeni bakiye:${this._bakiye}` TL)
        }
    }
    pataYatir(miktar) {
        this._bakiye += miktar;
        console.log(`${miktar} TL yatırıldı. Yeni bakiye:${this._bakiye}TL`)
    }
}
const hesap = new Hesap(1000);
console.log("mevcut bakiye:", hesap.bakiye);
hesap.paraCek(200)