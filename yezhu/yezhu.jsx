import React from 'react'
import ReactDOM from 'react-dom'

const IMAGES = [
  'javascript',
  'html',
  'css',
  'canvas',
  'ruby',
  'react',
  'jquery',
  'git',
  'photoshop',
  'indesign',
  'illustrator'
]

class YeZhu extends React.Component {
  constructor(props) {
    super(props)
  }

  makeIcons () {
    return IMAGES.map((imageName) => {
      let img = new Image();
      img.onload = function () {
        Images[imageName] = img;
        if (Images.counter === IMAGES.length) {
          Images.counter -= Images.counter
        }
      }

      let source = `./yezhu/assets/${imageName}.png`;
      let iconKey = `${imageName}`;

      return <img id="skillsIcon" key={iconKey} src={source}/>
    })

  }


  render () {
    return (
      <div className="yeZhuPage">
        <span className="yeZhuPage intro"> Hi. I&rsquo;m Ye Qin Zhu. </span><br/><br/>
          I am a web developer experienced in Ruby, JavaScript, and ReactJS.
          I build web apps and games. I love the language of programming.
          When I am not working on a project, I am making and exhibiting art in NYC.
          <br/><br/>
          CHECK OUT and PLAY
          some of the javascript games I've made by clicking on the buttons on the left.
            <br></br>
          <div className="icons">
            <span className="skills">SKILLS</span>
            <br></br>
            {this.makeIcons()}
          </div>

      </div>
    )
  }

}


export default YeZhu
