const URL = 'https://private-anon-b1ad52f5a2-carsapi1.apiary-mock.com/manufacturers';

fetch(URL)
  .then((response) => response.json())  // API'den gelen yanıtı JSON formatına dönüştür
  .then((cars) => {
    displayCars(cars.slice(0, 3));  // İlk 3 aracı görüntüle
  });

const displayCars = (cars) => {
  cars.forEach((car, index) => {
    const carElement = document.getElementById(`car${index + 1}`);

    if (carElement) {
      // Resim öğesini güncelleme (src olarak ayarlama)
      const img = carElement.querySelector(".img");
      img.src = car.img; // Resim URL'sini ayarla

      // Araç adını güncelleme
      const name = carElement.querySelector(".name");
      name.textContent = car.name; // Araç adını ayarla

      // Araç hızını güncelleme
      const avg_horsepower = carElement.querySelector(".avg_horsepower");
      avg_horsepower.textContent = `Hız: ${Math.round(car.avg_horsepower)}`; // Hızı yuvarlayarak göster
    }
  });
};
