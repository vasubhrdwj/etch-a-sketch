const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const divBlocks = document.querySelectorAll(".col-div");
const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");

createGrid();
let colorChoice = "Black";

function createGrid(sz = 16) {
  for (let i = 0; i < sz; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    for (let j = 0; j < sz; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-div");
      rowDiv.appendChild(colDiv);

      colDiv.addEventListener("mouseenter", (event) => {
        if (colorChoice == "Black") {
          event.target.style.backgroundColor = "black";
        } else event.target.style.backgroundColor = getColor();
      });
    }
    container.appendChild(rowDiv);
  }
}

resetBtn.addEventListener("click", () => {
  let val = parseInt(prompt("Enter a size between 1 to 100"));
  if (val < 0 || val > 100) {
    alert("Out of Bounds!!");
  } else {
    container.innerHTML = "";
    createGrid(val);
  }
});
colorOne.addEventListener("click", () => {
  colorChoice = "Rainbow";
});
colorTwo.addEventListener("click", () => {
  colorChoice = "Black";
});

function getColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);

  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

getColor();
