import { Scene } from "phaser";

export default class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image("background", "/assets/images/background.jpg");
    this.load.audio("intro", "/assets/audio/into.mp3");
    this.load.image("kbc-logo", "/assets/images/Asset_2_BG_Logo.png");
    this.load.image("lock-btn", "/assets/images/Asset_3_LockBtn.png");
    this.load.image(
      "answer-btn",
      "/assets/images/Asset_4_AnswerBlockHolder.png"
    );
  }

  create() {
    const introSound = this.sound.add("intro");
    introSound.play();
    this.scene.start("MainMenu");
  }
}
