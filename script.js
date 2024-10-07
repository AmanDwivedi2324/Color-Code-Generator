let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let content = document.querySelector(".content p");
let body = document.querySelector("body");

let color1 = "#004773";
let color2 = "#54d542";

button1.addEventListener("click",handleButton1);
button2.addEventListener("click",handleButton2);

function getColor(){
    let hexCode = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6;i++){
        color += hexCode[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

function handleButton1(){
     color1 = getColor();
    button1.textContent = color1;
    content.innerHTML = `background-image: linear-gradient(to right, ${color1} , ${color2})`;
    body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
}


function handleButton2(){
     color2 = getColor();
    button2.innerHTML = color2;
    content.textContent = `background-image: linear-gradient(to right, ${color1} , ${color2})`;
    body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
}


// to copy text 

content.addEventListener("click",()=>{
    navigator.clipboard.writeText(content.innerText);
    alert("Code copied..");
})