

    let password1 = document.querySelector(".password1").value;
    let password2 = document.querySelector(".password2").value;
    let email1 = document.querySelector(".email1");
    let email2 = document.querySelector(".email2");
    let button1 = document.querySelector(".button");
    // Formun varsayılan gönderim davranışını engelle
    // parolanın uzunluğu max = 16, min = 8
    //parolaların ikiside aynı olmalı
    // olmadığı taktirde pop up açılıp eksik olan bütün şartları söyleyecek.
 
// Butona tıklama olayını dinliyoruz
button1.addEventListener('click', function() {
    // Butona tıklandığında yapılacak işlemler
    messageDiv.textContent = 'Butona tıklandı!';
});