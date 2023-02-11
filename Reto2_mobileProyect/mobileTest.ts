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
