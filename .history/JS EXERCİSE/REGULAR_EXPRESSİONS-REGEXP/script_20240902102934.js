let word = /salak/i   // büyük küçük harfe duyarlılık için  i
let comment = prompt('yorumunu yaz! ama yazarken dikkali ol!');

console.log(
    word.test(comment)
)
