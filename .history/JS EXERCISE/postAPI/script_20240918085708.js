const URL = 'https://jsonplaceholder.typicode.com/todos'
const tittle = docume

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
