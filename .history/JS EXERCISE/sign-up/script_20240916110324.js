document.getElementById("myButton").addEventListener("click", function () {
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
    alert("Kayıt başarılı!");
  }
});
