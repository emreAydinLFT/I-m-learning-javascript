const URL = 'https://jsonplaceholder.typicode.com/todos'

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

      
