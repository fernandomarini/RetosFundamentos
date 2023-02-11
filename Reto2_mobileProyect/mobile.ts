class Mobile {

    // Declaracion Variables en constructor    

    // Constructor
    constructor( private name: string,
        private trademark: string,
        private model: string,
        private color: string,
        private price: number
    ){};

    // Metodos
    public setName( nombre: string){
        this.name = nombre;
    };
    public getName():string{
        return this.name;
    };

    public setTrademark( marca: string){
        this.trademark = marca;
    };
    public getTrademark():string{
        return this.trademark;
    };

    public setModel( modelo: string){
        this.model = modelo;
    };
    public getModel():string{
        return this.model;
    };

    public setColor( color: string){
        this.color = color;
    };
    public getColor():string{
        return this.color;
    };

    public setPrice( price: number){
        this.price = price;
    };
    public getPrice():number{
        return this.price;
    };



};

export { Mobile }