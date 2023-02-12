"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var coordenada1 = new point_1.Point(5, 3);
console.log(coordenada1.toString());
console.log(coordenada1.distanceTolOrigin());
var coordenada2 = new point_1.Point(8, 6);
console.log(coordenada1.calculateDistance(coordenada2));
console.log(coordenada1.calcularQuadrant());
/*
let coordenada2 = new Point(2,9);
let coordenada3 = new Point(7,20);
let coordenada4 = new Point(12,1);


let points = [ coordenada2 , coordenada3 , coordenada4 ];

 */ 
