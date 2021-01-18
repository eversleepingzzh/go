const goBoard = require('./go').board

let test1 = new goBoard(8)
test1.board =  [[0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 1, 1, 1, 1, 0, 0],
 [0, 0, 1, 1, 0, 0, 2, 0],
 [0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 1, 0, 1],
 [0, 2, 0, 0, 0, 0, 0, 2],
 [0, 2, 0, 0, 0, 1, 2, 2],
 [0, 0, 0, 0, 1, 2, 2, 2]]

// console.table(test1.board)
// test1.putChess(4, 7, 1)
// test1.putChess(7, 4, 1)
// test1.putChess(6, 5, 1)
// test1.putChess(5, 6, 1)
let res = test1.haveair(6,7, test1.board)
test1.putChess(5, 6, 1)
console.table(test1.board)
console.log(res)