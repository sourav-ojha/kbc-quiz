import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {}

  create() {
    this.startGame();
  }

  startGame() {
    // Set up the game here
    this.add.image(400, 300, "background");

    const questionText = this.add.text(50, 50, "Who is the host of KBC?", {
      fontSize: "32px",
      fill: "#fff",
    });
    const answers = [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Salman Khan",
      "Aamir Khan",
    ];
    answers.forEach((answer, index) => {
      const yPosition = 150 + index * 50;
      const answerText = this.add.text(50, yPosition, answer, {
        fontSize: "28px",
        fill: "#fff",
      });

      answerText.setInteractive();
      answerText.on("pointerdown", () => this.selectAnswer(answerText));
    });

    this.lockAnswerButton = this.add.text(100, 350, "Lock Answer", {
      fontSize: "32px",
      fill: "#f00",
    });
    this.lockAnswerButton.setInteractive();
    this.lockAnswerButton.on("pointerdown", this.lockAnswer.bind(this));
    this.lockAnswerButton.setVisible(false);
  }

  selectAnswer(answerText) {
    if (this.selectedAnswer) {
      this.selectedAnswer.setStyle({ fill: "#fff" });
    }
    this.selectedAnswer = answerText;
    this.selectedAnswer.setStyle({ fill: "#ff0" });
    this.lockAnswerButton.setVisible(true);
  }

  lockAnswer() {
    this.add.text(100, 400, "Answer Locked!", {
      fontSize: "32px",
      fill: "#0f0",
    });

    // Transition to the post-lock screen
    this.time.delayedCall(500, () => {
      this.scene.start("PostLockScene", { answer: this.selectedAnswer.text });
    });
  }
}
