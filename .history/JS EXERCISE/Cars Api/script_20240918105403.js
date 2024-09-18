const URL = 'https://private-anon-b1ad52f5a2-carsapi1.apiary-mock.com/manufacturers'


fetch(URL)
  .then((response) => response.json())
  .then((carr) => {
    displayCarr(carr.slice(0, 3));
  });