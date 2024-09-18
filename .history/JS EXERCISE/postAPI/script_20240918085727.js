const URL = 'https://jsonplaceholder.typicode.com/todos'
const title = document.querySelector('.title')

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
