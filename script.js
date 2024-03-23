const cols = [...document.querySelectorAll('.col')];
const btn = document.querySelector('#btn');



cols.forEach(col => col.addEventListener('click', handleClick));

let arr = Array(9).fill(null);
let currentPlayer = "X";


function checkWinner() {
    if (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2] ||
        arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5] ||
        arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8] ||
        arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6] ||
        arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7] ||
        arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8] ||
        arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8] ||
        arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]
    ) {
        document.write(`${currentPlayer} won the game`);
        return;
    } else {
        if (!arr.some(a => a === null)) {
            document.write(`<h1>game draw<h1>`);
        }
    }
}

function handleClick() {
    const id = Number(this.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    this.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";

}
