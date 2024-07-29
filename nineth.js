//N.B. async wait >> promise chaining >> callback hell

// function getData(dataId,getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataID);
            resolve("success");
        },3000);
    });
}


//Async-Await
(async function viewData(){
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
})();


//Promise Chain
// console.log("getting data1....");
// getData(1)
// .then((res) => {
//     console.log("getting data2....");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3....");
//     return getData(3);
// })
// .then((res) => {
//     console.log("getting data4....");
//     return getData(4);
// });


// //Callback Hell -> Nested callbacks stacked below one another forming a pyramid structure(Pyramid od Doom)
// getData(1,() => {
//     console.log("Getting data2....");
//     getData(2,() => {
//         console.log("Getting data3....");
//         getData(3,() => {
//             console.log("Getting data4....");
//             getData(4);
//         });
//     });
// });

//Promises -> Promise is for eventual completion of task.It is an object in JS.It is a solution to callback hell.
// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     resolve("Success");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

// const getPromise = () =>{
//     return new Promise((resolve,reject) => {
//             console.log("I am a promise");
//             resolve("Success");
//             //reject("error");
//     });
// };

// let promise =  getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled",res);
// })

// promise.catch((err) => {
//     console.log("error",err);
// })

// function asyncFunction1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data 1");
//             resolve("success");
//         }, 4000);
//     });
// }


// function asyncFunction2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data 2");
//             resolve("success");
//         }, 4000);
//     });
// }


// console.log("Fetching data1....");
// let promise1= asyncFunction1();
// promise1.then((res) => {
//     console.log(res);
//     console.log("Fetching data2....");
//     let promise2= asyncFunction2();
//     promise2.then((res) => {
//         console.log(res);
//     });
// });

