import React from 'react'
import ReactDOM from 'react-dom'

class RightPanel extends React.Component {
  constructor (props){
    super(props)
  }

  componentWillUnmount () {
    this.props = undefined
  }

  nextPiece () {
    let nextPieceScreen = this.props.board().map((row, rowidx) => {
      let units = row.map((unit, colidx) => {

        let additionClass;
        this.props.nextPiece.pieceScreenPos().forEach((el) => {
          if (el[0] === rowidx && el[1] === colidx) {
            additionClass = this.props.nextPieceFillColor
          }
        })

      return (
        <div className={`tetrisUnit ${additionClass} ${unit.filled}`} key={`${colidx}`}>
        </div>
        )

      })

      return (
        <div className={`tetrisRow`} key={`${rowidx}`}>
          {units}
        </div>
      )

    })

    return (
      <div>
        {nextPieceScreen}
      </div>
    )
  }


  render () {
    let nextPiece = this.nextPiece()

    return (
      <div className="rightPanel">

        <div className="panelUnit nextPiece"> Next Piece {nextPiece} </div>
        <div className="panelUnit">SCORE <div>{this.props.score}</div></div>
      </div>
    )

  }



  //End
}

export default RightPanel
