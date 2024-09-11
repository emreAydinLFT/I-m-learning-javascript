const APİ = "https://jsonplaceholder.typicode.com/users";

fetch()
  .then((response) => response.json())
  .then((json) => console.log(json));
