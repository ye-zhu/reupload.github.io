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
    this.addlistener = document.addEventListener('keydown', this.keyListener)
  }

  removeEventListener () {
    this.addlistener = document.removeEventListener('keydown', this.keyListener)
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
          <br/>
          <div className="snakeIntro caterpillaricon"> </div>
          Your Top Score = <span className="p1">&nbsp;{this.props.topScore || 0}</span> / Your Score = <span className="p1">&nbsp;{this.props.score || 0}</span>
        </div>
      </div>
    )
  }

  //End
}



export default IntroPanel
