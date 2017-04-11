var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil() {
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var world = new SweetSweetBasil();
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.color = startColor;
        return _this;
    }
    Basil.prototype.setNewColor = function (newColor) {
        this.color = newColor;
        _super.prototype.getColor.call(this);
    };
    return Basil;
}(SweetSweetBasil));
var basil3 = new Basil("basil", "brite green");
basil3.getColor();
basil3.setNewColor("Red");
basil3.getColor();
