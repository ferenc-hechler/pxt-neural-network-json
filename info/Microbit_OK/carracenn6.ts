function buttonA () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
}
function buttonB () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
}
function erzeugeSnapshot () {
    snapshot = [playerCar.get(LedSpriteProperty.X)/4, (car1.get(LedSpriteProperty.Y) + 1)/5, (car2.get(LedSpriteProperty.Y) + 1)/5, (car3.get(LedSpriteProperty.Y) + 1)/5, (car4.get(LedSpriteProperty.Y) + 1)/5, (car5.get(LedSpriteProperty.Y) + 1)/5]
    if (car1.isDeleted()) {
        snapshot[1] = 0
    }
    if (car2.isDeleted()) {
        snapshot[2] = 0
    }
    if (car3.isDeleted()) {
        snapshot[3] = 0
    }
    if (car4.isDeleted()) {
        snapshot[4] = 0
    }
    if (car5.isDeleted()) {
        snapshot[5] = 0
    }
}
function kiSteuerung () {
    Ausgabe_String = ""
    erzeugeSnapshot()
    for (let Index = 0; Index <= 5; Index++) {
        Ausgabe_String = "" + Ausgabe_String + snapshot[Index] + ","
    }
    serial.writeLine(Ausgabe_String)
    nntest.predict(snapshot, ergebnis)
    if (ergebnis[0] >= 0.5) {
	    output = "A"
        buttonA()
    } else {
		if (ergebnis[1] >= 0.5) {
	    	output = "B"
            buttonB()
    	} else {
	    	output = "x"
	    }
    }
    serial.writeLine(output)
}
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
let ergebnis = [0, 0, 0]
nntest.fcnnfromjson("{\"params\":[{\"input_layer_size\":6},{\"output_layer_size\":3},{\"activation\":\"relu\",\"hidden_layer_sizes\":[5,5]}],\"coefs\":[[[-0.1774340,1.7180027,-2.2185390,-2.7157181,-1.8493312],[-0.2929120,-0.2159229,-0.1926039,0.4891134,0.5775759],[0.3595690,0.3887749,-0.0562094,-0.1737957,-0.5248434],[0.1492369,-0.4726848,0.5037789,-1.0239458,-0.8647448],[0.8280657,0.3250253,0.2636314,0.3337166,0.5085575],[-0.3032101,-0.0393003,-0.0539968,0.1071070,0.0712103]],[[-1.0918019,-0.3682515,-0.0070016,0.6161266,-4.7436538e-316],[1.1717495,1.3598602,-0.9327373,1.0735065,7.3903137e-316],[1.2006478,1.9328969,0.3707930,-3.3001615,-4.36019e-317],[-3.2961095,1.5889390,2.5617188,0.9860016,-1.0129486e-315],[2.6647761,-1.7936426,0.0199456,-0.8790681,4.6865165e-316]],[[1.9443124,-8.0195728,1.0388437],[3.7354118,-5.1001390,1.8261879],[-3.0452043,0.2562118,1.1356915],[-1.5016578,0.6879718,1.6212931],[-3.2343488e-315,3.8369143e-315,-3.0680620e-315]]],\"intercepts\":[[0.5143649,0.3070222,1.0359252,1.3399955,1.2130860],[-0.0479019,-1.8792909,1.7528952,-0.0097069,-0.6972091],[1.4335063,4.5834377,-3.2468793]]}")
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
control.inBackground(function () {
    while (true) {
        basic.pause(500)
        if (gameOn == true) {
            kiSteuerung()
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
