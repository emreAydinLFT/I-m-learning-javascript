const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const description = document.getElementsByTagName('.description');
const category = document.getElementsByTagName('.category');
const img = document.getElementsByTagName('.a');




fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
