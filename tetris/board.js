class Board {
  constructor () {
    this.grid = this.makeBoard();
  }

 units () {
   let units = Array(14).fill().map((unit, colidx) => {
     let filled = (colidx === 0 || colidx === 12 || colidx === 1 || colidx ===13) ? 'black' : false
     return {filled}
    })
    return units
 }

 makeBoard () {
    let grid = Array(25).fill().map((row, rowidx) => this.units())
    grid[23].forEach((el) => {el.filled = "black"})
    grid[24].forEach((el) => {el.filled = "black"})
    return grid
  }

  makeNextPieceSceen () {
    let grid = Array(2).fill().map((row) => {
      return Array(4).fill().map((unit) => {
        return {filled:false}
      })
    })
    return grid
  }

  resetGrid () {
    this.grid.forEach((row, rowidx) => {
      row.forEach((unit, colidx) => {
        unit.filled = false
        if (colidx === 0 || colidx === 12 || colidx === 1 || colidx ===13) {
          unit.filled = "black"
        }
      })
    })
    this.grid[23].forEach((el) => {el.filled = "black"})
    this.grid[24].forEach((el) => {el.filled = "black"})
  }



  //End
}

export default Board
