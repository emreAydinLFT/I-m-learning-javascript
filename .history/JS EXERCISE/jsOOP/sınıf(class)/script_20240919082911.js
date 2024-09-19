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


// Önce bir araba nesnesi oluşturuyoruz:
let benimArabam = new Araba("kırmızı", "Corolla");

// Sonra bu nesne üzerinden metodu çağırıyoruz:
benimArabam.hareketEt(); // Bu satır "Araba hareket ediyor." yazdırır.