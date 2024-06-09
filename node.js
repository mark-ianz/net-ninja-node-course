const {names, ages} = require ('./ew');

/* const [pangalan, edad] = ["ian", 19]
console.log(pangalan, edad); */

/* for (let i = 0; i < names.length; i++ ) {
  console.log(names [i] + `'s age is ${ages [i]} years old. ` + (ages [i] >= 18 ? 'Their age is legal.' : 'They are a minor.'));
} */

const os = require ('os');

console.log(os.platform(), os.homedir());