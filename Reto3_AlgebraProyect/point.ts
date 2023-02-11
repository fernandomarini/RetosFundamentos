

class Point{

    // Declaracion de Atributos en constructor   

    // Constructor
    constructor( private x: number,
                private y: number
                ){};

    // Metodos
    public setX( x: number){ this.x = x; }
    public getX(): number { return this.x; };

    public setY( y: number){ this.y = y; }
    public getY(): number { return this.y; };

    public toString():string {
        let coordenadasString = "";
        coordenadasString = ` "(${this.x},${this.y})"`;
        return coordenadasString
    };

    public distanceTolOrigin():number {
        let distOrigen: number = Math.sqrt(( Math.pow(this.x,2) ) + ( Math.pow(this.y,2)))
        return distOrigen
    };

    public calculateDistance( x2: number, y2: number):number { // d=√((x2-x1)²+(y2-y1)²) 
        let distAnoth: number = Math.sqrt(( Math.pow(( x2 - this.x),2) ) + ( Math.pow(( y2 - this.y ),2)))
        return distAnoth
    };  

    
};




export { Point }