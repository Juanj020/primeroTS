//Objetc (array)

let goleadores:string[] = ['joel','phidolly','akio'];

let goles:number[] = [0,-1,9]

console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goles}`);

let corners:number[] = [];

let penalties:Array<boolean> = [true]
console.log(`Joel botó 2 penalties: ${penalties}`);

/* Autocompletar son metodos aplicables según tipo de dato del array */
console.log(goles.map(ele=> ele.toString()))

let goleadoresId = [7,10,17,9,11];
goleadoresId.push(+'1')

console.log(goleadoresId);

/* object */
/* Se puede limitar los valores del objeto con las interfaces*/
const songs = {
    id: 1,
    name: 'Todas mueren por mi'
}

console.log(songs);


const singer: {
    readonly id: number,
    nombre: string,
    edad?: number
} = {
    id:1,
    nombre: "joel"
}
/* console.log(singer.id = 2) 6.9.10*/
