const URL = 'https://jsonplaceholder.typicode.com/todos/1';  // Örneğin 1 numaralı todo

fetch(URL)
  .then(response => response.json())
  .then(displayResult)
  .catch(error => console.error('Veri alınırken hata oluştu:', error));

const displayResult = (result) => {
    const id = document.querySelector('.id');
    id.innerText = `ID: ${result.id}`;

    const title = document.querySelector('.title');
    title.innerText = `Başlık: ${result.title}`;

    const post = document.querySelector('.post');
    post.innerText = `Tamamlandı: ${result.completed ? 'Evet' : 'Hayır'}`;
};
