import { Triangle } from "./triangle";
import { Point } from "./point";


//let triangle1 = new Triangle((2,5),(7,2),(8,6));

let p1 = new Point(2,5);
let p2 = new Point(7,5);
let p3 = new Point(8,6);


let triangle1 = new Triangle(p1,p2,p3);


console.log(triangle1.calculateLengthSides());