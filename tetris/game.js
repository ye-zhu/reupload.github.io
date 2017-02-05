import Board from './board.js'
import Piece from './piece.js'
// import View from './view.js'

const DELTAS = {
  's': [1,0],
  'd': [0,1],
  'a': [0,-1],
  'S': [1,0],
  'D': [0,1],
  'A': [0,-1],
}

const MATRIX = {
  rotateClockwise:   [ [0, 1 ],
                       [-1, 0] ],

rotateCounterClockwise:   [ [0,-1],
                            [1, 0] ]
}
class Game {
  constructor (view) {
    this.view = view;
    this.board = new Board();
    this.nextPiece = new Piece()
    this.gamePiece = new Piece()
    this.setPieceIntoMotion();
    this.pauseGame()
    this.addListeners();
    this.running = true;
    this.groundedPieces = []
    this.score = 0
  }

  stopPiece () {
    let collided = this.gamePiece.pos.filter((pos) => {
      if (pos[0]>=0) {
        return (this.board.grid[pos[0] + 1][pos[1]].filled)
      }
    })

    if (collided.length > 0) {
      this.gamePiece.pos.forEach((pos) => {
        this.board.grid[pos[0]][pos[1]].filled = this.gamePiece.fillColor;
      })
      this.gamePiece = this.nextPiece
      this.nextPiece = new Piece();
      this.clearRow();
    }
  }

  clearRow () {
    this.board.grid.forEach((row, rowidx) => {
      if (row.filter((pos) => {return (pos.filled && pos.filled !== "black")}).length === 10) {
        this.board.grid.splice(rowidx,1)
        this.board.grid.unshift(this.board.units())
        this.score += 100
      }
    })
  }

  movePiece (delta) {
    this.gamePiece.pos = this.gamePiece.pos.map((pos) => {
      return [pos[0] + delta[0], pos[1] + delta[1]]
    })
    this.stopPiece();
  }

  rotatePiece(matrix) {
    let center = this.gamePiece.pos[1];
    let relativePos = this.gamePiece.pos.map((coord) => {
      return (
        [ coord[0] - center[0],
          coord[1] - center[1]
                                ]
      );
    });

    let rotated = relativePos.map((coord) => {
      let row = matrix[0][0]*coord[0] + matrix[0][1]*coord[1];
      let col = matrix[1][0]*coord[0] + matrix[1][1]*coord[1];
      return [row, col];
    });

    let finalPos = rotated.map((coord) => {
      return (
        [ coord[0] + center[0],
          coord[1] + center[1]
                                ]
      );
    });

    return finalPos;
  }

  setPieceIntoMotion () {
    let downwardMovement = function () {
      this.movePiece([1,0])
      this.validMove([1,0])
      this.view.forceUpdate()
    }
    this.interval = setInterval(downwardMovement.bind(this), 300)
  }


  validMove (delta) {
    let proxyMove = this.gamePiece.pos.map((pos) => {
      return [pos[0] + delta[0], pos[1] + delta[1]]
    })

    let startPos = 0
    for (let i=0;i<this.gamePiece.pos.length;i+=1) {
      let gp = this.gamePiece.pos[i]
      let sp = this.gamePiece.startPos[i]
      if (gp[0] === sp[0] && gp[1] === sp[1]) {
        startPos += 1
      }
    }

    let check = proxyMove.filter((pos) => {
      return (pos[0] > 0) && (this.board.grid[pos[0]][pos[1]].filled !== false)
    })
      // GAME OVER LOGIC //
      if (check.length > 0 && startPos === this.gamePiece.pos.length) {
        this.gameOver()
      }
      // GAME OVER LOGIC //

      if (check.length > 0) {
        return false
      } else {
        return true
      }
  }

  rotateValidMove (rotatedPos) {
    if (rotatedPos.filter((pos) => pos[1] > 13 || pos[1] < 0).length > 0) {
      return false
    } else {
        let check = rotatedPos.filter((pos) => {return this.board.grid[pos[0]][pos[1]].filled})
        if (check.length > 0) {
          return false
        } else {
          return true
        }
    }
  }

  rotateCheck (rotatePos) {
    let filledPos = []
    let tempPos = []
    rotatePos.map((pos) => {
      tempPos.push(pos[1])
      if (this.board.grid[pos[0]][pos[1]].filled) {
        filledPos.push(pos[1])
      }
    })

    if (filledPos.length > 0) {
        let sortAndUnique = function (arr) {
          let set = new Set(arr.sort((a,b) => a > b))
          let uniqueSorted = []
            set.forEach((el) => {
              uniqueSorted.push(el)
            })
          return uniqueSorted
        }

            let filledCompare = sortAndUnique(filledPos)
            let tempPosCompare = sortAndUnique(tempPos)
            let rotatedPiece


        if (filledCompare[0] === tempPosCompare[0]) {
          rotatedPiece = rotatePos.map((pos) => {
            return [pos[0],(pos[1] + filledCompare.length)]
          })
        } else if (filledCompare[filledCompare.length-1] === tempPos[tempPos.length-1]) {
          rotatedPiece = rotatePos.map((pos) => {
            return [pos[0],(pos[1] - filledCompare.length)]
          })
        } else {
          // Nothing Happens
        }

        if (rotatedPiece && this.rotateValidMove(rotatedPiece)) {
          this.gamePiece.pos = rotatedPiece
          this.stopPiece();
        } else {
          // Nothing Happens
        }

      } else if (this.rotateValidMove(rotatePos)) {
        this.gamePiece.pos = rotatePos
        this.stopPiece();
      }
  }

  addListeners () {
    this.keyListener = this.keyDownEvent.bind(this);
    document.addEventListener('keydown', this.keyListener);
  }

  removeListeners () {
     document.removeEventListener('keydown', this.keyListener);
  }

  keyDownEvent (e) {
        if (DELTAS[e.key] && this.validMove(DELTAS[e.key])) {
          this.movePiece(DELTAS[e.key])
        } else if (e.key === 'e' || e.key === 'E' && this.gamePiece.fillColor !== "red"){
          let rotatePos = this.rotatePiece(MATRIX.rotateClockwise)

            this.rotateCheck(rotatePos)


        } else if (e.key === 'q' || e.key === 'Q' && this.gamePiece.fillColor !== "red") {
          let rotatePos = this.rotatePiece(MATRIX.rotateCounterClockwise)

            this.rotateCheck(rotatePos)

        }
        this.view.forceUpdate();
  }

  pauseGame () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 32 && this.running) {
          e.preventDefault();
          this.running = false;
          document.removeEventListener('keydown', this.keyListener);
          clearInterval(this.interval);
        } else if (e.keyCode == 32 && this.running === false) {
          e.preventDefault();
          this.running = true;
          this.addListeners();
          this.setPieceIntoMotion();
        }
      })
  }

  gameOver () {
    this.interval = window.clearInterval(this.interval);
    this.removeListeners();
    this.view.state.status = "notRunning";
  }


  //End
}

export default Game
