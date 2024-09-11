// sonunda @gmail.com ile bitmesini istiyoruz
<script>
      function validateForm() {
        var email1 = document.getElementById("email1").value;
        var email2 = document.getElementById("email2").value;
        var parola1 = document.getElementById("parola1").value;
        var parola2 = document.getElementById("parola2").value;
        var errorMessage = document.getElementById("errorMessage");

        var validEmailEnding = "@gmail.com";
        var isValid = true;

        // E-posta kontrolü
        if (!email1.endsWith(validEmailEnding) || !email2.endsWith(validEmailEnding)) {
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

        // Form geçerli değilse gönderilmesini engelle
        if (!isValid) {
          return false;
        }

        errorMessage.textContent = ""; // Hata mesajını temizle
        alert("Form başarıyla doğrulandı!");
      }
 