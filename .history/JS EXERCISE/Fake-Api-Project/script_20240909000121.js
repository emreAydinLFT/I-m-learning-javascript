async function fetchProducts() {
    try {
        // API'den ürün verilerini al
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // ID'leri güncelle
        const targetIds = [1, 2];
        
        targetIds.forEach(targetId => {
            // ID'si targetId olan ürünü bul
            const product = products.find(p => p.id === targetId);
            
            if (product) {
                // HTML elemanlarını seç
                const imgElement = document.querySelector(`#product-${targetId} .cardImage`);
                const titleElement = document.querySelector(`#product-${targetId} .title`);
                const priceElement = document.querySelector(`#product-${targetId} .price`);
                const descriptionElement = document.querySelector(`#product-${targetId} .description`);
                const categoryElement = document.querySelector(`#product-${targetId} .category`);

                // Ürün bilgilerini güncelle
                imgElement.src = product.image;
                titleElement.textContent = product.title;
                priceElement.textContent = `Price: $${product.price}`;
                descriptionElement.textContent = product.description;
                categoryElement.textContent = `Category: ${product.category}`;
            } else {
                console.error(`Product with ID ${targetId} not found.`);
            }
        });
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Sayfa yüklendiğinde fetchProducts() fonksiyonunu çağır
window.onload = fetchProducts;
