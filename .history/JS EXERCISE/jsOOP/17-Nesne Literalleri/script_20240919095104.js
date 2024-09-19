//! extends Anahtar Kelimesi

//? extends anahtar kelimesi, JavaScript'te bir sınıfın başka bir sınıftan miras almasını sağlayan bir mekanizmadır. Bu sayede, bir sınıfın tüm özelliklerini ve metotlarını miras alarak yeni bir sınıf oluşturabilirsiniz. Bu, kod tekrarını azaltır ve kodun daha düzenli olmasını sağlar.

//! Nasıl Çalışır?

//* Miras Alma: Bir sınıf, extends anahtar kelimesi kullanılarak başka bir sınıftan miras alındığında, miras alınan sınıfın tüm özellikleri ve metotları otomatik olarak yeni sınıfa aktarılır.
//* Override Etme: Miras alınan sınıfın bir metodu, yeni sınıfta aynı isimle tekrar tanımlanarak override edilebilir. Bu sayede, miras alınan metodun davranışı değiştirilebilir.
//* Super Anahtar Kelimesi: Miras alınan sınıfın bir metodunu çağırmak için super anahtar kelimesi kullanılır.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Merhaba, ben " + this.name);
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }

  study() {
    console.log(this.name + " ders çalışıyor.");
  }
}

let student1 = new Student("Ali", 12345);
student1.greet(); // Çıktı: Merhaba, ben Ali
student1.study(); // Çıktı: Ali ders çalışıyor.


//* Student sınıfı, Person sınıfından miras alınır.
//* Student sınıfının constructor'ında, super() anahtar kelimesi ile Person sınıfının constructor'ı çağrılarak name özelliği aktarılır.
//* Student sınıfında study metodu, Student sınıfına özgü bir davranış ekler.

//! Önemli Noktalar
//* Tekli Miras: JavaScript, bir sınıfın sadece bir sınıftan miras almasına izin verir.
//*Prototip Zincirleri: extends anahtar kelimesi, prototip zincirini uzatarak yeni sınıfın prototipine miras alınan sınıfın prototipini ekler.
//* Super Anahtar Kelimesi: Miras alınan sınıfın metodlarına erişmek için kullanılır.
//* Override Etme: Miras alınan sınıfın metodlarını override ederek yeni davranışlar tanımlayabilirsiniz.


//! Neden extends Kullanılır?
//* Kod Tekrarını Azaltma: Ortak özellikleri ve metotları tek bir yerde tanımlayarak kod tekrarını önler.
//* Kodun Daha Okunaklı Olması: Kodun daha düzenli ve anlaşılır olmasını sağlar.
//* Kalıtım Hiyerarşisi Oluşturma: Sınıflar arasında hiyerarşik bir ilişki kurar.


