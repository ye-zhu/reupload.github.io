class Board {
  constructor () {
    this.board = this.makeBoard();
    this.grid = this.board[0]
    this.pos = this.board[1]
  }

  makeBoard () {
    let pos = []
    let grid = Array(18).fill().map((row, rowidx) => {
      return Array(13).fill().map((unit, colidx) =>{
        pos.push([rowidx, colidx])
        return {
        }
      })
    })
    return [grid, pos]
  }




  //End
}

export default Board
