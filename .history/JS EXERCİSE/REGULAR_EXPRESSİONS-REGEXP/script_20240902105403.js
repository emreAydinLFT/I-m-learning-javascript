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


//! \d dizideki sayıları almak için kullanılır.
//! \D dizideki elemanları tek ka