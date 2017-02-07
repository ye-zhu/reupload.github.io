// const STARTPOS = [
//   [5,10], [5,11], [5,12], [5,13]
// ]

class Snake {
  constructor () {
    this.startpos = [[6,14], [6,15], [6,16], [6,17]];
    this.pos = this.startpos
  }

  moveSnake (delta, fromFruit) {
    if (!fromFruit) {
      this.pos.pop()
    }
      this.pos.unshift([this.pos[0][0] + delta[0], this.pos[0][1] + delta[1]])
  }


  //End
}

export default Snake
