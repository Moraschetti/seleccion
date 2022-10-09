import { Seleccion } from "./seleccion";

export class Futbolista extends Seleccion{
    private posicion: string;
    private club: string;
    private camiseta: number;
    constructor(posicion:string,club:string,camiseta:number,nombre:string,apellido:string,edad:number){
        super();  
        this.posicion = posicion;
        this.club = club;
        this.camiseta = camiseta;
       }
    getPosicion():string{
        return this.posicion;
    }
    setPosicion(posicion:string):void{
        this.posicion = posicion;
    }
    getClub():string{
        return this.club;
    }
    setClub(club:string):void{
        this.club = club;
    }
    getCamiseta():number{
        return this.camiseta;
    }
    setCamiseta(camiseta:number):void{
        this.camiseta = camiseta;
    }
}