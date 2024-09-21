class Hesap {
    constructor(bakiye) {
      // Hesap nesnesini oluşturur ve başlangıç bakiyesini belirler.
      // _bakiye özelliği, hesabın bakiyesini tutar ve dışarıdan doğrudan erişimi engellenir.
      this._bakiye = bakiye;
    }
  
    get bakiye() {
      // Bakiye özelliğinin değerini döndürür.
      // Dışarıdan bakiye değerine erişmek istediğimizde bu metot çağrılır.
      return this._bakiye;
    }
  
    paraCek(miktar) {
      // Hesaptan para çekme işlemini gerçekleştirir.
      // Eğer yeterli bakiye yoksa hata mesajı verir.
      if (this._bakiye < miktar) {
        console.log("Yetersiz bakiye.");
      } else {
        this._bakiye -= miktar;
        console.log(`${miktar} TL çekildi. Yeni bakiye: ${this._bakiye} TL`);
      }
    }
  
    paraYatir(miktar) {
      // Hesaba para yatırma işlemini gerçekleştirir.
      this._bakiye += miktar;
      console.log(`${miktar} TL yatırıldı. Yeni bakiye: ${this._bakiye} TL`);
    }
  }
  
  const hesap = new Hesap(1000);
  console.log("Mevcut bakiye:", hesap.bakiye); // 1000
  hesap.paraCek(200);
  hesap.paraYatir(500);

//! --------------------------------

  class Urun {
    constructor(ad, fiyat) {
      this._ad = ad;
      this._fiyat = fiyat;
    }
  
    get ad() {
      return this._ad;
    }
  
    get fiyat() {
      return this._fiyat.toFixed(2); // Fiyatı 2 ondalık basamağa yuvarlar
    }
  
    set fiyat(yeniFiyat) {
      if (yeniFiyat < 0) {
        throw new Error("Fiyat negatif olamaz.");
      }
      this._fiyat = yeniFiyat;
    }
  }
  
  const urun = new Urun("Kitap", 29.99);
  console.log(urun.ad); // Kitap
  console.log(urun.fiyat); // 29.99

  //! -------------