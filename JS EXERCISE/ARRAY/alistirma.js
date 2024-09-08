let meyveler = ["erik" , "armut", "kiraz", "muz", "çilek"];

console.log(meyveler[0]);      //! İlk elemana erişmek.  
console.log(meyveler.length);  //! Dizinin uzunluğunu bulmak.
console.log(meyveler[1]);      //! Dizide istenilen index numarasına ulaşmak.

let index = meyveler.indexOf("elma");
console.log(index);            //! Belirtile elemanı dizide döndürür bulamaz ise -1 döner.

meyveler.forEach(meyveler => {
        console.log(meyveler);  //! Dizideki tüm elemanları dolaşır.
});

meyveler.unshift("elma");
console.log(meyveler);          //! Dizinin başına eleman ekleme.

meyveler.push("elma");
console.log(meyveler);         //! Dizinin sonuna eleman eklemek.

meyveler.pop();
console.log(meyveler);         //! Dizinin son elemanını siler.

let numbers = [1, 3, 2, 4, 6, 5];

numbers.reverse();
console.log(numbers);          //! Dİzideki elemanları ters çevirir.

numbers.sort();
console.log(numbers);          //! Diziyi sıralar.

let isPresent = numbers.includes(1);
console.log(isPresent);        //! Dizide elemanın olup olmadığını kontrol eder.

let numbers1 = [10, 11, 12, 13];
let combineArray = numbers.concat(numbers1);
console.log(combineArray);     //! İki diziyi birleştirir.

let names = ["Emre", "AYDIN"];
let birlestir = names.join(" ");
console.log(birlestir);        //! Dizinin tüm elemanlarını birleştirir.

//! ----------------------------------------------------------------

let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);         //! Dizideki elemanları 2 ile çarpar.

let evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers);           //! Dizideki çift elemanları filtreler. 

let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);                   //! TÜm sayıların toplamını bulmak.

meyveler.forEach((meyve, index) => {
   console.log(`${index + 1}: ${meyve}`);  //! Dizi elemanlarını yazdırır. 
})

//! map: Dizinin her bir elemanını değiştirerek yeni bir dizi oluşturur.
//! filter: Belirli bir koşulu sağlayan elemanları içeren yeni bir dizi oluşturur.
//! reduce: Dizinin tüm elemanlarını tek bir değere indirger.
//! forEach: Dizinin her bir elemanı üzerinde işlem yapmak için kullanılır (yeni bir dizi oluşturmaz).

//! ----------------------------------------------------------------

let maxNumber = Math.max(...numbers);
console.log(maxNumber);       //! Dizideki en büyük sayıyı bulur.

let minNumber = Math.min(...numbers);
console.log(minNumber);       //! Dizideki en küçük sayıyı bulur.

let numberss = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let bölünebilen = numberss.filter(num => num % 2 === 0);
console.log(bölünebilen);    //! 2 ye tam bölünebilenleri bulduk.

let users = [
    { name:'Emre', age: 25},
    { name:'Merve', age: 24},
    { name:'Ayşe', age: 29},
    { name:'Mehmet', age: 35},
    { name:'Cihangir', age: 75}
];

users.sort((a,b) => a.age - b.age);
console.log(users);         //! Dİziyi belirli bir özelliğe göre sıralama.

//!  Spread Operator (...)
//?  Ne demektir: Bir diziyi veya nesneyi tek tek elemanlarına ayırmak için kullanılır.
//?  Neden önemlidir: Fonksiyonlara parametre aktarırken, dizi birleştirme işlemlerinde ve nesne kopyalama işlemlerinde kullanılır.

let numara = [61, 62, 63, 64, 65, 66];
let numara2 = [67, 68, 69, 70];

let combineNum = [...numara, ...numara2];
console.log(combineNum);

let isim = { 
    name: 'Emre', age:25
};
let newPerson = { ...isim, city:'Gebze' };
console.log(newPerson);

//! Destructuring
//? Ne demektir: Bir dizi veya nesnenin elemanlarını, ayrı değişkenlere atamak için kullanılan bir sözdizimi şeklidir.
//? Neden önemlidir: Kodun daha okunaklı ve daha az sözdizimi kullanarak yazılmasını sağlar.

let [first, second] = [10, 20]; //! first = 10, second = 20

let person = { name: 'Semih', age: 25 };
let { name, age } = person;
console.log(person);  







