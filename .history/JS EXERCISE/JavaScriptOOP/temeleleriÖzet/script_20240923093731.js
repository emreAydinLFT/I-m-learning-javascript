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

//! a. Closure ile Kapsülleme
//? Closure, bir fonksiyonun kapsamlı değişkenlerine, o fonksiyonun dışından erişebilmeyi sağlayan bir mekanizmadır. Bu sayede, özel değişkenler oluşturabilir ve bunları dış dünyadan gizleyebilirsiniz.

function Counter() {
  let count = 0; // Özel değişken (dışarıdan erişilemez)

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getValue: function () {
      return count;
    },
  };
}

let counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2

//? count değişkeni, Counter fonksiyonunun kapsamı içinde olduğu için dışarıdan doğrudan erişilemez.
//? increment, decrement ve getValue metotları aracılığıyla count değerini dolaylı olarak yönetebiliriz.

//! b. Getter ve Setter Metotları ile Kapsülleme

//? Getter ve setter metotları, nesnelerin özelliklerine doğrudan erişimi engeller ve bu erişimi kontrol etmek için kullanılır.

class Person {
  constructor(name) {
    this._name = name; // Özel değişken (getter ve setter ile erişilebilir)
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

//? _name özel değişkeni, dışarıdan doğrudan erişilemez.
//? name özelliği, getter ve setter metotları aracılığıyla kontrol edilir. Bu sayede, name özelliğine atanan değeri kontrol edebilir ve isteğe bağlı olarak bazı işlemler yapabiliriz.

//! c. Sınıflar ve Özel Değişkenler

//! a.
class Person {
  #name; // Özel değişken

  constructor(name) {
    this.#name = name;
  }

  greet = () => {
    console.log(`Merhaba, ben ${this.name}`);
  };
}

const person = new Person("Ahmet");
person.greet();

//? Arrow Function: greet metodu, daha kısa ve okunaklı bir şekilde tanımlanmıştır.
//? Template Literal: console.log içindeki stringi biçimlendirmek için template literal kullanılmıştır.

//! b (güncel yöntem)

class Person {
  // Person sınıfı, bir kişiyi temsil eden bir şablondur.
  constructor(name, age) {
    // Constructor, yeni bir Person nesnesi oluşturulduğunda çağrılır.
    this._name = name; // Nesnenin özel bir isim özelliği oluşturulur ve verilen isim değeri atanır.
    // _ işaretiyle başlayan özellikler genellikle özel olarak kabul edilir ve dışarıdan doğrudan erişilmesi engellenir.
    this._age = age; // Nesnenin özel bir yaş özelliği oluşturulur ve verilen yaş değeri atanır.
  }

  // Getter ve setter metotları, nesnenin özelliklerine dışarıdan erişim ve değişiklik yapma mekanizmalarıdır.
  get name() {
    // name özelliğine erişildiğinde bu metot çağrılır.
    return { ...this }; // Nesnenin bir kopyasını oluşturur ve döndürür. Bu sayede orijinal nesne üzerinde değişiklik yapma riskini azaltır.
  }
  set name({ name }) {
    // name özelliğine yeni bir değer atanmak istendiğinde bu metot çağrılır.
    this._name = name; // Yeni verilen isim değeri, özel _name özelliğine atanır.
  }

  async fetchData() {
    // Asenkron bir şekilde veri çekme işlemi yapar.
    try {
      // Veri çekme işlemi başlatılır.
      const response = await fetch("https://api.example.com/data");
      // Gelen yanıtı JSON formatına çevirir.
      const data = await response.json();
      // Çekilen verileri konsola yazar.
      console.log(data);
    } catch (error) {
      // Eğer bir hata oluşursa, hata mesajını konsola yazar.
      console.error("Veri çekerken hata oluştu:", error);
    }
  }
}
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
//? Polimorfizm: Farklı nesnelerin aynı mesajı farklı şekilde yorumlamasıdır.
//? Overriding: Bir metodun çocuk sınıf tarafından yeniden tanımlanmasıdır.
//? Overloading: Aynı isimde ancak farklı parametrelere sahip birden fazla metodun varlığıdır.

//! 6. Diğer Önemli Konular:
//? Prototypes: JavaScript'in prototip tabanlı bir dil olması, nesnelerin özelliklerini ve metodlarını prototiplerden devraldığı anlamına gelir.
//? This: this anahtar kelimesi, bir metodun çağrıldığı bağlamı ifade eder.
//? Closure: Bir iç fonksiyonun dış fonksiyonun kapsamındaki değişkenlere erişebilmesi.


//! Özetle
//? Kalıtım (Inheritance): Kalıtım, bir sınıfın (çocuk sınıfı) başka bir sınıftan (ebeveyn sınıfı) özellik ve davranışları miras alması sürecidir. Bu sayede kod tekrarından kaçınılır ve yazılımın daha modüler hale getirilmesi sağlanır.

//! Kapsülleme (Encapsulation)
//? Kapsülleme, bir nesnenin iç durumunu ve davranışlarını dış dünyadan gizleme ve bu duruma kontrollü erişim sağlama işlemidir. Bu sayede, bir nesnenin iç yapısının değiştirilmesi durumunda diğer nesneler etkilenmez.

