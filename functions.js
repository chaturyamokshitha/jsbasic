//  VERY EASY PROBLEMS USING FUNCTIONS

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function edge(a, b) {
  let c = a + b - 1;
  return c;
}
console.log(edge(10, 1));
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function rem(d, e) {
  let f = d % e;
  return f;
}
console.log(rem(1, 3));
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function sum(n1, n2) {
  if (n1 + n2 < 100) console.log("True");
  else console.log("False");
}
console.log(sum(23, 99));
//Create a function that takes the age in years and returns the age in days.
function age(n) {
  return n * 365;
}
console.log(age(12));
//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function team(x1, x2) {
  return x1 * 2 + x2 * 3;
}
console.log(team(2, 3));
//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
function con(s) {
  return s + "Edabit";
}
console.log(con("mokshitha"));
