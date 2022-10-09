import { Seleccion } from "./seleccion";
import { Futbolista } from "./futbolista";

export class Masajista extends Seleccion{
    private lesionDeFutbolista: any;

   constructor(lesiones:any,futbolistas:Futbolista[],nombre:string,apellido:string,edad:number){
     super();  
     this.lesionDeFutbolista = lesiones;
    }
     getLesion():any{
        return this.lesionDeFutbolista;
     }
     setLesion(lesiones:string):void{
        this.lesionDeFutbolista = lesiones;
     }
     tratarLesion(lesiones: any):void{
       for(let i:number = 0; i < this.lesionDeFutbolista.length; i++){
            if(lesiones.getLesion()===this.lesionDeFutbolista[i].getLesion()){
            }
        }console.log("la lesion es " + lesiones)
    }
}