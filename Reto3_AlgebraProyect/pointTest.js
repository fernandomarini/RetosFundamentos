"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
// Reto 1
var coordenada1 = new point_1.Point(5, 3);
console.log(coordenada1.toString());
// Reto 2
console.log(coordenada1.distanceTolOrigin());
var coordenada2 = new point_1.Point(8, 2);
console.log(coordenada1.calculateDistance(coordenada2));
// Reto 3
console.log(coordenada1.calcularQuadrant());
// Reto
var coordenada3 = new point_1.Point(5, 2);
var coordenada4 = new point_1.Point(2, 9);
var coordenada5 = new point_1.Point(12, 7);
var points = [coordenada2, coordenada3, coordenada4, coordenada5];
console.log("El punto mas cercano es ".concat(coordenada1.calculateNearest(points)));
