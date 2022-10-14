import { Tecnico } from "./tecnico";
import { Masajista } from "./masajista";
import { Futbolista } from "./futbolista";

export class Seleccion{
    //private cuerpoTecnico: Tecnico; 
    //private masajista: Masajista; 
    //private futbolista: Futbolista[]; 
    private pais: string;
    private nombre: string;
    private apellido: string;
    private edad: number;
    
    Constructor(/*tecnicos: Tecnico,masajistas:Masajista,futbolistas:Futbolista[]*/ paises:string,nombre:string,apellido:string,edad:number){
        //this.cuerpoTecnico = tecnicos;
        //this.masajista = masajistas;
        //this.futbolista = futbolistas;
        this.pais = paises;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getPais():string{
        return this.pais;
    }
    setPais(paises:string):void{
        this.pais = paises;
    }
    getNombre():string{
        return this.nombre;   
    }
    setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setApellido(apellido:string):void{
        this.apellido = apellido;
    }
    getEdad():number{
        return this.edad;
    }
    setEdad(edad:number){
        this.edad = edad;
    }
    
}
