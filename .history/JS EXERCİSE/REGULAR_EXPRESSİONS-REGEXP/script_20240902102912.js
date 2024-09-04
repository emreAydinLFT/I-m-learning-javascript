let word = /salak/i   // büyük küçük harfe duyarlılık için
let comment = prompt('yorumunu yaz! ama yazarken di')

console.log(
    word.test(comment)
)
