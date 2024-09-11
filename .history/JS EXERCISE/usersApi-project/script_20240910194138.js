const APİ = "https://jsonplaceholder.typicode.com/users";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log()