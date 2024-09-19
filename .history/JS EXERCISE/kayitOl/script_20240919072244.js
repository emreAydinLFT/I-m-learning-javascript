// Şifre Güçlendirme Fonksiyonu
// Bu fonksiyon, şifrenin güçlü olup olmadığını analiz eder. 
// Karakter çeşitliliği ve uzunluğu analiz edilerek bir puan hesaplanır.
const checkPasswordStrength = (password) => {
    const strengthBar = document.getElementById('strengthBar');
    let strength = 0;

    // Şifre uzunluğu en az 8 karakterse gücü artır
    if (password.length >= 8) strength++;

    // Şifre büyük harf içeriyorsa gücü artır
    if (/[A-Z]/.test(password)) strength++;

    // Şifre küçük harf içeriyorsa gücü artır
    if (/[a-z]/.test(password)) strength++;

    // Şifre sayı içeriyorsa gücü artır
    if (/\d/.test(password)) strength++;

    // Şifre özel karakter içeriyorsa gücü artır
    if (/[@$!%*#?&]/.test(password)) strength++;

    // Meter elementi ile şifre gücü gösterilir
    strengthBar.value = strength;
};

// E-posta doğrulama fonksiyonu
// Bu fonksiyon, regular expression kullanarak e-posta adresini doğrular.
const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // E-posta geçerliyse true döner
};

// Formun geçerli olup olmadığını kontrol eden fonksiyon
// Form verileri kontrol edilir; eğer geçerliyse true, değilse false döner.
const validateForm = () => {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // E-posta doğrulaması
    if (!validateEmail(emailInput)) {
        alert('Geçerli bir e-posta adresi girin.');
        return false;
    }

    // Şifre uzunluğu kontrolü
    if (passwordInput.length < 8) {
        alert('Şifre en az 8 karakter olmalıdır.');
        return false;
    }

    return true;
};

// Form gönderildiğinde çalışacak olay yönetici
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    if (validateForm()) {
        // Form geçerliyse başarı mesajı gösterilir
        document.getElementById('successMessage').textContent = 'Kayıt başarıyla tamamlandı!';
        
        // Verileri backend'e asenkron olarak gönderme (Fetch API)
        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Verileri JSON formatında gönderiyoruz
            });

            const result = await response.json(); // JSON formatında cevap alıyoruz
            console.log('Kayıt sonucu:', result);

            // Backend'den olumlu yanıt gelirse mesajı güncelle
            if (result.success) {
                document.getElementById('successMessage').textContent = 'Kayıt başarıyla tamamlandı!';
            } else {
                document.getElementById('successMessage').textContent = 'Kayıt sırasında bir hata oluştu.';
            }
        } catch (error) {
            console.error('Form gönderim hatası:', error);
            document.getElementById('successMessage').textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
        }
    }
});

// Şifre gücünü anlık kontrol eden olay yönetici
document.getElementById('password').addEventListener('input', (event) => {
    checkPasswordStrength(event.target.value); // Şifre gücü analiz edilir
});

// LocalStorage Kullanımı
// Kullanıcı adı LocalStorage'a kaydedilir ve sayfa yeniden yüklendiğinde geri yüklenir.
const saveToLocalStorage = () => {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username); // Kullanıcı adını localStorage'a kaydeder
};

// Sayfa yüklendiğinde, eğer LocalStorage'da kayıtlı kullanıcı adı varsa geri yükler.
window.onload = () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
};
