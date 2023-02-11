

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


};




export { Point }