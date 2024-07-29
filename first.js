// fullName = "Tony Stark";
// console.log(fullName);
// age=23;
// console.log(age);
// price=99.99;
// console.log(price);
// x=null;
// console.log(null);
// y=undefined;
// console.log(y);

//let,var and const 
let fullName = "Akash Sen";
var age = 23;
const CGPA = 9.0;
var age = 24;//Re-declaration and updation both possible
var age = 25;
fullName = "Priyanka Chatterjee";//Updation possible but not re-declaration
//CGPA = 8.32;Updation not possible
console.log(fullName);
console.log(age);
console.log(CGPA);
let a;
let b = null;
let c = BigInt(1234);
const dollar = Symbol("$");
let eligibility = false;
//N.B:var was used before year 2015,but after 2015 ES6 came which comes with let and const

//Data Types(Primitive->7 types)
console.log(typeof(age));//Number
console.log(typeof(fullName));//String
console.log(typeof(CGPA));//Number
console.log(a);//Undefined
console.log(typeof(b));//Object but actually a null data type
console.log(typeof(c));//bigint
console.log(typeof(dollar));//symbol
console.log(typeof(eligibility));//boolean

//Non-primitive data types(Objects)
const student = {
    firstName : "Akash",
    lastName : "Sen",
    age : 23,
    SGPA : 8.32,
};
student.age = student.age + 1;
console.log(student.SGPA);
console.log(student.age);

//Practice set 1
const product = {
    productName : "Parker Jotter Standard CT Ball Pen",
    color : "Black",
    rating : "****",
    Deal : true,
    Offer : 5,
    Price : 270,
};
console.log(product);

//Practice set 2
const profile = {
    username : "Akash Sen",
    isFollow : true,
    connections : 7,
    profile_views : 4,

};
console.log(profile);