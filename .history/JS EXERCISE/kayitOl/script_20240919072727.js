const checkPasswordStrength = (şifre) => {
    const strengthBar = document.getElementById('strengthBar');
    let strength = 0;

    if (şifre.length >= 8) strength++;
    if (/[A-Z]/.test(şifre)) strength++;
    if (/[a-z]/.test(şifre)) strength++;
    if (/\d/.test(şifre)) strength++;
    if (/[@$!%*#?&]/.test(şifre)) strength++;

    strengthBar.value = strength;
};

const validateEmail = (eposta) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(eposta);
};

const validateForm = () => {
    const adı = document.getElementById('adı').value;
    const soyadı = document.getElementById('soyadı').value;
    const eposta = document.getElementById('eposta').value;
    const epostaTekrar = document.getElementById('epostaTekrar').value;
    const telefon = document.getElementById('telefon').value;
    const şifre = document.getElementById('şifre').value;
    const şifreTekrar = document.getElementById('şifreTekrar').value;

    if (!validateEmail(eposta)) {
        alert('Geçerli bir e-posta adresi girin.');
        return false;
    }

    if (eposta !== epostaTekrar) {
        alert('E-posta adresleri eşleşmiyor.');
        return false;
    }

    if (şifre.length < 8) {
        alert('Şifre en az 8 karakter olmalıdır.');
        return false;
    }

    if (şifre !== şifreTekrar) {
        alert('Şifreler eşleşmiyor.');
        return false;
    }

    return true;
};

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    if (validateForm()) {
        document.getElementById('successMessage').textContent = 'Kayıt başarıyla tamamlandı!';
        
        const formData = {
            adı: document.getElementById('adı').value,
            soyadı: document.getElementById('soyadı').value,
            eposta: document.getElementById('eposta').value,
            telefon: document.getElementById('telefon').value,
            şifre: document.getElementById('şifre').value,
        };

        try {
            const response = await fetch('/success', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = 'success.html'; // Başarılı kayıt sonrası yönlendirme
            } else {
                document.getElementById('successMessage').textContent = 'Kayıt sırasında bir hata oluştu.';
            }
        } catch (error) {
            console.error('Kayıt hatası:', error);
            document.getElementById('successMessage').textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
        }
    }
});

document.getElementById('şifre').addEventListener('input', (event) => {
    checkPasswordStrength(event.target.value);
});

window.onload = () => {
    const savedAdı = localStorage.getItem('adı');
    if (savedAdı) {
        document.getElementById('adı').value = savedAdı;
    }
};
