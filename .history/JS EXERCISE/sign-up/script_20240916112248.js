document.getElementById("myButton").addEventListener("click", function () {
  checkPassword(); // Parola doğrulama fonksiyonunu çağır
});

document.querySelector(".password").addEventListener("blur", function () {
  checkPassword(); // Parola alanı odak kaybı (blur) olduğunda parola doğrulama
});

function checkPassword() {
  let password = document.querySelector(".password").value; 
  let passwordError = document.getElementById("passwordError"); 
  let passwordInput = document.querySelector(".password"); 

  if (password.length < 8 || password.length > 16 || password.trim() === "") {
    passwordError.textContent = "Parola 8-16 karakter arasında olmalı ve boş olmamalıdır.";
    passwordError.style.display = 'block';
    passwordInput.classList.add('error');
  } else {
    passwordError.style.display = 'none';
    passwordInput.classList.remove('error');
  }
}
