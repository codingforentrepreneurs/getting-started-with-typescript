var SweetSweetBasil = (function () {
    function SweetSweetBasil(name) {
        console.log("Hello " + name);
    }
    SweetSweetBasil.prototype.color = function () {
        console.log("Green");
    };
    return SweetSweetBasil;
}());
var world = new SweetSweetBasil("World");
var basil = new SweetSweetBasil("basil");
basil.color();
world.color();
