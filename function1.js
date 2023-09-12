//EASY PROBLEMS USING FUNCTIONS
//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
function christmas(date) {
  let date1 = new Date("12/25/2023");
  if (date === date1) return true;
  else return false;
}
console.log(christmas(new Date("12/25/2014")));

//Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
//If f returns the larger number, return the string f.
//If g returns the larger number, return the string g.
//If the functions return the same number, return the string neither.
function WhichIsLarger(f, g) {
  if (f() < g()) return "g";
  else if (f() > g()) return "f";
  else return "neither";
}

//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
//matchHouses(1) ➞ 6
//matchHouses(4) ➞ 21

function matchHouses(step) {
  return 0 ? step == 0 : 5 * step + 1;
}
console.log(matchHouses(4));

//Create a function that calculates the number of different squares in an n * n square grid.
//If n = 0 then the number of squares is 0
//If n = 1 then the number of squares is 1 + 0 = 1
//If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
//If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
function square(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = i * i + result;
  }
  return result;
}
console.log(square(3));

//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
//To illustrate:
//largestSwap(27) ➞ false
//largestSwap(43) ➞ true
function largestSwap(num) {
  const n1 = num.toString();
  const n2 = n1.split("");
  const n3 = n2.reverse();
  const n4 = n3.join("");
  return num > n4 ? true : false;
}
console.log(largestSwap(27));
//Create a function that returns true if the first array can be nested inside the second and false otherwise.
//arr1 can be nested inside arr2 if:
//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.
function nexted(arr1, arr2) {
  const min1 = Math.min(...arr1);
  const min2 = Math.min(...arr2);
  const max1 = Math.max(...arr1);
  const max2 = Math.max(...arr2);
  return min1 > min2 ? (max1 < max2 ? true : false) : false;
}
console.log(nexted([1, 2, 3, 4], [0, 6]));
//Create a function that will take a HEX number and returns the binary equivalent (as a string).
function toBinary(num) {
  return num.toString(2);
}
console.log(toBinary(15));

//Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
function base(decimal) {
  return decimal.toString(2);
}
console.log(base(5));
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minmax(array) {
  let m = Math.min(...array);
  let M = Math.max(...array);
  return [m, M];
}
console.log(minmax([25, 36, 76, 89]));
//Create a function that takes two arrays and insert the second array in the middle of the first array.
function tuckin(brr, brr1) {
  let t = brr;
  let t1 = brr1;
  return `${t[0]},${t1},${t[1]}`;
}
console.log(tuckin([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
