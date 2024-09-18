const URL = 'https://jsonplaceholder.typicode.com/todos/1'  // 1 numaralı todo için

fetch(URL)
  .then(response => response.json())
  .then(displayResult)   // Sonuçları displayResult'a geçiriyoruz
  .catch(error => console.error('Veri alınırken hata oluştu:', error));

const displayResult = (result) => {
    const id = document.querySelector('.id');
    id.innerText = `ID: ${result.id}`;

    const title = document.querySelector('.title');
    title.innerText = `Başlık: ${result.title}`;

    const completed = document.querySelector('.post');
    completed.innerText = `Tamamlandı: ${result.completed ? 'Evet' : 'Hayır'}`;  // post yerine completed alanı kullanıldı
};
