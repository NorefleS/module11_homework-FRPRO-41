// Задание 2

function getNumber(number) {
    let t = "Простое число", f = "Число не является простым", none = "Данные не верны";
    
    if (number <= 1 || number > 1000) {
      return none;
    }
    
    m = Math.sqrt(number);
    
    for (let i = 2; i <= m ; i++) {
      if (number % i == 0) {
        return f;
      }
    }
    return t;
  }
  
  console.log(getNumber(67));