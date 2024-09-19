//! Metot Geçersiz Kılma (Override)

//? Metot geçersiz kılma veya override, bir nesne yönelimli programlama kavramıdır ve bir sınıfın, miras aldığı bir metodu kendi içinde yeniden tanımlamasına olanak tanır. Bu sayede, temel sınıfta tanımlanan bir davranış, alt sınıflarda farklı şekillerde uygulanabilir.

//! Neden Metot Geçersiz Kılma Yapılır?

//* Polimorfizm: Farklı türdeki nesnelerin aynı mesajı (metodu) farklı şekillerde yanıtlamasına olanak tanır.
//* Özellik Özelleştirme: Alt sınıflar, miras aldıkları metodu kendi ihtiyaçlarına göre özelleştirebilir.
//* Kod Tekrarını Azaltma: Ortak davranışlar temel sınıfta tanımlanır ve alt sınıflarda sadece farklı kısımlar yeniden yazılır.

class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }

  sesCikar() {
    console.log("Genel hayvan sesi");
  }
}

class Kopek extends Hayvan {
  sesCikar() {
    console.log("Hav!");
  }
}

class Kedi extends Hayvan {
  sesCikar() {
    console.log("Miyav!");
  }
}

let kopek = new Kopek("Karabaş");
let kedi = new Kedi("Minnoş");

kopek.sesCikar(); // Çıktı: Hav!
kedi.sesCikar(); // Çıktı: Miyav!

Hayvan sınıfı, tüm hayvanların ortak özelliklerini temsil eder.
Kopek ve Kedi sınıfları, Hayvan sınıfından miras alır ve sesCikar metodunu geçersiz kılarak kendi seslerini çıkarır.
Her nesne (kopek ve kedi), sesCikar metodu çağrıldığında kendi sınıfına özgü sesi çıkarır.