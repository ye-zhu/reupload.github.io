const Collidable = require('./collidable')



class Bullet extends Collidable {
  constructor (params) {
    super(params)
    this.counter = 30;
  }

  beforeMove () {
    this.counter -= 1;
    if (this.counter <= 0) {
      this.game.remove(this)
    }
  }

}

Bullet.SPEED = 12;

module.exports = Bullet
