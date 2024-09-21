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

//constructor: Bu anahtar kelime, metodun bir constructor olduğunu belirtir.
(renk, model): Bu parantez içindeki renk ve model parametreleri, nesne oluşturulurken verilmesi gereken bilgilerdir. Bu parametreler aracılığıyla nesnenin özellikleri (renk, model) başlangıçta belirlenir.
this.renk = renk; ve this.model = model;: Bu satırlar, verilen parametre değerlerini nesnenin kendi özelliklerine (this.renk ve this.model) atar. Böylece yeni oluşturulan nesne, verilen renk ve modele sahip olur.

//! Nesne Oluşturma (Instansiasyon)

// Önce bir araba nesnesi oluşturuyoruz:
let benimArabam = new Araba("kırmızı", "Corolla");

// Sonra bu nesne üzerinden metodu çağırıyoruz:
benimArabam.hareketEt(); // Bu satır "Araba hareket ediyor." yazdırır.