let collegename = ["m", "l", "r", "i", "t", "m"], //an array of strings
  regulationcollege = [18, 19, 20], // array of integers
  years = [1, "2nd", 3, "4th"]; //mixed array
console.log(regulationcollege, years, collegename);

let colors = ["red", "orange", "yellow", "ble", "green"];
console.log((colors[3] = "blue")); //modyifying an array

//using the for of statement to accaess all the array elements
for (color of colors) {
  console.log(colors);
}
for (college of collegename) {
  console.log(collegename);
}
//array methods
console.log(colors.reverse()); //reverse the array elements

console.log(colors.concat(collegename)); //combines 2 or more arrays

let s = [5, 6, 8, 3, 4, 0];
console.log(s.sort()); //returns a sorted array

s.push(10); //push one element at last
console.log(s);

s.pop(); //pops the last element
console.log(s);

s.shift(); //removes the first element
console.log(s);

s.unshift(78, 99); //adds the elements to the first of array s
console.log(s);

console.log(s.indexOf(3)); //finds the first index of the element
console.log(s.lastIndexOf(6)); //returns the last index of the element

let rollno = [21, 7, "y", 1, "a", 0, 515];
console.log(rollno.slice(0, 3)); //returns selected elements

//removes/replaces elements
console.log(rollno.splice(5));
