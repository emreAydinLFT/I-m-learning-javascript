//! BİR NESNENİN ÖZELLİĞİNE ERİ

//? nokta ile erişme

let araba = {
    renk: "kırmızı",
    model: "Corolla",
};
console.log(araba.renk);// Çıktı: kırmızı

//? köşeli parantezle erişme

let araba2 = {
    renk: "kırmızı",
    model: "Corolla"
  };
  
  let ozellikAdi = "model";
  console.log(araba[ozellikAdi]); // Çıktı: Corolla

  
  //! Nesneye özellik ekleme
