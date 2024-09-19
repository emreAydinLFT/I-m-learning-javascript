//! Çok Biçimlilik (Polymorphism)

//? Çok biçimlilik, nesne yönelimli programlamanın temel prensiplerinden biridir. Aynı adlı metodun farklı sınıflar tarafından farklı şekilde uygulanmasına olanak tanır. Bu sayede, kodun daha esnek, yeniden kullanılabilir ve anlaşılır hale gelmesini sağlar.

//! Çok Biçimlilik Türleri
//* Statik Çok Biçimlilik: Derleme zamanında belirlenir. Genellikle metodların aşırı yüklenmesi (overloading) ile gerçekleştirilir.
//* Dinamik Çok Biçimlilik: Çalışma zamanında belirlenir. Genellikle metodların geçersiz kılınması (overriding) ile gerçekleştirilir.

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

  sesCikar() {
    console.log(this.isim + " havladı.");
  }
}

class Kedi extends Hayvan {
  constructor(isim, renk) {
    super(isim);
    this.renk = renk;
  }

  sesCikar() {
    console.log(this.isim + " miyavladı.");
  }
}

function hayvanSesCikar(hayvan) {
  hayvan.sesCikar();
}

let kopek1 = new Kopek("Karamel", "Golden Retriever");
let kedi1 = new Kedi("Pamuk", "Beyaz");

hayvanSesCikar(kopek1); // Çıktı: Karamel havladı.
hayvanSesCikar(kedi1); // Çıktı: Pamuk miyavladı.


Hayvan sınıfı, temel bir hayvan sınıfıdır.
Kopek ve Kedi sınıfları, Hayvan sınıfından miras alır.
Hayvan sınıfının sesCikar metodu, Kopek ve Kedi sınıfları tarafından geçersiz kılınır.
hayvanSesCikar fonksiyonu, herhangi bir Hayvan nesnesini parametre olarak alır ve sesCikar metodunu çağırır.
Çalışma zamanında, hayvanSesCikar fonksiyonuna hangi türden bir nesne geçtiğine bağlı olarak, doğru sesCikar metodu çağrılır.