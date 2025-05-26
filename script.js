function generateBoard(size) {
    const gridSize = size;
    const containerSize = 500;
    const squareSize = containerSize / gridSize;
    
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    for(let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

const squares = document.querySelectorAll(".square")
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
    })
})
}

 generateBoard(16);

function watchColorPicker(event) {
  document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = event.target.value;
        })
    })
}