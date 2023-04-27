const resetButton = document.querySelector('button');
const container = document.querySelector('.container');
const sizeOfGrid = 16;



const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for ( let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            //added mouseenter listener to change background color;
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = '#228B22'
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

createGrid(sizeOfGrid);
//added an event listener to the reset button that prompts user for input;
resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('what dimensions do you want for the new grid?'));

    while(userSize > 100) {
        userSize = Number(prompt('Pick a number that is 100 or less'));
    }

    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
})





