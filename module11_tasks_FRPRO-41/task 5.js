// Задание 5

const pow = (x, n) => {
    let result = x;
    
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    
    return result;
  };
  
  console.log(pow(2, 4));
  console.log(pow(5, 5));
  console.log(pow(7, 3));