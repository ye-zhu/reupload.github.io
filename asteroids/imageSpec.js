const ImageSpec = {

  "asteroid": {
    frameX: 0,
    frameY: 0,
    frameWidth: 256,
    frameHeight: 256,
    offset: 90,
    totalFrameX: 2048,
    totalFrameY: 1024,
    imageWidth: 180,
    imageHeight: 180
  },
 
  "ship": {
    frameRate: 7,
    frameX: 0,
    frameY: 0,
    frameWidth: 96,
    frameHeight: 156,
    shipOffset: -25,
    totalFrameX: 384,
    totalFrameY: 312,
    imageWidth: 48,
    imageHeight: 78
  },

  "explosion": {
    frameRate: 2,
    frameX: 0,
    frameY: 0,
    frameWidth: 128,
    frameHeight: 128,
    offset: 100,
    totalFrameX: 640,
    totalFrameY: 1152,
    imageWidth: 200,
    imageHeight: 200
  },

  "warp": {
    frameRate: 1,
    frameX: 0,
    frameY: 0,
    frameWidth: 128,
    frameHeight: 128,
    offset: 100,
    totalFrameX: 640,
    totalFrameY: 896,
    imageWidth: 200,
    imageHeight: 200
  },

  "bullet": {
    frameRate: 3,
    frameX: 0,
    frameY: 0,
    frameWidth: 47,
    frameHeight: 47,
    offset: 5,
    totalFrameX: 47,
    totalFrameY: 47,
    imageWidth: 10,
    imageHeight: 10
  },

  "smallerexplosion": {
    frameRate: 2,
    frameX: 0,
    frameY: 0,
    frameWidth: 128,
    frameHeight: 128,
    offset: 100/3,
    totalFrameX: 640,
    totalFrameY: 1152,
    imageWidth: 200/3,
    imageHeight: 200/3
  },

  "smallerwarp": {
    frameRate: 1,
    frameX: 0,
    frameY: 0,
    frameWidth: 128,
    frameHeight: 128,
    offset: 100/3,
    totalFrameX: 640,
    totalFrameY: 896,
    imageWidth: 200/3,
    imageHeight: 200/3
  },

  "smallerasteroid": {
    frameX: 0,
    frameY: 0,
    frameWidth: 256,
    frameHeight: 256,
    offset: 90/3,
    totalFrameX: 2048,
    totalFrameY: 1024,
    imageWidth: 180/3,
    imageHeight: 180/3
  }


}



module.exports = ImageSpec
