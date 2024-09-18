// API'nin URL'si
const URL = 'https://jsonplaceholder.typicode.com/todos';

// Asenkron fonksiyon ile veri çekme ve işleme
const fetchTodos = async () => {
    try {
        // API'ye istek gönderiyoruz
        const response = await fetch(URL);

        // API'den dönen yanıtın başarılı olup olmadığını kontrol ediyoruz
        if (!response.ok) {
            throw new Error('Ağ yanıtı başarısız: ' + response.statusText);
        }

        // Yanıtı JSON formatına dönüştürüyoruz
        const todos = await response.json();

        // Verileri ekranda göstermek için `displayTodos` fonksiyonunu çağırıyoruz
        displayTodos(todos);
    } catch (error) {
        // Hata olursa buraya düşer ve konsola yazdırılır
        console.error('Veri alınırken hata oluştu:', error);
    }
};

// Sonuçları ekranda görüntüleme fonksiyonu
const displayTodos = (todos) => {
    // Container elemanını seçiyoruz
    const container = document.querySelector('.container');
    container.innerHTML = '';  // Önceki içeriği temizliyoruz

    // Her bir todo öğesi için döngü
    todos.forEach(todo => {
        // Yeni bir div oluşturup içeriği ekliyoruz
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');
        
        // İçeriği todo öğesinin ID, başlık ve tamamlanma durumu ile dolduruyoruz
        todoElement.innerHTML = `
            <h2>ID: ${todo.id}</h2>
            <p>Başlık: ${todo.title}</p>
            <p>Tamamlandı: ${todo.completed ? 'Evet' : 'Hayır'}</p>
        `;
        
        // Oluşturduğumuz div'i container'a ekliyoruz
        container.appendChild(todoElement);
    });
};

// Sayfa yüklendiğinde fetchTodos fonksiyonunu çağırıyoruz
fetchTodos();
