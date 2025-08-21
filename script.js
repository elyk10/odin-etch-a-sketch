document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container");

    for (let i = 0; i < 16; i++)
    {
        for (let j = 0; j < 16; j++)
        {
            let child = document.createElement("div");
            child.classList.add("block");
            child.textContent = "Div " + i + " " + j;
            child.setAttribute("style", "border: 2px solid black; flex: 1 1 calc(6.25% - 4px);");
            child.addEventListener("mouseover", () => {
                child.classList.add("hover");
            })

            container.appendChild(child);
        }
    }

});