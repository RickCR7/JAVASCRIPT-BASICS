//Practice Set 1
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let mark of marks){
//     sum += mark;
// }
// let average =  sum/marks.length;
// console.log(`Average marks of the entire class is ${average}`);


//Practice Set 2
// let items = [250,645,300,900,50];
// console.log(`Before applying offer the price of the items are ${items}`);
// for(let i = 0;i < items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(`After applying offer the price of the items are ${items}`);


//Array Methods
// let veggies = ["potato","carrot","onion","beans","spinach"];
// console.log(veggies);
// veggies.push("ginger"); //push() function -> Used to add an item to the end
// console.log(veggies);
// let deletedItem = veggies.pop(); //pop() function -> Used to delete an item from the end and returns the deleted item
// console.log(deletedItem);
// console.log(veggies);
// console.log(veggies.toString());//Returns a new string but doesn't change the original array
// let marvel_heroes = ["Thor","Iron Man","Spider Man","Hulk"];
// let dc_heroes = ["Batman","Superman"];
// let heroes = marvel_heroes.concat(dc_heroes); //Concatenation -> Used to add multiple arrays and returns a new array
// console.log(heroes);
//marvel_heroes.unshift("Ant Man"); //Unshift -> Add to start
//console.log(marvel_heroes);
//let deleted_hero =  marvel_heroes.shift(); //Shift -> Delete from start
// console.log(deleted_hero);
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(1,4)); //Slice -> returns a part of the array but doesn't change the original array
// let arr = [1,2,3,4,5,6,7];
//console.log(arr.splice(2,2,101,102));//Splice(startIdx,delCount,newItem..) -> Used to delete elements from a given index and also replace them with new items
//console.log(arr);

//Only adding element using splice()
//arr.splice(2,0,101);

//Deleting item using splice()
//arr.splice(3,1);


//Practice Set 3
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(`At first the companies are ${companies}`);
let deleteAtFirst = companies.shift();
console.log(`The first company removed from the array is ${deleteAtFirst} `);
companies.splice(1,1,"Ola");
console.log(`After removing Uber and adding Ola in its place the companies are ${companies}`);
companies.push("Amazon");
console.log(`After adding Amazon at the end ,now the companies are ${companies}`);