//! Nesne (Object)
//? Tanım: JavaScript'te her şey bir nesnedir. Nesneler, özellikleri (properties) ve metodları (methods) içinde barındıran yapılandırılmış verilerdir.

//! Literal Notation:
let person = {
    name: "Ahmet",
    age: 30,
    greet: function() {
        console.log("Merhaba, ben " + this.name);
    }
};