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
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 1500),
    resolve('işlem başarılı')
    reject('işlem başarısız')
});


promise.then((data) =>{
    console.log(data);
}).catch((err) =>{
    console.log(err);
})
console.log(promise);
*/

const API_URL = 'https://jsonplaceholder.typicode.com/posts'
//console.log(fetch(API_URL));
fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));


//! Async-await

async function getPosts(){
    const response = await fetch(A)
}
    