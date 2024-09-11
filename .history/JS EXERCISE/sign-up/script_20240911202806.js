document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;
    var parola1 = document.getElementById("parola1").value;
    var parola2 = document.getElementById("parola2").value;
    var errorMessage = document.getElementById("errorMessage");

    var validEmailEnding = "@gmail.com";
    var isValid = true;

    // E-posta kontrolü
    if (
      !email1.endsWith(validEmailEnding) ||
      !email2.endsWith(validEmailEnding)
    ) {
      errorMessage.textContent = "E-posta adresiniz '@gmail.com' ile bitmeli.";
      isValid = false;
    } else if (email1 !== email2) {
      errorMessage.textContent = "E-posta adresleri eşleşmiyor.";
      isValid = false;
    }

    // Parola kontrolü
    if (parola1.length > 16) {
      errorMessage.textContent = "Parola en fazla 16 karakter olmalı.";
      isValid = false;
    } else if (parola1 !== parola2) {
      errorMessage.textContent = "Parolalar eşleşmiyor.";
      isValid = false;
    }

    // Form geçerli değilse hata mesajı göster ve işlemi durdur
    if (!isValid) {
      return false;
    }

    // Eğer tüm doğrulamalar başarılıysa
    errorMessage.textContent = ""; // Hata mesajını temizle
    alert("Form başarıyla doğrulandı!");
    // Burada formu işleyebilirsin, örneğin AJAX ile gönderebilirsin
    // event.target.submit(); // Eğer formu normal olarak göndermek istiyorsan bu satırı ekleyebilirsin
  });
