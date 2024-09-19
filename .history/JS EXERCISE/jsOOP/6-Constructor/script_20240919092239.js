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