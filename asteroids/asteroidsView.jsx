import React from 'react'
import ReactDOM from 'react-dom'
const Images = require('./images.js')
const Game = require('./game.js')


class AsteroidsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {game: undefined,
                  status: "firstGame"
                }
  }

  componentWillUnmount () {
    if (this.state.game) {
      this.endGame();
    }
      this.setState({game: undefined,
                     status: undefined
                  })
  }

  endGame() {
    this.state.game.resetGame("endGame")
    this.state.game.stopGame()
    this.state.game.context = undefined;
    this.state.game.canvas = undefined;
    this.state.game.ship = [];
    this.state.game.description = undefined;
  }

  startGame () {
    this.setState({
                    game: new Game(),
                    status: "notRunning"
                  })
  }

  loadImagesBeforeStartGame () {
    Images.loadImages(this)
  }

  render () {
    let gameFn = () => {
      this.canvas = document.getElementById('canvas')
      this.canvas.getContext('2d').fillText("LOADING...", canvas.width/2 - 50, canvas.height/2);
      if (this.state.status === "firstGame") {
        this.startGame()
      }
    }
      return (
        <canvas id="canvas" width="800" height="600">{gameFn()}</canvas>
      )

  }

}


export default AsteroidsView
