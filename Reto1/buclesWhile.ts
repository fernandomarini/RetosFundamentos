
/* 
 Realizar una función que te devuelva si existe un numero par en el array de números que 
 introduces como parámetro de entrada.
 La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums) */

 let array = [1,3,5,7,9,10,11,12,13,14,15,16,17,18,19,20];

 function hasEven(myNums:number[]){
    let i = 0;
    while( i < array.length && myNums[i] % 2 != 0 ){          
       i++;
    };
    if( i != myNums.length){
        return "Existe"
    } else {
        return "No Existe"
    }
};

 console.log(`En el array ${hasEven(array)} un numero par`);

/* 
 Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
todos los nombres empiezan por M.
La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames) */

let nombres1 :string[] = ["marta", "martin", "matilda","mabel"];
let nombres2 :string[] =["ramiro","fernando","ariel"];

function startWithM ( myNames:string[] ){
    let i = 0;
    while( i < myNames.length && myNames[i][0] != "m" ){    
    i++    
    };
    if(i != myNames.length ){
        return "comienzan"
    } else {
        return "No comienzan"
    }
};


console.log(`Los nombresde array ${startWithM(nombres1)} con la letra m`);
console.log(`Los nombresde array ${startWithM(nombres2)} con la letra m`);