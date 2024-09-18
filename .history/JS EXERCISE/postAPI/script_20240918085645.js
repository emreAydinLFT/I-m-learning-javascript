const URL = 'https://jsonplaceholder.typicode.com/todos'
const 

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
