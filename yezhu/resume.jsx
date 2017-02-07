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

class Resume extends React.Component {
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
        <span className="yeZhuPage intro"> RESUME</span><br/><br/>
          <span className="makeColor">GITHUB:</span> <a href="https://github.com/ye-zhu" target="_blank"> https://github.com/ye-zhu</a>
          <br/>
          <span className="makeColor">ARTIST WEBSITE:</span> <a href="http://www.yeqinzhu.info/" target="_blank"> www.yeqinzhu.info</a>
          <br/>
          <span className="makeColor">CONTACT:</span> email: z.yeqin@gmail.com <span className="makeColor">|</span> phone: 718.314.9716

          <div className="icons">
            <a href="mailto:z.yeqin@gmail.com"><button className="iconButtons" key="contact">Email Me</button></a>
            <a href="./assets/webRESUME.pdf" target="_blank"><button className="iconButtons" key="resume">Resume</button></a>
          </div>

          <div className="icons">
            <span className="skills">SKILLS</span>
            <br></br>
            {this.makeIcons()}
          </div>
          <br></br>

      </div>
    )
  }

}


export default Resume
