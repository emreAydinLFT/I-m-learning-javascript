async function fetchProduct() {
    try {
        // API'den ürün verilerini al
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // ID'si 1 olan ürünü bul
        const targetId = 1;
        const product = products.find(p => p.id === targetId);

        if (product) {
            // HTML elemanlarını seç
       

            // Ürün bilgilerini güncelle
            imgElement.src = product.image;
            titleElement.textContent = product.title;
            priceElement.textContent = `Price: $${product.price}`;
            descriptionElement.textContent = product.description;
            categoryElement.textContent = `Category: ${product.category}`;
        } else {
            console.error('Product with ID 1 not found.');
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Sayfa yüklendiğinde fetchProduct() fonksiyonunu çağır
window.onload = fetchProduct;


