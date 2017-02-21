class Board {
  constructor () {
    this.board = this.makeBoard();
    this.grid = this.board[0]
    this.pos = this.board[1]
  }

  makeBoard () {
    let pos = []
    let grid = []
    for (let i=0; i<13; i+=1) {
      let row = []
      for (let j=0; j<19; j+=1) {
        pos.push([i, j])
        row.push(j)
      }
      grid.push(row)
    }
    return [grid, pos]
  }




  //End
}

export default Board
