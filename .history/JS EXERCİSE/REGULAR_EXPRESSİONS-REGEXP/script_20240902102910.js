let word = /salak/i   // büyük küçük harfe duyarlılık için
let comment = prompt('yorumunu yaz! ama')

console.log(
    word.test(comment)
)
