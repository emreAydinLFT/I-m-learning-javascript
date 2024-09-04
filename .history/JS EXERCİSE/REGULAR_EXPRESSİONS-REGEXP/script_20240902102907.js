let word = /salak/i   // büyük küçük harfe duyarlılık için
let comment = prompt('yorumunu yaz am')

console.log(
    word.test(comment)
)
