let gridSize;

// Create a Title
const title = document.createElement("div");
title.textContent = `Etch-a-Sketch`;
title.style.fontSize = "64px";
document.body.appendChild(title);

// Ask user for grid size
const gridSizeBtn = document.createElement("button");
gridSizeBtn.classList.add(`btn-resize`);
gridSizeBtn.textContent = `Resize`;
document.body.appendChild(gridSizeBtn);

// Add a clear grid button
const clearGridBtn = document.createElement("button");
clearGridBtn.classList.add(`btn-clear`);
clearGridBtn.textContent = `Clear`;
document.body.appendChild(clearGridBtn);

// Create containerdiv element for grid
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Initial grid
createGrid(16);

// Listen for resize button click
gridSizeBtn.addEventListener("click", (e) => {
  // Ask user for gridsize
  gridSize = prompt(`
    Please Enter a grid size, for example:
    Entering '10' will create a 10x10 grid
    (Please note, it must be below 100!)`);

  // check if input is larger than 100
  if (gridSize > 100) {
    alert(`Too Large!`);
    return;
  }

  // Select all grid div elements
  let grid = document.querySelectorAll(".grid");
  // Remove Current grid
  grid.forEach((element) => {
    console.log(element);
    element.remove();
  });
  // Create new grid
  createGrid(gridSize);
});

// Listen for clear button click

clearGridBtn.addEventListener("click", (e) => {
  // Select all grid div elements
  let grid = document.querySelectorAll(".grid");
  grid.forEach((element) => {
    clearGrid(element);
    console.log("clear");
  });
});

// Change colour of element when hovering over it

container.addEventListener("mouseover", (e) => {
  // console.log(e.target.className);
  if (e.target.className === "grid") {
    gridColour(e.target);
  }
});

// Functions

// Generates a random number
function randomColour() {
  return Math.floor(Math.random() * 255);
}

// Changes background color of element

function gridColour(element) {
  element.style.backgroundColor = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;
}

// clears the grid

function clearGrid(element) {
  element.style.backgroundColor = `white`;
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
