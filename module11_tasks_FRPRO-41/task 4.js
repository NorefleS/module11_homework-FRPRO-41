// Задание 4

function getNumbers(start, end) {
    let current = start;
  
    let timer = setInterval(function() {
      console.log(current);
      if (current == end) {
        clearInterval(timer);
      }
      current++;
    }, 1000);
  }
  
  getNumbers(5, 15);