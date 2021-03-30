document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const doodler = document.createElement('div');
  const doodlerLeftSpace = 50;
  const startPoint = 150;
  const doodlerBottomSpace = startPoint;
  const isGameOver = false;
  const platformCount = 5;
  const platforms = [];
  const upTimerId;
  const downTimerId;
  const isJumping = true;
  const startPoint = 150;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodler.style.left = `${doodlerLeftSpace}px`;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.random() * 315;
      this.visual = document.createElement('div');

      const {visual} = this;
      visual.classList.add('platform');
      visual.style.left = `${this.left}px`;
      visual.style.bottom = `${this.bottom}px`;
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      const platGap = 600 / platformCount;
      const newPlatBottom = 100 + i * platGap;
      const newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
      console.log(platforms);
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        const {visual} = platform;
        visual.style.bottom = `${platform.bottom}px`;
      });
    }
  }

  function jump() {
    upTimerId = setInterval(() => {
      doodlerBottomSpace += 20;
      doodler.style.bottom = `${doodlerBottomSpace}px`;
      if (doodlerBottomSpace > 350) {
        fall();
      }
    }, 30);
  }

  function fall() {
    clearInterval(downTimerId);
    isJumping = false;
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5;
      doodler.style.bottom = `${doodlerBottomSpace}px`;
      if (doodlerBottomSpace <= 0){
          gameOver()
      }
      platforms.forEach(platforms => {
          if (
              (doodlerBottomSpace >= platform.bottom) &&
              (doodlerBottomSpace <= platform.bottom + 15) &&
              ((doodlerLeftSpace +60) >= platform.left) &&
              (doodlerLeftSpace <= (platform.left + 85)) &&
              !isJumping
          ) {
              console.log('landed')
          }
      })

    },30);
  }

  function gameOver() {
    console.log('remove')
    isGameOver = true
    clearInterval(upTimerId);
    clearInterval(downTimerId);
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      setInterval(movePlatforms, 30);
    }
  }
  // attach to button
  start();
});