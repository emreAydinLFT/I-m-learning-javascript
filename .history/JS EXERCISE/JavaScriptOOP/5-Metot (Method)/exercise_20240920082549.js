class Hesap {
    constructor(bakiye) {
        this.bakiye = bakiye;
    }
    get bakiye() {
        return this.bakiye;
    }
    paraCek(miktar) {
        if (this.bakiye < miktar) {
            console.log("yetersiz bakiye.")
        }else {
            this.bakiye -= miktar;
            console.log(`${miktar} tl çekildi. Yeni bakiye:${this.}`)
        }
    }
}
