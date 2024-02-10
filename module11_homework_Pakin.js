// задание 1
function getArrayInfo(array) {
  array.forEach(item => {
    if (!isNaN(+item)) { 
      if (typeof item === 'number') { 
        if (item === 0) {
          zeroCount++; 
        } else if (item % 2 === 0) {
          evenCount++; 
        } else {
          oddCount++; 
        }
      }else{
        otherCount++;  
      }
    } else {
      NanCount++; 
    }
  })
}

let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let NanCount = 0;
let otherCount = 0;

getArrayInfo([0, 1, 2, 3, 4, '4', 5, null, 6, 7, 8, 8, '9', 10, 'sdfsfd']);
console.log(`zeroCount: ${zeroCount}, evenCount: ${evenCount}, oddCount: ${oddCount}, NanCount: ${NanCount}, otherCount: ${otherCount}`);



// задание 2
function getTypeOfNumber (num) {
  if (num <= 1000) {
      if (num === 0 || num === 1) {
          console.log ('Число "0" или "1" не является ни простым, ни составным.')
      } else {
          let primeNumber = true;
          for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                  primeNumber = false;
                  break;
              }
          }
          console.log (primeNumber ? 'Вы ввели простое число.' : 'Вы ввели составное число.')
      } 
  } else {
      console.log ('Данные неверны.')
  }
}

getTypeOfNumber (4);



// задание 3
function getSum (num1) {
  return function internalFunc (num2) {
    return num1+num2
  }
}

const resultSum = getSum (2);
console.log (resultSum (5));



// задание 4
function getNumber (num1, num2) {
  let currentNumber = num1;
  let intervalId = setInterval (function () {
    console.log (currentNumber)
    currentNumber++
  if (currentNumber > num2) {
    clearInterval (intervalId)
  }
}, 1000)
}

getNumber (5, 15);



// задание 5
const degree = (x, n) => Math.pow (x, n);
console.log (degree(2, 3));