//call back functions:
//1.ForEach
//2.Map
//3.Filter
//4.Reduce
//5.Some
//6.Every

//every callback method
const names=['mokshitha','deekshitha','akshitha','harshitha','haritha'];
names.every(name=>{
return names.length===9;
});
//some callback method
names.some(nam=>{
    return names.length>9;
});
//filter callback method
const nums=[1,2,4,5,6,7,8,9,10];
nums.filter(num=>{
    return num%2==0;
})
const words=['bag','lag','baa','hat','hell','hot'];
words.filter(word=>{
    return word.length===3;
})
//find call back method
let colleges=['mlritm','mlrit','cmr','iare','vnr'];
colleges.find(college=>{
    return college.includes('m');
})
let palindrome=[121,333,414,727];
palindrome.find(pali=>{
    return pali.includes('2');
})
//map call back method
let caps=['abcd','efgh','hijk'];
const smalls=console.log(caps.map(se));
function se(se){

  return se.toUpperCase();
}
let sm=[1,2,3,4,5];
let lm=console.log(sm.map(large=>{
    return large>5;
}))
//for each method
const sq=[1,2,3,4,5,6,7];
console.log(sq.forEach(function(numb){
console.log(numb*numb);
}));

