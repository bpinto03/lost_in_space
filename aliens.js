"use strict";

class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
        this.vitesse = 0.45;
        this.view = new Image();
        this.view.src = "images/alien.png";
        this.direction_y = 'down';
        if (0 <= x && x < 299) {
            this.direction_x = 'right';
            this.min_range = x;
            this.max_range = x + Math.floor(Math.random() * Math.floor(40));
        } else {
            this.direction_x = 'left';
            this.min_range = x - Math.floor(Math.random() * Math.floor(40));
            this.max_range = x;
        }
    }

    draw(context) {
        context.drawImage(this.view, this.x, this.y, 30, 30)
    }

    update() {
        switch (this.direction_x) {
            case 'right':
                this.x += 15.0 / 60.0;
                break;
            case 'left':
                this.x -= 15.0 / 60.0;
                break;
        }
        switch (this.direction_y) {
            case 'down':
                this.y += this.vitesse;
                break;
            case 'up':
                this.y -= this.vitesse;
                break;
        }
        if (this.x <= this.min_range) {
            this.direction_x = 'right'
        }
        if (this.max_range <= this.x) {
            this.direction_x = 'left'
        }
        if (this.y <= 0) {
            this.vitesse = this.vitesse + this.vitesse * 0.1;
            this.direction_y = 'down';
        }
        if (document.getElementById('game_area').height - 15 <= this.y) {
            this.vitesse = this.vitesse + this.vitesse * 0.1;
            this.direction_y = 'up';
        }

    }
}
