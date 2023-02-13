/* 
Realizar una función que imprima los números impares existentes hasta el número
indicado como parámetro de entrada.
La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num) */

function evenNumbers( n: number ){   
    for( let i = 0 ; i < n ; i++){
        if( i % 2 == 1 ){
            console.log(`El numero ${i} es impar.`)
        }
    };
};  

evenNumbers(25);

/* 
Realizar una función que como parámetro de entrada reciba un array y como salida
devuelva el array revertido. No se puede utilizar el método revert de la clase array
La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr) */

function myRevert(myArr:number[]){
    let arrRever:number[] = [];
    for( let i = 0 ; i < myArr.length ; i++){
        arrRever.unshift(myArr[i]);
    };
    console.log(arrRever);
};

let array1:number[] = [1,2,3,4,5];  
myRevert(array1);


/* 
Realizar una función que reciba como parámetro un array de strings que contenga
nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors) */

let rainbow: string[] = ["azul","celeste","verde","rosa"];

function isRainbow( rainbow:string[] ){
    for( let i = 0 ; i < rainbow.length ; i++){
        if( rainbow[i] == "rojo" || rainbow[i] == "naranja" || rainbow[i] == "amarillo" || rainbow[i] == "verde" || rainbow[i] == "anyil" || rainbow[i] == "azul" || rainbow[i] == "violeta"){
            console.log(`El color ${rainbow[1]}} Pertenece al Arco Iris.`);
        }else{            
            console.log(`El color ${rainbow} No esta en el Arco Iris.`);  
        };
    };
};

isRainbow(rainbow);  

/* 
Realizar una función que te devuelva la suma del numero de caracteres de las palabras
almacenadas en un array.
La cabecera de la función tendrá el siguiente aspecto: function add(myWords) */

let arrMyWords = ["jose","menchu","dani"];

// CON FOR TRADICIONAL
function add(myWords:string[]){
    let suma:number = 0;
    for( let i = 0 ; i < myWords.length ; i++){
        suma += myWords[i].length;
    };
    return suma;
};

// CON FOR OF
function add2(myWords:string[]){
    let suma: number = 0;
    for ( let arrW of arrMyWords){
        suma += arrW.length;
    };
    return suma;
};


console.log(`\n La suma de carcteres de las palabras del array es: ${add(arrMyWords)} y fue calculada con un For Tradicional \n`);
console.log(`\n La suma de carcteres de las palabras del array es: ${add2(arrMyWords)} y fue calculada con un For Of \n`);

export { add }