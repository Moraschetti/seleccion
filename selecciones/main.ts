import { Seleccion } from "./seleccion";
import { Tecnico } from "./tecnico";
import { Masajista } from "./masajista";
import { Futbolista } from "./futbolista";

let futbolista1: Futbolista = new Futbolista("arquero","River Plate",12,"Franco","Armani",34);
let futbolista2 : Futbolista = new Futbolista("delantero","Roma",24,"Paulo","Dybala",27);
let futbolista3 : Futbolista = new Futbolista("delantero","Manchester City",34,"Julian","Alvarez",23);
let futbolista4 : Futbolista = new Futbolista("delantero","PSG",10,"Lionel","Messi",34);
let futbolista5 : Futbolista = new Futbolista("mediocampista","Atletico Madrid",14,"Rodrigo","De Paul",28);
let futbolista6 : Futbolista = new Futbolista("arquero","West Ham",1,"Emiliano","Martinez",30);
let futbolista7 : Futbolista = new Futbolista("defensor","Porto",2,"Nicolas","Otamendi",33);
let futbolista8 : Futbolista = new Futbolista("mediocampista","Juventus",5,"Leandro","Paredes",27);
let futbolista9 : Futbolista = new Futbolista("mediocampista","Juventus",8,"Angel","Di Maria",34);
let futbolista10 : Futbolista = new Futbolista("delantero","Inter",9,"Lautaro","Martinez",25);
let futbolista11 : Futbolista = new Futbolista("defensor","Sevilla",4,"Marcos","Acuña",32);
let futbolista12 : Futbolista = new Futbolista("defensor","Mnachester United",6,"Lisandro","Martinez",25);

let listaFutbolistas:Futbolista[] =[futbolista1,futbolista2,futbolista3,futbolista4,futbolista5,futbolista6,futbolista7,futbolista8,futbolista9,futbolista10,futbolista11,futbolista12]; 
console.table(listaFutbolistas);

let tecnico1:Tecnico = new Tecnico([futbolista4,futbolista10,futbolista8],1,"Leonel","Scaloni",45);
tecnico1.convocar(futbolista1);
console.log(tecnico1);

let masajista1 = new Masajista("desgarro isquiotibial izquierdo",[futbolista1],"Rogelio","Gonzalez",54);
console.log( masajista1);


