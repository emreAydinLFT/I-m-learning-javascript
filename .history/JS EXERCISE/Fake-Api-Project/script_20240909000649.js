async function fetchProducts() {
    try {
        // API'den ürün verilerini al
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // ID'leri güncelle
        const targetIds = [1, 2, 3, 4]; // Hangi ID'lere ihtiyacınız varsa ekleyin
        
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
                if (imgElement) imgElement.src = product.image;
                if (titleElement) titleElement.textContent = product.title;
                if (priceElement) priceElement.textContent = `Price: $${product.price}`;
                if (descriptionElement) descriptionElement.textContent = product.description;
                if (categoryElement) categoryElement.textContent = `Category: ${product.category}`;
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








