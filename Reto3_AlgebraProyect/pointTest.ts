import { Point } from "./point";


let coordenada1 = new Point(5,3);

console.log(coordenada1.toString());

console.log(coordenada1.distanceTolOrigin());

let coordenada2 = new Point(8,6);

console.log(coordenada1.calculateDistance(coordenada2));

console.log(coordenada1.calcularQuadrant());
