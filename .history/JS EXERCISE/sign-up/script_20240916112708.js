// "Kaydol" butonuna tıklandığında çalışacak bir olay dinleyicisi ekliyoruz
document.getElementById("myButton").addEventListener("click", function () {
  checkPassword(); // Parola kontrolü için checkPassword fonksiyonunu çağırıyoruz
});

// Parola input alanına odak kaybedildiğinde (başka bir yere tıklandığında) çalışacak bir olay dinleyicisi ekliyoruz
document.querySelector(".password").addEventListener("blur", function () {
  checkPassword(); // Parola kontrolü için checkPassword fonksiyonunu çağırıyoruz
});

// Parola kontrol fonksiyonunu tanımlıyoruz
function checkPassword() {
  // Parola input alanındaki değeri (kullanıcının girdiği değeri) alıyoruz
  let password = document.querySelector(".password").value; 
  
  // Hata mesajını göstermek için kullanılan paragraf (p) elementini alıyoruz
  let passwordError = document.getElementById("passwordError"); 
  
  // Parola input alanını DOM'dan seçiyoruz, çünkü duruma göre çerçevesini kırmızı yapacağız
  let passwordInput = document.querySelector(".password"); 

  // Parolanın 8 karakterden kısa, 16 karakterden uzun veya tamamen boş olup olmadığını kontrol ediyoruz
  if (password.length < 8 || password.length > 1 || password.trim() === "") {
    // Eğer parola geçerli değilse:
    // Hata mesajını belirliyoruz ve hata mesajını görünür yapıyoruz
    passwordError.textContent = "Parola 8-16 karakter arasında olmalı ve boş olmamalıdır."; 
    passwordError.style.display = 'block'; 
    
    // Ayrıca, input kutusuna "error" sınıfı ekleyerek çerçevesini kırmızı yapıyoruz
    passwordInput.classList.add('error'); 
  } else {
    // Eğer parola geçerli ise:
    // Hata mesajını gizliyoruz (display: none)
    passwordError.style.display = 'none'; 
    
    // Input kutusundan "error" sınıfını kaldırıyoruz, böylece kırmızı çerçeve kayboluyor
    passwordInput.classList.remove('error'); 
  }
}
