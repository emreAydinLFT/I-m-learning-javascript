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

Araba sınıfı, constructor metodu içerir.
constructor metodu, renk ve model parametrelerini alır.
Nesne oluşturulduğunda, new Araba("kırmızı", "Corolla"); satırı, constructor metodunu çağırır.
constructor metodu, this.renk ve this.model özelliklerine değer atar ve "Araba oluşturuldu." mesajını konsola yazar.