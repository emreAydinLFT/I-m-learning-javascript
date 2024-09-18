const URL = 'https://private-anon-b1ad52f5a2-carsapi1.apiary-mock.com/manufacturers'


fetch(URL)
  .then((response) => response.json())
  .then((cars) => {
    displayCars(cars.slice(0, 3));
  });

  const displayCars = (cars) => {
    cars.forEach((car, index) =>{
        const todoElement = document.getElementById(`car${index + 1}`);

        if (todoElement) {
            const img = todoElement.querySelector(".img");
            img.textContent = `${car.id}`;
      
            const titleElement = todoElement.querySelector(".title");
            titleElement.textContent = `Başlık: ${todo.title}`;
      
            const completedElement = todoElement.querySelector(".completed");
            completedElement.textContent = `Tamamlandı: ${
              todo.completed ? "Evet" : "Hayır"
    })
  };