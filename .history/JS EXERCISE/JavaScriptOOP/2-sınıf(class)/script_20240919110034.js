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

//* constructor: Bu anahtar kelime, metodun bir constructor olduğunu belirtir.
//* (renk, model): Bu parantez içindeki renk ve model parametreleri, nesne oluşturulurken verilmesi gereken bilgilerdir. Bu parametreler aracılığıyla nesnenin özellikleri (renk, model) başlangıçta belirlenir.
//* this.renk = renk; ve this.model = model;: Bu satırlar, verilen parametre değerlerini nesnenin kendi özelliklerine (this.renk ve this.model) atar. Böylece yeni oluşturulan nesne, verilen renk ve modele sahip olur.

//! Nesne Oluşturma (Instansiasyon)

class Araba {
  constructor(renk, model) {
    this.renk = renk;
    this.model = model;
  }

  hareketEt() {
    console.log("Araba hareket ediyor.");
  }
}

// Yeni bir araba nesnesi oluşturma
let araba1 = new Araba("kırmızı", "Corolla");
let araba2 = new Araba("mavi", "Mustang");

// Oluşturulan nesnelerin özelliklerine erişme
console.log(araba1.renk); // çıktı: kırmızı
console.log(araba2.model); // çıktı: Mustang

// Nesnelerin metotlarını çağırma
araba1.hareketEt(); // çıktı: Araba hareket ediyor.
araba2.hareketEt(); // çıktı: Araba hareket ediyor.