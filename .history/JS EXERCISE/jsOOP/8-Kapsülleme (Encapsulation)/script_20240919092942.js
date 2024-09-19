//! Kapsülleme (Encapsulation)

//?Kapsülleme, nesne yönelimli programlamanın temel prensiplerinden biridir. Bir nesnenin iç detaylarını (özellikleri ve metotlarını) dış dünyadan gizlemek ve sadece gerekli bilgileri açığa çıkarmak anlamına gelir. Bu sayede, nesnenin davranışını kontrol edebilir, veri bütünlüğünü koruyabilir ve kodun daha modüler ve güvenilir hale gelmesini sağlayabilirsiniz.

//! Kapsülleme Nasıl Çalışır?

//* Özellikleri Gizleme: Nesnenin özelliklerini private olarak tanımlayarak dışarıdan doğrudan erişilmesini engelleyebilirsiniz.
//* Getter ve Setter Metotları: Özelliklere erişmek veya değiştirmek için get ve set metotları kullanarak kontrol sağlayabilirsiniz.
//* Metotlar: Nesnenin iç işlemlerini metotlar aracılığıyla kapsullamak ve dış dünyadan soyutlamak mümkündür.

class Hesap {
  constructor(bakiye) {
    this._bakiye = bakiye; // Özellik private olarak tanımlandı
  }

  get bakiye() {
    return this._bakiye;
  }

  set bakiye(yeniBakiye) {
    if (yeniBakiye < 0) {
      throw new Error("Bakiye negatif olamaz.");
    }
    this._bakiye = yeniBakiye;
  }

  paraYatir(miktar) {
    this.bakiye += miktar;
  }

  paraCek(miktar) {
    if (miktar > this.bakiye) {
      throw new Error("Yetersiz bakiye.");
    }
    this.bakiye -= miktar;
  }
}