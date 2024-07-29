// const student = {
//     name : "Akash Sen",
//     age : 23,
//     marks : 90,
//     printMarks : function () {
//         console.log("Marks = ",this.marks); //this.marks -> student.marks
//     }
// };

//JS objects have a special property , known as Prototype.
/* If objects and prototype have same method, object's method will be used */

// const employee = {
//     calcTax1() {
//         console.log("Tax rate is 10%");
//     },
//     calcTax2 : function () {
//         console.log("This is tax 2");
//     }
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax1() {
//         console.log("Tax rate is 20%");
//     }
// };

// const emp2 = {
//     salary : 40000,
// };

// const emp3 = {
//     salary : 60000,
// };

// const emp4 = {
//     salary : 70000,
// };

// karanArjun.__proto__ = employee;
// emp2.__proto__ = employee;
// emp3.__proto__ = employee;
// emp4.__proto__ = employee;

class Toyota {
    constructor (brand,mileage) {
        console.log("Created new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }

    setBrand (brand) {
        this.brand = brand;
    }
}

let fortuner =  new Toyota("Fortuner",10);
console.log(fortuner);
let lexus =  new Toyota("Lexus",12);
console.log(lexus);
fortuner.setBrand("fortuner");