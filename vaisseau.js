"use strict";

class Vaisseau {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 35;
        this.h = 35;
        this.vie = 2;
        this.vitesse = 1.5;
        this.invincible = false;
        this.dead = false;
        this.view = new Image();
        this.view.src = "images/vaisseau.png";
    }

    manage_event(event) {
        if (!(this.dead)) {
            switch (event) {
                case 37:
                    this.currentMove = "left";
                    break;
                case 39:
                    this.currentMove = "right";
                    break;
                case 38:
                    this.currentMove = "up";
                    break;
                case 40:
                    this.currentMove = "down";
                    break;
                case 32:
                    world["MISSILES"].push(new Missile(this.x + 5, this.y - 10, this.vitesse));
                    world["MISSILES"].push(new Missile(this.x + 40, this.y - 10, this.vitesse));
                    break;
            }
        }
    }

    draw(context) {
        context.drawImage(this.view, this.x, this.y, 50, 50)
    }

    update() {
        if (this.dead) {
            this.y += this.vitesse * 0.5
        } else {
            switch (this.currentMove) {
                case 'left':
                    this.x -= this.vitesse;
                    break;
                case 'right':
                    this.x += this.vitesse;
                    break;
                case 'up':
                    this.y -= this.vitesse;
                    break;
                case 'down':
                    this.y += this.vitesse;
                    break;
            }
        }
    }
}
