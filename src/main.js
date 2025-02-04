import { Game } from "./scenes/Game"
import { GameOver } from "./scenes/GameOver"
import { MainMenu } from "./scenes/MainMenu"
import { Level1 } from "./scenes/level-1/Level1"
import { Level1IntroStep1 } from "./scenes/level-1/intros/Step1"
import { Level1IntroStep2 } from "./scenes/level-1/intros/Step2"
import { Level1IntroStep3 } from "./scenes/level-1/intros/Step3"
import { Level1Outro } from "./scenes/level-1//Outro"
import { Preloader } from "./scenes/PreLoader"

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1280,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preloader, MainMenu, Level1IntroStep1, Level1IntroStep2, Level1IntroStep3, Level1, Level1Outro],
}

export default new Phaser.Game(config)
