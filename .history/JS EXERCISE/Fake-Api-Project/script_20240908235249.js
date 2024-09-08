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
                const img = product.image;
                if (product) {
                    // Resmi güncelle
                    const imgElement = document.querySelector('.cardImage'); // Sınıfa göre seçim
                    imgElement.src = product.image;
                } else {
                    console.error('Product with ID 1 not found.');
                }
            } .catch (error) {
                console.error('Error fetching product data:', error);
            }

                
            })