let a = 0,
  b = 1,
  c;
let i = 0;
c = a + b;
console.log(a, b);
for (i = 3; i <= 5; i++) {
  console.log(c);
  a = b;
  b = c;
  c = a + b;
}
