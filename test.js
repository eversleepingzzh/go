const goBoard = require('./go').board

let test1 = new goBoard(8)
test1.board =  [[0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 1, 1, 1, 1, 0, 0],
 [0, 0, 1, 1, 0, 0, 2, 0],
 [0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 2, 0, 0, 1, 0, 1],
 [0, 2, 1, 2, 0, 0, 0, 2],
 [0, 2, 1, 2, 0, 1, 2, 2],
 [0, 0, 0, 0, 1, 2, 2, 2]]

test1.putChess(7, 2, 2)
test1.putChess(6, 2, 1)
test1.putChess(5, 2, 1)
console.table(test1.board)