//Sum function
// function sum(x,y){
//     s = x + y;
//     return s;
// }
// sum(3,4);
// console.log(`Sum of 3 and 4 is ${s}`);

//Multiplication Function
// function mul(a , b){
//     return a * b;
// }

// console.log(mul(3,4));

//Arrow Function -> Compact way of writing a function
// const arrowSum = (a , b) => {
//     console.log(a+b);
// }
// arrowSum(10,20);

// const arrowMul = (a , b) => {
//     console.log(a*b);
// }
// arrowMul(10,20);

//Practice Set 1
// function countVowels(str){
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let val of str){
//         if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' || val === 'A' || val === 'E' || val === 'I' || val === 'O' || val === 'U'){
//             count++;
//         }
//     }
//     return count;
// }
// let res = countVowels("Akash Sen");
// console.log(res);


//Practice Set 2
// const countVow = (str) => {
//     let count = 0;
//     for(let val of str){
//         if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' || val === 'A' || val === 'E' || val === 'I' || val === 'O' || val === 'U'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVow("Priyanka"));

//for-each loop
//Practice Set 3
//let arr = [1,2,3,4,5];
// arr.forEach(element => {
//     console.log(`Square of ${element} is ${element**2}`);
// });

                                            /*Alternative Method*/

// let calSquare = (element) => {
//     console.log(element**2);
// };

// arr.forEach(calSquare);


//Map function creates a new array whereas forEach only performs some operation on the given array
// let num = [67,52,34];
// let newArr = num.map((val) => {
//     return val**3;
// });
// console.log(newArr);

//Filter Method -> Used to filter the elements of array based on some conditions
// let evenArray = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArray);

//Reduce Method -> Performs some operations and reduces the array to a single value.It returns the single value
// const output = arr.reduce((res,curr) => {
//     return res+curr;
// })
// console.log(output);

//Find the largest element of an array
// const largest = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(largest);

//Practice Set 4
// let marks = [97,64,32,49,99,96,86];
// let topMarks = marks.filter((val) => {
//     return val > 90;
// })
// console.log(topMarks);


//Practice Set 5
let n =  prompt("Enter the number : ");
let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);
let sum  = arr.reduce((res,curr) => {
    return res+curr;
})
console.log(`Sum of the elements in the array is ${sum}`);

let prod = arr.reduce((prev,curr) => {
    return prev*curr;
})
console.log(`Product of the elements in the array is ${prod}`);

//Note: A function that returns a function or takes other functions as arguments is called a higher-order function.