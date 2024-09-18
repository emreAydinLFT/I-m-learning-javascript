const URL = 'https://private-anon-b1ad52f5a2-carsapi1.apiary-mock.com/manufacturers'


fetch(URL)
  .then((response) => response.json())
  .then((cars) => {
    displayCars(cars.slice(0, 3));
  });

  const cars = fetch(URL).then((response) => response.json()