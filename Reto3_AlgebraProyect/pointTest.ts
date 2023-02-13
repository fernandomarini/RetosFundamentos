import { Point } from "./point";

// Reto 1
let coordenada1 = new Point(5,3);

console.log(coordenada1.toString());

// Reto 2
console.log(coordenada1.distanceTolOrigin());

let coordenada2 = new Point(8,2);

console.log(coordenada1.calculateDistance(coordenada2));

// Reto 3
console.log(coordenada1.calcularQuadrant());

// Reto

let coordenada3 = new Point(5,5);
let coordenada4 = new Point(2,9);
let coordenada5 = new Point(12,7);


let points = [ coordenada2 , coordenada3 , coordenada4 , coordenada5 ];

