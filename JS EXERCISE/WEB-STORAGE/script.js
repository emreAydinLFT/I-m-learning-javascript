//localStorage.setItem('name', 'Emre' );
//const names = ['emre', 'ahmet', 'mert'];
//const user = {
 //   name : 'emre',
  //  surname : 'aydın'
//}
// localStorage.removeItem('names'); //names dizisini siler
// localStorage.clear();   //hepsini siler

//console.log(localStorage.getItem('name'))

const basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [ 
    {
    id: 1,
    title: 'macbook pro',
    price: 100
    },
    {
    id: 2,
    title: 'macbook pro2',
    price: 200
    },
    {
    id: 1,
    title: 'macbook pro3',
    price: 300
    }
]

function addBasket(producId) {
    basket.push(producId);
    localStorage.setItem('basket', JSON.stringify(basket));
}

function removeBasket(producId) {
    basket.basket.filter(id ===! producId)
}
addBasket(2)
addBasket(3)

console.log(basket);