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

    const questionText = this.add.text(20, 50, "Who is the host of KBC?", {
      fontSize: "28px",
      fill: "#fff",
      wordWrap: { width: 360, useAdvancedWrap: true },
    });
    const answers = [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Salman Khan",
      "Aamir Khan",
    ];

    this.answerBlockPos = 0;

    answers.forEach((answer, index) => {
      const yPosition = 150 + index * 50 + 10 * index;
      this.answerBlockPos = yPosition;

      const answerBox = this.add
        .image(0, yPosition, "answer-btn")
        .setScale(0.37)
        .setOrigin(0);

      const answerText = this.add
        .text(40, yPosition + 10, answer, {
          fontSize: "24px",
          fill: "#fff",
        })
        .setOrigin(0);

      answerBox.setInteractive();
      answerBox.on("pointerdown", () => this.selectAnswer(answerText));

      answerText.setInteractive();
      answerText.on("pointerdown", () => this.selectAnswer(answerText));
    });

    this.lockAnswerButton = this.add
      .image(100, this.answerBlockPos + 100, "lock-btn")
      .setScale(0.37)
      .setOrigin(0);
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
    // this.add.text(100, 400, "Answer Locked!", {
    //   fontSize: "32px",
    //   fill: "#0f0",
    // });

    // Transition to the post-lock screen
    this.scene.start("PostLockScene", { answer: this.selectedAnswer.text });
  }
}
