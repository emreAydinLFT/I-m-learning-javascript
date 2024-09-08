const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.tit');



fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

