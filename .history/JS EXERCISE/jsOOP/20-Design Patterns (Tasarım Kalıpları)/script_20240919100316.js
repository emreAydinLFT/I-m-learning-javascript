//! Tasarım Kalıpları (Design Patterns)

//? Tasarım kalıpları, yazılım geliştirmede sıkça karşılaşılan sorunlara önceden belirlenmiş, test edilmiş ve tekrar kullanılabilir çözümlerdir. Bu kalıplar, yazılım mimarisi ve tasarımında ortak sorunlara genel bir yaklaşım sunar.

//! Neden Tasarım Kalıpları Kullanırız?
//* Kodun Kalitesi: Kodun daha okunaklı, anlaşılır ve sürdürülebilir olmasını sağlar.
//? Verimlilik: Tekrar eden tasarım sorunlarına hazır çözümler sunarak zaman kazandırır.
//? İletişim: Ekipler arasında ortak bir dil ve anlayış sağlar.
//* Esneklik: Sistemlere yeni özellikler eklemeyi kolaylaştırır.
//! Tasarım Kalıpları Türleri
//? Tasarım kalıpları genel olarak üç ana kategoriye ayrılır:

//* Yaratım (Creational) Kalıpları: Nesne oluşturma süreçlerini yönetir. Örnekler:
//? Singleton: Bir sınıftan sadece bir tane nesne oluşturulmasını sağlar.
Fatory Method: Nesne oluşturma işlemini alt sınıflara devreder.
Abstract Factory: Birbiriyle ilişkili nesne ailelerini oluşturmak için kullanılır.
Yapısal (Structural) Kalıpları: Sınıflar ve nesneler arasındaki ilişkileri yönetir. Örnekler:
Adapter: Uyumsuz arayüzleri bir araya getirir.
Decorator: Bir nesnenin davranışını dinamik olarak değiştirir.
Composite: Birbirine bağlı nesneleri tek bir nesne gibi gösterir.
Davranışsal (Behavioral) Kalıpları: Nesneler arasındaki iletişimi ve algoritmaları yönetir. Örnekler:
Observer: Bir nesnedeki değişikliklerin diğer nesnelere bildirilmesini sağlar.
Strategy: Bir algoritmayı bir nesneye atayarak farklı davranışlar elde eder.
State: Bir nesnenin durumuna göre davranışını değiştirir.