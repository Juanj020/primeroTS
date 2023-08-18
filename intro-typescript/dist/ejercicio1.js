"use strict";
class Centro {
    constructor(id, nombre, departamento, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
        this.cantidad = cantidad;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setDepartamento(departamento) {
        this.departamento = departamento;
    }
    get getDepartamento() {
        return this.departamento;
    }
    set setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    get getCantidad() {
        return this.cantidad;
    }
}
const centor1 = new Centro(1, "Bucaramanga", "Santander", 15);
const centor2 = new Centro(2, "Lebrija", "Santander", 26);
const centor3 = new Centro(3, "Bogotá", "Cundinamarca", 31);
const centor4 = new Centro(4, "Medellin", "Antioquia", 21);
const centor5 = new Centro(5, "Barranquilla", "JUM", 10);
const centros = [centor1, centor1, centor3, centor4, centor5];
class Ruta {
    constructor(id, nombre, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    get getCantidad() {
        return this.cantidad;
    }
}
const ruta1 = new Ruta(1, "Bucaramanga", 15);
const ruta2 = new Ruta(2, "Lebrija", 26);
const ruta3 = new Ruta(3, "Bogotá", 31);
const ruta4 = new Ruta(4, "Medellin", 21);
const ruta5 = new Ruta(5, "Barranquilla", 10);
class Nivel {
    constructor(id, tecnologia, ingles, paso) {
        this.id = id;
        this.tecnologia = tecnologia;
        this.ingles = ingles;
        this.paso = paso;
    }
    set setTecnologia(tecnologia) {
        this.tecnologia = tecnologia;
    }
    get getTecnologia() {
        return this.tecnologia;
    }
    set setIngles(ingles) {
        this.ingles = ingles;
    }
    get getIngles() {
        return this.ingles;
    }
    set setPaso(paso) {
        this.paso = paso;
    }
    get getPaso() {
        return this.paso;
    }
}
const nivel1 = new Nivel(1, "JavaScript", "intermedio", true);
const nivel2 = new Nivel(1, "Nodejs", "basico", true);
const nivel3 = new Nivel(1, "Viujs", "avanzado", true);
const nivel4 = new Nivel(1, ".net", "avanzado", true);
const nivel5 = new Nivel(1, "angular", "avanzado", false);
const nivles = [nivel1, nivel2, nivel3, nivel4, nivel5];
class Camper {
    constructor(id, nombre, edad, contrato, estadoNivelRuta) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.contrato = contrato;
        this.estadoNivelRuta = estadoNivelRuta;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    get getEdad() {
        return this.edad;
    }
    set setContrato(contrato) {
        this.contrato = contrato;
    }
    get getContrato() {
        return this.contrato;
    }
    set setEstadoNivelRuta(estadoNivelRuta) {
        this.estadoNivelRuta = estadoNivelRuta;
    }
    get getEstadoNivelRuta() {
        return this.estadoNivelRuta;
    }
    autenticaNivel(estadoNivelRuta) {
        if (estadoNivelRuta == true) {
            return "Puede seguir y esta contratado felicitaciones";
        }
        else {
            return "Perdio y se queda sin tabajo";
        }
    }
}
/* Insercciones campers */
const camperAlejandro = new Camper(1, "alejandro", 18, "remoto", true);
const camperPhidolly = new Camper(2, "Phidolly", 17, "presencial", true);
const camperCamila = new Camper(3, "Camila", 18, "presencial", true);
const camperAkioSeFue = new Camper(4, "AkioSeFue", 21, "remoto", false);
const camperVermen = new Camper(5, "Vermen", 25, "remoto", true);
console.log(`El estudiante ${camperAlejandro.nombre}, ${camperAlejandro.autenticaNivel(camperAlejandro.estadoNivelRuta)}`);
console.log(`El estudiante ${camperAlejandro.nombre}, tiene contrato ${camperAlejandro.contrato} \n`);
console.log(`El estudiante ${camperPhidolly.nombre}, ${camperPhidolly.autenticaNivel(camperPhidolly.estadoNivelRuta)}`);
console.log(`El estudiante ${camperPhidolly.nombre}, tiene contrato ${camperPhidolly.contrato}\n`);
console.log(`El estudiante ${camperCamila.nombre}, ${camperCamila.autenticaNivel(camperCamila.estadoNivelRuta)}`);
console.log(`El estudiante ${camperCamila.nombre}, tiene contrato ${camperCamila.contrato}\n`);
console.log(`El estudiante ${camperAkioSeFue.nombre}, ${camperAkioSeFue.autenticaNivel(camperAkioSeFue.estadoNivelRuta)}`);
console.log(`El estudiante ${camperAkioSeFue.nombre}, tiene contrato ${camperAkioSeFue.contrato}\n`);
console.log(`El estudiante ${camperVermen.nombre}, ${camperVermen.autenticaNivel(camperVermen.estadoNivelRuta)}`);
console.log(`El estudiante ${camperVermen.nombre}, tiene contrato ${camperVermen.contrato}\n`);
