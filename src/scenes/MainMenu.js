export class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu")
  }

  preload() {
    this.load.image("background", "assets/bg.png")
    this.load.image("title", "assets/title.png")
    this.load.image("level1", "assets/spaghetti.png")
    this.load.image("level2", "assets/farfalle.png")
    this.load.image("level3", "assets/lasagna.png")
    this.load.image("level4", "assets/rigatoni.png")
    this.load.image("lock", "assets/lock.png")
    this.load.image("soundIcon", "assets/headphones.png")
    this.load.image("muteIcon", "assets/mute.png")
    this.load.audio("hover", "assets/sound-effects/hover.wav")
    this.load.audio("start", "assets/sound-effects/start.wav")
    this.load.audio("select", "assets/sound-effects/select.wav")
    this.load.audio("bgm", "assets/sound-effects/bgm.mp3")
  }

  create() {
    const hoverSound = this.sound.add("hover")
    const startSound = this.sound.add("start")
    const selectSound = this.sound.add("select")
    const bgm = this.sound.add("bgm")

    bgm.play({ loop: true, volume: 0.3 })

    const bg = this.add.image(0, 0, "background")
    bg.setOrigin(0, 0)
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height) // Scale to fit

    const title = this.add.image(this.cameras.main.width / 2, 0, "title")
    title.setOrigin(0.5, 0)
    const desiredWidth = 700 // Replace with your desired width
    const scale = desiredWidth / title.width
    title.setScale(scale)

    const levelTileWidth = 300
    const levelTileScale = levelTileWidth / title.width

    const levels = []

    for (let i = 0; i < 4; i++) {
      const level = this.add
        .image(200 + i * 210, 450, `level${i + 1}`)
        .setInteractive()
      level.setScale(levelTileScale)
      levels.push(level)
    }

    for (let i = 0; i < 4; i++) {
      const group = this.add.group()
      const level = levels[i]
      group.add(level)
      if (i !== 0) {
        const lock = this.add.image(410 + (i - 1) * 210, 450, "lock")
        lock.setScale(0.1)
        levels[i].setTint(0x808080)
        group.add(lock)
      }
      level.on("pointerover", () => {
        level.setScale(levelTileScale + 0.02)
        hoverSound.play()
      })

      level.on("pointerout", () => {
        level.setScale(levelTileScale)
      })
    }

    levels[0].on("pointerdown", () => {
      startSound.play()
      this.scene.start("Level1")
    })

    const muteIcon = this.add.image(50, 50, "muteIcon")
    muteIcon.setInteractive()
    muteIcon.setScale(0.05)
    muteIcon.setVisible(false)

    muteIcon.on("pointerdown", () => {
      this.sound.mute = false
      selectSound.play()
      muteIcon.setVisible(false)
      soundIcon.setVisible(true)
    })

    const soundIcon = this.add.image(50, 50, "soundIcon")
    soundIcon.setInteractive()
    soundIcon.setScale(0.05)

    soundIcon.on("pointerdown", () => {
      selectSound.play()
      this.sound.mute = true
      muteIcon.setVisible(true)
      soundIcon.setVisible(false)
    })
  }
}
