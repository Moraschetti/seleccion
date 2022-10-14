"use strict";
exports.__esModule = true;
var tecnico_1 = require("./tecnico");
var masajista_1 = require("./masajista");
var futbolista_1 = require("./futbolista");
var futbolista1 = new futbolista_1.Futbolista("arquero", "River Plate", 12, "Franco", "Armani", 34);
var futbolista2 = new futbolista_1.Futbolista("delantero", "Roma", 24, "Paulo", "Dybala", 27);
var futbolista3 = new futbolista_1.Futbolista("delantero", "Manchester City", 34, "Julian", "Alvarez", 23);
var futbolista4 = new futbolista_1.Futbolista("delantero", "PSG", 10, "Lionel", "Messi", 34);
var futbolista5 = new futbolista_1.Futbolista("mediocampista", "Atletico Madrid", 14, "Rodrigo", "De Paul", 28);
var futbolista6 = new futbolista_1.Futbolista("arquero", "West Ham", 1, "Emiliano", "Martinez", 30);
var futbolista7 = new futbolista_1.Futbolista("defensor", "Porto", 2, "Nicolas", "Otamendi", 33);
var futbolista8 = new futbolista_1.Futbolista("mediocampista", "Juventus", 5, "Leandro", "Paredes", 27);
var futbolista9 = new futbolista_1.Futbolista("mediocampista", "Juventus", 8, "Angel", "Di Maria", 34);
var futbolista10 = new futbolista_1.Futbolista("delantero", "Inter", 9, "Lautaro", "Martinez", 25);
var futbolista11 = new futbolista_1.Futbolista("defensor", "Sevilla", 4, "Marcos", "Acuña", 32);
var futbolista12 = new futbolista_1.Futbolista("defensor", "Mnachester United", 6, "Lisandro", "Martinez", 25);
var listaFutbolistas = [futbolista1, futbolista2, futbolista3, futbolista4, futbolista5, futbolista6, futbolista7, futbolista8, futbolista9, futbolista10, futbolista11, futbolista12];
console.table(listaFutbolistas);
var tecnico1 = new tecnico_1.Tecnico([futbolista4, futbolista10, futbolista8], 1, "Leonel", "Scaloni", 45);
tecnico1.convocar(futbolista1);
console.log(" jugadores convocados por " + tecnico1);
var masajista1 = new masajista_1.Masajista("desgarro isquiotibial izquierdo", [futbolista1], "Rogelio", "Gonzalez", 54);
console.log(masajista1);