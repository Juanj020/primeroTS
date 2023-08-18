"use strict";
/* class Astronauta {
    public readonly id:number;
    public nombre: string;
    public record: string;

    constructor(id:number,nombre:string, record:string){
        this.id = id,
        this.nombre = nombre,
        this.record = record
        // cual es la diferencia entre propiedad y metodo?
    }
} */
/* manera moderna */
class Astronauta {
    constructor(id, nombre, _record, //buena practica para las 
    recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
    obtenerRecompensa(record) {
        if (record == "Artemis") {
            this.recompensa = "Felicitaciones perro";
            return this.recompensa;
        }
    }
}
const astronautaPhidolly = new Astronauta(1, "hidolly Blanco", "Artemis", "nada");
console.log(astronautaPhidolly);
/* Ganador */
console.log(astronautaPhidolly.obtenerRecompensa('Artemias'));
console.log(`Recompensa con el record alcanzado: ${astronautaPhidolly.recompensa}`);
astronautaPhidolly.record = "sincejo Galaxy";
console.log(`Record via setter de Phidolly ${astronautaPhidolly.record}`);
