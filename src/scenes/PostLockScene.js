import Phaser from "phaser";

export default class PostLockScene extends Phaser.Scene {
  constructor() {
    super({ key: "PostLockScene" });
  }

  init(data) {
    this.selectedAnswer = data.answer;
    this.add.image(400, 300, "background");
  }

  create() {
    // Display confirmation message
    this.add
      .text(400, 200, "Your answer is locked!", {
        fontSize: "32px",
        fill: "#0f0",
      })
      .setOrigin(0.5);
    this.add
      .text(400, 250, `Selected Answer: ${this.selectedAnswer}`, {
        fontSize: "28px",
        fill: "#fff",
      })
      .setOrigin(0.5);

    // Add navigation options
    this.add
      .text(400, 350, "Explore Deals", { fontSize: "24px", fill: "#00f" })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        window.location.href = "http://amazon.in/funzone";
      });

    this.add
      .text(400, 400, "Share", { fontSize: "24px", fill: "#00f" })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        alert("Share this game with your friends!");
      });
  }
}
