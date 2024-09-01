function sayHello() {
console.log('Hello')

}
sayHello() 


function topla(a , b){
    return(a + b);
}
console.log(topla(5,3));


//! Yüksek dereceli fonksiyonlar (Higher-Order Functions)

//? map()

const sayilar = [1, 2, 3, 4, 5];
const kareleri = sayilar.map(sayi => sayi * sayi);
console.log(kareleri);

//? filter()

const sayilar1 = [1, 2, 3, 4, 5];
const ciftSayilar = sayilar1.filter(sayi => sayi % 2 === 0);
console.log(ciftSayilar);

//? reduce()

const sayilar2 = [1, 2, 3, 4, 5];
const toplam = sayilar.reduce(())

