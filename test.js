const goBoard = require('./go').board

let signMap = [[0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 1, 1, 0, 0, -1, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, -1, -1, 0, 1, 0, 1],
[0, -1, 0, 1, -1, 0, 0, -1],
[0, 0, -1, -1, 0, 1, -1, -1],
[0, 0, 0, 0, 1, -1, -1, -1]]

let test1 = new goBoard(8, signMap);
// test1.board =  [[0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 0, 1, 1, 0, 0, -1, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, -1, 0, 0, 1, 0, 1],
//  [0, -1, 1, -1, 0, 0, 0, -1],
//  [0, -1, 1, -1, 0, 1, -1, -1],
//  [0, 0, 0, 0, 1, -1, -1, -1]]

// test1.putChess(7, -1, -1)
// test1.putChess(6, -1, 1)
// test1.putChess(5, -1, 1)
// console.table(test1.board)

console.table(test1.board);
let res = test1.putChess([2, 5], 1);
// test1.putChess([0, 0], -1)
// test1.putChess([0, 1], 1)
// test1.putChess([5, 3], -1)
// test1.putChess(5, -1, 1)

// console.table(test1.history[0]);
// console.table(test1.history[1]);
// console.table(test1.history[-1]);
console.table(res.board);

