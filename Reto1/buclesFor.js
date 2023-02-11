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
//evenNumbers(25);
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
var array1 = [1, 2, 3, 4, 5]; // Conflicto con las variables, por el tipo: solucion realizada declararla number
//myRevert(array1);
/*
Realizar una función que reciba como parámetro un array de strings que contenga
nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors) */
var rainbow = ["rojo", "naranja", "amarillo", "verde", "anyil", "azul", "violeta"];
function isRainbow(colors) {
    for (var i = 0; i < rainbow.length; i++) {
        if (colors = !rainbow[i]) {
            console.log("El color ".concat(colors, "} No esta en el Arco Iris."));
        }
        else {
            console.log("El color ".concat(colors, " esta en el Arco Iris.")); // ERROR: Imprime false en el lugar de la variable "colors".
        }
        ;
    }
    ;
}
;
//isRainbow("violeta");  
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
    //console.log(`La suma de carcteres de las palabras del array es: ${suma} y fue calculada con un For Tradicional`);
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
    //console.log(`La suma de carcteres de las palabras del array es: ${suma} y fue calculada con un For Of`);
}
;
