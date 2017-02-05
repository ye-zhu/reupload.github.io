import React from 'react'
import ReactDOM from 'react-dom'

class IntroPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {panel: this.addEventListener() }
  }

  componentWillUnmount () {
      this.removeEventListener()
      this.setState({panel: undefined})
  }

  addEventListener () {
    this.keyListener = this.makePanel.bind(this)
    document.addEventListener('keydown', this.keyListener)
  }

  removeEventListener () {
    document.removeEventListener('keydown', this.keyListener)
  }

  makePanel (e) {
      if (e.keyCode === 13) {
        this.props.makeInitialGame();
        this.removeEventListener()
      }
  }

  render () {
    return (
      <div className="introPanel">
        <div className="snakeIntro"></div>
        <div className="bottom">
          Your Top Score = <span className="p1">&nbsp;{this.props.topScore}</span> / Your Score = <span className="p1">&nbsp;{this.props.score}</span>
          <div className="snakeIntro caterpillaricon"> </div>
        </div>
      </div>
    )
  }

  //End
}



export default IntroPanel
