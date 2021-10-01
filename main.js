var _ = require('lodash')

console.log(_)

let arr=[1,2,3,4,5]

console.log("answer", _.without(arr,3))

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.querySelector("body");
color1.addEventListener("input",changeBgColor)
color2.addEventListener("input",changeBgColor)

function changeBgColor(){
    body.style.background =`linear-gradient(to right, ${color1.value} ,${color2.value})`;
    document.querySelector('h3').textContent = body.style.background + ";";
}