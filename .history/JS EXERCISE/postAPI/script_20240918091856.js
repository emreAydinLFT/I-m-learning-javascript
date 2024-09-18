const URL = 'https://jsonplaceholder.typicode.com/todos'

// const posts = [1,2,3,4]

fetch(URL)
      .then(response => response.json())
      .then(displayResult)
      // .then(json => console.log(json))


const displayResult = (result) => {
    const userId = document.querySelector('.userId')
    title.innerText = `${result.}`
    const title = document.querySelector('.title')
    title.innerText = `${result.title}`
    const post = document.querySelector('.post')
    post.innerText = `${result.post}`
}