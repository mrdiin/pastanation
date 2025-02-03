export class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1")
  }

  preload() {
    this.load.image("level-1-bg", "assets/level-1/bg.png")
    this.load.image("choppingBoard", "assets/level-1/chopping-board.png")
    this.load.image("clipboard", "assets/clipboard.png")
    this.load.image("well", "assets/level-1/well.png")
    this.load.image("flourMound", "assets/level-1/flour-mound.png")
    this.load.image("flourEggOne", "assets/level-1/flour-egg-one.png")
    this.load.image("flourEggTwo", "assets/level-1/flour-egg-two.png")
    this.load.image("flourJarBase", "assets/level-1/flour-jar-base.png")
    this.load.image("saltJar", "assets/level-1/salt-jar.png")
    this.load.image("semolinaJar", "assets/level-1/semolina-jar.png")
    this.load.image("oliveOil", "assets/level-1/olive-oil.png")
    this.load.image("knife", "assets/level-1/knife.png")
    this.load.image("eggCarton", "assets/level-1/egg-carton.png")
    this.load.image("eggOutline", "assets/level-1/egg-outline.png")
    this.load.image("fork", "assets/level-1/fork.png")
    this.load.image("whiskedEggs", "assets/level-1/whisked-eggs.png")
    this.load.image("tissues", "assets/level-1/tissues.png")
    this.load.image("tomatoes", "assets/level-1/tomatoes.png")
    this.load.image("basil", "assets/level-1/basil.png")
    this.load.image("sparkle", "assets/sparkle.png")
    this.load.image("flourParticle", "assets/flour-particle.png")
    this.load.image("spiral", "assets/spiral.png")
    this.load.image("rollingPin", "assets/level-1/rolling-pin.png")
    this.load.image("slice1", "assets/sliced-dough/1.png")
    this.load.image("slice2", "assets/sliced-dough/2.png")
    this.load.image("slice3", "assets/sliced-dough/3.png")
    this.load.image("slice4", "assets/sliced-dough/4.png")
    this.load.image("toastBg", "assets/level-1/toast-bg.png")
    this.load.image("arrow", "assets/level-1/arrow.png")
    this.load.image("clockwiseArrow", "assets/level-1/clockwise-arrow.png")
    this.load.image(
      "antiClockwiseArrow",
      "assets/level-1/anticlockwise-arrow.png"
    )
    this.load.image("crackedEggs1", "assets/level-1/cracked-eggs-1.png")
    this.load.image("crackedEggs2", "assets/level-1/cracked-eggs-2.png")
    this.load.image("crackedEggs3", "assets/level-1/cracked-eggs-3.png")
    this.load.image("crackedEggs4", "assets/level-1/cracked-eggs-4.png")
    this.load.image("crackedEggs5", "assets/level-1/cracked-eggs-5.png")
    this.load.image("dough1", "assets/level-1/dough-1.png")
    this.load.image("dough2", "assets/level-1/dough-2.png")
    this.load.image("dough3", "assets/level-1/dough-3.png")
    this.load.image("dough4", "assets/level-1/dough-4.png")
    this.load.image("dough5", "assets/level-1/dough-5.png")
    this.load.image("dough6", "assets/level-1/dough-6.png")

    this.load.spritesheet("kneading", "assets/kneading-sprites/sprite.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    })

    this.load.spritesheet("flourJar", "assets/level-1/flour-jar.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    })

    this.load.spritesheet("egg", "assets/level-1/egg.png", {
      frameWidth: 360,
      frameHeight: 360,
    })

    this.load.spritesheet("napkin", "assets/level-1/napkin.png", {
      frameWidth: 540,
      frameHeight: 540,
    })

    this.load.audio("eggCracking", "assets/sound-effects/cracking-egg.mp3")

    this.load.audio("step-1", "assets/level-1/dialogues/step-1-edited.mp3")
    this.load.audio("step-2", "assets/level-1/dialogues/step-2-edited.mp3")
    this.load.audio("step-3", "assets/level-1/dialogues/step-3-edited.mp3")
    this.load.audio("step-4", "assets/level-1/dialogues/step-4-edited.mp3")
    this.load.audio("step-5", "assets/level-1/dialogues/step-5-edited.mp3")
    this.load.audio("step-6", "assets/level-1/dialogues/step-6-edited.mp3")
    this.load.audio("step-7", "assets/level-1/dialogues/step-7-edited.mp3")
  }

  create() {
    this.hoverSound = this.sound.add("hover")
    this.wrongOption = this.sound.add("wrongOption")
    this.selectSound = this.sound.add("select")

    this.setBg()
    this.setChoppingBoard()
    this.setItems()
    this.setInstructions()

    this.currentStep = 0
    this.placeFlour()
  }

  markStepCompleted() {
    this.currentStep++
  }

  setItems() {
    const createItem = (x, y, key, scale, origin = { x: 0.5, y: 0.5 }) => {
      const item = this.add
        .image(x, y, key)
        .setScale(scale)
        .setOrigin(origin.x, origin.y)
        .setInteractive()
        .setDepth(2)
      item.preFX.addShadow()
      return item
    }

    this.items = {
      saltJar: { x: 1050, y: 110, key: "saltJar", scale: 0.09 },
      semolinaJar: { x: 520, y: 400, key: "semolinaJar", scale: 0.12 },
      eggCarton: {
        x: 30,
        y: 30,
        key: "eggCarton",
        scale: 0.18,
        origin: { x: 0, y: 0 },
      },
      flourJarBase: {
        x: 0,
        y: 400,
        key: "flourJarBase",
        scale: 0.22,
        origin: { x: 0, y: 0 },
      },
      oliveOil: { x: 525, y: 130, key: "oliveOil", scale: 0.1 },
      basil: { x: 530, y: 1080, key: "basil", scale: 0.18 },
      fork: { x: 550, y: 690, key: "fork", scale: 0.18 },
      knife: { x: 1150, y: 250, key: "knife", scale: 0.2 },
      tissues: { x: 775, y: 160, key: "tissues", scale: 0.15 },
      rollingPin: {
        x: 950,
        y: 1100,
        key: "rollingPin",
        scale: 0.25,
        origin: { x: 0.5, y: 0.5 },
      },
    }

    Object.entries(this.items).forEach(([key, item]) => {
      const createdItem = createItem(
        item.x,
        item.y,
        item.key,
        item.scale,
        item.origin || undefined
      )

      let glow
      createdItem.on("pointerover", () => {
        this.hoverSound.play()
        glow = createdItem.preFX.addGlow("0xffc75e", 1, 0, false)
      })
      createdItem.on("pointerout", () => {
        glow?.setActive(false)
      })

      this.items[key] = createdItem
    })

    this.setEggs()
    this.setNapkin()
    this.setFlourJar()
  }

  setEggs() {
    this.items.eggs = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const egg = this.add
          .sprite(100 + i * 110, 100 + j * 100, "egg")
          .setScale(0.45)
          .setDepth(3)
          .setInteractive()

        egg.preFX.addShadow()

        this.anims.create({
          key: "egg",
          frames: this.anims.generateFrameNumbers("egg", {
            start: 0,
            end: 8,
          }),
          frameRate: 15,
          repeat: 0,
        })
        this.items.eggs.push(egg)
      }
    }
  }

  setNapkin() {
    this.items.napkin = this.add
      .sprite(200, 1050, "napkin")
      .setOrigin(0.5, 0.5)
      .setScale(0.8)
      .setDepth(2)
      .setInteractive()
    this.items.napkin.preFX.addShadow()

    this.anims.create({
      key: "napkin",
      frames: this.anims.generateFrameNumbers("napkin", {
        start: 0,
        end: 3,
      }),
      frameRate: 8,
      repeat: 0,
    })
  }

  setFlourJar() {
    this.items.flourJar = this.add
      .sprite(-70, 320, "flourJar")
      .setOrigin(0, 0)
      .setScale(0.6)
      .setDepth(2)
      .setInteractive()
    this.items.flourJar.preFX.addShadow()

    this.anims.create({
      key: "flourJar",
      frames: this.anims.generateFrameNumbers("flourJar", {
        start: 0,
        end: 11,
      }),
      frameRate: 15,
      repeat: -1,
    })
  }

  placeFlour() {
    const { x, y } = this.items.flourJar
    this.showToast(
      "First, we make the dough. Take some flour—just a nice mound on the table.",
      "step-1"
    )
    this.input.setDraggable(this.items["flourJar"])

    this.items.flourJar.on("drag", (pointer, dragX, dragY) => {
      this.items.flourJar.x = dragX
      this.items.flourJar.y = dragY
    })

    this.items["flourJar"].on("dragend", () => {
      const object1Bounds = this.items.flourJar.getBounds()
      const object2Bounds = this.choppingBoard.getBounds()

      if (
        Phaser.Geom.Intersects.RectangleToRectangle(
          object1Bounds,
          object2Bounds
        ) &&
        this.currentStep === 0
      ) {
        this.selectSound.play()
        this.items.flourJar.play("flourJar")
        this.currentStepObj = this.add
          .image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "flourMound"
          )
          .setOrigin(0.5, 0.5)
          .setInteractive()

        this.currentStepObj.setScale(500 / this.currentStepObj.width)

        this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)

        this.tweens.add({
          targets: this.currentStepObj,
          scale: { from: 0, to: 500 / this.currentStepObj.width },
          duration: 3000,
          ease: "Power0",
          yoyo: false,
          repeat: 0,

          onComplete: () => {
            this.markStepCompleted()
            this.makeWellInFlour()
            this.items.flourJar.anims.stop()
            this.items.flourJar.setFrame(0)
            this.tweens.add({
              targets: this.items.flourJar,
              x,
              y,
              duration: 500,
              ease: "Power0",
              yoyo: false,
              repeat: 0,
            })
            this.input.setDraggable(this.items.flourJar, false)
          },
        })

        this.addSparkle(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2
        )
      } else {
        this.wrongOption.play()
      }
    })
  }

  makeWellInFlour() {
    this.showToast(
      "Now, make a little well in the middle. Like a tiny volcano! Perfect for cracking the eggs into. Don’t be shy, now!",
      "step-2"
    )

    let clicks = 0
    let graphics = this.add.graphics()
    graphics.lineStyle(4, 0x47261e)
    const circle = graphics
      .strokeCircle(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        110
      )
      .setDepth(2)
      .setInteractive()

    this.tweens.add({
      targets: circle,
      alpha: { from: 0.4, to: 1 },
      duration: 1000,
      ease: "Power0",
      yoyo: true,
      repeat: -1,
    })

    let circleHitArea = this.add
      .circle(this.cameras.main.width / 2, this.cameras.main.height / 2, 110)
      .setDepth(2)
      .setInteractive()

    const widths = [300, 400, 500]

    circleHitArea.on("pointerdown", () => {
      this.well?.destroy()
      this.well = this.add
        .image(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2,
          "well"
        )
        .setOrigin(0.5, 0.5)
        .setInteractive()

      this.well.setScale(widths[clicks] / this.well.width)
      this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)
      clicks++

      if (clicks === 3) {
        graphics.clear()
        circleHitArea.destroy()
        this.crackEggs()
      }
    })
  }

  setChoppingBoard() {
    this.choppingBoard = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "choppingBoard"
      )
      .setOrigin(0.5, 0.5)
    this.choppingBoard.setScale(650 / this.choppingBoard.width)
    this.choppingBoard.preFX.addShadow()
  }

  setInstructions() {
    this.nonna = this.add
      .sprite(
        this.cameras.main.width - 700,
        this.cameras.main.height - 300,
        "grandmaSpeaking"
      )
      .setOrigin(0, 0.5)
    this.nonna.setScale(700 / this.nonna.width)
    this.nonna.preFX.addShadow()
  }

  setBg() {
    const bg = this.add.image(0, 0, "level-1-bg")
    bg.setOrigin(0, 0)
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height)
    bg.preFX.addVignette(0.5, 0.5, 0.9, 0.5)
  }

  crackEggs() {
    this.showToast(
      "Now, it’s time for the eggs! Crack the eggs gently, like you’re handling a newborn chick. No shell pieces, eh? We don’t want crunchy pasta!",
      "step-3"
    )

    const crackingSound = this.sound.add("eggCracking")

    let eggOutline = this.add
      .image(
        this.cameras.main.width / 2 - 30,
        this.cameras.main.height / 2 + 10,
        "eggOutline"
      )
      .setScale(0.08)
      .setInteractive()

    this.tweens.add({
      targets: [eggOutline],
      alpha: 0.2,
      duration: 500,
      ease: "Power0",
      yoyo: true,
      repeat: -1,
    })

    let eggsCracked = 0

    this.items["eggs"].forEach((egg) => {
      this.input.setDraggable(egg)

      let [x, y] = [egg.x, egg.y]

      egg.on("drag", (pointer, dragX, dragY) => {
        egg.x = dragX
        egg.y = dragY
      })

      egg.on("dragend", () => {
        const object1Bounds = egg.getBounds()
        const object2Bounds = this.currentStepObj.getBounds()

        crackingSound.play()

        if (
          Phaser.Geom.Intersects.RectangleToRectangle(
            object1Bounds,
            object2Bounds
          ) &&
          this.currentStep === 1
        ) {
          egg.play("egg")
          egg.on("animationcomplete", () => {
            egg.destroy()
            eggOutline.destroy()

            if (eggsCracked === 0) {
              this.crackedEggs = this.add
                .image(
                  this.cameras.main.width / 2,
                  this.cameras.main.height / 2,
                  "crackedEggs1"
                )
                .setOrigin(0.5, 0.5)
                .setInteractive()
              this.crackedEggs.setScale(500 / this.crackedEggs.width)
              eggsCracked++
              eggOutline = this.add
                .image(
                  this.cameras.main.width / 2 + 40,
                  this.cameras.main.height / 2 - 30,
                  "eggOutline"
                )
                .setScale(0.08)
                .setInteractive()

              this.tweens.add({
                targets: [eggOutline],
                alpha: 0.2,
                duration: 500,
                ease: "Power0",
                yoyo: true,
                repeat: -1,
              })
            } else {
              eggOutline.destroy()
              this.crackedEggs.destroy()
              this.crackedEggs = this.add
                .image(
                  this.cameras.main.width / 2,
                  this.cameras.main.height / 2,
                  "crackedEggs2"
                )
                .setOrigin(0.5, 0.5)
                .setInteractive()
              this.crackedEggs.setScale(500 / this.crackedEggs.width)
              this.addSparkle(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2
              )
              this.markStepCompleted()
              this.whiskEggs()
            }
          })
        } else {
          this.wrongOption.play()
          this.tweens.add({
            targets: egg,
            x,
            y,
            duration: 500,
            ease: "Power2",
          })
        }
      })
    })
  }

  whiskEggs() {
    this.showToast(
      "Ah, look at that—beautiful! Now, use your fork to gently mix the eggs.",
      "step-4"
    )

    const fork = this.items["fork"]
    const { x, y } = fork

    this.input.setDraggable(fork)

    let lastX = null
    let whiskCount = 0
    let stage = 3
    let whiskingComplete = false

    fork.on("dragstart", (pointer) => {
      if (whiskingComplete) return
    })

    fork.on("drag", (pointer, dragX, dragY) => {
      if (this.currentStep !== 2) return
      fork.x = dragX
      fork.y = dragY

      this.tweens.add({
        targets: this.crackedEggs,
        angle: 360,
        duration: 1000,
        ease: "Linear",
        repeat: 0,
      })

      if (lastX !== null) {
        if (Math.abs(dragX - lastX) > 100) {
          whiskCount++
          lastX = dragX
          if (whiskCount % 7 === 0 && !whiskingComplete) {
            this.crackedEggs.destroy()
            this.crackedEggs = this.add
              .image(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                "crackedEggs" + stage
              )
              .setOrigin(0.5, 0.5)
              .setInteractive()
            this.crackedEggs.setScale(500 / this.crackedEggs.width)
            stage++
            this.addSparkle(
              this.cameras.main.width / 2,
              this.cameras.main.height / 2
            )
          }
        }
      } else {
        lastX = dragX
      }

      if (whiskCount === 21 && !whiskingComplete) {
        whiskingComplete = true
        this.markStepCompleted()
        this.kneadDough()
      }
    })

    fork.on("dragend", () => {
      lastX = null

      this.tweens.add({
        targets: fork,
        x,
        y,
        duration: 500,
        ease: "Power2",
      })
    })
  }

  kneadDough() {
    this.showToast(
      "Time to get your hands dirty! Knead the dough like it owes you rent! Push, fold, and turn. Feel it! It should be smooth like a bambino’s cheek.",
      "step-5"
    )

    this.kneadDown()
  }

  kneadDown() {
    const arrows = this.add.group()
    const coords = [-100, 0, 100]
    for (let c of coords) {
      let arrow = this.add
        .image(
          this.cameras.main.width / 2 + c,
          this.cameras.main.height / 2,
          "arrow"
        )
        .setOrigin(0.5, 0.5)
        .setInteractive()
      arrow.setScale(300 / arrow.width)
      arrows.add(arrow)
    }

    let startX, startY, endX, endY
    let downSwipes = 0

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "down")) {
        downSwipes++
        this.addSparkle(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2
        )
        let firstArrow = arrows.getFirstAlive()
        if (firstArrow) {
          firstArrow.destroy()
          arrows.remove(firstArrow)
        }
        if (downSwipes === 3) {
          arrows.clear(true, true)
          this.input.removeListener("pointerdown")
          this.input.removeListener("pointerup")
          this.kneadRight()
        }
      }
    })
  }

  kneadRight() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough1"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)

    const arrows = this.add.group()
    const coords = [-100, 0, 100]
    for (let c of coords) {
      let arrow = this.add
        .image(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2 + c,
          "arrow"
        )
        .setAngle(-90)
        .setOrigin(0.5, 0.5)
        .setInteractive()
      arrow.setScale(300 / arrow.width)
      arrows.add(arrow)
    }

    let startX, startY, endX, endY
    let rightSwipes = 0

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "right")) {
        rightSwipes++
        this.addSparkle(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2
        )
        let firstArrow = arrows.getFirstAlive()
        if (firstArrow) {
          firstArrow.destroy()
          arrows.remove(firstArrow)
        }
        if (rightSwipes === 3) {
          arrows.clear(true, true)
          this.input.removeListener("pointerdown")
          this.input.removeListener("pointerup")
          this.kneadClockwise()
        }
      }
    })
  }

  kneadClockwise() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough2"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)
    const arrow = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "clockwiseArrow"
      )
      .setAngle(-90)
      .setOrigin(0.5, 0.5)
      .setInteractive()
    arrow.setScale(300 / arrow.width)

    let startX, startY, endX, endY

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "up")) {
        arrow.destroy()
        this.input.removeListener("pointerdown")
        this.input.removeListener("pointerup")
        this.kneadAntiClockwise()
      }
    })
  }

  kneadAntiClockwise() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough3"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)
    const arrow = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "antiClockwiseArrow"
      )
      .setAngle(-90)
      .setOrigin(0.5, 0.5)
      .setInteractive()
    arrow.setScale(300 / arrow.width)

    let startX, startY, endX, endY

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "up")) {
        arrow.destroy()
        this.input.removeListener("pointerdown")
        this.input.removeListener("pointerup")
        this.kneadUp()
      }
    })
  }

  kneadUp() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough4"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)

    const arrow = this.add
      .image(this.cameras.main.width / 2, this.cameras.main.height / 2, "arrow")
      .setOrigin(0.5, 0.5)
      .setAngle(-180)
      .setInteractive()
    arrow.setScale(300 / arrow.width)

    let startX, startY, endX, endY

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "up")) {
        arrow.destroy()
        this.input.removeListener("pointerdown")
        this.input.removeListener("pointerup")
        this.kneadDownAgain()
      }
    })
  }

  kneadDownAgain() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough5"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)
    const arrow = this.add
      .image(this.cameras.main.width / 2, this.cameras.main.height / 2, "arrow")
      .setOrigin(0.5, 0.5)
      .setInteractive()
    arrow.setScale(300 / arrow.width)

    let startX, startY, endX, endY

    this.input.on("pointerdown", (pointer) => {
      startX = pointer.x
      startY = pointer.y
    })

    this.input.on("pointerup", (pointer) => {
      endX = pointer.x
      endY = pointer.y

      if (this.detectSwipe(startX, startY, endX, endY, "down")) {
        arrow.destroy()
        this.input.removeListener("pointerdown")
        this.input.removeListener("pointerup")
        this.kneadUpAgain()
      }
    })
  }

  kneadUpAgain() {
    this.currentStepObj.destroy()
    this.currentStepObj = this.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "dough6"
      )
      .setOrigin(0.5, 0.5)
      .setInteractive()

    this.currentStepObj.setScale(500 / this.currentStepObj.width)

    this.currentStepObj.preFX.addShadow(0, 0, 0.1, 1, "0x000000", 6, 0.5)
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)

    this.restDough()
  }

  restDough() {
    this.showToast(
      "Bravo! You kneaded that dough like a true pasta master! But listen, even dough needs a little nap. If you try to roll it out now, it will fight back like a stubborn mule!",
      "step-6",
      () => {
        this.showToast(
          "Wrap it up nice and cozy, let it rest for at least 30 minutes. This gives the gluten time to relax—just like you should!",
          "step-7"
        )
      }
    )

    const napkin = this.items.napkin
    const { x, y } = napkin

    this.input.setDraggable(napkin)

    napkin.on("drag", (pointer, dragX, dragY) => {
      napkin.x = dragX
      napkin.y = dragY
    })

    napkin.on("dragend", () => {
      const object1Bounds = this.items.napkin.getBounds()
      const object2Bounds = this.choppingBoard.getBounds()

      if (
        Phaser.Geom.Intersects.RectangleToRectangle(
          object1Bounds,
          object2Bounds
        )
      ) {
        this.selectSound.play()
        this.items.napkin.play("napkin")
        this.currentStepObj.destroy()

        this.addSparkle(
          this.cameras.main.width / 2,
          this.cameras.main.height / 2
        )

        this.time.delayedCall(5000, () => {
          this.anims.create({
            key: "reverseNapkin",
            frames: this.anims.generateFrameNumbers("napkin", {
              start: 3,
              end: 0,
            }),
            frameRate: 10,
            repeat: 0,
          })

          this.items.napkin.play("reverseNapkin")

          this.items.napkin.on("animationcomplete", () => {
            this.currentStepObj = this.add
              .image(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                "dough6"
              )
              .setOrigin(0.5, 0.5)
              .setInteractive()

            this.currentStepObj.setScale(500 / this.currentStepObj.width)

            this.currentStepObj.preFX.addShadow(
              0,
              0,
              0.1,
              1,
              "0x000000",
              6,
              0.5
            )

            this.tweens.add({
              targets: this.items.napkin,
              x: 200,
              y: 1050,
              duration: 500,
              ease: "Power2",
            })
          })

          this.rollDough()
        })
      } else {
        this.wrongOption.play()
      }
    })
  }

  rollDough() {
    this.showToast(
      "Now, the real fun begins! Grab your rolling pin. Roll the dough out nice and thin—like a sheet of paper."
    )
  }

  detectSwipe(startX, startY, endX, endY, direction) {
    let deltaX = endX - startX
    let deltaY = endY - startY
    let swipeThreshold = 50

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX > 0) {
          console.log("Swiped Right ➡️")
          return direction === "right"
        } else {
          console.log("Swiped Left ⬅️")
          return direction === "left"
        }
      }
    } else {
      if (Math.abs(deltaY) > swipeThreshold) {
        if (deltaY > 0) {
          console.log("Swiped Down ⬇️")
          return direction === "down"
        } else {
          console.log("Swiped Up ⬆️")
          return direction === "up"
        }
      }
    }
  }

  handleFifthStep() {
    this.handleSixthStep()
  }

  handleSixthStep() {
    let cuts = []
    const { x, y } = this.items.knife

    // Draw cutting guides
    const graphics = this.add.graphics()

    graphics.lineStyle(10, 0xffffff, 0.5)

    graphics.beginPath()
    graphics.moveTo(
      this.cameras.main.width / 2 - 200,
      this.cameras.main.height / 2
    )
    graphics.lineTo(
      this.cameras.main.width / 2 + 200,
      this.cameras.main.height / 2
    )
    graphics.moveTo(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 - 200
    )
    graphics.lineTo(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 + 200
    )
    graphics.strokePath()

    let cuttingLine = this.add.graphics({
      lineStyle: { width: 4, color: 0xff0000 },
    })

    let isCutting = false
    let lastPointerPosition = null

    this.input.on("pointerdown", (pointer) => {
      isCutting = true
      lastPointerPosition = { x: pointer.x, y: pointer.y }
    })

    // Handle pointer move (draw cutting line)
    this.input.on("pointermove", (pointer) => {
      if (!isCutting) return

      cuttingLine.clear()
      cuttingLine.lineBetween(
        lastPointerPosition.x,
        lastPointerPosition.y,
        pointer.x,
        pointer.y
      )
      cuttingLine.strokePath()

      const cuttingSegment = new Phaser.Geom.Line(
        lastPointerPosition.x,
        lastPointerPosition.y,
        pointer.x,
        pointer.y
      )
      if (
        Phaser.Geom.Intersects.LineToRectangle(
          cuttingSegment,
          this.currentStepObj.getBounds()
        )
      ) {
        this.currentStepObj.setTint(0xffcccc)
        this.items.knife.setOrigin(0, 0.5)
        this.items.knife.x = pointer.x + 10
        this.items.knife.y = pointer.y + 10
      }
    })
    this.addSparkle(this.cameras.main.width / 2, this.cameras.main.height / 2)

    this.input.on("pointerup", () => {
      isCutting = false
      lastPointerPosition = null
      cuts.push(cuttingLine)
      if (cuts.length === 2) {
        this.showToast("Cutting Completed!")
        this.markStepCompleted()
        this.handleSeventhStep()
        cuts[0].destroy()
        cuts[1].destroy()
        graphics.destroy()
        this.currentStepObj.destroy()
        for (let i = 0; i < 4; i++) {
          this.currentStepObj = this.add.group()
          const slice = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "slice" + (i + 1)
          )
          slice.setOrigin(0.5, 0.5)
          slice.setScale(400 / slice.width)
          this.currentStepObj.add(slice)
          this.tweens.add({
            targets: slice,
            x: this.cameras.main.width / 2 + (i === 0 || i === 3 ? -20 : 40),
            y: this.cameras.main.height / 2 + (i === 0 || i === 1 ? -20 : 40),
            duration: 500,
            ease: "Power2",
          })
          this.items.knife.setOrigin(0.5, 0.5)
          this.tweens.add({
            targets: this.items.knife,
            x,
            y,
            duration: 500,
            ease: "Power2",
          })
          this.markStepCompleted()
          this.addSparkle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2
          )
        }

        return
      }
      cuttingLine = this.add.graphics({
        lineStyle: { width: 4, color: 0xff0000 },
      })
      this.currentStepObj.clearTint()
      this.items.knife.setOrigin(0.5, 0.5)
      this.tweens.add({
        targets: this.items.knife,
        y,
        duration: 500,
        ease: "Power2",
      })
    })
  }

  handleSeventhStep() {}

  addSparkle(x, y, duration = 1000) {
    const sparkleSound = this.sound.add("sparkle")
    sparkleSound.play()
    this.add.particles(x, y, "sparkle", {
      angle: { min: -360, max: 360 },
      speed: 150,
      scaleX: 0.01,
      scaleY: 0.01,
      lifespan: 1000,
      duration,
    })
  }

  showToast(message, audioKey, onDialogueComplete, duration = 2000) {
    const toastBg = this.add
      .image(this.cameras.main.width - 300, 350, "toastBg")
      .setScale(650 / this.cameras.main.width)
      .setDepth(100)

    const toastText = this.add
      .text(this.cameras.main.width - 500, 150, message, {
        fontSize: "44px",
        color: "#47261e",
        fontFamily: "Handwriting",
        wordWrap: { width: 420, useAdvancedWrap: true },
      })
      .setDepth(100)

    const toastGroup = this.add.group([toastBg, toastText])
    if (audioKey) {
      this.dialogue?.stop()
      this.dialogue = this.sound.add(audioKey)
      this.dialogue.once("play", () => {
        this.nonna.play("grandmaSpeaking")
      })
      this.dialogue.once("complete", () => {
        this.nonna.anims.stop()
        this.nonna.setFrame(1)
        if (onDialogueComplete) {
          onDialogueComplete()
        }
      })
      this.dialogue.play({ volume: 10 })
    }
  }
}
