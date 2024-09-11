const api = "https://jsonplaceholder.typicode.com/users";

fetch(api)
  .then((response) => response.json())
  .then((json) => console.log(json));
