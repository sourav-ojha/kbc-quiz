import { Scene } from "phaser";

export default class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(400, 384, "background");

    this.add.image(200, 250, "kbc-logo");

    this.add
      .text(200, 460, "Start", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Preloader");
      // this.scene.start("GameScene");
    });
  }
}
