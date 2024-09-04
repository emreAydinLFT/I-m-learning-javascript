localStorage.setItem('name', 'Emre' );
const names = ['emre', 'ahmet', 'mert'];
const user = {
    name : 'emre',
    surname : 'aydın'
}
localStorage.removeItem('names'); //names dizisini siler
localStorage.clear();   //hepsi

console.log(localStorage.getItem('name'))