const board = [
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X"]
];

const board1 = board.slice();

let direction = { x: 1, y: 1 };
let position = { x: 1, y: 1 };
let start = { x: 1, y: 1 };
const canvas = document.getElementById('canvas');

const creaTeplate = () => {
    let zero = 50;
    for (let index = 0; index < board[0].length; index++) {
        let inn = index;
        let pozY = zero + index * 80;
        let pozX;
        for (let index1 = 0; index1 < board.length; index1++) {
            pozX = zero + index1 * 80;
            let ctx = canvas.getContext('2d');
            ctx.strokeRect(pozY, pozX, 80, 80);
            if (board[index1][inn] === "X") {
                ctx.fillStyle = "#217a12";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
            if (board[index1][inn] === "0") {
                ctx.fillStyle = "#bed3f4";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
            if (board[index1][inn] === "Y") {
                ctx.fillStyle = "#492610";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
            if (board[index1][inn] === "3") {
                ctx.fillStyle = "blue";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
            if (board[index1][inn] === "2") {
                ctx.fillStyle = "yellow";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
            if (board[index1][inn] === "1") {
                ctx.fillStyle = "#e50b0b";
                ctx.fillRect(pozY, pozX, 80, 80);
            }
        }

    }

}

let firstLoop = 0
let move = () => {

    board[position.y][position.x] = "2";
    position.y += direction.y;
    position.x += direction.x;
    board[position.y][position.x] = "1";


    board[position.y + direction.y][position.x + direction.x] === 'X' &&
        board[position.y + direction.y][position.x] === 'X' &&
        board[position.y][position.x + direction.x] === 'X' ?
        direction = { x: -direction.x, y: -direction.y } :
        board[position.y + direction.y][position.x] === 'X' ? direction.y = -direction.y :
            board[position.y][position.x + direction.x] === 'X' ? direction.x = -direction.x : direction

    creaTeplate()

    if (firstLoop === 1 && position.y === start.y && position.x === start.x) {

        clearInterval(sI);
        board[position.y][position.x] = "3";
        alert("success");
        creaTeplate();
    }
    firstLoop = 1;
}
let sI = setInterval(move, 200);
creaTeplate()