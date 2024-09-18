// API'nin URL'si
const URL = 'https://jsonplaceholder.typicode.com/todos';

// Veri çekme ve işleme
fetch(URL)
  .then(response => response.json())  // Yanıtı JSON formatına dönüştürüyoruz
  .then(todos => {
    // İlk 3 todo'yu göstermek için displayTodos fonksiyonunu çağırıyoruz
    displayTodos(todos.slice(0, 3));  // Sadece ilk 3 todo'yu gösteriyoruz
  });


const displayTodos = (todos) => {
  todos.forEach((todo, index) => {
    const todoElement = document.getElementById(`todo${index + 1}`);
    
    if (todoElement) {
      const idElement = todoElement.querySelector('.id');
      idElement.textContent = `ID: ${todo.id}`;

      const titleElement = todoElement.querySelector('.title');
      titleElement.textContent = `Başlık: ${todo.title}`;

      const completedElement = todoElement.querySelector('.completed');
      completedElement.textContent = `Tamamlandı: ${todo.completed ? 'Evet' : 'Hayır'}`;
    }
  });
};