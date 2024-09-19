//! JavaScript'te new Operatörü

//? new Operatörü, JavaScript'te yeni bir nesne oluşturmak için kullanılan özel bir operatördür. Bir constructor fonksiyonu ile birlikte kullanıldığında, bu fonksiyonun içinde tanımlanan özellik ve metotlarla yeni bir nesne örneği oluşturur.

//! new Operatörünün Çalışma Mekanizması
//* Yeni bir boş nesne oluşturulur: new anahtar kelimesiyle karşılaştığında JavaScript, yeni bir boş nesne oluşturur.
//* this bağlamı ayarlanır: Oluşturulan bu boş nesne, constructor fonksiyonu içindeki this anahtar kelimesi ile ilişkilendirilir.
//* Constructor fonksiyonu çalıştırılır: Constructor fonksiyonu, oluşturulan nesnenin özellikleri ve metotlarını tanımlamak için çalıştırılır. this anahtar kelimesi aracılığıyla yeni nesnenin özelliklerine değer atanır.
//* Yeni nesne döndürülür: Constructor fonksiyonu genellikle açıkça bir değer döndürmez. Ancak, JavaScript otomatik olarak oluşturulan yeni nesneyi döndürür.

function Person(ad, soyad) {
  this.ad = ad;
  this.soyad = soyad;

  this.tamAd = function() {
    return this.ad + " " + this.soyad;
  };
}

// Yeni bir Person nesnesi oluşturma
let person1 = new Person("Ahmet", "Yılmaz");

console.log(person1.tamAd()); // Çıktı: Ahmet Yılmaz

//* Person isimli bir constructor fonksiyonu tanımlandı.
//* new operatörü ile person1 isimli yeni bir Person nesnesi oluşturuldu.
//* person1 nesnesinin ad ve soyad özellikleri, constructor fonksiyonu içindeki this anahtar kelimesi kullanılarak ayarlandı.
//* tamAd metodu, person1 nesnesine eklendi.

//* Constructor Fonksiyonları: new operatörü sadece constructor fonksiyonları ile kullanılabilir.
//* this Bağlamı: this anahtar kelimesi, constructor fonksiyonu içinde yeni oluşturulan nesneyi ifade eder.
Nesne Prototipi: Yeni oluşturulan nesne, constructor fonksiyonunun prototipini miras alır. Bu sayede prototip zincirleri oluşur ve nesneler birbirleriyle ilişkili hale gelir.
Return Değeri: Constructor fonksiyonları genellikle açıkça bir değer döndürmez. Ancak, new operatörü, oluşturulan nesneyi otomatik olarak döndürür.