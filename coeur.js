"use strict";

class Coeur {
    constructor(nombre_de_coeur) {
        this.nombre = nombre_de_coeur;
        this.view = new Image();
        this.view.src = "images/coeur.png";
    }

    draw(context) {
        for (let i = 0; i < this.nombre; i++) {
            context.drawImage(this.view, i * 35, 10)
        }
    }
    
    update(nombre_de_coeur){
        this.nombre = nombre_de_coeur;
    }
}
