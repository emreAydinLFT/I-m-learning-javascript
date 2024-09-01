//? Destructuring => şeklini bozma
//? Spread => Dağılma, yayma

//! Destructuring

//? Destructuring, diziler veya nesnelerden değerleri alıp, onları daha küçük, bağımsız değişkenlere ayırmanızı sağlar. Bu, özellikle verilerle çalışırken kodu daha okunabilir hale getirir.

//! a) Array Destructuring (Dizi Yapı Bozma)

const dizi = [1, 2, 3, 4];

// Destructuring ile öğeleri ayırma
const [a, b, c] = dizi;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3


//! b) Object Destructuring (Nesne Yapı Bozma)

const kisi = {
    isim: "Ahmet",
    yas: 25,
    sehir: "İzmir"
};

// Destructuring ile nesne öğelerini ayırma
const { isim, yas, sehir } = kisi;

console.log(isim);  // "Ahmet"
console.log(yas);   // 25
console.log(sehir); // "İzmir"

//! c) Varsayılan Değerler ile Destructuring
//? 
JavaScript'te destructuring (yapı bozma) ve spread (yayma) operatörleri, verilerle daha temiz, okunabilir ve etkili şekilde çalışmamızı sağlar. Her iki özellik de, özellikle diziler ve nesnelerle çalışırken yaygın olarak kullanılır. İşte bu kavramların detaylı açıklamaları:

1. Destructuring (Yapı Bozma)
Destructuring, diziler veya nesnelerden değerleri alıp, onları daha küçük, bağımsız değişkenlere ayırmanızı sağlar. Bu, özellikle verilerle çalışırken kodu daha okunabilir hale getirir.

a) Array Destructuring (Dizi Yapı Bozma)
Dizilerden öğeleri almak ve onları ayrı değişkenlerde saklamak için kullanılır.

javascript
Kodu kopyala
const dizi = [1, 2, 3, 4];

// Destructuring ile öğeleri ayırma
const [a, b, c] = dizi;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
Ne Yapar?: dizi içindeki ilk üç öğeyi a, b, ve c değişkenlerine atar.
b) Object Destructuring (Nesne Yapı Bozma)
Nesnelerden anahtar değerlerini almak ve onları ayrı değişkenlerde saklamak için kullanılır.

javascript
Kodu kopyala
const kisi = {
    isim: "Ahmet",
    yas: 25,
    sehir: "İzmir"
};

// Destructuring ile nesne öğelerini ayırma
const { isim, yas, sehir } = kisi;

console.log(isim);  // "Ahmet"
console.log(yas);   // 25
console.log(sehir); // "İzmir"
Ne Yapar?: kisi nesnesindeki isim, yas, ve sehir özelliklerini ayrı değişkenlere atar.
c) Varsayılan Değerler ile Destructuring
Eğer bir nesne veya dizide belirli bir anahtar veya indeks bulunmuyorsa, varsayılan bir değer atayabilirsiniz.
