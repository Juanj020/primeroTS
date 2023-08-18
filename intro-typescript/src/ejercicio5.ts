/* Para hacer input desde la consola con TS:

1. En la consola se ejecuta: 
npm install readline-sync
npm i --save-dev @types/readline-sync

2. Importan en el archivo .ts:
import * as readlineSync from 'readline-sync';

3. Para pedir algún dato desde la consola:
let input1:number = Number(readlineSync.question('Ingresa un numero: ')) */
import * as readlineSync from 'readline-sync';


interface estudiantes{
    nombre: string,
    sexo:string,
    notaDef: number
}

let arrays:any[] = []; 
let contM:number = 0;
let contH:number = 0;

console.log("Escriba la cantidad de va evaluar");
let cantidad:number = Number(readlineSync.question('Ingresa un numero: '))

for (let i = 0; i < cantidad; i++) {
    let nombre:string = String(readlineSync.question('Ingresa el nombre del estudiante: '));
    let sexo:string = String(readlineSync.question('Ingresa M si es mujer y H si es hombre: '));
    let notaDef:number = Number(readlineSync.question('Ingresa el nota definitiva del estudiante: '))
    
    if(sexo=="M"){
        contM = contM + 1;
    }

    if(sexo=="H"){
        contH = contH + 1;
    }

    let estudiante:estudiantes = {
        nombre,
        sexo,
        notaDef
    }

    arrays.push(estudiante);
}

console.log(arrays);


let maxValue=Math.max(...arrays.map(x=>x.notaDef))
let resultado=arrays.filter(x=>x.notaDef==maxValue)
console.log(`El nombre del estudiante con mayor nota es ${resultado[0].nombre} y su nota maxima fue ${maxValue}`);
console.log(`La cantidad de hombres es ${contH} y mujeres es ${contM}`);


