//! JavaScript'te Prototype Özelliği

//? Prototype (prototip), JavaScript'te nesnelerin özellik ve metotlarını miras aldığı bir mekanizmadır. Bir nesneye ait bir özellik veya metod çağrıldığında, JavaScript öncelikle o nesnede arar. Bulamaması durumunda, nesnenin prototipine bakar. Eğer prototipte de bulunmazsa, prototipin prototipine ve böylece devam ederek prototip zincirini takip eder. Bu süreç, istenen özellik veya metod bulunana kadar veya zincir sonuna gelinceye kadar devam eder.

//! Prototipin Görevi
//* Miras Alma: Nesnelere özellik ve metotlar miras almalarını sağlar.
//* Kod Tekrarını Azaltma: Ortak özellik ve metotlar, prototiplerde tanımlanarak tekrar kullanılabilir.
//* Nesnelerin Bağlantısı: Nesneler arasında bir hiyerarşi oluşturur.


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


//* person bir prototip nesnedir.
//* student prototipi, person prototipini miras alır.
//* john nesnesi, student prototipini miras alır.
john.greet() çağrıldığında, john nesnesinde greet metodu bulunmadığı için, prototip zinciri boyunca yukarı doğru çıkarak person prototipindeki greet metodu bulunur ve çalıştırılır.