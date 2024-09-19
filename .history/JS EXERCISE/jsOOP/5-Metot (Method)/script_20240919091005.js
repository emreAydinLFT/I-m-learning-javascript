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
//* Amaç: Birden fazla sınıfın aynı davranışları sergilemesini sağlamak ve polimorfizmi desteklemek.

interface ISekil {
  alanHesapla(): number; // Alan hesaplama metodu
  cevreHesapla(): number; // Çevre hesaplama metodu
}

class Dikdortgen implements ISekil {
  constructor(kenar1, kenar2) {
    this.kenar1 = kenar1;
    this.kenar2 = kenar2;
  }

  alanHesapla() {
    return this.kenar1 * this.kenar2;
  }

  cevreHesapla() {
    return 2 * (this.kenar1 + this.kenar2);
  }
}

//* Açıklama: ISekil interface'i, bir şeklin sahip olması gereken alanHesapla ve cevreHesapla metotlarını tanımlar. Dikdortgen sınıfı bu interface'i uyguladığı için bu metotları gerçekleştirmek zorundadır.



//! Callback Fonksiyonları
//? Tanım: Bir fonksiyonu parametre olarak alan ve daha sonra bu parametre olarak verilen fonksiyonu çağıran fonksiyondur.
//* Amaç: Kodun daha esnek ve özelleştirilebilir olmasını sağlar. Asenkron işlemler, event handling gibi durumlarda sıkça kullanılır.

function selamla(isim, callback) {
  console.log("Merhaba,", isim);
  callback();
}

function mesajVer() {
  console.log("Hoş geldiniz!");
}

selamla("Ahmet", mesajVer);

//*Açıklama: selamla fonksiyonu, bir callback fonksiyonu alır ve bu fonksiyonu daha sonra çağırır.

//! Higher-Order Fonksiyonlar
//? Tanım: Başka bir fonksiyonu parametre olarak alan veya döndüren fonksiyondur.
//* Amaç: Fonksiyonel programlamanın temel yapı taşlarından biridir. Kodun daha özlü ve okunaklı olmasını sağlar.

function kareAl(sayi) {
  return sayi * sayi;
}

function uygulayici(sayilar, fonksiyon) {
  return sayilar.map(fonksiyon);
}

let sayilar = [1, 2, 3, 4];
let kareler = uygulayici(sayilar, kareAl);
console.log(kareler); // [1, 4, 9, 16]

//* Açıklama: uygulayici fonksiyonu, bir dizi ve bir fonksiyonu parametre olarak alır. Dizi üzerindeki her elemana parametre olarak verilen fonksiyonu uygular ve yeni bir dizi döndürür.


//! JavaScript'te Kalıtım ve Prototipler
//? JavaScript'te her nesne, bir prototipe sahiptir. Bu prototip, nesnenin özelliklerini ve metotlarını tanımlar. Yeni bir nesne oluşturduğumuzda, bu nesne otomatik olarak prototipinden özellik ve metotları miras alır.

function Hayvan() {
  this.sesCikar = function() {
    console.log("Bir ses çıkarıyor...");
  };
}

function Kopek() {
  // Hayvan nesnesinin prototipini miras alır
  Hayvan.call(this);

  this.havla = function() {
    console.log("Hav!");
  };
}

let kopek = new Kopek();
kopek.sesCikar(); // Çıktı: Bir ses çıkarıyor...
kopek.havla();    // Çıktı: Hav!


//! JavaScript'te Override Etme
//? JavaScript'te bir metodu override etmek, prototip zincirinde o metodu yeniden tanımlamak anlamına gelir.

function Hayvan() {
  this.hareketEt = function() {
    console.log("Hareket ediyor...");
  };
}

function Kus() {
  Hayvan.call(this);

  this.hareketEt = function() {
    console.log("Uçuyor...");
  };
}

let kus = new Kus();
kus.hareketEt(); // Çıktı: Uçuyor...


//! JavaScript'te Soyut Metotlar ve Sanal Metotların Benzerleri
//!