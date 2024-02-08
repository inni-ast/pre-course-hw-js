// code
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
const copyMan = { ...passportWithAddress };
copyMan.address = { ...passportWithAddress.address };
copyMan.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(copyMan.address.city);
