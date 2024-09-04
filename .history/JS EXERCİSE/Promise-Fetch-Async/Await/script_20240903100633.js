const test = callback => {
    setTimeout(() => {
        callback('Hata Oluştu!');
    }, t);
}