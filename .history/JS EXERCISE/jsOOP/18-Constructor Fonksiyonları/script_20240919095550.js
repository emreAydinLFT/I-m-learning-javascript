//! Constructor (Yapıcı) Fonksiyonlar

//? Constructor fonksiyonlar, JavaScript'te yeni bir nesne oluşturulduğunda otomatik olarak çağrılan özel fonksiyonlardır. Bu fonksiyonlar, oluşturulan nesneye başlangıç değerleri atamak ve nesnenin ilk durumunu belirlemek için kullanılır.

//! Nasıl Çalışır?
//* Yeni Bir Nesne Oluşturur: new anahtar kelimesi ile bir constructor fonksiyonu çağrıldığında, otomatik olarak bir boş nesne oluşturulur.
//* this Bağlamı: Oluşturulan bu boş nesne, constructor fonksiyonu içindeki this anahtar kelimesi ile ilişkilendirilir.
//* Özellik Atama: Constructor fonksiyonu içinde this anahtar kelimesi kullanılarak nesnenin özelliklerine değerler atanır.
//* Nesne Döndürülür: Constructor fonksiyonu genellikle açıkça bir değer döndürmez, ancak JavaScript otomatik olarak oluşturulan nesneyi döndürür.

function Person(ad, soyad, yas) {
  this.ad = ad;
  this.soyad = soyad;
  this.yas = yas;
  this.tamAd = function() {
    return this.ad + " " + this.soyad;
  };
}

let person1 = new Person("Ahmet", "Yılmaz", 30);
console.log(person1.tamAd()); // Çıktı: Ahmet Yılmaz


//* Person adında bir constructor fonksiyonu tanımlandı.
//* new anahtar kelimesi ile person1 adında yeni bir Person nesnesi oluşturuldu.
//* person1 nesnesinin ad, soyad ve yas özellikleri, constructor fonksiyonu içinde this anahtar kelimesi kullanılarak ayarlandı.
//* tamAd metodu, person1 nesnesine eklendi.

//! Constructor'ların Önemi
//* Nesne Oluşturma: Yeni nesneler oluşturmanın standart bir yoludur.
//* Başlangıç Değerleri: Nesnelerin başlangıç değerlerini belirlemek için kullanılır.
//* Prototip Zincirleri: Oluşturulan nesneler, constructor fonksiyonunun prototipini miras alır.

Constructor ile Nesne Literalleri Arasındaki Fark
Nesne Literalleri: Daha basit ve hızlı bir şekilde nesne oluşturmak için kullanılır.
Constructor Fonksiyonları: Daha karmaşık nesneler oluşturmak ve kalıtım gibi özelliklerden yararlanmak için kullanılır.