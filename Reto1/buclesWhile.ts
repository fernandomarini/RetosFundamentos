
/* 
 Realizar una función que te devuelva si existe un numero par en el array de números que 
 introduces como parámetro de entrada.
 La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums) */

 let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 function hasEven(myNums:number[]){
    let i = 0;
    let n:number = 0;
    while( i < array.length && n % 2 == 0 ){            
        return "Existe un numero par."
        i++;
    };
};

 console.log(hasEven(array));

/* 
 Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
todos los nombres empiezan por M.
La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames) */

let nombres1 :string[] = ["marta", "martin", "matilda","mabel"];
let nombres2 :string[] =["ramiro","fernando","ariel"];

function startWithM ( myNames:string[] ){
    let i = 0;
    while( i < myNames.length && myNames[i][i] == "m" )
   return true;
    i++
};


console.log(`Los nombres comienzan con M, es ${startWithM(nombres1)}`);

/* 
let i = 0;
do{
    if( myNames[i][0] != "m" ){
        break;            
    };         
    if( ( myNames.length -1 ) == i ){ 
        console.log(`VERDADERO, todos los nombres comienzan con M`); 
    };
    i++;        
}while( i < myNames.length && myNames[i][0] == "m") */