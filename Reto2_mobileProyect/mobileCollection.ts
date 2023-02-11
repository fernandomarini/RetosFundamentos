import { Mobile } from "./mobile";

class MobileCollection {

    // Declaracion de Atributos
    private mobiles: Mobile[];
    private totalPrice: number;

    // Constructor
    constructor(arr: Mobile[]){ 
        this.mobiles = arr;
        this.totalPrice = this.totalPriceCalculation();
    };

    // Metodos
    public setMobile( mobil: Mobile[]){ this.mobiles = mobil; };
    public getMobile(): Mobile[] { return this.mobiles; };

    public setTotalPrice( PrecioTotal: number){ this.totalPrice = PrecioTotal; };
    public getTotalPrice(): number { return this.totalPrice; };

    private totalPriceCalculation(){
        let acumulador = 0;
        for( let i = 0 ; i < this.mobiles.length; i++ ){
            acumulador += this.mobiles[i].getPrice();
        };  
        return acumulador;
    };


};

export { MobileCollection }