//! Constructor (Yapıcı Metot)
//? Constructor (yapıcı metot), bir nesne oluşturulduğunda otomatik olarak çağrılan bir metottur. Nesnenin başlangıç değerlerini ayarlama, gerekli işlemleri gerçekleştirme ve nesneye özel durumları hazırlama gibi görevleri üstlenir.

class Araba {
  constructor(renk, model) {
    this.renk = renk;
    this.model = model;
    console.log("Araba oluşturuldu.");
  }
}

let benimArabam = new Araba("kırmızı", "Corolla");

//* Araba sınıfı, constructor metodu içerir.
//* constructor metodu, renk ve model parametrelerini alır.
//* Nesne oluşturulduğunda, new Araba("kırmızı", "Corolla"); satırı, constructor metodunu çağırır.
//* constructor metodu, this.renk ve this.model özelliklerine değer atar ve "Araba oluşturuldu." mesajını konsola yazar.


//! Constructor'ın Özellikleri

//* Otomatik Çağırma: Bir nesne oluşturulduğunda otomatik olarak çağrılır.
//* Parametreler: Constructor metodu, nesne oluşturulurken parametreler alabilir. Bu parametreler, nesnenin başlangıç değerlerini belirlemek için kullanılır.
/this Anahtar Kelimesi: this anahtar kelimesi, constructor metodu içinde mevcut nesneyi ifade eder.
Return Değeri: Constructor metodu, genellikle undefined döndürür, ancak istenirse başka bir değer de döndürebilir.