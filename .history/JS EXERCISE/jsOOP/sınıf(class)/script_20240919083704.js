class Kitap {
  constructor(isim, yazar, sayfaSayisi) {
    // Bir kitap nesnesi oluşturucu
    // isim, yazar ve sayfaSayisi özelliklerini alır
    this.isim = isim;
    this.yazar = yazar;
    this.sayfaSayisi = sayfaSayisi;
  }
}

// İki farklı kitap nesnesi oluşturuyoruz
let kitap1 = new Kitap("Sefiller", "Victor Hugo", 1200); // Yeni bir kitap nesnesi oluşturuldu ve kitap1 değişkenine atandı
let kitap2 = new Kitap("Hobbit", "J.R.R. Tolkien", 300);  // Yeni bir kitap nesnesi oluşturuldu ve kitap2 değişkenine atandı

// kitap1 ve kitap2 değişkenleri, heap bellekteki iki farklı nesneye işaret eder
// Her bir nesne, kendi özellikleriyle birlikte ayrı bir alanda tutulur

