class Hesap {
  constructor(bakiye) {
    this._bakiye = bakiye;
  }

  get bakiye() {
    return this._bakiye;
  }

  paraCek(miktar) {
    if (this._bakiye < miktar) {
      console.log("Yetersiz bakiye.");
    } else {
      this._bakiye -= miktar;
      console.log(`${miktar} TL çekildi. Yeni bakiye: ${this._bakiye} TL`);
    }
  }

  paraYatir(miktar) {
    this._bakiye += miktar;
    console.log(`${miktar} TL yatırıldı. Yeni bakiye: ${this._bakiye} TL`);
  }
}

const hesap = new Hesap(1000);
console.log("Mevcut bakiye:", hesap.bakiye); // 1000
hesap.paraCek(200);
hesap.paraYatir(500);