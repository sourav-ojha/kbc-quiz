import Phaser from "phaser";
import Boot from "./scenes/Boot";
import GameScene from "./scenes/GameScene";
import PostLockScene from "./scenes/PostLockScene";
import Preloader from "./scenes/Preloader";
import MainMenu from "./scenes/MainMenu";

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 680,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 360,
      height: 640,
    },
    max: {
      width: 1600,
      height: 1200,
    },
    zoom: 1,
  },
  parent: "game-container",
  scene: [Boot, MainMenu, Preloader, GameScene, PostLockScene],
};

const game = new Phaser.Game(config);
export default game;
