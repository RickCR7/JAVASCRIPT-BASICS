//for-of loop
// let str = "Akash Sen";
// for(let val of str){
//     console.log("Value = ",val);
// }

//for-in loop
// const student = {
//     name : "Shaibal Patra",
//     roll : 44,
//     age : 22,
//     CGPA : 8.14
// };
// for(let key in student){
//     console.log("Key = ",key,", Value = ",student[key]);
// }

//Practice Set 1
// for(let n=0; n<=100; n++){
//     if(n % 2 === 0){
//         console.log(n);
//     } else {
//         console.log("Odd Number");
//     }
// }

//Practice Set 2
// let gameNumber = 7;

// user_input = prompt("Guess the game number : ");

// while(user_input != gameNumber){
//     prompt("Wrong Guess!");
//     user_input = prompt("Guess the number again : ");
// }
// console.log("Congratulations!You have entered the correct number.");

//Template Literals
// let sentence = `This is a template literal`;
// console.log(sentence);
// console.log(typeof sentence);//String

//String interpolation
// let obj = {
//     item : "pen",
//     price : 10
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//Escape characters
// console.log("Akash\nSen");
// console.log("Priyanka\tChatterjee");

//String Methods
// let str="ApnaCollege";
// let str1="  This is a string  ";
// let upper = str.toUpperCase();
// let lower = str.toLowerCase();
// console.log(upper);
// console.log(lower);
// console.log(str1.trim());//Removes whitespaces from start and end
// console.log(str.slice(0,4));//Slicing
// let firstName =  "Akash";
// let lastName = " Sen";
// let fullname = firstName.concat(lastName);//Concatenation
// console.log(fullname);

//N.B. In JS , strings are immutable

//Practice Set 3
let fullname = prompt("Enter your fullname without spaces");
let username =  "@"+fullname+fullname.length;
console.log(username);
