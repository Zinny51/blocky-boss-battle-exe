namespace SpriteKind {
    export const PlayerShot = SpriteKind.create()
    export const LifeBar = SpriteKind.create()
}
function moveSpriteInTime (sprite: Sprite, x: number, y: number, t: number) {
    globalX = x
    globalY = y
    dx = x - sprite.x
    dy = y - sprite.y
    sprite.setVelocity(dx / t, dy / t)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.PlayerShot, function (sprite, otherSprite) {
    if (started) {
        info.changeScoreBy(20)
        bossLife += -1
        music.playTone(208, music.beat(BeatFraction.Eighth))
        lifeBarPic.fillRect(bossLife * 2, 0, 96 - bossLife * 2, 5, 2)
        lifeBar.setImage(lifeBarPic)
        if (bossLife <= 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            game.over(true)
        } else if (bossLife % 12 == 0) {
            preSetBossPosition(80, 30)
        }
    }
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 50, 50)
})
function spell1 () {
    enemyShootAimingPlayer(boss, 90, 5)
}
function moveSpriteRandom (sprite: Sprite, yLowerBound: number, outerBound: number, v: number) {
    moveSprite(sprite, randint(outerBound, scene.screenWidth() - outerBound), randint(outerBound, yLowerBound), v)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shootBulletFromSprite(mySprite, 200, -90)
})
function nonSpell1 () {
    for (let index2 = 0; index2 <= MAX - 1; index2++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index2 + offset)
    }
    offset += 13
}
function spell2 () {
    for (let index = 0; index <= 4; index++) {
        shootBulletFromSprite(boss, 60, offset + index * 30)
    }
    offset += 23
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.setBackgroundColor(2)
    pause(50)
    scene.setBackgroundColor(15)
    scene.cameraShake(3, 200)
    music.playTone(139, music.beat(BeatFraction.Eighth))
    otherSprite.destroy()
})
function preSetBossPosition (x: number, y: number) {
    started = false
    ready = false
    offset = 0
    moveSpriteInTime(boss, x, y, 1)
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
})
function moveSpriteRandomFixedTime (sprite: Sprite, yLowerBound: number, outerBound: number, t: number) {
    moveSpriteInTime(sprite, randint(outerBound, scene.screenWidth() - outerBound), randint(outerBound, yLowerBound), t)
}
function nonSpell2 () {
    for (let index3 = 0; index3 <= MAX - 1; index3++) {
        shootBulletFromSprite(boss, 60, 360 / MAX * index3 + offset)
        shootBulletFromSprite(boss, 100, 360 / MAX * (index3 + 0.5) + offset)
    }
}
function shootBulletFromSprite (sourceSprite: Sprite, speed: number, angle: number) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sourceSprite, speed * Math.cos(angle / 57.3), speed * Math.sin(angle / 57.3))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    if (sourceSprite.kind() == SpriteKind.Player) {
        projectile.setKind(SpriteKind.PlayerShot)
        projectile.setImage(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `)
    } else {
        projectile.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . 4 4 4 4 4 4 4 2 2 . . . . 
            . . . 5 5 5 5 5 5 4 4 4 . . . . 
            . . . 7 7 7 7 7 5 5 5 5 . . . . 
            . . . 8 8 8 8 7 7 7 7 7 . . . . 
            . . . b b b 8 8 8 8 8 8 . . . . 
            . . . c c b b b b b b b . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function moveSprite (sprite: Sprite, x: number, y: number, v: number) {
    globalX = x
    globalY = y
    dx = x - sprite.x
    dy = y - sprite.y
    speed = Math.sqrt(dx * dx + dy * dy)
    if (speed != 0) {
        sprite.setVelocity(dx / speed * v, dy / speed * v)
    }
}
function enemyShootAimingPlayer (sprite: Sprite, speed: number, spread: number) {
    shootBulletFromSprite(sprite, speed, Math.atan2(mySprite.y - sprite.y, mySprite.x - sprite.x) * 57.3 + randint(0 - spread, spread))
}
let lifeBarProgress = 0
let bossProgress = 0
let speed = 0
let projectile: Sprite = null
let ready = false
let started = false
let dy = 0
let dx = 0
let globalY = 0
let globalX = 0
let MAX = 0
let offset = 0
let lifeBar: Sprite = null
let lifeBarPic: Image = null
let boss: Sprite = null
let mySprite: Sprite = null
let bossLife = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999fffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999ffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999ffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999ffffbbfffffffff999999999999999999999999999999899989999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999ffffbbbffffffff999999999999999999999999999999899989999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999ffffbbbfffffff999999999999999999999999999999899989999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999ffffbbfffffff999999999999999999999999999999899989999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999fffcbfffffff299999999999999999999999999999899989999986999999999999999999999989999969999999999999999999999999999999999999999999
    9999999999999999999999999999999999bffffffffff22ff999999999999999999999999999899989999898699988889999988889999989999989999999999999999999999999999999999999999999
    999999999999999999999999999999999992effffff222ffff99999999999999999999999999888889999999899988988999988988999988999889999999999999999999999999999999999999999999
    9999999999999999999999999999999999ff22222222ffffff99999999999999999999999999888889999999899989998899989998899998898899999999999999999999999999999999999999999999
    99999999999999999999999999999999cffffffffffffffff999999999999999999999999999899989999999899989998899989996899999888999999999999999999999999999999999999999999999
    99999999999999999999999999999999fbbfffffffffffff9999999999999999999999999999899989998888899989968999989998999999989999999999999999999999999999999999999999999999
    99999999999999999999999999999999fbbfffffffffff111999999999999999999999999999899989998999899989889999989889999999989999999999999999999999999999999999999999999999
    999999999999999999999999999999999fffff11111111111999999999999999999999999999899989998888899988899999988899999999989999999999999999999999999999999999999999999999
    9999999999999999999999999999999999911111111111111199999999999999999999999999999999999999999989999999989999999999989999999999999999999999999999999999999999999999
    999999999999999999999999999999999991111ff111ff111199999999999999999999999999999999999999999989999999989999999999989999999999999999999999999999999999999999999999
    99999999999999999999ee99999999999991111ff111cf111199999999999999999999999999999999999999999989999999989999999999989999999999999999999999999999999999999999999999
    999999999999999999999e999999999999911114444111111199999999999999999999999999999999999999999989999999989999999999989999999999999999999999999999999999999999999999
    9999999999999999eb999ee99999999999914444444111111199999999999999999eb9999999999999999999999989999999989999999999989999999999999999999999999999999999999999999999
    99999999999999999eeeb9e999999999999111111111111119999999999999999ee999999999999999999999999989999999989999999999889999999999999999999999999999999999999999999999
    999999999999999999beeeee99999999999111f1111111f11229999999999999ee9999999999999999999999999989999999989999999988899999999999999999999999999999999999999999999999
    999999999999999999999eee99999999999b2111f1f1f111122299999999999ee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999ee99999999922221111111111222299999999999eeeee99998999899999999999899999999998999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999e99999999e2222b11111111222229999999999eee99999998999899999999999899999999998999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ee999999e22222be222e222222e9999999eeec9999999998999899999999999899989999998999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999eee9999ee22222e222ee22222199999eeee999999999998999899999999999899989999998999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999eeeb991e2222222222e2222e1199eeee99999999999998999899999889999899999999998999988999699999899999999999999999999999999999999999999999999
    9999999999999999999999999999eeee111e222e22222e222e1119eee99999999999999989998999988889998999999999989998988998999988998888999977cc999999999999999999999999999999
    999999999999999999999999999999eee111e22e22222e22ed1eeeee99999999999999998888899988999899899989998888999999899689998998889889c777cc9bcc99999999999999999999999999
    9999999999999999999999999999999eee111e22e2222e2eee1bee9999999999999999998888899988999899899989988988999999899988988998999999777cccccccc9999999999999999999999999
    99999999999999999999999999999991ee11e222ee22ee222e11e11999999999999999998999899989999899899989889998999999899998889998888889c76cccccccc9999999999999999999999999
    99999999999999999999999999999991e111e222221e22222e11111999999999999999998999899989998899899989889998998888899999899999999986e2eccccccccb999999999999999999999999
    999999999999999999999999999999911111e222221ee2222e1111199999999999999999899989998898899989998998898899899989999989999999998cd322cccccccc999999999999999999999999
    99999999999999999999999999999991111e22222e11e2222e111119999999999999999989998999988889998999899988899988888999998999988988823422cccccccc999999999999999999999999
    9999999999999999999999999999999111ee22222e1fe2222e1111999999999999999999999999999999999999999999999999999999999989999b22289e222eccccccccc99999999999999999999999
    9999999999999999999999999999999113e222222e1fe2222e111199999999999999999999999999999999999999999999999999999999998997c2d42ecce22ccccccccccc9999999999999999999999
    999999999999999999999999999999991e222222ee11e2222e11119999999999999999999999999999999999999999999999999999999999877772d222ce22c6ceeeeceeec9999999999999999999999
    999999999999999999999999999999991e222222e1112e222ee1199999999999999999999999999999999999999999999999999999999999877cce222223222cceeeeeeeb99999999999999999999999
    99999999999999999999999999999999e2222222e111de2222e11bb9999999999999999999999999999999999999999999999999999999998ccccc22ecdd222eec999cc9999999999999999999999999
    999999999999999999999999999999911e222212e11f1e22222e1bb99999999999999999999999999999999999999999999999999999999899cccccccc22222eeb999999999999999999999999999999
    9999999999999999999999999999911bbeb21212e11c1e22222ebd1199999999999999999999999999999999999999999999999999999988cccccccccee222cccee99999999999999999999999999999
    99999999999999999999999999991111bebbbbb1e1111e12222e11111999999999999999999999999999999999999999999999999999999ccccccccccee7cccccee99999999999999999999999999999
    99999999999999999999999999991111111bbbb111111e12222e11111199999999999999999999999999999999999999999999999999999cccccccceeb77cccccee99999999999999999999999999999
    99999999999999999999999999911111111111bbbbbbb2b2eb2e111111999999999999999999999999999999999999999999999999999999cccccceee977cccccce69999999999999999999999999999
    999999999999999999999999999111111111111111bbb2b2112111111119999999999999999999999999999999999999999999999999999977cccce9999cccccccce9999999999999999999999999999
    9999999999999999999999999991111111111111111111121111111111199999999999999999999999999999999999999999999999999999cccccc9999ccccccccee9999999999999999999999999999
    9999999999999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999ceeb6c9999ccccccccee9999999999999999999999999999
    9999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999eee999999999ccccccee9999999999999999999999999999
    9999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999ccccccee9999999999999999999999999999
    9999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999bcccc9999999999999999999999999999
    9999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999cc9999999999999999999999999999
    9999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111111111111111111111111118888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111188888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111111111111111188888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999991111111111111111111888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999911111111111111168888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999998888868888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999998888888888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999988888888888888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
bossLife = 48
info.setLife(20)
info.setScore(0)
music.setVolume(20)
mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 105)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
boss = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
boss.setPosition(-16, -16)
lifeBarPic = image.create(96, 5)
lifeBar = sprites.create(lifeBarPic, SpriteKind.LifeBar)
lifeBar.setPosition(80, 5)
lifeBar.setFlag(SpriteFlag.Ghost, true)
offset = 0
MAX = 10
let bossCanMove = true
preSetBossPosition(80, 30)
game.onUpdate(function () {
    if (Math.abs(boss.x - globalX) + Math.abs(boss.y - globalY) <= 2) {
        boss.setVelocity(0, 0)
        if (!(ready)) {
            bossProgress += 1
            if (bossProgress == 2) {
                bossCanMove = false
            } else {
                if (bossProgress == 2) {
                    MAX = 8
                }
                bossCanMove = true
            }
        }
        ready = true
    }
})
game.onUpdateInterval(750, function () {
    if (started) {
        if (bossProgress == 3) {
            nonSpell2()
        }
    }
})
game.onUpdateInterval(2500, function () {
    if (started && bossCanMove) {
        moveSpriteRandom(boss, 40, 8, 60)
    }
})
game.onUpdateInterval(150, function () {
    if (started) {
        if (bossProgress == 2) {
            spell1()
        } else {
            if (bossProgress == 4) {
                spell2()
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    if (started) {
        if (bossProgress == 1) {
            nonSpell1()
        }
    }
})
game.onUpdateInterval(100, function () {
    if (ready && !(started)) {
        if (lifeBarProgress < 4) {
            lifeBarPic.fillRect(24 * lifeBarProgress, 0, 24, 5, 14 - lifeBarProgress % 2 * 6)
            lifeBarPic.fillRect(24 * lifeBarProgress, 1, 24, 3, lifeBarProgress % 2 * 5 + 4)
            lifeBar.setImage(lifeBarPic)
            lifeBarProgress += 1
        } else {
            started = true
        }
    }
})
