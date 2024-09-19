//! ES6 Sınıfları ve class Anahtar Kelimesi
//? ES6 (ECMAScript 2015) ile JavaScript'e getirilen class anahtar kelimesi, sınıf tabanlı programlamaya daha yakın bir yapı sunarak, prototip tabanlı programlamanın karmaşıklıklarını azaltmayı amaçlar. Ancak, unutulmamalıdır ki JavaScript'in temeli hala prototip tabanlıdır ve class'lar, bu temel üzerine inşa edilmiş birer sözdizimsel şekerdir.

//! Class'ların Temel Özellikleri

//? Sınıf Tanımlama:

class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greet() {
      console.log(`Merhaba, ben ${this.name}`);
  }
}

//! Constructor:

//* Bir sınıf örneği oluşturulduğunda ilk çalıştırılan metottur.
//* Nesnenin başlangıç değerlerini ayarlar.
//! Metotlar:

//* Sınıfın üyelerinin (örneklerinin) sahip olduğu davranışları tanımlar.
//! Kalıtım:
//* extends anahtar kelimesi ile diğer sınıflardan miras alınabilir.
//! Statik Metotlar:
//* Sınıfa ait, örnekler üzerinden değil, sınıfın kendisine ait metotlar.

