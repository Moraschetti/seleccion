"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion() {
    }
    Seleccion.prototype.Constructor = function (/*tecnicos: Tecnico,masajistas:Masajista,futbolistas:Futbolista[]*/ paises, nombre, apellido, edad) {
        //this.cuerpoTecnico = tecnicos;
        //this.masajista = masajistas;
        //this.futbolista = futbolistas;
        this.pais = paises;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };
    Seleccion.prototype.getPais = function () {
        return this.pais;
    };
    Seleccion.prototype.setPais = function (paises) {
        this.pais = paises;
    };
    Seleccion.prototype.getNombre = function () {
        return this.nombre;
    };
    Seleccion.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Seleccion.prototype.getApellido = function () {
        return this.apellido;
    };
    Seleccion.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Seleccion.prototype.getEdad = function () {
        return this.edad;
    };
    Seleccion.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
