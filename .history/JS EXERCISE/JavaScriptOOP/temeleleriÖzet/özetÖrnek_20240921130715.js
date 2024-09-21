class Hayvan {
    constructor(isim) {
      this.isim = isim; // Hayvanın ismini saklar
    }
  
    sesCikar() {
      console.log(`${this.isim} ses çıkarıyor.`); // Hayvanın ses çıkardığını bildirir
    }
  }
  
  // Memeli sınıfı, Hayvan sınıfından miras alır (inheritance)
  class Memeli extends Hayvan {
    constructor(isim, tur) {
      super(isim); // Ana sınıfın (Hayvan) constructor'ını çağırır
      this.tur = tur; // Memeli türünü belirtir (örn: memeli, keseli)
    }
  
    emzir() {
      console.log(`${this.isim} yavrusunu emziriyor.`); // Memelilerin ortak özelliği
    }
  }
  
  // Kuş sınıfı, Hayvan sınıfından miras alır
  class Kus extends Hayvan {
    constructor(isim, kanatAciligi) {
      super(isim);
      this.kanatAciligi = kanatAciligi; // Kanat açıklığını belirtir (metre)
    }
  
    uc() {
      console.log(`${this.isim} uçuyor.`); // Kuşların ortak özelliği
    }
  }
  
  // Kopek sınıfı, Memeli sınıfından miras alır
  class Kopek extends Memeli {
    constructor(isim, cins) {
      super(isim, "Memeli"); // Memeli türünü belirtir
      this.cins = cins; // Köpek cinsini belirtir
    }
  
    havla() {
      console.log(`${this.isim} havlıyor.`); // Köpeğin özel metodu
    }
  }
  
  // Kartal sınıfı, Kuş sınıfından miras alır
  class Kartal extends Kus {
    constructor(isim) {
      super(isim, 2.5); // Ortalama kanat açıklığı 2.5 metre
      this.avlanir = true; // Avlanma özelliği
    }
  }
  
  // Nesneler oluşturma
  const kopek1 = new Kopek("Karabaş", "Kangal"); // Yeni bir köpek nesnesi oluşturulur
  const kartal1 = new Kartal("Şahin"); // Yeni bir kartal nesnesi oluşturulur
  
  // Polimorfizm örneği: Farklı türdeki nesneler aynı metodu farklı şekilde kullanabilir
  const hayvanSesCikar = (hayvan) => {
    hayvan.sesCikar(); // Her hayvan kendi sesini çıkarır
  };
  
  hayvanSesCikar(kopek1); // Karabaş havlıyor.
  hayvanSesCikar(kartal1); // Şahin ses çıkarıyor.
  
  // Diğer özellikler ve metotlar
  console.log(kopek1.isim); // Karabaş
  console.log(kopek1.tur); // Memeli
  console.log(kopek1.cins); // Kangal
  kopek1.havla(); // Karabaş havlıyor.
  kopek1.emzir(); // Karabaş yavrusunu emziriyor.
  
  console.log(kartal1.isim); // Şahin
  console.log(kartal1.kanatAciligi); // 2.5
  kartal1.uc(); // Şahin uçuyor.



Sınıflar: Hayvan, Memeli, Kus, Kopek, Kartal gibi sınıflar oluşturarak hayvanları modelledik.
Kalıtım: extends anahtar kelimesi ile sınıflar birbirinden miras alır. Örneğin, Kopek sınıfı Memeli sınıfından, Memeli sınıfı ise Hayvan sınıfından miras alır. Bu sayede kod tekrarını önler ve sınıf hiyerarşisi oluşturur.
Kapsülleme: Sınıfların içindeki özellikler (isim, tur, cins gibi) dışarıdan doğrudan erişilemez. Bu sayede veri bütünlüğü sağlanır.
Polimorfizm: hayvanSesCikar fonksiyonu, farklı türdeki hayvan nesnelerine aynı mesajı gönderdiğinde, her nesne kendi türüne özgü bir şekilde tepki verir. Bu, polimorfizmin bir örneğidir.
Nesne Oluşturma: new anahtar kelimesi ile sınıfların örnekleri (nesneler) oluşturulur.
Metotlar: sesCikar, emzir, uc, havla gibi metotlar, nesnelerin davranışlarını tanımlar.