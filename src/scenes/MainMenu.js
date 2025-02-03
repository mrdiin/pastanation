export class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu")
  }

  preload() {
    this.load.image("background", "assets/level-1/bg.png")
    this.load.image("title", "assets/title.png")
    this.load.image("level1", "assets/fettuccine.png")
    this.load.image("level2", "assets/farfalle.png")
    this.load.image("level3", "assets/rigatoni.png")
    this.load.image("level4", "assets/ravioli.png")
    this.load.image("lock", "assets/lock.png")
    this.load.image("title-bg", "assets/title-bg.png")
    this.load.image("startButton", "assets/start-button.png")
    this.load.image("dialogueBg", "assets/dialogue-bg.png")

    this.load.spritesheet("grandma", "assets/grandma-blinking.png", {
      frameWidth: 1125,
      frameHeight: 1125,
    })
  }

  create() {
    const hoverSound = this.sound.add("hover")
    const startSound = this.sound.add("start")
    const selectSound = this.sound.add("select")

    const bg = this.add.image(0, 0, "background")
    bg.setOrigin(0, 0)
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height) // Scale to fit

    const title = this.add
      .image(this.cameras.main.width / 2, 200, "title")
      .setOrigin(0.5, 0.5)
      .setScale(0.5)

    title.preFX.addShadow()

    const muteIcon = this.add.image(100, 100, "muteIcon")
    muteIcon.setInteractive()
    muteIcon.setScale(0.1)
    muteIcon.setVisible(false)

    muteIcon.on("pointerdown", () => {
      this.sound.mute = false
      selectSound.play()
      muteIcon.setVisible(false)
      soundIcon.setVisible(true)
    })

    const soundIcon = this.add.image(100, 100, "soundIcon")
    soundIcon.setInteractive()
    soundIcon.setScale(0.1)

    soundIcon.on("pointerdown", () => {
      selectSound.play()
      this.sound.mute = true
      muteIcon.setVisible(true)
      soundIcon.setVisible(false)
    })

    this.anims.create({
      key: "grandma",
      frames: this.anims.generateFrameNumbers("grandma", {
        start: 0,
        end: 8,
      }),
      frameRate: 5,
      repeat: -1,
    })
    this.nonna = this.add
      .sprite(
        this.cameras.main.width / 2,
        this.cameras.main.height - 300,
        "grandma"
      )
      .setOrigin(0.5, 0.5)
    this.nonna.setScale(700 / this.nonna.width)
    this.nonna.preFX.addShadow()
    this.nonna.play("grandma")

    const startButton = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 4 + 250,
        "startButton"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()
    startButton.setScale(250 / this.cameras.main.width)
    startButton.preFX.addShadow()

    startButton.on(
      "pointerover",
      function (e) {
        hoverSound.play()
        startButton.setScale(300 / this.cameras.main.width)
      },
      this
    )

    startButton.on(
      "pointerout",
      function (e) {
        startButton.setScale(250 / this.cameras.main.width)
      },
      this
    )

    startButton.on(
      "pointerdown",
      function (e) {
        startSound.play()
        this.scene.start("Level1IntroStep1")
      },
      this
    )
  }
}
