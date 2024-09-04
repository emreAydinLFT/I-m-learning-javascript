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
    string.match(/love/ig) // g komutu string de kaç tane love geçiyor ise getirir.
    //string.search(/love/ig) //search metodu ise love ın kaçıncı indexte geçtiğini söyletir.
)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

