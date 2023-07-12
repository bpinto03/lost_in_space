"use strict";
let world = {}
window.onload = function () {
    initGame();
    window.setInterval(loop, 1000.0 / 60.0);
}
window.onkeydown = function (event) {
    world["PLAYER"].manage_event(event.keyCode);
}

function initGame() {
    world["CONTEXT"] = document.getElementById("game_area").getContext("2d")
    world["PLAYER"] = new Vaisseau(250, 550);
    world["COEUR"] = new Coeur(world["PLAYER"].vie)
    world["MISSILES"] = [];
    world["PERDU"] = false;
    world["GAGNE"] = false;
    world["FIN"] = false;
    world["ALIENS"] = [];
    let numbers_of_aliens = 0;
    window.setInterval(function () {
        if (numbers_of_aliens < 300) { //total de 300 aliens
            for (let i = 0; i < 30; i++) { //vague de 30 aliens
                let y = Math.floor(Math.random() * Math.floor(40))
                world["ALIENS"].push(new Alien(i * 19, y));
                numbers_of_aliens += 1;
            }
            world["FIN"] = true;
        }
    }, 2000.0);
}

function loop() {
    if (world["FIN"] && (world["PERDU"] || world["GAGNE"])) {
        if (world["PERDU"] === true) {
            draw_loose()
        }
        if (world["GAGNE"] === true) {
            draw_win()
        }
    } else {
        update();
        draw_game();
    }
    console.log(keys.ArrowRight)
}

function update() {
    world["PLAYER"].update();
    world["MISSILES"].forEach(e => e.update());
    world["ALIENS"].forEach(e => e.update());
    world["COEUR"].update(world["PLAYER"].vie)
    check_death_aliens(world);
    check_death_player(world);
}

function draw_game() {
    world["CONTEXT"].clearRect(0, 0, 600, 600);
    world["PLAYER"].draw(world["CONTEXT"]);
    world["MISSILES"].forEach(e => e.draw(world["CONTEXT"]));
    world["ALIENS"].forEach(e => e.draw(world["CONTEXT"]));
    world["COEUR"].draw(world["CONTEXT"]);

}

function draw_loose() {
    world["CONTEXT"].clearRect(0, 0, 600, 600);
    world["CONTEXT"].fillStyle = "red";
    world["CONTEXT"].font = "40px Arial";
    world["CONTEXT"].fillText("Vous etes mort", 160, 280);
}

function draw_win() {
    world["CONTEXT"].clearRect(0, 0, 600, 600);
    world["CONTEXT"].fillStyle = "red";
    world["CONTEXT"].font = "40px Arial";
    world["CONTEXT"].fillText("Vous avez gagnÃ© !", 140, 280);
}
