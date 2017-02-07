import React from 'react'
import ReactDOM from 'react-dom'
import TetrisView from './tetris/view'
import SnakeView from './snake/snake/view'
import LeftPanel from './leftPanel/leftPanel'
import AsteroidsView from './asteroids/asteroidsView'
import YeZhu from './yezhu/yezhu'
import Resume from './yezhu/resume'


const GAMES = {
  yezhu: <YeZhu/>,
  caterpillar: <SnakeView/>,
  tetris: <TetrisView/>,
  asteroid: <AsteroidsView/>,
  resume: <Resume/>
}


class MainView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentGame: 'yezhu'
    }
  }

  startGame (game) {
    this.setState({currentGame: game})
  }

  render () {
    let buttons = ["yezhu", "asteroid", "caterpillar", "tetris", "resume"].map((game) => {
      return (
        <button key={game} className={`gameButtons ${game}`} onClick={this.startGame.bind(this, game)}>
        </button>
      )
    })

    let game = GAMES[this.state.currentGame]
    return (
      <div>
        <div className="wrap">
          <div className="games">
            {buttons}
          </div>
          <div className="gameScreen">
            {game}
          </div>
        </div>

        <div className="footer">  Copyright © Ye Qin Zhu, All Rights Reserved | 2017  </div>
      </div>

    )
  }

  //End
}


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root')
  ReactDOM.render(<MainView />, root )
})
