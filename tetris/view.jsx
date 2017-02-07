import Game from './game.js'
import React from 'react'
import ReactDOM from 'react-dom'
import RightPanel from './rightPanel'

class TetrisView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: undefined,
      status:"firstGame",
    }
  }

  componentWillUnmount () {
    if (this.state.status !== "firstGame") {
      this.endGame();
    }
    this.removeListener();
    this.setState({game: undefined,
                   status: undefined
                })
  }

  endGame () {
    this.state.game.gameOver();
    this.removeListener();
    this.state.game.gamePiece = undefined;
    this.state.game.nextPiece = undefined;
    this.state.game.board = undefined;
    this.state.game.running = undefined;
    this.state.game.groundedPieces = [];
    this.state.game.score = 0
  }

  addListener () {
    this.keyListener = this.keyDownEvent.bind(this)
    document.addEventListener('keydown', this.keyListener)
  }

  removeListener () {
    document.removeEventListener('keydown', this.keyListener);
  }

  keyDownEvent (e) {
      if (e.keyCode === 13) {
        e.preventDefault()

        if (this.state.status === "firstGame") {
          this.state = {
            game: new Game(this),
            status:"running"
          }
        } else {
          this.state.game.board.resetGrid();
          this.state.status = "running";
          this.state.game.groundedPieces = [];
          this.state.game.running = true;
          this.state.game.addListeners();
          this.state.game.setPieceIntoMotion();
        }
        this.removeListener()
      }
  }

  boardRender () {
    let board = this.state.game.board.grid.map((row, rowidx) => {
        let units = row.map((unit, colidx) => {
            let additionClass;
            this.state.game.gamePiece.pos.forEach((el) => {
              if (el[0] === rowidx && el[1] === colidx) {
                additionClass = this.state.game.gamePiece.fillColor
              }
            })
            if (rowidx === 0 || rowidx === 1) {
              additionClass = "black"
            }

          return (
            <div className={`tetrisUnit ${additionClass} ${unit.filled}`} key={`${colidx}`}>
            </div>
          )

        })

        return (
          <div className={`tetrisRow`} key={`${rowidx}`}>
            {units}
          </div>
        )

      })
    return board
  }


  render () {
    let gameStatus
    if (this.state.status === "firstGame") {
      gameStatus = <div className="firstGame"></div>
      this.addListener()
    } else if (this.state.status === "notRunning") {
      gameStatus = <div className="gameOver"></div>
      this.addListener()
    }


      let board
      let rightPanel

      if (this.state.game) {
        board = this.boardRender()
      }

      if (this.state.game) {
        rightPanel = <RightPanel board={this.state.game.board.makeNextPieceSceen.bind(this)}
                    nextPiece={this.state.game.nextPiece}
                    nextPieceFillColor={this.state.game.nextPiece.fillColor}
                    score={this.state.game.score}
                  />
      }


    return (
      <div className="wrap">
        <div className="tetrisView">
          {gameStatus}
          {board}
        </div>
          {rightPanel}
      </div>
    )
  }

  //End
}



export default TetrisView
