class Sprite {
  constructor(config) {
    this.animations = config.animations || {
      idleDown: [[0, 0]],
      //   walkDown: [
      //     [0, 0],
      //     [1, 0],
      //     [2, 0],
      //     [3, 0],
      //   ],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
  }
}
