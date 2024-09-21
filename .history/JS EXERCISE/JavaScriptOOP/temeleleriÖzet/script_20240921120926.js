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
//?Tanım: Bir sınıfın özelliklerini ve metodlarını başka bir sınıfa aktararak kod tekrarını önlemek.