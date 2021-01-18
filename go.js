const deepcloneArray = require('./utils').deepcloneArray;


class goBoard {
    board
    deadBlack = 0
    deadWhite = 0
    constructor(size) {
        this.size = size
        this.board = new Array(size).fill(0);
        for (let i = 0; i < size; i++) {
            this.board[i] = new Array(size).fill(0)
        }
    }

    
    addPieces(x, y, type) {
        this.board[x][y] = type;
    }

    putChess(x, y , type) {
        let shadowBoard = deepcloneArray(this.board);
        // console.table(shadowBoard)
        if (this.board[x][y] !==0) {
            return {
                code: 0,
                msg: '已经有棋子，无法落子'
            }
        } else {
            shadowBoard[x][y] = 1;
            // 下进去后这个子是否有气
            let hasAir = this.haveair(x, y, shadowBoard);
            if (hasAir) {
                this.addPieces(x, y, type);
                this.findAllDeadPieces();
            } else {
                console.log('没有气');
                let hasDead = false;
            }
        }
    }

    findAllDeadPieces() {
        let deads = [];
        let type1 = 0;
        for(let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                let c = this.board[i][j]
                if (c === 0) {
                    continue
                } else {
                    type = c;
                    let alive = this.haveair(i, j, this.board);
                    if (!alive) {
                        deads.push([i,j]);
                    }
                }
            }
        }
        this.clearDeadPieces(deads, type1);
    }

    clearDeadPieces(deads, type) {
        deads.forEach(d => {
            let [x, y] = d;
            this.board[x][y] = 0
        })
        if (type === 1) {
            this.deadWhite += deads.length
        } else {
            this.deadBlack += deads.length
        }
    }

    haveair(x, y, board) {
        let visitedList = new Array(this.size).fill(0);
        for (let i = 0; i < this.size; i++) {
            visitedList[i] = new Array(this.size).fill(0)
        }
        let res = this.dfs(x, y, visitedList, board);
        // console.log(res);
        return res
    }

    dfs(x, y, visitedList, board) {
        let flag = false;
        let color = board[x][y];
        visitedList[x][y] = 1;
        // 上下左右四个方向
        let directions = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]];
        for (let i = 0; i < directions.length; i++) {
            let d = directions[i];
            let [dx , dy] = d;
            if (dx < 0 || dx > this.size - 1 || dy < 0 || dy > this.size - 1) {
                continue;
            } else {
                if(visitedList[dx][dy] === 0) {
                    if (board[dx][dy] === 0) {
                        flag = true;
                        return flag
                    }  else if (board[dx][dy] !== color) {
                        continue
                    } else {
                        return this.dfs(dx, dy, visitedList, board)
                    }
                } else {
                    continue;
                }
            }
        }
        return flag
    }
}



let nineteen = new goBoard(8)
nineteen.addPieces(1,1,1)
nineteen.addPieces(1,2,1)
nineteen.addPieces(1,3,1)
nineteen.addPieces(2,2,1)
nineteen.addPieces(2,3,1)
nineteen.addPieces(1,4,1)
nineteen.addPieces(1,5,1)
nineteen.addPieces(4,5,1)
nineteen.addPieces(7,7,2)
// nineteen.addPieces(6,7,1)

nineteen.addPieces(7,6,1)
nineteen.addPieces(2,6,2)
nineteen.addPieces(5,1,2)

nineteen.addPieces(6,1,2)
// nineteen.addPieces(1,1,2)
// nineteen.addPieces(1,1,2)

console.table(nineteen.board);

nineteen.putChess(6, 7, 1)
console.table(nineteen.board);
nineteen.putChess(6, 6, 2)
// nineteen.putChess(6, 7, 2)
nineteen.putChess(5, 7, 2)
nineteen.putChess(7, 5, 2)
nineteen.putChess(7, 7, 2)
console.table(nineteen.board);