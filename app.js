//febonacci series
let a = 0, b = 1,c,i;
c = a + b;
console.log(a, b);
for (i = 3; i <= 5; i++) {
  console.log(c);
  a = b;
  b = c;
  c = a + b;
}
//factorial of number 5
let f=1,i;
for(i=1;i<=5;i++){
    f=f*i;
}
console.log(f);

