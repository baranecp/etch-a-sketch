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

}

 generateBoard(16);
