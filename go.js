class goBoard {
    board
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

    countair() {
        let blacks = []
        let whites = []
        // let b = this.board;
        // for (let i = 0; i < b.length; i++) {
        //     for (let j = 0; j < b.length; j++) {
        //         let val = b[i][j]
        //         if (val === 0) {
        //             continue
        //         } else if (val == 1) {

        //         } else {

        //         }
        //     }
        // }
    }

    haveair(x, y) {
        let visitedList = new Array(this.size).fill(0);
        for (let i = 0; i < this.size; i++) {
            visitedList[i] = new Array(this.size).fill(0)
        }
        let res = this.dfs(x, y, visitedList);
        console.log(res);
    }

    dfs(x, y, visitedList) {
        let flag = false;
        let color = this.board[x][y];
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
                    if (this.board[dx][dy] === 0) {
                        flag = true;
                        return flag
                    }  else if (this.board[dx][dy] !== color) {
                        continue
                    } else {
                        return this.dfs(dx, dy, visitedList)
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
nineteen.addPieces(6,7,1)

nineteen.addPieces(7,6,1)
nineteen.addPieces(2,6,2)
nineteen.addPieces(5,1,2)

nineteen.addPieces(6,1,2)
// nineteen.addPieces(1,1,2)
// nineteen.addPieces(1,1,2)

console.table(nineteen.board);
nineteen.haveair(7,7)



