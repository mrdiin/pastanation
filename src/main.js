import { Game } from "./scenes/Game"
import { GameOver } from "./scenes/GameOver"
import { MainMenu } from "./scenes/MainMenu"
import { Level1 } from "./scenes/Level1"

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 683,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MainMenu, Game, Level1, GameOver],
}

export default new Phaser.Game(config)
