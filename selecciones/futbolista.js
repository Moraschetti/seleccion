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
exports.Futbolista = void 0;
var seleccion_1 = require("./seleccion");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(posicion, club, camiseta, nombre, apellido, edad) {
        var _this = _super.call(this) || this;
        _this.posicion = posicion;
        _this.club = club;
        _this.camiseta = camiseta;
        return _this;
    }
    Futbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    Futbolista.prototype.getClub = function () {
        return this.club;
    };
    Futbolista.prototype.setClub = function (club) {
        this.club = club;
    };
    Futbolista.prototype.getCamiseta = function () {
        return this.camiseta;
    };
    Futbolista.prototype.setCamiseta = function (camiseta) {
        this.camiseta = camiseta;
    };
    return Futbolista;
}(seleccion_1.Seleccion));
exports.Futbolista = Futbolista;
