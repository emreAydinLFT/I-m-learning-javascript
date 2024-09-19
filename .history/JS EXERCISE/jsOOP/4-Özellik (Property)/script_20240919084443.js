//! BASİT BİR NESNE
let araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2023,
  renk: "beyaz"
};

//! SINIFLARLA ÖZELLİK OLUŞTURMA


class Kitap {
  constructor(isim, yazar, sayfaSayisi) {
    this.isim = isim; // isim özelliği
    this.yazar = yazar; // yazar özelliği
    this.sayfaSayisi = sayfaSayisi; // sayfaSayisi özelliği
  }
}

let kitap1 = new Kitap("Sefiller", "Victor Hugo", 1200);


//! ÖZE