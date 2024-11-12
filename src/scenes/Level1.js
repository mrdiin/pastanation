export class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1")
  }

  preload() {
    // Load assets needed for Level 1
  }

  create() {
    this.add.text(300, 50, "Level 1: Make Spaghetti!", {
      fontSize: "24px",
      color: "#fff",
    })

    // Game logic for Level 1 goes here

    // Example: End Level button to transition to Game Over scene
    const endButton = this.add
      .text(700, 550, "Finish Level", { fontSize: "20px", color: "#f00" })
      .setInteractive()

    endButton.on("pointerdown", () => {
      this.scene.start("GameOver")
    })
  }
}
