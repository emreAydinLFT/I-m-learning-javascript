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

// class Anahtar Kelimesi: Yeni bir sınıf tanımlamak için kullanılır.
// constructor Metodu: Bir nesne oluşturulduğunda otomatik olarak çağrılan bir metottur. Nesnenin başlangıç değerlerini ayarlar.
this Anahtar Kelimesi: Mevcut nesneyi ifade eder.