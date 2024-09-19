//! Metotların Özellikleri
//? Nesneye Bağlılık: Metotlar, belirli bir nesneye aittir ve o nesnenin özelliklerini kullanabilirler.
//? İşlevsellik: Belirli bir görevi yerine getirirler.
//? Parametreler: Metotlar, işlemi gerçekleştirmek için gerekli verileri almak üzere parametreler alabilirler.
//? Geri Dönüş Değeri: Metotlar, işlemin sonucunda bir değer döndürebilirler.


//! 1. Instance Metotlar (Örnek Metotlar)
//? Tanım: Bir nesne üzerinde doğrudan çağrılan metotlardır. Nesnenin kendi özelliklerine erişebilir ve değiştirebilirler.


class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  hızlan() { //! Instance metot
    console.log("Araba hızlanıyor...");
  }

  yavaşla() {
    console.log("Araba yavaşlıyor...");
  }
}

// Araba nesnesi oluşturma
let benimArabam = new Araba("Toyota", "Corolla");

// Metodu çağırma
benimArabam.hızlan(); // Çıktı: Araba hızlanıyor...


//! 2. Static Metotlar (Statik Metotlar)
//? 
class Matematik {
  static topla(sayi1, sayi2) { // Static metot
    return sayi1 + sayi2;
  }
}

let sonuc = Matematik.topla(5, 3); // Sınıf üzerinden direkt çağırılır
console.log(sonuc); // Çıktı: 8

