// API'nin URL'si
const URL = 'https://jsonplaceholder.typicode.com/todos';

// Veri çekme ve işleme
fetch(URL)
  .then(response => response.json())  // Yanıtı JSON formatına dönüştürüyoruz
  .then(todos => {
    // İlk 3 todo'yu göstermek için displayTodos fonksiyonunu çağırıyoruz
    displayTodos(todos.slice(0, 3));  // Sadece ilk 3 todo'yu gösteriyoruz
  });

// Sonuçları ekranda görüntüleme fonksiyonu
const displayTodos = (todos) => {
  // Her bir todo öğesi için döngü
  todos.forEach((todo, index) => {
    // HTML'deki ilgili div'i seçiyoruz (id'ye göre)
    const todoElement = document.getElementById(`todo${index + 1}`);
    
    if (todoElement) {
      // ID öğesini güncelliyoruz
      const idElement = todoElement.querySelector('.id');
      idElement.textContent = `ID: ${todo.id}`;

      const titleElement = todoElement.querySelector('.title');
      titleElement.textContent = `Başlık: ${todo.title}`;

      const completedElement = todoElement.querySelector('.completed');
      completedElement.textContent = `Tamamlandı: ${todo.completed ? 'Evet' : 'Hayır'}`;
    }
  });
};
