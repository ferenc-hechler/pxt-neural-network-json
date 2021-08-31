input.onButtonPressed(Button.A, function () {
    playerCar.change(LedSpriteProperty.X, -1)
})
let playerCar: game.LedSprite = null
let gameOn = false
let score = 0
let ergebnis = [0, 0, 0]
playerCar = game.createSprite(2, 4)
serial.writeLine("START")
