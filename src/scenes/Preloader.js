import { Scene } from "phaser";

export default class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(400, 384, "background");

    this.rect_pos = {
      x: 200,
      y: 384,
      width: 360,
      height: 32,
    };
    //  A simple progress bar. This is the outline of the bar.
    this.add
      .rectangle(
        this.rect_pos.x,
        this.rect_pos.y,
        this.rect_pos.width,
        this.rect_pos.height
      )
      .setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(
      this.rect_pos.x / 2 - 80,
      this.rect_pos.y,
      4,
      this.rect_pos.height - 4,
      0xffffff
    );

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    // this.load.on("progress", (progress) => {
    //   //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
    //   bar.width = 4 + 460 * progress;
    // });

    // loading delay is 5 seconds, so fill the progresbar in 5 seconds
    // on each sec the progress bar will be filled with 20%
    this.loader_time_in_sec = 5;
    let loader = setInterval(() => {
      bar.width += this.rect_pos.width / this.loader_time_in_sec;
      console.log(bar.width);
    }, 1000);

    setTimeout(() => {
      clearInterval(loader);
    }, this.loader_time_in_sec * 1000);
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets

    // this.load.setPath("assets");
    this.load.image("kbc-logo", "/assets/images/kbc-logo.jpg");

    this.loadComplete = true;
  }

  create() {
    this.time.addEvent({
      delay: this.loader_time_in_sec * 1000,
      callback: () => {
        if (this.loadComplete) {
          this.scene.start("GameScene");
        }
      },
    });
  }
}
