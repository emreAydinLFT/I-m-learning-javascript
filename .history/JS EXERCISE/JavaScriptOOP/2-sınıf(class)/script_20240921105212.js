class Araba {
  constructor(marka, model, yıl) {
    this.marka = marka;
    this.model = model;
    this.yil = yıl;
  }

  calistir() {
    console.log("Araba çalıştırıldı.");
  }
}

// Yeni bir araba nesnesi oluşturma
let benimArabam = new Araba("Toyota", "Corolla", 2023);

// Nesnenin özelliklerine erişme
console.log(benimArabam.marka); // Çıktı: Toyota

// Nesnenin metodunu çağırma
benimArabam.calistir(); // Çıktı: Araba çalıştırıldı.