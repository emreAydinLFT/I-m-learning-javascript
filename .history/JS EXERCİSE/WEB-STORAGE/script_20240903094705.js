localStorage.setItem('name', 'Emre' );
const names = ['emre', 'ahmet', 'mert'];
const user = {
    name : 'emre',
    surname : 'aydın'
}
localStorage.removeItem('names'); //name 
localStorage.clear();

console.log(localStorage.getItem('name'))