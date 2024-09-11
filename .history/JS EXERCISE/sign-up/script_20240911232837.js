let password1 = document.querySelector('.password1').value;
let password2 = document.querySelector('.password2').value;
let email1 = document.querySelector('.email1');
let email2 = document.querySelector('.email2');


// parolanın uzunluğu max = 16, min = 8
//parolaların ikiside aynı olmalı
// olmadığı taktirde pop up açılıp eksik olan bütün şartları söyleyecek.
if ( 16 <= password1.length){
    password1.textContent = 'başarılı';
}
