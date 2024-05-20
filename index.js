const div = document.querySelector(".container");
let gridDiv;

function divCreate (){
    for (let i = 0; i < 256; i++){
        gridDiv = document.createElement("div");
        gridDiv.style.cssText = "display: flex; border: 1px solid blue; flex-grow: 1; flex-shrink: 1; min-height: 60px; min-width: 60px; flex-wrap: wrap;";
        div.appendChild(gridDiv);
    }
}

/*function sketchColor(){
    let number = Math.floor(Math.random() * 256);
    gridDiv.setAttribute("style", `background-color: rgb(${number}, ${number}, ${number})`);
}
*/
 divCreate();

 gridDiv.addEventListener("mouseenter", (event) => {
    event.stopPropagation();
    let number1 = Math.floor(Math.random() * 256);
    let number2 = Math.floor(Math.random() * 256);
    let number3 = Math.floor(Math.random() * 256);
    gridDiv.style.cssText += `background-color: rgb(${number1}, ${number2}, ${number3})`;
 });