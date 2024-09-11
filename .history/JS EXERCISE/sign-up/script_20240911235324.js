

    let password1 = document.querySelector(".password1").value;
    let password2 = document.querySelector(".password2").value;
    let email1 = document.querySelector(".email1");
    let email2 = document.querySelector(".email2");
    const myButton = document.getElementById("myButton");
    // parolanın uzunluğu max = 16, min = 8
    //parolaların ikiside aynı olmalı
    // olmadığı taktirde pop up açılıp eksik olan bütün şartları söyleyecek.
 
// Butona tıklama olayını dinliyoruz
myButton.addEventListener('click', function() {
    // Butona tıklandığında yapılacak işlemler
    if (password1.length > 8 && password1.length < 16) {
        alert("Parolanız uygundur");
    } else {
        alert("Parolanız uygun değil.");
    }

    // Şifre alanını sıfırla (temizle)
    password1.value = "";
});