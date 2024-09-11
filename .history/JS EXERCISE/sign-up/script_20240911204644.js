document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    var email1 = document.getElementById("email1");
    var email2 = document.getElementById("email2");
    var parola1 = document.getElementById("parola1");
    var parola2 = document.getElementById("parola2");
    var phone = document.getElementById("phone");
    var countries = document.getElementById("countries");

    var email1Error = document.getElementById("email1Error");
    var email2Error = document.getElementById("email2Error");
    var parola1Error = document.getElementById("parola1Error");
    var parola2Error = document.getElementById("parola2Error");
    var phoneError = document.getElementById("phoneError");
    var countriesError = document.getElementById("countriesError");

    var validEmailEnding = "@gmail.com";
    var isValid = true;

    // Önce tüm inputları varsayılan hale getir (örneğin kırmızı kenarlığı kaldır)
    email1.classList.remove("error");
    email2.classList.remove("error");
    parola1.classList.remove("error");
    parola2.classList.remove("error");
    phone.classList.remove("error");
    countries.classList.remove("error");

    email1Error.textContent = "";
    email2Error.textContent = "";
    parola1Error.textContent = "";
    parola2Error.textContent = "";
    phoneError.textContent = "";
    countriesError.textContent = "";

    // Boş alanları kontrol et
    if (email1.value === "" || email2.value === "" || parola1.value === "" || parola2.value === "" || phone.value === "" || countries.value === "") {
        if (email1.value === "") email1Error.textContent = "E-posta adresi gerekli.";
        if (email2.value === "") email2Error.textContent = "E-posta adresi (tekrar) gerekli.";
        if (parola1.value === "") parola1Error.textContent = "Parola gerekli.";
        if (parola2.value === "") parola2Error.textContent = "Parola (tekrar) gerekli.";
        if (phone.value === "") phoneError.textContent = "Telefon numarası gerekli.";
        if (countries.value === "") countriesError.textContent = "Ülke seçimi gerekli.";
        return false;
    }

    // E-posta kontrolü
    if (!email1.value.endsWith(validEmailEnding) || !email2.value.endsWith(validEmailEnding)) {
        email1.classList.add("error");
        email2.classList.add("error");
        email1Error.textContent = "E-posta adresiniz '@gmail.com' ile bitmeli.";
        email2Error.textContent = "E-posta adresiniz '@gmail.com' ile bitmeli.";
        isValid = false;
    } else if (email1.value !== email2.value) {
        email1.classList.add("error");
        email2.classList.add("error");
        email1Error.textContent = "E-posta adresleri eşleşmiyor.";
        email2Error.textContent = "E-posta adresleri eşleşmiyor.";
        isValid = false;
    }

    // Parola kontrolü
    if (parola1.value.length > 16) {
        parola1.classList.add("error");
        parola2.classList.add("error");
        parola1Error.textContent = "Parola en fazla 16 karakter olmalı.";
        parola2Error.textContent = "Parola en fazla 16 karakter olmalı.";
        isValid = false;
    } else if (parola1.value !== parola2.value) {
        parola1.classList.add("error");
        parola2.classList.add("error");
        parola1Error.textContent = "Parolalar eşleşmiyor.";
        parola2Error.textContent = "Parolalar eşleşmiyor.";
        isValid = false;
    }

    // Telefon numarası kontrolü
    var phonePattern = /^[5]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add("error");
        phoneError.textContent = "Telefon formatı '5XX-XXX-XXXX' şeklinde olmalı.";
        isValid = false;
    }

    // Form geçerli değilse hata mesajı göster ve işlemi durdur
    if (!isValid) {
        return false;
    }

    // Eğer tüm doğrulamalar başarılıysa
    alert("Form başarıyla doğrulandı!");
});
