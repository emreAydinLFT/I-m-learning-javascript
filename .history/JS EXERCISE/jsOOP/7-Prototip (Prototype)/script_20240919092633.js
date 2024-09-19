//! Prototip Nedir?
//* Ortak Nesne: Prototip, bir nesnenin özellik ve metodlarının bir şablonunu içeren bir nesnedir.
//* Miras: Yeni bir nesne oluşturulduğunda, bu nesne otomatik olarak prototipinden özellik ve metodları miras alır.
//* Özelleştirme: Prototipteki özellik ve metotlar, yeni nesnelerde yeniden tanımlanarak özelleştirilebilir.

//! Prototip Zinciri
//? Bir nesnenin bir özelliği veya metodu çağrıldığında, JavaScript öncelikle o nesnede arar. Bulamaması durumunda prototip zincirini takip eder. Prototip zinciri, bir nesnenin prototipi, o prototipin prototipi ve böylece devam eden bir zincirdir. JavaScript, istenen özelliği veya metodu bulana kadar bu zinciri takip eder.

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
//* student prototipi, person prototipinden miras alır.
//*john nesnesi, student prototipinden miras alır.
john nesnesinin greet metodu çağrıldığında, prototip zincirinde yukarı doğru çıkarak person prototipindeki greet metodu bulunur ve çalıştırılır.