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
const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
console.log(toplam);

//! Rekürsif Fonksiyonlar
//? Kendini tekrar çağıran fonksiyondur.

function faktoriyel(sayi) {
    if (sayi === 0) {
        return 1;
    } else {
        return sayi * faktoriyel(sayi-1);
    }
}
console.log(faktoriyel(5));


//todo  Rekürsiyon: Bir fonksiyonun kendi içinde tekrar çağrılmasıdır.
//todo  Base Case: Rekürsif bir fonksiyonun durmasını sağlayan koşuldur.
//todo  Stack Overflow: Çok fazla rekürsif çağrı yapıldığında oluşan hata.


//! closure(kapsam)
//? Bir iç fonksiyonun dış fonksiyonun değişkenlerine erişebilme özelliği.

function dısFonksiyon() {
    const mesaj = "Merhaba";
    function icFonksiyon() {
        console.log(mesaj);
    }
    return icFonksiyon
}
const fonk = dısFonksiyon();
fonk();


//! callback Fonksiyonları 
//? Bir fonksiyonun parametre olarak başka bir fonksiyon alması ve onu belirli bir zamanda çalıştırması.

function bekleVeCalistir (milisaniye, call)