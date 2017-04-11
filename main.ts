class SweetSweetBasil {
    constructor(name:string){
        console.log("Hello " + name)
    }
    color(){
        console.log("Green")
    }
}
let world = new SweetSweetBasil("World")
let basil = new SweetSweetBasil("basil")
basil.color()
world.color()