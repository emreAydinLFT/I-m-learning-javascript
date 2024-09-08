document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://fakestoreapi.com/products';
    const targetIds = [2, 3, 4];

    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            targetIds.forEach(id => {
                const product = products.find(p => p.id === id);
                if (product) {
                    // Get the HTML elements
                    const img = document.querySelector(`#product-${id} .cardImage`);
                    const title = document.querySelector(`#product-${id} .title`);
                    const price = document.querySelector(`#product-${id} .price`);
                    const description = document.querySelector(`#product-${id} .description`);
                    const category = document.querySelector(`#product-${id} .category`);

                    // Update the elements with product data
                    img.src = product.image;
                    title.textContent = product.title;
                    price.textContent = `Price: $${product.price.toFixed(2)}`;
                    description.textContent = product.description;
                    category.textContent = `Category: ${product.category}`;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});
