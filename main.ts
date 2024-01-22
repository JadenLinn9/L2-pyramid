player.onChat("go", function () {
    agent.move(UP, 1)
    x = 12
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < x; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(RIGHT_TURN)
    }
})
let x = 0
agent.setItem(SAND, 64, 1)
