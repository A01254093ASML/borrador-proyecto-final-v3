input.onButtonPressed(Button.A, function () {
    jugador_combinacion = "" + jugador_combinacion + "A"
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    jugador_combinacion = "" + jugador_combinacion + "C"
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    jugador_combinacion = "" + jugador_combinacion + "B"
    basic.showString("B")
})
input.onPinPressed(TouchPin.P1, function () {
    jugador_combinacion = "" + jugador_combinacion + "1"
    basic.showString("1")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    jugador_combinacion = "" + jugador_combinacion + "0"
    basic.showString("0")
})
function comparar () {
    if (combinacion == jugador_combinacion) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
        nivel += 1
        game.addScore(1)
        jugador_combinacion = ""
        combinacion = ""
    } else {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
        game.removeLife(1)
        jugador_combinacion = ""
        combinacion = ""
    }
}
let jugador_combinacion = ""
let combinacion = ""
let opciones_combinacion = [
"A",
"B",
"C",
"0",
"1"
]
combinacion = ""
let nivel = 1
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    if (game.score() == 10) {
        basic.showString("¡Winner!")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
    }
    for (let index = 0; index < nivel; index++) {
        combinacion = "" + opciones_combinacion._pickRandom() + combinacion
    }
    basic.showString(combinacion)
    basic.pause(nivel * 1000)
    comparar()
})
