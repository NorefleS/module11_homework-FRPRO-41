// Задание 3

function func1(num1) {
    return function func2(num2) {
      return num1 + num2;
    }
  }
  
  console.log(func1(5)(6));