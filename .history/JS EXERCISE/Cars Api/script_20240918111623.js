const URL = 'https://private-anon-b1ad52f5a2-carsapi1.apiary-mock.com/manufacturers';

fetch(URL)
  .then((response) => response.json())
  .then((cars) => {
    displayCars(cars.slice(0, 3));
  });

const displayCars = (cars) => {
  cars.forEach((car, index) => {
    const carElement = document.getElementById(`car${index + 1}`);

    if (carElement) {
      // Resim öğesini güncelleme (src olarak ayarlama)
      const img = carElement.querySelector(".img");
      img.src = car.img; 

      // Araç adını güncelleme
      const name = carElement.querySelector(".name");
      name.textContent = car.name;

      // Araç hızını güncelleme
      const avg_horsepower = carElement.querySelector(".hiz"); 
      avg_horsepower.textContent = `Hız: ${car.hiz}`;
    }
  });
};
