import React from 'react'
import ReactDOM from 'react-dom'

class YeZhu extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="yeZhuPage">
        <span className="yeZhuPage intro"> Hi. I&rsquo;m Ye Qin Zhu. </span><br/><br/>
          I am a web developer experienced in Ruby, JavaScript, and ReactJS.
          I build web apps and games. I love the language of programming.
          When I am not working on a project, I am making and exhibiting art in NYC.
          <br/><br/>
          <span className="makeColor">CHECK OUT</span> and <span className="makeColor">PLAY</span> some of the javascript games I've made by clicking on the game buttons on the left.

      </div>
    )
  }

}


export default YeZhu
