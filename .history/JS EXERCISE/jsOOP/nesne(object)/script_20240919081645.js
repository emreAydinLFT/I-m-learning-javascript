//! BİR NESNENİN ÖZELLİĞİNE ERİŞME

//? nokta ile erişme

let araba = {
    renk: "kırmızı",
    model: "Corolla",
};
console.log(araba.renk);// Çıktı: kırmızı

//? KÖŞELİ PARANTE

let araba2 = {
    renk: "kırmızı",
    model: "Corolla"
  };
  
  let ozellikAdi = "model";
  console.log(araba[ozellikAdi]); // Çıktı: Corolla

  
  //! Nesneye özellik ekleme
