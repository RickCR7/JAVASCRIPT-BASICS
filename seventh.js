// let btn1 = document.querySelector("#btn1");

// //addEventListener
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler4");
// });

//removeEventListener
// btn1.removeEventListener("click",handler3);


//Practice Set 1
let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

let div = document.querySelector("div");
let currColor = "green";
modeBtn.addEventListener("mouseover",() =>{
    div.classList.add("red");
    div.classList.remove("green");
});
modeBtn.addEventListener("dblclick",() => {
    div.classList.add("green");
    div.classList.remove("red");
});