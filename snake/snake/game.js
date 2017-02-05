import Board from './board'
import Snake from './snake'

const DELTAS = {
  'w': [-1,0],
  's': [1,0],
  'd': [0,1],
  'a': [0,-1],
  'W': [-1,0],
  'S': [1,0],
  'D': [0,1],
  'A': [0,-1]
}

const FRUITTYPE = ["cat", "flower", "peace", "orangeFruit", "heart", "mushroom"]

class Game {
  constructor (view) {
    this.view = view;
    this.board = new Board();
    this.snake = new Snake();
    this.addEventListener();
    this.currentDelta = DELTAS['s'];
    this.newDelta = DELTAS['s'];
    this.fruit;
    this.fruitType;
    this.lost = false;
    this.eatFruit = false;
    this.makeFruit();
    this.startSnake();
    this.score = 0;
  }

  addEventListener () {
    document.addEventListener('keydown', (e) => {
      if (DELTAS[e.key]) {
        this.newDelta = DELTAS[e.key]
      } else if (e.keyCode == 32) {
        e.preventDefault();
        this.pauseGame()
      }
    })
  }

  newDeltaCheck () {
    let newDelta = this.newDelta;
    let curDelta = this.currentDelta;
    if (newDelta[0] + curDelta[0] !== 0 || newDelta[1] + curDelta[1] !== 0) {
      this.currentDelta = this.newDelta;
    }
  }

  snakeAndFruitCollision () {
    this.snake.pos.forEach((pos) => {
      if (pos[0] === this.fruit[0] && pos[1] === this.fruit[1]) {
        this.makeFruit("getFruit");
        this.eatFruit = true;
        this.score += 100;
      }
    })
  }


  gameOver() {
    let snakeHead = this.snake.pos[0];
    let snakePos = this.snake.pos;
    for (let i=1;i<snakePos.length;i+=1) {
      if (snakePos[i][0] === snakeHead[0] && snakePos[i][1] === snakeHead[1]) {
        this.lost = "body";
        this.pauseGame();
        this.view.showPanel();
      }
    }

    if (snakeHead[0] > 17 || snakeHead[0] < 0 || snakeHead[1] > 12 || snakeHead[1] < 0) {
      this.lost = "wall";
      this.pauseGame();
      this.view.showPanel();
    }

  }

  makeFruit (getFruit) {
    this.fruit = this.board.pos[Math.floor(Math.random()*this.board.pos.length)];
    this.fruitType = FRUITTYPE[Math.floor(Math.random()*FRUITTYPE.length)]
  }

  startSnake () {
    let refresh = function () {
      this.newDeltaCheck();
        if (this.eatFruit) {
          this.snake.moveSnake(this.currentDelta, "fromFruit");
          this.eatFruit = false;
        } else {
          this.snake.moveSnake(this.currentDelta)
        }
      this.snakeAndFruitCollision();
      this.gameOver();
      this.view.forceUpdate();
    }.bind(this);
    this.interval = setInterval(refresh, 130);
  }

  pauseGame () {
    if (this.interval) {
      this.interval = window.clearInterval(this.interval);
    } else if (this.lost) {
    } else {
      this.startSnake()
    }
  }


}

export default Game;
