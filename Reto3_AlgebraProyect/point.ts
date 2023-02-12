

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

    public calculateDistance( anotherPoint: Point ):number { // d=√((x2-x1)²+(y2-y1)²) 
        let distAnoth: number = Math.sqrt(( Math.pow(( anotherPoint.getX - this.x),2) ) + ( Math.pow(( anotherPoint.getY - this.y ),2)))
        return distAnoth
    };  

    public calcularQuadrant():number {
        let cuadrante: number = 0;
        if( this.x == 0 || this.y == 0){
            cuadrante = 0;
        } else if ( this.x > 0 && this.y > 0){
            cuadrante = 1;
        } else if ( this.x < 0 && this.y > 0){
           cuadrante = 2;
        } else if ( this.x < 0 && this.y < 0){
            cuadrante = 3;
        } else if ( this.x > 0 && this.y < 0){
            cuadrante = 4;
        }; 
        return cuadrante
    };
/* 
};




export { Point }