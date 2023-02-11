import { Mobile } from "./mobile";

let S23 = new Mobile("S23","Samsung", "S23 Ulta","black",1200);

console.log(S23);

S23.setName("S23 M.");
console.log(S23.getName());

S23.setTrademark("Samsung M.");
console.log(S23.getTrademark());

S23.setColor("black M.");
console.log(S23.getColor());

S23.setPrice(1150);
console.log(S23.getPrice());

S23.toPrintAt();


let S22 = new Mobile("S22","Samsung", "S22 ","black",1000);
let S22U = new Mobile("S23U","Samsung", "S23 Ulta","red",1200);
let S22L = new Mobile("S23L","Samsung", "S23 Live","write",110);

let myMobiles = [ S22 , S22U , S22L] ;

for( let mob of myMobiles ){ mob.toPrintAt() };