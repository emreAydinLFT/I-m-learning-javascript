//! Regex


let word = /salak/i   // büyük küçük harfe duyarlılık için  i koyulur.
/*
let comment = prompt('yorumunu yaz! ama yazarken dikkali ol!');

if (word.test(comment)) {
    alert('hayır sen salaksın kardo!')
}
*/

let string = 'i love javascript and i love Emre'

console.log(
    string.match(/love/ig) // g komutu bütün strinde arama yapıp kaç tane ove var ise getirir.
    //string.search(/love/ig) //search metodu ise love ın kaçıncı indexte geçtiğini söyletir.
)
/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
*/

/*
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)  // yüzde işaretini global olarak arayıp boş karakterle değiştirir.

*/


//! Karakter Sınıfları

/*
 .: Herhangi bir tek karakteri temsil eder.
 ^: Satırın başını veya bir karakter kümesinin dışındaki karakterleri temsil eder.
 $: Satırın sonunu temsil eder.
 [abc]: a, b veya c karakterlerinden herhangi birini temsil eder.
 [^abc]: a, b veya c harfleri dışında herhangi bir karakteri temsil eder.
 [a-z]: a ile z arasındaki tüm küçük harfleri temsil eder.
 [0-9]: 0 ile 9 arasındaki tüm rakamları temsil eder.
 \d: Herhangi bir rakamı temsil eder (eşdeğeri [0-9]).
 \w: Herhangi bir harf, rakam veya alt çizgiyi temsil eder (eşdeğeri [a-zA-Z0-9_]).
 \s: Herhangi bir boşluk karakterini temsil eder (boşluk, tab, satır sonu vb.).
*/ 

//! Miktar Belirteçleri
/*
*: Önceki elemanın sıfır veya daha fazla kez tekrar etmesini sağlar.
+: Önceki elemanın bir veya daha fazla kez tekrar etmesini sağlar.
?: Önceki elemanın sıfır veya bir kez tekrar etmesini sağlar.
{n}: Önceki elemanın tam olarak n kez tekrar etmesini sağlar.
{n,}: Önceki elemanın en az n kez tekrar etmesini sağlar.
{n,m}: Önceki elemanın en az n, en fazla m kez tekrar etmesini sağlar.
*/

//! Özel Karakterler
/* 
.: Nokta karakteri (literal olarak kullanmak için \. gibi kaçış karakteri kullanılır)
***, +, ?, ^, $, [, ], \: Özel anlamları olduğu için literal olarak kullanmak için kaçış karakteri (`) kullanılır.
*/

//! Gruplandırma ve Alternatifler
