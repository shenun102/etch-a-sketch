let gridSize;

// Ask user for grid size
const gridSizeBtn = document.createElement("button");
gridSizeBtn.textContent = `Resize`;
document.body.appendChild(gridSizeBtn);

// Create containerdiv element for grid
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Initial grid
createGrid(16);

gridSizeBtn.addEventListener("click", (e) => {
  gridSize = prompt("Please Enter a grid size");
  // Remove Current grid
  const grid = document.querySelectorAll(".grid");
  grid.forEach((element) => {
    element.remove();
  });
  // Create new grid
  createGrid(gridSize);
});

// Change colour of element when hovering over it

container.addEventListener("mouseover", (e) => {
  console.log(e.target.className);
  if (e.target.className === "grid") {
    gridColour(e.target);
  }
});

// Generates a random number
function randomColour() {
  return Math.floor(Math.random() * 255);
}

// Changes background color of element

function gridColour(element) {
  element.style.backgroundColor = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;
}

// Creates a grid with size inputted gridSize x gridSize
function createGrid(gridSize) {
  // Loop for creating a grid
  for (let i = 0; i < gridSize ** 2; i++) {
    // Creates new div element
    const newDiv = document.createElement("div");
    // Adds the grid and grid-box class names to it
    newDiv.classList.add(`grid`);
    // Alters the size of the box
    const boxSize = 640 / gridSize;
    newDiv.style.height = `${boxSize}px`;
    newDiv.style.width = `${boxSize}px`;
    // appends it to the container div
    container.appendChild(newDiv);
  }
}
