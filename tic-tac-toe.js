window.onload = function () {
    const statusEl = document.getElementById("status");
    const boardEl = document.getElementById("board");
    const buttonEl = document.getElementsByClassName("btn")[0];

    const gameSquares = boardEl.querySelectorAll('div');
    let currentPlayer = 'X';
    let squarePositions = ['', '', '', '', '', '', '', '', ''];

    const winning = [
        [0, 4, 8],
        [3, 4, 5],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [6, 7, 8]
    ];

    for (let j = 0; j <= 8; j++) {
        gameSquares[j].setAttribute("class", "square");
    }

    gameSquares.forEach((square, position) => {
        square.addEventListener('click', () => handleUserAction(square, position));
        square.addEventListener('mouseover', function () {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', function () {
            square.classList.remove('hover');
        });
    });

    function checkWin() {
        for (let i = 0; i <= 7; i++) {
            const win = winning[i];

            const pos1 = squarePositions[win[0]];
            const pos2 = squarePositions[win[1]];
            const pos3 = squarePositions[win[2]];
            if (pos1 === '' || pos2 === '' || pos3 === '') {
                continue;
            }
            if (pos1 === pos2 && pos2 === pos3) {
                statusElement.innerHTML = 'Congratulations! ' + pos1 + ' is the winner';
                statusElement.classList.add('you-won');
                break;
            }
        }
    }

    const handleUserAction = (square, position) => {
        if (square.innerText !== 'X' && square.innerText !== 'O') {
            square.innerText = currentPlayer;
            square.classList.add(currentPlayer);
            squarePositions[position] = currentPlayer;
            checkWin();
            currentPlayer = (currentPlayer === 'X' ? 'O' : 'X');
        }
    }

    buttonEl.addEventListener('click', () => {
        squarePositions = ['', '', '', '', '', '', '', '', ''];
        statusEl.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
        statusEl.classList.remove('you-won');
        gameSquares.forEach(square => {
            square.innerText = '';
            square.classList.remove('X');
            square.classList.remove('O');
        });
    });
}