const URL = 'https://jsonplaceholder.typicode.com/todos/1';  // Örneğin 1 numaralı todo

// Veri çekme ve işleme
fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ağ yanıtı başarısız: ' + response.statusText);
    }
    return response.json();
  })
  .then(displayResult)
  .catch(error => console.error('Veri alınırken hata oluştu:', error));

// Sonuçları ekranda görüntüleme
const displayResult = (result) => {
    console.log(result);  // Sonuçları konsola yazdırarak doğruluğunu kontrol edin

    const id = document.querySelector('.id');
    const title = document.querySelector('.title');
    const post = document.querySelector('.post');

    if (id && title && post) {
        id.innerText = `ID: ${result.id}`;
        title.innerText = `Başlık: ${result.title}`;
        post.innerText = `Tamamlandı: ${result.completed ? 'Evet' : 'Hayır'}`;
    } else {
        console.error('HTML elemanları bulunamadı.');
    }
};
