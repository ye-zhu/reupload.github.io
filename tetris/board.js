class Board {
  constructor () {
    this.grid = this.makeBoard();
  }

 units () {
   let units = []
   for (let i=0; i<14; i+=1) {
     let filled = (i === 0 || i === 12 || i === 1 || i ===13) ? 'black' : false
     units.push({filled})
   }
   return units
 }

 makeBoard () {
   let grid = []
   for (let i=0; i<25; i+=1) {
     grid.push(this.units())
   }
    // let grid = Array(25).fill().map((row, rowidx) => this.units())
    grid[23].forEach((el) => {el.filled = "black"})
    grid[24].forEach((el) => {el.filled = "black"})
    return grid
  }

  makeNextPieceSceen () {
    let grid = []
    for (let i=0; i<2; i+=1) {
      let row = []
      for (let j=0; j<4; j+=1) {
        row.push({filled:false})
      }
      grid.push(row)
    }    
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
