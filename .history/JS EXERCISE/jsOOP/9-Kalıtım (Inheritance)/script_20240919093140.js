//! Kalıtım (Inheritance)

//? Kalıtım, nesne yönelimli programlamanın temel prensiplerinden biridir. Bir sınıfın başka bir sınıfın özelliklerini ve davranışlarını miras almasına olanak tanır. Bu sayede, kod tekrarını azaltır, kodun daha modüler ve yeniden kullanılabilir hale gelmesini sağlar.

//! Kalıtım Türleri
//* Tekli Kalıtım: Bir sınıf sadece bir başka sınıfın özelliklerini miras alabilir.
//* Çoklu Kalıtım: Bir sınıf birden fazla sınıfın özelliklerini miras alabilir. Ancak, JavaScript'te doğrudan çoklu kalıtım desteklenmez. Bunun yerine, prototip zinciri ve mixinler kullanılarak benzer bir etki elde edilebilir.

class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }

  sesCikar() {
    console.log("Hayvan ses çıkardı.");
  }
}

class Kopek extends Hayvan {
  constructor(isim, cins) {
    super(isim);
    this.cins = cins;
  }

  havla() {
    console.log(this.isim + " havladı.");
  }
}

let kopek1 = new Kopek("Karamel", "Golden Retriever");
kopek1.sesCikar(); // Çıktı: Hayvan ses çıkardı.
kopek1.havla(); // Çıktı: Karamel havladı.

//* Hayvan sınıfı, temel bir hayvan sınıfıdır.
//*Kopek sınıfı, Hayvan sınıfından miras alır.
Kopek sınıfı, Hayvan sınıfının isim özelliğini ve sesCikar metodunu miras alır.
Kopek sınıfı, kendi özelliği olan cins ve kendi metodu olan havla'ya sahiptir.