//! Modül Sistemleri (Module Systems)

//? Modül Sistemleri, büyük ve karmaşık yazılım projelerini daha yönetilebilir ve ölçeklenebilir hale getirmek için kullanılan bir yapıdır. Bu sistemler, bir uygulamayı daha küçük, bağımsız ve yeniden kullanılabilir birimlere (modüllere) ayırır.

//! Neden Modül Sistemleri Kullanırız?
//* Kodun Organize Edilmesi: Büyük kod tabanlarını daha küçük, daha yönetilebilir parçalara ayırır.
//* Tekrar Kullanılabilirlik: Modüller farklı projelerde tekrar kullanılabilir.
//* Bağımlılık Yönetimi: Modüller arasındaki bağımlılıkları açıkça belirtir ve yönetir.
//* Ad Alanı Yönetimi: Çakışma riskini azaltarak daha temiz ve düzenli kod yazımını sağlar.
//*Test Edilebilirlik: Modüllerin bağımsız olarak test edilmesini kolaylaştırır.
//! Modül Sistemlerinin Temel Özellikleri
//* Kapsülleme: Modüllerin iç detaylarını gizleyerek dış dünyadan soyutlar.
//* Soyutlama: Modüllerin arayüzleri üzerinden etkileşim kurulur.
//* Bağımlılık Yönetimi: Modüllerin birbirine olan bağımlılıkları açıkça belirtilir.
//* Yüklenme: Modüller ihtiyaç duyulduğunda yüklenir, bu sayede performans artar.
//! Popüler Modül Sistemleri
//* CommonJS: Node.js'te yaygın olarak kullanılan bir modül sistemi.
AMD (Asynchronous Module Definition): Tarayıcı ortamında senkron olmayan modül yükleme için kullanılır.
//* ES Modules: JavaScript'in yerleşik modül sistemi, modern tarayıcılarda ve Node.js'te desteklenir.
//! Modül Sistemlerinin Çalışma Mantığı
//* Tanımlama: Bir modül, bir dosyada veya bir dizi dosyada tanımlanır.
//* İçe Aktarma (Import): Başka bir modülde, ihtiyaç duyulan modülden özellikler veya fonksiyonlar içe aktarılır.
//* Dışa Aktarma (Export): Bir modülde tanımlanan özellikler veya fonksiyonlar, diğer modüllere kullanıma sunulur.

//! Örnek (ES Modules):

// math.js
export function topla(a, b) {
  return a + b;
}

export function carp(a, b) {
  return a * b;
}

// app.js
import { topla, carp } from './math.js';

console.log(topla(2, 3)); // Çıktı: 5
console.log(carp(4, 5)); // Çıktı: 20

Modül Sistemlerinin Avantajları
Daha Büyük Projeler: Büyük ve karmaşık projeleri daha küçük, yönetilebilir parçalara ayırır.
Kod Tekrarını Azaltır: Modüller tekrar kullanılabilir, bu da kod tekrarını azaltır.
Daha İyi Okunabilirlik: Kod daha düzenli ve anlaşılır hale gelir.
Daha İyi Test Edilebilirlik: Modüller bağımsız olarak test edilebilir.