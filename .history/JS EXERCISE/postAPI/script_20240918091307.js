const URL = 'https://jsonplaceholder.typicode.com/todos'

// const posts = [1,2,3,4]

fetch(URL)
      .then(response => response.json())
      .then(displayResult)
      //.then(json => console.log(json))


const displayResult = (title) => {
    const title = document.querySelector('.title')
    const post = document.querySelector('.post')
}