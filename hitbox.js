"use strict";

function check_collision(box1, box2) {
    if ((box2.x >= box1.x + box1.w) ||
        (box2.x + box2.w <= box1.x) ||
        (box2.y >= box1.y + box1.h) ||
        (box2.y + box2.h <= box1.y)) {
        return false;
    } else {
        return true;
    }
}

function check_death_aliens(world) {
    for (let i = 0; i < world["ALIENS"].length; i++) {
        for (let j = 0; j < world["MISSILES"].length; j++) {
            if (check_collision(world["ALIENS"][i], world["MISSILES"][j])) {
                world["ALIENS"].splice(i, 1);
                world["MISSILES"].shift();
            }
            if (world["ALIENS"].length === 0 && world["FIN"]) {
                world["GAGNE"] = true;
            }
        }
    }
}

function check_death_player(world) {
    for (let i = 0; i < world["ALIENS"].length; i++) {
        if (check_collision(world["PLAYER"], world["ALIENS"][i]) && world["PLAYER"].invincible === false) {
            world["PLAYER"].vie -= 1;
            world["PLAYER"].invincible = true;
            window.setTimeout(function () {
                world["PLAYER"].invincible = false
            }, 2000.0)
        }
        if(world["PLAYER"].vie === 0){
            world["PERDU"] = true;
        }
    }
}
