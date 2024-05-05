// Задание 1

let arr = [0, 1, 2, 3, 4, 5, null, "a", "b"];
let even = 0, odd = 0, zero = 0;

function countNumbers() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 || typeof arr[i] != "number" ) {
          zero++;
        }
        else if (arr[i] % 2 === 0) {
          even++;
        }
        else {
          odd++;
        }
    }
    
    console.log("Чётных чисел в массиве:" + " " + even);
    console.log("Нечётных чисел в массиве" + " " + odd);
    console.log("Других элементов в массиве:" + " " + zero);
}

countNumbers();