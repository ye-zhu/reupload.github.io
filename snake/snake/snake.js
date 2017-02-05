// const STARTPOS = [
//   [5,10], [5,11], [5,12], [5,13]
// ]

class Snake {
  constructor () {
    this.startpos = [[4,6], [3,6], [2,6], [1,6]];
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
