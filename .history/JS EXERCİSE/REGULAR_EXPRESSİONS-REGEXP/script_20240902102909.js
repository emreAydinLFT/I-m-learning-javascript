let word = /salak/i   // büyük küçük harfe duyarlılık için
let comment = prompt('yorumunu yaz')

console.log(
    word.test(comment)
)
