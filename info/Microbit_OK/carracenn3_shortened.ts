function erzeugeSnapshot () {
    snapshot = [playerCar.get(LedSpriteProperty.X)/4, (car1.get(LedSpriteProperty.Y) + 1)/5, (car1.get(LedSpriteProperty.Y) + 1)/5, (car1.get(LedSpriteProperty.Y) + 1)/5, (car1.get(LedSpriteProperty.Y) + 1)/5, (car1.get(LedSpriteProperty.Y) + 1)/5]
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
function erzeugeTrainingsdatensatz () {
    Ausgabe_String = ""
    erzeugeSnapshot()
    for (let Index = 0; Index <= 5; Index++) {
        Ausgabe_String = "" + Ausgabe_String + snapshot[Index] + ","
    }
    nntest.predict(snapshot, ergebnis)
    if (ergebnis[0] >= 0.5) {
	    output = "A"
    } else {
		if (ergebnis[1] >= 0.5) {
	    	output = "B"
    	} else {
	    	output = "x"
	    }
    }
    Ausgabe_String = "" + Ausgabe_String + output
    //serial.writeLine(Ausgabe_String)
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
output = "x"
nntest.fcnnfromjson("{\"params\":[{\"input_layer_size\":6},{\"output_layer_size\":3},{\"activation\":\"relu\",\"hidden_layer_sizes\":[10,10]}],\"coefs\":[[[-2.7814544,-0.6261400,1.3925556,2.0773100,0.1052742,1.8402242e-316,-2.0282613,2.1891416,-0.3557308,1.7759539],[0.4153595,0.3575007,-0.0593671,0.5499184,0.3306362,-2.9594337e-315,0.1273618,0.1442468,-0.7095723,0.1339178],[0.0533258,0.5803900,0.6512565,-0.5285844,2.1804846,2.4620232e-315,-0.1736481,0.0987087,0.5499770,-0.4325182],[-0.5343902,-0.2282917,1.7418139,-0.6974914,-0.0304769,7.8490265e-316,0.5464446,-0.5816220,-0.3425162,0.1800381],[0.5699147,-1.4845328,-0.9837793,-0.2060197,1.5609103,-2.4589093e-315,0.0523380,0.3898025,0.2164359,0.1455876],[0.1624405,0.3663889,0.7367596,0.1119347,0.7543790,-1.9971573e-315,0.1370688,-0.0699263,0.0084551,-0.0857356]],[[-0.2059220,3.1657395,0.9798682,0.8960527,1.3480437,1.2639395,1.4977006,0.8350548,-0.0505313,1.5891557],[-0.5597278,0.4330697,0.5057919,0.1201135,-1.0864080,-1.3339437,0.8455549,1.4219736,-1.6123087,1.4970483],[0.5464058,-0.1975920,-1.7813902,0.1253340,0.8959388,-0.4530768,-0.4914266,-0.5427437,-0.6415079,-0.5736825],[0.2127321,-1.3798021,0.2503676,-1.0836964,1.2778820,1.2404649,-7.0660996,-0.6787769,0.3645644,-0.2156079],[0.2559938,-0.4607368,0.6836398,-0.1745119,-0.0670973,0.6906724,0.2611865,0.4033194,1.0273858,-1.1035160],[1.2303935e-316,-3.0411599e-315,-3.7304128e-315,-9.7859811e-316,-2.6969165e-315,1.3322974e-315,8.2368912e-316,-7.7095505e-317,-1.8704554e-315,-2.1956986e-316],[-1.9035410,0.1016996,2.0445381,0.8460766,-0.8373233,-0.7930185,-1.4184337,-1.8163223,0.7618254,0.1251703],[-3.0405813,0.0007831,-0.2162294,2.3126763,1.3993910,-1.0295530,5.1871475e-306,-1.2502161,0.5741433,-0.3731069],[-1.8870632,0.1835447,1.3595694,0.0179802,0.7453265,0.8784003,-0.6323609,-0.9463527,-0.2537480,1.0156122],[0.1833433,-2.1322996,0.2451732,0.8282351,-1.1929148,-0.0366261,-1.6097382,0.2189148,0.7666423,0.7781884]],[[-1.4996866,-3.1088692,3.3612135],[-1.0479717,3.3423026,-2.2786350],[2.0493726,-2.0269666,0.6419165],[-6.6160789,-2.3176621,5.2075710],[1.9812506,-3.9616347,0.4553415],[-1.9000023,-0.1257893,0.7457140],[-0.0170687,-13.5328157,13.4484836],[-4.4461651,2.3325907,0.9556282],[0.0233055,0.9447492,-1.4986701],[-9.1865551,-0.3917167,1.1395987]]],\"intercepts\":[[1.3706824,0.4878551,-0.2031220,-0.0195285,0.1949440,-0.2491768,1.2639496,-1.2461343,0.4713068,-0.2003161],[-0.4413012,0.5658006,0.6408208,-1.0587931,-0.9538688,0.6063199,-1.1705206,1.4055734,-0.7494365,0.4520836],[0.7484079,0.3955331,-1.0249857]]}")
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
            if (output == "x") {
                erzeugeTrainingsdatensatz()
            }
            output = "x"
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
