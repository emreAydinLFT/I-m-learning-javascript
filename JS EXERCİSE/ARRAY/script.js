let name = Array(3).fill("x")  // Dizinin içini 3 tane x  ile doluduruyor.


let array1 = [1, 2 , 3, [10, 11, 12]]
let array2 = [4, 5 , 6]
let result = array1.concat(array2, 7, 8, 9)  // concat ile 2 veya daha fazla diziyi birleştirdik.

/*
console.log(array1[3][2])  // array1 in içindeki arrayi çağırmak için kullanılır
*/

const numbers = [1, 2, 3, 4, 5]  
/*
numbers.reverse()  // dizideki elemanları tersten yazar.
console.log(numbers)
*/
/*
length ile dizinin uzunluğunu bulabiliyoruz.
console.log(numbers.length);
*/
//console.log(numbers.includes(5)) //includes ile istenilen elemanın dizide olup olmadığı true veya false ile bildirilir.Ve büyük küçük harfe duyarlı!.

/* 
console.log(numbers.join())
console.log(numbers.join('-'))
parantez içine ne yazarsak onunla kelimeleri birleştirecek burada boş parantez yani virgülle bileştirdik.
*/

//console.log(numbers.slice(1,4)) //burada diziliyi belirli yerinden dilimledik.1.yi alıyor ama 4.sıradakini almıyor dikkat et.

/* console.log(numbers.splice(0,1)) // buradak 0.indeten başlayarak 1 elemanı çıkarmamızı sağlıyor. 

console.log(numbers.splice(0,2, 7,8)) // 0 dan başlayıp 2 elemanı çıkardık yerine 7 ve 8 i koyduk.
console.log(numbers)
*/




let names = ['Emre', 'Semih', 'Fatih', 'Karga']
// console.log(names.indexOf('Emre'));  // dizide sorguladığımız elaman var ise o elemanın dizideki sırasının değerini dönüyor. Yok ise -1 dönüyor.

//console.log(names.toString()) // Diziyi virgüllerle yan yana yazdırıyor.

// console.log(names.lastIndexOf('Emre'));  // lastIndexOf ile dizedeki herhangi bir içerinin en son kullanıldığı yeri gösterebiliyoruz.

/* 
console.log(names.push('Hırrım')) // push metodu dizye eleman eklemek için kullanılır.En sona ekler.
console.log(names) 
*/
/* 
console.log(names.pop())  // pop dizedeki son elemanı çıkarır ama sonradan ger kullanabiliriz.
console.log(names)
*/
/*
console.log(names.shift())   //shift dizedeki ilk elemanı çıkarır.
console.log(names)
*/
/*
console.log(names.unshift())  // dizinin başına eleman ekler.
console.log(names)
*/




