//! Nesne Literalleri

//? Nesne Literalleri, JavaScript'te nesneleri doğrudan ve hızlı bir şekilde oluşturmanın en yaygın yöntemlerinden biridir. Süslü parantez {} içine alınan anahtar-değer çiftlerinden oluşur. Bu çiftlerde anahtarlar genellikle string türünde olup, değere erişmek için kullanılırken, değerler herhangi bir veri türünde olabilir.

let person = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yas: 30,
  sehir: "Ankara",
  // Bir fonksiyon (metod) da ekleyebiliriz
  merhaba: function() {
    console.log("Merhaba, ben " + this.ad);
  }
};

//* person adında bir nesne oluşturuldu.
//* ad, soyad, yas ve sehir anahtarları, nesnenin özellikleri (properties) olarak adlandırılır.
//* merhaba ise bir metod olup, nesnenin bir davranışını temsil eder.

//! Erişim ve Değiştirme

//? Bir nesnenin özelliklerine nokta notasyonu ile erişilir ve değiştirilir.

console.log(person.ad); // Çıktı: Ahmet
person.yas = 31;
console.log(person.yas); // Çıktı: 31

//1 Neden Nesne Literalleri Kullanırız?
Basitlik: Nesneleri hızlı ve kolay bir şekilde oluşturmanın en basit yoludur.
Esneklik: Herhangi bir veri türünü değer olarak kullanabilirsiniz.
Okunabilirlik: Kodun daha okunaklı olmasını sağlar.
Yaygın Kullanım: JavaScript'te nesnelerle çalışırken sıklıkla kullanılır.