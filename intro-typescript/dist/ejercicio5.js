"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Para hacer input desde la consola con TS:

1. En la consola se ejecuta:
npm install readline-sync
npm i --save-dev @types/readline-sync

2. Importan en el archivo .ts:
import * as readlineSync from 'readline-sync';

3. Para pedir algún dato desde la consola:
let input1:number = Number(readlineSync.question('Ingresa un numero: ')) */
const readlineSync = __importStar(require("readline-sync"));
let arrays = [];
let contM = 0;
let contH = 0;
console.log("Escriba la cantidad de va evaluar");
let cantidad = Number(readlineSync.question('Ingresa un numero: '));
for (let i = 0; i < cantidad; i++) {
    let nombre = String(readlineSync.question('Ingresa el nombre del estudiante: '));
    let sexo = String(readlineSync.question('Ingresa M si es mujer y H si es hombre: '));
    let notaDef = Number(readlineSync.question('Ingresa el nota definitiva del estudiante: '));
    if (sexo == "M") {
        contM = contM + 1;
    }
    if (sexo == "H") {
        contH = contH + 1;
    }
    let estudiante = {
        nombre,
        sexo,
        notaDef
    };
    arrays.push(estudiante);
}
console.log(arrays);
let maxValue = Math.max(...arrays.map(x => x.notaDef));
let resultado = arrays.filter(x => x.notaDef == maxValue);
console.log(`El nombre del estudiante con mayor nota es ${resultado[0].nombre} y su nota maxima fue ${maxValue}`);
console.log(`La cantidad de hombres es ${contH} y mujeres es ${contM}`);
