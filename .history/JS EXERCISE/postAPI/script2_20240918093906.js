// API'nin URL'si
const URL = 'https://jsonplaceholder.typicode.com/todos';

// Veri çekme ve işleme
fetch(URL)
  .then(response => response.json())  // Yanıtı JSON formatına dönüştürüyoruz
  .then(todos => {
    displayTodos(todos);  // JSON verisini displayTodos fonksiyonuna gönderiyoruz
  });

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
