async function fetchProducts() {
    try {
        // API'den ürün verilerini al
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // ID'leri güncelle
        const targetIds = [1, 2, 3, 4, 5,]; // Hangi ID'lere ihtiyacınız varsa ekleyin
        
        // Kartları ekranda oluştur
        const container = document.querySelector('.container');
        container.innerHTML = ''; // Önceki kartları temizle

        targetIds.forEach(targetId => {
            // ID'si targetId olan ürünü bul
            const product = products.find(p => p.id === targetId);
            
            if (product) {
                // Kart HTML'ini oluştur
                const cardHtml = `
                    <div class="card1">
                        <img class="cardImage" src="${product.image}" alt="${product.title}">
                        <h2 class="title">${product.title}</h2>
                        <p class="price">Price: $${product.price}</p>
                        <p class="description">${product.description}</p>
                        <p class="category">Category: ${product.category}</p>
                        <a href="#" class="button">Buy Now</a>
                    </div>
                `;
                
                // Kartı ekrana ekle
                container.innerHTML += cardHtml;
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
