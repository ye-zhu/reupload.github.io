const IMAGES = [
  'explosion',
  'asteroid',
  'ship',
  'bullet',
  'warp',
  'asteroidintro'
]

const LOADING_STATUS = {
  LOADING: "LOADING",
  FINISHED_LOADING: "FINISHED_LOADING"
}


const Images = {
  counter: 0,
  loadImages: function (asteroids) {

      IMAGES.forEach((imageName) => {
        let img = new Image();
        img.onload = function () {
          Images.counter += 1;
          Images[imageName] = img;
          if (Images.counter === IMAGES.length) {
            Images.counter -= Images.counter
            asteroids.startGame()
          }
        }

        img.src = `./asteroids/assets/${imageName}.png`;
        img.id = `${imageName}`
      })

  }

}



module.exports = Images
