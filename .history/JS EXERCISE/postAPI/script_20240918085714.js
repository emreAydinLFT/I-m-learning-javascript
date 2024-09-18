const URL = 'https://jsonplaceholder.typicode.com/todos'
const tittle = document.querySelector('.t')

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
