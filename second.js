//Arithmetic Operators

//1.Binary Operators
let a = 5;
let b = 2;
// console.log("Sum = ",a+b);
// console.log("Difference = ",a-b);
// console.log("Product = ",a*b);
// console.log("Division = ",a/b);
// console.log("Remainder = ",a%b);
// console.log(a," to the power ",b," = ",a**b);

//2.Unary Operators
console.log("a = ", a," & b = ", b);
// a++; //a=a+1 
// console.log(a);//6
// a--; //a=a-1
// console.log(a);//5
// console.log("++a = ",++a);//Pre Increment(6) 
// console.log("a++ = ",a++);//Post Increment(6)
// console.log(a);//7
// console.log("--a = ",--a);//Pre Decrement(6)
// console.log("a-- = ",a--);//Post Decrement(6)
// console.log(a);//5

//Assignment Operators

// a += 4;
// console.log("a = ",a);
// a -= 4;
// console.log("a = ",a);

//Comparison Operators

//Equal to operator(==)
// console.log("a == b",a==b);//false
// //Not equal to operator(!=)
// console.log("a != b",a!=b);//true
// let c = "5";
// console.log("c = ",c);
// console.log("a == c",a==c);//Returns true which is actually not the result
// //Equal to & type operator(===)
// console.log("a === c",a===c);//Returns true only if the type and value both match
// //Not equal to & type operator(!==)
// console.log("a !== b",a!==b);

//Logical Operators(Returns true or false)

/*1.Logical AND(&&)
  2.Logical OR(||)
  3.Logical NOT(!) */

//Conditional Statements

//1.if-else statement
// let num = 10;
// if(num % 2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }
//2.Ternary Operator(compact if-else)
// let age = 20;
// let res = age > 18 ? "Eleigible to vote":"Not eligible to vote";
// console.log(res);

//Practice set 1
// let n = prompt("Enter a number : ");
// if (n % 5 === 0){
//   console.log(n,"is a multiple of 5");
// } else {
//   console.log(n,"is not a multiple of 5");
// }

//Practice set 2
let score = prompt("Enter the score(0-100) : ");
if(score >= 80 && score <= 100){
  console.log("Student got grade A");
} else if(score >= 70 && score <= 79){
  console.log("Student got grade B");
} else if(score >= 60 && score <= 69){
  console.log("Student got grade C");
} else if(score >= 50 && score <= 59){
  console.log("Student got grade D");
} else{
  console.log("Student got grade F");
}