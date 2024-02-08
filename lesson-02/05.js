// code
let passport = {
  name: "Petr",
  surname: "Petrov",
};
const copy = Object.assign({}, passport);
copy.name = "Ivan";
console.log(passport.name);
console.log(copy.name);
