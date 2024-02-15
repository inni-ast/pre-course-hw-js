// code
const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];
//Удали все нечетные цифры в двухмерном массиве.
//Полученный результат выведи в консоль

function delAddNumbers(array) {
  array.forEach((el) => {
    el.forEach((el, i, arr) => {
      if (el % 2 !== 0) arr.splice(i, 1);
    });
  });
  return array;
}
console.log(delAddNumbers(numbers));
