const URL = 'https://jsonplaceholder.typicode.com/todos'
const title = document.querySelector('.title')
const post = document.querySelector('.post')
// const posts = [1,2,3,4]

fetch(URL)
      .then(response => response.json())
      .then(json => console.log(json))

const getResults = (title) => {
    let result = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(result)
    .then(response => response.json()
);
}
