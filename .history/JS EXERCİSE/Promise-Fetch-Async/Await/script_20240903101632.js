const test = callback => {
    setTimeout(() => {
        callback('Hata Oluştu!', []);
    }, 2000);
}

const callback = (err, data) => {
    if (err) {
        console.log('hata', 'err')
    }else {
        console.log('data', data);
    }
};
test(callback)

const promise = new Promise((resolve, reject) => {
    resolve('işlem başarılı')
    reject
});