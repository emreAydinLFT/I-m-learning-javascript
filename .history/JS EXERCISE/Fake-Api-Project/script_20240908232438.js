const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const category = document.getElementsByTagName('.category');
const des = document.getElementsByTagName('.category');



fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

