//DOM -> Document Object Model -> A way to access the html elements in a JS program
//Window -> Document -> HTML

/* Get elements by ID */
// let heading = document.getElementById("heading1"); //h1
// console.dir(heading);


/* Get elements by Class */
// let headingClass = document.getElementsByClassName("heading");
// console.dir(headingClass);
// console.log(headingClass);


/* Get elements by Tags */
// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);


/* Query Selector */
// let firstElement = document.querySelector("p"); //Returns the first element
// let firstClassElement = document.querySelector(".heading"); //Accessing class element
// let firstIdElement = document.querySelector("#myId"); //Accessing id element
// console.dir(firstElement);
// console.dir(firstClassElement);
// console.dir(firstIdElement);

/* Query SelectorAll -> Returns nodelist */
// let elements =document.querySelectorAll("p");
// console.dir(elements);


/* Practice Set 1 */
// let h2 = document.querySelector("h2");
// console.log("Before appending -> ",h2.innerText);
// h2.innerText += " from Apna College students";
// console.log("After appending -> ",h2.innerText);

/* Practice Set 2 */
// let divs = document.querySelectorAll(".box");
// console.dir(divs);
// let idx=1;
// for(let div of divs){
//     div.innerText = `New unique value ${idx}`;
//     //console.log(div.innerText);
//     idx++;
// }



//firstChild property
// const p01 = document.getElementById("para-01");
// console.log(p01.firstChild.nodeName);
//Any whitespace will create a #text node, from a single space to multiple spaces, returns, tabs, and so on.


//lastChild property
// const tr = document.getElementById("para-01");
// const corner_td = tr.lastChild;
// console.log(corner_td);
//Note: This property returns any type of node that is the last child of this one. It may be a Text or a Comment node.

// const box = document.querySelector("body");
// console.log(box.firstChild);
// while (box.firstChild) {
//     // The list is LIVE so it will re-index each call
//     box.removeChild(box.firstChild);
//   }
// console.log(box.firstChild);