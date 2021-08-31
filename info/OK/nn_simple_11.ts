input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        //playerCar.change(LedSpriteProperty.X, -1)
    }
})
let playerCar: game.LedSprite = null
playerCar = game.createSprite(2, 4)
serial.writeLine("START")
