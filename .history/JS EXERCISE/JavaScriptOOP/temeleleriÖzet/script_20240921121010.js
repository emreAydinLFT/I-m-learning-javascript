//! 1. Nesne (Object)
//? Tanım: JavaScript'te her şey bir nesnedir. Nesneler, özellikleri (properties) ve metodları (methods) içinde barındıran yapılandırılmış verilerdir.

//! Literal Notation:

let person = {
    name: "Ahmet",
    age: 30,
    greet: function() {
        console.log("Merhaba, ben " + this.name);
    }
};

//! Constructor Function:

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
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

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log("Ben ders çalışıyorum.");
    }
}

//! 4. Kapsülleme (Encapsulation)
//? Tanım: Verileri ve metodları bir arada tutarak dışarıdan erişimi kontrol etmek.

class BankAccount {
    #balance = 0; // Private field
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Yetersiz bakiye.");
        }
    }
}

5. Polimorfizm
Tanım: Farklı türdeki nesnelerin aynı isimli metodu farklı şekillerde kullanabilmesi.