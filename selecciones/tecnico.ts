import { Seleccion } from "./seleccion"; 
import { Futbolista } from "./futbolista";

export class Tecnico extends Seleccion{ 
    private titulo : number;

    constructor(futbolistas:Futbolista[],titulos:number,nombre:string,apellido:string,edad:number){ 
        super();
        this.titulo = titulos;
       }    
     getTitulo():number{
        return this.titulo;
    }
    setTitulo(titulos:number):void{
        this.titulo = titulos;
    }
       convocar(futbolistas:any):void{
        for(let i:number = 0; i < futbolistas.length; i++){
            if(futbolistas===true){
                console.log("el futbolista es convocado");
            }else(futbolistas==false);{
                console.log("el futbolista no esta convocado");
            }
        }
       }
}
