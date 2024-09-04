const test = callback => {
    setTimeout(() => {
        callback('Hata Oluştu!');
    }, 2000);
}

const callback = (err, data) => {
    if (err) {}
};