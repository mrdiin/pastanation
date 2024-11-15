export class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1")
  }

  preload() {
    this.load.image("level-1-bg", "assets/level-1-bg.png")
    this.load.image("choppingBoard", "assets/chopping-board.png")
    this.load.image("clipboard", "assets/clipboard.png")
    this.load.image("flour", "assets/flour.png")
    this.load.image("flourEggOne", "assets/flour-egg-1.png")
    this.load.image("flourEggTwo", "assets/flour-egg-2.png")
    this.load.image("flourJar", "assets/sprites/flour-jar.png")
    this.load.image("saltJar", "assets/sprites/salt-jar.png")
    this.load.image("semolinaJar", "assets/sprites/semolina-flour-jar.png")
    this.load.image("oliveOil", "assets/sprites/olive-oil.png")
    this.load.image("knife", "assets/sprites/knife.png")
    this.load.image("eggs", "assets/sprites/eggs.png")
    this.load.image("whisk", "assets/sprites/whisk.png")
    this.load.image("whiskedEggs", "assets/whisked-eggs.png")
    this.load.image("napkin", "assets/napkin.png")
    this.load.image("tissues", "assets/tissues.png")
    this.load.image("tomatoes", "assets/sprites/tomatoes.png")
    this.load.image("basil", "assets/sprites/basil.png")

    this.load.spritesheet("kneading", "assets/kneading-sprites/sprite.png", {
      frameWidth: 1000, // Width of each frame
      frameHeight: 1000, // Height of each frame
    })
  }

  create() {
    this.graphics = this.add.graphics()
    this.graphics.lineStyle(4, 0xff0000, 1) // Red line for the strike effect
    this.graphics.setVisible(false)

    const instructions = [
      "Add 100g flour",
      "Crack 2 eggs",
      "Whisk the eggs",
      "Knead the dough",
      "Rest the dough for\n30 min",
      "Cut the dough",
    ]
    this.currentStep = 0
    const hoverSound = this.sound.add("hover")
    const wrongOption = this.sound.add("wrongOption")
    const selectSound = this.sound.add("select")

    const bg = this.add.image(0, 0, "level-1-bg")
    bg.setOrigin(0, 0)
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height)
    bg.preFX.addVignette(0.5, 0.5, 0.9, 0.5)

    const choppingBoard = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "choppingBoard"
    )
    choppingBoard.setOrigin(0.5, 0.5)
    choppingBoard.setScale(800 / choppingBoard.width)
    choppingBoard.preFX.addShadow()

    const clipboard = this.add.image(
      this.cameras.main.width - 750,
      this.cameras.main.height / 2,
      "clipboard"
    )
    clipboard.setOrigin(0, 0.5)
    clipboard.setScale(800 / clipboard.width)
    clipboard.preFX.addShadow()

    for (let i = 0; i < instructions.length; i++) {
      const instructionText = this.add.text(
        this.cameras.main.width - 450,
        this.cameras.main.height / 2 + 50 * i - 150,
        instructions[i],
        {
          fontSize: "26px",
          fontFamily: "PixelFont",
          fill: "#000000",
        }
      )
      instructionText.setOrigin(0, 0.5)
      const graphics = this.add.graphics()

      graphics.fillStyle(0xffffff, 1)

      graphics.fillRect(
        this.cameras.main.width - 490,
        this.cameras.main.height / 2 + 50 * i - 165,
        30,
        30
      )
    }

    const saltJar = this.add
      .image(250, 550, "saltJar")
      .setScale(0.075)
      .setInteractive()
    saltJar.preFX.addShadow()
    const napkin = this.add
      .image(200, 1050, "napkin")
      .setScale(0.3)
      .setInteractive()
    napkin.preFX.addShadow()
    const semolinaJar = this.add
      .image(500, 400, "semolinaJar")
      .setScale(0.12)
      .setInteractive()
    semolinaJar.preFX.addShadow()
    const eggs = this.add
      .image(-40, 10, "eggs")
      .setScale(0.2)
      .setOrigin(0, 0)
      .setInteractive()
    eggs.preFX.addShadow()
    const flourJar = this.add
      .image(0, 440, "flourJar")
      .setScale(0.2)
      .setOrigin(0, 0)
      .setInteractive()
    flourJar.preFX.addShadow()
    const oliveOil = this.add
      .image(480, 130, "oliveOil")
      .setScale(0.1)
      .setInteractive()
    oliveOil.preFX.addShadow()

    const tomatoes = this.add
      .image(200, 1050, "tomatoes")
      .setScale(0.15)
      .setInteractive()
    tomatoes.preFX.addShadow()
    const basil = this.add
      .image(530, 1080, "basil")
      .setScale(0.18)
      .setInteractive()
    basil.preFX.addShadow()
    const whisk = this.add
      .image(550, 690, "whisk")
      .setScale(0.4)
      .setInteractive()
    whisk.preFX.addShadow()
    const knife = this.add
      .image(1150, 250, "knife")
      .setScale(0.4)
      .setInteractive()
    knife.preFX.addShadow()
    const tissues = this.add
      .image(750, 160, "tissues")
      .setScale(0.15)
      .setInteractive()
    tissues.preFX.addShadow()
    const items = [
      flourJar,
      saltJar,
      semolinaJar,
      whisk,
      eggs,
      knife,
      oliveOil,
      tomatoes,
      basil,
    ]
    items.forEach((item) => {
      let glow
      item.on("pointerover", () => {
        hoverSound.play()
        glow = item.preFX.addGlow("0xffc75e", 1, 0, false)
      })
      item.on("pointerout", () => {
        glow.setActive(false)
      })
      item.on("pointerdown", () => {
        selectSound.play()
      })
    })
    let flour

    flourJar.on("pointerdown", () => {
      if (this.currentStep === 0) {
        flour = this.add.image(
          this.cameras.main.width / 2 + 20,
          this.cameras.main.height / 2 + 20,
          "flour"
        )
        flour.setOrigin(0.5, 0.5)
        const desiredWidth = 500
        const scale = desiredWidth / flour.width
        flour.setScale(scale)
        flour.setInteractive()
        flour.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)

        this.markStepCompleted()
      } else {
        wrongOption.play()
      }
    })

    let flourEgg

    eggs.on("pointerdown", () => {
      flour.destroy()
      if (!flourEgg) {
        flourEgg = this.add.image(
          this.cameras.main.width / 2 + 20,
          this.cameras.main.height / 2 + 20,
          "flourEggOne"
        )
        flourEgg.setOrigin(0.5, 0.5)
        const desiredWidth = 500
        const scale = desiredWidth / flourEgg.width
        flourEgg.setScale(scale)
        flourEgg.setInteractive()
        flourEgg.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
      } else {
        flourEgg.destroy()
        flourEgg = this.add.image(
          this.cameras.main.width / 2 + 20,
          this.cameras.main.height / 2 + 20,
          "flourEggTwo"
        )
        flourEgg.setOrigin(0.5, 0.5)
        const desiredWidth = 500
        const scale = desiredWidth / flourEgg.width
        flourEgg.setScale(scale)
        flourEgg.setInteractive()
        flourEgg.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
        this.markStepCompleted()
      }
    })

    let whiskedEggs
    whisk.on("pointerdown", () => {
      flourEgg.destroy()
      whiskedEggs = this.add.image(
        this.cameras.main.width / 2 + 20,
        this.cameras.main.height / 2 + 20,
        "whiskedEggs"
      )
      whiskedEggs.setOrigin(0.5, 0.5)
      const desiredWidth = 500
      const scale = desiredWidth / whiskedEggs.width
      whiskedEggs.setScale(scale)
      whiskedEggs.setInteractive()
      whiskedEggs.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
      this.markStepCompleted()

      whiskedEggs.on("pointerdown", () => {
        whiskedEggs.destroy()
        this.anims.create({
          key: "knead",
          frames: this.anims.generateFrameNumbers("kneading", {
            start: 0,
            end: 15,
          }),
          frameRate: 5, // Adjust frame rate for desired speed
          repeat: 0,
        })
        const dough = this.add.sprite(
          this.cameras.main.width / 2 + 20,
          this.cameras.main.height / 2 + 20,
          "kneading"
        )
        dough.setOrigin(0.5, 0.5)
        dough.setScale(400 / dough.width)
        dough.preFX.addShadow()
        dough.play("knead")
        this.markStepCompleted()
      })
    })
  }

  markStepCompleted() {
    const graphics = this.add.graphics()
    graphics.fillStyle(0x00ff00, 1)

    graphics.fillRect(
      this.cameras.main.width - 490,
      this.cameras.main.height / 2 + 50 * this.currentStep - 165,
      30,
      30
    )
    
    this.currentStep++
  }
}
