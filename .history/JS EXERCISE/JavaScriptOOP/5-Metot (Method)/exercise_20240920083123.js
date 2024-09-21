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