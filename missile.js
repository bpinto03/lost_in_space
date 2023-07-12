"use strict";
class Missile {
    constructor(x, y, vitesse) {
        this.x = x;
        this.y = y;
        this.w = 2;
        this.h = 22;
        this.vitesse = vitesse;
        this.duree_de_vie = y - (document.getElementById('game_area').height / 2.0);
        this.view = new Image();
        this.view.src = "images/missile.png";
    }

    draw(context) {
        context.drawImage(this.view, this.x, this.y, 3, 25)
    }

    update() {
        if (this.y <= this.duree_de_vie) {
            world["MISSILES"].shift();
            world["MISSILES"].shift();
        } else {
            this.y -= this.vitesse * 0.99;
        }
    }
}
