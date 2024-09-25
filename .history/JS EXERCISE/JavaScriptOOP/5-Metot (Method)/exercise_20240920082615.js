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
            this.bakiye -= miktar;
            console.log(`${miktar} tl çekildi. Yeni bakiye:${this._bakiye}`)
        }
    }
}