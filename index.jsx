import React from 'react'
import ReactDOM from 'react-dom'
import TetrisView from './tetris/view'
import SnakeView from './snake/snake/view'
import LeftPanel from './leftPanel/leftPanel'
import AsteroidsView from './asteroids/asteroidsView'
import YeZhu from './yezhu/yezhu'


const GAMES = {
  yezhu: <YeZhu/>,
  caterpillar: <SnakeView/>,
  tetris: <TetrisView/>,
asteroid: <AsteroidsView/>
}


class MainView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentGame: GAMES.yezhu
    }
  }

  startGame (game) {
    this.setState({currentGame: false})
    this.setState({currentGame: game})
  }

  render () {
    let buttons = ["yezhu", "asteroid", "caterpillar", "tetris"].map((game) => {
      return (
        <button key={game} className={`gameButtons ${game}`} onClick={this.startGame.bind(this, game)}>
        </button>
      )
    })

    let game = GAMES[this.state.currentGame]
    return (
      <div className="wrap">
        <div className="games">
          {buttons}
        </div>
        <div className="gameScreen">
          {game}
        </div>
      </div>
    )
  }

  //End
}


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  ReactDOM.render(<MainView />, root )
})
