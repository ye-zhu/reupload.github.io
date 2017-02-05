import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game'
import IntroPanel from './intro_panel'


class SnakeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      game: {},
      showWhichView: 'firstGame'
    }
  }

  componentWillUnmount () {
    if (this.myTimeout) {
      clearTimeout(this.myTimeout)
    }
      this.endGame();
      this.setState({game: undefined,
                     showWhichView: 'notRunning'
                  })
  }

  endGame () {
    if (this.state.showWhichView !== "firstGame") {
      this.state.game.lost = "wall"
      this.state.game.pauseGame()
      this.state.game.board = undefined;
      this.state.game.snake = undefined;
    }
  }

  showPanel () {
    let refresh = () => {
      if (this.state.game) {
        this.setState({
          showWhichView: 'notRunning'
        })
      }
    }
    this.myTimeout = setTimeout(refresh, 1000)
  }

  makeInitialGame () {
    if (this.state.showWhichView === "firstGame") {
      this.setState({
        game: new Game(this),
        showWhichView: 'running'
      })
    } else {
      this.state.game.running = true;
      this.state.showWhichView = 'running';
      this.state.game.lost = false;
      this.state.game.score = 0;
      this.state.game.snake.pos = [[4,6], [3,6], [2,6], [1,6]];
      this.state.game.currentDelta = [1,0];
      this.state.game.newDelta = [1,0];
      this.state.game.startSnake();
    }

  }

  localStorageScore () {
    if (!localStorage.snakeHighScore || localStorage.snakeHighScore < this.state.game.score) {
      localStorage.snakeHighScore = this.state.game.score
    }
  }

  renderGame() {
    this.localStorageScore()

    let board = this.state.game.board.grid.map((row, rowidx) => {
      let units = row.map((unit, colidx) => {
          let snakeClass = undefined
          let fruitClass = undefined
          let fruitType = undefined
          let snakePos = this.state.game.snake.pos
            snakePos.forEach((pos) => {
              if (pos[0] === rowidx && pos[1] === colidx) {
                snakeClass = "snake"
              }
            })

              if (this.state.game.lost === "wall" && snakePos[1][0] === rowidx && snakePos[1][1] === colidx) {
                snakeClass = "snake head"
              } else if (snakePos[0][0] === rowidx && snakePos[0][1] === colidx) {
                snakeClass = "snake head"
              }

              let fruitPos = this.state.game.fruit
              if (fruitPos[0] === rowidx && fruitPos[1] === colidx) {
                fruitClass = "fruit"
                fruitType = this.state.game.fruitType
              }

        return (
          <div className={`snakeUnit ${snakeClass} ${fruitClass} ${fruitType}`} key={`${colidx}`} >
          </div>
        )
      })


      return (
        <div className={`snakeRow`} key={`${rowidx}`}>
          {units}
        </div>
      )
    })
    return (
      <div>
        <div className="score">
          Your Score = {this.state.game.score}
        </div>
        {board}
      </div>
    )
  }



  render () {
    let currentView;
    if (this.state.showWhichView === 'notRunning' || this.state.showWhichView === 'firstGame') {
      currentView = <IntroPanel
               makeInitialGame={this.makeInitialGame.bind(this)}
               score={this.state.game.score}
               topScore={window.localStorage.snakeHighScore} />
           } else if (this.state.showWhichView === 'running') {
      currentView = this.renderGame();
    }


    return (
      <div className="snakeView">
        {currentView}
      </div>
    )

  }

//End
}



export default SnakeView
