//! Tasarım Kalıpları (Design Patterns)

//? Tasarım kalıpları, yazılım geliştirmede sıkça karşılaşılan sorunlara önceden belirlenmiş, test edilmiş ve tekrar kullanılabilir çözümlerdir. Bu kalıplar, yazılım mimarisi ve tasarımında ortak sorunlara genel bir yaklaşım sunar.

//! Neden Tasarım Kalıpları Kullanırız?
//* Kodun Kalitesi: Kodun daha okunaklı, anlaşılır ve sürdürülebilir olmasını sağlar.
//* Verimlilik: Tekrar eden tasarım sorunlarına hazır çözümler sunarak zaman kazandırır.
//* İletişim: Ekipler arasında ortak bir dil ve anlayış sağlar.
//* Esneklik: Sistemlere yeni özellikler eklemeyi kolaylaştırır.

//! Tasarım Kalıpları Türleri
//? Tasarım kalıpları genel olarak üç ana kategoriye ayrılır:

//! Yaratım (Creational) Kalıpları: Nesne oluşturma süreçlerini yönetir. Örnekler:
//* Singleton: Bir sınıftan sadece bir tane nesne oluşturulmasını sağlar.
//* Factory Method: Nesne oluşturma işlemini alt sınıflara devreder.
//* Abstract Factory: Birbiriyle ilişkili nesne ailelerini oluşturmak için kullanılır.

//! Yapısal (Structural) Kalıpları: Sınıflar ve nesneler arasındaki ilişkileri yönetir. Örnekler:
//* Adapter: Uyumsuz arayüzleri bir araya getirir.
//* Decorator: Bir nesnenin davranışını dinamik olarak değiştirir.
//* Composite: Birbirine bağlı nesneleri tek bir nesne gibi gösterir.
//! Davranışsal (Behavioral) Kalıpları: Nesneler arasındaki iletişimi ve algoritmaları yönetir. Örnekler:
//* Observer: Bir nesnedeki değişikliklerin diğer nesnelere bildirilmesini sağlar.
//* Strategy: Bir algoritmayı bir nesneye atayarak farklı davranışlar elde eder.
//* State: Bir nesnenin durumuna göre davranışını değiştirir.

//! Popüler Tasarım Kalıpları
//* Singleton: Bir sistemde sadece bir tane olması gereken nesneler için kullanılır (örneğin, bir veritabanı bağlantısı).
//* Observer: Bir nesnedeki değişikliklerin diğer nesnelere otomatik olarak bildirilmesi gereken durumlarda kullanılır (örneğin, bir kullanıcı arayüzünde bir veri değiştiğinde diğer bileşenlerin güncellenmesi).
//* Factory Method: Nesne oluşturma işlemini alt sınıflara devrederek esneklik sağlar.
//* Decorator: Bir nesnenin davranışını süsleme veya genişletme ihtiyacı olduğunda kullanılır.

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

class Observer {
  update() {
    console.log('Güncelleme alındı');
  }
}

// Kullanım örneği
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify(); // Her iki observer da update metodunu çağıracaktır.

Not: Bu sadece tasarım kalıplarının genel bir tanıtımıdır. Her bir tasarım kalıbının detaylı açıklamaları ve kullanım örnekleri için daha kapsamlı kaynaklara başvurabilirsiniz.