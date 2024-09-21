class Hayvan {
    constructor(isim) {
      this.isim = isim; // Hayvanın ismi
    }
  
    sesCikar() {
      console.log("Ses çıkarıyorum."); // Tüm hayvanlar ses çıkarabilir
    }
  }
  
  // Memeli sınıfı, Hayvan sınıfından miras alır (inheritance)
  class Memeli extends Hayvan {
    constructor(isim, tur) {
      super(isim); // Ana sınıfın (Hayvan) constructor'ını çağırıyoruz
      this.tur = tur; // Memeli türü (örn: memeli, keseli)
    }
  
    emzir() {
      console.log("Yavrusunu emziriyor."); // Memelilerin ortak özelliği
    }
  }
  
  // Kuş sınıfı, Hayvan sınıfından miras alır
  class Kus extends Hayvan {
    constructor(isim, kanatAciligi) {
      super(isim);
      this.kanatAciligi = kanatAciligi; // Kanat açıklığı (metre)
    }
  
    uc() {
      console.log("Uçuyor."); // Kuşların ortak özelliği
    }
  }
  
  // Kopek sınıfı, Memeli sınıfından miras alır
  class Kopek extends Memeli {
    constructor(isim, cins) {
      super(isim, "Memeli"); // Memeli türünü belirtiyoruz
      this.cins = cins; // Köpek cinsi
    }
  
    havla() {
      console.log("Havlıyorum.");
    }
  }
  
  // Kartal sınıfı, Kuş sınıfından miras alır
  class Kartal extends Kus {
    constructor(isim) {
      super(isim, 2.5); // Ortalama kanat açıklığı 2.5 metre
      this.avlanir = true; // Avlanan bir kuş türü
    }
  }
  
  // Nesneler oluşturma
  const kopek1 = new Kopek("Karabaş", "Kangal");
  const kartal1 = new Kartal("Şahin");
  
  // Polimorfizm örneği: Farklı türdeki nesneler aynı metodu farklı şekilde kullanabilir
  function hayvanSesCikar(hayvan) {
    hayvan.sesCikar(); // Her hayvan kendi sesini çıkarır
  }
  
  hayvanSesCikar(kopek1); // Havlıyor.
  hayvanSesCikar(kartal1); // Ses çıkarıyorum. (Kuş sınıfında sesCikar metodu override edilmediği için temel sınıftan gelen metod çalışır)
  
  // Diğer özellikler ve metotlar
  console.log(kopek1.isim); // Karabaş
  console.log(kopek1.tur); // Memeli
  console.log(kopek1.cins); // Kangal
  kopek1.havla(); // Havlıyorum.
  kopek1.emzir(); // Yavrusunu emziriyor.
  
  console.log(kartal1.isim); // Şahin
  console.log(kartal1.kanatAciligi); // 2.5
  kartal1.uc(); // Uçuyor.