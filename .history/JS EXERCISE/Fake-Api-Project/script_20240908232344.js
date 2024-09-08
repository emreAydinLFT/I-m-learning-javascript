const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.title');



fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

