const test = callback => {
    setTimeout(() => {
        callback('Hata Olu');
    }, timeout);
}