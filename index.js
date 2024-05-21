const body = document.querySelector("body")
const div = document.querySelector(".container");
const btn = document.createElement("button");
btn.style.cssText = "color: red; background-color: black; font-weight: bold; font-size: 25px; width: 250px; height: 50px; margin: 50px; border-radius: 25px; cursor: pointer;";
btn.innerText = "Resize Grid";
body.appendChild(btn);


function divCreate (){
    

    for (let i = 0; i < 256; i++){
        let gridDiv = document.createElement("div");
        gridDiv.style.cssText = `display: flex;  flex-grow: 1; flex-shrink: 1; min-height: 60px; min-width: 60px; flex-wrap: wrap;`;
        
        div.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", (event) => {
            event.stopPropagation();
            let number1 = Math.floor(Math.random() * 256);
            let number2 = Math.floor(Math.random() * 256);
            let number3 = Math.floor(Math.random() * 256);
            gridDiv.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
        });
    }
    } 



 


 function divCreateCustomGrid (){
    
    let size = Number(window.prompt("Please enter a number between 2 and 100 for you Grid Size"));

    if(size >= 2 && size <= 100){
    let gridSize = (size * size);
    let divSize = (960 / size);
    
   
    for (let i = 0; i < gridSize; i++){
        let gridDiv = document.createElement("div");
        gridDiv.style.cssText = `display: flex;  flex-grow: 1; flex-shrink: 1; min-height: ${divSize}px; min-width: ${divSize}px; flex-wrap: wrap;`;
        
        div.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", (event) => {
            event.stopPropagation();
            let number1 = Math.floor(Math.random() * 256);
            let number2 = Math.floor(Math.random() * 256);
            let number3 = Math.floor(Math.random() * 256);
            gridDiv.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
        });
    }
    } else {
        window.alert("Not a valid Number");
    }

}

function deleteChild() {
    let e = document.querySelector("div"); 
    let child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}



btn.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteChild();
    divCreateCustomGrid();
} );

divCreate();