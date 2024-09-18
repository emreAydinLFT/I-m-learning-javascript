fetch('https://jsonplaceholder.typicode.com/todo')
      .then(response => response.json())
      .then(json => console.log(json))