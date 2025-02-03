export class Level1IntroStep3 extends Phaser.Scene {
  constructor() {
    super("Level1IntroStep3")
  }

  preload() {
    this.load.image("kitchen", "assets/level-1/kitchen-bg.png")
    this.load.image("nextButton", "assets/next-button.png")
    this.load.image("dialogueBg", "assets/dialogue-bg.png")

    this.load.audio("dialogue3", "assets/level-1/dialogue-3.mp3")
  }

  create() {
    const hoverSound = this.sound.add("hover")
    const startSound = this.sound.add("start")
    const dialogueText =
      "You’ve heard of it, no? Long, ribbon-like pasta—perfect with any sauce! My Nonna always said, ‘If you can make fettuccine, you can conquer the world!’ So let’s start your conquest, eh?"

    this.dialogueSound = this.sound.add("dialogue3")

    const bg = this.add.image(0, 0, "kitchen")
    bg.setOrigin(0, 0)
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height)

    this.nonna = this.add
      .sprite(
        this.cameras.main.width - 1000,
        this.cameras.main.height - 400,
        "grandmaSpeaking"
      )
      .setOrigin(0, 0.5)
    this.nonna.setScale(1000 / this.nonna.width)
    this.nonna.preFX.addShadow()
    this.nonna.play("grandmaSpeaking")

    const dialogueBg = this.add
      .image(0, this.cameras.main.height / 4 - 100, "dialogueBg")
      .setInteractive()
      .setOrigin(0, 0.5)
    dialogueBg.setScale(1200 / this.cameras.main.width)
    dialogueBg.preFX.addShadow()

    this.add
      .text(200, this.cameras.main.height / 4 - 100, dialogueText, {
        fontSize: 48,
        fill: "#47261e",
        fontFamily: "Handwriting",
        wordWrap: { width: 1080 },
      })
      .setOrigin(0, 0.5)

    this.dialogueSound.on("complete", () => {
      this.nonna.anims.stop()
      this.nonna.setFrame(0)
    })

    this.dialogueSound.play({ volume: 10 })

    const nextButton = this.add
      .image(230, this.cameras.main.height - 200, "nextButton")
      .setOrigin(0.5, 0.5)
      .setInteractive()
    nextButton.setScale(250 / this.cameras.main.width)
    nextButton.preFX.addShadow()

    nextButton.on(
      "pointerover",
      function (e) {
        hoverSound.play()
        nextButton.setScale(300 / this.cameras.main.width)
      },
      this
    )

    nextButton.on(
      "pointerout",
      function (e) {
        nextButton.setScale(250 / this.cameras.main.width)
      },
      this
    )

    nextButton.on(
      "pointerdown",
      (e) => {
        startSound.play()
        this.dialogueSound.stop()
        this.scene.start("Level1")
      },
      this
    )
  }
}
