//spread function and destructing of arrays
let birthdays = ["may-28", "june-12", "july-31", "sep-15", "sep-25"];
const [taruna, mokshitha, chakradhar, ...restofthem] = birthdays;
console.log(taruna, mokshitha, chakradhar, restofthem);

let scores = [120, 110, 100, 90, 80, 70, 60, 50];
let [gold, silver, bronze, ...everyoneelse] = scores;
console.log(everyoneelse);
//just another example
if (scores > 100) {
  let [...gold] = scores;
  console.log(gold);
} else {
  let [...silver] = scores;
  console.log(silver);
}
//spread with object literals
let oxfordschool = {
  schoolname: "oxford",
  address: "brundhavan gardens",
  classes: 10,
  chairman: "cfr",
  rating: 0,
};
let littleflowerschool = {
  schoolname: "littleflower",
  address: "nehrunagar",
  classes: 10,
  rating: 10,
};
const bestschool = { ...oxfordschool, ...littleflowerschool };
console.log(bestschool);

//destructing of objects
let runner = {
  first: "eluid",
  last: "kipchounge",
  contry: "kenya",
  title: "elder one",
};
const { first, last } = runner;
console.log(first, last);

//parameter destructing
const fullname = ({ first, contry, last }) => {
  return `${first}${contry} ${last}`;
};
const run = {
  first: "chaturya",
  last: "mokshitha",
  contry: "india",
  title: "life",
};
console.log(fullname(run));
