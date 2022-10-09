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
exports.Masajista = void 0;
var seleccion_1 = require("./seleccion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(lesiones, futbolistas, nombre, apellido, edad) {
        var _this = _super.call(this) || this;
        _this.lesionDeFutbolista = lesiones;
        return _this;
    }
    Masajista.prototype.getLesion = function () {
        return this.lesionDeFutbolista;
    };
    Masajista.prototype.setLesion = function (lesiones) {
        this.lesionDeFutbolista = lesiones;
    };
    Masajista.prototype.tratarLesion = function (lesiones) {
        for (var i = 0; i < this.lesionDeFutbolista.length; i++) {
            if (lesiones.getLesion() === this.lesionDeFutbolista[i].getLesion()) {
            }
        }
        console.log("la lesion es " + lesiones);
    };
    return Masajista;
}(seleccion_1.Seleccion));
exports.Masajista = Masajista;
