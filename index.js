const div = document.querySelector(".container");
let userInput = Number(window.prompt("Please enter a number between 2 and 100 for you Grid Size"));

function divCreate (size){
    if(size >= 2 || size <= 100){
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

/*
nehme user input
loop condition (i) = input * input 
div größe = 960 / input (max 100)
min heigt ${div größe} | min-width ${div größe}


divCreate(user Input)
*/
 divCreate(userInput);

