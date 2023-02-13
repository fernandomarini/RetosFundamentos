"use strict";
/*
Realizar una función que imprima los números impares existentes hasta el número
indicado como parámetro de entrada.
La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num) */
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(n) {
    for (var i = 0; i < n; i++) {
        if (i % 2 == 1) {
            console.log("El numero ".concat(i, " es impar."));
        }
    }
    ;
}
;
evenNumbers(25);
/*
Realizar una función que como parámetro de entrada reciba un array y como salida
devuelva el array revertido. No se puede utilizar el método revert de la clase array
La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr) */
function myRevert(myArr) {
    var arrRever = [];
    for (var i = 0; i < myArr.length; i++) {
        arrRever.unshift(myArr[i]);
    }
    ;
    console.log(arrRever);
}
;
var array1 = [1, 2, 3, 4, 5];
myRevert(array1);
/*
Realizar una función que reciba como parámetro un array de strings que contenga
nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors) */
var rainbow = ["azul", "celeste", "verde", "rosa"];
function isRainbow(rainbow) {
    for (var i = 0; i < rainbow.length; i++) {
        if (rainbow[i] == "rojo" || rainbow[i] == "naranja" || rainbow[i] == "amarillo" || rainbow[i] == "verde" || rainbow[i] == "anyil" || rainbow[i] == "azul" || rainbow[i] == "violeta") {
            console.log("El color ".concat(rainbow[1], "} Pertenece al Arco Iris."));
        }
        else {
            console.log("El color ".concat(rainbow, " No esta en el Arco Iris."));
        }
        ;
    }
    ;
}
;
isRainbow(rainbow);
/*
Realizar una función que te devuelva la suma del numero de caracteres de las palabras
almacenadas en un array.
La cabecera de la función tendrá el siguiente aspecto: function add(myWords) */
var arrMyWords = ["jose", "menchu", "dani"];
// CON FOR TRADICIONAL
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    ;
    return suma;
}
exports.add = add;
;
// CON FOR OF
function add2(myWords) {
    var suma = 0;
    for (var _i = 0, arrMyWords_1 = arrMyWords; _i < arrMyWords_1.length; _i++) {
        var arrW = arrMyWords_1[_i];
        suma += arrW.length;
    }
    ;
    return suma;
}
;
console.log("\n La suma de carcteres de las palabras del array es: ".concat(add(arrMyWords), " y fue calculada con un For Tradicional \n"));
console.log("\n La suma de carcteres de las palabras del array es: ".concat(add2(arrMyWords), " y fue calculada con un For Of \n"));
