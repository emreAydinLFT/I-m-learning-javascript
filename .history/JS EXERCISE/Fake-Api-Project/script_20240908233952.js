const img = document.getElementsByTagName('.cardImage');
const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const description = document.getElementsByTagName('.description');
const category = document.getElementsByTagName('.category');





fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products => {
                const targetId = 1;
                const product = products.find(p => p.id === targetId);
                console.log(product);
                
            })
            .catch(error => console.error('Error:', error));