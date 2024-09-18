const URL = 'https://jsonplaceholder.typicode.com/todos'
const title = document.querySelector('.title')
const post = document.querySelector('.post')
const posts = [1,2]

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

      
