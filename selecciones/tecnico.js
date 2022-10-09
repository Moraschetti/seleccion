"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tecnico = void 0;
var seleccion_1 = require("./seleccion");
var Tecnico = /** @class */ (function (_super) {
    __extends(Tecnico, _super);
    function Tecnico(futbolistas, titulos, nombre, apellido, edad) {
        var _this = _super.call(this) || this;
        _this.titulo = titulos;
        return _this;
    }
    Tecnico.prototype.getTitulo = function () {
        return this.titulo;
    };
    Tecnico.prototype.setTitulo = function (titulos) {
        this.titulo = titulos;
    };
    Tecnico.prototype.convocar = function (futbolistas) {
        for (var i = 0; i < futbolistas.length; i++) {
            if (futbolistas === true) {
                console.log("el futbolista es convocado");
            }
            else
                (futbolistas == false);
            {
                console.log("el futbolista no esta convocado");
            }
        }
    };
    return Tecnico;
}(seleccion_1.Seleccion));
exports.Tecnico = Tecnico;
