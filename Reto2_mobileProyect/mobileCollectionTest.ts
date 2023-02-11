import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let S22 = new Mobile("S22","Samsung", "S22 ","black",1000);
let S22U = new Mobile("S22U","Samsung", "S23 Ulta","red",1200);
let S22L = new Mobile("S22L","Samsung", "S23 Live","write",1100);
let S23 = new Mobile("S23","Samsung", "S23 Ulta","black",1200);

let myMoviles = [ S22 , S22L , S22U , S23 ];

let myCollection = new MobileCollection(myMoviles);

console.log(myCollection);