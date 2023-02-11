/* Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
La fecha de nacimiento vendrá indicada por dos números: dia y mes.
La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month) */

function zodiac( day: number, month: number){
   
    if( ( month == 3 && day >= 21 ) || (  month == 4 && day <= 19 ) ){
        console.log("Ud. es de Aries.");
    }else  if( ( month == 4 && day >= 20 ) || (  month == 5 && day <= 20 ) ){
        console.log("Ud. es de Tauro.");
    }else if( ( month == 5 && day >= 21 ) || (  month == 6 && day <= 20 ) ){
        console.log("Ud. es de Geminis.");
    }else if( ( month == 6 && day >= 21 ) || (  month == 7 && day <= 20 ) ){
        console.log("Ud. es de Cancer.");
    }else if( ( month == 7 && day >= 21 ) || (  month == 8 && day <= 22 ) ){
        console.log("Ud. es de Leo.");
    }else if( ( month == 8 && day >= 23 ) || (  month == 9 && day <= 23 ) ){
        console.log("Ud. es de Virgo.");
    }else if( ( month == 9 && day >= 24 ) || (  month == 10 && day <= 23 ) ){
        console.log("Ud. es de Libra.");
    }else if( ( month == 10 && day >= 24 ) || (  month == 11 && day <= 22 ) ){
        console.log("Ud. es de Escorpio.");
    }else if( ( month == 11 && day >= 23 ) || (  month == 12 && day <= 22 ) ){
        console.log("Ud. es de Sagitario.");
    }else if( ( month == 12 && day >= 23 ) || (  month == 1 && day <= 22 ) ){
        console.log("Ud. es de Capricornio.");
    }else if( ( month == 1 && day >= 23 ) || (  month == 2 && day <= 20 ) ){
        console.log("Ud. es de Acuario.");
    }else if( ( month == 2 && day >= 21 ) || (  month == 3 && day <= 20 ) ){
        console.log("Ud. es de Piscis.");
    }else {
        console.log("Los Parametros ingresados no corresponden a un dia y mes Valido. \n");
    };
};

//zodiac(11,4);

/* 
Realizar un procedimiento que dado el nombre de un país te imprima en que continente
estás. (Max 5 países por continente).
La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country) */

let europa: string [];
let americaNorte:string [];
let sudamerica: string [];
let asia: string [];
let africa: string [];
let oceania: string[];


europa = ["Espanya","Portugal","Italia","Alemania","Francia"];
americaNorte = ["EEUU","Mexico","Canaa","Panama","Cuba"]; 
sudamerica = ["Argentina","Brasil","Uruguay","Chile","Paraguay"];
asia = ["China","Japon","Indonesia","India","Korea"];
africa = ["Sudafrica","Kongo","Kenia","Ghana","Marruecos"];
oceania = ["Australia","Nueva Zelanda","Fiyi","Samoa","Tonga"];

let continentes = [europa, americaNorte, sudamerica, asia, africa, oceania];
let continentes2 = ["europa", "americaNorte", "sudamerica", "asia", "africa", "oceania"]; // Creado de Mas, xq no fallaba *

function continent(country: string){
    let cont = "";
    for(let i = 0 ; i < continentes.length ; i++ ){ 
        if ( country == continentes[i][i]){
            cont = continentes2[i];   //  * Fallaba que me imprimia el array entero
        }; 
    };
    console.log(`El pais ${country} pertenece al continente ${cont} \n`)
};

//continent("Espanya");


/* Realizar una función que te imprima por consola el siguiente mensaje:
- “El numero es par”, si el numero introducido como parámetro de entrada es par
- “El numero es impar”, si el numero introducido como parámetro de entrada es impar */

function isEven(n){
    if( n % 2 == 0){
        console.log(`El numero es par.`);
    }else{
        console.log(`El numero es impar.`);
    };
};



//isEven(6);


export { isEven }