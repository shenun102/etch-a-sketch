const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Loop for creating a grid
for (let i = 0; i < 256; i++) {
  // Creates new div element
  const newDiv = document.createElement("div");
  // Adds the grid and grid-box class names to it
  newDiv.classList.add(`grid`);
  // Alters the size of the border
  newDiv.style.height = "40px";
  newDiv.style.width = "40px";
  // appends it to the container div
  container.appendChild(newDiv);
}
