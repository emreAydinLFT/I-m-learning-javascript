//! SINIF TANIMLAMA

class Araba {
  constructor(renk, model) {
    this.renk = renk;
    this.model = model;
  }

  hareketEt() {
    console.log("Araba hareket ediyor.");
  }
}
let benimArabam = new Araba("kırmızı", "Corolla");
console.log(benimArabam.renk); // Çıktı: kırmızı
benimArabam.hareketEt();