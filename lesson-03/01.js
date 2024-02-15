// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(array) {
  return array
    .filter((el) => el === "черный" || el === "красный" || el === "желтый")
    .join("-");
}

console.log(createColorString(colors));
