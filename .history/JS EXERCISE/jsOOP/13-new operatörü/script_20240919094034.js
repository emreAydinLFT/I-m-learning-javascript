//! JavaScript'te new Operatörü

//? new Operatörü, JavaScript'te yeni bir nesne oluşturmak için kullanılan özel bir operatördür. Bir constructor fonksiyonu ile birlikte kullanıldığında, bu fonksiyonun içinde tanımlanan özellik ve metotlarla yeni bir nesne örneği oluşturur.

//! new Operatörünün Çalışma Mekanizması
//* Yeni bir boş nesne oluşturulur: new anahtar kelimesiyle karşılaştığında JavaScript, yeni bir boş nesne oluşturur.
//* this bağlamı ayarlanır: Oluşturulan bu boş nesne, constructor fonksiyonu içindeki this anahtar kelimesi ile ilişkilendirilir.
Constructor fonksiyonu çalıştırılır: Constructor fonksiyonu, oluşturulan nesnenin özellikleri ve metotlarını tanımlamak için çalıştırılır. this anahtar kelimesi aracılığıyla yeni nesnenin özelliklerine değer atanır.
Yeni nesne döndürülür: Constructor fonksiyonu genellikle açıkça bir değer döndürmez. Ancak, JavaScript otomatik olarak oluşturulan yeni nesneyi döndürür.