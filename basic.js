//string methods and other
let a = "mokshitha   ";
let b = "chakradhar";
let c = "    aneena ";
//converting the string into uppercase or lower case
console.log(a.toUpperCase());
console.log(b.toLowerCase());
//triming the extra space given in the input only starting and ending spaces
console.log(c.trim());
//finding the index of the input given starting
let rollno = "217y1a0515";
console.log(rollno.indexOf("217y")); //0
console.log(rollno.indexOf("515")); //7
console.log(rollno.indexOf("6")); //index not found
//slicing is diving the string without modyifying the original string.
let brother = "iloveyoumydearsister  ";
console.log(brother.trim().slice(0, 8) + "chinnu");
//template literals
console.log(`my close friends in college are ${b} and ${c.trim()}`); //my close friends in college are chakradhar and aneena
//replacing a string with another string using replace
let college = "  welcome to college.college is heaven";
console.log(college.replace("heaven", "hell"));
console.log(college.trim().replace("heaven", "living hell"));
//using template literals with various examples
let booksfee = 500,
  tutionfee = 500,
  busfee = 1500;
console.log(
  `the Total college fee is ${
    tutionfee + busfee
  } where booksfee is extra  ${booksfee} `
);
//math object examples(these are the predefined methods in js)
console.log(Math.PI); //returns a pi number
console.log(Math.round(4.99)); //returns a round number to its nearest
console.log(Math.abs(-67)); //returns absolute number
console.log(Math.random() * 10 + 1); //gives a random number from 0-1
console.log(Math.pow(5, 3)); //returns the power of the number in n times
console.log(Math.floor(Math.random() * 10 + 1)); //returns removed decimal
//how to parse strings into numbers
console.log(parseInt("24"));
console.log(parseFloat("3.4768"));
let l = parseInt("35");
let m = parseInt("4");
console.log(l + m);
