const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



// const getFacts = async () => {
//     console.log("getting facts....");
//     let response = await fetch(URL);
//     console.log(response); //JSON format
//     let data = await response.json(); //To make the data readable
//     factPara.innerText=data[1].text;
// }

function getFacts(){
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;
    })
}
btn.addEventListener("click",getFacts);

/* 1.HTTP Verbs
   2.Response Status Codes
   3.Header -> Additional Information */