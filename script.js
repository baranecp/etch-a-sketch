let isDrawing = false;
let currentMode = "color";

function generateBoard(size) {
  const gridSize = size;
  const containerSize = 500;
  const squareSize = containerSize / gridSize;

  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  document.addEventListener("mousedown", () => (isDrawing = true));
  document.addEventListener("mouseup", () => (isDrawing = false));
  document.getElementById("eraserBtn").addEventListener("click", () => {
    currentMode = "erase";
  });

  document.getElementById("colorBtn").addEventListener("click", () => {
    currentMode = "color";
  });
  document.getElementById("resetBtn").addEventListener("click", resetBoard);

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (!isDrawing) return;
      if (currentMode === "erase") {
        square.style.backgroundColor = "";
      } else {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
      }
    });
    square.addEventListener("mousedown", () => {
      if (currentMode === "erase") {
        square.style.backgroundColor = "";
      } else {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
      }
    });
  });
}

generateBoard(16);

function watchColorPicker(event) {
  currentMode = "color";
  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (isDrawing && currentMode === "color") {
        square.style.backgroundColor = event.target.value;
      }
    });
    square.addEventListener("mousedown", () => {
      if (currentMode === "color") {
        square.style.backgroundColor = event.target.value;
      }
    });
  });
}

function chooseGridSize() {
  const selectedSize = prompt("Choose board size between 16-100: ");
  if (selectedSize >= 16 && selectedSize <= 100) {
    generateBoard(selectedSize);
  } else {
    alert("Please choose value between 16 and 100!");
    chooseGridSize();
  }
}

function resetBoard() {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "";
  });
}
