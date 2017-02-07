const IMAGES = [
  'explosion',
  'asteroid',
  'ship',
  'warp',
  'bullet',
  'asteroidintro'
]

const Images = {
  counter: 0,
  loadImages: function (game) {

      IMAGES.forEach((imageName) => {
        let img = new Image();
        img.src = `./asteroids/assets/${imageName}.png`;
        img.id = `${imageName}`
        img.onload = function () {
          Images.counter += 1;
          Images[imageName] = img;
          if (Images.counter === IMAGES.length && game.state.status === "firstGame") {
            console.log(Images.counter);
            console.log(game.state.status);
            Images.counter = 0
            game.startGame()
          }
        }
      })

  }

}



module.exports = Images
