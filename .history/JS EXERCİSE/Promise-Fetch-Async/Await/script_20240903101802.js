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
// test(callback)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 1500),
    resolve('işlem başarılı')
    reject('işlem başarısız')
});

console.log(promise);