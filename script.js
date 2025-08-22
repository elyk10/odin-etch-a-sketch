document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container");

    createGrid(container);

    let button = document.querySelector(".size");

    button.addEventListener("click", () => {
        let gridSize = parseInt(prompt("What size grid would you like?", "Default size = 16"));
        if (gridSize > 100)
            gridSize = 100;
        else if (gridSize < 1)
            gridSize = 1;

        container.replaceChildren();
        
        /*while (container.firstChild)
        {
            container.removeChild(container.lastChild);
        }
*/
        createGrid(container, gridSize);
    });

});


function createGrid(container, size = 4)
{
    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            let child = document.createElement("div");
            child.classList.add("block");
            //child.textContent = "Div " + i + " " + j;
            
            let num = 100/size;
            let height = window.innerHeight / size;
            let style = "flex: 1 1 calc(" + num + "% - 4px); height: calc(" + num + "% - 4px);";
            child.setAttribute("style", style);
            // adds class that will change the background colour when mouse enters div
            child.addEventListener("mouseover", () => {
                child.classList.add("hover");
            });

            container.appendChild(child);
        }
    }
}