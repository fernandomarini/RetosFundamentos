import { add } from "./buclesFor";
import { isEven } from "./condicionales";

// DUDA xq se importan todas ejecuciones del la funcion importada de la pagina de origen.

let arr1 = ["casa","coche","ciudad","cesta"];
let arr2 = ["barco", "baca", "bicicleta", "balon" , "bisiesto", "brasil"];
let arr3 = [ "venezuela", "venenro", "voltaje"];

isEven(add(arr1));
isEven(arr2);
isEven(arr3);