const img = document.getElementsByTagName('.cardImage');
const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const description = document.getElementsByTagName('.description');
const category = document.getElementsByTagName('.category');





fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then((data) => {
                const img = data.conversion_rates.USD;
                setData(USD, TRY);
            })