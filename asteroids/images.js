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
  view: undefined,
  loadImages: function (game) {

      IMAGES.forEach((imageName) => {
        let img = new Image();
        img.src = `./asteroids/assets/${imageName}.png`;
        img.id = `${imageName}`
        img.onload = function () {
          Images.counter += 1;
          Images[imageName] = img;
          if (Images.counter === IMAGES.length) {
            Images.counter = 0
            if (Images.view) {
              Images.view.startGame()
            }
          }
        }
      })

  }

}



module.exports = Images
