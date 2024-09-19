//! BİR NESNENİN ÖZELLİĞİNE ERİŞME

//? nokta ile erişme

let araba = {
    renk: "kırmızı",
    model: "Corolla",
};
console.log(araba.renk);// Çıktı: kırmızı

//? KÖŞELİ PARANTEZLE ERİŞME

let araba2 = {
    renk: "kırmızı",
    model: "Corolla"
  };
  
  let ozellikAdi = "model";
  console.log(araba2[ozellikAdi]); // Çıktı: Corolla

  
  //! NESNEYE ÖZELLİK EKLEME

let araba3 = {
  renk: "kırmızı",
  model: "Corolla"
};

araba.yil = 2023; // Yeni özellik eklendi

console.log(araba); // Çıktı: { renk: 'kırmızı', model: 'Corolla', yil: 2023 }

