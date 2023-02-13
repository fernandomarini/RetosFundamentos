import { Point } from "./point";


class Triangle{

    // Declaracion Variable en constructor    

    // Constructor
    constructor( private vertex1: Point,
                 private vertex2: Point,
                 private vertex3: Point
                 ){};

    // Metodos
    calculateLengthSides():number[] {       
        let arrLong :number[] = [];
        arrLong.push(Math.round(this.vertex1.calculateDistance(this.vertex2)));
        arrLong.push(Math.round(this.vertex2.calculateDistance(this.vertex3)));
        arrLong.push(Math.round(this.vertex3.calculateDistance(this.vertex1)));        
        
        return arrLong
    };


};


export { Triangle }
