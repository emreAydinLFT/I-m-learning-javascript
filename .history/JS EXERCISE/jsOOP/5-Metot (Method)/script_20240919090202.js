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
//? Tanım: Sınıf üzerinde doğrudan çağrılan metotlardır. Nesne oluşturmaya gerek yoktur. Genellikle yardımcı fonksiyonlar veya sınıf seviyesinde yapılan işlemler için kullanılır.

class Matematik {
  static topla(sayi1, sayi2) { // Static metot
    return sayi1 + sayi2;
  }
}

let sonuc = Matematik.topla(5, 3); // Sınıf üzerinden direkt çağırılır
console.log(sonuc); // Çıktı: 8

//! 3. Getter ve Setter Metotlar
//? Tanım: Bir nesnenin özelliğine erişmek veya değiştirmek için kullanılan özel metotlardır. Kapsüllemeyi sağlamada önemli bir rol oynarlar.

class Kisi {
  constructor(ad) {
    this._ad = ad; // Özellik private olarak tanımlanır
  }

  get ad() { // Getter metot
    return this._ad;
  }

  set ad(yeniAd) { // Setter metot
    this._ad = yeniAd;
  }
}

let kisi1 = new Kisi("Ahmet");
console.log(kisi1.ad); // Getter metodu çağırılarak özelliğe erişilir
kisi1.ad = "Mehmet"; // Setter metodu çağırılarak özellik değiştirilir





//! Interface (Arayüz)
//? Tanım: Bir sınıfın sahip olması gereken metotları ve özellikleri belirten bir sözleşmedir. Ancak bu metotların gövdeleri interface içinde tanımlanmaz.
//* 