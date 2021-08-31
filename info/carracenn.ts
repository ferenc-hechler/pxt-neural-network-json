input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
let score = 0
let gameOn = false
let Ausgabe_String = ""
let car5: game.LedSprite = null
let car4: game.LedSprite = null
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let snapshot: number[] = []
let playerCar: game.LedSprite = null
let output = ""
let isConnected = 0
isConnected = 0
output = "x"
nntest.fcnnfromjson("{ \t\"params\": [ \t\t{\"input_layer_size\": 3},  \t\t{\"output_layer_size\": 3},  \t\t{ \t\t\t\"activation\": \"tanh\",  \t\t\t\"hidden_layer_sizes\": [3] \t\t} \t],      \"coefs\": [ \t\t[ \t\t\t[1.0, 0.0, 0.0],  \t\t\t[0.0, 1.0, 0.0],  \t\t\t[0.0, 0.0, 1.0] \t\t], \t\t[ \t\t\t[1.0, 2.0, 3.0],  \t\t\t[4.0, 5.0, 6.0],  \t\t\t[7.0, 8.0, 9.0] \t\t] \t], \t\"intercepts\": [ \t\t[ \t\t\t0.0, \t\t\t0.0, \t\t\t0.0 \t\t], \t\t[ \t\t\t0.0, \t\t\t0.0, \t\t\t0.0 \t\t] \t] }")
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car2 = game.createSprite(1, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (car2.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car2)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car2.delete()
                    basic.pause(Math.randomRange(0, 5001))
                    car2 = game.createSprite(1, 0)
                    basic.pause(500)
                }
            } else {
                car2.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car3 = game.createSprite(2, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (car3.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car3)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car3.delete()
                    basic.pause(Math.randomRange(0, 5001))
                    car3 = game.createSprite(2, 0)
                    basic.pause(500)
                }
            } else {
                car3.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car4 = game.createSprite(3, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (car4.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car4)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car4.delete()
                    basic.pause(Math.randomRange(0, 5001))
                    car4 = game.createSprite(3, 0)
                    basic.pause(500)
                }
            } else {
                car4.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car5 = game.createSprite(4, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (car5.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car5)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car5.delete()
                    basic.pause(Math.randomRange(0, 5001))
                    car5 = game.createSprite(4, 0)
                    basic.pause(500)
                }
            } else {
                car5.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car1 = game.createSprite(0, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (car1.get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(car1)) {
                    gameOn = false
                } else {
                    score = score + 1
                    car1.delete()
                    basic.pause(Math.randomRange(0, 5001))
                    car1 = game.createSprite(0, 0)
                    basic.pause(500)
                }
            } else {
                car1.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
control.inBackground(function () {
    score = 0
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(100)
    }
    game.addScore(score)
    game.gameOver()
})
