const URL = 'https://jsonplaceholder.typicode.com/todos'
const tittle = document.querySelector('.titl')

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
