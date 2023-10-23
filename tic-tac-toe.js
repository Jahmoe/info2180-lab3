window.onload= function()
{
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const button = document.getElementsByClassName("btn")[0];

    const gmesqr = board.querySelectorAll('div');
    let player = 'X';
    let sqr_pos = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for(let j=0; j<=8; j++)
    {
        gmesqr[j].setAttribute("class","square");
    }

    gmesqr.forEach((seg, position) => 
    {
        seg.addEventListener('click', () => userAction(seg, position));
        seg.addEventListener('mouseover', function()
        {
        seg.classList.add('hover');
       // seg.removeEventListener('click', () => userAction(seg, position))
        });
        seg.addEventListener('mouseout', function(){
            seg.classList.remove('hover');
        });
    });
