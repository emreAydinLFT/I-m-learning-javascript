//! Prototip Zincirleri

//? Prototip zincirleri, JavaScript'te nesnelerin özellik ve metotlarına erişim mekanizmasını belirleyen önemli bir kavramdır. Bir nesneye ait bir özellik veya metod çağrıldığında, JavaScript öncelikle o nesnede arar. Bulamaması durumunda, nesnenin prototipine bakar. Eğer prototipte de bulunmazsa, prototipin prototipine ve böylece devam ederek prototip zincirini takip eder. Bu süreç, istenen özellik veya metod bulunana kadar veya zincir sonuna gelinceye kadar devam eder.

//! Prototip Zincirinin Çalışma Mantığı
//* Nesne Oluşturma: Her nesne, oluşturulduğu fonksiyonun (constructor) prototipini miras alır.
//* Özellik Arama: Bir özellik veya metod çağrıldığında, JavaScript öncelikle nesnenin kendi içinde arar.
//* Prototipe Geçiş: Eğer nesnede bulunmazsa, nesnenin prototipine geçer ve orada arar.
//* Zincir Devamı: Prototipte de bulunmazsa, prototipin prototipine geçer ve bu şekilde devam eder.
//* Sonlandırma: Zincir sonunda (genellikle null) bulunmazsa, undefined değeri döndürülür.

// Person prototipi
let person = {
  name: "John Doe",
  greet: function() {
    console.log("Merhaba, ben " + this.name);
  }
};

// Student prototipi
let student = Object.create(person);
student.studentId = 123;

// Student nesnesi oluşturma
let john = Object.create(student);
john.name = "John Smith";

john.greet(); // Çıktı: Merhaba, ben John Smith

//* john nesnesi, student prototipini, student prototipi ise person prototipini miras alır.
//* john.greet() çağrıldığında, önce john nesnesinde greet metodu aranır.
john nesnesinde greet metodu bulunmadığı için, student prototipine geçilir.
student prototipinde de greet metodu bulunmadığı için, person prototipine geçilir.
person prototipinde greet metodu bulunduğu için bu metot çalıştırılır.