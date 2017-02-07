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

      if (this.state.status === "firstGame") {
        this.loadImagesBeforeStartGame()
      }

      return (
        <canvas id="canvas" width="800" height="600">LOADING...</canvas>
      )

  }

}


export default AsteroidsView
