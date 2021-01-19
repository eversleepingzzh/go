const deepcloneArray = require('./utils').deepcloneArray;
const compareArray = require('./utils').compareArray;

class goBoard {
    board
    deadBlack = 0
    deadWhite = 0
    history = []
    constructor(size) {
        this.size = size
        this.board = new Array(size).fill(0);
        for (let i = 0; i < size; i++) {
            this.board[i] = new Array(size).fill(0)
        }
        this.history.push(deepcloneArray(this.board));
    }

    generateBoard(board) {
        this.board = board;
        this.history.push(deepcloneArray(this.board));
    }

    
    addPieces(x, y, type) {
        this.board[x][y] = type;
    }

    putChess(x, y , type) {
        let shadowBoard = deepcloneArray(this.board);
        // console.table(shadowBoard)
        if (this.board[x][y] !==0) {
            let msg = '已经有棋子，无法落子';
            console.log(msg)
            return {
                code: 0,
                msg,
            }
        } else {
            shadowBoard[x][y] = type;
            // 下进去后这个子是否有气
            let hasAir = this.haveair(x, y, shadowBoard);
            if (hasAir) {
                // 直接添加棋子并且清除死子
                this.addPieces(x, y, type);
                let { whitedeads, blackdeads } = this.findAllDeadPieces(shadowBoard);
                if (type === 1) {
                    this.clearDeadPieces(blackdeads, 2);
                } else {
                    this.clearDeadPieces(whitedeads, 1);
                }
            } else {
                let { whitedeads, blackdeads } = this.findAllDeadPieces(shadowBoard);
                if (whitedeads.length > 0 && blackdeads.length > 0) {
                    // 若无气但能提子
                    this.addPieces(x, y, type);
                    if (type === 1) {
                        this.clearDeadPieces(blackdeads, 2);
                    } else {
                        this.clearDeadPieces(whitedeads, 1);
                    }
                    // 判断是否为劫
                    if (this.history.length >= 2 && compareArray(this.board, this.history[this.history.length - 2])) {
                        console.log('此回合不能提子');
                        this.board = this.history[this.history.length - 1];
                        return
                    }
                } else {
                    // 若无气并且无法提子
                    console.log('禁入点禁止落子');
                    return;
                }
            }
        }
        this.history.push(deepcloneArray(this.board));
    }

    findAllDeadPieces(board) {
        let whitedeads = [];
        let blackdeads = [];
        for(let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                let c = board[i][j]
                if (c === 0) {
                    continue
                } else if (c === 1){
                    let alive = this.haveair(i, j, board);
                    if (!alive) {
                        whitedeads.push([i,j]);
                    }
                } else if (c === 2) {
                    let alive = this.haveair(i, j, board);
                    if (!alive) {
                        blackdeads.push([i,j]);
                    }
                }
            }
        }
        return {
            whitedeads,
            blackdeads
        }
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
                        flag = this.dfs(dx, dy, visitedList, board)
                        if (flag) {
                            return flag
                        } else {
                            continue
                        }
                    }
                } else {
                    continue;
                }
            }
        }
        return flag
    }
}

module.exports = {
    board: goBoard
}