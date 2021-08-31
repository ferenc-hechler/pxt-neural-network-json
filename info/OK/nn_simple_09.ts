input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
let playerCar: game.LedSprite = null
let score = 0
let gameOn = false
let ergebnis = [0, 0, 0]
playerCar = game.createSprite(2, 4)
playerCar.change(LedSpriteProperty.X, -1)
