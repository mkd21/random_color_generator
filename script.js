// console.log("js is connected..");


let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");

let letters = "0123456789ABCDEF";

let color = "#";

function getRandomColor(event)
{
    let targetDiv = event.target;

    let color = "#";
    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    targetDiv.style.backgroundColor = color;
}

b1.addEventListener("click" , getRandomColor);
b2.addEventListener("click" , getRandomColor);
b3.addEventListener("click" , getRandomColor);
b4.addEventListener("click" , getRandomColor);
b5.addEventListener("click" , getRandomColor);