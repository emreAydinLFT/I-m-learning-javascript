const URL = 'https://jsonplaceholder.typicode.com/todos'
const title = document.querySelector('.title')
const post 

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      