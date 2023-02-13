"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // Declaracion de Atributos en constructor   
    // Constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    // Metodos
    Point.prototype.setX = function (x) { this.x = x; };
    Point.prototype.getX = function () { return this.x; };
    ;
    Point.prototype.setY = function (y) { this.y = y; };
    Point.prototype.getY = function () { return this.y; };
    ;
    Point.prototype.toString = function () {
        var coordenadasString = "";
        coordenadasString = " \"(".concat(this.x, ",").concat(this.y, ")\"");
        return coordenadasString;
    };
    ;
    Point.prototype.distanceTolOrigin = function () {
        var distOrigen = Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
        return distOrigen;
    };
    ;
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distAnoth = Math.sqrt((Math.pow((anotherPoint.getX() - this.x), 2)) + (Math.pow((anotherPoint.getY() - this.y), 2)));
        return distAnoth;
    };
    ;
    Point.prototype.calcularQuadrant = function () {
        var cuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        ;
        return cuadrante;
    };
    ;
    Point.prototype.calculateNearest = function (points) {
        var d = this.calculateDistance(points[0]);
        var closest;
        for (var i = 0; i < points.length; i++) {
            if (this.calculateDistance(points[i]) < d) {
                d = this.calculateDistance(points[i]);
                closest = points[i];
            }
            ;
        }
        ;
        return closest;
    };
    ;
    return Point;
}());
exports.Point = Point;
;
