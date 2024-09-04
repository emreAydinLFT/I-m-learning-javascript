function makeCounter() {
    let count = 0;  // Bu değişken, closure içinde tutulacak
  
    return function() {
      count += 1;   // Her çağrıldığında sayacı artırır
      return count;
    };
  }
  
  const counter = makeCounter();
  
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  