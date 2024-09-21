//! 1. Nesne (Object)
//? Tanım: JavaScript'te her şey bir nesnedir. Nesneler, özellikleri (properties) ve metodları (methods) içinde barındıran yapılandırılmış verilerdir.

//! Literal Notation:

let person = {
  name: "Ahmet",
  age: 30,
  greet: function () {
    console.log("Merhaba, ben " + this.name);
  },
};

//! Constructor Function:   //ESKİ YÖNDEM ES6 da değişti ve class geldi.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Merhaba, ben " + this.name);
  };
}
let person = new Person("Ayşe", 25);

//! 2. Sınıflar (Classes)

//? Tanım: Sınıflar, nesnelerin şablonlarıdır. Bir sınıftan birden fazla nesne oluşturabilirsiniz.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Merhaba, ben " + this.name);
  }
}
let person = new Person("Mehmet", 35);

//! 3. Kalıtım (Inheritance)
//? Tanım: Bir sınıfın özelliklerini ve metodlarını başka bir sınıfa aktararak kod tekrarını önlemek.

class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }

  sesCikar() {
    console.log("Ses çıkarıyorum.");
  }
}

class Kopek extends Hayvan {
  constructor(isim, cins) {
    super(isim); // Ana sınıfın constructor'ını çağırıyoruz
    this.cins = cins;
  }

  havla() {
    console.log("Havlıyorum.");
  }
}

let kopek1 = new Kopek("Karabaş", "Kangal");
kopek1.sesCikar(); // Ses çıkarıyorum.
kopek1.havla(); // Havlıyorum.

//? extends anahtar kelimesi ile Kopek sınıfı, Hayvan sınıfından miras alır.
//?super() anahtar kelimesi, ana sınıfın constructor'ını çağırmak için kullanılır.

//! 4. Kapsülleme (Encapsulation)
//? Tanım: Verileri ve metodları bir arada tutarak dışarıdan erişimi kontrol etmek.

//! JavaScript'te kapsüllemeyi sağlamanın birkaç yolu vardır:

//? Closure: Bir fonksiyonun kapsamlı değişkenlerine, o fonksiyon dışından erişebilmeyi sağlayan bir özelliktir. Bu sayede, özel değişkenler oluşturabilir ve bunları dış dünyadan gizleyebilirsiniz.
//? Getter ve Setter Metotları: Nesnelerin özelliklerine doğrudan erişimi engellemek ve bu erişimi kontrol etmek için getter ve setter metotları kullanılır.
//? Sınıflar ve Özellikler: ES6 ile gelen sınıflar, özellikler (properties) ve metotlar (methods) aracılığıyla kapsüllemeyi daha kolay hale getirir.

class Person {
  constructor(name) {
    this._name = name; // Özel değişken
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person("Ali");
console.log(person.name); // Ali
person.name = "Veli";
console.log(person.name); // Veli

//? Bu örnekte, _name özel değişkeni dışarıdan doğrudan erişilemez. name özelliği ise getter ve setter metotları aracılığıyla kontrol edilir.

//! 1. Closure ile Kapsülleme
//? Closure, bir fonksiyonun kapsamlı değişkenlerine, o fonksiyonun dışından erişebilmeyi sağlayan bir mekanizmadır. Bu sayede, özel değişkenler oluşturabilir ve bunları dış dünyadan gizleyebilirsiniz.

function Counter() {
    let count = 0; // Özel değişken (dışarıdan erişilemez)
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getValue: function() {
        return count;
      }
    };
  }
  
  let counter = new Counter();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); // 2

//? count değişkeni, Counter fonksiyonunun kapsamı içinde olduğu için dışarıdan doğrudan erişilemez.
//? increment, decrement ve getValue metotları aracılığıyla count değerini dolaylı olarak yönetebiliriz.

/

//! 5. Polimorfizm
//? Tanım: Farklı türdeki nesnelerin aynı isimli metodu farklı şekillerde kullanabilmesi.

class Animal {
  makeSound() {
    console.log("Ses çıkarıyor.");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log("Havlıyor.");
  }
}
class Cat extends Animal {
  makeSound() {
    console.log("Miyavlıyor.");
  }
}

//! 6. Diğer Önemli Konular:
//? Prototypes: JavaScript'in prototip tabanlı bir dil olması, nesnelerin özelliklerini ve metodlarını prototiplerden devraldığı anlamına gelir.
//? This: this anahtar kelimesi, bir metodun çağrıldığı bağlamı ifade eder.
//? Closure: Bir iç fonksiyonun dış fonksiyonun kapsamındaki değişkenlere erişebilmesi.
