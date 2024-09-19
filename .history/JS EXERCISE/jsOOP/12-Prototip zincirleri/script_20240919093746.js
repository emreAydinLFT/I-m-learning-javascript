//! Prototip Zincirleri

//? Prototip zincirleri, JavaScript'te nesnelerin özellik ve metotlarına erişim mekanizmasını belirleyen önemli bir kavramdır. Bir nesneye ait bir özellik veya metod çağrıldığında, JavaScript öncelikle o nesnede arar. Bulamaması durumunda, nesnenin prototipine bakar. Eğer prototipte de bulunmazsa, prototipin prototipine ve böylece devam ederek prototip zincirini takip eder. Bu süreç, istenen özellik veya metod bulunana kadar veya zincir sonuna gelinceye kadar devam eder.

//! Prototip Zincirinin Çalışma Mantığı
//* Nesne Oluşturma: Her nesne, oluşturulduğu fonksiyonun (constructor) prototipini miras alır.
//* Özellik Arama: Bir özellik veya metod çağrıldığında, JavaScript öncelikle nesnenin kendi içinde arar.
Prototipe Geçiş: Eğer nesnede bulunmazsa, nesnenin prototipine geçer ve orada arar.
Zincir Devamı: Prototipte de bulunmazsa, prototipin prototipine geçer ve bu şekilde devam eder.
Sonlandırma: Zincir sonunda (genellikle null) bulunmazsa, undefined değeri döndürülür.
Örnek